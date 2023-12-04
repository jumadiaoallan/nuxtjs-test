import{k as ce,V as Q,e as ve,s as de,m as fe,u as me,g as J,f as Z}from"./ssrBoot.7836a14e.js";import{g as ge,u as Y,m as be,d as oe,e as ee,j as he,r as Se,z as ye}from"./VCard.1e63ab75.js";import{L,a9 as xe,M as N,c as y,aa as w,r as te,z as m,Y as pe,Q as D,ah as le,aH as Ce,ar as ze,aB as ke,O as Te,H as Ve,R as we,aC as Pe,N as Re,ag as V,af as Be,ap as Me,aI as Oe}from"./entry.8c86addd.js";const ie=Symbol.for("vuetify:v-tabs"),$e=L({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...xe(ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),_e=N()({name:"VTab",props:$e(),setup(e,u){let{slots:s,attrs:r}=u;const{textColorClasses:x,textColorStyles:v}=ge(e,"sliderColor"),a=y(()=>e.direction==="horizontal"),i=w(!1),l=te(),o=te();function d(c){var P,f;let{value:g}=c;if(i.value=g,g){const k=(f=(P=l.value)==null?void 0:P.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),R=o.value;if(!k||!R)return;const E=getComputedStyle(k).color,h=k.getBoundingClientRect(),p=R.getBoundingClientRect(),T=a.value?"x":"y",B=a.value?"X":"Y",_=a.value?"right":"bottom",C=a.value?"width":"height",I=h[T],M=p[T],z=I>M?h[_]-p[_]:h[T]-p[T],A=Math.sign(z)>0?a.value?"right":"bottom":Math.sign(z)<0?a.value?"left":"top":"center",H=(Math.abs(z)+(Math.sign(z)<0?h[C]:p[C]))/Math.max(h[C],p[C])||0,b=h[C]/p[C]||0,O=1.5;ve(R,{backgroundColor:[E,"currentcolor"],transform:[`translate${B}(${z}px) scale${B}(${b})`,`translate${B}(${z/O}px) scale${B}(${(H-1)/O+1})`,"none"],transformOrigin:Array(3).fill(A)},{duration:225,easing:de})}}return Y(()=>{const c=Q.filterProps(e);return m(Q,D({symbol:ie,ref:l,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},c,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...s,default:()=>{var g;return m(pe,null,[((g=s.default)==null?void 0:g.call(s))??e.text,!e.hideSlider&&m("div",{ref:o,class:["v-tab__slider",x.value],style:v.value},null)])}})}),{}}});function ae(e){const s=Math.abs(e);return Math.sign(e)*(s/((1/.501-2)*(1-s)+1))}function se(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:x,currentScrollOffset:v,isHorizontal:a}=e;const i=a?u.clientWidth:u.clientHeight,l=a?u.offsetLeft:u.offsetTop,o=x&&a?r-l-i:l,d=s+v,c=i+o,g=i*.4;return o<=v?v=Math.max(o-g,0):d<=c&&(v=Math.min(v-(d-c-g),r-s)),v}function Ee(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:x,isHorizontal:v}=e;const a=v?u.clientWidth:u.clientHeight,i=v?u.offsetLeft:u.offsetTop,l=x&&v?r-i-a/2-s/2:i+a/2-s/2;return Math.min(r-s,Math.max(0,l))}const Ie=Symbol.for("vuetify:v-slide-group"),ue=L({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ie},nextIcon:{type:le,default:"$next"},prevIcon:{type:le,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...be(),...Ce(),...oe(),...fe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ne=N()({name:"VSlideGroup",props:ue(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const{isRtl:r}=ze(),{displayClasses:x,mobile:v}=ke(e),a=me(e,e.symbol),i=w(!1),l=w(0),o=w(0),d=w(0),c=y(()=>e.direction==="horizontal"),{resizeRef:g,contentRect:P}=J(),{resizeRef:f,contentRect:k}=J(),R=y(()=>a.selected.value.length?a.items.value.findIndex(t=>t.id===a.selected.value[0]):-1),E=y(()=>a.selected.value.length?a.items.value.findIndex(t=>t.id===a.selected.value[a.selected.value.length-1]):-1);if(Te){let t=-1;Ve(()=>[a.selected.value,P.value,k.value,c.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(P.value&&k.value){const n=c.value?"width":"height";o.value=P.value[n],d.value=k.value[n],i.value=o.value+1<d.value}if(R.value>=0&&f.value){const n=f.value.children[E.value];R.value===0||!i.value?l.value=0:e.centerActive?l.value=Ee({selectedElement:n,containerSize:o.value,contentSize:d.value,isRtl:r.value,isHorizontal:c.value}):i.value&&(l.value=se({selectedElement:n,containerSize:o.value,contentSize:d.value,isRtl:r.value,currentScrollOffset:l.value,isHorizontal:c.value}))}})})}const h=w(!1);let p=0,T=0;function B(t){const n=c.value?"clientX":"clientY";T=(r.value&&c.value?-1:1)*l.value,p=t.touches[0][n],h.value=!0}function _(t){if(!i.value)return;const n=c.value?"clientX":"clientY",S=r.value&&c.value?-1:1;l.value=S*(T+p-t.touches[0][n])}function C(t){const n=d.value-o.value;l.value<0||!i.value?l.value=0:l.value>=n&&(l.value=n),h.value=!1}function I(){g.value&&(g.value[c.value?"scrollLeft":"scrollTop"]=0)}const M=w(!1);function z(t){if(M.value=!0,!(!i.value||!f.value)){for(const n of t.composedPath())for(const S of f.value.children)if(S===n){l.value=se({selectedElement:S,containerSize:o.value,contentSize:d.value,isRtl:r.value,currentScrollOffset:l.value,isHorizontal:c.value});return}}}function A(t){M.value=!1}function X(t){var n;!M.value&&!(t.relatedTarget&&((n=f.value)!=null&&n.contains(t.relatedTarget)))&&b()}function H(t){f.value&&(c.value?t.key==="ArrowRight"?b(r.value?"prev":"next"):t.key==="ArrowLeft"&&b(r.value?"next":"prev"):t.key==="ArrowDown"?b("next"):t.key==="ArrowUp"&&b("prev"),t.key==="Home"?b("first"):t.key==="End"&&b("last"))}function b(t){var n,S,W,j,K;if(f.value)if(!t)(n=we(f.value)[0])==null||n.focus();else if(t==="next"){const $=(S=f.value.querySelector(":focus"))==null?void 0:S.nextElementSibling;$?$.focus():b("first")}else if(t==="prev"){const $=(W=f.value.querySelector(":focus"))==null?void 0:W.previousElementSibling;$?$.focus():b("last")}else t==="first"?(j=f.value.firstElementChild)==null||j.focus():t==="last"&&((K=f.value.lastElementChild)==null||K.focus())}function O(t){const n=l.value+(t==="prev"?-1:1)*o.value;l.value=Pe(n,0,d.value-o.value)}const re=y(()=>{let t=l.value>d.value-o.value?-(d.value-o.value)+ae(d.value-o.value-l.value):-l.value;l.value<=0&&(t=ae(-l.value));const n=r.value&&c.value?-1:1;return{transform:`translate${c.value?"X":"Y"}(${n*t}px)`,transition:h.value?"none":"",willChange:h.value?"transform":""}}),F=y(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),G=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!v.value;case!0:return i.value||Math.abs(l.value)>0;case"mobile":return v.value||i.value||Math.abs(l.value)>0;default:return!v.value&&(i.value||Math.abs(l.value)>0)}}),q=y(()=>Math.abs(l.value)>0),U=y(()=>d.value>Math.abs(l.value)+o.value);return Y(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!c.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":i.value},x.value,e.class],style:e.style,tabindex:M.value||a.selected.value.length?-1:0,onFocus:X},{default:()=>{var t,n,S;return[G.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!q.value}],onClick:()=>q.value&&O("prev")},[((t=s.prev)==null?void 0:t.call(s,F.value))??m(Z,null,{default:()=>[m(ee,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:I},[m("div",{ref:f,class:"v-slide-group__content",style:re.value,onTouchstartPassive:B,onTouchmovePassive:_,onTouchendPassive:C,onFocusin:z,onFocusout:A,onKeydown:H},[(n=s.default)==null?void 0:n.call(s,F.value)])]),G.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onClick:()=>U.value&&O("next")},[((S=s.next)==null?void 0:S.call(s,F.value))??m(Z,null,{default:()=>[m(ee,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:O,scrollOffset:l,focus:b}}});function Ae(e){return e?e.map(u=>Oe(u)?u:{text:u,value:u}):[]}const He=L({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ue({mandatory:"force"}),...he(),...oe()},"VTabs"),Ye=N()({name:"VTabs",props:He(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const r=Re(e,"modelValue"),x=y(()=>Ae(e.items)),{densityClasses:v}=Se(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ye(V(e,"bgColor"));return Be({VTab:{color:V(e,"color"),direction:V(e,"direction"),stacked:V(e,"stacked"),fixed:V(e,"fixedTabs"),sliderColor:V(e,"sliderColor"),hideSlider:V(e,"hideSlider")}}),Y(()=>{const l=ne.filterProps(e);return m(ne,D(l,{modelValue:r.value,"onUpdate:modelValue":o=>r.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,a.value,e.class],style:[{"--v-tabs-height":Me(e.height)},i.value,e.style],role:"tablist",symbol:ie}),{default:()=>[s.default?s.default():x.value.map(o=>m(_e,D(o,{key:o.text}),null))]})}),{}}});export{Ye as V,_e as a};
