import{r as w,j as m}from"./index-726af9d3.js";var x="NOT_FOUND";function A(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:x},put:function(n,c){t={key:n,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function L(e,t){var r=[];function n(o){var a=r.findIndex(function(d){return t(o,d.key)});if(a>-1){var u=r[a];return a>0&&(r.splice(a,1),r.unshift(u)),u.value}return x}function c(o,a){n(o)===x&&(r.unshift({key:o,value:a}),r.length>e&&r.pop())}function s(){return r}function g(){r=[]}return{get:n,put:c,getEntries:s,clear:g}}var k=function(t,r){return t===r};function z(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var c=r.length,s=0;s<c;s++)if(!e(r[s],n[s]))return!1;return!0}}function D(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,c=n===void 0?k:n,s=r.maxSize,g=s===void 0?1:s,o=r.resultEqualityCheck,a=z(c),u=g===1?A(a):L(g,a);function d(){var f=u.get(arguments);if(f===x){if(f=e.apply(null,arguments),o){var p=u.getEntries(),v=p.find(function(h){return o(h.value,f)});v&&(f=v.value)}u.put(arguments,f)}return f}return d.clearCache=function(){return u.clear()},d}function F(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function I(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var c=function(){for(var g=arguments.length,o=new Array(g),a=0;a<g;a++)o[a]=arguments[a];var u=0,d,f={memoizeOptions:void 0},p=o.pop();if(typeof p=="object"&&(f=p,p=o.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var v=f,h=v.memoizeOptions,C=h===void 0?r:h,O=Array.isArray(C)?C:[C],S=F(o),P=e.apply(void 0,[function(){return u++,p.apply(null,arguments)}].concat(O)),j=e(function(){for(var _=[],b=S.length,E=0;E<b;E++)_.push(S[E].apply(null,arguments));return d=P.apply(null,_),d});return Object.assign(j,{resultFunc:p,memoizedResultFunc:P,dependencies:S,lastResult:function(){return d},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),j};return c}var i=I(D);const l=e=>e.characters,K=i([l],e=>e.characters),W=i([l],e=>{var t;return!e.isLoading&&((t=e.characters)==null?void 0:t.length)>0}),B=i([l,(e,t)=>t],(e,t)=>{if(t)return e.characters.find(r=>r.id===Number(t))}),G=i([l],e=>e.isLoading),H=i([l],e=>e.currentPage),J=i([l],e=>e.currentName),Q=i([l],e=>e.lastPage),V=i([l],e=>e.currentPage===1),X=i([l],e=>e.currentPage===e.lastPage),Y=i([l],e=>e.fetchError),N="/ts-react-redux-fetch/assets/character-img-placeholder-d94c2d4f.png",Z=({width:e="100%",height:t="100%",alt:r,src:n})=>{const[c,s]=w.useState(!1);return m.jsxs(m.Fragment,{children:[m.jsx("img",{onLoad:()=>s(!0),src:n,alt:r,style:{display:c?"block":"none",width:e,height:t},crossOrigin:"anonymous"}),m.jsx("img",{srcSet:N,alt:r,style:{display:c?"none":"block",width:e,height:t}})]})},ee=({label:e,value:t})=>m.jsxs("p",{children:[e,": ",m.jsx("strong",{children:t})]}),R="_status_qylmx_1",$="_Dead_qylmx_9",M="_Alive_qylmx_12",T="_unknown_qylmx_15",q={status:R,Dead:$,Alive:M,unknown:T},te=({status:e,className:t=""})=>m.jsx("span",{className:`${q.status} ${q[e]} ${t}`,children:e});export{Z as C,ee as D,te as S,Y as a,K as b,H as c,Q as d,V as e,X as f,J as g,W as h,B as i,G as s};
