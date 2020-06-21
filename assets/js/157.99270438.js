(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{630:function(s,t,a){"use strict";a.r(t);var e=a(50),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-reading-progress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-reading-progress"}},[s._v("#")]),s._v(" vuepress-plugin-reading-progress")]),s._v(" "),a("blockquote",[a("p",[s._v("a reading progress bar plugin for vuepress")])]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/plugins/"}},[s._v("README")]),s._v(" | "),a("RouterLink",{attrs:{to:"/plugins/CHANGELOG.html"}},[s._v("CHANGELOG")])],1),s._v(" "),a("p",[s._v("add reading progress bar for vuepress")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ououe.com/img/vuepress_plugin_reading_progress.gif",alt:"vuepress-plugin-reading-progress"}})]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-plugin-reading-progress\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i vuepress-plugin-reading-progress\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reading-progress'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v(" Vuepress documentation"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),a("h3",{attrs:{id:"readingdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readingdir"}},[s._v("#")]),s._v(" readingDir")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("null")]),s._v(", "),a("code",[s._v("string")]),s._v(", "),a("code",[s._v("array")]),s._v(", "),a("code",[s._v("object")]),s._v(", "),a("code",[s._v("RegExp")])]),s._v(" "),a("li",[s._v("Required: "),a("code",[s._v("false")])])]),s._v(" "),a("p",[s._v("Specify regularPath that display reading progress bar")]),s._v(" "),a("p",[s._v("example")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  readingDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'posts'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n  readingDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'posts1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'posts2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'posts3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or { dir: fixed }")]),s._v("\n  readingDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    posts1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'top'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    posts2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bottom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    posts3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'left'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or RegExp")]),s._v("\n  readingDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exclude regularPath end with `/`")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n  readingDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[^/]+$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[s._v("#")]),s._v(" fixed")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("top")])])]),s._v(" "),a("p",[s._v("support "),a("code",[s._v("top")]),s._v(", "),a("code",[s._v("bottom")]),s._v(", "),a("code",[s._v("left")]),s._v(", "),a("code",[s._v("right")])]),s._v(" "),a("p",[s._v("set position for reading progress bar")]),s._v(" "),a("h2",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[s._v("#")]),s._v(" Front matter")]),s._v(" "),a("p",[s._v("Change the reading progress bar display of the current page by use "),a("code",[s._v("readingShow")])]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")]),s._v(", "),a("code",[s._v("boolean")])]),s._v(" "),a("li",[s._v("Required: "),a("code",[s._v("false")])]),s._v(" "),a("li",[s._v("one of "),a("code",[s._v("top")]),s._v(", "),a("code",[s._v("bottom")]),s._v(", "),a("code",[s._v("left")]),s._v(", "),a("code",[s._v("right")]),s._v(", "),a("code",[s._v("true")]),s._v(", "),a("code",[s._v("false")])])]),s._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[s._v("readingShow: false\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")])]),s._v("\n")])])]),a("h2",{attrs:{id:"style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[s._v("#")]),s._v(" Style")]),s._v(" "),a("p",[s._v("If you wish to apply simple color overrides to the styling")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+- .vuepress\n  +- styles\n    +- palette.styl\n")])])]),a("div",{staticClass:"language-styl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-styl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingBgColor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" transparent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingZIndex")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingSize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("px")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingProgressColor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" $accentColor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingProgressImage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" none")]),s._v("\n")])])]),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("div",{staticClass:"language-styl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-styl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$readingProgressImage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#E50743")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#F9870F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#E8ED30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#3FA62E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#3BB4D7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#2F4D9E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[s._v("#71378A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n")])])]),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer"}},[s._v("MIT"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),a("p",[s._v("vue vuepress plugin reading-progress reading progress")])])}),[],!1,null,null,null);t.default=r.exports}}]);