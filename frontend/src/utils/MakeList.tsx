import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';

import { t_frontMatter, t_articleType } from './type';

type ArticleList = t_articleType[];

const generateArticleList = (baseDir: string): ArticleList => {
  const articlesDir = path.resolve(baseDir, 'articles');
  const articleList: ArticleList = [];

  const folders = fs.readdirSync(articlesDir, { withFileTypes: true }).filter((dir) => dir.isDirectory());

  folders.forEach((folder) => {
    const folderPath = path.join(articlesDir, folder.name);

    const markdownFiles = fs.readdirSync(folderPath).filter((file) => file.endsWith('.md'));

    markdownFiles.forEach((markdownFile) => {
      const markdownFilePath = path.join(folderPath, markdownFile);
      const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
      const { attributes } = frontMatter(markdownContent); 

      const imgFolderPath = path.join(folderPath, folder.name);
      const imgFiles = fs.readdirSync(imgFolderPath).filter((file) => file.endsWith('.png') || file.endsWith('.jpg'));

      if (imgFiles.length > 0) {
        const imgFile = imgFiles[0];  // 取第一个图片文件
        const imgPath = path.join('articles', folder.name, folder.name, imgFile); // 生成图片的相对路径

        const { title, date, categories, cover } = attributes as t_frontMatter;

        const articleEntry: t_articleType = {
          name: markdownFile.replace('.md', ''),  // 文件名去掉扩展名
          path: path.join('articles', folder.name, markdownFile),
          img_path: imgPath,
          meta: {
            title: title,
            date: new Date(date),
            categories: categories,
            cover: cover,
          },
        };

        articleList.push(articleEntry);
      }
    });
  });

  return articleList;
};

const saveArticleListToFile = (baseDir: string, articleList: ArticleList): void => {
  const outputFilePath = path.resolve(baseDir, 'articles', 'article_list.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(articleList, null, 2), 'utf-8');
  console.log(`Article list saved to ${outputFilePath}`);
};

export { generateArticleList, saveArticleListToFile };

// const articleList = generateArticleList(__dirname);
// saveArticleListToFile(__dirname, articleList);
