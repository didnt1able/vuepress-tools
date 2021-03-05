(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{455:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-seo"}},[t._v("#")]),t._v(" Vuepress Plugin SEO")]),t._v(" "),s("p",[t._v("🔌 Generate SEO friendly meta header for every page")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-seo -D\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("Note that Vuepress allows multiple syntaxes to register plugins. See "),s("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress documentation on how to use a plugin"),s("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("The default options below show you how the relevant data is being retrieved from your vuepress application and its pages. Simply override the function of your choice to define your own logic.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("siteTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $site")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $site")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("twitterCard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'summary_large_image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'articles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'posts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("folder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("regularPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" folder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'website'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $site")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("$page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("publishedAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frontmatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("modifiedAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastUpdated "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastUpdated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("A few things to note:")]),t._v(" "),s("ul",[s("li",[t._v("Each of those functions take three agurments: "),s("code",[t._v("$page")]),t._v(" (page configs provided by Vuepress), "),s("code",[t._v("$site")]),t._v(" (site configs provided by Vuepress) and "),s("code",[t._v("path")]),t._v(" (the built permalink of the page which is different than "),s("code",[t._v("$page.path")]),t._v(" in the plugin world).")]),t._v(" "),s("li",[t._v("If the return value of any of these options is null or undefined, it will not add the metadata. This avoids having lots of empty meta header in your pages.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("author")]),t._v(" option should be an object with any of the following values: "),s("code",[t._v("name")]),t._v(" (the full name of the author) and "),s("code",[t._v("twitter")]),t._v(" (the Twitter handle of the author, e.g. "),s("code",[t._v("@lorismatic")]),t._v(").")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("tags")]),t._v(" option should be an array.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("type")]),t._v(" should be part of the "),s("a",{attrs:{href:"http://ogp.me/#types",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Graph protocol"),s("OutboundLink")],1),t._v(". E.g. "),s("code",[t._v("article")]),t._v(", "),s("code",[t._v("profile")]),t._v(", "),s("code",[t._v("book")]),t._v(", "),s("code",[t._v("website")]),t._v(".")]),t._v(" "),s("li",[t._v("Both the "),s("code",[t._v("url")]),t._v(" and "),s("code",[t._v("image")]),t._v(" options try to use the "),s("code",[t._v("$site.themeConfig.domain")]),t._v(" variable as a prefix. If it's not available, it will still work but the links of your meta headers will be relative and not absolute.")]),t._v(" "),s("li",[t._v("When defining the "),s("code",[t._v("image")]),t._v(" attribute in your frontmatter, you should make sure that its path is already resolved. That means, either storing your SEO images in the "),s("code",[t._v("public")]),t._v(" folder or simply copy/pasting the path of a resolved image from the browser, e.g. "),s("code",[t._v("/assets/img/my_image.8b54ab32.jpg")]),t._v(". You cannot use for example "),s("code",[t._v("image: ./my_image.jpg")]),t._v(" to reference the image in the current folder. We cannot resolve this path for you at this time because "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/79",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress does not support asset resolution in frontmatter"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("It can be wise to include a timezone when defining "),s("code",[t._v("publishedAt")]),t._v(" in your frontmatter. E.g. "),s("code",[t._v("date: 2018-06-07 23:46 UTC")]),t._v(".")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("modifiedAt")]),t._v(" default value will work out-of-the-box if you registers the "),s("code",[t._v("@vuepress/last-updated")]),t._v(" plugin "),s("strong",[t._v("before")]),t._v(" this one.")])]),t._v(" "),s("p",[t._v("Finally you can also add your own custom meta headers through the "),s("code",[t._v("customMeta")]),t._v(" option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("customMeta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            $site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Site configs provided by Vuepress")]),t._v("\n            $page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Page configs provided by Vuepress")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All the computed options from above:")]),t._v("\n            siteTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            twitterCard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" publishedAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modifiedAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context\n\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twitter:site'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $site"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("twitter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <meta name="twitter:site" content="@github"></meta>')]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'book:isbn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9780091929114'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'property'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <meta property="book:isbn" content="9780091929114"></meta>')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Note that "),s("code",[t._v("customMeta")]),t._v(" defaults to "),s("code",[t._v("() => {}")]),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);