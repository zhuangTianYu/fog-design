"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[3],{7349:(n,o,r)=>{r.d(o,{Z:()=>Z});var e=r(7294),t=r(4184),a=r.n(t),l=r(9074),c=r(9940),i=r(3379),f=r.n(i),s=r(7795),d=r.n(s),g=r(569),u=r.n(g),m=r(3565),b=r.n(m),p=r(9216),v=r.n(p),y=r(4589),h=r.n(y),k=r(7082),x={};x.styleTagTransform=h(),x.setAttributes=b(),x.insert=u().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=v();f()(k.Z,x);k.Z&&k.Z.locals&&k.Z.locals;var _=["className","type","danger","loading","disabled","children","onClick"];function E(){return E=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},E.apply(this,arguments)}function O(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function C(n){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(n)}function w(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var j=l.O;const Z=(0,e.forwardRef)((function(n,o){var r,t=n.className,l=n.type,i=n.danger,f=n.loading,s=n.disabled,d=n.children,g=n.onClick,u=w(n,_),m=(0,e.useMemo)((function(){var n=[];return e.Children.forEach(d,(function(o,r){["string","number"].includes(C(o))?n.push(e.createElement("span",{key:r},o)):o.type===c.Z&&f||n.push(o)})),n}),[d,f]);return e.createElement("button",E({className:a()("".concat(j,"-button"),t,(r={},O(r,"".concat(j,"-button--").concat(l),l),O(r,"".concat(j,"-button--danger"),i),O(r,"".concat(j,"-button--loading"),f),r)),ref:o,disabled:s,onClick:s||f?function(){}:g},u),f&&e.createElement(c.Z,{className:"".concat(j,"-button__loading"),type:"loading"}),m)}))},601:(n,o,r)=>{r.r(o),r.d(o,{default:()=>H});var e=r(7294),t=r(7349),a=r(3935),l=r(9074),c=r(4184),i=r.n(c),f=r(2205),s=r(9940),d=r(3477),g=r(3379),u=r.n(g),m=r(7795),b=r.n(m),p=r(569),v=r.n(p),y=r(3565),h=r.n(y),k=r(9216),x=r.n(k),_=r(4589),E=r.n(_),O=r(1055),C={};C.styleTagTransform=E(),C.setAttributes=h(),C.insert=v().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=x();u()(O.Z,C);O.Z&&O.Z.locals&&O.Z.locals;var w=["visible","content","onCancel","onConfirm","afterClose"];function j(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.push.apply(r,e)}return r}function Z(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?j(Object(r),!0).forEach((function(o){P(n,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))}))}return n}function P(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function S(){return S=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},S.apply(this,arguments)}function A(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var N=l.O,T=function(n){var o=n.className,r=n.visible,a=n.width,l=n.title,c=n.content,g=n.children,u=n.showClose,m=n.showCancel,b=n.cancelText,p=n.confirmText,v=n.escClosable,y=n.maskClosable,h=n.unmountNodeAfterLeave,k=n.onCancel,x=n.onConfirm,_=n.afterClose,E=(0,e.useRef)(null),O=function(){return(0,d.mf)(k)&&k()};return(0,e.useEffect)((function(){if(r&&v){var n=function(n){"Escape"===n.key&&E.current.contains(document.activeElement)&&O()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}}),[r,v]),(0,e.useEffect)((function(){setTimeout((function(){var n;r&&(null===(n=E.current)||void 0===n||n.focus())}))}),[r,E.current]),e.createElement(f.Z,{visible:r,timeout:300,beforeEnter:"".concat(N,"-modal--before-enter"),entering:"".concat(N,"-modal--entering"),entered:"".concat(N,"-modal--entered"),leaving:"".concat(N,"-modal--leaving"),unmountNodeAfterLeave:h,onLeft:_},e.createElement("div",{className:i()("".concat(N,"-modal"),o),ref:E,tabIndex:-1},e.createElement("div",{className:"".concat(N,"-modal__mask"),onClick:function(){return y&&O()}}),e.createElement("div",{className:"".concat(N,"-modal__content"),style:{width:a}},e.createElement("div",{className:"".concat(N,"-modal__header")},e.createElement("div",{className:"".concat(N,"-modal__title")},l),u&&e.createElement("div",{className:"".concat(N,"-modal__close"),onClick:O},e.createElement(s.Z,{type:"close",size:16}))),e.createElement("div",{className:"".concat(N,"-modal__body")},g||c),e.createElement("div",{className:"".concat(N,"-modal__footer")},m&&e.createElement(t.Z,{onClick:O},b),e.createElement(t.Z,{type:"primary",onClick:function(){return(0,d.mf)(x)&&x()}},p)))))};T.defaultProps={width:420,visible:!1,showClose:!0,showCancel:!0,cancelText:"Cancel",confirmText:"Confirm",escClosable:!0,maskClosable:!0,unmountNodeAfterLeave:!0};var I=[];T.confirm=function(n){var o=document.createElement("div"),r=n;document.body.appendChild(o);var t=function(n){var t=n.visible,c=void 0===t||t,i=n.content,f=n.onCancel,s=n.onConfirm,g=n.afterClose,u=A(n,w);r=n,a.render(e.createElement(T,S({visible:c,onCancel:function(){(0,d.mf)(f)&&f(),l()},onConfirm:function(){(0,d.mf)(s)&&s(),l()},afterClose:function(){(0,d.mf)(g)&&g(),a.unmountComponentAtNode(o),document.body.removeChild(o)}},u),i),o)},l=function(){t(Z(Z({},r),{},{visible:!1})),I=I.filter((function(n){return n!==c}))};t(n);var c={update:function(n){return t(Z(Z({},r),n))},destroy:l};return I.push(c),c},T.destroyAll=function(){for(;I.length;){I.pop().destroy()}};const z=T;var L=r(2156),M={};M.styleTagTransform=E(),M.setAttributes=h(),M.insert=v().bind(null,"head"),M.domAPI=b(),M.insertStyleElement=x();u()(L.Z,M);L.Z&&L.Z.locals&&L.Z.locals;function B(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var e,t,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(e=r.next()).done)&&(a.push(e.value),!o||a.length!==o);l=!0);}catch(n){c=!0,t=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return D(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,e=new Array(o);r<o;r++)e[r]=n[r];return e}const H=function(){var n=B((0,e.useState)(!1),2),o=n[0],r=n[1];return e.createElement("div",{className:"modal-demo"},e.createElement("h2",null,"Modal"),e.createElement("h3",null,"Basic Usage"),e.createElement(t.Z,{onClick:function(){return r(!0)}},"Open modal"),e.createElement(z,{title:"Title",visible:o,onCancel:function(){return r(!1)},onConfirm:function(){return r(!1)}},"Basic usage."),e.createElement("h3",null,"By Methods"),e.createElement(t.Z,{onClick:function(){z.confirm({title:"Hi",content:"Beach, waves, and night."})}},"Modal.confirm"),e.createElement(t.Z,{onClick:function(){var n=z.confirm({title:"Hi",content:e.createElement(e.Fragment,null,e.createElement("span",{style:{marginRight:12}},"Beach, waves, and night."),e.createElement(t.Z,{onClick:function(){n.update({content:e.createElement("span",{style:{lineHeight:"32px"}},"Catch the moment.")})}},"Update"))})}},"Update reference"),e.createElement(t.Z,{onClick:function(){for(var n=0;n<3;n++)setTimeout((function(){z.confirm({title:"Hi",content:e.createElement(t.Z,{onClick:z.destroyAll},"Destroy all")})}),300*n)}},"Modal.destroyAll"))}},7082:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},2156:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".modal-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const c=l},1055:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".fog-modal {\n  position: fixed;\n  font-size: 14px;\n}\n.fog-modal,\n.fog-modal *,\n.fog-modal *:before,\n.fog-modal *:after {\n  box-sizing: border-box;\n}\n.fog-modal--before-enter .fog-modal__mask {\n  position: static;\n  background-color: var(--fog-transparent);\n}\n.fog-modal--entering .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--entered .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--leaving .fog-modal__mask {\n  background-color: var(--fog-transparent);\n}\n.fog-modal--before-enter .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal--entering .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--entered .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--leaving .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal__mask {\n  position: fixed;\n  inset: 0;\n  text-align: center;\n  transition: all 0.3s;\n}\n.fog-modal__content {\n  position: fixed;\n  top: 160px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 90%;\n  text-align: left;\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  transition: all 0.3s;\n  overflow: hidden;\n}\n.fog-modal__header {\n  display: flex;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-modal__title {\n  flex-grow: 1;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.fog-modal__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fog-modal__body {\n  padding: 12px 16px;\n  min-height: 120px;\n}\n.fog-modal__footer {\n  padding: 8px 16px;\n  text-align: right;\n  border-top: 1px solid var(--fog-border-color);\n}\n.fog-modal__footer .fog-button {\n  margin-right: 8px;\n}\n.fog-modal__footer .fog-button:last-child {\n  margin-right: 0;\n}\n",""]);const c=l}}]);