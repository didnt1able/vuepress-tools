(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{471:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-for-web-speech-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-for-web-speech-api"}},[t._v("#")]),t._v(" VuePress plugin for Web Speech API")]),t._v(" "),a("p",[t._v("🚧 Documentation in progress")]),t._v(" "),a("p",[t._v("⚙️ A new component for easy settings is coming soon")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i @paulbarre/vuepress-plugin-speech\n")])])]),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),a("p",[t._v("Add the plugin to your config file:")]),t._v(" "),a("p",[a("strong",[t._v(".vuepress/config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@paulbarre/speech'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fr-FR'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Details")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("lang")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("undefined")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specify the language to select the voices. BCP 47 language tag.")])])])]),t._v(" "),a("h2",{attrs:{id:"speech"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speech"}},[t._v("#")]),t._v(" "),a("code",[t._v("$speech")])]),t._v(" "),a("p",[t._v("All your components have access to the "),a("code",[t._v("$speech")]),t._v(" property.")]),t._v(" "),a("p",[a("strong",[t._v("$speech.voice")]),t._v(": The current voice")]),t._v(" "),a("p",[a("strong",[t._v("$speech.voices")]),t._v(": The available voices")]),t._v(" "),a("p",[a("strong",[t._v("$speech.setVoice("),a("code",[t._v("voiceURI")]),t._v(")")]),t._v(": Pass the URI of the voice you want to set")]),t._v(" "),a("p",[a("strong",[t._v("$speech.speak("),a("code",[t._v("text")]),t._v(")")]),t._v(": Synthesis a text by the current voice")]),t._v(" "),a("h2",{attrs:{id:"tts-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tts-component"}},[t._v("#")]),t._v(" "),a("code",[t._v("tts")]),t._v(" component")]),t._v(" "),a("p",[t._v("This plugin installs a component you can add into your Markdown files to show texts "),a("em",[t._v("playable")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" My page title")]),t._v("\n\nSome paragraph with a text that can be synthesize: "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello folks!"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[a("code",[t._v("tts")]),t._v(" has two props:")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("text")])]),t._v(": The text to show and speak if "),a("code",[t._v("alt")]),t._v(" is undefined.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("alt")])]),t._v(": The true text to speak. It allows you to show some text but read another.")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Goodbye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);