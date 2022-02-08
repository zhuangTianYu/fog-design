"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[12],{7349:(r,o,n)=>{n.d(o,{Z:()=>A});var t=n(7294),e=n(4184),a=n.n(e),l=n(9074),c=n(9940),g=n(3379),i=n.n(g),u=n(7795),f=n.n(u),d=n(569),s=n.n(d),b=n(3565),p=n.n(b),v=n(9216),m=n.n(v),y=n(4589),h=n.n(y),k=n(7082),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=s().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=m();i()(k.Z,E);k.Z&&k.Z.locals&&k.Z.locals;var Z=["className","type","danger","loading","disabled","children","onClick"];function x(){return x=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},x.apply(this,arguments)}function w(r,o,n){return o in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,r}function S(r){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(r)}function O(r,o){if(null==r)return{};var n,t,e=function(r,o){if(null==r)return{};var n,t,e={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(e[n]=r[n]);return e}(r,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(e[n]=r[n])}return e}var C=l.O;const A=(0,t.forwardRef)((function(r,o){var n,e=r.className,l=r.type,g=r.danger,i=r.loading,u=r.disabled,f=r.children,d=r.onClick,s=O(r,Z),b=(0,t.useMemo)((function(){var r=[];return t.Children.forEach(f,(function(o,n){["string","number"].includes(S(o))?r.push(t.createElement("span",{key:n},o)):o.type===c.Z&&i||r.push(o)})),r}),[f,i]);return t.createElement("button",x({className:a()("".concat(C,"-button"),e,(n={},w(n,"".concat(C,"-button--").concat(l),l),w(n,"".concat(C,"-button--danger"),g),w(n,"".concat(C,"-button--loading"),i),n)),ref:o,disabled:u,onClick:u||i?function(){}:d},s),i&&t.createElement(c.Z,{className:"".concat(C,"-button__loading"),type:"loading"}),b)}))},8482:(r,o,n)=>{n.r(o),n.d(o,{default:()=>O});var t=n(7294),e=n(7349),a=n(2708),l=n(249),c=n(6407),g=n(3379),i=n.n(g),u=n(7795),f=n.n(u),d=n(569),s=n.n(d),b=n(3565),p=n.n(b),v=n(9216),m=n.n(v),y=n(4589),h=n.n(y),k=n(8053),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=s().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=m();i()(k.Z,E);k.Z&&k.Z.locals&&k.Z.locals;function Z(r,o){return function(r){if(Array.isArray(r))return r}(r)||function(r,o){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var t,e,a=[],l=!0,c=!1;try{for(n=n.call(r);!(l=(t=n.next()).done)&&(a.push(t.value),!o||a.length!==o);l=!0);}catch(r){c=!0,e=r}finally{try{l||null==n.return||n.return()}finally{if(c)throw e}}return a}(r,o)||function(r,o){if(!r)return;if("string"==typeof r)return x(r,o);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(r,o)}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r,o){(null==o||o>r.length)&&(o=r.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=r[n];return t}var w=t.createElement("div",{style:{padding:"4px 0"}},new Array(3).fill(1).map((function(r,o){return t.createElement("div",{style:{padding:"4px 16px",fontSize:14,lineHeight:"22px"},key:o},"popup content")}))),S=c.Z.TextArea;const O=function(){var r=Z((0,t.useState)(!1),2),o=r[0],n=r[1],c=(0,t.useRef)(null);return t.createElement("div",{className:"trigger-demo"},t.createElement("h2",null,"Trigger"),t.createElement("h3",null,"Basic Usage"),t.createElement(l.Z,{popup:w},t.createElement(e.Z,null,"Click me")),t.createElement("h3",null,"Trigger"),t.createElement(l.Z,{popup:w},t.createElement(e.Z,null,"Click me")),t.createElement(l.Z,{popup:w,trigger:"hover"},t.createElement(e.Z,null,"Hover me")),t.createElement(l.Z,{popup:w,trigger:["click","hover"]},t.createElement(e.Z,null,"Click or hover me")),t.createElement("h3",null,"Resizable"),t.createElement("div",{style:{display:"flex",alignItems:"center"}},t.createElement(l.Z,{popup:w,visible:o},t.createElement(S,{style:{width:320,marginRight:12},defaultValue:"Resize textarea to update popup position"})),t.createElement(a.Z,{checked:o,onChange:n})),t.createElement("h3",null,"Scroll Container"),t.createElement("div",{ref:c,style:{position:"relative",height:300,border:"1px solid var(--fog-border-color)",overflow:"auto"}},t.createElement("div",{style:{padding:50,width:"150%",height:500}},t.createElement(l.Z,{popup:w,getPopupMountNode:function(){return c.current}},t.createElement(e.Z,null,"Click me")),t.createElement(l.Z,{popup:w,trigger:"hover",getPopupMountNode:function(){return c.current}},t.createElement(e.Z,{style:{position:"absolute",top:100,left:200}},"Hover me")))))}},7082:(r,o,n)=>{n.d(o,{Z:()=>c});var t=n(8081),e=n.n(t),a=n(3645),l=n.n(a)()(e());l.push([r.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},8053:(r,o,n)=>{n.d(o,{Z:()=>c});var t=n(8081),e=n.n(t),a=n(3645),l=n.n(a)()(e());l.push([r.id,".trigger-demo .fog-button {\n  margin: 0 12px 12px 0;\n}\n",""]);const c=l}}]);