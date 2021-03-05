(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{362:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-html-redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-html-redirect"}},[t._v("#")]),t._v(" @vuepress/plugin-html-redirect")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.com/package/@vuepress/plugin-html-redirect",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@vuepress/plugin-html-redirect.svg?style=flat",alt:"NPM version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.com/package/@vuepress/plugin-html-redirect",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/@vuepress/plugin-html-redirect.svg?style=flat",alt:"NPM downloads"}}),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://github.com/vuepressjs/vuepress-plugin-html-redirect/workflows/Node.js%20CI/badge.svg",alt:"Node.js CI"}})]),t._v(" "),s("h2",{attrs:{id:"feature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature"}},[t._v("#")]),t._v(" Feature")]),t._v(" "),s("ul",[s("li",[t._v("Support virtual URLs as source URLs.")]),t._v(" "),s("li",[t._v("Support "),s("code",[t._v("countdown")]),t._v(".")]),t._v(" "),s("li",[t._v("Work with static "),s("code",[t._v("base")]),t._v(" and "),s("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-dynamic-base",target:"_blank",rel:"noopener noreferrer"}},[t._v("dynamic base"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("In the site development of vuepress, a small directory structure adjustment will invalidate some URLs, but these URLs may have been published. With this plugin, you can keep those disappeared URLs forever.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-html-redirect\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-html-redirect")]),t._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ul",[s("li",[t._v("Write redirects:")])]),t._v(" "),s("p",[t._v("The agreed file to write "),s("code",[t._v("redirects")]),t._v(" config is "),s("code",[t._v("/path/to/.vuepress/redirects")]),t._v(", whose format is as follows:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[url] [redirect_url]\n[url] [redirect_url]\n[url] [redirect_url]\n...\n")])])]),s("p",[t._v("example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/2020/03/27/webpack-5-module-federation/ /translations/2020/03/27/webpack-5-module-federation/\n")])])]),s("ul",[s("li",[t._v("Simple usage:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/html-redirect'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OR full name: '@vuepress/plugin-html-redirect'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Disable "),s("code",[t._v("countdown")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/html-redirect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("It means that the publc path will be different acccording to the NEV you set, and the router base will be "),s("code",[t._v("'/'")]),t._v(" when the host is "),s("code",[t._v("hostA")]),t._v(", and "),s("code",[t._v("'/blog/'")]),t._v(" when the host is "),s("code",[t._v("hostB")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h3",{attrs:{id:"duration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" duration")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Description: Control how many seconds the page will be redirected.")])]),t._v(" "),s("h2",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),s("ul",[s("li",[t._v("Support directory redirects.")])]),t._v(" "),s("p",[t._v("PR welcome!")]),t._v(" "),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),s("ol",[s("li",[t._v("Fork it!")]),t._v(" "),s("li",[t._v("Create your feature branch: "),s("code",[t._v("git checkout -b my-new-feature")])]),t._v(" "),s("li",[t._v("Commit your changes: "),s("code",[t._v("git commit -am 'Add some feature'")])]),t._v(" "),s("li",[t._v("Push to the branch: "),s("code",[t._v("git push origin my-new-feature")])]),t._v(" "),s("li",[t._v("Submit a pull request 😄")])]),t._v(" "),s("h2",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),s("p",[s("strong",[t._v("@vuepress/plugin-html-redirect")]),t._v(" © "),s("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("ULIVZ"),s("OutboundLink")],1),t._v(", Released under the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/VuePress/vuepress-plugin-html-redirect/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),s("OutboundLink")],1),t._v(" License."),s("br")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/ulivz"),s("OutboundLink")],1),t._v(" · Twitter "),s("a",{attrs:{href:"https://twitter.com/_ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@_ulivz"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);