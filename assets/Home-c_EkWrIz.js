import{d as z,h as o,c as Ie,b as Me,e as Ve,i as Ne,s as $e,a as je,f as Ue,g as De,j as Ee,k as He,l as y,m as U,n as C,o as Z,p as qe,N as Ge,q as G,B as q,r as We,t as Ke,u as Xe,S as J,v as P,w as Ye,x as H,y as g,z as Je,A as de,C as Qe,D as $,E as Ze,F as et,G as tt,H as X,I,J as O,K as u,L as rt,_ as ot,M as A,O as ee,P as te,Q as Y,R as M,T as B,U as re,V as oe,W as le,X as lt,Y as nt}from"./index-BWrnT6ZK.js";import{P as it,R as st}from"./RocketOutline-GB_OkkX1.js";import{N as at,u as ct,a as dt,V as ut}from"./Input-BzNUB6S4.js";import{N as ht}from"./Checkbox-BUTP2Qu-.js";const pt=z({name:"Search",render(){return o("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:"enable-background: new 0 0 512 512"},o("path",{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}});function ft(e){const{fontWeight:l,fontSizeLarge:t,fontSizeMedium:i,fontSizeSmall:s,heightLarge:c,heightMedium:p,borderRadius:n,cardColor:f,tableHeaderColor:m,textColor1:k,textColorDisabled:b,textColor2:S,textColor3:a,borderColor:h,hoverColor:x,closeColorHover:w,closeColorPressed:T,closeIconColor:L,closeIconColorHover:R,closeIconColorPressed:r}=e;return Object.assign(Object.assign({},De),{itemHeightSmall:p,itemHeightMedium:p,itemHeightLarge:c,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:t,borderRadius:n,dividerColor:h,borderColor:h,listColor:f,headerColor:Ee(f,m),titleTextColor:k,titleTextColorDisabled:b,extraTextColor:a,extraTextColorDisabled:b,itemTextColor:S,itemTextColorDisabled:b,itemColorPending:x,titleFontWeight:l,closeColorHover:w,closeColorPressed:T,closeIconColor:L,closeIconColorHover:R,closeIconColorPressed:r})}const mt=Ie({name:"Transfer",common:Ue,peers:{Checkbox:je,Scrollbar:$e,Input:Ne,Empty:Ve,Button:Me},self:ft}),D=He("n-transfer"),gt=y("transfer",`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[U("disabled",[y("transfer-list",[y("transfer-list-header",[C("title",`
 color: var(--n-header-text-color-disabled);
 `),C("extra",`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),y("transfer-list",`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[U("source",`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[C("border","border-right: 1px solid var(--n-divider-color);")]),U("target",`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[C("border","border-left: none;")]),C("border",`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),y("transfer-list-header",`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[Z("> *:not(:first-child)",`
 margin-left: 8px;
 `),C("title",`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),C("button",`
 position: relative;
 `),C("extra",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),y("transfer-list-body",`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[y("transfer-filter",`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("transfer-list-flex-container",`
 flex: 1;
 position: relative;
 `,[y("scrollbar",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),y("empty",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),y("transfer-list-content",`
 padding: 0;
 margin: 0;
 position: relative;
 `,[y("transfer-list-item",`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[C("background",`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),C("checkbox",`
 position: relative;
 margin-right: 8px;
 `),C("close",`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),C("label",`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),U("source","cursor: pointer;"),U("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),qe("disabled",[Z("&:hover",[C("background","background-color: var(--n-item-color-pending);"),C("close",`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),ne=z({name:"TransferFilter",props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:l}=G(D);return{mergedClsPrefix:l,mergedTheme:e}},render(){const{mergedTheme:e,mergedClsPrefix:l}=this;return o("div",{class:`${l}-transfer-filter`},o(at,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,clearable:!0,size:"small"},{"clear-icon-placeholder":()=>o(Ge,{clsPrefix:l},{default:()=>o(pt,null)})}))}}),ie=z({name:"TransferHeader",props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:[String,Function]},setup(e){const{targetOptionsRef:l,canNotSelectAnythingRef:t,canBeClearedRef:i,allCheckedRef:s,mergedThemeRef:c,disabledRef:p,mergedClsPrefixRef:n,srcOptionsLengthRef:f}=G(D),{localeRef:m}=ct("Transfer");return()=>{const{source:k,onClearAll:b,onCheckedAll:S,selectAllText:a,clearText:h}=e,{value:x}=c,{value:w}=n,{value:T}=m,L=e.size==="large"?"small":"tiny",{title:R}=e;return o("div",{class:`${w}-transfer-list-header`},R&&o("div",{class:`${w}-transfer-list-header__title`},typeof R=="function"?R():R),k&&o(q,{class:`${w}-transfer-list-header__button`,theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:L,tertiary:!0,onClick:s.value?b:S,disabled:t.value||p.value},{default:()=>s.value?h||T.unselectAll:a||T.selectAll}),!k&&i.value&&o(q,{class:`${w}-transfer-list-header__button`,theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:L,tertiary:!0,onClick:b,disabled:p.value},{default:()=>T.clearAll}),o("div",{class:`${w}-transfer-list-header__extra`},k?T.total(f.value):T.selected(l.value.length)))}}}),se=z({name:"NTransferListItem",props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(e){const{targetValueSetRef:l,mergedClsPrefixRef:t,mergedThemeRef:i,handleItemCheck:s,renderSourceLabelRef:c,renderTargetLabelRef:p,showSelectedRef:n}=G(D),f=Xe(()=>l.value.has(e.value));function m(){e.disabled||s(!f.value,e.value)}return{mergedClsPrefix:t,mergedTheme:i,checked:f,showSelected:n,renderSourceLabel:c,renderTargetLabel:p,handleClick:m}},render(){const{disabled:e,mergedTheme:l,mergedClsPrefix:t,label:i,checked:s,source:c,renderSourceLabel:p,renderTargetLabel:n}=this;return o("div",{class:[`${t}-transfer-list-item`,e&&`${t}-transfer-list-item--disabled`,c?`${t}-transfer-list-item--source`:`${t}-transfer-list-item--target`],onClick:c?this.handleClick:void 0},o("div",{class:`${t}-transfer-list-item__background`}),c&&this.showSelected&&o("div",{class:`${t}-transfer-list-item__checkbox`},o(ht,{theme:l.peers.Checkbox,themeOverrides:l.peerOverrides.Checkbox,disabled:e,checked:s})),o("div",{class:`${t}-transfer-list-item__label`,title:We(i)},c?p?p({option:this.option}):i:n?n({option:this.option}):i),!c&&!e&&o(Ke,{focusable:!1,class:`${t}-transfer-list-item__close`,clsPrefix:t,onClick:this.handleClick}))}}),ae=z({name:"TransferList",props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:l}=G(D),t=P(null),i=P(null);function s(){var n;(n=t.value)===null||n===void 0||n.sync()}function c(){const{value:n}=i;if(!n)return null;const{listElRef:f}=n;return f}function p(){const{value:n}=i;if(!n)return null;const{itemsElRef:f}=n;return f}return{mergedTheme:e,mergedClsPrefix:l,scrollerInstRef:t,vlInstRef:i,syncVLScroller:s,scrollContainer:c,scrollContent:p}},render(){const{mergedTheme:e,options:l}=this;if(l.length===0)return o(dt,{theme:e.peers.Empty,themeOverrides:e.peerOverrides.Empty});const{mergedClsPrefix:t,virtualScroll:i,source:s,disabled:c,syncVLScroller:p}=this;return o(J,{ref:"scrollerInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:i?this.scrollContainer:void 0,content:i?this.scrollContent:void 0},{default:()=>i?o(ut,{ref:"vlInstRef",style:{height:"100%"},class:`${t}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:p,onScroll:p,keyField:"value"},{default:({item:n})=>{const{source:f,disabled:m}=this;return o(se,{source:f,key:n.value,value:n.value,disabled:n.disabled||m,label:n.label,option:n})}}):o("div",{class:`${t}-transfer-list-content`},l.map(n=>o(se,{source:s,key:n.value,value:n.value,disabled:n.disabled||c,label:n.label,option:n})))})}});function vt(e){const l=P(e.defaultValue),t=Ye(H(e,"value"),l),i=g(()=>{const r=new Map;return(e.options||[]).forEach(d=>r.set(d.value,d)),r}),s=g(()=>new Set(t.value||[])),c=g(()=>{const r=i.value,d=[];return(t.value||[]).forEach(j=>{const F=r.get(j);F&&d.push(F)}),d}),p=P(""),n=P(""),f=g(()=>e.sourceFilterable||!!e.filterable),m=g(()=>{const{showSelected:r,options:d,filter:j}=e;return f.value?d.filter(F=>j(p.value,F,"source")&&(r||!s.value.has(F.value))):r?d:d.filter(F=>!s.value.has(F.value))}),k=g(()=>{if(!e.targetFilterable)return c.value;const{filter:r}=e;return c.value.filter(d=>r(n.value,d,"target"))}),b=g(()=>{const{value:r}=t;return r===null?new Set:new Set(r)}),S=g(()=>{const r=new Set(b.value);return m.value.forEach(d=>{!d.disabled&&!r.has(d.value)&&r.add(d.value)}),r}),a=g(()=>{const r=new Set(b.value);return m.value.forEach(d=>{!d.disabled&&r.has(d.value)&&r.delete(d.value)}),r}),h=g(()=>{const r=new Set(b.value);return k.value.forEach(d=>{d.disabled||r.delete(d.value)}),r}),x=g(()=>m.value.every(r=>r.disabled)),w=g(()=>{if(!m.value.length)return!1;const r=b.value;return m.value.every(d=>d.disabled||r.has(d.value))}),T=g(()=>k.value.some(r=>!r.disabled));function L(r){p.value=r??""}function R(r){n.value=r??""}return{uncontrolledValueRef:l,mergedValueRef:t,targetValueSetRef:s,valueSetForCheckAllRef:S,valueSetForUncheckAllRef:a,valueSetForClearRef:h,filteredTgtOptionsRef:k,filteredSrcOptionsRef:m,targetOptionsRef:c,canNotSelectAnythingRef:x,canBeClearedRef:T,allCheckedRef:w,srcPatternRef:p,tgtPatternRef:n,mergedSrcFilterableRef:f,handleSrcFilterUpdateValue:L,handleTgtFilterUpdateValue:R}}const bt=Object.assign(Object.assign({},de.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:[String,Function],selectAllText:String,clearText:String,targetTitle:[String,Function],filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(e,l)=>e?~`${l.label}`.toLowerCase().indexOf(`${e}`.toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),xt=z({name:"Transfer",props:bt,setup(e){const{mergedClsPrefixRef:l}=Je(e),t=de("Transfer","-transfer",gt,mt,e,l),i=Qe(e),{mergedSizeRef:s,mergedDisabledRef:c}=i,p=g(()=>{const{value:v}=s,{self:{[$("itemHeight",v)]:_}}=t.value;return Ze(_)}),{uncontrolledValueRef:n,mergedValueRef:f,targetValueSetRef:m,valueSetForCheckAllRef:k,valueSetForUncheckAllRef:b,valueSetForClearRef:S,filteredTgtOptionsRef:a,filteredSrcOptionsRef:h,targetOptionsRef:x,canNotSelectAnythingRef:w,canBeClearedRef:T,allCheckedRef:L,srcPatternRef:R,tgtPatternRef:r,mergedSrcFilterableRef:d,handleSrcFilterUpdateValue:j,handleTgtFilterUpdateValue:F}=vt(e);function V(v){const{onUpdateValue:_,"onUpdate:value":N,onChange:E}=e,{nTriggerFormInput:W,nTriggerFormChange:K}=i;_&&X(_,v),N&&X(N,v),E&&X(E,v),n.value=v,W(),K()}function ue(){V([...k.value])}function he(){V([...b.value])}function pe(){V([...S.value])}function Q(v,_){V(v?(f.value||[]).concat(_):(f.value||[]).filter(N=>N!==_))}function fe(v){V(v)}return et(D,{targetValueSetRef:m,mergedClsPrefixRef:l,disabledRef:c,mergedThemeRef:t,targetOptionsRef:x,canNotSelectAnythingRef:w,canBeClearedRef:T,allCheckedRef:L,srcOptionsLengthRef:g(()=>e.options.length),handleItemCheck:Q,renderSourceLabelRef:H(e,"renderSourceLabel"),renderTargetLabelRef:H(e,"renderTargetLabel"),showSelectedRef:H(e,"showSelected")}),{mergedClsPrefix:l,mergedDisabled:c,itemSize:p,isMounted:tt(),mergedTheme:t,filteredSrcOpts:h,filteredTgtOpts:a,srcPattern:R,tgtPattern:r,mergedSize:s,mergedSrcFilterable:d,handleSrcFilterUpdateValue:j,handleTgtFilterUpdateValue:F,handleSourceCheckAll:ue,handleSourceUncheckAll:he,handleTargetClearAll:pe,handleItemCheck:Q,handleChecked:fe,cssVars:g(()=>{const{value:v}=s,{common:{cubicBezierEaseInOut:_},self:{borderRadius:N,borderColor:E,listColor:W,titleTextColor:K,titleTextColorDisabled:me,extraTextColor:ge,itemTextColor:ve,itemColorPending:be,itemTextColorDisabled:xe,titleFontWeight:Ce,closeColorHover:ke,closeColorPressed:we,closeIconColor:Se,closeIconColorHover:ye,closeIconColorPressed:Te,closeIconSize:ze,closeSize:Re,dividerColor:Pe,extraTextColorDisabled:Fe,[$("extraFontSize",v)]:_e,[$("fontSize",v)]:Oe,[$("titleFontSize",v)]:Le,[$("itemHeight",v)]:Ae,[$("headerHeight",v)]:Be}}=t.value;return{"--n-bezier":_,"--n-border-color":E,"--n-border-radius":N,"--n-extra-font-size":_e,"--n-font-size":Oe,"--n-header-font-size":Le,"--n-header-extra-text-color":ge,"--n-header-extra-text-color-disabled":Fe,"--n-header-font-weight":Ce,"--n-header-text-color":K,"--n-header-text-color-disabled":me,"--n-item-color-pending":be,"--n-item-height":Ae,"--n-item-text-color":ve,"--n-item-text-color-disabled":xe,"--n-list-color":W,"--n-header-height":Be,"--n-close-size":Re,"--n-close-icon-size":ze,"--n-close-color-hover":ke,"--n-close-color-pressed":we,"--n-close-icon-color":Se,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":Te,"--n-divider-color":Pe}})}},render(){const{mergedClsPrefix:e,renderSourceList:l,renderTargetList:t,mergedTheme:i,mergedSrcFilterable:s,targetFilterable:c}=this;return o("div",{class:[`${e}-transfer`,this.mergedDisabled&&`${e}-transfer--disabled`],style:this.cssVars},o("div",{class:`${e}-transfer-list ${e}-transfer-list--source`},o(ie,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),o("div",{class:`${e}-transfer-list-body`},s?o(ne,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,o("div",{class:`${e}-transfer-list-flex-container`},l?o(J,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar},{default:()=>l({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):o(ae,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),o("div",{class:`${e}-transfer-list__border`})),o("div",{class:`${e}-transfer-list ${e}-transfer-list--target`},o(ie,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),o("div",{class:`${e}-transfer-list-body`},c?o(ne,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,o("div",{class:`${e}-transfer-list-flex-container`},t?o(J,{theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar},{default:()=>t({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):o(ae,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),o("div",{class:`${e}-transfer-list__border`})))}}),Ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},kt=z({name:"BriefcaseOutline",render:function(l,t){return O(),I("svg",Ct,t[0]||(t[0]=[u("rect",{x:"32",y:"128",width:"448",height:"320",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("path",{d:"M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 240H32"},null,-1),u("path",{d:"M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ce=z({name:"CashOutline",render:function(l,t){return O(),I("svg",wt,t[0]||(t[0]=[rt('<rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 432h320"></path><circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M480 160a80 80 0 0 1-80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 160a80 80 0 0 0 80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M480 256a80 80 0 0 0-80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 256a80 80 0 0 1 80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',8)]))}}),St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yt=z({name:"CreateOutline",render:function(l,t){return O(),I("svg",St,t[0]||(t[0]=[u("path",{d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("path",{d:"M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38z",fill:"currentColor"},null,-1),u("path",{d:"M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z",fill:"currentColor"},null,-1)]))}}),Tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zt=z({name:"LockClosedOutline",render:function(l,t){return O(),I("svg",Tt,t[0]||(t[0]=[u("path",{d:"M336 208v-95a80 80 0 0 0-160 0v95",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("rect",{x:"96",y:"208",width:"320",height:"272",rx:"48",ry:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Pt=z({name:"PeopleOutline",render:function(l,t){return O(),I("svg",Rt,t[0]||(t[0]=[u("path",{d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("path",{d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),u("path",{d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),u("path",{d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1)]))}}),Ft={class:"home_app"},_t={class:"layout-content-container"},Ot={class:"systems"},Lt=["onClick"],At=["src","alt"],Bt={class:"content"},It={class:"section-title"},Mt={class:"systems"},Vt=["onClick"],Nt={class:"content"},$t=["src"],jt={style:{display:"flex","justify-content":"flex-end",gap:"12px"}},Ut={__name:"Home",setup(e){const l=P(!1),t=P(""),i=P(""),s=P(!1),c=P([]),p=[{title:"TIPTOP系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/TIPTOP.png",url:"http://10.20.99.90/tiptop.html"},{title:"MAIL系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/MAIL.png",url:"https://dwm6.digiwin.com/coremail/index.jsp"},{title:"EFGP系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/EFGP.png",url:"https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward"},{title:"BI系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/BI.png",url:"http://10.20.99.71:8080/BOE/BI"},{title:"ACP系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/ACP.png",url:"https://acpms.digiwin.com/"},{title:"顧問CRM系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/顧問CRM.png",url:"http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx"},{title:"MAIL系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/MAIL.png",url:"https://dwm6.digiwin.com/coremail/index.jsp"},{title:"EFGP系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/EFGP.png",url:"https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward"},{title:"BI系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/BI.png",url:"http://10.20.99.71:8080/BOE/BI"},{title:"ACP系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/ACP.png",url:"https://acpms.digiwin.com/"},{title:"顧問CRM系統",img:"https://temp-picture.s3.ap-northeast-1.amazonaws.com/application/顧問CRM.png",url:"http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx"}],n=[{title:"考勤打卡",icon:kt,url:"http://10.20.99.90/tiptop.html"},{title:"自己人",icon:it,url:"https://dwm6.digiwin.com/coremail/index.jsp"},{title:"出發GO",icon:zt,url:"https://efgptw.digiwin.com/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward"},{title:"學苑報",icon:Pt,url:"http://10.20.99.71:8080/BOE/BI"},{title:"行銷自動化系統",icon:st,url:"https://acpms.digiwin.com/"},{title:"創業創新",icon:ce,url:"http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx"},{title:"活動簽到",icon:ce,url:"http://crmservice.dsc.com.tw/DSC.NET/Project/VENTURA/src/_Common/PlatFormUtil/OtherPage/DSCPage/FrameSet/DefaultStyle/Login.aspx"}],f=g(()=>n.map((S,a)=>({label:S.title,value:a,disabled:!1}))),m=(S,a)=>{t.value=S,i.value=a,l.value=!0},k=()=>{s.value=!0},b=()=>{s.value=!1};return(S,a)=>(O(),I("div",Ft,[u("div",_t,[a[5]||(a[5]=u("h2",{class:"section-title"},"常用系統",-1)),u("div",Ot,[(O(),I(ee,null,te(p,(h,x)=>u("div",{key:x,class:"systems-item",onClick:w=>m(h.title,h.url)},[u("img",{src:h.img,alt:h.title},null,8,At),u("div",Bt,[u("p",null,le(h.title),1)])],8,Lt)),64))]),u("h2",It,[a[4]||(a[4]=Y(" 自訂應用 ")),A(B(re),{size:"20",class:"settings-icon",onClick:k},{default:M(()=>[A(B(yt))]),_:1})]),u("div",Mt,[(O(),I(ee,null,te(n,(h,x)=>u("div",{key:x,class:"systems-item",onClick:w=>m(h.title,h.url)},[A(B(re),{size:"32"},{default:M(()=>[(O(),lt(nt(h.icon)))]),_:2},1024),u("div",Nt,[u("p",null,le(h.title),1)])],8,Vt)),64))])]),A(B(oe),{show:l.value,"onUpdate:show":a[0]||(a[0]=h=>l.value=h),preset:"card",style:{width:"98vw",height:"96vh"},title:t.value,bordered:!1,size:"huge","content-style":{padding:"5px 10px",height:"100%"}},{default:M(()=>[u("iframe",{src:i.value,style:{width:"100%",height:"100%",border:"none"}},null,8,$t)]),_:1},8,["show","title"]),A(B(oe),{show:s.value,"onUpdate:show":a[3]||(a[3]=h=>s.value=h),preset:"card",style:{width:"800px"},title:"自訂應用程式",bordered:!1,size:"huge"},{footer:M(()=>[u("div",jt,[A(B(q),{onClick:a[2]||(a[2]=h=>s.value=!1)},{default:M(()=>a[6]||(a[6]=[Y("取消")])),_:1,__:[6]}),A(B(q),{type:"primary",onClick:b},{default:M(()=>a[7]||(a[7]=[Y("確定")])),_:1,__:[7]})])]),default:M(()=>[A(B(xt),{value:c.value,"onUpdate:value":a[1]||(a[1]=h=>c.value=h),options:f.value},null,8,["value","options"])]),_:1},8,["show"])]))}},Gt=ot(Ut,[["__scopeId","data-v-60b4a8f7"]]);export{Gt as default};
