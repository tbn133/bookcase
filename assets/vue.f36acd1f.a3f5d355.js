import{C as o,r as u,D as f,E as d,h as v,G as i,i as l,H as h,I as m}from"./entry.aa45fa6c.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),i()&&(l(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{U as u};
