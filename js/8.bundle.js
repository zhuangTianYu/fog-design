"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[8],{9701:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var r=t(7294),a=t(4184),c=t.n(a),o=t(9074),i=t(6407),l=t(249),p=t(4692),d=t(3379),s=t.n(d),u=t(7795),g=t.n(u),f=t(569),m=t.n(f),_=t(3565),v=t.n(_),k=t(9216),h=t.n(k),y=t(4589),b=t.n(y),x=t(4051),E={};E.styleTagTransform=b(),E.setAttributes=v(),E.insert=m().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=h();s()(x.Z,E);x.Z&&x.Z.locals&&x.Z.locals;function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N=o.O;const Z=function(e){var n=e.className,t=e.placeholder,a=e.value,o=e.defaultValue,d=e.onChange,s=e.open,u=e.defaultOpen,g=e.onOpenChange,f=(0,p.Z)({value:a,defaultValue:o,onChange:d}),m=f.value,_=(f.onChange,(0,p.Z)({value:s,defaultValue:u,onChange:g})),v=_.value,k=_.onChange,h=Array.from({length:40}),y=(0,r.useMemo)((function(){return null==m?"":"2022-01-01"}),[m]),b=r.createElement("div",{className:"".concat(N,"-date-picker__popup")},r.createElement("div",{className:"".concat(N,"-date-picker__header")},r.createElement("div",{className:"".concat(N,"-date-picker__trigger")},"⏪"),r.createElement("div",{className:"".concat(N,"-date-picker__trigger")},"⬅️"),r.createElement("div",{className:"".concat(N,"-date-picker__overview")},r.createElement("div",{className:"".concat(N,"-date-picker__year")},"2020"),r.createElement("div",{className:"".concat(N,"-date-picker__month")},"10")),r.createElement("div",{className:"".concat(N,"-date-picker__trigger")},"➡️"),r.createElement("div",{className:"".concat(N,"-date-picker__trigger")},"⏩")),r.createElement("div",{className:"".concat(N,"-date-picker__body")},r.createElement("div",{className:"".concat(N,"-date-picker__days")},["Su","Mo","Tu","We","Th","Fr","Sa"].map((function(e){return r.createElement("div",{className:"".concat(N,"-date-picker__day"),key:e},e)}))),r.createElement("div",{className:"".concat(N,"-date-picker__dates")},h.map((function(e,n){var t;return r.createElement("div",{className:c()((t={},w(t,"".concat(N,"-date-picker__date"),!0),w(t,"".concat(N,"-date-picker__date--active"),6===n),t)),key:n},"Hi")})))));return r.createElement("div",{className:c()("".concat(N,"-date-picker"),n)},r.createElement(l.Z,{visible:v,onVisibleChange:k,popup:b,popupTransitionProps:{beforeEnter:"".concat(N,"-date-picker__popup--before-enter"),entering:"".concat(N,"-date-picker__popup--entering"),entered:"".concat(N,"-date-picker__popup--entered"),leaving:"".concat(N,"-date-picker__popup--leaving")}},r.createElement(i.Z,{value:y,placeholder:t,readOnly:!0})))};var A=t(5435),C={};C.styleTagTransform=b(),C.setAttributes=v(),C.insert=m().bind(null,"head"),C.domAPI=g(),C.insertStyleElement=h();s()(A.Z,C);A.Z&&A.Z.locals&&A.Z.locals;function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,c=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const T=function(){var e=S((0,r.useState)(null),2),n=e[0],t=e[1];return r.createElement("div",{className:"date-picker-demo"},r.createElement("h2",null,"DatePicker"),r.createElement("h3",null,"Basic Usage"),r.createElement(Z,{placeholder:"Please select",value:n,onChange:t}))}},5435:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),c=t(3645),o=t.n(c)()(a());o.push([e.id,".date-picker-demo {\n  position: static;\n}\n",""]);const i=o},4051:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),c=t(3645),o=t.n(c)()(a());o.push([e.id,".fog-date-picker {\n  display: inline-block;\n}\n.fog-date-picker,\n.fog-date-picker *,\n.fog-date-picker *:before,\n.fog-date-picker *:after {\n  box-sizing: border-box;\n}\n.fog-date-picker__popup--before-enter {\n  transform: scaleY(0);\n  opacity: 0;\n}\n.fog-date-picker__popup--entering {\n  transform: scaleY(1);\n  opacity: 1;\n}\n.fog-date-picker__popup--entered {\n  transform: scaleY(1);\n  opacity: 1;\n}\n.fog-date-picker__popup--leaving {\n  transform: scaleY(0);\n  opacity: 0;\n}\n.fog-date-picker__header {\n  padding: 4px 12px;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  line-height: 32px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-date-picker__trigger {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-date-picker__overview {\n  flex-grow: 1;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fog-date-picker__year {\n  margin-right: 4px;\n}\n.fog-date-picker__body {\n  position: static;\n}\n.fog-date-picker__days {\n  padding: 4px 12px;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: space-between;\n  grid-template-columns: repeat(7, 32px);\n  grid-template-rows: repeat(1, 32px);\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-date-picker__day {\n  width: 24px;\n  height: 24px;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n}\n.fog-date-picker__dates {\n  padding: 4px 12px;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: space-between;\n  grid-template-columns: repeat(7, 32px);\n  grid-template-rows: repeat(6, 32px);\n}\n.fog-date-picker__date {\n  width: 24px;\n  height: 24px;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 2px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-date-picker__date:hover:not(.fog-date-picker__date--active) {\n  background-color: var(--fog-background-color-preset);\n}\n.fog-date-picker__date--active {\n  color: var(--fog-contrast-color);\n  background-color: var(--fog-primary-color);\n}\n",""]);const i=o}}]);