(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{699:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-theme-mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-mount"}},[t._v("#")]),t._v(" vuepress-theme-mount")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("code",[t._v("vuepress-theme-mount")]),t._v(" 这个主题来源于作者想要实现属于自己的博客，在众多 "),a("code",[t._v("WordPress")]),t._v("，"),a("code",[t._v("hexo")]),t._v("等较为成熟的博客中选择了一个并未广泛使用的 "),a("code",[t._v("vuepress")]),t._v(" 作为基础开发而来。由于在开发时关于 "),a("code",[t._v("vuepress")]),t._v(" 的开发文档并不全，对于想要使用 "),a("code",[t._v("vuepress")]),t._v(" 开发自定义主题的开发者不友好，在开发的同时写了一篇教程："),a("a",{attrs:{href:"https://juejin.im/post/6869565504756023310",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 开发个人博客进阶之自定义主题"),a("OutboundLink")],1),t._v(" 帮助大家，对于开发主题有任何疑问，可在这篇文章中先查找。")]),t._v(" "),a("h2",{attrs:{id:"预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[t._v("#")]),t._v(" 预览")]),t._v(" "),a("ul",[a("li",[t._v("「首页」\n"),a("img",{attrs:{src:"https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo1.png",alt:"image"}})]),t._v(" "),a("li",[t._v("「首页入口」\n"),a("img",{attrs:{src:"https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo2.png",alt:"image"}})]),t._v(" "),a("li",[t._v("「笔记」\n"),a("img",{attrs:{src:"https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo3.png",alt:"image"}})]),t._v(" "),a("li",[t._v("「读书」\n"),a("img",{attrs:{src:"https://github.com/Gesj-yean/vuepress-theme-mount/raw/master/assets/img/demo4.png",alt:"image"}})])]),t._v(" "),a("h2",{attrs:{id:"主题安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题安装"}},[t._v("#")]),t._v(" 主题安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i vuepress-theme-mount\nnpm i pug // 主题采用 pug 开发\nnpm i pug-plain-loader\n")])])]),a("h2",{attrs:{id:"主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),a("ul",[a("li",[t._v("record 文件夹")])]),t._v(" "),a("blockquote",[a("p",[t._v("该文件夹用于记录博客。必须有一个 "),a("code",[t._v("README.md")]),t._v("，内容如下：")])]),t._v(" "),a("div",{staticClass:"language-README.md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: RecordLayout\ndescription: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'\n---\n")])])]),a("blockquote",[a("p",[t._v("其他博客格式如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: ContentPage\ndescription: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'\nlastUpdated: '2020-01-01'\n---\n# 内容\n")])])]),a("ul",[a("li",[t._v("read 文件夹")])]),t._v(" "),a("blockquote",[a("p",[t._v("该文件夹用于记录读书笔记。必须有一个 "),a("code",[t._v("README.md")]),t._v("，内容如下：")])]),t._v(" "),a("div",{staticClass:"language-README.md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: ReadLayout\n---\n")])])]),a("blockquote",[a("p",[t._v("其他博客格式如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: ContentPage\n---\n# 内容\n")])])]),a("ul",[a("li",[t._v("project 文件夹")])]),t._v(" "),a("blockquote",[a("p",[t._v("该文件夹用于记录项目总结。必须有一个 "),a("code",[t._v("README.md")]),t._v("，内容如下：")])]),t._v(" "),a("div",{staticClass:"language-README.md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: ProjectLayout\ndescription: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'\nlastUpdated: '2020-01-01'\n---\n")])])]),a("blockquote",[a("p",[t._v("其他博客格式如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: ContentPage\ndescription: '这里有一些技巧，可以帮助你更好地优化 JavaScript 代码，从而提高性能。'\nlastUpdated: '2020-01-03'\n---\n# 内容\n")])])]),a("ul",[a("li",[t._v("other 文件夹")])]),t._v(" "),a("blockquote",[a("p",[t._v("该文件夹用于一段小文字。必须有一个 "),a("code",[t._v("README.md")]),t._v("，内容如下，注意，这一段 "),a("code",[t._v("description")]),t._v(" 需要与正文内容相同。")])]),t._v(" "),a("div",{staticClass:"language-README.md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: OtherLayout\ntitle: 'xx感想'\ndescription: // 全部内容\n---\n# 标题\n// 全部内容\n")])])]),a("blockquote",[a("p",[t._v("其他博客格式如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nlayout: OtherLayout\ntitle: 'xx感想'\ndescription: // 全部内容\n---\n# 标题\n// 全部内容\n")])])]),a("h2",{attrs:{id:"首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),a("p",[t._v("主题提供了一个首页 (Homepage) 的布局。想要使用它，需要在根级 README.md 的 YAML front matter 指定 home: true。")]),t._v(" "),a("p",[t._v("以下是一个如何使用的例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# /README.md\n---\nmessage: Welcome to my Blog\nactionText: Start →\nactionLink: /about\nfeatures:\n- title: 笔记\n  link: /record\n  details: 行走的每一步。\n- title: 读书\n  link: /read\n  details: 读书是要有笔记的呀。\n- title: 项目 Mark\n  link: /project\n  details: 每一段的记录，这是我的脚步。\n- title: 吧啦吧啦\n  link: /other\n  details: 来这里说一说。\nlinks:\n- title: Github\n  link: https://github.com/Gesj-yean\n  icon: github\n- title: 掘金\n  link: https://juejin.im/user/2189882895384221\n  icon: juejin\n---\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);