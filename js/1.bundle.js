"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[1],{6989:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var a=t(7294),r=t(4184),l=t.n(r),o=t(9074),i=t(3477),s=t(3379),c=t.n(s),m=t(7795),u=t.n(m),d=t(569),f=t.n(d),g=t(3565),b=t.n(g),h=t(9216),y=t.n(h),p=t(4589),E=t.n(p),k=t(6417),v={};v.styleTagTransform=E(),v.setAttributes=b(),v.insert=f().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=y();c()(k.Z,v);k.Z&&k.Z.locals&&k.Z.locals;var Z=o.O,A=function(e){var n=e.className,t=e.rowKey,r=e.data,o=e.columns,s=(0,a.useMemo)((function(){return Array.isArray(o)?o:[]}),[o]),c=(0,a.useMemo)((function(){return Array.isArray(r)?r:[]}),[r]);return a.createElement("table",{className:l()("".concat(Z,"-table"),n)},a.createElement("thead",null,a.createElement("tr",null,s.map((function(e){return a.createElement("th",{key:e.key},e.name)})))),a.createElement("tbody",null,c.map((function(e,n){return a.createElement("tr",{key:t||n},s.map((function(t){var r=t.key,l=t.render;return a.createElement("td",{key:r},(0,i.mf)(l)?l(e[r],e,n):e[r])})))}))))};A.defaultProps={};const x=A;var T=t(316),w={};w.styleTagTransform=E(),w.setAttributes=b(),w.insert=f().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=y();c()(T.Z,w);T.Z&&T.Z.locals&&T.Z.locals;var z=[{key:"id",name:"Name",render:function(e){return"Line ".concat(e)}},{key:"starting",name:"Starting"},{key:"terminal",name:"Terminal"}],N=[{id:4,starting:"Anheqiao North",terminal:"Tiangongyuan"},{id:10,starting:"Suzhoujie",terminal:"Huoqiying"},{id:13,starting:"Xizhimen",terminal:"Dongzhimen"}];const S=function(){return a.createElement("div",{className:"table-demo"},a.createElement("h2",null,"Table"),a.createElement("h3",null,"Basic Usage"),a.createElement(x,{columns:z,data:N}))}},316:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),l=t(3645),o=t.n(l)()(r());o.push([e.id,".table-demo .fog-table {\n  width: 100%;\n}\n",""]);const i=o},6417:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),l=t(3645),o=t.n(l)()(r());o.push([e.id,".fog-table {\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.fog-table,\n.fog-table *,\n.fog-table *:before,\n.fog-table *:after {\n  box-sizing: border-box;\n}\n.fog-table th,\n.fog-table td {\n  padding: 8px 16px;\n  color: var(--fog-color);\n  font-size: 14px;\n  text-align: left;\n  line-height: 22px;\n  border: 1px solid var(--fog-border-color);\n}\n",""]);const i=o}}]);