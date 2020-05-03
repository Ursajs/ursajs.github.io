(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(s,a,t){"use strict";t.r(a);var n=t(33),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置（config）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置（config）"}},[s._v("#")]),s._v(" 配置（Config）")]),s._v(" "),t("h2",{attrs:{id:"config-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-loader"}},[s._v("#")]),s._v(" config loader")]),s._v(" "),t("p",[s._v("Ursa的配置通过自动合并app及框架的配置，并根据不同环境读取不同的配置，最终配置通过"),t("code",[s._v("Ursa.config")]),s._v("获取。")]),s._v(" "),t("blockquote",[t("p",[s._v("插件的配置的 options 最终会和对应名称的 config 合并后传给插件。")])]),s._v(" "),t("h3",{attrs:{id:"配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置目录"}},[s._v("#")]),s._v(" 配置目录")]),s._v(" "),t("p",[s._v("框架默认会加载"),t("code",[s._v("${URSA_ROOT}/config")]),s._v("目录下以"),t("code",[s._v("xx.config.xx")]),s._v("命名的配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("|- config\n  |- plugin.config.ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("你也可以根据需求在实例化时通过"),t("code",[s._v("configPath")]),s._v("来指定配置目录")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ursa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Ursa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("instance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    configPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'defaultConfig'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"cli-初始化配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-初始化配置"}},[s._v("#")]),s._v(" cli 初始化配置")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("ursa")]),s._v(" 命令可以快速的给工程添加插件或者可发布的插件工程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ursa config init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("configName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"配置获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置获取"}},[s._v("#")]),s._v(" 配置获取")]),s._v(" "),t("p",[t("code",[s._v("xx.config.ts")]),s._v("需 export 一个 default 值，配置将以文件名为 key，default 值为 value 存在实例上，可以通过"),t("code",[s._v("Ursa")]),s._v("的 config 属性来获取到所有 config 值")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("Ursa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 config 所有数据")]),s._v("\nUrsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 status 配置")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);