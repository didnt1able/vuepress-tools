(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{703:function(t,a,s){"use strict";s.r(a);var e=s(50),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-自定义主题说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-自定义主题说明"}},[t._v("#")]),t._v(" vuepress 自定义主题说明")]),t._v(" "),s("blockquote",[s("p",[t._v("vuepress-theme-bhabgs 完全按照 vuepress 官网要求进行开发，并集成了 vuepress-default-theme")])]),t._v(" "),s("h2",{attrs:{id:"一、使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、使用说明"}},[t._v("#")]),t._v(" 一、使用说明")]),t._v(" "),s("blockquote",[s("p",[t._v("如需使用最新功能 请将插件更新至最新版本")])]),t._v(" "),s("h2",{attrs:{id:"二、安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、安装"}},[t._v("#")]),t._v(" 二、安装")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("vuepress-theme-bhabgs")]),t._v(" 组件时必须安装的")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("``` bash\nnpm i -D vuepress-theme-bhabgs\n```\n")])])]),s("h3",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("blockquote",[s("p",[t._v("在 "+t._s(t.docs)+"/.vuepress>config.js 添加如下配置\n请注意因为该主题是以 vuepress-theme- 开头，你可以使用缩写来省略这个前缀")])]),t._v(" "),s("h4",{attrs:{id:"plan-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-1"}},[t._v("#")]),t._v(" plan 1")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bhabgs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"plan-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-2"}},[t._v("#")]),t._v(" plan 2")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-bhabgs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、组件内部自定义组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、组件内部自定义组件"}},[t._v("#")]),t._v(" 三、组件内部自定义组件")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("templateMobile")]),t._v(" "),s("li",[t._v("templatePc")])])]),t._v(" "),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),s("blockquote",[s("p",[t._v("可以直接在 引入该主题的 vuepress 文档内进行标签使用\n"),s("code",[t._v("<templateMobile />")]),t._v(" 组件 每个 content 容器 有且只有一个 name 生效")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("templateMobile name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Button-index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/docs/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("templateMobile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("展示手机端效果")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("any string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("‘’")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("h2",{attrs:{id:"四、自定义渲染模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、自定义渲染模板"}},[t._v("#")]),t._v(" 四、自定义渲染模板")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("explain title")]),t._v(" "),s("li",[t._v("explain language")])])]),t._v(" "),s("h3",{attrs:{id:"_1-markdown-模板拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-markdown-模板拦截"}},[t._v("#")]),t._v(" 1. markdown 模板拦截")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" explain any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstring "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-markdown-code-模板拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-markdown-code-模板拦截"}},[t._v("#")]),t._v(" 1. markdown code 模板拦截")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" explain any{title}\n        string code\n    ")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);