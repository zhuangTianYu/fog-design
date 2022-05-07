"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[18],{8692:(o,n,r)=>{r.d(n,{Z:()=>M});var t=r(7294),e=r(4184),a=r.n(e),c=r(9074),l=r(9940),i=r(3379),g=r.n(i),f=r(7795),u=r.n(f),d=r(569),s=r.n(d),b=r(3565),p=r.n(b),m=r(9216),v=r.n(m),y=r(4589),h=r.n(y),x=r(6879),k={};k.styleTagTransform=h(),k.setAttributes=p(),k.insert=s().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=v();g()(x.Z,k);x.Z&&x.Z.locals&&x.Z.locals;var _=c.O;const Z=function(o){var n=o.className,r=o.children;return t.createElement("div",{className:a()("".concat(_,"-button-group"),n)},r)};var w=r(7082),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=s().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=v();g()(w.Z,E);w.Z&&w.Z.locals&&w.Z.locals;var O=["className","type","shape","danger","loading","disabled","children","onClick"];function S(){return S=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},S.apply(this,arguments)}function C(o,n,r){return n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o}function A(o){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},A(o)}function N(o,n){if(null==o)return{};var r,t,e=function(o,n){if(null==o)return{};var r,t,e={},a=Object.keys(o);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(e[r]=o[r]);return e}(o,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(o,r)&&(e[r]=o[r])}return e}var z=c.O,j=(0,t.forwardRef)((function(o,n){var r,e=o.className,c=o.type,i=o.shape,g=o.danger,f=o.loading,u=o.disabled,d=o.children,s=o.onClick,b=N(o,O),p=(0,t.useMemo)((function(){var o=[],n=t.createElement(l.Z,{className:"".concat(z,"-button__loading"),key:"loading",type:"loading"}),r=!1;return t.Children.forEach(d,(function(e,a){if(["string","number"].includes(A(e))){var c=t.createElement("span",{key:a},e);return o.push(c)}if(e.type===l.Z)return f?(r=!0,o.push(n)):o.push(e);o.push(e)})),f&&!r&&o.unshift(n),o}),[d,f]),m=(0,t.useMemo)((function(){return 1===p.length&&p[0].type===l.Z}),[p]);return t.createElement("button",S({className:a()("".concat(z,"-button"),e,(r={},C(r,"".concat(z,"-button--").concat(c),c),C(r,"".concat(z,"-button--").concat(i),i),C(r,"".concat(z,"-button--danger"),g),C(r,"".concat(z,"-button--loading"),f),C(r,"".concat(z,"-button--icon-isolated"),m),r)),ref:n,disabled:u,onClick:u||f?function(){}:s},b),p)}));j.Group=Z;const M=j},2041:(o,n,r)=>{r.d(n,{Z:()=>A});var t=r(7294),e=r(9074),a=r(2282),c=r(5046),l=r(4346),i=r(6032),g=r(2022),f=r(9940),u=r(7618),d=r(3379),s=r.n(d),b=r(7795),p=r.n(b),m=r(569),v=r.n(m),y=r(3565),h=r.n(y),x=r(9216),k=r.n(x),_=r(4589),Z=r.n(_),w=r(1738),E={};E.styleTagTransform=Z(),E.setAttributes=h(),E.insert=v().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=k();s()(w.Z,E);w.Z&&w.Z.locals&&w.Z.locals;function O(o,n){return function(o){if(Array.isArray(o))return o}(o)||function(o,n){var r=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null==r)return;var t,e,a=[],c=!0,l=!1;try{for(r=r.call(o);!(c=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);c=!0);}catch(o){l=!0,e=o}finally{try{c||null==r.return||r.return()}finally{if(l)throw e}}return a}(o,n)||function(o,n){if(!o)return;if("string"==typeof o)return S(o,n);var r=Object.prototype.toString.call(o).slice(8,-1);"Object"===r&&o.constructor&&(r=o.constructor.name);if("Map"===r||"Set"===r)return Array.from(o);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(o,n)}(o,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=o[r];return t}var C=e.O;a.Z.registerLanguage("tsx",c.Z);const A=function(o){var n=o.title,r=o.description,e=o.content,c=o.code,d=(0,t.useContext)(g.f),s=O((0,t.useState)(!1),2),b=s[0],p=s[1],m=O((0,t.useState)((function(){return ResizeObserver?0:"auto"})),2),v=m[0],y=m[1],h=(0,t.useRef)(null);(0,t.useLayoutEffect)((function(){if(b&&ResizeObserver&&h.current){var o=new ResizeObserver((function(){var o=h.current.getBoundingClientRect().height;y(o)}));return o.observe(h.current),function(){return o.disconnect()}}}),[b]),(0,t.useEffect)((function(){return u.Z.destroyAll}),[]);return t.createElement("div",{className:"".concat(C,"-demo")},t.createElement("h3",{className:"".concat(C,"-demo__title")},t.createElement("span",null,n),t.createElement("div",{className:"".concat(C,"-demo__options")},t.createElement(f.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(c).then((function(){return u.Z.success({content:"Code copied"})})).catch((function(){return u.Z.error({content:"Please copy manually"})}))}}),t.createElement(f.Z,{type:"code",onClick:function(){return p(!b)}}))),r&&t.createElement("p",{className:"".concat(C,"-demo__description")},r),t.createElement("div",{className:"".concat(C,"-demo__content")},e),t.createElement("div",{className:"".concat(C,"-demo__code-wrapper"),style:{height:b?v:0}},t.createElement("div",{ref:h},t.createElement(a.Z,{className:"".concat(C,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:d?i.Z:l.Z},c))))}},6879:(o,n,r)=>{r.d(n,{Z:()=>l});var t=r(8081),e=r.n(t),a=r(3645),c=r.n(a)()(e());c.push([o.id,".fog-button-group {\n  display: inline-block;\n}\n.fog-button-group,\n.fog-button-group *,\n.fog-button-group *:before,\n.fog-button-group *:after {\n  box-sizing: border-box;\n}\n.fog-button-group .fog-button {\n  position: relative;\n  margin-left: -1px;\n}\n.fog-button-group .fog-button:not([disabled]) {\n  z-index: 1;\n}\n.fog-button-group .fog-button:not([disabled]):hover,\n.fog-button-group .fog-button:not([disabled]):focus {\n  z-index: 2;\n}\n.fog-button-group .fog-button:not([disabled]).fog-button--primary {\n  z-index: 3;\n}\n.fog-button-group .fog-button:not([disabled]).fog-button--primary + .fog-button--primary:not([disabled]) {\n  border-left-color: var(--fog-primary-color-hover);\n}\n.fog-button-group .fog-button:first-child {\n  margin-left: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fog-button-group .fog-button:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.fog-button-group .fog-button:not(.fog-button-group .fog-button:first-child):not(.fog-button-group .fog-button:last-child) {\n  border-radius: 0;\n}\n",""]);const l=c},7082:(o,n,r)=>{r.d(n,{Z:()=>l});var t=r(8081),e=r.n(t),a=r(3645),c=r.n(a)()(e());c.push([o.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.14em;\n}\n.fog-button--icon-isolated {\n  padding: 4px;\n  width: 32px;\n  height: 32px;\n}\n.fog-button--icon-isolated .fog-icon {\n  margin-left: 0;\n  margin-right: 0;\n}\n.fog-button:not(.fog-button--icon-isolated) .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button:not(.fog-button--icon-isolated) .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n.fog-button--round {\n  border-radius: 16px;\n}\n.fog-button--circle {\n  padding: 4px;\n  min-width: 32px;\n  border-radius: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const l=c},1738:(o,n,r)=>{r.d(n,{Z:()=>l});var t=r(8081),e=r.n(t),a=r(3645),c=r.n(a)()(e());c.push([o.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const l=c}}]);