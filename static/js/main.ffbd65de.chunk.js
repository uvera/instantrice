(this.webpackJsonpinstantrice=this.webpackJsonpinstantrice||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var r=n(136),o=n(138),c=n(0),s=n.n(c),i=n(45),a=n.n(i),d=n(140),b=n(127),j=n(130),l=n(128),h=n(129),u=n(5),O=n(142),m=n(132),x=n(134),p=n(141),g=n(139),C=n(124),f="#4DADD4",w="#747c90",k="#E1527E",W="#CB3563",v="#D37492",B="#CE577C",M=Object(C.a)({config:{initialColorMode:"dark",useSystemColorMode:!1},components:{},colors:{},styles:{global:{body:{bg:"#292F3A"}}},fonts:{heading:"Inter",body:"Roboto"}}),E=n(125),I=n(137),y=n(131),R=n(133),F=n(4),z=function(e){var t=e.isOpen,n=e.onClose,r=e.data,o="".concat(Object.entries(r.instantWM).map((function(e,t){return"instantwm.".concat(e[0]," : ").concat(e[1].toLowerCase(),"\r\n")}))).concat(Object.entries(r.instantMENU).map((function(e,t){return Object.entries(e[1]).map((function(t,n){return"instantmenu.".concat(e[0],".").concat(t[0]," : ").concat(t[1].toLowerCase(),"\r\n")}))})),"\n  ").replaceAll(",",""),c=Object(E.a)(o),s=c.onCopy,i=c.hasCopied;return Object(F.jsxs)(I.a,{isOpen:t,onClose:n,motionPreset:"slideInBottom",closeOnEsc:!0,children:[Object(F.jsx)(I.f,{}),Object(F.jsxs)(I.c,{borderRadius:"0",borderColor:f,borderWidth:"2px",backgroundColor:"#292F3A",children:[Object(F.jsx)(I.e,{flex:"1",children:Object(F.jsxs)(l.a,{width:"full",justifyContent:"space-between",alignItems:"center",padding:1,children:[Object(F.jsx)(h.a,{size:"md",children:r.name}),Object(F.jsx)(g.a,{onClick:n,size:"xs",borderRadius:"0",colorScheme:"transparent",background:k,borderBottomWidth:"5px",borderBottomColor:W,_hover:{borderBottomWidth:"8px",background:v,borderBottomColor:B}})]})}),Object(F.jsx)(I.b,{width:"100%",children:Object(F.jsx)(j.a,{size:"container.lg",children:Object(F.jsxs)(y.a,{width:"full",borderRadius:"0",p:2,fontFamily:"Fira Code",children:[Object.entries(r.instantWM).map((function(e,t){return Object(F.jsxs)(l.a,{alignItems:"center",children:[Object(F.jsx)(m.b,{size:15,backgroundColor:e[1],mr:1}),Object(F.jsxs)(R.a,{children:["instantwm.",e[0].toLowerCase()," :"," ",Object(F.jsx)(R.a,{as:"span",children:e[1].toLowerCase()})]},t)]})})),Object.entries(r.instantMENU).map((function(e,t){return Object.entries(e[1]).map((function(t,n){return Object(F.jsxs)(l.a,{alignItems:"center",children:[Object(F.jsx)(m.b,{size:15,backgroundColor:t[1],mr:1}),Object(F.jsxs)(R.a,{children:["instantmenu.",e[0],".",t[0]," :"," ",Object(F.jsx)(R.a,{as:"span",children:t[1].toLowerCase()})]},n)]})}))}))]})})}),Object(F.jsx)(I.d,{children:Object(F.jsx)(g.a,{width:"full",borderRadius:"0",pt:1,colorScheme:"transparent",background:k,borderBottomWidth:"5px",borderBottomColor:W,_hover:{borderBottomWidth:"8px",background:v,borderBottomColor:B},onClick:function(){s()},children:i?"Theme copied to clipboard":"Copy to clipboard"})})]})]})},A=function(e){var t=e.data,n=Object(d.a)(),r=n.isOpen,o=n.onOpen,c=n.onClose,s=function(){var e=Object.values(t.instantWM);return[e[e.length-1],e[0],e[Math.round((e.length-1)/2)]]}(),i=Object(u.a)(s,3),a=i[0],b=i[1],j=i[2];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(z,{isOpen:r,onClose:c,data:t}),Object(F.jsxs)(m.a,{borderRadius:0,borderWidth:"2px",width:"full",borderColor:w,padding:3,_hover:{borderColor:f},children:[Object(F.jsx)(x.a,{mb:.5,children:Object(F.jsx)(h.a,{as:"h2",size:"md",children:t.name})}),Object(F.jsxs)(p.a,{spacing:"3px",children:[Object(F.jsx)(m.a,{bg:a,width:"100%",height:"1rem"}),Object(F.jsx)(m.a,{bg:b,width:"100%",height:"1rem"}),Object(F.jsx)(m.a,{bg:j,width:"100%",height:"1rem"})]}),Object(F.jsx)(g.a,{onClick:o,background:t.instantWM.focus,colorScheme:"transparent",borderRadius:"0",pt:1,mt:4,borderBottomWidth:"5px",borderBottomColor:t.instantWM.darkFocus,_hover:{borderBottomWidth:"8px",background:t.instantWM.hoverFocus,borderBottomColor:t.instantWM.darkHoverFocus},children:"View"})]})]})},S=function(e){var t=e.triggerAnim,n=Object(c.useState)([]),r=Object(u.a)(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/uvera/instantRICE-resources/main/themes.json").then((function(e){return e.json()})).then((function(e){return s(e)})).then((function(e){return t()})).catch(console.log)}),[t]),Object(F.jsx)(O.a,{columns:[2,3],spacing:"40px",width:"full",borderWidth:"2px",borderColor:f,padding:3,height:"full",children:o.map((function(e,t){return Object(F.jsx)(A,{data:e},t)}))})};n(108),n(109),n(110);var L=function(){var e=Object(d.a)(),t=e.isOpen,n=e.onOpen;return Object(F.jsx)(b.a,{in:t,children:Object(F.jsx)(j.a,{maxW:"container.xl",centerContent:!0,children:Object(F.jsxs)(l.a,{direction:"column",width:"full",alignItems:"center",children:[Object(F.jsx)(h.a,{as:"h1",size:"lg",mt:4,mb:2,children:"InstantRICE"}),Object(F.jsx)(S,{triggerAnim:n})]})})})};n(111);a.a.render(Object(F.jsxs)(s.a.StrictMode,{children:[Object(F.jsx)(r.a,{}),Object(F.jsx)(o.a,{theme:M,children:Object(F.jsx)(L,{})})]}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.ffbd65de.chunk.js.map