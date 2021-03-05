(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{396:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-merge-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-merge-pages"}},[t._v("#")]),t._v(" vuepress-plugin-merge-pages")]),t._v(" "),s("blockquote",[s("p",[t._v("VuePress Plugin: Merge Markdown files in a single Markdown")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://flat.badgen.net/npm/v/vuepress-plugin-merge-pages?icon=npm",alt:"NPM"}}),t._v(" "),s("img",{attrs:{src:"https://flat.badgen.net/npm/dm/vuepress-plugin-merge-pages?icon=npm",alt:"NPM"}}),t._v(" "),s("img",{attrs:{src:"https://flat.badgen.net/codeclimate/maintainability/vinicius73/vuepress-plugin-merge-pages?icon=codeclimate",alt:"Codeclimate"}}),t._v(" "),s("img",{attrs:{src:"https://flat.badgen.net/codeclimate/coverage/vinicius73/vuepress-plugin-merge-pages?icon=codeclimate",alt:"Codeclimate"}}),t._v(" "),s("img",{attrs:{src:"https://flat.badgen.net/lgtm/grade/g/vinicius73/vuepress-plugin-merge-pages?icon=lgtm",alt:"lgtm"}}),t._v(" "),s("img",{attrs:{src:"https://flat.badgen.net/github/status/vinicius73/vuepress-plugin-merge-pages?icon=github",alt:"github"}})]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-merge-pages -D\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-merge-pages --save-dev\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-merge-pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bundles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/printable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'print-all-content-page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/printable-page/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mergePages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pages")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageBreak "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<hr class=\"page-break\" />\\n\\n'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initialValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("# My Printable Page\\n\\n[[TOC]]\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("pageBreak"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pages\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("acc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("acc"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("pageBreak"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h4",{attrs:{id:"bundles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundles"}},[t._v("#")]),t._v(" bundles")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("Required: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("List of target merge files.")]),t._v(" "),s("h4",{attrs:{id:"bundles-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundles-path"}},[t._v("#")]),t._v(" bundles[].path")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("Required: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("Page route path, url of target page.")]),t._v(" "),s("h4",{attrs:{id:"bundles-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundles-name"}},[t._v("#")]),t._v(" bundles[].name")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("String")])]),t._v(" "),s("li",[t._v("Required: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("Name of generated file.")]),t._v(" "),s("h4",{attrs:{id:"bundles-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundles-filter"}},[t._v("#")]),t._v(" bundles[].filter")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Function => Page[]")])]),t._v(" "),s("li",[t._v("Required: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("Filter pages of bundle. Receive "),s("code",[t._v("pages")]),t._v(" and return new list of pages\nSee above example for mor details")]),t._v(" "),s("h5",{attrs:{id:"page-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-object"}},[t._v("#")]),t._v(" Page object")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// page object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"bundles-mergepages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bundles-mergepages"}},[t._v("#")]),t._v(" bundles[].mergePages")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Function => String")])]),t._v(" "),s("li",[t._v("Required: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("Custom content merge. Allow interaction with pages to inject custom contents.\nSee above example for mor details")])])}),[],!1,null,null,null);a.default=e.exports}}]);