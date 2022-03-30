"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[6],{4714:(n,e,t)=>{t.r(e),t.d(e,{default:()=>$});var o=t(7294);const r=JSON.parse('{"w":{"button":{"demos":{"demo-1":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\">\\n        Primary\\n      </Button>\\n      <Button>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\">\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\">\\n        Link\\n      </Button>\\n      <Button type=\\"text\\">\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-2":"import React from \'react\';\\nimport Button from \'@components/button\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\">\\n        <Icon type=\\"calendar\\" />\\n        Date\\n      </Button>\\n      <Button>\\n        <Icon type=\\"email\\" />\\n        Send\\n      </Button>\\n      <Button type=\\"dashed\\">\\n        Trigger\\n        <Icon type=\\"down\\" />\\n      </Button>\\n      <Button type=\\"link\\">\\n        <Icon type=\\"link\\" />\\n        Link\\n      </Button>\\n      <Button type=\\"text\\">\\n        <Icon type=\\"edit\\" />\\n        Edit\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-3":"import React, { useState } from \'react\';\\nimport Button from \'@components/button\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n  const [loading, setLoading] = useState<boolean>(false);\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" loading>\\n        Loading\\n      </Button>\\n      <Button\\n        loading={loading}\\n        onClick={() => {\\n          setLoading(true);\\n\\n          setTimeout(() => setLoading(false), 1000);\\n        }}\\n      >\\n        <Icon type=\\"email\\" />\\n        Click me\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" disabled>\\n        Primary\\n      </Button>\\n      <Button disabled>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\" disabled>\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\" disabled>\\n        Link\\n      </Button>\\n      <Button type=\\"text\\" disabled>\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-5":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" danger>\\n        Primary\\n      </Button>\\n      <Button danger>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\" danger>\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\" danger>\\n        Link\\n      </Button>\\n      <Button type=\\"text\\" danger>\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":[{"name":"type","type":"primary | dashed | link | text","defaultValue":"-","description":"-"},{"name":"danger","type":"boolean","defaultValue":"-","description":"-"},{"name":"loading","type":"boolean","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"}]},"checkbox":{"demos":{},"apiRows":[]},"date-picker":{"demos":{},"apiRows":[]},"drawer":{"demos":{},"apiRows":[]},"icon":{"demos":{},"apiRows":[]},"input":{"demos":{},"apiRows":[]},"loading":{"demos":{},"apiRows":[]},"menu":{"demos":{},"apiRows":[]},"message":{"demos":{},"apiRows":[]},"modal":{"demos":{},"apiRows":[]},"radio":{"demos":{},"apiRows":[]},"select":{"demos":{},"apiRows":[]},"steps":{"demos":{},"apiRows":[]},"switch":{"demos":{},"apiRows":[]},"table":{"demos":{},"apiRows":[]},"tabs":{"demos":{},"apiRows":[{"name":"label","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"any","defaultValue":"-","description":"-"},{"name":"content","type":"React.ReactChild","defaultValue":"-","description":"-"}]},"tag":{"demos":{},"apiRows":[]},"transition":{"demos":{},"apiRows":[]},"trigger":{"demos":{},"apiRows":[]}},"c":[{"key":"name","name":"Property"},{"key":"type","name":"Type"},{"key":"defaultValue","name":"Default"},{"key":"description","name":"Description"}]}');var a=t(9960),l=t(9074),c=t(2282),i=t(5046),s=t(4346),u=t(6032),f=t(2022),d=t(9940),m=t(7618),g=t(3379),p=t.n(g),b=t(7795),y=t.n(b),v=t(569),h=t.n(v),x=t(3565),E=t.n(x),w=t(9216),_=t.n(w),k=t(4589),Z=t.n(k),O=t(1738),B={};B.styleTagTransform=Z(),B.setAttributes=E(),B.insert=h().bind(null,"head"),B.domAPI=y(),B.insertStyleElement=_();p()(O.Z,B);O.Z&&O.Z.locals&&O.Z.locals;function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(n);!(l=(o=t.next()).done)&&(a.push(o.value),!e||a.length!==e);l=!0);}catch(n){c=!0,r=n}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}var P=l.O;c.Z.registerLanguage("tsx",i.Z);const A=function(n){var e=n.title,t=n.description,r=n.content,a=n.code,l=(0,o.useContext)(f.f),i=j((0,o.useState)(!1),2),g=i[0],p=i[1],b=j((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),y=b[0],v=b[1],h=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(g&&ResizeObserver&&h.current){var n=new ResizeObserver((function(){var n=h.current.getBoundingClientRect().height;v(n)}));return n.observe(h.current),function(){return n.disconnect()}}}),[g]),(0,o.useEffect)((function(){return m.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(P,"-demo")},o.createElement("h3",{className:"".concat(P,"-demo__title")},o.createElement("span",null,e),o.createElement("div",{className:"".concat(P,"-demo__options")},o.createElement(d.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(a).then((function(){return m.Z.success({content:"Code copied"})})).catch((function(){return m.Z.error({content:"Please copy manually"})}))}}),o.createElement(d.Z,{type:"code",onClick:function(){return p(!g)}}))),t&&o.createElement("p",{className:"".concat(P,"-demo__description")},t),o.createElement("div",{className:"".concat(P,"-demo__content")},r),o.createElement("div",{className:"".concat(P,"-demo__code-wrapper"),style:{height:g?y:0}},o.createElement("div",{ref:h},o.createElement(c.Z,{className:"".concat(P,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:l?u.Z:s.Z},a))))};var D=t(7349);const R=function(){return o.createElement(o.Fragment,null,o.createElement(D.Z,{type:"primary"},"Primary"),o.createElement(D.Z,null,"Default"),o.createElement(D.Z,{type:"dashed"},"Dashed"),o.createElement(D.Z,{type:"link"},"Link"),o.createElement(D.Z,{type:"text"},"Text"))};const N=function(){return o.createElement(o.Fragment,null,o.createElement(D.Z,{type:"primary"},o.createElement(d.Z,{type:"calendar"}),"Date"),o.createElement(D.Z,null,o.createElement(d.Z,{type:"email"}),"Send"),o.createElement(D.Z,{type:"dashed"},"Trigger",o.createElement(d.Z,{type:"down"})),o.createElement(D.Z,{type:"link"},o.createElement(d.Z,{type:"link"}),"Link"),o.createElement(D.Z,{type:"text"},o.createElement(d.Z,{type:"edit"}),"Edit"))};function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(n);!(l=(o=t.next()).done)&&(a.push(o.value),!e||a.length!==e);l=!0);}catch(n){c=!0,r=n}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return I(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}const T=function(){var n=C((0,o.useState)(!1),2),e=n[0],t=n[1];return o.createElement(o.Fragment,null,o.createElement(D.Z,{type:"primary",loading:!0},"Loading"),o.createElement(D.Z,{loading:e,onClick:function(){t(!0),setTimeout((function(){return t(!1)}),1e3)}},o.createElement(d.Z,{type:"email"}),"Click me"))};const L=function(){return o.createElement(o.Fragment,null,o.createElement(D.Z,{type:"primary",disabled:!0},"Primary"),o.createElement(D.Z,{disabled:!0},"Default"),o.createElement(D.Z,{type:"dashed",disabled:!0},"Dashed"),o.createElement(D.Z,{type:"link",disabled:!0},"Link"),o.createElement(D.Z,{type:"text",disabled:!0},"Text"))};const z=function(){return o.createElement(o.Fragment,null,o.createElement(D.Z,{type:"primary",danger:!0},"Primary"),o.createElement(D.Z,{danger:!0},"Default"),o.createElement(D.Z,{type:"dashed",danger:!0},"Dashed"),o.createElement(D.Z,{type:"link",danger:!0},"Link"),o.createElement(D.Z,{type:"text",danger:!0},"Text"))};var M=t(9688),V={};V.styleTagTransform=Z(),V.setAttributes=E(),V.insert=h().bind(null,"head"),V.domAPI=y(),V.insertStyleElement=_();p()(M.Z,V);M.Z&&M.Z.locals&&M.Z.locals;var U=r.w,F=r.c,W=U.button,Y=W.demos,X=W.apiRows;const $=function(){return o.createElement("div",{className:"button-demo"},o.createElement("h1",null,"Button"),o.createElement("p",null,"Button is used to trigger events, such as click events, etc."),o.createElement("h2",null,"Demo"),o.createElement(A,{title:"Type",description:"Use different type in different scenes.",content:o.createElement(R,null),code:Y["demo-1"]}),o.createElement(A,{title:"Icon",content:o.createElement(N,null),code:Y["demo-2"]}),o.createElement(A,{title:"Loading",content:o.createElement(T,null),code:Y["demo-3"]}),o.createElement(A,{title:"Disabled",content:o.createElement(L,null),code:Y["demo-4"]}),o.createElement(A,{title:"Danger",content:o.createElement(z,null),code:Y["demo-5"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:F,data:X}))}},7349:(n,e,t)=>{t.d(e,{Z:()=>j});var o=t(7294),r=t(4184),a=t.n(r),l=t(9074),c=t(9940),i=t(3379),s=t.n(i),u=t(7795),f=t.n(u),d=t(569),m=t.n(d),g=t(3565),p=t.n(g),b=t(9216),y=t.n(b),v=t(4589),h=t.n(v),x=t(7082),E={};E.styleTagTransform=h(),E.setAttributes=p(),E.insert=m().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=y();s()(x.Z,E);x.Z&&x.Z.locals&&x.Z.locals;var w=["className","type","danger","loading","disabled","children","onClick"];function _(){return _=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},_.apply(this,arguments)}function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z(n){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z(n)}function O(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var B=l.O;const j=(0,o.forwardRef)((function(n,e){var t,r=n.className,l=n.type,i=n.danger,s=n.loading,u=n.disabled,f=n.children,d=n.onClick,m=O(n,w),g=(0,o.useMemo)((function(){var n=[];return o.Children.forEach(f,(function(e,t){["string","number"].includes(Z(e))?n.push(o.createElement("span",{key:t},e)):e.type===c.Z&&s||n.push(e)})),n}),[f,s]);return o.createElement("button",_({className:a()("".concat(B,"-button"),r,(t={},k(t,"".concat(B,"-button--").concat(l),l),k(t,"".concat(B,"-button--danger"),i),k(t,"".concat(B,"-button--loading"),s),t)),ref:e,disabled:u,onClick:u||s?function(){}:d},m),s&&o.createElement(c.Z,{className:"".concat(B,"-button__loading"),type:"loading"}),g)}))},7618:(n,e,t)=>{t.d(e,{Z:()=>L});var o=t(7294),r=t(3935),a=t(4184),l=t.n(a),c=t(9074),i=t(2205),s=t(9940),u=t(3477),f=t(3379),d=t.n(f),m=t(7795),g=t.n(m),p=t(569),b=t.n(p),y=t(3565),v=t.n(y),h=t(9216),x=t.n(h),E=t(4589),w=t.n(E),_=t(9968),k={};k.styleTagTransform=w(),k.setAttributes=v(),k.insert=b().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=x();d()(_.Z,k);_.Z&&_.Z.locals&&_.Z.locals;var Z=["visible","duration"];function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function B(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){j(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function j(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function S(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var P=c.O,A=function(){return o.createElement(s.Z,{type:"info-circle-fill",color:"var(--fog-primary-color)"})},D=function(){return o.createElement(s.Z,{type:"close-circle-fill",color:"var(--fog-danger-color)"})},R=function(){return o.createElement(s.Z,{type:"sigh-circle-fill",color:"var(--fog-warning-color)"})},N=function(){return o.createElement(s.Z,{type:"success-circle-fill",color:"var(--fog-success-color)"})},C=function(n){var e=n.className,t=n.icon,r=n.content;return o.createElement("div",{className:l()("".concat(P,"-message"),e)},t&&o.createElement("div",{className:"".concat(P,"-message__icon")},t),o.createElement("div",{className:"".concat(P,"-message__content")},r))};C.defaultProps={icon:o.createElement(A,null)};var I=[],T=document.createElement("div");T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.right="0px",T.style.zIndex="10",T.style.pointerEvents="none",document.body.appendChild(T),C.info=function(n){var e,t=document.createElement("div");t.style.textAlign="center",T.appendChild(t);var a=function(n){var a=n.visible,c=void 0===a||a,s=n.duration,f=void 0===s?3e3:s,d=S(n,Z);c?0!==f&&(e=(0,u.cX)(l,f)):(0,u.lo)(e),r.render(o.createElement(i.Z,{visible:c,beforeEnter:"".concat(P,"-message--before-enter"),entering:"".concat(P,"-message--entering"),entered:"".concat(P,"-message--entered"),leaving:"".concat(P,"-message--leaving"),onLeft:function(){r.unmountComponentAtNode(t),T.contains(t)&&T.removeChild(t)}},o.createElement(C,d)),t)},l=function(){a(B(B({},n),{},{visible:!1})),I=I.filter((function(n){return n!==c}))};a(n);var c={destroy:l};return I.push(c),c},C.error=function(n){return C.info(B({icon:o.createElement(D,null)},n))},C.warning=function(n){return C.info(B({icon:o.createElement(R,null)},n))},C.success=function(n){return C.info(B({icon:o.createElement(N,null)},n))},C.destroyAll=function(){for(;I.length;){I.pop().destroy()}};const L=C},9960:(n,e,t)=>{t.d(e,{Z:()=>P});var o=t(7294),r=t(4184),a=t.n(r),l=t(9074);const c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,o.useMemo)((function(){return Array.isArray(n)?n:e}),[n,e])};var i=t(3477),s=t(3379),u=t.n(s),f=t(7795),d=t.n(f),m=t(569),g=t.n(m),p=t(3565),b=t.n(p),y=t(9216),v=t.n(y),h=t(4589),x=t.n(h),E=t(6417),w={};w.styleTagTransform=x(),w.setAttributes=b(),w.insert=g().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=v();u()(E.Z,w);E.Z&&E.Z.locals&&E.Z.locals;function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function k(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){Z(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Z(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(n);!(l=(o=t.next()).done)&&(a.push(o.value),!e||a.length!==e);l=!0);}catch(n){c=!0,r=n}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return B(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}var j=l.O,S=function(n){var e,t=n.className,r=n.rowKey,l=n.contentWidth,s=n.data,u=n.columns,f=(0,o.useRef)(null),d=O((0,o.useState)({}),2),m=d[0],g=d[1],p=O((0,o.useState)(!1),2),b=p[0],y=p[1],v=O((0,o.useState)(!1),2),h=v[0],x=v[1],E=(0,o.useMemo)((function(){return Array.isArray(u)?u.map((function(n){return k(k({},n),{},{fixed:(e=n.fixed,["left","right"].includes(e)?n.fixed:void 0)});var e})):[]}),[u]),w=c(s),_=(0,o.useMemo)((function(){return E.reduce((function(n,e){return k(k({},n),{},Z({},e.key,o.createRef()))}),{})}),[E]),B=(0,o.useMemo)((function(){return E.filter((function(n){return"left"===n.fixed})).map((function(n){return n.key}))}),[E]),S=(0,o.useMemo)((function(){return E.filter((function(n){return"right"===n.fixed})).map((function(n){return n.key}))}),[E]),P=function(n){return B.length&&B[B.length-1]===n},A=function(n){return S.length&&S[0]===n},D=function(){if(f.current){var n=f.current,e=n.scrollLeft,t=n.scrollWidth,o=n.clientWidth;y(0===e),x(e+o===t)}},R=function(){var n={},e=0,t=0;B.forEach((function(t){_[t].current&&(n[t]={left:e},e+=_[t].current.offsetWidth)})),S.reverse().forEach((function(e){_[e].current&&(n[e]={right:t},t+=_[e].current.offsetWidth)})),g(n),D()};return(0,o.useLayoutEffect)((function(){if(ResizeObserver){var n=[];return Object.keys(_).forEach((function(e){var t=new ResizeObserver(R);t.observe(_[e].current),n.push(t)})),function(){return n.forEach((function(n){return n.disconnect()}))}}}),[_]),(0,o.useLayoutEffect)((function(){if(f.current)return f.current.addEventListener("scroll",D),function(){return f.current.removeEventListener("scroll",D)}}),[]),o.createElement("div",{className:a()(t,(e={},Z(e,"".concat(j,"-table"),!0),Z(e,"".concat(j,"-table--scroll-left-end"),b),Z(e,"".concat(j,"-table--scroll-right-end"),h),e))},o.createElement("div",{className:"".concat(j,"-table__content"),ref:f},o.createElement("table",{width:l},o.createElement("thead",{className:"".concat(j,"-table__thead")},o.createElement("tr",{className:"".concat(j,"-table__tr")},E.map((function(n){var e,t=n.key,r=n.fixed;return o.createElement("th",{className:a()((e={},Z(e,"".concat(j,"-table__cell"),!0),Z(e,"".concat(j,"-table__cell--fixed"),r),Z(e,"".concat(j,"-table__cell--fixed-last"),P(t)),Z(e,"".concat(j,"-table__cell--fixed-first"),A(t)),e)),key:t,ref:_[t],style:m[t]||{}},n.name)})))),o.createElement("tbody",{className:"".concat(j,"-table__tbody")},w.map((function(n,e){return o.createElement("tr",{className:"".concat(j,"-table__tr"),key:r||e},E.map((function(t){var r,l=t.key,c=t.width,s=t.fixed,u=t.render;return o.createElement("td",{className:a()((r={},Z(r,"".concat(j,"-table__cell"),!0),Z(r,"".concat(j,"-table__cell--fixed"),s),Z(r,"".concat(j,"-table__cell--fixed-last"),P(l)),Z(r,"".concat(j,"-table__cell--fixed-first"),A(l)),r)),key:l,width:c,style:m[l]||{}},(0,i.mf)(u)?u(n[l],n,e):n[l])})))}))))))};S.defaultProps={};const P=S},9688:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,".button-demo .fog-button {\n  margin-right: 12px;\n}\n.button-demo .fog-demo {\n  margin-bottom: 20px;\n}\n",""]);const c=l},7082:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},9968:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,".fog-message {\n  display: inline-block;\n  padding: 10px 16px;\n  font-size: 0;\n  line-height: 22px;\n  box-shadow: 0 0 8px var(--fog-shadow-color);\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  margin-top: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n  pointer-events: all;\n}\n.fog-message,\n.fog-message *,\n.fog-message *:before,\n.fog-message *:after {\n  box-sizing: border-box;\n}\n.fog-message--before-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message--entering {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--entered {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--leaving {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message__icon {\n  margin-right: 8px;\n}\n.fog-message__icon,\n.fog-message__content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.fog-message .fog-icon {\n  display: block;\n  font-size: 16px;\n}\n",""]);const c=l},6417:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,".fog-table {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.fog-table,\n.fog-table *,\n.fog-table *:before,\n.fog-table *:after {\n  box-sizing: border-box;\n}\n.fog-table__content {\n  overflow: auto hidden;\n}\n.fog-table table {\n  min-width: 100%;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n.fog-table__cell {\n  position: relative;\n  padding: 10px 16px;\n  color: var(--fog-color);\n  font-size: 14px;\n  text-align: left;\n  line-height: 22px;\n  border-right: 1px solid var(--fog-border-color);\n  border-bottom: 1px solid var(--fog-border-color);\n  background-color: var(--fog-background-color);\n}\n.fog-table__cell--fixed {\n  position: sticky;\n  z-index: 2;\n}\n.fog-table__cell--fixed-last::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(100%);\n  box-shadow: inset 10px 0 8px -8px var(--fog-border-color);\n  transition: box-shadow 0.3s;\n  pointer-events: none;\n}\n.fog-table--scroll-left-end .fog-table__cell--fixed-last::after {\n  box-shadow: none;\n}\n.fog-table__cell--fixed-first::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(-100%);\n  box-shadow: inset -10px 0 8px -8px var(--fog-border-color);\n  border-right: 1px solid var(--fog-border-color);\n  transition: box-shadow 0.3s;\n  pointer-events: none;\n}\n.fog-table--scroll-right-end .fog-table__cell--fixed-first::after {\n  box-shadow: none;\n  border-right-color: var(--fog-transparent);\n}\n.fog-table__cell:last-child {\n  border-right: none;\n}\n.fog-table__tbody .fog-table__tr:last-child .fog-table__cell {\n  border-bottom: none;\n}\n",""]);const c=l},1738:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([n.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const c=l}}]);