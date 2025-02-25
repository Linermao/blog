---
title: ArchLinux CUDA 等显卡适配
date: 2024-9-18 16:23:10
categories: LinuxSystem
cover: '/img/top-img/LinuxSystem/ArchLinuxInstall.png'
---


## API

### PreviewLayout

| 参数     | 说明                       | 类型 | 默认值 | 版本  |
| :------- | :------------------------- | :--: | :----: | :---: |
| children | 传递的组件，可以是任意组件 | jsx  |  null  | 0.1.0 |

### MdPreviewer

| 参数 | 说明          |  类型  | 默认值 | 版本  |
| :--- | :------------ | :----: | :----: | :---: |
| md   | markdown 文档 | string |  null  | 0.1.0 |

### CodePreviewer

| 参数     | 说明           |  类型  | 默认值 | 版本  |
| :------- | :------------- | :----: | :----: | :---: |
| code     | 要显示的代码   | string |  null  | 0.0.1 |
| showCode | 是否要展示代码 |  bool  |  true  | 0.1.0 |

# Sample Markdown File

## Introduction
Welcome to the world of Markdown! This file demonstrates the basic syntax elements of Markdown.

## Text Formatting
You can make text **bold** or *italic* easily using Markdown syntax.

## Lists
- Unordered List Item 1
- Unordered List Item 2
  - Sublist Item
- Unordered List Item 3

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

## Code
Inline code can be highlighted like `this`. For blocks of code, use triple backticks:
```python
def greet():
    print("Hello, Markdown!")
```