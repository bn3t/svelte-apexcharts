import{S as j,i as G,s as H,x as Q,y as R,z as W,r as B,p as U,C as X,e as g,k as C,t as O,c as T,a as S,d as o,m as E,h as M,b as $,g as c,K as J,L as w,q as Y,M as Z,o as ee}from"../../chunks/index-61f7faf2.js";import{A as te,a as K}from"../../chunks/ApexChart-3da0db71.js";import"../../chunks/preload-helper-f3df5ee0.js";function V(i){let a,r;return a=new te({props:{options:i[3],series:i[2],animate:i[1]}}),{c(){Q(a.$$.fragment)},l(t){R(a.$$.fragment,t)},m(t,n){W(a,t,n),r=!0},p(t,n){const u={};n&8&&(u.options=t[3]),n&4&&(u.series=t[2]),n&2&&(u.animate=t[1]),a.$set(u)},i(t){r||(B(a.$$.fragment,t),r=!0)},o(t){U(a.$$.fragment,t),r=!1},d(t){X(a,t)}}}function ae(i){let a,r,t,n,u,m,b,k,p,h,v,_,A,y,f,d,L,x,N,z,s=i[0]&&V(i);return{c(){a=g("div"),s&&s.c(),r=C(),t=g("button"),n=O("Toggle chart visibility"),u=C(),m=g("button"),b=O("Toggle Series"),k=C(),p=g("button"),h=O("Toggle Options"),v=C(),_=g("button"),A=O("Call custom"),y=C(),f=g("input"),d=g("label"),L=O("Animate"),this.h()},l(e){a=T(e,"DIV",{class:!0});var l=S(a);s&&s.l(l),l.forEach(o),r=E(e),t=T(e,"BUTTON",{});var P=S(t);n=M(P,"Toggle chart visibility"),P.forEach(o),u=E(e),m=T(e,"BUTTON",{});var q=S(m);b=M(q,"Toggle Series"),q.forEach(o),k=E(e),p=T(e,"BUTTON",{});var D=S(p);h=M(D,"Toggle Options"),D.forEach(o),v=E(e),_=T(e,"BUTTON",{});var F=S(_);A=M(F,"Call custom"),F.forEach(o),y=E(e),f=T(e,"INPUT",{type:!0,id:!0,name:!0}),d=T(e,"LABEL",{for:!0});var I=S(d);L=M(I,"Animate"),I.forEach(o),this.h()},h(){$(a,"class","root svelte-11nso26"),$(f,"type","checkbox"),$(f,"id","animate"),$(f,"name","animate"),$(d,"for","animate")},m(e,l){c(e,a,l),s&&s.m(a,null),c(e,r,l),c(e,t,l),J(t,n),c(e,u,l),c(e,m,l),J(m,b),c(e,k,l),c(e,p,l),J(p,h),c(e,v,l),c(e,_,l),J(_,A),c(e,y,l),c(e,f,l),f.checked=i[1],c(e,d,l),J(d,L),x=!0,N||(z=[w(t,"click",i[4]),w(m,"click",i[5]),w(p,"click",i[6]),w(_,"click",i[7]),w(f,"change",i[8])],N=!0)},p(e,[l]){e[0]?s?(s.p(e,l),l&1&&B(s,1)):(s=V(e),s.c(),B(s,1),s.m(a,null)):s&&(ee(),U(s,1,1,()=>{s=null}),Y()),l&2&&(f.checked=e[1])},i(e){x||(B(s),x=!0)},o(e){U(s),x=!1},d(e){e&&o(a),s&&s.d(),e&&o(r),e&&o(t),e&&o(u),e&&o(m),e&&o(k),e&&o(p),e&&o(v),e&&o(_),e&&o(y),e&&o(f),e&&o(d),N=!1,Z(z)}}}function se(i,a,r){let t=!0,n=!0,u=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],m=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],b={chart:{id:"chart1",height:"100%",type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},k={chart:{id:"chart1",height:"100%",type:"area",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},p=u,h=b;const v=()=>r(0,t=!t),_=()=>r(2,p=p===u?m:u),A=()=>r(3,h=h===b?k:b),y=()=>{K!==void 0&&K.exec("chart1","updateSeries",[{data:[32,44,31,41,22]}],n)};function f(){n=this.checked,r(1,n)}return[t,n,p,h,v,_,A,y,f]}class re extends j{constructor(a){super(),G(this,a,se,ae,H,{})}}export{re as default};
