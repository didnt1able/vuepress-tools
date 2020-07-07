(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{954:function(t,s,e){"use strict";e.r(s);var a=e(50),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"yuicer-vuepress-theme-yuicer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yuicer-vuepress-theme-yuicer"}},[t._v("#")]),t._v(" @yuicer/vuepress-theme-yuicer")]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://github.com/yuicer/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例项目"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://blog.yuicer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("页面预览"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("theme for vuepress")])]),t._v(" "),e("blockquote",[e("p",[t._v("由于之前一直在用 hexo ，所以有些功能会和 hexo 比较类似，比如页面的样式，文件目录结构的约定【 _post , _draft 】，脚手架命令【 hexo new xxx】 => 【vuepress new docs xxx】，docs 为你的文档站点目录，等同与 "),e("code",[t._v("vuepress dev docs")]),t._v(" , "),e("code",[t._v("vuepress build docs")]),t._v(" 这两条命令中的 docs。")])]),t._v(" "),e("h2",{attrs:{id:"安装使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[t._v("#")]),t._v(" 安装使用")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @yuicer/vuepress-theme-yuicer\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@yuicer/yuicer'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docs\n  |- .vuepress\n  | |- config.js\n  |- _post\n  | |- post.md\n  |- _draft\n  | |- draft.md\n")])])]),e("p",[t._v("由于使用了 plugin-blog 插件，文章请放在 _post 目录下")]),t._v(" "),e("p",[e("strong",[t._v("草稿功能")]),t._v(" _draft 用于存放暂不想发布的文稿，⚠️ 这些文稿不会在博客系统中有入口，但依然会被编译，有可以访问到的链接 url")]),t._v(" "),e("h3",{attrs:{id:"mathjax-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mathjax-支持"}},[t._v("#")]),t._v(" mathjax 支持")]),t._v(" "),e("p",[t._v("主题内置了 "),e("a",{attrs:{href:"https://github.com/waylonflinn/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-katex"),e("OutboundLink")],1),t._v(", 用来支持数学公式，例如矩阵等复杂操作，"),e("a",{attrs:{href:"http://waylonflinn.github.io/markdown-it-katex/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线尝试地址"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"命令行功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行功能"}},[t._v("#")]),t._v(" 命令行功能")]),t._v(" "),e("p",[t._v("全局安装 vuepress 脚手架功能 "),e("code",[t._v("npm i vuepress -g")])]),t._v(" "),e("p",[t._v("在安装成功本主题后，使用 "),e("code",[t._v("vuepress --help")]),t._v(" 可看到下面的新命令 new")]),t._v(" "),e("p",[e("code",[t._v("vuepress new [targetDir] [title]")]),t._v(" 可以方便生成 md 文件。 targetDir 是你的文件目录，类似与上面目录结构的 docs，因为 vuepress 必须知道目标位置，所以必须有这一个路径参数。")]),t._v(" "),e("blockquote",[e("p",[t._v("A custom command registered by a plugin requires VuePress to locate your site configuration like vuepress dev or vuepress build.")]),t._v(" "),e("p",[t._v("所以一般使用类似于 "),e("code",[t._v("vuepress new docs 一起去散步吧～")]),t._v("。")])]),t._v(" "),e("p",[t._v("生成的 md 会自动生成 yaml 结构，也可以通过 "),e("code",[t._v("--tpl <template>")]),t._v(" 的方式传入一个字符串来自己构造 yaml")]),t._v(" "),e("h3",{attrs:{id:"图片系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片系统"}},[t._v("#")]),t._v(" 图片系统")]),t._v(" "),e("p",[t._v("图片引用有两种形式，一种是使用完整外链【推荐】【请使用 https 图片】，另一种则是借助 vuepress 提供的 $withBase 。需要将资源图片放在 .vuepress/public/ 文件夹下，然后提供一个绝对路径，该主题会自动使用 $withBase 解析")]),t._v(" "),e("p",[t._v("相关文档 "),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://v1.vuepress.vuejs.org/zh/guide/assets.html#%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"文章上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章上下文"}},[t._v("#")]),t._v(" 文章上下文")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/yuicer/vuepress-theme-yuicer/master/packages/vuepress-plugin-sorted-pages/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-sorted-pages"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("该插件会自动将当前文章的上一篇和下一篇文章取到后放在全局计算属性 $sortedPage 中")]),t._v(" "),e("h3",{attrs:{id:"配置项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[t._v("#")]),t._v(" 配置项目")]),t._v(" "),e("h4",{attrs:{id:"主题配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("themeConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面的背景图片")]),t._v("\n  bgImg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://img.yuicer.com/bg/beach.jpg'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面的背景颜色")]),t._v("\n  bgColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f3edeb'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 谷歌分析 id")]),t._v("\n  ga"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"md-yaml-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#md-yaml-配置"}},[t._v("#")]),t._v(" md yaml 配置")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文章标题[必须字段]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 摸鱼鱼\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日期 推荐填写如下格式（会传入 new Date()）[必须字段]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2018-05-04 19:18:40")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签, 支持多个")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tag1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tag1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tag2\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 列表页封面样式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列表封面，在列表页展示，同时会自动在详情页生成一个该 <img/> 标签")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("img")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /niconiconi.jpg\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封面样式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imgStyle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封面列表默认采用列式布局，isFullRow 为 true 时该封面卡片会占满一整行")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("isFullRow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);