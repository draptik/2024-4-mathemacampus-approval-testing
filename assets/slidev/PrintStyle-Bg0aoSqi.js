import{d,t as u,a7 as h,o as a,b as p,F as k,g as w,e as y,y as f,a5 as o,ar as v,c as C,h as B,i as x,af as z,A as c,as as L,v as S,k as P,an as W,x as g}from"../modules/vue-BgnXSd9S.js";import{b as _,U as $,V,W as q,X as A,Y as F,Z as G,g as N,a as O,s as R}from"../index-9BC_KWQ7.js";const T={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},D=y("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),M=y("div",null,"Loading slide...",-1),Z=d({__name:"SlideLoading",setup(i){const e=u(!1);return h(()=>{setTimeout(()=>{e.value=!0},200)}),(t,n)=>(a(),p("div",T,[e.value?(a(),p(k,{key:0},[D,M],64)):w("v-if",!0)]))}}),E=_(Z,[["__file","/opt/hostedtoolcache/node/20.12.1/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideLoading.vue"]]),H=d({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(i){const e=i,t=f(()=>{var s,l;return((l=(s=e.route.meta)==null?void 0:s.slide)==null?void 0:l.frontmatter.zoom)??1});o($,e.route),o(V,u(e.route.no)),o(q,u(e.renderContext)),o(A,v(e,"active")),o(F,v(e,"clicksContext")),o(G,t);const n=f(()=>t.value===1?void 0:{width:`${100/t.value}%`,height:`${100/t.value}%`,transformOrigin:"top left",transform:`scale(${t.value})`}),b=L({loader:async()=>{const s=await e.is();return d({setup(l,{attrs:j}){return h(()=>{var r,m;(m=(r=e.clicksContext)==null?void 0:r.onMounted)==null||m.call(r)}),()=>S(s.default,j)}})},delay:300,loadingComponent:E});return(s,l)=>(a(),p("div",{class:x(c(N)(i.route))},[(a(),C(z(c(b)),{style:B(n.value),"data-slidev-no":e.route.no,class:x({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","data-slidev-no","class"]))],2))}}),Y=_(H,[["__scopeId","data-v-5a2430af"],["__file","/opt/hostedtoolcache/node/20.12.1/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),J={render(){return[]}},K={render(){return[]}},I=d({__name:"PrintStyle",setup(i){function e(t,{slots:n}){if(n.default)return S("style",n.default())}return(t,n)=>(a(),C(e,null,{default:P(()=>[W(" @page { size: "+g(c(O))+"px "+g(c(R))+"px; margin: 0px; } ",1)]),_:1}))}}),Q=_(I,[["__file","/opt/hostedtoolcache/node/20.12.1/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintStyle.vue"]]);export{K as G,Q as P,Y as S,J as a};
