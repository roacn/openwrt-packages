import{c as e,H as me,i as t,A as $,F,b as f,d as h,at as fe,au as re,S as R,t as U,g as V,D as xe,h as le,q as $e,Y as pe,a4 as be,k as _e,av as ie,M as ye,Q as ae,e as we}from"./vendor-5507c805.js";import{u as q,I as Ce,J as Pe,K as Se,N as Te,O as Le,P as Ee,Q as Ie,R as Ne,S as De,U as H,V as Me,W as ke,X as Oe,Y as Ae,Z,_ as ve,$ as G,a0 as W,M as Ue,a1 as D,a2 as he,a3 as ee,B as Q,a4 as Fe,a5 as ce,a6 as oe,a7 as de}from"./index-bd53d7c8.js";import{f as je}from"./global-9f47a568.js";import{C as A}from"./ConfigTitle-dd5fc83b.js";const Be=h('<div class="flex flex-col gap-4"><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><input type=number class="input input-bordered w-full"></div><div class="flex flex-col"><input class="input input-bordered w-full"></div><div><select class="select select-bordered w-full"></select></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><div class="flex w-full justify-center"><input class=toggle type=checkbox></div></div><div><select class="select select-bordered w-full">'),Re=h('<option class="flex items-center gap-2">'),He=h("<option>"),Ye=n=>{const[r]=q();return e(Ue,{ref:s=>{var i;return(i=n.ref)==null?void 0:i.call(n,s)},get icon(){return e(me,{size:24})},get title(){return r("proxiesSettings")},get children(){const s=Be(),i=s.firstChild,c=i.firstChild,o=c.firstChild,m=i.nextSibling,P=m.firstChild,u=m.nextSibling,M=u.firstChild,x=u.nextSibling,p=x.firstChild,w=x.nextSibling,C=w.firstChild,g=w.nextSibling,S=g.firstChild,T=S.firstChild,L=g.nextSibling,k=L.firstChild,X=k.firstChild,z=L.nextSibling,E=z.firstChild;return t(i,e(A,{withDivider:!0,get children(){return r("autoCloseConns")}}),c),o.addEventListener("change",d=>Ce(d.target.checked)),t(m,e(A,{withDivider:!0,get children(){return r("urlForLatencyTest")}}),P),P.addEventListener("change",d=>Pe(d.target.value)),t(u,e(A,{withDivider:!0,get children(){return[$(()=>r("latencyTestTimeoutDuration"))," (",$(()=>r("ms")),")"]}}),M),M.addEventListener("change",d=>Se(Number(d.target.value))),t(x,e(A,{withDivider:!0,get children(){return r("urlForIPv6SupportTest")}}),p),p.addEventListener("change",d=>{var b;return Te((b=d.target.value)==null?void 0:b.trim())}),t(w,e(A,{withDivider:!0,get children(){return r("proxiesSorting")}}),C),C.addEventListener("change",d=>Le(d.target.value)),t(C,e(F,{get each(){return Object.values(Ee)},children:d=>(()=>{const b=Re();return b.value=d,t(b,()=>r(d)),b})()})),t(g,e(A,{withDivider:!0,get children(){return r("hideUnAvailableProxies")}}),S),T.addEventListener("change",d=>Ie(d.target.checked)),t(L,e(A,{withDivider:!0,get children(){return r("renderInTwoColumns")}}),k),X.addEventListener("change",d=>Ne(d.target.checked)),t(z,e(A,{withDivider:!0,get children(){return r("proxiesPreviewType")}}),E),E.addEventListener("change",d=>De(d.target.value)),t(E,e(F,{get each(){return Object.values(H)},children:d=>(()=>{const b=He();return b.value=d,t(b,()=>r(d)),b})()})),f(()=>o.checked=Me()),f(()=>P.value=ke()),f(()=>M.value=Oe()),f(()=>p.value=Ae()),f(()=>C.value=Z()),f(()=>T.checked=ve()),f(()=>X.checked=G()),f(()=>E.value=W()),s}})},ue=n=>{const r=()=>W()===H.OFF,s=$(()=>n.proxyNameList.length<=10),i=$(()=>{const o=W();return o===H.BAR||o===H.Auto&&!s()}),c=$(()=>{const o=W();return o===H.DOTS||o===H.Auto&&s()});return e(R,{get when(){return!r()},get children(){return e(fe,{get children(){return[e(re,{get when(){return i()},get children(){return e(Xe,{get proxyNameList(){return n.proxyNameList},get now(){return n.now}})}}),e(re,{get when(){return c()},get children(){return e(qe,{get proxyNameList(){return n.proxyNameList},get now(){return n.now}})}})]}})}})},Qe=h('<div class="flex items-center gap-2 py-2"><div class="my-2 flex flex-1 items-center justify-center overflow-hidden rounded-2xl [&amp;>*]:h-2"><div class=bg-success></div><div class=bg-warning></div><div class=bg-error></div><div class=bg-neutral>'),Xe=n=>{const{latencyMap:r}=ee(),s=$(()=>n.proxyNameList.map(u=>r()[u])),i=$(()=>s().length),c=$(()=>s().filter(u=>u>D().NOT_CONNECTED&&u<=D().MEDIUM).length),o=$(()=>s().filter(u=>u>D().MEDIUM&&u<=D().HIGH).length),m=$(()=>s().filter(u=>u>D().HIGH).length),P=$(()=>s().filter(u=>u===D().NOT_CONNECTED).length);return(()=>{const u=Qe(),M=u.firstChild,x=M.firstChild,p=x.nextSibling,w=p.nextSibling,C=w.nextSibling;return t(u,e(he,{get name(){return n.now}}),null),f(g=>{const S=`${c()*100/i()}%`,T=`${o()*100/i()}%`,L=`${m()*100/i()}%`,k=`${P()*100/i()}%`;return S!==g._v$&&((g._v$=S)!=null?x.style.setProperty("width",S):x.style.removeProperty("width")),T!==g._v$2&&((g._v$2=T)!=null?p.style.setProperty("width",T):p.style.removeProperty("width")),L!==g._v$3&&((g._v$3=L)!=null?w.style.setProperty("width",L):w.style.removeProperty("width")),k!==g._v$4&&((g._v$4=k)!=null?C.style.setProperty("width",k):C.style.removeProperty("width")),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()},ze=h("<div>"),Ve=h('<div class="flex items-center gap-2 py-2"><div class="flex flex-1 flex-wrap items-center gap-1">'),We=n=>{let r=n.selected?"bg-white border-4 border-success":"bg-success";return typeof n.latency!="number"||n.latency===D().NOT_CONNECTED?r=n.selected?"bg-white border-4 border-neutral":"bg-neutral":n.latency>D().HIGH?r=n.selected?"bg-white border-4 border-error":"bg-error":n.latency>D().MEDIUM&&(r=n.selected?"bg-white border-4 border-warning":"bg-warning"),(()=>{const s=ze();return f(i=>{const c=U("h-4 w-4 rounded-full",r),o=n.name;return c!==i._v$&&V(s,i._v$=c),o!==i._v$2&&xe(s,"title",i._v$2=o),i},{_v$:void 0,_v$2:void 0}),s})()},qe=n=>{const{latencyMap:r}=ee();return(()=>{const s=Ve(),i=s.firstChild;return t(i,e(F,{get each(){return n.proxyNameList.map(c=>[c,r()[c]])},children:([c,o])=>{const m=n.now===c;return e(We,{name:c,latency:o,selected:m})}})),t(s,e(he,{get name(){return n.now}}),null),s})()},Je=h("<progress class=progress max=100>"),Ke=h('<div class="text-sm text-slate-500"> / <!> ( <!>% )'),Ze=h('<div class="text-sm text-slate-500">: '),Ge=n=>{const{Download:r=0,Upload:s=0,Total:i=0,Expire:c=0}=n,o=le(i,{units:"iec"}),m=le(r+s,{units:"iec"}),P=$e.toFinite(((r+s)/i*100).toFixed(2));return{total:o,used:m,percentage:P,expirePrefix:()=>{const[x]=q();return x("expire")},expireStr:()=>{const[x]=q();return c===0?x("noExpire"):pe(c*1e3).format("YYYY-MM-DD")}}},et=n=>{if(!n.subscriptionInfo)return;const r=Ge(n.subscriptionInfo);return[(()=>{const s=Je();return f(()=>s.value=r.percentage),s})(),(()=>{const s=Ke(),i=s.firstChild,c=i.nextSibling,o=c.nextSibling,m=o.nextSibling;return m.nextSibling,t(s,()=>`${r.used}`,i),t(s,()=>`${r.total}`,c),t(s,()=>r.percentage,m),s})(),(()=>{const s=Ze(),i=s.firstChild;return t(s,()=>r.expirePrefix(),i),t(s,()=>r.expireStr(),null),s})()]},ge=h("<div>"),tt=h('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class=ml-auto></div></div><div class="flex-1 overflow-y-auto">'),nt=h('<button><span></span><div class="badge badge-sm">'),st=h('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm">'),rt=h('<div class="text-sm text-slate-500"> '),lt=h('<div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><span></span><div class="badge badge-sm"></div></div><div class="flex items-center gap-2">'),it=h('<div class="text-sm text-slate-500"> :: <!> ');var B=function(n){return n.proxyProviders="proxyProviders",n.proxies="proxies",n}(B||{});const ut=()=>{let n;const[r]=q(),{fetchProxies:s,proxies:i,selectProxyInGroup:c,latencyMap:o,proxyProviders:m,updateProviderByProviderName:P,updateAllProvider:u,proxyGroupLatencyTest:M,proxyProviderLatencyTest:x,collapsedMap:p,setCollapsedMap:w,proxyGroupLatencyTestingMap:C,proxyProviderLatencyTestingMap:g,isAllProviderUpdating:S,updatingMap:T}=ee();be(s);const L=async(_,I)=>{_.stopPropagation(),M(I)},k=(_,I)=>{_.stopPropagation(),x(I)},X=(_,I)=>{_.stopPropagation(),P(I)},z=async _=>{_.stopPropagation(),u()},[E,d]=_e(B.proxies),b=()=>[{type:B.proxies,name:r("proxies"),count:i().length},{type:B.proxyProviders,name:r("proxyProviders"),count:m().length}];return(()=>{const _=tt(),I=_.firstChild,te=I.firstChild,ne=te.nextSibling,se=I.nextSibling;return t(te,e(F,{get each(){return b()},children:v=>(()=>{const l=nt(),O=l.firstChild,Y=O.nextSibling;return l.$$click=()=>d(v.type),t(O,()=>v.name),t(Y,()=>v.count),f(()=>V(l,U(E()===v.type&&"tab-active","tab tab-sm gap-2 px-2 sm:tab-md"))),l})()})),t(I,e(R,{get when(){return E()===B.proxyProviders},get children(){return e(Q,{class:"btn btn-circle btn-sm",get disabled(){return S()},onClick:v=>z(v),get icon(){return e(ie,{get class(){return U(S()&&"animate-spin text-success")}})}})}}),ne),t(ne,e(Q,{class:"btn-circle btn-sm sm:btn-md",onClick:()=>n==null?void 0:n.showModal(),get icon(){return e(ye,{})}})),t(se,e(R,{get when(){return E()===B.proxies},get children(){const v=ge();return t(v,e(F,{get each(){return i()},children:l=>{const O=$(()=>Fe(ce(l.all??[],o(),Z()),o(),ve())),Y=[(()=>{const a=st(),N=a.firstChild,y=N.firstChild,J=y.nextSibling;return t(y,()=>l.name),t(J,()=>{var j;return(j=l.all)==null?void 0:j.length}),t(a,e(Q,{class:"btn-circle btn-sm",get disabled(){return C()[l.name]},onClick:j=>L(j,l.name),get icon(){return e(ae,{get class(){return U(C()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),(()=>{const a=rt(),N=a.firstChild;return t(a,()=>l.type,N),t(a,()=>{var y;return((y=l.now)==null?void 0:y.length)>0&&` :: ${l.now}`},null),a})(),e(R,{get when(){return!p()[l.name]},get children(){return e(ue,{get proxyNameList(){return O()},get now(){return l.now}})}})];return e(oe,{get isOpen(){return p()[l.name]},title:Y,onCollapse:a=>w(l.name,a),get children(){return e(F,{get each(){return O()},children:a=>e(de,{proxyName:a,get isSelected(){return l.now===a},onClick:()=>void c(l,a)})})}})}})),f(()=>V(v,U("grid grid-cols-1 place-items-start gap-2",G()?"sm:grid-cols-2":"sm:grid-cols-1"))),v}}),null),t(se,e(R,{get when(){return E()===B.proxyProviders},get children(){const v=ge();return t(v,e(F,{get each(){return m()},children:l=>{const O=$(()=>ce(l.proxies.map(a=>a.name)??[],o(),Z())),Y=[(()=>{const a=lt(),N=a.firstChild,y=N.firstChild,J=y.nextSibling,j=N.nextSibling;return t(y,()=>l.name),t(J,()=>l.proxies.length),t(j,e(Q,{class:"btn btn-circle btn-sm",get disabled(){return T()[l.name]},onClick:K=>X(K,l.name),get icon(){return e(ie,{get class(){return U(T()[l.name]&&"animate-spin text-success")}})}}),null),t(j,e(Q,{class:"btn btn-circle btn-sm",get disabled(){return g()[l.name]},onClick:K=>k(K,l.name),get icon(){return e(ae,{get class(){return U(g()[l.name]&&"animate-pulse text-success")}})}}),null),a})(),e(et,{get subscriptionInfo(){return l.subscriptionInfo}}),(()=>{const a=it(),N=a.firstChild,y=N.nextSibling;return y.nextSibling,t(a,()=>l.vehicleType,N),t(a,()=>r("updated"),y),t(a,()=>je(l.updatedAt),null),a})(),e(R,{get when(){return!p()[l.name]},get children(){return e(ue,{get proxyNameList(){return O()}})}})];return e(oe,{get isOpen(){return p()[l.name]},title:Y,onCollapse:a=>w(l.name,a),get children(){return e(F,{get each(){return O()},children:a=>e(de,{proxyName:a})})}})}})),f(()=>V(v,U("grid grid-cols-1 place-items-start gap-2",G()?"sm:grid-cols-2":"sm:grid-cols-1"))),v}}),null),t(_,e(Ye,{ref:v=>n=v}),null),_})()};we(["click"]);export{ut as default};
