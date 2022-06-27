"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[20],{9086:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var o=t(7294),r=t(7368),a=t(9960),l=t(7385),i=t(2041),c=t(5894);const s=function(){return o.createElement(c.Z,{content:"Tooltip content."},o.createElement("span",{style:{display:"inline-block"}},"Hover me"))};var u=r.w,p=r.c,d=u.tooltip,f=d.demos,m=d.apiRows;const g=function(){return o.createElement("div",{className:"tooltip-demo"},o.createElement(l.Z,null,"Tooltip"),o.createElement("p",null,"Tooltip is used to display content in popup."),o.createElement("h2",null,"Demo"),o.createElement(i.Z,{title:"Basic Usage",content:o.createElement(s,null),code:f["demo-1"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:p,data:m.default}))}},5894:(n,e,t)=>{t.d(e,{Z:()=>C});var o=t(7294),r=t(4184),a=t.n(r),l=t(9074),i=t(4137),c=t(3379),s=t.n(c),u=t(7795),p=t.n(u),d=t(569),f=t.n(d),m=t(3565),g=t.n(m),b=t(9216),y=t.n(b),v=t(4589),h=t.n(v),_=t(5048),x={};x.styleTagTransform=h(),x.setAttributes=g(),x.insert=f().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=y();s()(_.Z,x);_.Z&&_.Z.locals&&_.Z.locals;var E=["popupClassName","children","content"];function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},Z.apply(this,arguments)}function w(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var O=l.O,A=function(n){var e=n.popupClassName,t=n.children,r=n.content,l=w(n,E);return o.createElement(i.Z,Z({popupClassName:a()("".concat(O,"-tooltip"),e),popup:o.createElement(o.Fragment,null,r)},l),t)};A.defaultProps={trigger:"hover",placement:"top",showArrow:!0};const C=A},2041:(n,e,t)=>{t.d(e,{Z:()=>N});var o=t(7294),r=t(9074),a=t(2282),l=t(5046),i=t(4346),c=t(6032),s=t(8849),u=t(9940),p=t(7618),d=t(3379),f=t.n(d),m=t(7795),g=t.n(m),b=t(569),y=t.n(b),v=t(3565),h=t.n(v),_=t(9216),x=t.n(_),E=t(4589),Z=t.n(E),w=t(1738),O={};O.styleTagTransform=Z(),O.setAttributes=h(),O.insert=y().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=x();f()(w.Z,O);w.Z&&w.Z.locals&&w.Z.locals;function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(o=t.next()).done)&&(a.push(o.value),!e||a.length!==e);l=!0);}catch(n){i=!0,r=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return C(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}var k=r.O;a.Z.registerLanguage("tsx",l.Z);const N=function(n){var e=n.title,t=n.description,r=n.content,l=n.code,d=(0,o.useContext)(s.f),f=A((0,o.useState)(!1),2),m=f[0],g=f[1],b=A((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),y=b[0],v=b[1],h=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(m&&ResizeObserver&&h.current){var n=new ResizeObserver((function(){var n=h.current.getBoundingClientRect().height;v(n)}));return n.observe(h.current),function(){return n.disconnect()}}}),[m]),(0,o.useEffect)((function(){return p.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(k,"-demo")},o.createElement("h3",{className:"".concat(k,"-demo__title")},o.createElement("span",null,e),o.createElement("div",{className:"".concat(k,"-demo__options")},o.createElement(u.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return p.Z.success({content:"Code copied"})})).catch((function(){return p.Z.error({content:"Please copy manually"})}))}}),o.createElement(u.Z,{type:"code",onClick:function(){return g(!m)}}))),t&&o.createElement("p",{className:"".concat(k,"-demo__description")},t),o.createElement("div",{className:"".concat(k,"-demo__content")},r),o.createElement("div",{className:"".concat(k,"-demo__code-wrapper"),style:{height:m?y:0}},o.createElement("div",{ref:h},o.createElement(a.Z,{className:"".concat(k,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:d?c.Z:i.Z},l))))}},5048:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,".fog-tooltip,\n.fog-tooltip *,\n.fog-tooltip *:before,\n.fog-tooltip *:after {\n  box-sizing: border-box;\n}\n.fog-tooltip .fog-trigger__popup-content {\n  padding: 8px;\n  color: var(--fog-contrast-color);\n  font-size: 14px;\n  line-height: 22px;\n  background-color: var(--fog-background-color-profound);\n}\n.fog-tooltip .fog-trigger__popup-arrow {\n  background-color: var(--fog-background-color-profound);\n}\n",""]);const i=l},1738:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const i=l}}]);