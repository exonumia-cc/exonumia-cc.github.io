"use strict";(self.webpackChunkexonumia_cc=self.webpackChunkexonumia_cc||[]).push([[17266],{17266:(e,l,t)=>{t.r(l),t.d(l,{default:()=>s});var a=t(66252),r=t(2262),i=t(52791),n=t(29636);const u={class:"content-links"},s=(0,a.aZ)({setup(e){const l=(0,i.VU)().value.filter((e=>{var l;return 1==(null==(l=e.link)?void 0:l.includes("/translations/"))}));return(e,t)=>((0,a.wg)(),(0,a.iD)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(l),(e=>((0,a.wg)(),(0,a.j4)((0,r.SU)(n.G),{key:e.link||e.text,item:e},null,8,["item"])))),128))]))}})},20874:(e,l,t)=>{t.d(l,{Z:()=>o});var a=t(66252),r=t(2262),i=t(3577),n=t(42119),u=t(97621),s=t(480);const v=["href","rel","target","aria-label"],c=(0,a.aZ)({inheritAttrs:!1}),o=(0,a.aZ)({...c,props:{item:{type:Object,required:!0}},setup:function(e){const l=e,t=(0,n.yj)(),c=(0,u.WF)(),{item:o}=(0,r.BK)(l),d=(0,r.Fl)((()=>(0,s.ak)(o.value.link))),k=(0,r.Fl)((()=>(0,s.B2)(o.value.link)||(0,s.R5)(o.value.link))),h=(0,r.Fl)((()=>{if(!k.value)return o.value.target?o.value.target:d.value?"_blank":void 0})),p=(0,r.Fl)((()=>"_blank"===h.value)),b=(0,r.Fl)((()=>!d.value&&!k.value&&!p.value)),m=(0,r.Fl)((()=>{if(!k.value)return o.value.rel?o.value.rel:p.value?"noopener noreferrer":void 0})),U=(0,r.Fl)((()=>o.value.ariaLabel||o.value.text)),f=(0,r.Fl)((()=>{const e=Object.keys(c.value.locales);return e.length?!e.some((e=>e===o.value.link)):"/"!==o.value.link})),g=(0,r.Fl)((()=>!!f.value&&t.path.startsWith(o.value.link))),S=(0,r.Fl)((()=>!!b.value&&(o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):g.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),n=(0,a.up)("OutboundLink");return(0,r.SU)(b)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,r.SU)(S)}],to:(0,r.SU)(o).link,"aria-label":(0,r.SU)(U)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,i.zw)((0,r.SU)(o).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,r.SU)(o).link,rel:(0,r.SU)(m),target:(0,r.SU)(h),"aria-label":(0,r.SU)(U)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,i.zw)((0,r.SU)(o).text)+" ",1),(0,r.SU)(p)?((0,a.wg)(),(0,a.j4)(n,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,v))}}})},29636:(e,l,t)=>{t.d(l,{G:()=>c});var a=t(66252),r=t(42119),i=t(20874);const n=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),u=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||n(e.path)===n(l)))(e,l.link)||!!l.children&&l.children.some((l=>u(e,l))),s=(e,l)=>e.link?(0,a.h)(i.Z,{...l,item:e}):(0,a.h)("p",l,e.text),v=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(c,{item:e,depth:l+1}))))):null},c=({item:e,depth:l=0})=>{const t=(0,r.yj)(),a=u(t,e);return[s(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),v(e,l)]};c.displayName="SidebarChild",c.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}}}}]);