import{a1 as n,ar as r,t as u,y as j,a5 as $,aA as v}from"../modules/vue-BgnXSd9S.js";import{i as p,Y as C,V as x,W as S,aA as l,U as R,h as T,Z as k,aB as A,aC as E}from"../index-9BC_KWQ7.js";function F(){const t=n(p),s=r(t,"nav"),a=n(C).value,e=r(a,"current"),i=n(x),c=n(S),o=n(l,{}),d=n(R,void 0),m=n(T,u(1)),f=n(k,j(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;$(l,t);const{$slidev:s,$page:a}=F(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,s){return{...v(t,s===0?A:E),frontmatter:t}}export{b as f,O as p,F as u};