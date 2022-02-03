"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[9],{7349:(o,r,n)=>{n.d(r,{Z:()=>j});var t=n(7294),e=n(4184),a=n.n(e),c=n(9074),l=n(9940),f=n(3379),g=n.n(f),i=n(7795),u=n.n(i),s=n(569),b=n.n(s),d=n(3565),v=n.n(d),p=n(9216),m=n.n(p),y=n(4589),h=n.n(y),k=n(7082),w={};w.styleTagTransform=h(),w.setAttributes=v(),w.insert=b().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=m();g()(k.Z,w);k.Z&&k.Z.locals&&k.Z.locals;var x=["className","type","danger","loading","disabled","children","onClick"];function S(){return S=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t])}return o},S.apply(this,arguments)}function Z(o,r,n){return r in o?Object.defineProperty(o,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[r]=n,o}function E(o){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},E(o)}function O(o,r){if(null==o)return{};var n,t,e=function(o,r){if(null==o)return{};var n,t,e={},a=Object.keys(o);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(e[n]=o[n]);return e}(o,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(o,n)&&(e[n]=o[n])}return e}var C=c.O;const j=(0,t.forwardRef)((function(o,r){var n,e=o.className,c=o.type,f=o.danger,g=o.loading,i=o.disabled,u=o.children,s=o.onClick,b=O(o,x),d=(0,t.useMemo)((function(){var o=[];return t.Children.forEach(u,(function(r,n){["string","number"].includes(E(r))?o.push(t.createElement("span",{key:n},r)):r.type===l.Z&&g||o.push(r)})),o}),[u,g]);return t.createElement("button",S({className:a()("".concat(C,"-button"),e,(n={},Z(n,"".concat(C,"-button--").concat(c),c),Z(n,"".concat(C,"-button--danger"),f),Z(n,"".concat(C,"-button--loading"),g),n)),ref:r,disabled:i,onClick:i||g?function(){}:s},b),g&&t.createElement(l.Z,{className:"".concat(C,"-button__loading"),type:"loading"}),d)}))},7037:(o,r,n)=>{n.r(r),n.d(r,{default:()=>Z});var t=n(7294),e=n(9939),a=n(7349),c=n(3477),l=n(3379),f=n.n(l),g=n(7795),i=n.n(g),u=n(569),s=n.n(u),b=n(3565),d=n.n(b),v=n(9216),p=n.n(v),m=n(4589),y=n.n(m),h=n(8165),k={};k.styleTagTransform=y(),k.setAttributes=d(),k.insert=s().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=p();f()(h.Z,k);h.Z&&h.Z.locals&&h.Z.locals;function w(o,r){return function(o){if(Array.isArray(o))return o}(o)||function(o,r){var n=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null==n)return;var t,e,a=[],c=!0,l=!1;try{for(n=n.call(o);!(c=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);c=!0);}catch(o){l=!0,e=o}finally{try{c||null==n.return||n.return()}finally{if(l)throw e}}return a}(o,r)||function(o,r){if(!o)return;if("string"==typeof o)return x(o,r);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(o,r)}(o,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(o,r){(null==r||r>o.length)&&(r=o.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=o[n];return t}var S=["top","right","bottom","left"];const Z=function(){var o=w((0,t.useState)(!1),2),r=o[0],n=o[1],l=w((0,t.useState)(!1),2),f=l[0],g=l[1],i=w((0,t.useState)(S[0]),2),u=i[0],s=i[1];return t.createElement("div",{className:"drawer-demo"},t.createElement("h2",null,"Drawer"),t.createElement("h3",null,"Basic Usage"),t.createElement(a.Z,{onClick:function(){return n(!0)}},"Open drawer"),t.createElement(e.Z,{title:"Basic Usage",visible:r,onClose:function(){return n(!1)}},"Drawer Content"),t.createElement("h3",null,"Placement"),S.map((function(o){return t.createElement(a.Z,{key:o,onClick:function(){s(o),g(!0)}},(0,c.gC)(o))})),t.createElement(e.Z,{title:"Basic Usage",visible:f,placement:u,onClose:function(){return g(!1)}},"Drawer Content"))}},7082:(o,r,n)=>{n.d(r,{Z:()=>l});var t=n(8081),e=n.n(t),a=n(3645),c=n.n(a)()(e());c.push([o.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const l=c},8165:(o,r,n)=>{n.d(r,{Z:()=>l});var t=n(8081),e=n.n(t),a=n(3645),c=n.n(a)()(e());c.push([o.id,".drawer-demo .fog-button {\n  margin: 0 12px 12px 0;\n}\n",""]);const l=c}}]);