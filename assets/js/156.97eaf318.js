(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{629:function(e,a,r){"use strict";r.r(a);var t=r(50),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vuepress-plugin-to-parse-raml-files-and-inject-them-as-markdown"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-to-parse-raml-files-and-inject-them-as-markdown"}},[e._v("#")]),e._v(" Vuepress plugin to parse RAML files and inject them as markdown")]),e._v(" "),r("h2",{attrs:{id:"vuepress-plugin-raml-loader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-raml-loader"}},[e._v("#")]),e._v(" vuepress-plugin-raml-loader")]),e._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("ul",[r("li",[e._v("reads *.raml 1.0 and 0.8 formatted files and referenced includes")]),e._v(" "),r("li",[e._v("intermediate results are rendered as markdown enabling existing vuepress markdown related features\nsuch as 'auto' search and sidenav menu generation on raml files")]),e._v(" "),r("li",[e._v("raml can be mapped to arbitrary markdown using "),r("a",{attrs:{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer"}},[e._v("lodash templates"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("loaded raml content is represented as a simple JSON object and can be preprocessed for easier template rendering")]),e._v(" "),r("li",[e._v("loaded raml content as JSON can be emitted as a resource file for consumption by other components such as an interactive API tool")]),e._v(" "),r("li",[e._v("supports Webpack HMR when RAML file or its includes are edited in vuepress 'dev' mode")]),e._v(" "),r("li",[e._v("Webpack loaders such as the parser and JSON template renderer can be used stand-alone if desired")])]),e._v(" "),r("h2",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[e._v("install the plugin")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ npm install --save-dev vuepress-plugin-raml-loader\n")])])]),r("p",[e._v("add patterns and plugins to "),r("code",[e._v(".vuepress/config.js")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {\n  patterns: ['**/*.md', '**/*.vue', '**/*.raml'],\n  plugins: [\n    require('vuepress-plugin-raml-loader')\n  ]\n}\n")])])]),r("p",[e._v("add *.raml files along side your *.md files")]),e._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),r("p",[e._v("The default templates can be overridden by providing a function that returns\npreloaded compiled templates as "),r("code",[e._v("compiledTemplate")]),e._v(" wrapped in a Promise.\nSee "),r("code",[e._v("prepareDefaultTemplates()")]),e._v(" in the source code for guidance.")]),e._v(" "),r("h2",{attrs:{id:"caveats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[e._v("#")]),e._v(" Caveats")]),e._v(" "),r("ul",[r("li",[e._v("Only works with Vuepress config.js#patterns; it would be more clear if it\ncould add the raml as additionalPages (requires a Vuepress core change).\nFurthermore it currently duplicates some code frjom vuepress/core.")]),e._v(" "),r("li",[e._v("Uses the deprecated "),r("a",{attrs:{href:"https://github.com/raml-org/raml-js-parser-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("raml-1-parser"),r("OutboundLink")],1),e._v(" that\ndoes not support OAS.")]),e._v(" "),r("li",[e._v("markdown templates might be more intuitive if they were in Vue")])])])}),[],!1,null,null,null);a.default=s.exports}}]);