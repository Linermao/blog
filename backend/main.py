from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from typing import List
from pydantic import BaseModel

app = FastAPI()

# GitHub 仓库的相关信息
GITHUB_OWNER = "Linermao"
GITHUB_REPO = "articles"
GITHUB_BRANCH = "main"
GITHUB_API_URL = f"https://api.github.com/repos/{GITHUB_OWNER}/{GITHUB_REPO}/contents/LinuxSystem"


origins = [
    "http://localhost:5173",  # 允许来自 Vite 开发服务器的请求
    # "https://yourfrontend.com",  # 如果你部署到线上，可以添加你的网站
]

# 启用 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 允许的域名列表
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有 HTTP 方法
    allow_headers=["*"],  # 允许所有请求头
)

class Article(BaseModel):
    name: str
    path: str
    img_path: str
    content: str

# 获取 GitHub 仓库中文件的 API
def fetch_files_from_github():
    response = requests.get(GITHUB_API_URL)
    response.raise_for_status()  # If response status code is not 200, it will raise an error.
    return response.json()  # This will return the file list in the repository.

# 获取文件的内容
def fetch_file_content(file_path: str):
    url = f"https://api.github.com/repos/{GITHUB_OWNER}/{GITHUB_REPO}/contents/{file_path}"
    # url = f"https://raw.githubusercontent.com/{GITHUB_OWNER}/{GITHUB_REPO}/{GITHUB_BRANCH}/{file_path}"
    response = requests.get(url)
    response.raise_for_status()
    return response.text['content']

# 获取文章列表并生成返回数据
@app.get("/api/articles", response_model=List[Article])
async def get_articles():
    try:
        files = fetch_files_from_github()
        articles = []

        for file in files:
            if file['name'].endswith('.md'):
                file_path = file['path']
                article = Article(
                    name=file['name'].replace('.md', ''),
                    path=file_path,
                    img_path=f"{file_path.replace('.md', '')}/",
                    content=fetch_file_content(file_path)
                )
                articles.append(article)

        return articles
    except Exception as e:
        print(f"Error: {str(e)}")  # 捕获并打印错误
        return JSONResponse(status_code=500, content={"message": str(e)})


# 示例：获取单个文章的内容
@app.get("/api/articles/{article_name}")
async def get_article_content(article_name: str):
    try:
        # 假设每个文章的名称和路径一致
        file_path = f"articles/{article_name}.md"
        content = fetch_file_content(file_path)
        return {"content": content}
    except requests.exceptions.RequestException as e:
        return JSONResponse(status_code=500, content={"message": str(e)})

