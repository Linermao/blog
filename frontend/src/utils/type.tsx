export interface t_frontMatter {
    title: string;
    date: Date;
    // tags: string[];
    categories: string;
    cover: string;
}

// 文章头部信息
interface t_articleMeta {
    title: string;
    date: Date;
    // tags: string[];
    categories: string;
    cover: string;
  }
  
// 文章条目，包含头部信息和路径信息
export interface t_articleType {
  name: string;         // 文件名，不带扩展名
  path: string;         // 文件相对于 articles 文件夹的路径
  img_path: string;     // 图片路径
  meta: t_articleMeta;    // 文章头部信息
}
  