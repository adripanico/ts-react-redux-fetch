import{r as e,j as t}from"./index-670f58fd.js";var n="NOT_FOUND",r=function(e,t){return e===t};var a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"==typeof c&&(o=c,c=r.pop()),"function"!=typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o.memoizeOptions,l=void 0===s?n:s,f=Array.isArray(l)?l:[l],p=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}(r),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(f)),d=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d}}((function(e,t){var a,u,i,o="object"==typeof t?t:{equalityCheck:t},c=o.equalityCheck,s=void 0===c?r:c,l=o.maxSize,f=void 0===l?1:l,p=o.resultEqualityCheck,h=(i=s,function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var n=e.length,r=0;r<n;r++)if(!i(e[r],t[r]))return!1;return!0}),d=1===f?(a=h,{get:function(e){return u&&a(u.key,e)?u.value:n},put:function(e,t){u={key:e,value:t}},getEntries:function(){return u?[u]:[]},clear:function(){u=void 0}}):function(e,t){var r=[];function a(e){var a=r.findIndex((function(n){return t(e,n.key)}));if(a>-1){var u=r[a];return a>0&&(r.splice(a,1),r.unshift(u)),u.value}return n}return{get:a,put:function(t,u){a(t)===n&&(r.unshift({key:t,value:u}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(f,h);function v(){var t=d.get(arguments);if(t===n){if(t=e.apply(null,arguments),p){var r=d.getEntries().find((function(e){return p(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return v.clearCache=function(){return d.clear()},v}));const u=e=>e.characters,i=a([u],(e=>e.characters)),o=a([u],(e=>{var t;return!e.isLoading&&(null==(t=e.characters)?void 0:t.length)>0})),c=a([u,(e,t)=>t],((e,t)=>{if(t)return e.characters.find((e=>e.id===Number(t)))})),s=a([u],(e=>e.isLoading)),l=a([u],(e=>e.currentPage)),f=a([u],(e=>e.currentName)),p=a([u],(e=>e.lastPage)),h=a([u],(e=>1===e.currentPage)),d=a([u],(e=>e.currentPage===e.lastPage)),v=a([u],(e=>e.fetchError)),g=({width:n="100%",height:r="100%",alt:a,src:u})=>{const[i,o]=e.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("img",{onLoad:()=>o(!0),src:u,alt:a,style:{display:i?"block":"none",width:n,height:r},crossOrigin:"anonymous"}),t.jsx("img",{srcSet:"/ts-react-redux-fetch/assets/character-img-placeholder-d94c2d4f.png",alt:a,style:{display:i?"none":"block",width:n,height:r}})]})},y=({label:e,value:n})=>t.jsxs("p",{children:[e,": ",t.jsx("strong",{children:n})]}),m={status:"_status_1xoj0_1",Dead:"_Dead_1xoj0_9",Alive:"_Alive_1xoj0_12",unknown:"_unknown_1xoj0_15"},x=({status:e,className:n=""})=>t.jsx("span",{className:`${m.status} ${m[e]} ${n}`,children:e});export{g as C,y as D,x as S,v as a,i as b,l as c,p as d,h as e,d as f,o as g,f as h,c as i,s};