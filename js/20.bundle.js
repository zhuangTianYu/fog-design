"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[20],{6383:(n,e,t)=>{t.d(e,{Z:()=>M});var r=t(7294),o=t(4184),a=t.n(o),l=t(9074),i=t(9171),u=t(9940),c=t(4692),s=t(3477),f=(t(8913),t(3379)),p=t.n(f),m=t(7795),d=t.n(m),g=t(569),b=t.n(g),y=t(3565),v=t.n(y),h=t(9216),_=t.n(h),E=t(4589),w=t.n(E),x=t(6560),Z={};Z.styleTagTransform=w(),Z.setAttributes=v(),Z.insert=b().bind(null,"head"),Z.domAPI=d(),Z.insertStyleElement=_();p()(x.Z,Z);x.Z&&x.Z.locals&&x.Z.locals;var S=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onBlur","onEnter"];function A(){return A=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},A.apply(this,arguments)}function N(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return C(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function k(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var j=l.O,T=function(n){return(0,s.v5)(n)?"".concat(n):""},P=function(n,e){return""===n||isNaN(Number(n))?e:Number(n)},I=(0,r.forwardRef)((function(n,e){var t,o,l=n.className,f=n.value,p=n.defaultValue,m=n.onChange,d=n.placeholder,g=n.disabled,b=n.readOnly,y=n.prefix,v=n.suffix,h=n.min,_=n.max,E=n.step,w=n.showControl,x=n.keepControl,Z=n.onBlur,C=n.onEnter,I=k(n,S),M=(0,c.Z)({value:f,defaultValue:p,onChange:m}),D=M.value,z=M.onChange,B=O((0,r.useState)(!1),2),J=B[0],R=B[1],U=O((0,r.useState)(!1),2),V=U[0],F=U[1],$=(0,r.useRef)(null),G=e||$,K=O((0,r.useState)(""),2),L=K[0],q=K[1];(0,r.useEffect)((function(){q(T(D))}),[D]);var H=function(n){return null===n?null:"number"!=typeof h&&"number"!=typeof _?n:"number"==typeof h&&"number"!=typeof _?Math.max(h,n):"number"!=typeof h&&"number"==typeof _?Math.min(_,n):h>_?n:n<h?h:n>_?_:n},Q=function(n){!J&&G.current.focus();var e=P(L,0)+n*E,t=H(e);z(t)};return r.createElement(i.Z,A({className:a()(l,(t={},N(t,"".concat(j,"-input-number"),!0),N(t,"".concat(j,"-input-number--focused"),J),N(t,"".concat(j,"-input-number--entered"),V),N(t,"".concat(j,"-input-number--keep-control"),x),t)),focused:J,disabled:g,readOnly:b,prefix:y,suffix:v,onClick:function(){return G.current.focus()},onMouseEnter:function(){return F(!0)},onMouseLeave:function(){return F(!1)}},I),r.createElement("input",{className:"".concat(j,"-input"),ref:G,value:L,disabled:g,readOnly:b,placeholder:d,onFocus:function(){return R(!0)},onBlur:function(n){var e=P(n.target.value,null),t=H(e);t!==D&&z(t),q(T(t)),R(!1),n.currentTarget.value=t,(0,s.mf)(Z)&&Z(n)},onChange:function(n){(0,s.At)(n.target.value)&&q(n.target.value)},onKeyDown:function(n){if("ArrowUp"===n.key&&(n.preventDefault(),Q(1)),"ArrowDown"===n.key&&(n.preventDefault(),Q(-1)),"Enter"===n.key){var e=P(n.currentTarget.value,null),t=H(e);t!==D&&z(t),q(T(t)),n.currentTarget.value=t,(0,s.mf)(C)&&C(n)}}}),w&&r.createElement("div",{className:a()((o={},N(o,"".concat(j,"-input-number__control"),!0),N(o,"".concat(j,"-input-number__control--disabled"),g),N(o,"".concat(j,"-input-number__control--border-right"),v),o))},r.createElement(u.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(n){return n.preventDefault()},onClick:function(){return!g&&Q(1)},type:"up"}),r.createElement(u.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(n){return n.preventDefault()},onClick:function(){return!g&&Q(-1)},type:"down"})))}));I.defaultProps={step:1,showControl:!0,keepControl:!0},I.displayName="InputNumber";const M=I},4791:(n,e,t)=>{t.r(e),t.d(e,{default:()=>W});var r=t(7294),o=t(7368),a=t(9960),l=t(2041),i=t(4184),u=t.n(i),c=t(9074),s=t(4692),f=t(3477),p=t(8692),m=t(194),d=t(9940),g=t(6383),b=t(3379),y=t.n(b),v=t(7795),h=t.n(v),_=t(569),E=t.n(_),w=t(3565),x=t.n(w),Z=t(9216),S=t.n(Z),A=t(4589),N=t.n(A),O=t(8456),C={};C.styleTagTransform=N(),C.setAttributes=x(),C.insert=E().bind(null,"head"),C.domAPI=h(),C.insertStyleElement=S();y()(O.Z,C);O.Z&&O.Z.locals&&O.Z.locals;function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return T(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var P=c.O,I=m.Z.Option,M=function(n){var e=n.className,t=n.style,o=n.page,a=n.pageSize,l=n.defaultPage,i=n.defaultPageSize,c=n.total,b=n.pageSizeOptions,y=n.disabled,v=n.showTotal,h=n.showJumper,_=n.onChange,E=j((0,r.useState)(null),2),w=E[0],x=E[1],Z=(0,r.useMemo)((function(){return(0,f.mf)(_)?_:function(){}}),[_]),S=(0,s.Z)({value:o,defaultValue:l}),A=S.value,N=void 0===A?1:A,O=S.onChange,C=(0,s.Z)({value:a,defaultValue:i}),T=C.value,M=void 0===T?20:T,D=C.onChange,z=function(n){O(n),Z(n,M)},B=function(n,e){x(n),setTimeout((function(){x(e)}))},J=(0,r.useRef)(null),R=(0,r.useMemo)((function(){return c>0&&M>0?Math.ceil(c/M):0}),[M,c]),U=(0,r.useMemo)((function(){if(!v)return null;var n=null;if("function"==typeof v){var e=[];e[0]=(N-1)*M+1,e[1]=Math.min(N*M,c),n=v(c,e)}else n="Total ".concat(c," items");return r.createElement("span",{className:"".concat(P,"-pagination__total")},n)}),[v,c,N,M]);return r.createElement("div",{className:u()("".concat(P,"-pagination"),e),style:t},R>0?r.createElement(r.Fragment,null,U,r.createElement(p.Z,{className:"".concat(P,"-pagination__item"),disabled:y||N<=1,onClick:function(n){n.currentTarget.blur(),z(N-1)}},r.createElement(d.Z,{type:"left"})),Array.from({length:R}).map((function(n,e){var t;return r.createElement(p.Z,{key:e,className:u()((t={},k(t,"".concat(P,"-pagination__item"),!0),k(t,"".concat(P,"-pagination__item--active"),e+1===N),t)),disabled:y,onClick:function(){return e+1!==N&&z(e+1)}},e+1)})),r.createElement(p.Z,{className:"".concat(P,"-pagination__item"),disabled:y||N>=R,onClick:function(n){n.currentTarget.blur(),z(N+1)}},r.createElement(d.Z,{type:"right"})),r.createElement("div",{className:"".concat(P,"-pagination__options-wrapper"),ref:J},r.createElement(m.Z,{className:"".concat(P,"-pagination__options"),value:M,onChange:function(n){O(1),D(n),Z(1,n)},disabled:y,getPopupMountNode:function(){return J.current}},b.map((function(n){return r.createElement(I,{key:n,value:n},"".concat(n," / Page"))})))),h&&r.createElement("div",{className:"".concat(P,"-pagination__jumper")},r.createElement("span",{className:"".concat(P,"-pagination__jumper-text")},"Go to"),r.createElement(g.Z,{className:"".concat(P,"-pagination__jumper-input"),placeholder:"Page",value:w,min:1,max:R,showControl:!1,onBlur:function(n){B(Number(n.target.value),null)},onEnter:function(n){if(""!==n.currentTarget.value){var e=Number(n.currentTarget.value);O(e),Z(e,M),B(Number(n.currentTarget.value),null)}}}))):"empty")};M.defaultProps={total:0,pageSizeOptions:[10,20,50,100]};const D=M;const z=function(){return r.createElement(D,{total:100})};var B=t(2708);function J(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return R(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const U=function(){var n=J((0,r.useState)(!1),2),e=n[0],t=n[1];return r.createElement(r.Fragment,null,r.createElement(D,{style:{marginRight:12},disabled:e,total:100}),r.createElement(B.Z,{checked:e,onChange:t}))};const V=function(){return r.createElement(D,{total:100,showJumper:!0})};const F=function(){return r.createElement(r.Fragment,null,r.createElement(D,{style:{marginBottom:12},total:100,showJumper:!0,showTotal:!0}),r.createElement("br",null),r.createElement(D,{total:100,showJumper:!0,showTotal:function(n,e){return"".concat(e[0],"-").concat(e[1]," of ").concat(n," items")}}))};var $=t(4368),G={};G.styleTagTransform=N(),G.setAttributes=x(),G.insert=E().bind(null,"head"),G.domAPI=h(),G.insertStyleElement=S();y()($.Z,G);$.Z&&$.Z.locals&&$.Z.locals;var K=o.w,L=o.c,q=K.pagination,H=q.demos,Q=q.apiRows;const W=function(){return r.createElement("div",{className:"pagination-demo"},r.createElement("h1",null,"Pagination"),r.createElement("p",null,"Pagination displays corresponding data by page and pageSize."),r.createElement("h2",null,"Demo"),r.createElement(l.Z,{title:"Basic Usage",content:r.createElement(z,null),code:H["demo-1"]}),r.createElement(l.Z,{title:"Disabled",content:r.createElement(U,null),code:H["demo-2"]}),r.createElement(l.Z,{title:"Jumper",content:r.createElement(V,null),code:H["demo-3"]}),r.createElement(l.Z,{title:"Total",content:r.createElement(F,null),code:H["demo-4"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:L,data:Q.default}))}},6560:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const i=l},4368:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".pagination-demo {\n  position: static;\n}\n",""]);const i=l},8456:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".fog-pagination {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-pagination,\n.fog-pagination *,\n.fog-pagination *:before,\n.fog-pagination *:after {\n  box-sizing: border-box;\n}\n.fog-pagination__total {\n  margin-right: 8px;\n}\n.fog-pagination__item {\n  padding: 4px;\n  min-width: 32px;\n  margin-right: 8px;\n}\n.fog-pagination__item--active {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n}\n.fog-pagination__options-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.fog-pagination__options {\n  width: 120px;\n}\n.fog-pagination__jumper {\n  display: inline-block;\n  margin-left: 8px;\n}\n.fog-pagination__jumper-text {\n  display: inline-block;\n  margin-right: 8px;\n}\n.fog-pagination__jumper-input {\n  display: inline-block;\n  width: 60px;\n}\n",""]);const i=l}}]);