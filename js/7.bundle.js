"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[7],{7618:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7294),o=t(3935),a=t(4184),s=t.n(a),i=t(9074),l=t(2205),c=t(3477),f=t(3379),g=t.n(f),u=t(7795),m=t.n(u),d=t(569),p=t.n(d),b=t(3565),v=t.n(b),y=t(9216),h=t.n(y),O=t(4589),E=t.n(O),x=t(9968),j={};j.styleTagTransform=E(),j.setAttributes=v(),j.insert=p().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=h();g()(x.Z,j);x.Z&&x.Z.locals&&x.Z.locals;var Z=["visible","duration"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=i.O,C=function(e){var n=e.className,t=e.icon,o=e.content;return r.createElement("div",{className:s()("".concat(A,"-message"),n)},t&&r.createElement("div",{className:"".concat(A,"-message__icon")},t),r.createElement("div",{className:"".concat(A,"-message__content")},o))};C.defaultProps={};var N=[],S=document.createElement("div");S.style.position="fixed",S.style.top="0px",S.style.left="0px",S.style.right="0px",S.style.pointerEvents="none",document.body.appendChild(S),C.info=function(e){var n,t=document.createElement("div");t.style.textAlign="center",S.appendChild(t);var a=function(e){var a=e.visible,i=void 0===a||a,f=e.duration,g=void 0===f?3e3:f,u=k(e,Z);i?0!==g&&(n=(0,c.cX)(s,g)):(0,c.lo)(n),o.render(r.createElement(l.Z,{visible:i,beforeEnter:"".concat(A,"-message--before-enter"),entering:"".concat(A,"-message--entering"),entered:"".concat(A,"-message--entered"),leaving:"".concat(A,"-message--leaving"),onLeft:function(){o.unmountComponentAtNode(t),S.contains(t)&&S.removeChild(t)}},r.createElement(C,u)),t)},s=function(){a(w(w({},e),{},{visible:!1})),N=N.filter((function(e){return e!==i}))};a(e);var i={destroy:s};return N.push(i),i},C.destroyAll=function(){for(;N.length;){N.pop().destroy()}};const T=C},9459:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var r=t(7294),o=t(6049),a=t(7618),s=t(3379),i=t.n(s),l=t(7795),c=t.n(l),f=t(569),g=t.n(f),u=t(3565),m=t.n(u),d=t(9216),p=t.n(d),b=t(4589),v=t.n(b),y=t(3447),h={};h.styleTagTransform=v(),h.setAttributes=m(),h.insert=g().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p();i()(y.Z,h);y.Z&&y.Z.locals&&y.Z.locals;var O=["React","Vue","Angular"];const E=function(){return(0,r.useEffect)((function(){return a.Z.destroyAll}),[]),r.createElement("div",{className:"tag-demo"},r.createElement("h2",null,"Tag"),r.createElement("h3",null,"Basic Usage"),O.map((function(e){return r.createElement(o.Z,{key:e},e)})),r.createElement("h3",null,"Closable"),O.map((function(e){return r.createElement(o.Z,{key:e,closable:!0,onClose:function(){return a.Z.info({icon:"💥",content:"Tag closed!"})}},e)})))}},9968:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),s=t.n(a)()(o());s.push([e.id,".fog-message {\n  display: inline-block;\n  padding: 10px 16px;\n  font-size: 0;\n  line-height: 22px;\n  box-shadow: 0 0 8px var(--fog-shadow-color);\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  margin-top: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n  pointer-events: all;\n}\n.fog-message,\n.fog-message *,\n.fog-message *:before,\n.fog-message *:after {\n  box-sizing: border-box;\n}\n.fog-message--before-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message--entering {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--entered {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--leaving {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message__icon {\n  margin-right: 8px;\n}\n.fog-message__icon,\n.fog-message__content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n}\n",""]);const i=s},3447:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),s=t.n(a)()(o());s.push([e.id,".tag-demo .fog-tag {\n  margin-right: 12px;\n}\n",""]);const i=s}}]);