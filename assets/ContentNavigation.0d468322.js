import{J as m,l as v,K as l,s as d,L as g,f as y,M as h,g as _,z as w,B as f}from"./entry.890d8da8.js";import{q as C,w as c,h as p,e as P,s as $,j as x,a as N,u as E}from"./query.3ae09e61.js";import{_ as T}from"./nuxt-link.b5f5c208.js";import{u as j}from"./preview.5aef3dd3.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=l(),s=m(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(v(i))return r.payload.state[a]=i,i;s.value=i}return s}const D=async t=>{const{content:e}=d().public;typeof(t==null?void 0:t.params)!="function"&&(t=C(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${p(n)}.${e.integrity}`}/${P(n)}.json`):c(`/navigation/${p(n)}.${e.integrity}.json`);if($())return(await g(()=>import("./client-db.4115be7a.js"),["./client-db.4115be7a.js","./entry.890d8da8.js","./entry.bba84cb8.css","./query.3ae09e61.js","./preview.5aef3dd3.js","./index.a6ef77ff.js"],import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:x(n),previewToken:j().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=h(t),n=_(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=N();return{navigation:a}}const{data:o}=await E(`content-navigation-${p(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=w(),{navigation:n}=t,o=s=>f(T,{to:s._path},()=>s.title),a=(s,i)=>f("ul",i?{"data-level":i}:null,s.map(u=>u.children?f("li",null,[o(u),a(u.children,i+1)]):f("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),O=R;export{O as default};
