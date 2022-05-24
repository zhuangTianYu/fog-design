"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[7],{3055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ne});var r=t(7294),o=t(7368),l=t(9960),a=t(2041),u=t(4184),c=t.n(u),i=t(9074),s=t(9171),f=t(9940),m=t(4692),p=t(3477),d=(t(8913),t(3379)),b=t.n(d),g=t(7795),h=t.n(g),y=t(569),v=t.n(y),_=t(3565),E=t.n(_),x=t(9216),w=t.n(x),Z=t(4589),C=t.n(Z),S=t(6560),A={};A.styleTagTransform=C(),A.setAttributes=E(),A.insert=v().bind(null,"head"),A.domAPI=h(),A.insertStyleElement=w();b()(S.Z,A);S.Z&&S.Z.locals&&S.Z.locals;var N=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onEnter"];function O(){return O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,l=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return l}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var I=i.O,T=function(e){return(0,p.v5)(e)?"".concat(e):""},D=function(e,n){return""===e||isNaN(Number(e))?n:Number(e)},z=(0,r.forwardRef)((function(e,n){var t,o,l=e.className,a=e.value,u=e.defaultValue,i=e.onChange,d=e.placeholder,b=e.disabled,g=e.readOnly,h=e.prefix,y=e.suffix,v=e.min,_=e.max,E=e.step,x=e.showControl,w=e.keepControl,Z=e.onEnter,C=j(e,N),S=(0,m.Z)({value:a,defaultValue:u,onChange:i}),A=S.value,M=S.onChange,z=P((0,r.useState)(!1),2),R=z[0],$=z[1],L=P((0,r.useState)(!1),2),U=L[0],F=L[1],B=(0,r.useRef)(null),V=n||B,K=P((0,r.useState)(""),2),q=K[0],G=K[1];(0,r.useEffect)((function(){G(T(A))}),[A]);var H=function(e){return"number"!=typeof v&&"number"!=typeof _?e:"number"==typeof v&&"number"!=typeof _?Math.max(v,e):"number"!=typeof v&&"number"==typeof _?Math.min(_,e):v>_?e:e<v?v:e>_?_:e},J=function(e){!R&&V.current.focus();var n=D(q,0)+e*E,t=H(n);M(t)};return r.createElement(s.Z,O({className:c()(l,(t={},k(t,"".concat(I,"-input-number"),!0),k(t,"".concat(I,"-input-number--focused"),R),k(t,"".concat(I,"-input-number--entered"),U),k(t,"".concat(I,"-input-number--keep-control"),w),t)),focused:R,disabled:b,readOnly:g,prefix:h,suffix:y,onClick:function(){return V.current.focus()},onMouseEnter:function(){return F(!0)},onMouseLeave:function(){return F(!1)}},C),r.createElement("input",{className:"".concat(I,"-input"),ref:V,value:q,disabled:b,readOnly:g,placeholder:d,onFocus:function(){return $(!0)},onBlur:function(e){var n=D(e.target.value,null),t=H(n);t!==A&&M(t),G(T(t)),$(!1)},onChange:function(e){(0,p.At)(e.target.value)&&G(e.target.value)},onKeyDown:function(e){if("ArrowUp"===e.key&&(e.preventDefault(),J(1)),"ArrowDown"===e.key&&(e.preventDefault(),J(-1)),"Enter"===e.key){var n=D(e.currentTarget.value,null),t=H(n);t!==A&&M(t),G(T(t)),e.currentTarget.value=t,(0,p.mf)(Z)&&Z(e)}}}),x&&r.createElement("div",{className:c()((o={},k(o,"".concat(I,"-input-number__control"),!0),k(o,"".concat(I,"-input-number__control--disabled"),b),k(o,"".concat(I,"-input-number__control--border-right"),y),o))},r.createElement(f.Z,{className:"".concat(I,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!b&&J(1)},type:"up"}),r.createElement(f.Z,{className:"".concat(I,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!b&&J(-1)},type:"down"})))}));z.defaultProps={step:1,showControl:!0,keepControl:!0},z.displayName="InputNumber";const R=z;const $=function(){return r.createElement(R,{placeholder:"Please input"})};const L=function(){return r.createElement(R,{placeholder:"Please input",prefix:"$"})};const U=function(){return r.createElement(R,{placeholder:"Please input",prefix:"$",suffix:"/L"})};const F=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set keepControl to false, then the control will only show on hover or focus."),r.createElement(R,{placeholder:"Please input",keepControl:!1}),r.createElement(R,{placeholder:"Please input",prefix:"$",keepControl:!1}),r.createElement(R,{placeholder:"Please input",prefix:"$",suffix:"/L",keepControl:!1}))};const B=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set min value to 0 and max value to 10."),r.createElement(R,{placeholder:"Please input",min:0,max:10}))};var V=t(7618);const K=function(){return(0,r.useEffect)((function(){return function(){return V.Z.destroyAll()}}),[]),r.createElement(r.Fragment,null,r.createElement("p",null,"Set min value to 0 and max value to 10."),r.createElement(R,{placeholder:"Please input",min:0,max:10,onEnter:function(e){V.Z.info({content:"Entered value: ".concat(e.currentTarget.value)})}}))};const q=function(){return r.createElement(R,{placeholder:"Please input",disabled:!0})};const G=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set showControl to false, then the control will never show."),r.createElement(R,{placeholder:"Please input",showControl:!1}),r.createElement(R,{placeholder:"Please input",prefix:"$",showControl:!1}),r.createElement(R,{placeholder:"Please input",prefix:"$",suffix:"/L",showControl:!1}))};var H=t(930),J={};J.styleTagTransform=C(),J.setAttributes=E(),J.insert=v().bind(null,"head"),J.domAPI=h(),J.insertStyleElement=w();b()(H.Z,J);H.Z&&H.Z.locals&&H.Z.locals;var Q=o.w,W=o.c,X=Q["input-number"],Y=X.demos,ee=X.apiRows;const ne=function(){return r.createElement("div",{className:"input-number-demo"},r.createElement("h1",null,"InputNumber"),r.createElement("p",null,"InputNumber is used to type numeric text."),r.createElement("h2",null,"Demo"),r.createElement(a.Z,{title:"Basic Usage",content:r.createElement($,null),code:Y["demo-1"]}),r.createElement(a.Z,{title:"Disabled",content:r.createElement(q,null),code:Y["demo-7"]}),r.createElement(a.Z,{title:"Prefix",content:r.createElement(L,null),code:Y["demo-2"]}),r.createElement(a.Z,{title:"Suffix",content:r.createElement(U,null),code:Y["demo-3"]}),r.createElement(a.Z,{title:"ShowControl",content:r.createElement(G,null),code:Y["demo-8"]}),r.createElement(a.Z,{title:"KeepControl",content:r.createElement(F,null),code:Y["demo-4"]}),r.createElement(a.Z,{title:"Range",content:r.createElement(B,null),code:Y["demo-5"]}),r.createElement(a.Z,{title:"Enter",content:r.createElement(K,null),code:Y["demo-6"]}),r.createElement("h2",null,"API"),r.createElement(l.Z,{columns:W,data:ee.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(7294),o=t(9074),l=t(2282),a=t(5046),u=t(4346),c=t(6032),i=t(2022),s=t(9940),f=t(7618),m=t(3379),p=t.n(m),d=t(7795),b=t.n(d),g=t(569),h=t.n(g),y=t(3565),v=t.n(y),_=t(9216),E=t.n(_),x=t(4589),w=t.n(x),Z=t(1738),C={};C.styleTagTransform=w(),C.setAttributes=v(),C.insert=h().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=E();p()(Z.Z,C);Z.Z&&Z.Z.locals&&Z.Z.locals;function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,l=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return l}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var N=o.O;l.Z.registerLanguage("tsx",a.Z);const O=function(e){var n=e.title,t=e.description,o=e.content,a=e.code,m=(0,r.useContext)(i.f),p=S((0,r.useState)(!1),2),d=p[0],b=p[1],g=S((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),h=g[0],y=g[1],v=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(d&&ResizeObserver&&v.current){var e=new ResizeObserver((function(){var e=v.current.getBoundingClientRect().height;y(e)}));return e.observe(v.current),function(){return e.disconnect()}}}),[d]),(0,r.useEffect)((function(){return f.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(N,"-demo")},r.createElement("h3",{className:"".concat(N,"-demo__title")},r.createElement("span",null,n),r.createElement("div",{className:"".concat(N,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(a).then((function(){return f.Z.success({content:"Code copied"})})).catch((function(){return f.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return b(!d)}}))),t&&r.createElement("p",{className:"".concat(N,"-demo__description")},t),r.createElement("div",{className:"".concat(N,"-demo__content")},o),r.createElement("div",{className:"".concat(N,"-demo__code-wrapper"),style:{height:d?h:0}},r.createElement("div",{ref:v},r.createElement(l.Z,{className:"".concat(N,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:m?c.Z:u.Z},a))))}},930:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,".input-number-demo {\n  position: static;\n}\n.input-number-demo .fog-demo__content > .fog-input-number,\n.input-number-demo .fog-demo__content > .fog-input-wrapper {\n  width: 300px;\n  margin: 0 12px 12px 0;\n}\n.input-number-demo .fog-demo__content > .fog-input-number:last-child,\n.input-number-demo .fog-demo__content > .fog-input-wrapper:last-child {\n  margin-bottom: 0;\n}\n",""]);const u=a},6560:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const u=a},1738:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const u=a}}]);