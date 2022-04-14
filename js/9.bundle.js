"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[9],{2239:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var o=t(7294),r=t(7368),a=t(9960),l=t(2041),c=t(6407);const i=function(){return o.createElement(c.Z,{placeholder:"Please input"})};const s=function(){return o.createElement(c.Z,{placeholder:"Please input",defaultValue:"Your emotion",clearable:!0})};var u=t(9940);const d=function(){return o.createElement(o.Fragment,null,o.createElement(c.Z,{placeholder:"Please input",prefix:o.createElement(u.Z,{type:"email"})}),o.createElement(c.Z,{placeholder:"Please input",prefix:"https://"}))};const m=function(){return o.createElement(o.Fragment,null,o.createElement(c.Z,{placeholder:"Please input",suffix:o.createElement(u.Z,{type:"edit"})}),o.createElement(c.Z,{placeholder:"Please input",suffix:"@163.com"}))};const p=function(){return o.createElement(o.Fragment,null,o.createElement(c.Z,{placeholder:"Please input",disabled:!0}),o.createElement(c.Z,{placeholder:"Please input",prefix:o.createElement(u.Z,{type:"email"}),suffix:"@163.com",disabled:!0}))};const f=function(){return o.createElement(c.Z,{placeholder:"Please Input",readOnly:!0})};const g=function(){return o.createElement(c.Z,{placeholder:"Please Input",type:"password",defaultValue:"12345678"})};var E=c.Z.TextArea;const h=function(){return o.createElement(E,{placeholder:"Please Input"})};var Z=t(3379),y=t.n(Z),b=t(7795),x=t.n(b),_=t(569),v=t.n(_),w=t(3565),P=t.n(w),A=t(9216),C=t.n(A),I=t(4589),S=t.n(I),N=t(3416),M={};M.styleTagTransform=S(),M.setAttributes=P(),M.insert=v().bind(null,"head"),M.domAPI=x(),M.insertStyleElement=C();y()(N.Z,M);N.Z&&N.Z.locals&&N.Z.locals;var k=r.w,O=r.c,T=k.input,z=T.demos,R=T.apiRows;const j=function(){return o.createElement("div",{className:"input-demo"},o.createElement("h1",null,"Input"),o.createElement("p",null,"Input is used to type text."),o.createElement("h2",null,"Demo"),o.createElement(l.Z,{title:"Basic Usage",content:o.createElement(i,null),code:z["demo-1"]}),o.createElement(l.Z,{title:"Clearable",content:o.createElement(s,null),code:z["demo-2"]}),o.createElement(l.Z,{title:"Prefix",content:o.createElement(d,null),code:z["demo-3"]}),o.createElement(l.Z,{title:"Suffix",content:o.createElement(m,null),code:z["demo-4"]}),o.createElement(l.Z,{title:"Disabled",content:o.createElement(p,null),code:z["demo-5"]}),o.createElement(l.Z,{title:"ReadOnly",content:o.createElement(f,null),code:z["demo-6"]}),o.createElement(l.Z,{title:"Password",content:o.createElement(g,null),code:z["demo-7"]}),o.createElement(l.Z,{title:"TextArea",content:o.createElement(h,null),code:z["demo-8"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:O,data:R.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(7294),r=t(9074),a=t(2282),l=t(5046),c=t(4346),i=t(6032),s=t(2022),u=t(9940),d=t(7618),m=t(3379),p=t.n(m),f=t(7795),g=t.n(f),E=t(569),h=t.n(E),Z=t(3565),y=t.n(Z),b=t(9216),x=t.n(b),_=t(4589),v=t.n(_),w=t(1738),P={};P.styleTagTransform=v(),P.setAttributes=y(),P.insert=h().bind(null,"head"),P.domAPI=g(),P.insertStyleElement=x();p()(w.Z,P);w.Z&&w.Z.locals&&w.Z.locals;function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var I=r.O;a.Z.registerLanguage("tsx",l.Z);const S=function(e){var n=e.title,t=e.description,r=e.content,l=e.code,m=(0,o.useContext)(s.f),p=A((0,o.useState)(!1),2),f=p[0],g=p[1],E=A((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),h=E[0],Z=E[1],y=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(f&&ResizeObserver&&y.current){var e=new ResizeObserver((function(){var e=y.current.getBoundingClientRect().height;Z(e)}));return e.observe(y.current),function(){return e.disconnect()}}}),[f]),(0,o.useEffect)((function(){return d.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(I,"-demo")},o.createElement("h3",{className:"".concat(I,"-demo__title")},o.createElement("span",null,n),o.createElement("div",{className:"".concat(I,"-demo__options")},o.createElement(u.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return d.Z.success({content:"Code copied"})})).catch((function(){return d.Z.error({content:"Please copy manually"})}))}}),o.createElement(u.Z,{type:"code",onClick:function(){return g(!f)}}))),t&&o.createElement("p",{className:"".concat(I,"-demo__description")},t),o.createElement("div",{className:"".concat(I,"-demo__content")},r),o.createElement("div",{className:"".concat(I,"-demo__code-wrapper"),style:{height:f?h:0}},o.createElement("div",{ref:y},o.createElement(a.Z,{className:"".concat(I,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:m?i.Z:c.Z},l))))}},3416:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,".input-demo {\n  position: static;\n}\n.input-demo .fog-demo__content > .fog-input,\n.input-demo .fog-input-wrapper {\n  width: 300px;\n  margin: 0 12px 12px 0;\n}\n.input-demo .fog-demo__content > .fog-input:last-child,\n.input-demo .fog-input-wrapper:last-child {\n  margin-bottom: 0;\n}\n",""]);const c=l},1738:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const c=l}}]);