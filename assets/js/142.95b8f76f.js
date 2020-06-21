(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{615:function(t,e,a){"use strict";a.r(e);var s=a(50),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-new"}},[t._v("#")]),t._v(" vuepress-plugin-new")]),t._v(" "),a("blockquote",[a("p",[t._v("This plugin requires VuePress >= "),a("strong",[t._v("1.0.0")]),t._v(".")])]),t._v(" "),a("p",[t._v("A vuepress command-line plugin to create markdown file just like "),a("code",[t._v("hexo new 'hello world'")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/Baofeng/vuepress-plugin-new/master/zh/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文说明"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[t._v("Auto create post markdown file in current directory")]),t._v(" "),a("li",[t._v("Auto inject basic frontmatter config in post file")]),t._v(" "),a("li",[t._v("Create post by default, use options "),a("code",[t._v("-d/--draft")]),t._v(" to create a draft")]),t._v(" "),a("li",[t._v("Auto fix file conflict")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-new\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"using-this-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-this-plugin"}},[t._v("#")]),t._v(" Using this plugin:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-export'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_post'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"then-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#then-run"}},[t._v("#")]),t._v(" Then run:")]),t._v(" "),a("p",[t._v("New post named "),a("em",[t._v("hello vuepress")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vuepress new "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello vuepress'")]),t._v("\n")])])]),a("p",[t._v("New draft named "),a("em",[t._v("hello vuepress latter")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vuepress new "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello vuepress latter'")]),t._v(" -d/--draft\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("base")]),t._v(" "),a("ul",[a("li",[t._v("Type: string")]),t._v(" "),a("li",[t._v("Default: '.'")])]),t._v(" "),a("p",[t._v("Provide the base path in the blog directory")]),t._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/x-bao/vuepress-plugin-new\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-plugin-new\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),a("ol",[a("li",[t._v("Fork it!")]),t._v(" "),a("li",[t._v("Create your feature branch: "),a("code",[t._v("git checkout -b my-new-feature")])]),t._v(" "),a("li",[t._v("Commit your changes: "),a("code",[t._v("git commit -am 'Add some feature'")])]),t._v(" "),a("li",[t._v("Push to the branch: "),a("code",[t._v("git push origin my-new-feature")])]),t._v(" "),a("li",[t._v("Submit a pull request 😛")])]),t._v(" "),a("h2",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),a("p",[a("strong",[t._v("vuepress-plugin-new")]),t._v(" © "),a("a",{attrs:{href:"https://github.com/x-bao",target:"_blank",rel:"noopener noreferrer"}},[t._v("San Baofeng"),a("OutboundLink")],1),t._v(", Released under the "),a("a",{attrs:{href:"https://raw.githubusercontent.com/Baofeng/vuepress-plugin-new/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),a("OutboundLink")],1),t._v(" License."),a("br"),t._v("\nAuthored and maintained by San Baofeng")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://arts.sanbaofengs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("San Baofeng's"),a("OutboundLink")],1),t._v(" · GitHub "),a("a",{attrs:{href:"https://github.com/x-bao",target:"_blank",rel:"noopener noreferrer"}},[t._v("@San Baofeng"),a("OutboundLink")],1),t._v(" · Twitter "),a("a",{attrs:{href:"https://twitter.com/Baofeng15",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Baofeng15"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);