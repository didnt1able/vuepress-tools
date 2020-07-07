(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{798:function(e,t,a){"use strict";a.r(t);var r=a(50),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-theme-inherit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-inherit"}},[e._v("#")]),e._v(" vuepress-theme-inherit")]),e._v(" "),a("blockquote",[a("p",[e._v("The "),a("code",[e._v("vuepress")]),e._v(" blog theme inherited from "),a("code",[e._v("@vuepress/theme-default")]),e._v(", supports archiving and tagging functions, and can automatically sort blogs by time.")])]),e._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" NPM")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-theme-inherit",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.npmjs.com/package/vuepress-theme-inherit"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" DEMO")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://yasinchan.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yasinchan.com"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://github.com/YasinChan/vuepress-blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: The following operations can be found in the official document. Please familiarize yourself with the "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(" first.")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("After install and configure the basic "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#global-installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress"),a("OutboundLink")],1),e._v(" framework")])]),e._v(", do the following operations:")]),e._v(" "),a("ol",[a("li",[e._v("Install"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yarn add vuepress-theme-inherit\n")])])])]),e._v(" "),a("li",[e._v("Create a "),a("code",[e._v("/post")]),e._v(" "),a("code",[e._v("/tags")]),e._v(" "),a("code",[e._v("/archives")]),e._v(" directory under the "),a("code",[e._v("/doc")]),e._v(" directory to load the blog homepage list, tags and archive functions."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".\n├── docs\n│   ├── tags\n│   │   └── README.md\n│   ├── archives\n│   │   └── README.md\n│   ├── post\n│   │   └── README.md\n|   |\n")])])])]),e._v(" "),a("li",[e._v("Add the following configration in the "),a("code",[e._v("config.js")]),e._v(" to import the theme and generate the navigation bar."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("theme: 'vuepress-theme-inherit',\nthemeConfig: {\n  nav: [\n    ...\n    {text: 'blog', link: '/post/'},\n    {text: 'tags', link: '/tags/'},\n    {text: 'archives', link: '/archives/'},\n    ...\n  ]\n},\n")])])])]),e._v(" "),a("li",[e._v("Add the following keywords in the blog markdown file "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Front Matter"),a("OutboundLink")],1),e._v("  to let the script sort"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("---\ncreated: 2020-1-1\nupdated: 2020-2-1\ntags: \n  - Configration\n  - Technology\n  - Life\n---\n")])])]),e._v("Options\n"),a("ol",[a("li",[a("code",[e._v("created")]),e._v(" and "),a("code",[e._v("updated")]),e._v(" is used to record the creation and editing time of the blog, as well as used to sort the blog homepage (sort rule : update -> created -> no configration).")]),e._v(" "),a("li",[a("code",[e._v("created")]),e._v(" also used to sort the archives.")]),e._v(" "),a("li",[a("code",[e._v("tags")]),e._v(" is used to filter the tags.")]),e._v(" "),a("li",[e._v("Blog homepage will create the blog list, base on the markdown files you created under the "),a("code",[e._v("/post")]),e._v(" directory automatically.")]),e._v(" "),a("li",[e._v("These above functions will be automatically configured without additional operations.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("README.md")]),e._v(" under the three folders of "),a("code",[e._v("/archives")]),e._v(" "),a("code",[e._v("/tags")]),e._v(" "),a("code",[e._v("/post")]),e._v(" can be accessed through "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Front Matter"),a("OutboundLink")],1),e._v(" to set the relevant page information include title, keywords and descriptions")])])])]),e._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),a("ul",[a("li",[e._v("[ ] Pagination")]),e._v(" "),a("li",[e._v("[ ] Better SEO")])])])}),[],!1,null,null,null);t.default=n.exports}}]);