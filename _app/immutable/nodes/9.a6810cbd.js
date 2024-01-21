import{s as F,r as Z,f as _,g as v,h as C,d as g,j as u,i as x,w as ee,x as te,y as se,B as De,C as Te,D as Ie,a as P,c as D,E as ye,v as d,F as S,G as xe,H as Le,I as Pe,J as Ae,A as Oe,e as ne,K as je,l as he,m as pe,z as W,o as He,u as H,L as N,M as Re}from"../chunks/scheduler.c6dc58b5.js";import{S as q,i as G,a as L,t as j,b as le,d as oe,m as ae,e as re,g as Ve,c as ze}from"../chunks/index.c4e83267.js";import{w as Me}from"../chunks/index.e8c5b0fe.js";function be(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ue(n,e){e=Object.assign({open:!0,duration:.2,easing:"ease"},e);const l=()=>{};let s=l,t=l;const a=n.addEventListener("transitionend",()=>{s(),s=l,t=l});async function r(){return new Promise((b,m)=>{s=b,t=m})}async function c(){return new Promise(requestAnimationFrame)}function y(){return`height ${e.duration}s ${e.easing}`}n.style.transition=y(),n.style.height=e.open?"auto":"0px",e.open?n.style.overflow="visible":n.style.overflow="hidden";async function p(){n.style.height=n.scrollHeight+"px";try{await r(),n.style.height="auto",n.style.overflow="visible"}catch{}}async function i(){n.style.height==="auto"?(n.style.transition="none",await c(),n.style.height=n.scrollHeight+"px",n.style.transition=y(),await c(),n.style.overflow="hidden",n.style.height="0px"):(t(),n.style.overflow="hidden",n.style.height="0px")}function w(b){e=Object.assign(e,b),e.open?p():i()}function f(){n.removeEventListener("transitionend",a)}return{update:w,destroy:f}}function Ne(n){let e,o;const l=n[4].default,s=Z(l,n,n[3],null);return{c(){e=_("ul"),s&&s.c(),this.h()},l(t){e=v(t,"UL",{class:!0});var a=C(e);s&&s.l(a),a.forEach(g),this.h()},h(){u(e,"class","accordion svelte-da9j5z")},m(t,a){x(t,e,a),s&&s.m(e,null),o=!0},p(t,[a]){s&&s.p&&(!o||a&8)&&ee(s,l,t,t[3],o?se(l,t[3],a,null):te(t[3]),null)},i(t){o||(L(s,t),o=!0)},o(t){j(s,t),o=!1},d(t){t&&g(e),s&&s.d(t)}}}function Be(n,e,o){let{$$slots:l={},$$scope:s}=e,{duration:t=.2}=e,{easing:a="ease"}=e,{key:r=null}=e;const c=De(),y=Me({key:r,duration:t,easing:a}),p=y.subscribe(i=>{o(0,r=i.key),c("change",{key:r})});return Te("svelte-collapsible-accordion",y),Ie(p),n.$$set=i=>{"duration"in i&&o(1,t=i.duration),"easing"in i&&o(2,a=i.easing),"key"in i&&o(0,r=i.key),"$$scope"in i&&o(3,s=i.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&y.update(i=>Object.assign(i,{key:r}))},[r,t,a,s,l]}class Se extends q{constructor(e){super(),G(this,e,Be,Ne,F,{duration:1,easing:2,key:0})}}const We=n=>({}),we=n=>({}),Fe=n=>({}),Ee=n=>({});function qe(n){let e,o,l,s,t,a,r,c,y;const p=n[6].header,i=Z(p,n,n[5],Ee),w=n[6].body,f=Z(w,n,n[5],we),b=n[6].default,m=Z(b,n,n[5],null);return{c(){e=_("li"),o=_("button"),i&&i.c(),l=P(),s=_("div"),f&&f.c(),a=P(),m&&m.c(),this.h()},l(h){e=v(h,"LI",{class:!0});var E=C(e);o=v(E,"BUTTON",{type:!0,class:!0});var T=C(o);i&&i.l(T),T.forEach(g),l=D(E),s=v(E,"DIV",{class:!0});var R=C(s);f&&f.l(R),R.forEach(g),a=D(E),m&&m.l(E),E.forEach(g),this.h()},h(){u(o,"type","button"),u(o,"class","accordion-item-header svelte-c582kf"),u(s,"class","accordion-item-body"),u(e,"class","accordion-item"),ye(e,"open",n[0].open)},m(h,E){x(h,e,E),d(e,o),i&&i.m(o,null),d(e,l),d(e,s),f&&f.m(s,null),d(e,a),m&&m.m(e,null),r=!0,c||(y=[S(o,"click",n[2]),xe(t=Ue.call(null,s,n[0]))],c=!0)},p(h,[E]){i&&i.p&&(!r||E&32)&&ee(i,p,h,h[5],r?se(p,h[5],E,Fe):te(h[5]),Ee),f&&f.p&&(!r||E&32)&&ee(f,w,h,h[5],r?se(w,h[5],E,We):te(h[5]),we),t&&Le(t.update)&&E&1&&t.update.call(null,h[0]),m&&m.p&&(!r||E&32)&&ee(m,b,h,h[5],r?se(b,h[5],E,null):te(h[5]),null),(!r||E&1)&&ye(e,"open",h[0].open)},i(h){r||(L(i,h),L(f,h),L(m,h),r=!0)},o(h){j(i,h),j(f,h),j(m,h),r=!1},d(h){h&&g(e),i&&i.d(h),f&&f.d(h),m&&m.d(h),c=!1,Pe(y)}}}function Ge(n,e,o){let l,s,{$$slots:t={},$$scope:a}=e,{key:r}=e;const c=Ae("svelte-collapsible-accordion");Oe(n,c,p=>o(4,s=p));function y(){l.open?c.update(p=>Object.assign(p,{key:null})):c.update(p=>Object.assign(p,{key:r}))}return n.$$set=p=>{"key"in p&&o(3,r=p.key),"$$scope"in p&&o(5,a=p.$$scope)},n.$$.update=()=>{n.$$.dirty&24&&o(0,l={open:s.key===r,duration:s.duration,easing:s.easing})},[l,c,y,r,s,a,t]}class Ye extends q{constructor(e){super(),G(this,e,Ge,qe,F,{key:3})}}function ke(n,e,o){const l=n.slice();return l[1]=e[o],l}function Je(n){let e,o,l,s=n[1].title+"",t,a,r,c=n[1].subtitle+"",y,p;return{c(){e=_("div"),o=_("div"),l=_("h6"),t=he(s),a=P(),r=_("p"),y=he(c),p=P(),this.h()},l(i){e=v(i,"DIV",{slot:!0,class:!0});var w=C(e);o=v(w,"DIV",{});var f=C(o);l=v(f,"H6",{class:!0});var b=C(l);t=pe(b,s),b.forEach(g),a=D(f),r=v(f,"P",{class:!0});var m=C(r);y=pe(m,c),m.forEach(g),f.forEach(g),p=D(w),w.forEach(g),this.h()},h(){u(l,"class","svelte-w2svd0"),u(r,"class","svelte-w2svd0"),u(e,"slot","header"),u(e,"class","header svelte-w2svd0")},m(i,w){x(i,e,w),d(e,o),d(o,l),d(l,t),d(o,a),d(o,r),d(r,y),d(e,p)},p:W,d(i){i&&g(e)}}}function Ke(n){let e,o=n[1].text+"",l,s;return{c(){e=_("p"),l=he(o),s=P(),this.h()},l(t){e=v(t,"P",{slot:!0,class:!0});var a=C(e);l=pe(a,o),s=D(a),a.forEach(g),this.h()},h(){u(e,"slot","body"),u(e,"class","body svelte-w2svd0")},m(t,a){x(t,e,a),d(e,l),d(e,s)},p:W,d(t){t&&g(e)}}}function Ce(n){let e,o;return e=new Ye({props:{key:n[1].key,$$slots:{body:[Ke],header:[Je]},$$scope:{ctx:n}}}),{c(){le(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,s){ae(e,l,s),o=!0},p(l,s){const t={};s&16&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){o||(L(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){re(e,l)}}}function Xe(n){let e,o,l=be(n[0]),s=[];for(let a=0;a<l.length;a+=1)s[a]=Ce(ke(n,l,a));const t=a=>j(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ne()},l(a){for(let r=0;r<s.length;r+=1)s[r].l(a);e=ne()},m(a,r){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,r);x(a,e,r),o=!0},p(a,r){if(r&1){l=be(a[0]);let c;for(c=0;c<l.length;c+=1){const y=ke(a,l,c);s[c]?(s[c].p(y,r),L(s[c],1)):(s[c]=Ce(y),s[c].c(),L(s[c],1),s[c].m(e.parentNode,e))}for(Ve(),c=l.length;c<s.length;c+=1)t(c);ze()}},i(a){if(!o){for(let r=0;r<l.length;r+=1)L(s[r]);o=!0}},o(a){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)j(s[r]);o=!1},d(a){a&&g(e),je(s,a)}}}function Qe(n){let e,o;return e=new Se({props:{$$slots:{default:[Xe]},$$scope:{ctx:n}}}),{c(){le(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,s){ae(e,l,s),o=!0},p(l,[s]){const t={};s&16&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){o||(L(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){re(e,l)}}}function Ze(n){return[[{key:"a",title:"Ruby Developer",subtitle:"Open Position Hr/$25-$40",text:"We are looking for Ruby Developers experienced with using Ruby on Rails and Postgres or Heroku. Please have at least one completed project that reflects your skill set and experience. This is an entry level position"},{key:"b",title:"Public Outreach",subtitle:" Open  Position Hr/$23-$30",text:"-We are looking for a professional yet friendly character to communicate with clients interested in our services.-Set meetings and arrange appointments for our developers and clients to meet and discuss project details. -Experience with Google sheets to maintain records on Client contact information."},{key:"c",title:"Rust Developer",subtitle:"Open Position Hr/$25-$40",text:"We are looking for Rust developers with experience using frameworks such as Axume, Actix, or etc. Experience with databases and creating web apps is highly appreciated. Please have at least one completed project that reflects your skill set and experience. This is an entry level position."}]]}class et extends q{constructor(e){super(),G(this,e,Ze,Qe,F,{})}}function tt(n){let e,o="Thank you for your interest, please send your resume to DevrottenMangos@gmail.com. You can expect a response within two days.";return{c(){e=_("p"),e.textContent=o,this.h()},l(l){e=v(l,"P",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-lebhxw"&&(e.textContent=o),this.h()},h(){u(e,"class","meh")},m(l,s){x(l,e,s)},p:W,d(l){l&&g(e)}}}function st(n){let e,o,l="<i>Email addresses submitted here are used only for replies.</i>",s,t,a,r,c,y='<label>Don’t fill this out: <input name="bot-field"/></label>',p,i,w,f,b,m,h="Name:",E,T,R,V,B,me="Email:",ie,A,ce,z,M,_e="Desired position:",ue,O,fe,Y,U,ve="Send",de,ge,I=n[1]&&$e();return{c(){e=P(),o=_("p"),o.innerHTML=l,s=P(),t=_("form"),a=_("input"),r=P(),c=_("p"),c.innerHTML=y,p=P(),i=_("input"),w=P(),f=_("div"),b=_("div"),m=_("label"),m.textContent=h,E=P(),T=_("input"),R=P(),V=_("div"),B=_("label"),B.textContent=me,ie=P(),A=_("input"),ce=P(),z=_("div"),M=_("label"),M.textContent=_e,ue=P(),O=_("textarea"),fe=P(),I&&I.c(),Y=P(),U=_("button"),U.textContent=ve,this.h()},l($){e=D($),o=v($,"P",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-1hpastx"&&(o.innerHTML=l),s=D($),t=v($,"FORM",{id:!0,name:!0,method:!0,action:!0,"data-netlify":!0,"data-netlify-honeypot":!0});var k=C(t);a=v(k,"INPUT",{type:!0,name:!0}),r=D(k),c=v(k,"P",{"data-svelte-h":!0}),H(c)!=="svelte-79zce5"&&(c.innerHTML=y),p=D(k),i=v(k,"INPUT",{type:!0,name:!0}),w=D(k),f=v(k,"DIV",{class:!0});var J=C(f);b=v(J,"DIV",{class:!0});var K=C(b);m=v(K,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),H(m)!=="svelte-13s909b"&&(m.textContent=h),E=D(K),T=v(K,"INPUT",{type:!0,name:!0,placeholder:!0}),K.forEach(g),R=D(J),V=v(J,"DIV",{class:!0});var X=C(V);B=v(X,"LABEL",{for:!0,"data-svelte-h":!0}),H(B)!=="svelte-1mds1o8"&&(B.textContent=me),ie=D(X),A=v(X,"INPUT",{type:!0,name:!0,placeholder:!0}),X.forEach(g),J.forEach(g),ce=D(k),z=v(k,"DIV",{class:!0});var Q=C(z);M=v(Q,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),H(M)!=="svelte-ctywzp"&&(M.textContent=_e),ue=D(Q),O=v(Q,"TEXTAREA",{name:!0,rows:!0,placeholder:!0}),C(O).forEach(g),Q.forEach(g),fe=D(k),I&&I.l(k),Y=D(k),U=v(k,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),H(U)!=="svelte-1hdcf52"&&(U.textContent=ve),k.forEach(g),this.h()},h(){u(o,"class","lowered"),u(a,"type","hidden"),u(a,"name","form-name"),a.value="contact",c.hidden=!0,u(i,"type","hidden"),u(i,"name","from_page"),u(m,"for","name"),u(m,"class","label"),u(T,"type","text"),u(T,"name","name"),u(T,"placeholder","What should we call you?"),u(b,"class","field"),u(B,"for","email"),u(A,"type","email"),u(A,"name","email"),u(A,"placeholder","Where can we send a response?"),u(V,"class","field"),u(f,"class","sender-info"),u(M,"class","labelone"),u(M,"for","message"),u(O,"name","message"),u(O,"rows","6"),u(O,"placeholder","Please enter your desired position and relevant experience."),u(z,"class","message-wrapper field"),u(U,"class","buttonone"),u(U,"type","submit"),u(t,"id","contact-form"),u(t,"name","contact"),u(t,"method","post"),u(t,"action","/success/"),u(t,"data-netlify","true"),u(t,"data-netlify-honeypot","bot-field")},m($,k){x($,e,k),x($,o,k),x($,s,k),x($,t,k),d(t,a),d(t,r),d(t,c),d(t,p),d(t,i),N(i,n[2].from_page),d(t,w),d(t,f),d(f,b),d(b,m),d(b,E),d(b,T),N(T,n[2].name),d(f,R),d(f,V),d(V,B),d(V,ie),d(V,A),N(A,n[2].email),d(t,ce),d(t,z),d(z,M),d(z,ue),d(z,O),N(O,n[2].message),d(t,fe),I&&I.m(t,null),d(t,Y),d(t,U),de||(ge=[S(i,"input",n[4]),S(T,"input",n[5]),S(A,"input",n[6]),S(O,"input",n[7]),S(t,"submit",Re(n[3]))],de=!0)},p($,k){k&4&&N(i,$[2].from_page),k&4&&T.value!==$[2].name&&N(T,$[2].name),k&4&&A.value!==$[2].email&&N(A,$[2].email),k&4&&N(O,$[2].message),$[1]?I||(I=$e(),I.c(),I.m(t,Y)):I&&(I.d(1),I=null)},d($){$&&(g(e),g(o),g(s),g(t)),I&&I.d(),de=!1,Pe(ge)}}}function $e(n){let e,o="Please make sure all above fields are filled out. Thanks!";return{c(){e=_("div"),e.textContent=o,this.h()},l(l){e=v(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-rru1jh"&&(e.textContent=o),this.h()},h(){u(e,"class","error")},m(l,s){x(l,e,s)},d(l){l&&g(e)}}}function nt(n){let e;function o(t,a){return t[0]?tt:st}let l=o(n),s=l(n);return{c(){s.c(),e=ne()},l(t){s.l(t),e=ne()},m(t,a){s.m(t,a),x(t,e,a)},p(t,[a]){l===(l=o(t))&&s?s.p(t,a):(s.d(1),s=l(t),s&&(s.c(),s.m(e.parentNode,e)))},i:W,o:W,d(t){t&&g(e),s.d(t)}}}function lt(n,e,o){let l=!1,s=!1,t={from_page:"",name:"",email:"",message:"",phone:""};He(()=>{const w=new URLSearchParams(window.location.search);o(2,t={...t,from_page:w.get("from_page")})});const a=w=>Object.keys(w).map(f=>encodeURIComponent(f)+"="+encodeURIComponent(w[f])).join("&"),r=w=>{const{name:f,email:b,message:m,phone:h,from_page:E}=t;if(!f||!b||!m||!h){o(1,s=!0);return}const T=w.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a({"form-name":T.getAttribute("name"),...t})}).then(()=>{o(0,l=!0)}).catch(R=>alert(R))};function c(){t.from_page=this.value,o(2,t)}function y(){t.name=this.value,o(2,t)}function p(){t.email=this.value,o(2,t)}function i(){t.message=this.value,o(2,t)}return[l,s,t,r,c,y,p,i]}class ot extends q{constructor(e){super(),G(this,e,lt,nt,F,{})}}function at(n){let e,o,l=`<p class="ztitle">(Careers)</p> <p class="ztext">We are always searching for people who can lend their talents to help Rotten Mangos meet the needs of our clientel and expand our services. 
			 Open Positions are listed below. An interview will be conducted through zoom.</p>`,s,t,a,r,c,y,p,i,w;return r=new et({}),i=new ot({}),{c(){e=_("body"),o=_("div"),o.innerHTML=l,s=P(),t=_("div"),a=_("div"),le(r.$$.fragment),c=P(),y=_("div"),p=_("div"),le(i.$$.fragment),this.h()},l(f){e=v(f,"BODY",{});var b=C(e);o=v(b,"DIV",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-1dnp9m2"&&(o.innerHTML=l),s=D(b),t=v(b,"DIV",{class:!0});var m=C(t);a=v(m,"DIV",{class:!0});var h=C(a);oe(r.$$.fragment,h),h.forEach(g),c=D(m),y=v(m,"DIV",{class:!0});var E=C(y);p=v(E,"DIV",{class:!0});var T=C(p);oe(i.$$.fragment,T),T.forEach(g),E.forEach(g),m.forEach(g),b.forEach(g),this.h()},h(){u(o,"class","zheader"),u(a,"class","zformcolom"),u(p,"class","zforms"),u(y,"class","zaform"),u(t,"class","zalpha")},m(f,b){x(f,e,b),d(e,o),d(e,s),d(e,t),d(t,a),ae(r,a,null),d(t,c),d(t,y),d(y,p),ae(i,p,null),w=!0},p:W,i(f){w||(L(r.$$.fragment,f),L(i.$$.fragment,f),w=!0)},o(f){j(r.$$.fragment,f),j(i.$$.fragment,f),w=!1},d(f){f&&g(e),re(r),re(i)}}}class ut extends q{constructor(e){super(),G(this,e,null,at,F,{})}}export{ut as component};
