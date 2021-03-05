(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{342:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-github-markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-github-markdown"}},[t._v("#")]),t._v(" vuepress-plugin-github-markdown")]),t._v(" "),a("blockquote",[a("p",[t._v("VuePress plugin for importing markdown from Github")])]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("h3",{attrs:{id:"create-github-app-for-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-github-app-for-organization"}},[t._v("#")]),t._v(" Create Github App for Organization:")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/organizations/H2Know/settings/apps/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Register new Github App"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("Please follow "),a("a",{attrs:{href:"https://developer.github.com/apps/building-github-apps/creating-a-github-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),a("OutboundLink")],1),t._v(" if you have questions.")]),t._v(" "),a("li",[t._v("Make sure to save the "),a("strong",[t._v("Private Key")]),t._v(" that is generated to your .env file "),a("code",[t._v("GITHUB_PRIVATE_KEY")]),t._v(".\n"),a("ul",[a("li",[a("p",[t._v("May need to format the Private Key properly on single line for env file (The OSX script will format & save to clipboard for easy pasting):")]),t._v(" "),a("p",[a("code",[t._v("awk -v ORS='\\\\n' '1' github-app-name.2020-06-21.private-key.pem | pbcopy")])])]),t._v(" "),a("li",[a("p",[t._v("Some deployment services (ie. Netlify) won't be able to parse the line breaks properly. When calling the env variable replace the line breaks like this: "),a("code",[t._v("process.env.GITHUB_PRIVATE_KEY.replace(/\\\\n/gm, '\\n')")]),t._v(".")])])])]),t._v(" "),a("li",[t._v("Also save the "),a("strong",[t._v("App ID")]),t._v(" to your .env file "),a("code",[t._v("GITHUB_APP_ID")]),t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Install Github App")])]),t._v(" "),a("ul",[a("li",[t._v("Please follow "),a("a",{attrs:{href:"https://developer.github.com/apps/installing-github-apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),a("OutboundLink")],1),t._v(" for installation.")]),t._v(" "),a("li",[t._v("On the installation page of the app, make note of the "),a("strong",[t._v("Installation ID")]),t._v("** at the end of the url. (ie. "),a("code",[t._v("https://github.com/organizations/getnacelle/settings/installations/**9762656**")]),t._v("). Save to your .env file "),a("code",[t._v("GITHUB_INSTALLATION_ID")])])]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation:")]),t._v(" "),a("p",[a("code",[t._v("npm install -D vuepress-plugin-github-markdown")])]),t._v(" "),a("h3",{attrs:{id:"add-to-vuepress-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-to-vuepress-config"}},[t._v("#")]),t._v(" Add to "),a("code",[t._v(".vuepress/config")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  plugins: [\n    [\n      'vuepress-plugin-github-markdown',\n      {\n        appId: process.env.GITHUB_APP_ID,\n        privateKey: process.env.GITHUB_PRIVATE_KEY.replace(/\\\\n/gm, '\\n'),\n        installationId: process.env.GITHUB_INSTALLATION_ID,\n        files: [\n          {\n            path: '/nuxt/changelog.html',\n            owner: 'getnacelle',\n            repo: 'nacelle-nuxt-starter',\n            githubFilePath: 'CHANGELOG.md',\n            modifyContent(content) {\n              // Append title to markdown\n              return '# @nacelle/nacelle-nuxt-starter' + '\\n' + content\n            }\n          }\n        ]\n      }\n    ]\n  ]\n")])])]),a("h4",{attrs:{id:"plugin-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[t._v("#")]),t._v(" Plugin Options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Param[Type]")]),t._v(" "),a("th",[t._v("Describe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("appId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("App ID for Github App")])]),t._v(" "),a("tr",[a("td",[t._v("privateKey")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Private Key of Github App")])]),t._v(" "),a("tr",[a("td",[t._v("installationId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("ID of Github App installation")])]),t._v(" "),a("tr",[a("td",[t._v("files")]),t._v(" "),a("td",[t._v("File[]")]),t._v(" "),a("td",[t._v("Array of file options for markdown files to import")])])])]),t._v(" "),a("h4",{attrs:{id:"file-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-options"}},[t._v("#")]),t._v(" File Options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Param[Type]")]),t._v(" "),a("th",[t._v("Describe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("url path where the page will live in docs")])]),t._v(" "),a("tr",[a("td",[t._v("owner")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("github owner/organization")])]),t._v(" "),a("tr",[a("td",[t._v("repo")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("github repo name")])]),t._v(" "),a("tr",[a("td",[t._v("githubFilePath")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("the url to the raw markdown file")])]),t._v(" "),a("tr",[a("td",[t._v("modifyContent")]),t._v(" "),a("td",[t._v("(String): String")]),t._v(" "),a("td",[t._v("(optional) A function that can modify imported content if needed")])])])]),t._v(" "),a("h2",{attrs:{id:"link-to-markdown-file-in-sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-to-markdown-file-in-sidebar"}},[t._v("#")]),t._v(" Link to Markdown File in Sidebar:")]),t._v(" "),a("p",[t._v("We can link to the markdown file by using a standard sidebar group in the "),a("code",[t._v("config.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  {\n    title: 'Changelog',\n    collapsable: true,\n    path: '/nuxt/changelog',\n    sidebarDepth: 1,\n    children: ['/nuxt/changelog'],\n  },\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);