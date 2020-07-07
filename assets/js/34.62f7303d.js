(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{510:function(t,e,a){"use strict";a.r(e);var s=a(50),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-check-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-check-md"}},[t._v("#")]),t._v(" vuepress-plugin-check-md")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.com/package/vuepress-plugin-check-md",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/npm/v/vuepress-plugin-check-md",alt:"NPM version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.com/package/vuepress-plugin-check-md",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/npm/dm/vuepress-plugin-check-md",alt:"NPM downloads"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("vuepress check-md")]),t._v(" - Check dead links of markdown.")])]),t._v(" "),a("p",[a("strong",[t._v("This plugin is powered by "),a("a",{attrs:{href:"https://github.com/whxaxes/check-md",target:"_blank",rel:"noopener noreferrer"}},[t._v("check-md"),a("OutboundLink")],1),t._v(" made with ❤️ by "),a("a",{attrs:{href:"https://github.com/whxaxes",target:"_blank",rel:"noopener noreferrer"}},[t._v("@whxaxes"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ULIVZ/vuepress-plugin-check-md/master/assets/demo.png",alt:""}})]),t._v(" "),a("p",[t._v("This plugin help check following types of dead links")]),t._v(" "),a("ul",[a("li",[t._v("Empty link.")]),t._v(" "),a("li",[t._v("Non-existed target markdown file.")]),t._v(" "),a("li",[t._v("Non-slugified hash.")]),t._v(" "),a("li",[t._v("Non-existed hash.")]),t._v(" "),a("li",[t._v("Prefer "),a("code",[t._v(".md")]),t._v(" to "),a("code",[t._v(".html")]),t._v(" ("),a("code",[t._v("warn")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-check-md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D vuepress-plugin-check-md")]),t._v("\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'check-md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vuepress check-md "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("docsDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"passing-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passing-options"}},[t._v("#")]),t._v(" Passing Options")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'check-md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/*.md'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pattern"}},[t._v("#")]),t._v(" pattern")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("GlobPattern")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("**/*.md")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Glob"),a("OutboundLink")],1),t._v(" pattern of resolved markdowns.")]),t._v(" "),a("h3",{attrs:{id:"ignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignore"}},[t._v("#")]),t._v(" ignore")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("GlobPattern")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("**/node_modules")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Glob"),a("OutboundLink")],1),t._v(" pattern to specify paths from being checked.")]),t._v(" "),a("h3",{attrs:{id:"exitlevel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitlevel"}},[t._v("#")]),t._v(" exitLevel")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("'none' | 'info' | 'warn' | 'error'")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("'error'")])])]),t._v(" "),a("h2",{attrs:{id:"author"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" Author")]),t._v(" "),a("p",[a("strong",[t._v("vuepress-plugin-check-md")]),t._v(" © "),a("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("ULIVZ"),a("OutboundLink")],1),t._v(", Released under the "),a("a",{attrs:{href:"https://raw.githubusercontent.com/ULIVZ/vuepress-plugin-check-md/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),a("OutboundLink")],1),t._v(" License."),a("br")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/ulivz"),a("OutboundLink")],1),t._v(" · GitHub "),a("a",{attrs:{href:"https://github.com/ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ULIVZ"),a("OutboundLink")],1),t._v(" · Twitter "),a("a",{attrs:{href:"https://twitter.com/_ulivz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@_ulivz"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);