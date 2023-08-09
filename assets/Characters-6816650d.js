import{u as w,j as s,a as r,b as m,r as g,f as x,c as N,d as b}from"./index-524e7042.js";import{C as P,S as I,D as j,s as v,a as L,b as k,c as z,d as S,e as M,f as y,g as E,h as F}from"./Status-705922c8.js";import $ from"./NotFound-8797e116.js";const H="_characterCard_146fh_1",D="_loading_146fh_16",V="_characterImg_146fh_40",W="_characterInfo_146fh_55",l={characterCard:H,loading:D,characterImg:V,characterInfo:W},f=({character:t})=>{const a=w();if(!t)return s.jsx("div",{className:`${l.characterCard} ${l.loading}`});const{image:n,name:c}=t;return s.jsxs("div",{className:l.characterCard,onClick:()=>a(`/characters/${t.id}`),children:[s.jsx("div",{className:l.characterImg,children:s.jsx(P,{src:n,alt:c})}),s.jsxs("div",{className:l.characterInfo,children:[s.jsx("h3",{children:t.name}),s.jsx(I,{status:t.status}),s.jsx(j,{label:"Origin",value:t.origin.name}),s.jsx(j,{label:"Location",value:t.location.name})]})]})},q="_grid_wl9io_1",C={grid:q},A=()=>{const t=r(e=>v(e)),a=r(e=>L(e)),n=r(e=>k(e)),c=m();return g.useEffect(()=>{!t&&!a&&!n.length&&c(x())},[n.length,c,a,t]),t?s.jsx("div",{className:C.grid,children:[1,2,3,4,5].map(e=>s.jsx(f,{},e))}):a?s.jsx($,{hideButton:!0}):s.jsx("div",{className:C.grid,children:n.map(e=>s.jsx(f,{character:e},e.id))})},p=()=>s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"})}),R="_navBar_1swma_1",T="_nextPage_1swma_29",_={navBar:R,nextPage:T},B=()=>{const t=r(i=>v(i)),a=r(i=>z(i)),n=r(i=>S(i)),c=r(i=>M(i)),e=r(i=>y(i)),h=m(),d=()=>{scroll(0,0),h(N())},o=()=>{scroll(0,0),h(b())};return s.jsxs("div",{className:_.navBar,children:[s.jsx("button",{disabled:c||t,onClick:d,children:s.jsx(p,{})}),s.jsxs("h3",{children:["Page ",a," out of ",n]}),s.jsx("button",{disabled:e||t,onClick:o,className:_.nextPage,children:s.jsx(p,{})})]})},Z=()=>s.jsx(s.Fragment,{children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"})})}),G=()=>s.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}),s.jsx("path",{d:"M9 10h2v8H9zm4 0h2v8h-2z"})]}),O="_searchBar_ztqxr_1",J="_resetButton_ztqxr_21",K="_submitButton_ztqxr_33",u={searchBar:O,resetButton:J,submitButton:K},Q=()=>{const[t,a]=g.useState(""),n=r(o=>v(o)),c=r(o=>E(o));g.useEffect(()=>a(c),[c]);const e=m(),h=o=>{e(x({name:t,page:1})),o.preventDefault()},d=()=>{a(""),e(x({name:"",page:1}))};return s.jsx("div",{className:u.searchBar,children:s.jsxs("form",{onSubmit:h,onReset:d,children:[s.jsx("input",{disabled:n,value:t,onChange:o=>a(o.currentTarget.value)}),t&&s.jsx("div",{className:u.resetButton,children:s.jsx("button",{type:"reset",children:s.jsx(G,{})})}),s.jsx("button",{type:"submit",disabled:n,className:u.submitButton,children:s.jsx(Z,{})})]})})},ss=()=>{const t=r(a=>F(a));return s.jsxs(s.Fragment,{children:[s.jsx(Q,{}),s.jsx(B,{}),s.jsx(A,{}),t&&s.jsx(B,{})]})};export{ss as default};
