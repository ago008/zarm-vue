webpackJsonp([20],{197:function(e,n,t){var s=t(8)(t(244),t(316),null,null,null);e.exports=s.exports},204:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(212);t.n(s);n.default={data:function(){return{windowHeight:window.innerHeight}}}},205:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(213);t.n(s);n.default={}},206:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(214);t.n(s);n.default={props:["title"]}},207:function(e,n,t){n=e.exports=t(180)(!0),n.push([e.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAO1B,AATD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,QCRe,CDShB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n  }\n}\n\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},208:function(e,n,t){n=e.exports=t(180)(!0),n.push([e.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},209:function(e,n,t){n=e.exports=t(180)(!0),n.push([e.i,"header{padding:15px}","",{version:3,sources:["/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/git-project/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,YCFiB,CDGlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},210:function(e,n,t){n=e.exports=t(180)(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},211:function(e,n,t){n=e.exports=t(180)(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},212:function(e,n,t){var s=t(207);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(181)("800fcacc",s,!0)},213:function(e,n,t){var s=t(208);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(181)("0a81e2ac",s,!0)},214:function(e,n,t){var s=t(209);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(181)("ce2f83c8",s,!0)},215:function(e,n,t){var s=t(210);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(181)("6c761514",s,!0)},216:function(e,n,t){var s=t(211);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(181)("0f5d00fc",s,!0)},217:function(e,n,t){var s=t(8)(t(204),t(221),null,null,null);e.exports=s.exports},218:function(e,n,t){function s(e){t(215)}var r=t(8)(t(205),t(220),s,null,null);e.exports=r.exports},219:function(e,n,t){function s(e){t(216)}var r=t(8)(t(206),t(222),s,null,null);e.exports=r.exports},220:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[e._v("众安·体验设计中心")]),e._v(" "),t("div",{staticClass:"copyright-en"},[e._v("Zhongan UX Densign")])])])}]}},221:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container",style:{minHeight:e.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},222:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("header",{staticClass:"Header"},[e._v(e._s(e.title))])},staticRenderFns:[]}},244:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(217),r=t.n(s),o=t(219),i=t.n(o),a=t(218),c=t.n(a);n.default={components:{Container:r.a,PageHeader:i.a,PageFooter:c.a},data:function(){return{stepper1:0,stepper2:2,stepper3:0,stepper4:0,stepper5:0,stepper6:0,stepper7:0}},methods:{handleChange:function(e){console.log(e)}}}},316:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Container",{staticClass:"stepper-page"},[t("PageHeader",{attrs:{title:"步进器 Stepper"}}),e._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[e._v("基本")])],1),e._v(" "),t("za-panel-body",[t("za-cell",{attrs:{title:"普通"}},[t("za-stepper",{on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper1,callback:function(n){e.stepper1=n},expression:"stepper1"}})],1),e._v(" "),t("za-cell",{attrs:{title:"设置默认值"}},[t("za-stepper",{on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper2,callback:function(n){e.stepper2=n},expression:"stepper2"}})],1),e._v(" "),t("za-cell",{attrs:{title:"设置上下限"}},[t("za-stepper",{attrs:{min:-3,max:3},on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper3,callback:function(n){e.stepper3=n},expression:"stepper3"}})],1),e._v(" "),t("za-cell",{attrs:{title:"设置步长"}},[t("za-stepper",{attrs:{step:.5},on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper4,callback:function(n){e.stepper4=n},expression:"stepper4"}})],1),e._v(" "),t("za-cell",{attrs:{title:"禁用状态"}},[t("za-stepper",{attrs:{disabled:""},on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper5,callback:function(n){e.stepper5=n},expression:"stepper5"}})],1)],1)],1),e._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[e._v("多形状")])],1),e._v(" "),t("za-panel-body",[t("za-cell",{attrs:{title:"圆角"}},[t("za-stepper",{attrs:{shape:"radius"},on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper6,callback:function(n){e.stepper6=n},expression:"stepper6"}})],1),e._v(" "),t("za-cell",{attrs:{title:"圆型"}},[t("za-stepper",{attrs:{shape:"circle"},on:{"step-change":e.handleChange},slot:"description",model:{value:e.stepper7,callback:function(n){e.stepper7=n},expression:"stepper7"}})],1)],1)],1)],1)]),e._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.451d7d1240356e35a4c0.js.map