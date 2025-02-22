---
author:
  avatar: https://avatars.githubusercontent.com/u/16745751?v=4
  email: null
  name: pengzhanbo
  url: null
  username: pengzhanbo
bugs: https://github.com/pengzhanbo/vuepress-theme-plume/issues
category: themes
date: '2022-03-13T18:14:51.157Z'
deprecated: false
description: blog theme by vuepress2.x
downloads: null
homepage: https://github.com/pengzhanbo/vuepress-theme-plume
keywords:
- vuepress-next
- vuepress
- vuepress-theme
license: MIT License
maintainers: null
name: '@pengzhanbo/vuepress-theme-plume'
npm: https://www.npmjs.com/package/%40pengzhanbo%2Fvuepress-theme-plume
publisher:
  avatar: null
  email: volodymyr@foxmail.com
  name: null
  url: null
  username: pengzhanbo
repository: https://github.com/pengzhanbo/vuepress-theme-plume
score: 0.49780437276537615
stars: 7
unstable: true
version: 1.0.0-beta.7
watchers: 7

---

## @vuepress-plume/vuepress-theme-plume

一个简约的 vuepress 主题。

开箱即用，仅需少量配置即可使用。

![npm version](https://badge.fury.io/js/@vuepress-plume%2Fvuepress-theme-plume.svg)
![npm download](https://img.shields.io/npm/dm/@vuepress-plume/vuepress-theme-plume?style=flat)

### [查看文档](https://pengzhanbo.cn/note/vuepress-theme-plume)

## Install

``` sh
yarn add vuepress@next @vuepress-plume/vuepress-theme-plume
```

## Usage

``` ts
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from '@vuepress-plume/vuepress-theme-plume'
export default defineUserConfig({
  theme: plumeTheme({
    // theme config
  })
})
```

### `plumeTheme(options)`

__options__ : `PlumeThemeOptions`

[查看 options 详细说明](https://pengzhanbo.cn/note/vuepress-theme-plume/theme-config/)

## 案例

- [我的个人博客](https://pengzhanbo.cn/)

### 效果图

![](/docs/preview-home.png)

![](/docs/preview-blog.png)

![](/docs/preview-note.png)
  

## 内置插件

- [plugin-caniuse](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-caniuse) 在文档中使用 caniuse 提供的 web feature support list
- [plugin-auto-frontmatter](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-auto-frontmatter) 在 md 文件中根据匹配规则自动生成 frontmatter
- [plugin-notes-data](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-notes-data) 根据规则，将 md文件归类为 note，并生成 sidebar
- [plugin-blog-data](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-blog-data) 根据规则，将md文件归类为 blog post，并生成 post list
- [vuepress-plugin-mdEnhance](https://vuepress-theme-hope.github.io/v2/md-enhance/zh/) 增强markdown功能插件
- [vuepress-plugin-comment](https://vuepress-theme-hope.github.io/v2/comment/zh/) 文章评论插件，支持 "giscus" | "twikoo" | "waline"
- [vuepress-plugin-copy-code](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-copy-code) 文章内代码块复制插件
- [vuepress-plugin-medium-zoom](https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html) 图片预览插件
- [vuepress-plugin-prismjs](https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html) 代码块高亮插件
- [vuepress-plugin-search](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html) 内容搜索插件
- [vuepress-plugin-docsearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html) Algolia docsearch 内容搜索插件
- [vuepress-plugin-palette](https://v2.vuepress.vuejs.org/zh/reference/plugin/palette.html) 主题调色板插件
- [vuepress-plugin-seo](https://vuepress-theme-hope.github.io/v2/seo/zh/) seo 插件
- [vuepress-plugin-sitemap](https://vuepress-theme-hope.github.io/v2/sitemap/zh/) 生成sitemap 插件

## 非内置插件

- [vuepress-plugin-netlify-functions](https://github.com/pengzhanbo/vuepress-theme-plume/tree/main/packages/plugin-netlify-functions) 当站点部署在 netlify 时，希望使用 netlify functions 可选择此插件提供支持
### 注意

本主题基于 `VuePress2` ，仍处于 Beta 阶段。

这意味着功能尚未完善，在未来有概率发生破坏性更改。
