(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{909:function(e,t,s){"use strict";s.r(t);var a=s(50),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"recodable-s-vuepress-tailwind-blog-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recodable-s-vuepress-tailwind-blog-theme"}},[e._v("#")]),e._v(" Recodable's Vuepress + Tailwind Blog Theme")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/None/vuepress-theme-tailwind-blog/master/docs/example.png",alt:"Example"}})]),e._v(" "),s("p",[s("a",{attrs:{href:"https://vuepress-theme-tailwind-blog.netlify.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full documentation"),s("OutboundLink")],1)]),e._v(" "),s("h1",{attrs:{id:"guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[e._v("#")]),e._v(" Guide")]),e._v(" "),s("h2",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),s("blockquote",[s("p",[e._v("A minimalistic blog theme powered by Vuepress and Tailwind.css made by Recodable with ❤️")])]),e._v(" "),s("p",[e._v("This is a ready to use personal blog theme made with Tailwind.css. It's not customizable because of an issue regarding using PostCSS into a Vuepress plugin / theme.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/2155",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more here about the issue"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),s("p",[e._v("In this guide, you'll learn how to add this blog theme to a new project manually.")]),e._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" blog "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" blog "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create an empty directory and go into it")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" vuepress @recodable/vuepress-theme-tailwind-blog -D "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install the dependencies")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install vuepress @recodable/vuepress-theme-tailwind-blog -D")]),e._v("\n")])])]),s("h3",{attrs:{id:"folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[e._v("#")]),e._v(" Folder structure")]),e._v(" "),s("p",[e._v("This theme use the official "),s("code",[e._v("@vuepress/plugin-blog")]),e._v(" under the hood so we recommand to keep the same folder structure as a convention")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("├── blog\n│   ├── _posts\n│   │   ├── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2018")]),e._v("-11-7-frontmatter-in-vuepress.md "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#example")]),e._v("\n│   │   ├── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("-2-26-markdown-slot.md "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#example")]),e._v("\n│   │   └── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("-5-6-writing-a-vuepress-theme.md "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#example")]),e._v("\n│   └── .vuepress\n│       ├── config.js\n│       └── "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("enhanceApp.js"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("**Optional**"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("_\n└── package.json\n")])])]),s("h4",{attrs:{id:"required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required"}},[e._v("#")]),e._v(" Required:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("blog/.vuepress/config.js")]),e._v(": Entry file of configuration, can also be yml or toml.")]),e._v(" "),s("li",[s("code",[e._v("blog/_posts")]),e._v(": Stores your post content.")])]),e._v(" "),s("h4",{attrs:{id:"optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional"}},[e._v("#")]),e._v(" Optional:")]),e._v(" "),s("p",[e._v("If you wish to configure the files below, you'll need some knowledge of "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("blog/.vuepress/public")]),e._v(": Static resource directory.")]),e._v(" "),s("li",[s("code",[e._v("blog/.vuepress/enhanceApp.js")]),e._v(": App level enhancement.")])]),e._v(" "),s("h3",{attrs:{id:"using-recodable-vuepress-theme-tailwind-blog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-recodable-vuepress-theme-tailwind-blog"}},[e._v("#")]),e._v(" Using @recodable/vuepress-theme-tailwind-blog")]),e._v(" "),s("p",[e._v("You must add "),s("code",[e._v("@recodable/vuepress-theme-tailwind-blog")]),e._v(" as a theme in .vuepress/config.js. "),s("code",[e._v("@recodable/vuepress-theme-tailwind-blog")]),e._v(" is configurable, but we will use the defaults for now.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .vuepress/config.js")]),e._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My Vuepress Tailwind Blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Title for the site. This will be displayed in the navbar.")]),e._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@recodable/vuepress-theme-tailwind-blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  themeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Please keep looking down to see the available options.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("Add the scripts to "),s("code",[e._v("package.json")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev blog"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// starts a development server with automatic reload.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build blog"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// builds your website.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("From now on, you can run "),s("code",[e._v("yarn dev")]),e._v(" or "),s("code",[e._v("npm run dev")]),e._v(" and head "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("localhost:8080")]),s("OutboundLink")],1),e._v(" to see your blog!")]),e._v(" "),s("h3",{attrs:{id:"generating-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-content"}},[e._v("#")]),e._v(" Generating content")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("_posts")]),e._v(" folder is where your blog posts live. You can simply write blog posts in Markdown.")]),e._v(" "),s("p",[e._v("All blog post files can begin with front matter. Only "),s("code",[e._v("title")]),e._v(" and "),s("code",[e._v("date")]),e._v(" are required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out frontmatter for more details. Here's an example:")]),e._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: Article with cover image\ndate: 2020-02-20\ncover:\n  url: /magic.jpg\n  credit:\n    name: Mervyn Chan on Unsplash\n    "),s("span",{pre:!0,attrs:{class:"token title important"}},[e._v("url: https://unsplash.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\nMy content.\n")])])]),s("h2",{attrs:{id:"final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[e._v("#")]),e._v(" Final")]),e._v(" "),s("p",[e._v("Now, Check out your blog at "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("localhost:8080")]),s("OutboundLink")],1),e._v(", if everything is ok, you might be interested in the following topics:")]),e._v(" "),s("ul",[s("li",[e._v("Configure this theme: We'll discuss in the "),s("a",{attrs:{href:"/config"}},[e._v("next section")])]),e._v(" "),s("li",[e._v("Deploy your blog: Read the "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("deploy section in VuePress documentation"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Explore deeper:\n"),s("ul",[s("li",[e._v("Documentation of "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);