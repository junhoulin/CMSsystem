import{a2 as B,f as R,o as f,l as N,d as O,h as p,a3 as _,a4 as A,O as E,z as H,A as y,y as V,D as j,a5 as b}from"./index-CAuj7ceO.js";let v=!1;function L(){if(B&&window.CSS&&!v&&(v=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function T(e){const{heightSmall:o,heightMedium:i,heightLarge:t,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:o,heightMedium:i,heightLarge:t}}const $={common:R,self:T},D=f([N("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),F=Object.assign(Object.assign({},y.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),K=O({name:"Skeleton",inheritAttrs:!1,props:F,setup(e){L();const{mergedClsPrefixRef:o}=H(e),i=y("Skeleton","-skeleton",D,$,e,o);return{mergedClsPrefix:o,style:V(()=>{var t,r;const a=i.value,{common:{cubicBezierEaseInOut:k}}=a,g=a.self,{color:S,colorEnd:w,borderRadius:x}=g;let s;const{circle:l,sharp:z,round:C,width:n,height:c,size:h,text:m,animated:P}=e;h!==void 0&&(s=g[j("height",h)]);const d=l?(t=n??c)!==null&&t!==void 0?t:s:n,u=(r=l?n??c:c)!==null&&r!==void 0?r:s;return{display:m?"inline-block":"",verticalAlign:m?"-0.125em":"",borderRadius:l?"50%":C?"4096px":z?"":x,width:typeof d=="number"?b(d):d,height:typeof u=="number"?b(u):u,animation:P?"":"none","--n-bezier":k,"--n-color-start":S,"--n-color-end":w}})}},render(){const{repeat:e,style:o,mergedClsPrefix:i,$attrs:t}=this,r=p("div",_({class:`${i}-skeleton`,style:o},t));return e>1?p(E,null,A(e,null).map(a=>[r,`
`])):r}});export{K as N};
