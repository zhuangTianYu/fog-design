"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[7],{1710:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Q});var r=t(7294),o=t(7368),a=t(9960),l=t(2041),u=t(4184),i=t.n(u),c=t(9074),s=t(9171),f=t(9940),p=t(4692),d=t(3477),m=(t(8913),t(3379)),b=t.n(m),g=t(7795),y=t.n(g),h=t(569),v=t.n(h),_=t(3565),x=t.n(_),E=t(9216),w=t.n(E),Z=t(4589),C=t.n(Z),A=t(6560),N={};N.styleTagTransform=C(),N.setAttributes=x(),N.insert=v().bind(null,"head"),N.domAPI=y(),N.insertStyleElement=w();b()(A.Z,N);A.Z&&A.Z.locals&&A.Z.locals;var O=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","step","keepControl"];function k(){return k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(this,arguments)}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var M=c.O,z=function(e){return(0,d.v5)(e)?"".concat(e):""},T=function(e,n){return""===e||isNaN(Number(e))?n:Number(e)},R=(0,r.forwardRef)((function(e,n){var t,o,a=e.className,l=e.value,u=e.defaultValue,c=e.onChange,m=e.placeholder,b=e.disabled,g=e.readOnly,y=e.prefix,h=e.suffix,v=e.step,_=e.keepControl,x=I(e,O),E=(0,p.Z)({value:l,defaultValue:u,onChange:c}),w=E.value,Z=E.onChange,C=P((0,r.useState)(!1),2),A=C[0],N=C[1],j=P((0,r.useState)(!1),2),R=j[0],D=j[1],U=(0,r.useRef)(null),$=n||U,L=P((0,r.useState)(""),2),B=L[0],V=L[1];(0,r.useEffect)((function(){V(z(w))}),[w]);var F=function(e){!A&&$.current.focus();var n=T(B,0)+e*v;Z(n)};return r.createElement(s.Z,k({className:i()(a,(t={},S(t,"".concat(M,"-input-number"),!0),S(t,"".concat(M,"-input-number--focused"),A),S(t,"".concat(M,"-input-number--entered"),R),S(t,"".concat(M,"-input-number--keep-control"),_),t)),focused:A,disabled:b,readOnly:g,prefix:y,suffix:h,onClick:function(){return $.current.focus()},onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)}},x),r.createElement("input",{className:"".concat(M,"-input"),ref:$,value:B,disabled:b,readOnly:g,placeholder:m,onFocus:function(){return N(!0)},onBlur:function(e){var n=T(e.target.value,null);n!==w&&Z(n),V(z(n)),N(!1)},onChange:function(e){(0,d.At)(e.target.value)&&V(e.target.value)},onKeyDown:function(e){"ArrowUp"===e.key&&F(1),"ArrowDown"===e.key&&F(-1)}}),r.createElement("div",{className:i()((o={},S(o,"".concat(M,"-input-number__control"),!0),S(o,"".concat(M,"-input-number__control--border-right"),h),o))},r.createElement(f.Z,{className:"".concat(M,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return F(1)},type:"up"}),r.createElement(f.Z,{className:"".concat(M,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return F(-1)},type:"down"})))}));R.defaultProps={step:1,keepControl:!0},R.displayName="InputNumber";const D=R;const U=function(){return r.createElement(D,{placeholder:"Please input"})};const $=function(){return r.createElement(D,{placeholder:"Please input",prefix:"$"})};const L=function(){return r.createElement(D,{placeholder:"Please input",prefix:"$",suffix:"/L"})};const B=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set keepControl to false, then the control will only show on hover or focus."),r.createElement(D,{placeholder:"Please input",keepControl:!1}),r.createElement(D,{placeholder:"Please input",prefix:"$",keepControl:!1}),r.createElement(D,{placeholder:"Please input",prefix:"$",suffix:"/L",keepControl:!1}))};var V=t(930),F={};F.styleTagTransform=C(),F.setAttributes=x(),F.insert=v().bind(null,"head"),F.domAPI=y(),F.insertStyleElement=w();b()(V.Z,F);V.Z&&V.Z.locals&&V.Z.locals;var K=o.w,q=o.c,G=K["input-number"],H=G.demos,J=G.apiRows;const Q=function(){return r.createElement("div",{className:"input-number-demo"},r.createElement("h1",null,"InputNumber"),r.createElement("p",null,"InputNumber is used to type numeric text."),r.createElement("h2",null,"Demo"),r.createElement(l.Z,{title:"Basic Usage",content:r.createElement(U,null),code:H["demo-1"]}),r.createElement(l.Z,{title:"Prefix",content:r.createElement($,null),code:H["demo-2"]}),r.createElement(l.Z,{title:"Suffix",content:r.createElement(L,null),code:H["demo-3"]}),r.createElement(l.Z,{title:"KeepControl",content:r.createElement(B,null),code:H["demo-4"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:q,data:J.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),o=t(9074),a=t(2282),l=t(5046),u=t(4346),i=t(6032),c=t(2022),s=t(9940),f=t(7618),p=t(3379),d=t.n(p),m=t(7795),b=t.n(m),g=t(569),y=t.n(g),h=t(3565),v=t.n(h),_=t(9216),x=t.n(_),E=t(4589),w=t.n(E),Z=t(1738),C={};C.styleTagTransform=w(),C.setAttributes=v(),C.insert=y().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=x();d()(Z.Z,C);Z.Z&&Z.Z.locals&&Z.Z.locals;function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var O=o.O;a.Z.registerLanguage("tsx",l.Z);const k=function(e){var n=e.title,t=e.description,o=e.content,l=e.code,p=(0,r.useContext)(c.f),d=A((0,r.useState)(!1),2),m=d[0],b=d[1],g=A((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),y=g[0],h=g[1],v=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(m&&ResizeObserver&&v.current){var e=new ResizeObserver((function(){var e=v.current.getBoundingClientRect().height;h(e)}));return e.observe(v.current),function(){return e.disconnect()}}}),[m]),(0,r.useEffect)((function(){return f.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(O,"-demo")},r.createElement("h3",{className:"".concat(O,"-demo__title")},r.createElement("span",null,n),r.createElement("div",{className:"".concat(O,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return f.Z.success({content:"Code copied"})})).catch((function(){return f.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return b(!m)}}))),t&&r.createElement("p",{className:"".concat(O,"-demo__description")},t),r.createElement("div",{className:"".concat(O,"-demo__content")},o),r.createElement("div",{className:"".concat(O,"-demo__code-wrapper"),style:{height:m?y:0}},r.createElement("div",{ref:v},r.createElement(a.Z,{className:"".concat(O,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:p?i.Z:u.Z},l))))}},930:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".input-number-demo {\n  position: static;\n}\n.input-number-demo .fog-demo__content > .fog-input-number,\n.input-number-demo .fog-demo__content > .fog-input-wrapper {\n  width: 300px;\n  margin: 0 12px 12px 0;\n}\n.input-number-demo .fog-demo__content > .fog-input-number:last-child,\n.input-number-demo .fog-demo__content > .fog-input-wrapper:last-child {\n  margin-bottom: 0;\n}\n",""]);const u=l},6560:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n",""]);const u=l},1738:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const u=l}}]);