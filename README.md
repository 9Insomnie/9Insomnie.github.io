# 🕶️ Hacker Blog - 黑客风格博客

> 一个充满赛博朋克风格的 Jekyll 博客主题

[![Build Status](https://github.com/9Insomnie/9Insomnie.github.io/workflows/Build%20and%20deploy%20Jekyll%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/9Insomnie/9Insomnie.github.io/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Hacker Theme](https://img.shields.io/badge/theme-hacker-green.svg)](https://github.com/9Insomnie/9Insomnie.github.io)

[![Build Status](https://github.com/9Insomnie/9Insomnie.github.io/workflows/Build%20and%20deploy%20Jekyll%20site%20to%20GitHub%20Pages/badge.svg)](https://github.com/9Insomnie/9Insomnie.github.io/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌟 黑客主题特色

### 🎨 视觉特效
- **矩阵雨背景** - 经典的矩阵代码雨动画效果
- **故障艺术(Glitch Art)** - 标题和元素的故障风格动画
- **终端风格** - 模拟黑客终端的界面设计
- **赛博朋克配色** - 霓虹绿、紫色、蓝色的黑客配色方案
- **等宽字体** - 使用编程字体营造技术氛围

### ✨ 交互体验
- **鼠标轨迹** - 鼠标移动时产生发光轨迹效果
- **打字机效果** - 终端命令的逐字显示动画
- **数字雨效果** - 页面上的二进制数字飘落
- **发光边框** - 悬停时的霓虹发光效果
- **扫描线动画** - 页面顶部的扫描线效果

### 🎯 页面组件
- **黑客头部** - 终端风格的系统状态栏
- **终端窗口** - 模拟命令行界面的内容展示
- **系统面板** - 显示博客运行状态的监控面板
- **404错误页** - 入侵检测风格的错误页面
- **关于页面** - 系统信息终端风格的个人介绍

## 🚀 技术栈

### 核心技术
- **Jekyll** - 静态网站生成器
- **GitHub Pages** - 免费托管服务
- **Markdown** - 内容写作格式
- **CSS3** - 黑客风格样式
- **JavaScript** - 特效和交互功能
- **Liquid** - 模板引擎

### 特效技术
- **Canvas API** - 矩阵雨和数字雨动画
- **CSS动画** - 故障艺术和发光效果
- **Web Fonts** - 等宽编程字体
- **响应式设计** - 移动端适配

## 📖 本地开发

### 环境要求

- Ruby 2.7.0 或更高版本
- Jekyll 4.0 或更高版本
- Bundler

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/9Insomnie/9Insomnie.github.io.git
   cd 9Insomnie.github.io
   ```

2. **安装依赖**
   ```bash
   bundle install
   ```

3. **本地运行**
   ```bash
   bundle exec jekyll serve
   ```

4. **访问博客**
   打开浏览器访问 `http://localhost:4000`

## 📝 写作指南

### 创建新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式为：`YYYY-MM-DD-文章标题.md`

```markdown
---
layout: post
title: "文章标题"
date: 2025-12-03 10:00:00 +0800
categories: [技术, 生活]
tags: [Jekyll, GitHub, 教程]
---

这里是文章内容...
```

### 文章配置说明

| 参数 | 说明 | 必需 |
|------|------|------|
| `layout` | 页面布局，通常使用 `post` | ✅ |
| `title` | 文章标题 | ✅ |
| `date` | 发布日期 | ✅ |
| `categories` | 文章分类 | ❌ |
| `tags` | 文章标签 | ❌ |
| `excerpt` | 文章摘要 | ❌ |
| `image` | 文章封面图 | ❌ |

## 🎨 自定义配置

### 黑客主题配置

编辑 `_config.yml` 文件配置黑客主题：

```yaml
# 站点信息
title: "Hacker Blog"
description: "[root@hacker-blog ~]# ./share-knowledge.sh"
author: "9Insomnie"

# 黑客主题设置
hacker_theme:
  enable_matrix_rain: true      # 启用矩阵雨效果
  enable_mouse_trail: true      # 启用鼠标轨迹
  enable_glitch_effects: true   # 启用故障艺术效果
  enable_terminal_effects: true # 启用终端效果
  color_scheme: "cyberpunk"     # cyberpunk, matrix, neon
  font_family: "monospace"      # 等宽字体
  show_system_status: true      # 显示系统状态
  show_hacker_header: true      # 显示黑客头部
```

### 主题定制

- **颜色方案**: 修改 `_sass/_variables.scss`
- **布局样式**: 修改 `_layouts/` 目录下的文件
- **页面组件**: 修改 `_includes/` 目录下的文件

## 🔧 功能扩展

### 添加评论系统

支持 Disqus、Gitalk、Utterances 等评论系统，配置方法：

1. 在 `_config.yml` 中启用评论
2. 配置相应的评论系统参数
3. 在 `_layouts/post.html` 中添加评论代码

### 添加统计分析

支持 Google Analytics、百度统计等：

```yaml
# _config.yml
google_analytics: UA-XXXXXXXX-X
baidu_analytics: your_baidu_code
```

### 添加搜索功能

使用 Jekyll 搜索插件或集成第三方搜索服务：

```yaml
# _config.yml
search: true
```

## 📱 部署说明

### 自动部署

本博客使用 GitHub Actions 实现自动部署：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建
3. 自动部署到 GitHub Pages

### 手动部署

如果需要手动部署：

```bash
# 构建静态文件
bundle exec jekyll build

# 部署到服务器（示例）
rsync -avz --delete _site/ user@server:/var/www/html/
```

## 🎯 性能优化

- **图片优化**: 使用 WebP 格式，压缩图片大小
- **代码压缩**: 自动压缩 CSS 和 JavaScript
- **缓存策略**: 合理设置浏览器缓存
- **CDN加速**: 使用 CDN 加速静态资源
- **懒加载**: 图片懒加载，提升页面加载速度

## 🔍 SEO优化

- **元标签**: 完整的页面元信息
- **结构化数据**: 支持 JSON-LD 结构化数据
- **Sitemap**: 自动生成网站地图
- **社交媒体**: 支持 Open Graph 和 Twitter Cards

## 📊 项目结构

```
├── _config.yml          # 主配置文件
├── _includes/           # 可复用组件
├── _layouts/            # 页面布局模板
├── _posts/              # 博客文章
├── _sass/               # Sass 样式文件
├── _site/               # 生成的静态文件
├── assets/              # 静态资源
│   ├── css/
│   ├── js/
│   └── images/
├── .github/
│   └── workflows/       # GitHub Actions 工作流
├── _pages/              # 独立页面
└── README.md            # 项目说明
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📝 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 🙏 致谢

- [Jekyll](https://jekyllrb.com/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管服务
- [Minima](https://github.com/jekyll/minima) - Jekyll 默认主题
- 所有贡献者和支持者

## 📞 联系方式

- **GitHub**: [@9Insomnie](https://github.com/9Insomnie)
- **邮箱**: your-email@example.com
- **博客**: [https://9insomnie.github.io](https://9insomnie.github.io)

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！

**Happy Blogging!** 🎉