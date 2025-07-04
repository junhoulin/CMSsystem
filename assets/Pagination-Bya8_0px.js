import{$ as pt,bP as dt,ap as Me,aM as jt,d as re,h as o,aX as je,q as gt,bQ as bt,u as ut,aw as Et,N as Ie,l as k,n as D,m as K,o as ie,p as Qe,aC as Lt,aq as xt,bn,S as mn,aA as Dt,z as Ee,bf as mt,A as me,x as X,bR as wn,v as P,y as z,bS as xn,E as yn,D as Z,b2 as We,F as ht,aF as qe,aH as Pe,ao as Ke,bT as Cn,bU as Fn,a0 as ct,bV as yt,O as vt,bw as Vt,r as Ct,bW as Sn,aI as Ze,k as kn,bp as Mn,bX as Ut,bN as Wt,H as Q,aY as Ht,bx as Pn,bY as On,bz as Ft,at as Rn,au as zn,av as Bn,aD as Ye,ax as Tn,b3 as In,ay as St,bZ as _n,w as Xe,b0 as $n,C as Nn,G as An,az as jn,aG as En,b_ as Ln}from"./index-BWrnT6ZK.js";import{V as Dn,a as Vn,b as Un,u as Kt,N as kt}from"./Input-BzNUB6S4.js";function qt(e,n){n&&(pt(()=>{const{value:a}=e;a&&dt.registerHandler(a,n)}),Me(e,(a,r)=>{r&&dt.unregisterHandler(r)},{deep:!1}),jt(()=>{const{value:a}=e;a&&dt.unregisterHandler(a)}))}function Mt(e){switch(e){case"tiny":return"mini";case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}throw new Error(`${e} has no smaller size.`)}function He(e){const n=e.filter(a=>a!==void 0);if(n.length!==0)return n.length===1?n[0]:a=>{e.forEach(r=>{r&&r(a)})}}const Pt=re({name:"Backward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",fill:"currentColor"}))}}),Wn=re({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ot=re({name:"FastBackward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"}))))}}),Rt=re({name:"FastForward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"}))))}}),zt=re({name:"Forward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",fill:"currentColor"}))}}),Bt=re({name:"More",render(){return o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}}),Hn=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>o("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Tt=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:a,nodePropsRef:r}=gt(bt);return{labelField:a,nodeProps:r,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:a,nodeProps:r,tmNode:{rawNode:u}}=this,h=r==null?void 0:r(u),f=n?n(u,!1):je(u[this.labelField],u,!1),l=o("div",Object.assign({},h,{class:[`${e}-base-select-group-header`,h==null?void 0:h.class]}),f);return u.render?u.render({node:l,option:u}):a?a({node:l,option:u,selected:!1}):l}});function Kn(e,n){return o(Et,{name:"fade-in-scale-up-transition"},{default:()=>e?o(Ie,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>o(Wn)}):null})}const It=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:a,multipleRef:r,valueSetRef:u,renderLabelRef:h,renderOptionRef:f,labelFieldRef:l,valueFieldRef:C,showCheckmarkRef:g,nodePropsRef:x,handleOptionClick:F,handleOptionMouseEnter:p}=gt(bt),w=ut(()=>{const{value:_}=a;return _?e.tmNode.key===_.key:!1});function m(_){const{tmNode:O}=e;O.disabled||F(_,O)}function y(_){const{tmNode:O}=e;O.disabled||p(_,O)}function B(_){const{tmNode:O}=e,{value:E}=w;O.disabled||E||p(_,O)}return{multiple:r,isGrouped:ut(()=>{const{tmNode:_}=e,{parent:O}=_;return O&&O.rawNode.type==="group"}),showCheckmark:g,nodeProps:x,isPending:w,isSelected:ut(()=>{const{value:_}=n,{value:O}=r;if(_===null)return!1;const E=e.tmNode.rawNode[C.value];if(O){const{value:V}=u;return V.has(E)}else return _===E}),labelField:l,renderLabel:h,renderOption:f,handleMouseMove:B,handleMouseEnter:y,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:a,isPending:r,isGrouped:u,showCheckmark:h,nodeProps:f,renderOption:l,renderLabel:C,handleClick:g,handleMouseEnter:x,handleMouseMove:F}=this,p=Kn(a,e),w=C?[C(n,a),h&&p]:[je(n[this.labelField],n,a),h&&p],m=f==null?void 0:f(n),y=o("div",Object.assign({},m,{class:[`${e}-base-select-option`,n.class,m==null?void 0:m.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:a,[`${e}-base-select-option--grouped`]:u,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:h}],style:[(m==null?void 0:m.style)||"",n.style||""],onClick:He([g,m==null?void 0:m.onClick]),onMouseenter:He([x,m==null?void 0:m.onMouseenter]),onMousemove:He([F,m==null?void 0:m.onMousemove])}),o("div",{class:`${e}-base-select-option__content`},w));return n.render?n.render({node:y,option:n,selected:a}):l?l({node:y,option:n,selected:a}):y}}),qn=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[D("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),D("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),D("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),D("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),D("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[K("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ie("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ie("&:active",`
 color: var(--n-option-text-color-pressed);
 `),K("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),K("pending",[ie("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),K("selected",`
 color: var(--n-option-text-color-active);
 `,[ie("&::before",`
 background-color: var(--n-option-color-active);
 `),K("pending",[ie("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),K("disabled",`
 cursor: not-allowed;
 `,[Qe("selected",`
 color: var(--n-option-text-color-disabled);
 `),K("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),D("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Lt({enterScale:"0.5"})])])]),Gt=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:a}=Ee(e),r=mt("InternalSelectMenu",a,n),u=me("InternalSelectMenu","-internal-select-menu",qn,wn,e,X(e,"clsPrefix")),h=P(null),f=P(null),l=P(null),C=z(()=>e.treeMate.getFlattenedNodes()),g=z(()=>xn(C.value)),x=P(null);function F(){const{treeMate:s}=e;let v=null;const{value:j}=e;j===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((j||[])[(j||[]).length-1]):v=s.getNode(j),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),ae(v||null)}function p(){const{value:s}=x;s&&!e.treeMate.getNode(s.key)&&(x.value=null)}let w;Me(()=>e.show,s=>{s?w=Me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?F():p(),Ke(ne)):p()},{immediate:!0}):w==null||w()},{immediate:!0}),jt(()=>{w==null||w()});const m=z(()=>yn(u.value.self[Z("optionHeight",e.size)])),y=z(()=>We(u.value.self[Z("padding",e.size)])),B=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),_=z(()=>{const s=C.value;return s&&s.length===0});function O(s){const{onToggle:v}=e;v&&v(s)}function E(s){const{onScroll:v}=e;v&&v(s)}function V(s){var v;(v=l.value)===null||v===void 0||v.sync(),E(s)}function L(){var s;(s=l.value)===null||s===void 0||s.sync()}function te(){const{value:s}=x;return s||null}function q(s,v){v.disabled||ae(v,!1)}function pe(s,v){v.disabled||O(v)}function ge(s){var v;Pe(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function le(s){var v;Pe(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function se(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function de(){const{value:s}=x;s&&ae(s.getNext({loop:!0}),!0)}function A(){const{value:s}=x;s&&ae(s.getPrev({loop:!0}),!0)}function ae(s,v=!1){x.value=s,v&&ne()}function ne(){var s,v;const j=x.value;if(!j)return;const W=g.value(j.key);W!==null&&(e.virtualScroll?(s=f.value)===null||s===void 0||s.scrollTo({index:W}):(v=l.value)===null||v===void 0||v.scrollTo({index:W,elSize:m.value}))}function G(s){var v,j;!((v=h.value)===null||v===void 0)&&v.contains(s.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,s))}function be(s){var v,j;!((v=h.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,s)}ht(bt,{handleOptionMouseEnter:q,handleOptionClick:pe,valueSetRef:B,pendingTmNodeRef:x,nodePropsRef:X(e,"nodeProps"),showCheckmarkRef:X(e,"showCheckmark"),multipleRef:X(e,"multiple"),valueRef:X(e,"value"),renderLabelRef:X(e,"renderLabel"),renderOptionRef:X(e,"renderOption"),labelFieldRef:X(e,"labelField"),valueFieldRef:X(e,"valueField")}),ht(Cn,h),pt(()=>{const{value:s}=l;s&&s.sync()});const Y=z(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:j,borderRadius:W,color:he,groupHeaderTextColor:ce,actionDividerColor:U,optionTextColorPressed:i,optionTextColor:M,optionTextColorDisabled:oe,optionTextColorActive:fe,optionOpacityDisabled:ye,optionCheckColor:Oe,actionTextColor:Re,optionColorPending:Ce,optionColorActive:Fe,loadingColor:ze,loadingSize:Be,optionColorActivePending:Te,[Z("optionFontSize",s)]:ke,[Z("optionHeight",s)]:Se,[Z("optionPadding",s)]:ee}}=u.value;return{"--n-height":j,"--n-action-divider-color":U,"--n-action-text-color":Re,"--n-bezier":v,"--n-border-radius":W,"--n-color":he,"--n-option-font-size":ke,"--n-group-header-text-color":ce,"--n-option-check-color":Oe,"--n-option-color-pending":Ce,"--n-option-color-active":Fe,"--n-option-color-active-pending":Te,"--n-option-height":Se,"--n-option-opacity-disabled":ye,"--n-option-text-color":M,"--n-option-text-color-active":fe,"--n-option-text-color-disabled":oe,"--n-option-text-color-pressed":i,"--n-option-padding":ee,"--n-option-padding-left":We(ee,"left"),"--n-option-padding-right":We(ee,"right"),"--n-loading-color":ze,"--n-loading-size":Be}}),{inlineThemeDisabled:we}=e,N=we?qe("internal-select-menu",z(()=>e.size[0]),Y,e):void 0,ue={selfRef:h,next:de,prev:A,getPendingTmNode:te};return qt(h,e.onResize),Object.assign({mergedTheme:u,mergedClsPrefix:n,rtlEnabled:r,virtualListRef:f,scrollbarRef:l,itemSize:m,padding:y,flattenedNodes:C,empty:_,virtualListContainer(){const{value:s}=f;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=f;return s==null?void 0:s.itemsElRef},doScroll:E,handleFocusin:G,handleFocusout:be,handleKeyUp:ge,handleKeyDown:le,handleMouseDown:se,handleVirtualListResize:L,handleVirtualListScroll:V,cssVars:we?void 0:Y,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},ue)},render(){const{$slots:e,virtualScroll:n,clsPrefix:a,mergedTheme:r,themeClass:u,onRender:h}=this;return h==null||h(),o("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${a}-base-select-menu`,this.rtlEnabled&&`${a}-base-select-menu--rtl`,u,this.multiple&&`${a}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},xt(e.header,f=>f&&o("div",{class:`${a}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?o("div",{class:`${a}-base-select-menu__loading`},o(bn,{clsPrefix:a,strokeWidth:20})):this.empty?o("div",{class:`${a}-base-select-menu__empty`,"data-empty":!0},Dt(e.empty,()=>[o(Vn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):o(mn,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?o(Dn,{ref:"virtualListRef",class:`${a}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?o(Tt,{key:f.key,clsPrefix:a,tmNode:f}):f.ignored?null:o(It,{clsPrefix:a,key:f.key,tmNode:f})}):o("div",{class:`${a}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?o(Tt,{key:f.key,clsPrefix:a,tmNode:f}):o(It,{clsPrefix:a,key:f.key,tmNode:f})))}),xt(e.action,f=>f&&[o("div",{class:`${a}-base-select-menu__action`,"data-action":!0,key:"action"},f),o(Hn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Gn=ie([k("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[k("base-loading",`
 color: var(--n-loading-color);
 `),k("base-selection-tags","min-height: var(--n-height);"),D("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),D("state-border",`
 z-index: 1;
 border-color: #0000;
 `),k("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[D("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),k("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[D("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),k("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[D("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),k("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),k("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[k("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[D("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),D("render-label",`
 color: var(--n-text-color);
 `)]),Qe("disabled",[ie("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),K("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),K("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),k("base-selection-label","background-color: var(--n-color-active);"),k("base-selection-tags","background-color: var(--n-color-active);")])]),K("disabled","cursor: not-allowed;",[D("arrow",`
 color: var(--n-arrow-color-disabled);
 `),k("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[k("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),D("render-label",`
 color: var(--n-text-color-disabled);
 `)]),k("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),k("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),k("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[D("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),D("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>K(`${e}-status`,[D("state-border",`border: var(--n-border-${e});`),Qe("disabled",[ie("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),K("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),k("base-selection-label",`background-color: var(--n-color-active-${e});`),k("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),K("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),k("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),k("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ie("&:last-child","padding-right: 0;"),k("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[D("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Jn=re({name:"InternalSelection",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:a}=Ee(e),r=mt("InternalSelection",a,n),u=P(null),h=P(null),f=P(null),l=P(null),C=P(null),g=P(null),x=P(null),F=P(null),p=P(null),w=P(null),m=P(!1),y=P(!1),B=P(!1),_=me("InternalSelection","-internal-selection",Gn,Sn,e,X(e,"clsPrefix")),O=z(()=>e.clearable&&!e.disabled&&(B.value||e.active)),E=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):je(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),V=z(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),L=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function te(){var d;const{value:b}=u;if(b){const{value:H}=h;H&&(H.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=p.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:d}=w;d&&(d.style.display="none")}function pe(){const{value:d}=w;d&&(d.style.display="inline-block")}Me(X(e,"active"),d=>{d||q()}),Me(X(e,"pattern"),()=>{e.multiple&&Ke(te)});function ge(d){const{onFocus:b}=e;b&&b(d)}function le(d){const{onBlur:b}=e;b&&b(d)}function se(d){const{onDeleteOption:b}=e;b&&b(d)}function de(d){const{onClear:b}=e;b&&b(d)}function A(d){const{onPatternInput:b}=e;b&&b(d)}function ae(d){var b;(!d.relatedTarget||!(!((b=f.value)===null||b===void 0)&&b.contains(d.relatedTarget)))&&ge(d)}function ne(d){var b;!((b=f.value)===null||b===void 0)&&b.contains(d.relatedTarget)||le(d)}function G(d){de(d)}function be(){B.value=!0}function Y(){B.value=!1}function we(d){!e.active||!e.filterable||d.target!==h.value&&d.preventDefault()}function N(d){se(d)}const ue=P(!1);function s(d){if(d.key==="Backspace"&&!ue.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&N(b[b.length-1])}}let v=null;function j(d){const{value:b}=u;if(b){const H=d.target.value;b.textContent=H,te()}e.ignoreComposition&&ue.value?v=d:A(d)}function W(){ue.value=!0}function he(){ue.value=!1,e.ignoreComposition&&A(v),v=null}function ce(d){var b;y.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,d)}function U(d){var b;y.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,d)}function i(){var d,b;if(e.filterable)y.value=!1,(d=g.value)===null||d===void 0||d.blur(),(b=h.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:H}=l;H==null||H.blur()}else{const{value:H}=C;H==null||H.blur()}}function M(){var d,b,H;e.filterable?(y.value=!1,(d=g.value)===null||d===void 0||d.focus()):e.multiple?(b=l.value)===null||b===void 0||b.focus():(H=C.value)===null||H===void 0||H.focus()}function oe(){const{value:d}=h;d&&(pe(),d.focus())}function fe(){const{value:d}=h;d&&d.blur()}function ye(d){const{value:b}=x;b&&b.setTextContent(`+${d}`)}function Oe(){const{value:d}=F;return d}function Re(){return h.value}let Ce=null;function Fe(){Ce!==null&&window.clearTimeout(Ce)}function ze(){e.active||(Fe(),Ce=window.setTimeout(()=>{L.value&&(m.value=!0)},100))}function Be(){Fe()}function Te(d){d||(Fe(),m.value=!1)}Me(L,d=>{d||(m.value=!1)}),pt(()=>{Ze(()=>{const d=g.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=y.value?-1:0)})}),qt(f,e.onResize);const{inlineThemeDisabled:ke}=e,Se=z(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:b},self:{fontWeight:H,borderRadius:Le,color:De,placeholderColor:_e,textColor:$e,paddingSingle:Ne,paddingMultiple:Ve,caretColor:Ue,colorDisabled:Ae,textColorDisabled:xe,placeholderColorDisabled:t,colorActive:c,boxShadowFocus:S,boxShadowActive:$,boxShadowHover:T,border:R,borderFocus:I,borderHover:J,borderActive:ve,arrowColor:tt,arrowColorDisabled:nt,loadingColor:ot,colorActiveWarning:at,boxShadowFocusWarning:it,boxShadowActiveWarning:rt,boxShadowHoverWarning:lt,borderWarning:st,borderFocusWarning:Yt,borderHoverWarning:Xt,borderActiveWarning:en,colorActiveError:tn,boxShadowFocusError:nn,boxShadowActiveError:on,boxShadowHoverError:an,borderError:rn,borderFocusError:ln,borderHoverError:sn,borderActiveError:dn,clearColor:un,clearColorHover:cn,clearColorPressed:fn,clearSize:hn,arrowSize:vn,[Z("height",d)]:pn,[Z("fontSize",d)]:gn}}=_.value,Ge=We(Ne),Je=We(Ve);return{"--n-bezier":b,"--n-border":R,"--n-border-active":ve,"--n-border-focus":I,"--n-border-hover":J,"--n-border-radius":Le,"--n-box-shadow-active":$,"--n-box-shadow-focus":S,"--n-box-shadow-hover":T,"--n-caret-color":Ue,"--n-color":De,"--n-color-active":c,"--n-color-disabled":Ae,"--n-font-size":gn,"--n-height":pn,"--n-padding-single-top":Ge.top,"--n-padding-multiple-top":Je.top,"--n-padding-single-right":Ge.right,"--n-padding-multiple-right":Je.right,"--n-padding-single-left":Ge.left,"--n-padding-multiple-left":Je.left,"--n-padding-single-bottom":Ge.bottom,"--n-padding-multiple-bottom":Je.bottom,"--n-placeholder-color":_e,"--n-placeholder-color-disabled":t,"--n-text-color":$e,"--n-text-color-disabled":xe,"--n-arrow-color":tt,"--n-arrow-color-disabled":nt,"--n-loading-color":ot,"--n-color-active-warning":at,"--n-box-shadow-focus-warning":it,"--n-box-shadow-active-warning":rt,"--n-box-shadow-hover-warning":lt,"--n-border-warning":st,"--n-border-focus-warning":Yt,"--n-border-hover-warning":Xt,"--n-border-active-warning":en,"--n-color-active-error":tn,"--n-box-shadow-focus-error":nn,"--n-box-shadow-active-error":on,"--n-box-shadow-hover-error":an,"--n-border-error":rn,"--n-border-focus-error":ln,"--n-border-hover-error":sn,"--n-border-active-error":dn,"--n-clear-size":hn,"--n-clear-color":un,"--n-clear-color-hover":cn,"--n-clear-color-pressed":fn,"--n-arrow-size":vn,"--n-font-weight":H}}),ee=ke?qe("internal-selection",z(()=>e.size[0]),Se,e):void 0;return{mergedTheme:_,mergedClearable:O,mergedClsPrefix:n,rtlEnabled:r,patternInputFocused:y,filterablePlaceholder:E,label:V,selected:L,showTagsPanel:m,isComposing:ue,counterRef:x,counterWrapperRef:F,patternInputMirrorRef:u,patternInputRef:h,selfRef:f,multipleElRef:l,singleElRef:C,patternInputWrapperRef:g,overflowRef:p,inputTagElRef:w,handleMouseDown:we,handleFocusin:ae,handleClear:G,handleMouseEnter:be,handleMouseLeave:Y,handleDeleteOption:N,handlePatternKeyDown:s,handlePatternInputInput:j,handlePatternInputBlur:U,handlePatternInputFocus:ce,handleMouseEnterCounter:ze,handleMouseLeaveCounter:Be,handleFocusout:ne,handleCompositionEnd:he,handleCompositionStart:W,onPopoverUpdateShow:Te,focus:M,focusInput:oe,blur:i,blurInput:fe,updateCounter:ye,getCounter:Oe,getTail:Re,renderLabel:e.renderLabel,cssVars:ke?void 0:Se,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:n,size:a,disabled:r,filterable:u,maxTagCount:h,bordered:f,clsPrefix:l,ellipsisTagPopoverProps:C,onRender:g,renderTag:x,renderLabel:F}=this;g==null||g();const p=h==="responsive",w=typeof h=="number",m=p||w,y=o(Fn,null,{default:()=>o(Un,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var _,O;return(O=(_=this.$slots).arrow)===null||O===void 0?void 0:O.call(_)}})});let B;if(n){const{labelField:_}=this,O=A=>o("div",{class:`${l}-base-selection-tag-wrapper`,key:A.value},x?x({option:A,handleClose:()=>{this.handleDeleteOption(A)}}):o(ct,{size:a,closable:!A.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(A)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>F?F(A,!0):je(A[_],A,!0)})),E=()=>(w?this.selectedOptions.slice(0,h):this.selectedOptions).map(O),V=u?o("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,L=p?()=>o("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},o(ct,{size:a,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let te;if(w){const A=this.selectedOptions.length-h;A>0&&(te=o("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},o(ct,{size:a,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${A}`})))}const q=p?u?o(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:E,counter:L,tail:()=>V}):o(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:E,counter:L}):w&&te?E().concat(te):E(),pe=m?()=>o("div",{class:`${l}-base-selection-popover`},p?E():this.selectedOptions.map(O)):void 0,ge=m?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},C):null,se=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?o("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},o("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,de=u?o("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},q,p?null:V,y):o("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:r?void 0:0},q,y);B=o(vt,null,m?o(Vt,Object.assign({},ge,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>de,default:pe}):de,se)}else if(u){const _=this.pattern||this.isComposing,O=this.active?!_:!this.selected,E=this.active?!1:this.selected;B=o("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:Ct(this.label)},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),E?o("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},o("div",{class:`${l}-base-selection-overlay__wrapper`},x?x({option:this.selectedOption,handleClose:()=>{}}):F?F(this.selectedOption,!0):je(this.label,this.selectedOption,!0))):null,O?o("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,y)}else B=o("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?o("div",{class:`${l}-base-selection-input`,title:Ct(this.label),key:"input"},o("div",{class:`${l}-base-selection-input__content`},x?x({option:this.selectedOption,handleClose:()=>{}}):F?F(this.selectedOption,!0):je(this.label,this.selectedOption,!0))):o("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),y);return o("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},B,f?o("div",{class:`${l}-base-selection__border`}):null,f?o("div",{class:`${l}-base-selection__state-border`}):null)}});function et(e){return e.type==="group"}function Jt(e){return e.type==="ignored"}function ft(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Zt(e,n){return{getIsGroup:et,getIgnored:Jt,getKey(r){return et(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[n]}}}function Zn(e,n,a,r){if(!n)return e;function u(h){if(!Array.isArray(h))return[];const f=[];for(const l of h)if(et(l)){const C=u(l[r]);C.length&&f.push(Object.assign({},l,{[r]:C}))}else{if(Jt(l))continue;n(a,l)&&f.push(l)}return f}return u(e)}function Qn(e,n,a){const r=new Map;return e.forEach(u=>{et(u)?u[a].forEach(h=>{r.set(h[n],h)}):r.set(u[n],u)}),r}const Qt=kn("n-popselect"),Yn=k("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),wt={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},_t=Mn(wt),Xn=re({name:"PopselectPanel",props:wt,setup(e){const n=gt(Qt),{mergedClsPrefixRef:a,inlineThemeDisabled:r}=Ee(e),u=me("Popselect","-pop-select",Yn,Ut,n.props,a),h=z(()=>Wt(e.options,Zt("value","children")));function f(p,w){const{onUpdateValue:m,"onUpdate:value":y,onChange:B}=e;m&&Q(m,p,w),y&&Q(y,p,w),B&&Q(B,p,w)}function l(p){g(p.key)}function C(p){!Pe(p,"action")&&!Pe(p,"empty")&&!Pe(p,"header")&&p.preventDefault()}function g(p){const{value:{getNode:w}}=h;if(e.multiple)if(Array.isArray(e.value)){const m=[],y=[];let B=!0;e.value.forEach(_=>{if(_===p){B=!1;return}const O=w(_);O&&(m.push(O.key),y.push(O.rawNode))}),B&&(m.push(p),y.push(w(p).rawNode)),f(m,y)}else{const m=w(p);m&&f([p],[m.rawNode])}else if(e.value===p&&e.cancelable)f(null,null);else{const m=w(p);m&&f(p,m.rawNode);const{"onUpdate:show":y,onUpdateShow:B}=n.props;y&&Q(y,!1),B&&Q(B,!1),n.setShow(!1)}Ke(()=>{n.syncPosition()})}Me(X(e,"options"),()=>{Ke(()=>{n.syncPosition()})});const x=z(()=>{const{self:{menuBoxShadow:p}}=u.value;return{"--n-menu-box-shadow":p}}),F=r?qe("select",void 0,x,n.props):void 0;return{mergedTheme:n.mergedThemeRef,mergedClsPrefix:a,treeMate:h,handleToggle:l,handleMenuMousedown:C,cssVars:r?void 0:x,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),o(Gt,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{header:()=>{var n,a;return((a=(n=this.$slots).header)===null||a===void 0?void 0:a.call(n))||[]},action:()=>{var n,a;return((a=(n=this.$slots).action)===null||a===void 0?void 0:a.call(n))||[]},empty:()=>{var n,a;return((a=(n=this.$slots).empty)===null||a===void 0?void 0:a.call(n))||[]}})}}),eo=Object.assign(Object.assign(Object.assign(Object.assign({},me.props),Ht(Ft,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},Ft.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),wt),to=re({name:"Popselect",props:eo,slots:Object,inheritAttrs:!1,__popover__:!0,setup(e){const{mergedClsPrefixRef:n}=Ee(e),a=me("Popselect","-popselect",void 0,Ut,e,n),r=P(null);function u(){var l;(l=r.value)===null||l===void 0||l.syncPosition()}function h(l){var C;(C=r.value)===null||C===void 0||C.setShow(l)}return ht(Qt,{props:e,mergedThemeRef:a,syncPosition:u,setShow:h}),Object.assign(Object.assign({},{syncPosition:u,setShow:h}),{popoverInstRef:r,mergedTheme:a})},render(){const{mergedTheme:e}=this,n={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(a,r,u,h,f)=>{const{$attrs:l}=this;return o(Xn,Object.assign({},l,{class:[l.class,a],style:[l.style,...u]},Pn(this.$props,_t),{ref:On(r),onMouseenter:He([h,l.onMouseenter]),onMouseleave:He([f,l.onMouseleave])}),{header:()=>{var C,g;return(g=(C=this.$slots).header)===null||g===void 0?void 0:g.call(C)},action:()=>{var C,g;return(g=(C=this.$slots).action)===null||g===void 0?void 0:g.call(C)},empty:()=>{var C,g;return(g=(C=this.$slots).empty)===null||g===void 0?void 0:g.call(C)}})}};return o(Vt,Object.assign({},Ht(this.$props,_t),n,{internalDeactivateImmediately:!0}),{trigger:()=>{var a,r;return(r=(a=this.$slots).default)===null||r===void 0?void 0:r.call(a)}})}}),no=ie([k("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),k("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Lt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),oo=Object.assign(Object.assign({},me.props),{to:Ye.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ao=re({name:"Select",props:oo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:a,namespaceRef:r,inlineThemeDisabled:u}=Ee(e),h=me("Select","-select",no,_n,e,n),f=P(e.defaultValue),l=X(e,"value"),C=Xe(l,f),g=P(!1),x=P(""),F=$n(e,["items","options"]),p=P([]),w=P([]),m=z(()=>w.value.concat(p.value).concat(F.value)),y=z(()=>{const{filter:t}=e;if(t)return t;const{labelField:c,valueField:S}=e;return($,T)=>{if(!T)return!1;const R=T[c];if(typeof R=="string")return ft($,R);const I=T[S];return typeof I=="string"?ft($,I):typeof I=="number"?ft($,String(I)):!1}}),B=z(()=>{if(e.remote)return F.value;{const{value:t}=m,{value:c}=x;return!c.length||!e.filterable?t:Zn(t,y.value,c,e.childrenField)}}),_=z(()=>{const{valueField:t,childrenField:c}=e,S=Zt(t,c);return Wt(B.value,S)}),O=z(()=>Qn(m.value,e.valueField,e.childrenField)),E=P(!1),V=Xe(X(e,"show"),E),L=P(null),te=P(null),q=P(null),{localeRef:pe}=Kt("Select"),ge=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:pe.value.placeholder}),le=[],se=P(new Map),de=z(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:c,valueField:S}=e;return $=>({[c]:String($),[S]:$})}return t===!1?!1:c=>Object.assign(t(c),{value:c})});function A(t){const c=e.remote,{value:S}=se,{value:$}=O,{value:T}=de,R=[];return t.forEach(I=>{if($.has(I))R.push($.get(I));else if(c&&S.has(I))R.push(S.get(I));else if(T){const J=T(I);J&&R.push(J)}}),R}const ae=z(()=>{if(e.multiple){const{value:t}=C;return Array.isArray(t)?A(t):[]}return null}),ne=z(()=>{const{value:t}=C;return!e.multiple&&!Array.isArray(t)?t===null?null:A([t])[0]||null:null}),G=Nn(e),{mergedSizeRef:be,mergedDisabledRef:Y,mergedStatusRef:we}=G;function N(t,c){const{onChange:S,"onUpdate:value":$,onUpdateValue:T}=e,{nTriggerFormChange:R,nTriggerFormInput:I}=G;S&&Q(S,t,c),T&&Q(T,t,c),$&&Q($,t,c),f.value=t,R(),I()}function ue(t){const{onBlur:c}=e,{nTriggerFormBlur:S}=G;c&&Q(c,t),S()}function s(){const{onClear:t}=e;t&&Q(t)}function v(t){const{onFocus:c,showOnFocus:S}=e,{nTriggerFormFocus:$}=G;c&&Q(c,t),$(),S&&U()}function j(t){const{onSearch:c}=e;c&&Q(c,t)}function W(t){const{onScroll:c}=e;c&&Q(c,t)}function he(){var t;const{remote:c,multiple:S}=e;if(c){const{value:$}=se;if(S){const{valueField:T}=e;(t=ae.value)===null||t===void 0||t.forEach(R=>{$.set(R[T],R)})}else{const T=ne.value;T&&$.set(T[e.valueField],T)}}}function ce(t){const{onUpdateShow:c,"onUpdate:show":S}=e;c&&Q(c,t),S&&Q(S,t),E.value=t}function U(){Y.value||(ce(!0),E.value=!0,e.filterable&&Ne())}function i(){ce(!1)}function M(){x.value="",w.value=le}const oe=P(!1);function fe(){e.filterable&&(oe.value=!0)}function ye(){e.filterable&&(oe.value=!1,V.value||M())}function Oe(){Y.value||(V.value?e.filterable?Ne():i():U())}function Re(t){var c,S;!((S=(c=q.value)===null||c===void 0?void 0:c.selfRef)===null||S===void 0)&&S.contains(t.relatedTarget)||(g.value=!1,ue(t),i())}function Ce(t){v(t),g.value=!0}function Fe(){g.value=!0}function ze(t){var c;!((c=L.value)===null||c===void 0)&&c.$el.contains(t.relatedTarget)||(g.value=!1,ue(t),i())}function Be(){var t;(t=L.value)===null||t===void 0||t.focus(),i()}function Te(t){var c;V.value&&(!((c=L.value)===null||c===void 0)&&c.$el.contains(jn(t))||i())}function ke(t){if(!Array.isArray(t))return[];if(de.value)return Array.from(t);{const{remote:c}=e,{value:S}=O;if(c){const{value:$}=se;return t.filter(T=>S.has(T)||$.has(T))}else return t.filter($=>S.has($))}}function Se(t){ee(t.rawNode)}function ee(t){if(Y.value)return;const{tag:c,remote:S,clearFilterAfterSelect:$,valueField:T}=e;if(c&&!S){const{value:R}=w,I=R[0]||null;if(I){const J=p.value;J.length?J.push(I):p.value=[I],w.value=le}}if(S&&se.value.set(t[T],t),e.multiple){const R=ke(C.value),I=R.findIndex(J=>J===t[T]);if(~I){if(R.splice(I,1),c&&!S){const J=d(t[T]);~J&&(p.value.splice(J,1),$&&(x.value=""))}}else R.push(t[T]),$&&(x.value="");N(R,A(R))}else{if(c&&!S){const R=d(t[T]);~R?p.value=[p.value[R]]:p.value=le}$e(),i(),N(t[T],t)}}function d(t){return p.value.findIndex(S=>S[e.valueField]===t)}function b(t){V.value||U();const{value:c}=t.target;x.value=c;const{tag:S,remote:$}=e;if(j(c),S&&!$){if(!c){w.value=le;return}const{onCreate:T}=e,R=T?T(c):{[e.labelField]:c,[e.valueField]:c},{valueField:I,labelField:J}=e;F.value.some(ve=>ve[I]===R[I]||ve[J]===R[J])||p.value.some(ve=>ve[I]===R[I]||ve[J]===R[J])?w.value=le:w.value=[R]}}function H(t){t.stopPropagation();const{multiple:c}=e;!c&&e.filterable&&i(),s(),c?N([],[]):N(null,null)}function Le(t){!Pe(t,"action")&&!Pe(t,"empty")&&!Pe(t,"header")&&t.preventDefault()}function De(t){W(t)}function _e(t){var c,S,$,T,R;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((c=L.value)===null||c===void 0)&&c.isComposing)){if(V.value){const I=(S=q.value)===null||S===void 0?void 0:S.getPendingTmNode();I?Se(I):e.filterable||(i(),$e())}else if(U(),e.tag&&oe.value){const I=w.value[0];if(I){const J=I[e.valueField],{value:ve}=C;e.multiple&&Array.isArray(ve)&&ve.includes(J)||ee(I)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;V.value&&(($=q.value)===null||$===void 0||$.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;V.value?(T=q.value)===null||T===void 0||T.next():U();break;case"Escape":V.value&&(En(t),i()),(R=L.value)===null||R===void 0||R.focus();break}}function $e(){var t;(t=L.value)===null||t===void 0||t.focus()}function Ne(){var t;(t=L.value)===null||t===void 0||t.focusInput()}function Ve(){var t;V.value&&((t=te.value)===null||t===void 0||t.syncPosition())}he(),Me(X(e,"options"),he);const Ue={focus:()=>{var t;(t=L.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=L.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=L.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=L.value)===null||t===void 0||t.blurInput()}},Ae=z(()=>{const{self:{menuBoxShadow:t}}=h.value;return{"--n-menu-box-shadow":t}}),xe=u?qe("select",void 0,Ae,e):void 0;return Object.assign(Object.assign({},Ue),{mergedStatus:we,mergedClsPrefix:n,mergedBordered:a,namespace:r,treeMate:_,isMounted:An(),triggerRef:L,menuRef:q,pattern:x,uncontrolledShow:E,mergedShow:V,adjustedTo:Ye(e),uncontrolledValue:f,mergedValue:C,followerRef:te,localizedPlaceholder:ge,selectedOption:ne,selectedOptions:ae,mergedSize:be,mergedDisabled:Y,focused:g,activeWithoutMenuOpen:oe,inlineThemeDisabled:u,onTriggerInputFocus:fe,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Ve,handleMenuFocus:Fe,handleMenuBlur:ze,handleMenuTabOut:Be,handleTriggerClick:Oe,handleToggle:Se,handleDeleteOption:ee,handlePatternInput:b,handleClear:H,handleTriggerBlur:Re,handleTriggerFocus:Ce,handleKeydown:_e,handleMenuAfterLeave:M,handleMenuClickOutside:Te,handleMenuScroll:De,handleMenuKeydown:_e,handleMenuMousedown:Le,mergedTheme:h,cssVars:u?void 0:Ae,themeClass:xe==null?void 0:xe.themeClass,onRender:xe==null?void 0:xe.onRender})},render(){return o("div",{class:`${this.mergedClsPrefix}-select`},o(Rn,null,{default:()=>[o(zn,null,{default:()=>o(Jn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),o(Bn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ye.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>o(Et,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,a;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Tn(o(Gt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(a=this.menuProps)===null||a===void 0?void 0:a.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,u;return[(u=(r=this.$slots).empty)===null||u===void 0?void 0:u.call(r)]},header:()=>{var r,u;return[(u=(r=this.$slots).header)===null||u===void 0?void 0:u.call(r)]},action:()=>{var r,u;return[(u=(r=this.$slots).action)===null||u===void 0?void 0:u.call(r)]}}),this.displayDirective==="show"?[[In,this.mergedShow],[St,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[St,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),$t=`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`,Nt=[K("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)],io=k("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[k("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),k("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),ie("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),k("select",`
 width: var(--n-select-width);
 `),ie("&.transition-disabled",[k("pagination-item","transition: none!important;")]),k("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[k("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),k("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[K("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[k("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),Qe("disabled",[K("hover",$t,Nt),ie("&:hover",$t,Nt),ie("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[K("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),K("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[ie("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),K("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[K("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),K("disabled",`
 cursor: not-allowed;
 `,[k("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)]),K("simple",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[k("pagination-quick-jumper",[k("input",`
 margin: 0;
 `)])])]);function ro(e){var n;if(!e)return 10;const{defaultPageSize:a}=e;if(a!==void 0)return a;const r=(n=e.pageSizes)===null||n===void 0?void 0:n[0];return typeof r=="number"?r:(r==null?void 0:r.value)||10}function lo(e,n,a,r){let u=!1,h=!1,f=1,l=n;if(n===1)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:f,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}]};if(n===2)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:f,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1},{type:"page",label:2,active:e===2,mayBeFastBackward:!0,mayBeFastForward:!1}]};const C=1,g=n;let x=e,F=e;const p=(a-5)/2;F+=Math.ceil(p),F=Math.min(Math.max(F,C+a-3),g-2),x-=Math.floor(p),x=Math.max(Math.min(x,g-a+3),C+2);let w=!1,m=!1;x>C+2&&(w=!0),F<g-2&&(m=!0);const y=[];y.push({type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}),w?(u=!0,f=x-1,y.push({type:"fast-backward",active:!1,label:void 0,options:r?At(C+1,x-1):null})):g>=C+1&&y.push({type:"page",label:C+1,mayBeFastBackward:!0,mayBeFastForward:!1,active:e===C+1});for(let B=x;B<=F;++B)y.push({type:"page",label:B,mayBeFastBackward:!1,mayBeFastForward:!1,active:e===B});return m?(h=!0,l=F+1,y.push({type:"fast-forward",active:!1,label:void 0,options:r?At(F+1,g-1):null})):F===g-2&&y[y.length-1].label!==g-1&&y.push({type:"page",mayBeFastForward:!0,mayBeFastBackward:!1,label:g-1,active:e===g-1}),y[y.length-1].label!==g&&y.push({type:"page",mayBeFastForward:!1,mayBeFastBackward:!1,label:g,active:e===g}),{hasFastBackward:u,hasFastForward:h,fastBackwardTo:f,fastForwardTo:l,items:y}}function At(e,n){const a=[];for(let r=e;r<=n;++r)a.push({label:`${r}`,value:r});return a}const so=Object.assign(Object.assign({},me.props),{simple:Boolean,page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:Number,pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},selectProps:Object,prev:Function,next:Function,goto:Function,prefix:Function,suffix:Function,label:Function,displayOrder:{type:Array,default:["pages","size-picker","quick-jumper"]},to:Ye.propTo,showQuickJumpDropdown:{type:Boolean,default:!0},"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]}),fo=re({name:"Pagination",props:so,slots:Object,setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:a,inlineThemeDisabled:r,mergedRtlRef:u}=Ee(e),h=me("Pagination","-pagination",io,Ln,e,a),{localeRef:f}=Kt("Pagination"),l=P(null),C=P(e.defaultPage),g=P(ro(e)),x=Xe(X(e,"page"),C),F=Xe(X(e,"pageSize"),g),p=z(()=>{const{itemCount:i}=e;if(i!==void 0)return Math.max(1,Math.ceil(i/F.value));const{pageCount:M}=e;return M!==void 0?Math.max(M,1):1}),w=P("");Ze(()=>{e.simple,w.value=String(x.value)});const m=P(!1),y=P(!1),B=P(!1),_=P(!1),O=()=>{e.disabled||(m.value=!0,ne())},E=()=>{e.disabled||(m.value=!1,ne())},V=()=>{y.value=!0,ne()},L=()=>{y.value=!1,ne()},te=i=>{G(i)},q=z(()=>lo(x.value,p.value,e.pageSlot,e.showQuickJumpDropdown));Ze(()=>{q.value.hasFastBackward?q.value.hasFastForward||(m.value=!1,B.value=!1):(y.value=!1,_.value=!1)});const pe=z(()=>{const i=f.value.selectionSuffix;return e.pageSizes.map(M=>typeof M=="number"?{label:`${M} / ${i}`,value:M}:M)}),ge=z(()=>{var i,M;return((M=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i.Pagination)===null||M===void 0?void 0:M.inputSize)||Mt(e.size)}),le=z(()=>{var i,M;return((M=(i=n==null?void 0:n.value)===null||i===void 0?void 0:i.Pagination)===null||M===void 0?void 0:M.selectSize)||Mt(e.size)}),se=z(()=>(x.value-1)*F.value),de=z(()=>{const i=x.value*F.value-1,{itemCount:M}=e;return M!==void 0&&i>M-1?M-1:i}),A=z(()=>{const{itemCount:i}=e;return i!==void 0?i:(e.pageCount||1)*F.value}),ae=mt("Pagination",u,a);function ne(){Ke(()=>{var i;const{value:M}=l;M&&(M.classList.add("transition-disabled"),(i=l.value)===null||i===void 0||i.offsetWidth,M.classList.remove("transition-disabled"))})}function G(i){if(i===x.value)return;const{"onUpdate:page":M,onUpdatePage:oe,onChange:fe,simple:ye}=e;M&&Q(M,i),oe&&Q(oe,i),fe&&Q(fe,i),C.value=i,ye&&(w.value=String(i))}function be(i){if(i===F.value)return;const{"onUpdate:pageSize":M,onUpdatePageSize:oe,onPageSizeChange:fe}=e;M&&Q(M,i),oe&&Q(oe,i),fe&&Q(fe,i),g.value=i,p.value<x.value&&G(p.value)}function Y(){if(e.disabled)return;const i=Math.min(x.value+1,p.value);G(i)}function we(){if(e.disabled)return;const i=Math.max(x.value-1,1);G(i)}function N(){if(e.disabled)return;const i=Math.min(q.value.fastForwardTo,p.value);G(i)}function ue(){if(e.disabled)return;const i=Math.max(q.value.fastBackwardTo,1);G(i)}function s(i){be(i)}function v(){const i=Number.parseInt(w.value);Number.isNaN(i)||(G(Math.max(1,Math.min(i,p.value))),e.simple||(w.value=""))}function j(){v()}function W(i){if(!e.disabled)switch(i.type){case"page":G(i.label);break;case"fast-backward":ue();break;case"fast-forward":N();break}}function he(i){w.value=i.replace(/\D+/g,"")}Ze(()=>{x.value,F.value,ne()});const ce=z(()=>{const{size:i}=e,{self:{buttonBorder:M,buttonBorderHover:oe,buttonBorderPressed:fe,buttonIconColor:ye,buttonIconColorHover:Oe,buttonIconColorPressed:Re,itemTextColor:Ce,itemTextColorHover:Fe,itemTextColorPressed:ze,itemTextColorActive:Be,itemTextColorDisabled:Te,itemColor:ke,itemColorHover:Se,itemColorPressed:ee,itemColorActive:d,itemColorActiveHover:b,itemColorDisabled:H,itemBorder:Le,itemBorderHover:De,itemBorderPressed:_e,itemBorderActive:$e,itemBorderDisabled:Ne,itemBorderRadius:Ve,jumperTextColor:Ue,jumperTextColorDisabled:Ae,buttonColor:xe,buttonColorHover:t,buttonColorPressed:c,[Z("itemPadding",i)]:S,[Z("itemMargin",i)]:$,[Z("inputWidth",i)]:T,[Z("selectWidth",i)]:R,[Z("inputMargin",i)]:I,[Z("selectMargin",i)]:J,[Z("jumperFontSize",i)]:ve,[Z("prefixMargin",i)]:tt,[Z("suffixMargin",i)]:nt,[Z("itemSize",i)]:ot,[Z("buttonIconSize",i)]:at,[Z("itemFontSize",i)]:it,[`${Z("itemMargin",i)}Rtl`]:rt,[`${Z("inputMargin",i)}Rtl`]:lt},common:{cubicBezierEaseInOut:st}}=h.value;return{"--n-prefix-margin":tt,"--n-suffix-margin":nt,"--n-item-font-size":it,"--n-select-width":R,"--n-select-margin":J,"--n-input-width":T,"--n-input-margin":I,"--n-input-margin-rtl":lt,"--n-item-size":ot,"--n-item-text-color":Ce,"--n-item-text-color-disabled":Te,"--n-item-text-color-hover":Fe,"--n-item-text-color-active":Be,"--n-item-text-color-pressed":ze,"--n-item-color":ke,"--n-item-color-hover":Se,"--n-item-color-disabled":H,"--n-item-color-active":d,"--n-item-color-active-hover":b,"--n-item-color-pressed":ee,"--n-item-border":Le,"--n-item-border-hover":De,"--n-item-border-disabled":Ne,"--n-item-border-active":$e,"--n-item-border-pressed":_e,"--n-item-padding":S,"--n-item-border-radius":Ve,"--n-bezier":st,"--n-jumper-font-size":ve,"--n-jumper-text-color":Ue,"--n-jumper-text-color-disabled":Ae,"--n-item-margin":$,"--n-item-margin-rtl":rt,"--n-button-icon-size":at,"--n-button-icon-color":ye,"--n-button-icon-color-hover":Oe,"--n-button-icon-color-pressed":Re,"--n-button-color-hover":t,"--n-button-color":xe,"--n-button-color-pressed":c,"--n-button-border":M,"--n-button-border-hover":oe,"--n-button-border-pressed":fe}}),U=r?qe("pagination",z(()=>{let i="";const{size:M}=e;return i+=M[0],i}),ce,e):void 0;return{rtlEnabled:ae,mergedClsPrefix:a,locale:f,selfRef:l,mergedPage:x,pageItems:z(()=>q.value.items),mergedItemCount:A,jumperValue:w,pageSizeOptions:pe,mergedPageSize:F,inputSize:ge,selectSize:le,mergedTheme:h,mergedPageCount:p,startIndex:se,endIndex:de,showFastForwardMenu:B,showFastBackwardMenu:_,fastForwardActive:m,fastBackwardActive:y,handleMenuSelect:te,handleFastForwardMouseenter:O,handleFastForwardMouseleave:E,handleFastBackwardMouseenter:V,handleFastBackwardMouseleave:L,handleJumperInput:he,handleBackwardClick:we,handleForwardClick:Y,handlePageItemClick:W,handleSizePickerChange:s,handleQuickJumperChange:j,cssVars:r?void 0:ce,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender}},render(){const{$slots:e,mergedClsPrefix:n,disabled:a,cssVars:r,mergedPage:u,mergedPageCount:h,pageItems:f,showSizePicker:l,showQuickJumper:C,mergedTheme:g,locale:x,inputSize:F,selectSize:p,mergedPageSize:w,pageSizeOptions:m,jumperValue:y,simple:B,prev:_,next:O,prefix:E,suffix:V,label:L,goto:te,handleJumperInput:q,handleSizePickerChange:pe,handleBackwardClick:ge,handlePageItemClick:le,handleForwardClick:se,handleQuickJumperChange:de,onRender:A}=this;A==null||A();const ae=E||e.prefix,ne=V||e.suffix,G=_||e.prev,be=O||e.next,Y=L||e.label;return o("div",{ref:"selfRef",class:[`${n}-pagination`,this.themeClass,this.rtlEnabled&&`${n}-pagination--rtl`,a&&`${n}-pagination--disabled`,B&&`${n}-pagination--simple`],style:r},ae?o("div",{class:`${n}-pagination-prefix`},ae({page:u,pageSize:w,pageCount:h,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,this.displayOrder.map(we=>{switch(we){case"pages":return o(vt,null,o("div",{class:[`${n}-pagination-item`,!G&&`${n}-pagination-item--button`,(u<=1||u>h||a)&&`${n}-pagination-item--disabled`],onClick:ge},G?G({page:u,pageSize:w,pageCount:h,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):o(Ie,{clsPrefix:n},{default:()=>this.rtlEnabled?o(zt,null):o(Pt,null)})),B?o(vt,null,o("div",{class:`${n}-pagination-quick-jumper`},o(kt,{value:y,onUpdateValue:q,size:F,placeholder:"",disabled:a,theme:g.peers.Input,themeOverrides:g.peerOverrides.Input,onChange:de}))," /"," ",h):f.map((N,ue)=>{let s,v,j;const{type:W}=N;switch(W){case"page":const ce=N.label;Y?s=Y({type:"page",node:ce,active:N.active}):s=ce;break;case"fast-forward":const U=this.fastForwardActive?o(Ie,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Ot,null):o(Rt,null)}):o(Ie,{clsPrefix:n},{default:()=>o(Bt,null)});Y?s=Y({type:"fast-forward",node:U,active:this.fastForwardActive||this.showFastForwardMenu}):s=U,v=this.handleFastForwardMouseenter,j=this.handleFastForwardMouseleave;break;case"fast-backward":const i=this.fastBackwardActive?o(Ie,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Rt,null):o(Ot,null)}):o(Ie,{clsPrefix:n},{default:()=>o(Bt,null)});Y?s=Y({type:"fast-backward",node:i,active:this.fastBackwardActive||this.showFastBackwardMenu}):s=i,v=this.handleFastBackwardMouseenter,j=this.handleFastBackwardMouseleave;break}const he=o("div",{key:ue,class:[`${n}-pagination-item`,N.active&&`${n}-pagination-item--active`,W!=="page"&&(W==="fast-backward"&&this.showFastBackwardMenu||W==="fast-forward"&&this.showFastForwardMenu)&&`${n}-pagination-item--hover`,a&&`${n}-pagination-item--disabled`,W==="page"&&`${n}-pagination-item--clickable`],onClick:()=>{le(N)},onMouseenter:v,onMouseleave:j},s);if(W==="page"&&!N.mayBeFastBackward&&!N.mayBeFastForward)return he;{const ce=N.type==="page"?N.mayBeFastBackward?"fast-backward":"fast-forward":N.type;return N.type!=="page"&&!N.options?he:o(to,{to:this.to,key:ce,disabled:a,trigger:"hover",virtualScroll:!0,style:{width:"60px"},theme:g.peers.Popselect,themeOverrides:g.peerOverrides.Popselect,builtinThemeOverrides:{peers:{InternalSelectMenu:{height:"calc(var(--n-option-height) * 4.6)"}}},nodeProps:()=>({style:{justifyContent:"center"}}),show:W==="page"?!1:W==="fast-backward"?this.showFastBackwardMenu:this.showFastForwardMenu,onUpdateShow:U=>{W!=="page"&&(U?W==="fast-backward"?this.showFastBackwardMenu=U:this.showFastForwardMenu=U:(this.showFastBackwardMenu=!1,this.showFastForwardMenu=!1))},options:N.type!=="page"&&N.options?N.options:[],onUpdateValue:this.handleMenuSelect,scrollable:!0,showCheckmark:!1},{default:()=>he})}}),o("div",{class:[`${n}-pagination-item`,!be&&`${n}-pagination-item--button`,{[`${n}-pagination-item--disabled`]:u<1||u>=h||a}],onClick:se},be?be({page:u,pageSize:w,pageCount:h,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):o(Ie,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Pt,null):o(zt,null)})));case"size-picker":return!B&&l?o(ao,Object.assign({consistentMenuWidth:!1,placeholder:"",showCheckmark:!1,to:this.to},this.selectProps,{size:p,options:m,value:w,disabled:a,theme:g.peers.Select,themeOverrides:g.peerOverrides.Select,onUpdateValue:pe})):null;case"quick-jumper":return!B&&C?o("div",{class:`${n}-pagination-quick-jumper`},te?te():Dt(this.$slots.goto,()=>[x.goto]),o(kt,{value:y,onUpdateValue:q,size:F,placeholder:"",disabled:a,theme:g.peers.Input,themeOverrides:g.peerOverrides.Input,onChange:de})):null;default:return null}}),ne?o("div",{class:`${n}-pagination-suffix`},ne({page:u,pageSize:w,pageCount:h,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{Pt as B,Hn as F,fo as N,ao as a,Ot as b,zt as c,Rt as d,ro as g};
