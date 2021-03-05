(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{826:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-flowchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-flowchart"}},[t._v("#")]),t._v(" vuepress-plugin-flowchart")]),t._v(" "),s("p",[t._v("flowchart plugin for vuepress")]),t._v(" "),s("blockquote",[s("p",[t._v("New features for (ulivz/vuepress-plugin-flowchart)(https://github.com/ulivz/vuepress-plugin-flowchart)")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @maginapp/vuepress-plugin-flowchart\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or npm install -D @maginapp/vuepress-plugin-flowchart")]),t._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@maginapp/vuepress-plugin-flowchart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          openMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'```mermaid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          closeMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'```'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          scondMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flowchat'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          ignoreSecondLine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),s("h4",{attrs:{id:"openmarker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openmarker"}},[t._v("#")]),t._v(" openMarker")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("default: ````mermaid`")])]),t._v(" "),s("p",[t._v("setting open marker")]),t._v(" "),s("h4",{attrs:{id:"closemarker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#closemarker"}},[t._v("#")]),t._v(" closeMarker")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("```")])])]),t._v(" "),s("p",[t._v("setting close marker")]),t._v(" "),s("h4",{attrs:{id:"scondmarker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scondmarker"}},[t._v("#")]),t._v(" scondMarker")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("flowchat")])])]),t._v(" "),s("p",[t._v("setting scondline marker when "),s("code",[t._v("ignoreSecondLine = false")])]),t._v(" "),s("h4",{attrs:{id:"ignoresecondline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignoresecondline"}},[t._v("#")]),t._v(" ignoreSecondLine")]),t._v(" "),s("ul",[s("li",[t._v("type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("default: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("setting whether to use scondMarker")]),t._v(" "),s("h3",{attrs:{id:"difference-with-ulivz-vuepress-plugin-flowchart-v1-4-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#difference-with-ulivz-vuepress-plugin-flowchart-v1-4-3"}},[t._v("#")]),t._v(" difference with "),s("code",[t._v("ulivz/vuepress-plugin-flowchart@v1.4.3")])]),t._v(" "),s("p",[t._v("Just modify some code to be compatible with CSDN blog")]),t._v(" "),s("ul",[s("li",[t._v("It's just that the outer marker is different")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("​```mermaid\nflowchat\n\n...\nsanme code with ulivz/vuepress-plugin-flowchart@v1.4.3\n...\n\n​```\n")])])]),s("ul",[s("li",[t._v("Added configuration feature")])]),t._v(" "),s("blockquote",[s("p",[t._v("It can be set to be the same as "),s("code",[t._v("ulivz/vuepress-plugin-flowchart@v1.4.3")]),t._v(" by configuring parameters")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    openMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@flowstart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    closeMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@flowend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ignoreSecondLine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" docs")]),t._v(" "),s("p",[t._v("Same Usage with "),s("a",{attrs:{href:"https://flowchart.vuepress.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ulivz/vuepress-plugin-flowchart@v1.4.3")]),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"quote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quote"}},[t._v("#")]),t._v(" Quote")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ulivz/vuepress-plugin-flowchart",target:"_blank",rel:"noopener noreferrer"}},[t._v("ulivz/vuepress-plugin-flowchart"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);