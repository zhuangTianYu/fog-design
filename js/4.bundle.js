"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[4],{606:(e,n,t)=>{t.r(n),t.d(n,{default:()=>fe});var l=t(7294),o=t(7368),r=t(9960),c=t(2041),a=t(4184),i=t.n(a),f=t(9074),s=t(3379),m=t.n(s),u=t(7795),d=t.n(u),g=t(569),p=t.n(g),E=t(3565),v=t.n(E),h=t(9216),y=t.n(h),b=t(4589),w=t.n(b),O=t(3727),Z={};Z.styleTagTransform=w(),Z.setAttributes=v(),Z.insert=p().bind(null,"head"),Z.domAPI=d(),Z.insertStyleElement=y();m()(O.Z,Z);O.Z&&O.Z.locals&&O.Z.locals;function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var P=f.O;const C=function(e){var n,t=e.className,o=e.style,r=e.gutter,c=e.span,a=e.offset,f=e.children,s=(0,l.useMemo)((function(){return"number"==typeof r&&r>0?x(x({},o),{},{paddingLeft:.5*r,paddingRight:.5*r}):o}),[o,r]);return l.createElement("div",{className:i()(t,(n={},_(n,"".concat(P,"-col"),!0),_(n,"".concat(P,"-col--").concat(c),c),_(n,"".concat(P,"-col-offset--").concat(a),a),n)),style:s},f)};var A=t(5471),S={};S.styleTagTransform=w(),S.setAttributes=v(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=y();m()(A.Z,S);A.Z&&A.Z.locals&&A.Z.locals;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},R.apply(this,arguments)}function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){M(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var T=f.O,z=function(e){var n=e.className,t=e.style,o=e.wrap,r=e.gutter,c=e.align,a=e.justify,f=e.children,s=(0,l.useMemo)((function(){var e=[];return l.Children.forEach(f,(function(n){n&&n.type===C&&e.push(n)})),e.map((function(e){return k(k({},e.props),{},{gutter:r})}))}),[f,r]),m=(0,l.useMemo)((function(){var e={};return o&&(e=k(k({},e),{},{flexWrap:"wrap"})),"number"==typeof r&&r>0&&(e=k(k({},e),{},{marginLeft:-.5*r,marginRight:-.5*r})),"string"==typeof c&&(e=k(k({},e),{},{alignItems:c})),"string"==typeof a&&(e=k(k({},e),{},{justifyContent:a})),k(k({},t),e)}),[t,o,r,c,a]);return l.createElement("div",{className:i()("".concat(T,"-row"),n),style:m},s.map((function(e,n){return l.createElement(C,R({key:n},e),e.children)})))};z.defaultProps={wrap:!0};var D=function(){return null};var I=D.Row=z,F=D.Col=C;const L=function(){return l.createElement(l.Fragment,null,l.createElement(I,null,l.createElement(F,{span:24},l.createElement("div",null,"col-24"))),l.createElement(I,null,l.createElement(F,{span:12},l.createElement("div",null,"col-12")),l.createElement(F,{span:12},l.createElement("div",null,"col-12"))),l.createElement(I,null,l.createElement(F,{span:6},l.createElement("div",null,"col-6")),l.createElement(F,{span:6},l.createElement("div",null,"col-6")),l.createElement(F,{span:6},l.createElement("div",null,"col-6")),l.createElement(F,{span:6},l.createElement("div",null,"col-6"))))};var U=D.Row,G=D.Col;const B=function(){return l.createElement(l.Fragment,null,l.createElement(U,{gutter:12},l.createElement(G,{span:24},l.createElement("div",null,"col-24"))),l.createElement(U,{gutter:12},l.createElement(G,{span:12},l.createElement("div",null,"col-12")),l.createElement(G,{span:12},l.createElement("div",null,"col-12"))),l.createElement(U,{gutter:12},l.createElement(G,{span:6},l.createElement("div",null,"col-6")),l.createElement(G,{span:6},l.createElement("div",null,"col-6")),l.createElement(G,{span:6},l.createElement("div",null,"col-6")),l.createElement(G,{span:6},l.createElement("div",null,"col-6"))))};var W=D.Row,J=D.Col;const $=function(){return l.createElement(l.Fragment,null,l.createElement("p",null,'justify="start"'),l.createElement(W,{justify:"start"},l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4"))),l.createElement("p",null,'justify="space-between"'),l.createElement(W,{justify:"space-between"},l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4")),l.createElement(J,{span:4},l.createElement("div",null,"col-4"))))};var q=D.Row,H=D.Col;const K=function(){return l.createElement(l.Fragment,null,l.createElement("p",null,'align="start"'),l.createElement(q,{align:"start",gutter:12},l.createElement(H,{span:6},l.createElement("div",{style:{height:84}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:48}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:72}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:48}},"col-6"))),l.createElement("p",null,'align="center"'),l.createElement(q,{align:"center",gutter:12},l.createElement(H,{span:6},l.createElement("div",{style:{height:84}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:48}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:72}},"col-6")),l.createElement(H,{span:6},l.createElement("div",{style:{height:48}},"col-6"))))};var Q=D.Row,V=D.Col;const X=function(){return l.createElement(l.Fragment,null,l.createElement(Q,null,l.createElement(V,{span:12},l.createElement("div",null,"col-12")),l.createElement(V,{span:6,offset:6},l.createElement("div",null,"col-6"))),l.createElement(Q,null,l.createElement(V,{span:6,offset:6},l.createElement("div",null,"col-6")),l.createElement(V,{span:6,offset:6},l.createElement("div",null,"col-6"))),l.createElement(Q,null,l.createElement(V,{span:4,offset:6},l.createElement("div",null,"col-4")),l.createElement(V,{span:12,offset:2},l.createElement("div",null,"col-12"))))};var Y=D.Row,ee=D.Col;const ne=function(){return l.createElement(l.Fragment,null,l.createElement("p",null,'wrap="true"'),l.createElement(Y,null,l.createElement(ee,{span:24},l.createElement("div",null,"col-24")),l.createElement(ee,{span:16},l.createElement("div",null,"col-16"))),l.createElement("p",null,'wrap="false"'),l.createElement(Y,{wrap:!1},l.createElement(ee,{span:24},l.createElement("div",null,"col-24")),l.createElement(ee,{span:16},l.createElement("div",null,"col-16"))))};var te=t(4709),le={};le.styleTagTransform=w(),le.setAttributes=v(),le.insert=p().bind(null,"head"),le.domAPI=d(),le.insertStyleElement=y();m()(te.Z,le);te.Z&&te.Z.locals&&te.Z.locals;var oe=o.w,re=o.c,ce=oe.grid,ae=ce.demos,ie=ce.apiRows;const fe=function(){return l.createElement("div",{className:"grid-demo"},l.createElement("h1",null,"Grid"),l.createElement("p",null,"Grid is used to layout elements proportionally."),l.createElement("h2",null,"Demo"),l.createElement(c.Z,{title:"Basic Usage",content:l.createElement(L,null),code:ae["demo-1"]}),l.createElement(c.Z,{title:"Gutter",content:l.createElement(B,null),code:ae["demo-2"]}),l.createElement(c.Z,{title:"Justify",content:l.createElement($,null),code:ae["demo-3"]}),l.createElement(c.Z,{title:"Align",content:l.createElement(K,null),code:ae["demo-4"]}),l.createElement(c.Z,{title:"Offset",content:l.createElement(X,null),code:ae["demo-5"]}),l.createElement(c.Z,{title:"Wrap",content:l.createElement(ne,null),code:ae["demo-6"]}),l.createElement("h2",null,"API"),l.createElement("h3",null,"Row"),l.createElement(r.Z,{columns:re,data:ie.row}),l.createElement("h3",null,"Col"),l.createElement(r.Z,{columns:re,data:ie.col}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>A});var l=t(7294),o=t(9074),r=t(2282),c=t(5046),a=t(4346),i=t(6032),f=t(2022),s=t(9940),m=t(7618),u=t(3379),d=t.n(u),g=t(7795),p=t.n(g),E=t(569),v=t.n(E),h=t(3565),y=t.n(h),b=t(9216),w=t.n(b),O=t(4589),Z=t.n(O),j=t(1738),x={};x.styleTagTransform=Z(),x.setAttributes=y(),x.insert=v().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=w();d()(j.Z,x);j.Z&&j.Z.locals&&j.Z.locals;function _(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var l,o,r=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(l=t.next()).done)&&(r.push(l.value),!n||r.length!==n);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}var C=o.O;r.Z.registerLanguage("tsx",c.Z);const A=function(e){var n=e.title,t=e.description,o=e.content,c=e.code,u=(0,l.useContext)(f.f),d=_((0,l.useState)(!1),2),g=d[0],p=d[1],E=_((0,l.useState)((function(){return ResizeObserver?0:"auto"})),2),v=E[0],h=E[1],y=(0,l.useRef)(null);(0,l.useLayoutEffect)((function(){if(g&&ResizeObserver&&y.current){var e=new ResizeObserver((function(){var e=y.current.getBoundingClientRect().height;h(e)}));return e.observe(y.current),function(){return e.disconnect()}}}),[g]),(0,l.useEffect)((function(){return m.Z.destroyAll}),[]);return l.createElement("div",{className:"".concat(C,"-demo")},l.createElement("h3",{className:"".concat(C,"-demo__title")},l.createElement("span",null,n),l.createElement("div",{className:"".concat(C,"-demo__options")},l.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(c).then((function(){return m.Z.success({content:"Code copied"})})).catch((function(){return m.Z.error({content:"Please copy manually"})}))}}),l.createElement(s.Z,{type:"code",onClick:function(){return p(!g)}}))),t&&l.createElement("p",{className:"".concat(C,"-demo__description")},t),l.createElement("div",{className:"".concat(C,"-demo__content")},o),l.createElement("div",{className:"".concat(C,"-demo__code-wrapper"),style:{height:g?v:0}},l.createElement("div",{ref:y},l.createElement(r.Z,{className:"".concat(C,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:u?i.Z:a.Z},c))))}},3727:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(8081),o=t.n(l),r=t(3645),c=t.n(r)()(o());c.push([e.id,".fog-col,\n.fog-col *,\n.fog-col *:before,\n.fog-col *:after {\n  box-sizing: border-box;\n}\n.fog-col--24 {\n  width: calc(24 / 24 * 100%);\n}\n.fog-col--23 {\n  width: calc(23 / 24 * 100%);\n}\n.fog-col--22 {\n  width: calc(22 / 24 * 100%);\n}\n.fog-col--21 {\n  width: calc(21 / 24 * 100%);\n}\n.fog-col--20 {\n  width: calc(20 / 24 * 100%);\n}\n.fog-col--19 {\n  width: calc(19 / 24 * 100%);\n}\n.fog-col--18 {\n  width: calc(18 / 24 * 100%);\n}\n.fog-col--17 {\n  width: calc(17 / 24 * 100%);\n}\n.fog-col--16 {\n  width: calc(16 / 24 * 100%);\n}\n.fog-col--15 {\n  width: calc(15 / 24 * 100%);\n}\n.fog-col--14 {\n  width: calc(14 / 24 * 100%);\n}\n.fog-col--13 {\n  width: calc(13 / 24 * 100%);\n}\n.fog-col--12 {\n  width: calc(12 / 24 * 100%);\n}\n.fog-col--11 {\n  width: calc(11 / 24 * 100%);\n}\n.fog-col--10 {\n  width: calc(10 / 24 * 100%);\n}\n.fog-col--9 {\n  width: calc(9 / 24 * 100%);\n}\n.fog-col--8 {\n  width: calc(8 / 24 * 100%);\n}\n.fog-col--7 {\n  width: calc(7 / 24 * 100%);\n}\n.fog-col--6 {\n  width: calc(6 / 24 * 100%);\n}\n.fog-col--5 {\n  width: calc(5 / 24 * 100%);\n}\n.fog-col--4 {\n  width: calc(4 / 24 * 100%);\n}\n.fog-col--3 {\n  width: calc(3 / 24 * 100%);\n}\n.fog-col--2 {\n  width: calc(2 / 24 * 100%);\n}\n.fog-col--1 {\n  width: calc(1 / 24 * 100%);\n}\n.fog-col-offset--24 {\n  margin-left: calc(24 / 24 * 100%);\n}\n.fog-col-offset--23 {\n  margin-left: calc(23 / 24 * 100%);\n}\n.fog-col-offset--22 {\n  margin-left: calc(22 / 24 * 100%);\n}\n.fog-col-offset--21 {\n  margin-left: calc(21 / 24 * 100%);\n}\n.fog-col-offset--20 {\n  margin-left: calc(20 / 24 * 100%);\n}\n.fog-col-offset--19 {\n  margin-left: calc(19 / 24 * 100%);\n}\n.fog-col-offset--18 {\n  margin-left: calc(18 / 24 * 100%);\n}\n.fog-col-offset--17 {\n  margin-left: calc(17 / 24 * 100%);\n}\n.fog-col-offset--16 {\n  margin-left: calc(16 / 24 * 100%);\n}\n.fog-col-offset--15 {\n  margin-left: calc(15 / 24 * 100%);\n}\n.fog-col-offset--14 {\n  margin-left: calc(14 / 24 * 100%);\n}\n.fog-col-offset--13 {\n  margin-left: calc(13 / 24 * 100%);\n}\n.fog-col-offset--12 {\n  margin-left: calc(12 / 24 * 100%);\n}\n.fog-col-offset--11 {\n  margin-left: calc(11 / 24 * 100%);\n}\n.fog-col-offset--10 {\n  margin-left: calc(10 / 24 * 100%);\n}\n.fog-col-offset--9 {\n  margin-left: calc(9 / 24 * 100%);\n}\n.fog-col-offset--8 {\n  margin-left: calc(8 / 24 * 100%);\n}\n.fog-col-offset--7 {\n  margin-left: calc(7 / 24 * 100%);\n}\n.fog-col-offset--6 {\n  margin-left: calc(6 / 24 * 100%);\n}\n.fog-col-offset--5 {\n  margin-left: calc(5 / 24 * 100%);\n}\n.fog-col-offset--4 {\n  margin-left: calc(4 / 24 * 100%);\n}\n.fog-col-offset--3 {\n  margin-left: calc(3 / 24 * 100%);\n}\n.fog-col-offset--2 {\n  margin-left: calc(2 / 24 * 100%);\n}\n.fog-col-offset--1 {\n  margin-left: calc(1 / 24 * 100%);\n}\n",""]);const a=c},5471:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(8081),o=t.n(l),r=t(3645),c=t.n(r)()(o());c.push([e.id,".fog-row {\n  display: flex;\n}\n.fog-row,\n.fog-row *,\n.fog-row *:before,\n.fog-row *:after {\n  box-sizing: border-box;\n}\n",""]);const a=c},4709:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(8081),o=t.n(l),r=t(3645),c=t.n(r)()(o());c.push([e.id,".grid-demo .fog-row {\n  margin-bottom: 12px;\n}\n.grid-demo .fog-row:last-child {\n  margin-bottom: 0;\n}\n.grid-demo .fog-row .fog-col div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--fog-contrast-color);\n  line-height: 48px;\n}\n.grid-demo .fog-row .fog-col:nth-child(odd) div {\n  background-color: var(--fog-primary-color);\n}\n.grid-demo .fog-row .fog-col:nth-child(even) div {\n  background-color: var(--fog-primary-color-hover);\n}\n",""]);const a=c},1738:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(8081),o=t.n(l),r=t(3645),c=t.n(r)()(o());c.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const a=c}}]);