(this.webpackJsonpinstantrice=this.webpackJsonpinstantrice||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var r=n(133),o=n(135),c=n(0),i=n.n(c),s=n(45),a=n.n(s),d=n(137),b=n(124),j=n(126),l=n(125),h=n(132),u=n(4),O=n(139),m=n(129),p=n(130),x=n(128),g=n(138),f=n(136),C=n(121),k="#4DADD4",w="#747c90",W="#E1527E",B="#CB3563",v="#D37492",M="#CE577C",E=Object(C.a)({config:{initialColorMode:"dark",useSystemColorMode:!1},components:{},colors:{},styles:{global:{body:{bg:"#292F3A"}}}}),R=n(122),y=n(134),A=n(127),F=n(5),I=function(t){var e=t.isOpen,n=t.onClose,r=t.data,o="".concat(Object.entries(r.instantWM).map((function(t,e){return"instantwm.".concat(t[0]," : ").concat(t[1],"\r\n")}))).concat(Object.entries(r.instantMENU).map((function(t,e){return Object.entries(t[1]).map((function(e,n){return"instantmenu.".concat(t[0],".").concat(e[0]," : ").concat(e[1],"\r\n")}))})),"\n  ").replaceAll(",",""),c=Object(R.a)(o),i=c.onCopy,s=c.hasCopied;return Object(F.jsxs)(y.a,{isOpen:e,onClose:n,motionPreset:"slideInBottom",children:[Object(F.jsx)(y.f,{}),Object(F.jsxs)(y.c,{borderRadius:"0",borderColor:k,borderWidth:"2px",backgroundColor:"#292F3A",children:[Object(F.jsxs)(l.a,{width:"full",justifyContent:"space-between",padding:1,children:[Object(F.jsx)(y.e,{flex:"1",children:r.name}),Object(F.jsx)(f.a,{onClick:n,size:"xs",borderRadius:"0",colorScheme:"transparent",background:W,borderBottomWidth:"5px",borderBottomColor:B,_hover:{borderBottomWidth:"8px",background:v,borderBottomColor:M}})]}),Object(F.jsx)(y.b,{width:"100%",children:Object(F.jsx)(j.a,{size:"container.lg",children:Object(F.jsxs)(A.a,{width:"full",borderRadius:"0",p:2,children:[Object.entries(r.instantWM).map((function(t,e){return Object(F.jsxs)(x.a,{children:[Object(F.jsx)(m.b,{size:15,backgroundColor:t[1],mr:1,d:"inline-block"}),"instantwm.",t[0].toLowerCase()," : ",Object(F.jsx)(x.a,{as:"span",children:t[1]})]},e)})),Object.entries(r.instantMENU).map((function(t,e){return Object.entries(t[1]).map((function(e,n){return Object(F.jsxs)(x.a,{children:[Object(F.jsx)(m.b,{size:15,backgroundColor:e[1],mr:1,d:"inline-block"}),"instantmenu.",t[0],".",e[0]," :"," ",Object(F.jsx)(x.a,{as:"span",children:e[1]})]},n)}))}))]})})}),Object(F.jsx)(y.d,{children:Object(F.jsx)(f.a,{width:"full",borderRadius:"0",pt:1,colorScheme:"transparent",background:W,borderBottomWidth:"5px",borderBottomColor:B,_hover:{borderBottomWidth:"8px",background:v,borderBottomColor:M},onClick:function(){i()},children:s?"Theme copied to clipboard":"Copy to clipboard"})})]})]})},S=function(t){var e=t.data,n=Object(d.a)(),r=n.isOpen,o=n.onOpen,c=n.onClose,i=function(){var t=Object.values(e.instantWM);return[t[t.length-1],t[0],t[Math.round((t.length-1)/2)]]}(),s=Object(u.a)(i,3),a=s[0],b=s[1],j=s[2];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,{isOpen:r,onClose:c,data:e}),Object(F.jsxs)(m.a,{borderRadius:0,borderWidth:"2px",width:"full",borderColor:w,padding:3,children:[Object(F.jsx)(p.a,{children:Object(F.jsx)(x.a,{children:e.name})}),Object(F.jsxs)(g.a,{spacing:"3px",children:[Object(F.jsx)(m.a,{bg:a,width:"100%",height:"1rem"}),Object(F.jsx)(m.a,{bg:b,width:"100%",height:"1rem"}),Object(F.jsx)(m.a,{bg:j,width:"100%",height:"1rem"})]}),Object(F.jsx)(f.a,{onClick:o,background:e.instantWM.focus,colorScheme:"transparent",borderRadius:"0",pt:1,mt:4,borderBottomWidth:"5px",borderBottomColor:e.instantWM.darkFocus,_hover:{borderBottomWidth:"8px",background:e.instantWM.hoverFocus,borderBottomColor:e.instantWM.darkHoverFocus},children:"View"})]})]})},z=function(t){var e=t.triggerAnim,n=Object(c.useState)([]),r=Object(u.a)(n,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/uvera/instantRICE-resources/main/themes.json").then((function(t){return t.json()})).then((function(t){return i(t)})).then((function(t){return e()})).catch(console.log)}),[e]),Object(F.jsx)(O.a,{columns:[2,3],spacing:"40px",width:"full",borderWidth:"2px",borderColor:k,padding:3,height:"full",children:o.map((function(t,e){return Object(F.jsx)(S,{data:t},e)}))})};var D=function(){var t=Object(d.a)(),e=t.isOpen,n=t.onOpen;return Object(F.jsx)(b.a,{in:e,children:Object(F.jsx)(j.a,{maxW:"container.xl",centerContent:!0,children:Object(F.jsxs)(l.a,{direction:"column",width:"full",alignItems:"center",children:[Object(F.jsx)(h.a,{as:"h1",size:"lg",mt:4,children:"InstantRICE"}),Object(F.jsx)(z,{triggerAnim:n})]})})})};n(108);a.a.render(Object(F.jsxs)(i.a.StrictMode,{children:[Object(F.jsx)(r.a,{}),Object(F.jsx)(o.a,{theme:E,children:Object(F.jsx)(D,{})})]}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.1836000c.chunk.js.map