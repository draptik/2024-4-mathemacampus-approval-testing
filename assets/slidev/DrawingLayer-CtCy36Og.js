import{d as l,t as i,a7 as u,D as c,E as m,o as d,b as p,i as f,A as s}from"../modules/vue-BgnXSd9S.js";import{u as _}from"./context-Bp1utTUH.js";import{u as v}from"./DrawingPreview-CsAe6Bpy.js";import{b as g}from"../index-9BC_KWQ7.js";import"../modules/shiki-YYtDAj9i.js";const w=l({__name:"DrawingLayer",setup(h){const{drauu:e,drawingEnabled:n,loadCanvas:t}=v(),r=_().$scale,o=i();return u(()=>{e.mount(o.value,o.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),m(()=>{e.unmount()}),(a,b)=>(d(),p("svg",{ref_key:"svg",ref:o,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!s(n),"touch-none":s(n)}])},null,2))}}),k=g(w,[["__file","/opt/hostedtoolcache/node/20.12.1/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{k as default};
