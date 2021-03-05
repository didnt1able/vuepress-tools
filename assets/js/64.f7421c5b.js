(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{277:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-content-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-content-description"}},[t._v("#")]),t._v(" vuepress-plugin-content-description")]),t._v(" "),a("p",[t._v("Vuepress plugin auto generate content description (or content summary) based\non the first words of the content.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D https://github.com/sogilis/vuepress-plugin-content-description\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D git+https://github.com/sogilis/vuepress-plugin-content-description")]),t._v("\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-content-description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Put "),a("code",[t._v("description")]),t._v(" data into "),a("code",[t._v("$page")]),t._v(" data so you can access like")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Example output")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("## De quoi allons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nous parler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Dans cet article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nous parlerons de tests\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("automatisés")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pas de tests manuels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" portant sur une base de code maintenable et\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("évolutive")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pas de code jetab\n")])])]),a("h3",{attrs:{id:"override"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#override"}},[t._v("#")]),t._v(" Override")]),t._v(" "),a("p",[t._v("You can override by specifying a description string in frontmatter")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\ntitle: My great post!\ndate: \"2018-08-13T17:36:55.338Z\"\ndescription: 'My resume'\n---\n\nSome content here...\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"excludes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excludes"}},[t._v("#")]),t._v(" excludes")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Array<string>")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("Exclude pages by their path via a regular expression. This tests for both "),a("code",[t._v("path")]),t._v("\nand "),a("code",[t._v("regularPath")]),t._v(".")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-content-description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      excludes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tag/.*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"numberofwords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numberofwords"}},[t._v("#")]),t._v(" numberOfWords")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("Default: 70")])]),t._v(" "),a("p",[t._v("The number of words extract")]),t._v(" "),a("p",[t._v("First XX words of the page content")]),t._v(" "),a("p",[t._v("Default is 70, as Hugo https://gohugo.io/content-management/summaries/")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-content-description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      numberOfWords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("Inspired from")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://github.com/darrenjennings/vuepress-plugin-reading-time")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/webmasterish/vuepress-plugin-feed/")])])]),t._v(" "),a("h2",{attrs:{id:"used"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used"}},[t._v("#")]),t._v(" Used")]),t._v(" "),a("p",[t._v("Used by the blog of SquareSquale and blog of Sogilis")])])}),[],!1,null,null,null);s.default=e.exports}}]);