"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[1],{7349:(n,r,o)=>{o.d(r,{Z:()=>O});var e=o(7294),t=o(4184),a=o.n(t),c=o(9074),l=o(9940),f=o(3379),g=o.n(f),i=o(7795),d=o.n(i),s=o(569),u=o.n(s),b=o(3565),v=o.n(b),m=o(9216),p=o.n(m),w=o(4589),h=o.n(w),y=o(7082),_={};_.styleTagTransform=h(),_.setAttributes=v(),_.insert=u().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=p();g()(y.Z,_);y.Z&&y.Z.locals&&y.Z.locals;var k=["className","type","danger","loading","disabled","children","onClick"];function x(){return x=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n},x.apply(this,arguments)}function E(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function C(n){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(n)}function Z(n,r){if(null==n)return{};var o,e,t=function(n,r){if(null==n)return{};var o,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)o=a[e],r.indexOf(o)>=0||(t[o]=n[o]);return t}(n,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var S=c.O;const O=(0,e.forwardRef)((function(n,r){var o,t=n.className,c=n.type,f=n.danger,g=n.loading,i=n.disabled,d=n.children,s=n.onClick,u=Z(n,k),b=(0,e.useMemo)((function(){var n=[];return e.Children.forEach(d,(function(r,o){["string","number"].includes(C(r))?n.push(e.createElement("span",{key:o},r)):r.type===l.Z&&g||n.push(r)})),n}),[d,g]);return e.createElement("button",x({className:a()("".concat(S,"-button"),t,(o={},E(o,"".concat(S,"-button--").concat(c),c),E(o,"".concat(S,"-button--danger"),f),E(o,"".concat(S,"-button--loading"),g),o)),ref:r,disabled:i,onClick:i||g?function(){}:s},u),g&&e.createElement(l.Z,{className:"".concat(S,"-button__loading"),type:"loading"}),b)}))},4827:(n,r,o)=>{o.r(r),o.d(r,{default:()=>I});var e=o(7294),t=o(9074),a=o(4184),c=o.n(a),l=o(2205),f=o(9940),g=o(3477),i=o(3379),d=o.n(i),s=o(7795),u=o.n(s),b=o(569),v=o.n(b),m=o(3565),p=o.n(m),w=o(9216),h=o.n(w),y=o(4589),_=o.n(y),k=o(354),x={};x.styleTagTransform=_(),x.setAttributes=p(),x.insert=v().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=h();d()(k.Z,x);k.Z&&k.Z.locals&&k.Z.locals;var E=t.O,C=function(n){var r=n.className,o=n.visible,t=n.width,a=n.height,i=n.title,d=n.children,s=n.placement,u=n.showClose,b=n.escClosable,v=n.maskClosable,m=n.unmountNodeAfterLeave,p=n.onClose,w=n.afterClose,h=(0,e.useRef)(null),y=function(){return(0,g.mf)(p)&&p()};return(0,e.useEffect)((function(){if(o&&b){var n=function(n){"Escape"===n.key&&h.current.contains(document.activeElement)&&y()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}}),[o,b]),(0,e.useEffect)((function(){setTimeout((function(){var n;o&&(null===(n=h.current)||void 0===n||n.focus())}))}),[o,h.current]),e.createElement(l.Z,{visible:o,timeout:300,beforeEnter:"".concat(E,"-drawer--before-enter"),entering:"".concat(E,"-drawer--entering"),entered:"".concat(E,"-drawer--entered"),leaving:"".concat(E,"-drawer--leaving"),unmountNodeAfterLeave:m,onLeft:w},e.createElement("div",{className:c()(r,"".concat(E,"-drawer"),"".concat(E,"-drawer--").concat(s)),ref:h,tabIndex:-1},e.createElement("div",{className:"".concat(E,"-drawer__mask"),onClick:function(){return v&&y()}}),e.createElement("div",{className:"".concat(E,"-drawer__content"),style:{width:["left","right"].includes(s)?t:"auto",height:["top","bottom"].includes(s)?a:"auto"}},e.createElement("div",{className:"".concat(E,"-drawer__header")},e.createElement("div",{className:"".concat(E,"-drawer__title")},i),u&&e.createElement("div",{className:"".concat(E,"-drawer__close"),onClick:y},e.createElement(f.Z,{type:"close",size:16}))),e.createElement("div",{className:"".concat(E,"-drawer__body")},d))))};C.defaultProps={width:360,height:300,visible:!1,placement:"right",showClose:!0,escClosable:!0,maskClosable:!0,unmountNodeAfterLeave:!0};const Z=C;var S=o(7349),O=o(8165),N={};N.styleTagTransform=_(),N.setAttributes=p(),N.insert=v().bind(null,"head"),N.domAPI=u(),N.insertStyleElement=h();d()(O.Z,N);O.Z&&O.Z.locals&&O.Z.locals;function A(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==o)return;var e,t,a=[],c=!0,l=!1;try{for(o=o.call(n);!(c=(e=o.next()).done)&&(a.push(e.value),!r||a.length!==r);c=!0);}catch(n){l=!0,t=n}finally{try{c||null==o.return||o.return()}finally{if(l)throw t}}return a}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return j(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n,r){(null==r||r>n.length)&&(r=n.length);for(var o=0,e=new Array(r);o<r;o++)e[o]=n[o];return e}var P=["top","right","bottom","left"];const I=function(){var n=A((0,e.useState)(!1),2),r=n[0],o=n[1],t=A((0,e.useState)(!1),2),a=t[0],c=t[1],l=A((0,e.useState)(P[0]),2),f=l[0],i=l[1];return e.createElement("div",{className:"drawer-demo"},e.createElement("h2",null,"Drawer"),e.createElement("h3",null,"Basic Usage"),e.createElement(S.Z,{onClick:function(){return o(!0)}},"Open drawer"),e.createElement(Z,{title:"Basic Usage",visible:r,onClose:function(){return o(!1)}},"Drawer Content"),e.createElement("h3",null,"Placement"),P.map((function(n){return e.createElement(S.Z,{key:n,onClick:function(){i(n),c(!0)}},(0,g.gC)(n))})),e.createElement(Z,{title:"Basic Usage",visible:a,placement:f,onClose:function(){return c(!1)}},"Drawer Content"))}},7082:(n,r,o)=>{o.d(r,{Z:()=>l});var e=o(8081),t=o.n(e),a=o(3645),c=o.n(a)()(t());c.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const l=c},8165:(n,r,o)=>{o.d(r,{Z:()=>l});var e=o(8081),t=o.n(e),a=o(3645),c=o.n(a)()(t());c.push([n.id,".drawer-demo .fog-button {\n  margin: 0 12px 12px 0;\n}\n",""]);const l=c},354:(n,r,o)=>{o.d(r,{Z:()=>l});var e=o(8081),t=o.n(e),a=o(3645),c=o.n(a)()(t());c.push([n.id,".fog-drawer {\n  position: fixed;\n  font-size: 14px;\n}\n.fog-drawer,\n.fog-drawer *,\n.fog-drawer *:before,\n.fog-drawer *:after {\n  box-sizing: border-box;\n}\n.fog-drawer--before-enter .fog-drawer__mask {\n  position: static;\n  background-color: var(--fog-transparent);\n}\n.fog-drawer--entering .fog-drawer__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-drawer--entered .fog-drawer__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-drawer--leaving .fog-drawer__mask {\n  background-color: var(--fog-transparent);\n}\n.fog-drawer--before-enter.fog-drawer--left .fog-drawer__content {\n  transform: translateX(-100%);\n}\n.fog-drawer--before-enter.fog-drawer--right .fog-drawer__content {\n  transform: translateX(100%);\n}\n.fog-drawer--before-enter.fog-drawer--top .fog-drawer__content {\n  transform: translateY(-100%);\n}\n.fog-drawer--before-enter.fog-drawer--bottom .fog-drawer__content {\n  transform: translateY(100%);\n}\n.fog-drawer--entering.fog-drawer--left .fog-drawer__content {\n  transform: translateX(0);\n}\n.fog-drawer--entering.fog-drawer--right .fog-drawer__content {\n  transform: translateX(0);\n}\n.fog-drawer--entering.fog-drawer--top .fog-drawer__content {\n  transform: translateY(0);\n}\n.fog-drawer--entering.fog-drawer--bottom .fog-drawer__content {\n  transform: translateY(0);\n}\n.fog-drawer--entered.fog-drawer--left .fog-drawer__content {\n  transform: translateX(0);\n}\n.fog-drawer--entered.fog-drawer--right .fog-drawer__content {\n  transform: translateX(0);\n}\n.fog-drawer--entered.fog-drawer--top .fog-drawer__content {\n  transform: translateY(0);\n}\n.fog-drawer--entered.fog-drawer--bottom .fog-drawer__content {\n  transform: translateY(0);\n}\n.fog-drawer--leaving.fog-drawer--left .fog-drawer__content {\n  transform: translateX(-100%);\n}\n.fog-drawer--leaving.fog-drawer--right .fog-drawer__content {\n  transform: translateX(100%);\n}\n.fog-drawer--leaving.fog-drawer--top .fog-drawer__content {\n  transform: translateY(-100%);\n}\n.fog-drawer--leaving.fog-drawer--bottom .fog-drawer__content {\n  transform: translateY(100%);\n}\n.fog-drawer--left .fog-drawer__content {\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.fog-drawer--right .fog-drawer__content {\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.fog-drawer--top .fog-drawer__content {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.fog-drawer--bottom .fog-drawer__content {\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.fog-drawer__mask {\n  position: fixed;\n  inset: 0;\n  text-align: center;\n  transition: all 0.3s;\n}\n.fog-drawer__content {\n  position: fixed;\n  text-align: left;\n  background-color: var(--fog-panel-color);\n  transition: all 0.3s;\n  overflow: hidden;\n}\n.fog-drawer__header {\n  display: flex;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-drawer__title {\n  flex-grow: 1;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.fog-drawer__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fog-drawer__body {\n  padding: 12px 16px;\n}\n",""]);const l=c}}]);