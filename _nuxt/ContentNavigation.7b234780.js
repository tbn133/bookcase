import{q as m,w as c,h as p,e as v,s as l,j as d,a as g,u as y}from"./query.8a9fc8a0.js";import{J as h,l as _,K as w,s as C,L as P,f as $,M as x,g as N,z as E,B as f}from"./entry.05448d89.js";import{_ as T}from"./nuxt-link.3a5e54eb.js";import{u as j}from"./preview.4974ab55.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=w(),s=h(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(_(i))return r.payload.state[a]=i,i;s.value=i}return s}const D=async t=>{const{content:e}=C().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${p(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${p(n)}.${e.integrity}.json`);if(l())return(await P(()=>import("./client-db.7e35aa31.js"),["./client-db.7e35aa31.js","./entry.05448d89.js","./entry.bba84cb8.css","./query.8a9fc8a0.js","./preview.4974ab55.js","./index.a6ef77ff.js"],import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:j().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await y(`content-navigation-${p(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=s=>f(T,{to:s._path},()=>s.title),a=(s,i)=>f("ul",i?{"data-level":i}:null,s.map(u=>u.children?f("li",null,[o(u),a(u.children,i+1)]):f("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),O=R;export{O as default};
