"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[17],{4746:(r,o,n)=>{n.r(o),n.d(o,{default:()=>B});var e=n(7294),t=n(7368),a=n(9960),l=n(2041),i=n(9939),c=n(8692);function d(r,o){return function(r){if(Array.isArray(r))return r}(r)||function(r,o){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,t,a=[],l=!0,i=!1;try{for(n=n.call(r);!(l=(e=n.next()).done)&&(a.push(e.value),!o||a.length!==o);l=!0);}catch(r){i=!0,t=r}finally{try{l||null==n.return||n.return()}finally{if(i)throw t}}return a}(r,o)||function(r,o){if(!r)return;if("string"==typeof r)return u(r,o);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(r,o)}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,o){(null==o||o>r.length)&&(o=r.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=r[n];return e}const s=function(){var r=d((0,e.useState)(!1),2),o=r[0],n=r[1];return e.createElement(e.Fragment,null,e.createElement(c.Z,{onClick:function(){return n(!0)}},"Open"),e.createElement(i.Z,{title:"Basic Usage",visible:o,onClose:function(){return n(!1)}},"Drawer Content"))};var f=n(2541),g=n(3477),p=n(3379),b=n.n(p),m=n(7795),v=n.n(m),h=n(569),y=n.n(h),k=n(3565),w=n.n(k),_=n(9216),E=n.n(_),Z=n(4589),C=n.n(Z),x=n(8165),S={};S.styleTagTransform=C(),S.setAttributes=w(),S.insert=y().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=E();b()(x.Z,S);x.Z&&x.Z.locals&&x.Z.locals;function A(r,o){return function(r){if(Array.isArray(r))return r}(r)||function(r,o){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==n)return;var e,t,a=[],l=!0,i=!1;try{for(n=n.call(r);!(l=(e=n.next()).done)&&(a.push(e.value),!o||a.length!==o);l=!0);}catch(r){i=!0,t=r}finally{try{l||null==n.return||n.return()}finally{if(i)throw t}}return a}(r,o)||function(r,o){if(!r)return;if("string"==typeof r)return N(r,o);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(r,o)}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(r,o){(null==o||o>r.length)&&(o=r.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=r[n];return e}var O=["top","right","bottom","left"],I=function(){var r=A((0,e.useState)(0),2),o=r[0],n=r[1];return e.createElement("div",{className:"drawer-content"},e.createElement("p",null,"Clicked ",o," times, state preserved."),e.createElement(c.Z,{onClick:function(){return n(o+1)}},"Click me"))};const P=function(){var r=A((0,e.useState)(!1),2),o=r[0],n=r[1],t=A((0,e.useState)(O[1]),2),a=t[0],l=t[1];return e.createElement(e.Fragment,null,e.createElement(f.Z.Group,{style:{marginRight:12},value:a,onChange:function(r){return l(r.target.value)}},O.map((function(r){return e.createElement(f.Z,{value:r,key:r},(0,g.gC)(r))}))),e.createElement(c.Z,{onClick:function(){return n(!0)}},"Open"),e.createElement(i.Z,{title:"Basic Usage",visible:o,placement:a,onClose:function(){return n(!1)}},e.createElement(I,null)))};var T=t.w,j=t.c,U=T.drawer,V=U.demos,z=U.apiRows;const B=function(){return e.createElement("div",{className:"drawer-demo"},e.createElement("h1",null,"Drawer"),e.createElement("p",null,"Drawer is used as a popup layer from side of window."),e.createElement("h2",null,"Demo"),e.createElement(l.Z,{title:"Basic Usage",description:"Open drawer on the right side of window.",content:e.createElement(s,null),code:V["demo-1"]}),e.createElement(l.Z,{title:"Placement",description:"Open drawer with custom popup placement.",content:e.createElement(P,null),code:V["demo-2"]}),e.createElement("h2",null,"API"),e.createElement(a.Z,{columns:j,data:z.default}))}},2541:(r,o,n)=>{n.d(o,{Z:()=>z});var e=n(7294),t=n(4184),a=n.n(t),l=n(9074),i=n(3379),c=n.n(i),d=n(7795),u=n.n(d),s=n(569),f=n.n(s),g=n(3565),p=n.n(g),b=n(9216),m=n.n(b),v=n(4589),h=n.n(v),y=n(3929),k={};k.styleTagTransform=h(),k.setAttributes=p(),k.insert=f().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=m();c()(y.Z,k);y.Z&&y.Z.locals&&y.Z.locals;function w(r,o,n){return o in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,r}var _=l.O,E=function(r){var o,n=r.className,t=r.value,l=r.checked,i=r.disabled,c=r.buttonStyle,d=r.children,u=r.onClick;return e.createElement(z,{className:"".concat(_,"-radio-button-wrapper"),value:t,checked:l,disabled:i,onClick:u},e.createElement("div",{className:a()(n,(o={},w(o,"".concat(_,"-radio-button"),!0),w(o,"".concat(_,"-radio-button--checked"),l),w(o,"".concat(_,"-radio-button--disabled"),i),w(o,"".concat(_,"-radio-button--").concat(c),l&&!i&&c),o))},d))};E.defaultProps={buttonStyle:"outline"};const Z=E;var C=n(4692),x=n(3477),S=n(6953),A={};A.styleTagTransform=h(),A.setAttributes=p(),A.insert=f().bind(null,"head"),A.domAPI=u(),A.insertStyleElement=m();c()(S.Z,A);S.Z&&S.Z.locals&&S.Z.locals;var N=l.O,O=function(r){var o=r.className,n=r.style,t=r.value,l=r.defaultValue,i=r.onChange,c=r.children,d=r.disabled,u=r.buttonStyle,s=(0,C.Z)({value:t,defaultValue:l,onChange:i,innerValueGetter:function(r){return r.target.value}}),f=s.value,g=s.onChange,p=function(r){r.target.value!==f&&g(r)},b=(0,e.useMemo)((function(){var r=[];return e.Children.forEach(c,(function(o){o.type===z&&r.push(e.cloneElement(o,{checked:o.props.value===f,disabled:o.props.disabled||d,onClick:function(r){p(r),(0,x.mf)(o.props.onClick)&&o.props.onClick(r)}})),o.type===Z&&r.push(e.cloneElement(o,{checked:o.props.value===f,disabled:o.props.disabled||d,onClick:function(r){p(r),(0,x.mf)(o.props.onClick)&&o.props.onClick(r)},buttonStyle:u}))})),r}),[c,f]);return e.createElement("div",{className:a()("".concat(N,"-radio-group"),o),style:n},b)};O.defaultProps={buttonStyle:"outline"};const I=O;var P=n(5026),T={};T.styleTagTransform=h(),T.setAttributes=p(),T.insert=f().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=m();c()(P.Z,T);P.Z&&P.Z.locals&&P.Z.locals;function j(r,o,n){return o in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,r}var U=l.O,V=function(r){var o,n=r.className,t=r.value,l=r.checked,i=r.defaultChecked,c=r.disabled,d=r.children,u=r.onClick,s=(0,C.Z)({value:l,defaultValue:i,innerValueGetter:function(r){return r.target.checked}}),f=s.value,g=s.onChange;return e.createElement("div",{className:a()(n,(o={},j(o,"".concat(U,"-radio"),!0),j(o,"".concat(U,"-radio--checked"),f),j(o,"".concat(U,"-radio--disabled"),c),o))},e.createElement("label",{className:"".concat(U,"-radio__label")},e.createElement("input",{className:"".concat(U,"-radio__input"),type:"radio",value:t,checked:f||!1,onChange:g,disabled:c,onClick:function(r){return(0,x.mf)(u)&&u(r)}}),e.createElement("span",{className:"".concat(U,"-radio__dot")}),e.createElement("span",{className:"".concat(U,"-radio__content")},d)))};V.defaultProps={},V.Group=I,V.Button=Z;const z=V},8165:(r,o,n)=>{n.d(o,{Z:()=>i});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".drawer-demo {\n  position: static;\n}\n",""]);const i=l},3929:(r,o,n)=>{n.d(o,{Z:()=>i});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".fog-radio-button-wrapper .fog-radio__dot {\n  display: none;\n}\n.fog-radio-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--fog-color);\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-transparent);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.fog-radio-button--disabled {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-radio-button--checked {\n  position: relative;\n}\n.fog-radio-button--disabled.fog-radio-button--checked {\n  background-color: var(--fog-internal-color-disabled);\n}\n.fog-radio-button:not(.fog-radio-button--disabled):not(.fog-radio-button--checked):hover {\n  color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--outline {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:hover {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--solid {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-radio-button--solid:hover {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--solid:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n",""]);const i=l},6953:(r,o,n)=>{n.d(o,{Z:()=>i});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".fog-radio-group {\n  display: inline-block;\n}\n.fog-radio-group,\n.fog-radio-group *,\n.fog-radio-group *:before,\n.fog-radio-group *:after {\n  box-sizing: border-box;\n}\n.fog-radio-group .fog-radio {\n  margin-right: 12px;\n}\n.fog-radio-group .fog-radio:last-child {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper .fog-radio-button {\n  border-radius: 0;\n  margin-right: -1px;\n}\n.fog-radio-group .fog-radio-button-wrapper:first-child .fog-radio-button {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.fog-radio-group .fog-radio-button-wrapper:last-child .fog-radio-button {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  margin-right: 0;\n}\n",""]);const i=l},5026:(r,o,n)=>{n.d(o,{Z:()=>i});var e=n(8081),t=n.n(e),a=n(3645),l=n.n(a)()(t());l.push([r.id,".fog-radio {\n  display: inline-block;\n}\n.fog-radio,\n.fog-radio *,\n.fog-radio *:before,\n.fog-radio *:after {\n  box-sizing: border-box;\n}\n.fog-radio__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-radio__input[type=\"radio\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-radio__dot,\n.fog-radio__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-radio__dot {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 50%;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-radio__dot::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 8px;\n  height: 8px;\n  background-color: var(--fog-transparent);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.fog-radio__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-radio:not(.fog-radio--checked):not(.fog-radio--disabled):hover .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-primary-color);\n}\n.fog-radio--disabled .fog-radio__content {\n  color: var(--fog-color-disabled);\n}\n.fog-radio--disabled .fog-radio__label {\n  cursor: not-allowed;\n}\n.fog-radio--disabled .fog-radio__dot {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-radio--disabled.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-background-color-active);\n}\n",""]);const i=l}}]);