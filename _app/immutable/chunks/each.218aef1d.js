import{d as B}from"./index.d32a183c.js";import{r as C}from"./scheduler.63274e7e.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,w){n.d(1),w.delete(n.key)}function H(n,w,x,A,j,p,f,k,y,q,u,z){let i=n.length,d=p.length,c=i;const o={};for(;c--;)o[n[c].key]=c;const h=[],m=new Map,a=new Map,M=[];for(c=d;c--;){const e=z(j,p,c),s=x(e);let t=f.get(s);t?A&&M.push(()=>t.p(e,w)):(t=q(s,e),t.c()),m.set(s,h[c]=t),s in o&&a.set(s,Math.abs(c-o[s]))}const v=new Set,S=new Set;function g(e){B(e,1),e.m(k,u),f.set(e.key,e),u=e.first,d--}for(;i&&d;){const e=h[d-1],s=n[i-1],t=e.key,l=s.key;e===s?(u=e.first,i--,d--):m.has(l)?!f.has(t)||v.has(t)?g(e):S.has(l)?i--:a.get(t)>a.get(l)?(S.add(t),g(e)):(v.add(l),i--):(y(s,f),i--)}for(;i--;){const e=n[i];m.has(e.key)||y(e,f)}for(;d;)g(h[d-1]);return C(M),h}export{G as d,F as e,H as u};
