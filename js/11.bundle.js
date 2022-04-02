"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[11],{5488:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var o=t(7294),r=t(7368),a=t(9960),l=t(2041),i=t(252),c=i.ZP.SubMenu,u=i.ZP.ItemGroup,s=i.ZP.Item;const m=function(){return o.createElement(i.ZP,{defaultOpens:["Navigation 1","Navigation 2","SubMenu"],defaultValue:"Option 1"},o.createElement(c,{label:"Navigation 1",key:"Navigation 1"},o.createElement(u,{label:"Group-1",key:"Group-1"},o.createElement(s,{label:"Option 1",key:"Option 1"}),o.createElement(s,{label:"Option 2",key:"Option 2"})),o.createElement(u,{label:"Group-2",key:"Group-2"},o.createElement(s,{label:"Option 3",key:"Option 3"}),o.createElement(s,{label:"Option 4",key:"Option 4"}))),o.createElement(c,{label:"Navigation 2",key:"Navigation 2"},o.createElement(s,{label:"Option 5",key:"Option 5"}),o.createElement(s,{label:"Option 6",key:"Option 6"}),o.createElement(c,{label:"SubMenu",key:"SubMenu"},o.createElement(s,{label:"Option 7",key:"Option 7"}),o.createElement(s,{label:"Option 8",key:"Option 8"}))),o.createElement(s,{label:"Option 9",key:"Option 9"}),o.createElement(s,{label:"Option 10",key:"Option 10"}))};var d=t(3379),p=t.n(d),f=t(7795),g=t.n(f),b=t(569),y=t.n(b),E=t(3565),h=t.n(E),v=t(9216),_=t.n(v),Z=t(4589),O=t.n(Z),x=t(9741),k={};k.styleTagTransform=O(),k.setAttributes=h(),k.insert=y().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=_();p()(x.Z,k);x.Z&&x.Z.locals&&x.Z.locals;var w=r.w,M=r.c,N=w.menu,S=N.demos,A=N.apiRows;const C=function(){return o.createElement("div",{className:"menu-demo"},o.createElement("h1",null,"Menu"),o.createElement("p",null,"Menu is used to display the collection of entries."),o.createElement("h2",null,"Demo"),o.createElement(l.Z,{title:"Basic Usage",content:o.createElement(m,null),code:S["demo-1"]}),o.createElement("h2",null,"API"),o.createElement("h3",null,"Menu"),o.createElement(a.Z,{columns:M,data:A.default}),o.createElement("h3",null,"Menu.Item"),o.createElement(a.Z,{columns:M,data:A["menu-item"]}),o.createElement("h3",null,"Menu.ItemGroup"),o.createElement(a.Z,{columns:M,data:A["menu-item-group"]}),o.createElement("h3",null,"Menu.SubMenu"),o.createElement(a.Z,{columns:M,data:A.submenu}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(7294),r=t(9074),a=t(2282),l=t(5046),i=t(4346),c=t(6032),u=t(2022),s=t(9940),m=t(7618),d=t(3379),p=t.n(d),f=t(7795),g=t.n(f),b=t(569),y=t.n(b),E=t(3565),h=t.n(E),v=t(9216),_=t.n(v),Z=t(4589),O=t.n(Z),x=t(1738),k={};k.styleTagTransform=O(),k.setAttributes=h(),k.insert=y().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=_();p()(x.Z,k);x.Z&&x.Z.locals&&x.Z.locals;function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw r}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var N=r.O;a.Z.registerLanguage("tsx",l.Z);const S=function(e){var n=e.title,t=e.description,r=e.content,l=e.code,d=(0,o.useContext)(u.f),p=w((0,o.useState)(!1),2),f=p[0],g=p[1],b=w((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),y=b[0],E=b[1],h=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(f&&ResizeObserver&&h.current){var e=new ResizeObserver((function(){var e=h.current.getBoundingClientRect().height;E(e)}));return e.observe(h.current),function(){return e.disconnect()}}}),[f]),(0,o.useEffect)((function(){return m.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(N,"-demo")},o.createElement("h3",{className:"".concat(N,"-demo__title")},o.createElement("span",null,n),o.createElement("div",{className:"".concat(N,"-demo__options")},o.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return m.Z.success({content:"Code copied"})})).catch((function(){return m.Z.error({content:"Please copy manually"})}))}}),o.createElement(s.Z,{type:"code",onClick:function(){return g(!f)}}))),t&&o.createElement("p",{className:"".concat(N,"-demo__description")},t),o.createElement("div",{className:"".concat(N,"-demo__content")},r),o.createElement("div",{className:"".concat(N,"-demo__code-wrapper"),style:{height:f?y:0}},o.createElement("div",{ref:h},o.createElement(a.Z,{className:"".concat(N,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:d?c.Z:i.Z},l))))}},9741:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,".menu-demo .fog-menu {\n  width: 240px;\n  border: 1px solid var(--fog-border-color);\n}\n",""]);const i=l},1738:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const i=l}}]);