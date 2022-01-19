"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[9],{7349:(r,o,n)=>{n.d(o,{Z:()=>A});var e=n(7294),t=n(4184),a=n.n(t),l=n(9074),c=n(3379),g=n.n(c),u=n(7795),i=n.n(u),f=n(569),d=n.n(f),s=n(3565),b=n.n(s),p=n(9216),v=n.n(p),m=n(4589),y=n.n(m),h=n(7082),k={};k.styleTagTransform=y(),k.setAttributes=b(),k.insert=d().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=v();g()(h.Z,k);h.Z&&h.Z.locals&&h.Z.locals;var E=["className","type","danger","disabled","children"];function x(){return x=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},x.apply(this,arguments)}function Z(r,o,n){return o in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,r}function w(r,o){if(null==r)return{};var n,e,t=function(r,o){if(null==r)return{};var n,e,t={},a=Object.keys(r);for(e=0;e<a.length;e++)n=a[e],o.indexOf(n)>=0||(t[n]=r[n]);return t}(r,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)n=a[e],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}var O=l.O;const A=(0,e.forwardRef)((function(r,o){var n,t=r.className,l=r.type,c=r.danger,g=r.disabled,u=r.children,i=w(r,E);return e.createElement("button",x({className:a()("".concat(O,"-button"),t,(n={},Z(n,"".concat(O,"-button--").concat(l),l),Z(n,"".concat(O,"-button--danger"),c),n)),ref:o,disabled:g},i),u)}))},8482:(r,o,n)=>{n.r(o),n.d(o,{default:()=>A});var e=n(7294),t=n(7349),a=n(2708),l=n(249),c=n(6407),g=n(3379),u=n.n(g),i=n(7795),f=n.n(i),d=n(569),s=n.n(d),b=n(3565),p=n.n(b),v=n(9216),m=n.n(v),y=n(4589),h=n.n(y),k=n(8053),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=s().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=m();u()(k.Z,E);k.Z&&k.Z.locals&&k.Z.locals;function x(r,o){return function(r){if(Array.isArray(r))return r}(r)||function(r,o){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,t,a=[],l=!0,c=!1;try{for(n=n.call(r);!(l=(e=n.next()).done)&&(a.push(e.value),!o||a.length!==o);l=!0);}catch(r){c=!0,t=r}finally{try{l||null==n.return||n.return()}finally{if(c)throw t}}return a}(r,o)||function(r,o){if(!r)return;if("string"==typeof r)return Z(r,o);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(r,o)}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(r,o){(null==o||o>r.length)&&(o=r.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=r[n];return e}var w=e.createElement("div",{style:{padding:"4px 0"}},new Array(3).fill(1).map((function(r,o){return e.createElement("div",{style:{padding:"4px 16px",fontSize:14,lineHeight:"22px"},key:o},"popup content")}))),O=c.Z.TextArea;const A=function(){var r=x((0,e.useState)(!1),2),o=r[0],n=r[1],c=(0,e.useRef)(null);return e.createElement("div",{className:"trigger-demo"},e.createElement("h2",null,"Trigger"),e.createElement("h3",null,"Basic Usage"),e.createElement(l.Z,{popup:w},e.createElement(t.Z,null,"Click me")),e.createElement("h3",null,"Trigger"),e.createElement(l.Z,{popup:w},e.createElement(t.Z,null,"Click me")),e.createElement(l.Z,{popup:w,trigger:"hover"},e.createElement(t.Z,null,"Hover me")),e.createElement(l.Z,{popup:w,trigger:["click","hover"]},e.createElement(t.Z,null,"Click or hover me")),e.createElement("h3",null,"Resizable"),e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(l.Z,{popup:w,visible:o},e.createElement(O,{style:{width:320,marginRight:12},defaultValue:"Resize textarea to update popup position"})),e.createElement(a.Z,{checked:o,onChange:n})),e.createElement("h3",null,"Scroll Container"),e.createElement("div",{ref:c,style:{position:"relative",height:300,border:"1px solid var(--fog-border-color)",overflow:"auto"}},e.createElement("div",{style:{padding:50,width:"150%",height:500}},e.createElement(l.Z,{popup:w,getPopupMountNode:function(){return c.current}},e.createElement(t.Z,null,"Click me")),e.createElement(l.Z,{popup:w,trigger:"hover",getPopupMountNode:function(){return c.current}},e.createElement(t.Z,{style:{position:"absolute",top:100,left:200}},"Hover me")))))}},7082:(r,o,n)=>{n.d(o,{Z:()=>c});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n",""]);const c=l},8053:(r,o,n)=>{n.d(o,{Z:()=>c});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".trigger-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const c=l}}]);