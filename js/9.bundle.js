"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[9],{7349:(n,o,r)=>{r.d(o,{Z:()=>w});var e=r(7294),t=r(4184),a=r.n(t),c=r(9074),l=r(3379),s=r.n(l),g=r(7795),i=r.n(g),f=r(569),u=r.n(f),d=r(3565),b=r.n(d),v=r(9216),p=r.n(v),m=r(4589),y=r.n(m),h=r(7082),k={};k.styleTagTransform=y(),k.setAttributes=b(),k.insert=u().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=p();s()(h.Z,k);h.Z&&h.Z.locals&&h.Z.locals;var O=["className","type","danger","disabled","children"];function x(){return x=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},x.apply(this,arguments)}function E(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function Z(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var j=c.O;const w=(0,e.forwardRef)((function(n,o){var r,t=n.className,c=n.type,l=n.danger,s=n.disabled,g=n.children,i=Z(n,O);return e.createElement("button",x({className:a()("".concat(j,"-button"),t,(r={},E(r,"".concat(j,"-button--").concat(c),c),E(r,"".concat(j,"-button--danger"),l),r)),ref:o,disabled:s},i),g)}))},8686:(n,o,r)=>{r.r(o),r.d(o,{default:()=>k});var e=r(7294),t=r(7618),a=r(7349),c=r(3379),l=r.n(c),s=r(7795),g=r.n(s),i=r(569),f=r.n(i),u=r(3565),d=r.n(u),b=r(9216),v=r.n(b),p=r(4589),m=r.n(p),y=r(9263),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=f().bind(null,"head"),h.domAPI=g(),h.insertStyleElement=v();l()(y.Z,h);y.Z&&y.Z.locals&&y.Z.locals;const k=function(){var n=(0,e.useRef)(null);return(0,e.useEffect)((function(){return function(){t.Z.destroyAll(),n.current=null}}),[]),e.createElement("div",{className:"message-demo"},e.createElement("h2",null,"Message"),e.createElement("h3",null,"Basic Usage"),e.createElement(a.Z,{onClick:function(){return t.Z.info({icon:"🍷",content:"Hot drinks and cold days"})}},"Click me"),e.createElement("h3",null,"Manual Close"),e.createElement(a.Z,{onClick:function(){n.current||(n.current=t.Z.info({icon:"🌊",content:"The waves lapping the shore endlessly",duration:0}))}},"Click me"),e.createElement(a.Z,{onClick:function(){n.current&&(n.current.destroy(),n.current=null)}},"Close"),e.createElement("h3",null,"DestroyAll"),e.createElement("p",null,"Destroy all references at some time, e.g. a route change happens."),e.createElement(a.Z,{onClick:function(){t.Z.info({icon:"🌙",content:"The signal disappears into the night"})}},"Click me"),e.createElement(a.Z,{onClick:function(){t.Z.destroyAll(),n.current=null}},"DestroyAll"))}},7618:(n,o,r)=>{r.d(o,{Z:()=>T});var e=r(7294),t=r(3935),a=r(4184),c=r.n(a),l=r(9074),s=r(2205),g=r(3477),i=r(3379),f=r.n(i),u=r(7795),d=r.n(u),b=r(569),v=r.n(b),p=r(3565),m=r.n(p),y=r(9216),h=r.n(y),k=r(4589),O=r.n(k),x=r(9968),E={};E.styleTagTransform=O(),E.setAttributes=m(),E.insert=v().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=h();f()(x.Z,E);x.Z&&x.Z.locals&&x.Z.locals;var Z=["visible","duration"];function j(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.push.apply(r,e)}return r}function w(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?j(Object(r),!0).forEach((function(o){P(n,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))}))}return n}function P(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function C(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var A=l.O,_=function(n){var o=n.className,r=n.icon,t=n.content;return e.createElement("div",{className:c()("".concat(A,"-message"),o)},r&&e.createElement("div",{className:"".concat(A,"-message__icon")},r),e.createElement("div",{className:"".concat(A,"-message__content")},t))};_.defaultProps={};var N=[],S=document.createElement("div");S.style.position="fixed",S.style.top="0px",S.style.left="0px",S.style.right="0px",S.style.pointerEvents="none",document.body.appendChild(S),_.info=function(n){var o,r=document.createElement("div");r.style.textAlign="center",S.appendChild(r);var a=function(n){var a=n.visible,l=void 0===a||a,i=n.duration,f=void 0===i?3e3:i,u=C(n,Z);l?0!==f&&(o=(0,g.cX)(c,f)):(0,g.lo)(o),t.render(e.createElement(s.Z,{visible:l,beforeEnter:"".concat(A,"-message--before-enter"),entering:"".concat(A,"-message--entering"),entered:"".concat(A,"-message--entered"),leaving:"".concat(A,"-message--leaving"),onLeft:function(){t.unmountComponentAtNode(r),S.contains(r)&&S.removeChild(r)}},e.createElement(_,u)),r)},c=function(){a(w(w({},n),{},{visible:!1})),N=N.filter((function(n){return n!==l}))};a(n);var l={destroy:c};return N.push(l),l},_.destroyAll=function(){for(;N.length;){N.pop().destroy()}};const T=_},7082:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.08em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n",""]);const l=c},9263:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,".message-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const l=c},9968:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,".fog-message {\n  display: inline-block;\n  padding: 10px 16px;\n  font-size: 0;\n  line-height: 22px;\n  box-shadow: 0 0 8px var(--fog-shadow-color);\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  margin-top: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n  pointer-events: all;\n}\n.fog-message,\n.fog-message *,\n.fog-message *:before,\n.fog-message *:after {\n  box-sizing: border-box;\n}\n.fog-message--before-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message--entering {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--entered {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--leaving {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message__icon {\n  margin-right: 8px;\n}\n.fog-message__icon,\n.fog-message__content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n}\n",""]);const l=c}}]);