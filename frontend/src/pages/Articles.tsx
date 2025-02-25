// Articles.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import PageNotFound from '@/components/PageNotFound'
import MarkdownRenderer from '@/components/MarkdownRenderer';

const readMarkdown = async (path: string): Promise<string> => {
  try {
    const response = await fetch(path);  // 假设文件在 public 目录下
    if (!response.ok) {
      throw new Error('File not found');
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching markdown file:', error);
    return '';
  }
};

import { t_articleType } from '@/utils/type';

const Articles = () => {
  // 初始化为一个空数组，类型为 Article[]
  const [articles, setArticles] = useState<t_articleType[]>([]);

  // 获取文章的函数
  const fetchArticles = async () => {
    const response = await fetch("http://localhost:8000/api/articles");
    const data: t_articleType[] = await response.json();  // 确保类型为 Article[]
    setArticles(data);  // 更新 articles 状态
  };

  return (
    <div>
      <button onClick={fetchArticles}>Load Articles</button>
      {/* 显示文章列表 */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index}>
            <h2>{article.name}</h2>
            <h2>{article.meta.title}</h2>
            {/* <p>{article.meta.date}</p> */}
            <p>{article.meta.categories}</p>
            <img src={article.img_path} alt={article.meta.title} />
          </div>
        ))
      ) : (
        <p>No articles loaded.</p>
      )}
    </div>
  );
};

export default Articles;
