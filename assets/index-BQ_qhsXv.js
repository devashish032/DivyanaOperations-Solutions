(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Uv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function yy(){if(v0)return No;v0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return No.Fragment=e,No.jsx=i,No.jsxs=i,No}var _0;function Sy(){return _0||(_0=1,Kf.exports=yy()),Kf.exports}var M=Sy(),Qf={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function My(){if(x0)return ne;x0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function v(L,tt,xt){this.props=L,this.context=tt,this.refs=S,this.updater=xt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=v.prototype;function O(L,tt,xt){this.props=L,this.context=tt,this.refs=S,this.updater=xt||A}var N=O.prototype=new F;N.constructor=O,R(N,v.prototype),N.isPureReactComponent=!0;var it=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(L,tt,xt){var Y=xt.ref;return{$$typeof:o,type:L,key:tt,ref:Y!==void 0?Y:null,props:xt}}function w(L,tt){return D(L.type,tt,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ut(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return tt[xt]})}var rt=/\/+/g;function lt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?ut(""+L.key):tt.toString(36)}function ht(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,tt,xt,Y,ft){var bt=typeof L;(bt==="undefined"||bt==="boolean")&&(L=null);var yt=!1;if(L===null)yt=!0;else switch(bt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(L.$$typeof){case o:case e:yt=!0;break;case _:return yt=L._init,z(yt(L._payload),tt,xt,Y,ft)}}if(yt)return ft=ft(L),yt=Y===""?"."+lt(L,0):Y,it(ft)?(xt="",yt!=null&&(xt=yt.replace(rt,"$&/")+"/"),z(ft,tt,xt,"",function(ee){return ee})):ft!=null&&(H(ft)&&(ft=w(ft,xt+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(rt,"$&/")+"/")+yt)),tt.push(ft)),1;yt=0;var Bt=Y===""?".":Y+":";if(it(L))for(var zt=0;zt<L.length;zt++)Y=L[zt],bt=Bt+lt(Y,zt),yt+=z(Y,tt,xt,bt,ft);else if(zt=b(L),typeof zt=="function")for(L=zt.call(L),zt=0;!(Y=L.next()).done;)Y=Y.value,bt=Bt+lt(Y,zt++),yt+=z(Y,tt,xt,bt,ft);else if(bt==="object"){if(typeof L.then=="function")return z(ht(L),tt,xt,Y,ft);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function Z(L,tt,xt){if(L==null)return L;var Y=[],ft=0;return z(L,Y,"","",function(bt){return tt.call(xt,bt,ft++)}),Y}function q(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Et={map:Z,forEach:function(L,tt,xt){Z(L,function(){tt.apply(this,arguments)},xt)},count:function(L){var tt=0;return Z(L,function(){tt++}),tt},toArray:function(L){return Z(L,function(tt){return tt})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ne.Activity=x,ne.Children=Et,ne.Component=v,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=O,ne.StrictMode=s,ne.Suspense=p,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ne.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},ne.cache=function(L){return function(){return L.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(L,tt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=R({},L.props),ft=L.key;if(tt!=null)for(bt in tt.key!==void 0&&(ft=""+tt.key),tt)!K.call(tt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&tt.ref===void 0||(Y[bt]=tt[bt]);var bt=arguments.length-2;if(bt===1)Y.children=xt;else if(1<bt){for(var yt=Array(bt),Bt=0;Bt<bt;Bt++)yt[Bt]=arguments[Bt+2];Y.children=yt}return D(L.type,ft,Y)},ne.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ne.createElement=function(L,tt,xt){var Y,ft={},bt=null;if(tt!=null)for(Y in tt.key!==void 0&&(bt=""+tt.key),tt)K.call(tt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ft[Y]=tt[Y]);var yt=arguments.length-2;if(yt===1)ft.children=xt;else if(1<yt){for(var Bt=Array(yt),zt=0;zt<yt;zt++)Bt[zt]=arguments[zt+2];ft.children=Bt}if(L&&L.defaultProps)for(Y in yt=L.defaultProps,yt)ft[Y]===void 0&&(ft[Y]=yt[Y]);return D(L,bt,ft)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(L){return{$$typeof:h,render:L}},ne.isValidElement=H,ne.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:q}},ne.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},ne.startTransition=function(L){var tt=P.T,xt={};P.T=xt;try{var Y=L(),ft=P.S;ft!==null&&ft(xt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,St)}catch(bt){St(bt)}finally{tt!==null&&xt.types!==null&&(tt.types=xt.types),P.T=tt}},ne.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ne.use=function(L){return P.H.use(L)},ne.useActionState=function(L,tt,xt){return P.H.useActionState(L,tt,xt)},ne.useCallback=function(L,tt){return P.H.useCallback(L,tt)},ne.useContext=function(L){return P.H.useContext(L)},ne.useDebugValue=function(){},ne.useDeferredValue=function(L,tt){return P.H.useDeferredValue(L,tt)},ne.useEffect=function(L,tt){return P.H.useEffect(L,tt)},ne.useEffectEvent=function(L){return P.H.useEffectEvent(L)},ne.useId=function(){return P.H.useId()},ne.useImperativeHandle=function(L,tt,xt){return P.H.useImperativeHandle(L,tt,xt)},ne.useInsertionEffect=function(L,tt){return P.H.useInsertionEffect(L,tt)},ne.useLayoutEffect=function(L,tt){return P.H.useLayoutEffect(L,tt)},ne.useMemo=function(L,tt){return P.H.useMemo(L,tt)},ne.useOptimistic=function(L,tt){return P.H.useOptimistic(L,tt)},ne.useReducer=function(L,tt,xt){return P.H.useReducer(L,tt,xt)},ne.useRef=function(L){return P.H.useRef(L)},ne.useState=function(L){return P.H.useState(L)},ne.useSyncExternalStore=function(L,tt,xt){return P.H.useSyncExternalStore(L,tt,xt)},ne.useTransition=function(){return P.H.useTransition()},ne.version="19.2.4",ne}var y0;function Eh(){return y0||(y0=1,Qf.exports=My()),Qf.exports}var Nn=Eh();const by=Uv(Nn);var Jf={exports:{}},Do={},$f={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function Ey(){return S0||(S0=1,(function(o){function e(z,Z){var q=z.length;z.push(Z);t:for(;0<q;){var St=q-1>>>1,Et=z[St];if(0<l(Et,Z))z[St]=Z,z[q]=Et,q=St;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],q=z.pop();if(q!==Z){z[0]=q;t:for(var St=0,Et=z.length,L=Et>>>1;St<L;){var tt=2*(St+1)-1,xt=z[tt],Y=tt+1,ft=z[Y];if(0>l(xt,q))Y<Et&&0>l(ft,xt)?(z[St]=ft,z[Y]=q,St=Y):(z[St]=xt,z[tt]=q,St=tt);else if(Y<Et&&0>l(ft,q))z[St]=ft,z[Y]=q,St=Y;else break t}}return Z}function l(z,Z){var q=z.sortIndex-Z.sortIndex;return q!==0?q:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,x=null,y=3,b=!1,A=!1,R=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var Z=i(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=z)s(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=i(m)}}function it(z){if(R=!1,N(z),!A)if(i(p)!==null)A=!0,G||(G=!0,ut());else{var Z=i(m);Z!==null&&ht(it,Z.startTime-z)}}var G=!1,P=-1,K=5,D=-1;function w(){return S?!0:!(o.unstable_now()-D<K)}function H(){if(S=!1,G){var z=o.unstable_now();D=z;var Z=!0;try{t:{A=!1,R&&(R=!1,F(P),P=-1),b=!0;var q=y;try{e:{for(N(z),x=i(p);x!==null&&!(x.expirationTime>z&&w());){var St=x.callback;if(typeof St=="function"){x.callback=null,y=x.priorityLevel;var Et=St(x.expirationTime<=z);if(z=o.unstable_now(),typeof Et=="function"){x.callback=Et,N(z),Z=!0;break e}x===i(p)&&s(p),N(z)}else s(p);x=i(p)}if(x!==null)Z=!0;else{var L=i(m);L!==null&&ht(it,L.startTime-z),Z=!1}}break t}finally{x=null,y=q,b=!1}Z=void 0}}finally{Z?ut():G=!1}}}var ut;if(typeof O=="function")ut=function(){O(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lt=rt.port2;rt.port1.onmessage=H,ut=function(){lt.postMessage(null)}}else ut=function(){v(H,0)};function ht(z,Z){P=v(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var q=y;y=Z;try{return z()}finally{y=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=y;y=z;try{return Z()}finally{y=q}},o.unstable_scheduleCallback=function(z,Z,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,z){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=q+Et,z={id:_++,callback:Z,priorityLevel:z,startTime:q,expirationTime:Et,sortIndex:-1},q>St?(z.sortIndex=q,e(m,z),i(p)===null&&z===i(m)&&(R?(F(P),P=-1):R=!0,ht(it,q-St))):(z.sortIndex=Et,e(p,z),A||b||(A=!0,G||(G=!0,ut()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var Z=y;return function(){var q=y;y=Z;try{return z.apply(this,arguments)}finally{y=q}}}})(td)),td}var M0;function Ty(){return M0||(M0=1,$f.exports=Ey()),$f.exports}var ed={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Ay(){if(b0)return bn;b0=1;var o=Eh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,_)},bn.flushSync=function(p){var m=d.T,_=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=_,s.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=h(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:b}):_==="script"&&s.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=h(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},bn.requestFormReset=function(p){s.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},bn.useFormStatus=function(){return d.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var E0;function Cy(){if(E0)return ed.exports;E0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=Ay(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function wy(){if(T0)return Do;T0=1;var o=Ty(),e=Eh(),i=Cy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,r=f;break}if(E===r){g=!0,r=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,r=c;break}if(E===r){g=!0,r=f,a=c;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case it:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ht=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function L(t){return{current:t}}function tt(t){0>Et||(t.current=St[Et],St[Et]=null,Et--)}function xt(t,n){Et++,St[Et]=t.current,t.current=n}var Y=L(null),ft=L(null),bt=L(null),yt=L(null);function Bt(t,n){switch(xt(bt,n),xt(ft,t),xt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Y),xt(Y,t)}function zt(){tt(Y),tt(ft),tt(bt)}function ee(t){t.memoizedState!==null&&xt(yt,t);var n=Y.current,a=Gg(n,t.type);n!==a&&(xt(ft,t),xt(Y,a))}function Ce(t){ft.current===t&&(tt(Y),tt(ft)),yt.current===t&&(tt(yt),Ao._currentValue=q)}var re,Xe;function X(t){if(re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||"",Xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+re+t+Xe}var yn=!1;function ue(t,n){if(!t||yn)return"";yn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var et=ot}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ot){et=ot}t.call(vt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),$=E.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===$.length)for(r=B.length-1,c=$.length-1;1<=r&&0<=c&&B[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==$[c]){var dt=`
`+B[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{yn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?X(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return X(t.type);case 16:return X("Lazy");case 13:return t.child!==n&&n!==null?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return X("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Re=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,nt=o.unstable_requestPaint,pt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,me=o.unstable_IdlePriority,At=o.log,Ft=o.unstable_setDisableYieldValue,Yt=null,Xt=null;function Ot(t){if(typeof At=="function"&&Ft(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Yt,t)}catch{}}var Jt=Math.clz32?Math.clz32:V,ae=Math.log,Le=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(ae(t)/Le|0)|0}var Ct=256,ct=262144,_t=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=wt(r):(g&=E,g!==0?c=wt(g):a||(a=E&~t,a!==0&&(c=wt(a))))):(E=r&~f,E!==0?c=wt(E):g!==0?c=wt(g):a||(a=r&~t,a!==0&&(c=wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function hn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Jt(a),vt=1<<dt;E[dt]=0,B[dt]=-1;var et=$[dt];if(et!==null)for($[dt]=null,dt=0;dt<et.length;dt++){var ot=et[dt];ot!==null&&(ot.lane&=-536870913)}a&=~vt}r!==0&&Fr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Fr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Jt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ir(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Jt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function bi(t,n){var a=n&-n;return a=(a&42)!==0?1:qa(a),(a&(t.suspendedLanes|n))!==0?0:a}function qa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function As(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hr(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:u0(t.type))}function Ya(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var di=Math.random().toString(36).slice(2),Ye="__reactFiber$"+di,pn="__reactProps$"+di,Oi="__reactContainer$"+di,Gr="__reactEvents$"+di,kc="__reactListeners$"+di,jc="__reactHandles$"+di,C="__reactResources$"+di,k="__reactMarker$"+di;function st(t){delete t[Ye],delete t[pn],delete t[Gr],delete t[kc],delete t[jc]}function at(t){var n=t[Ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[Ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yg(t);t!==null;){if(a=t[Ye])return a;t=Yg(t)}return n}t=a,a=t.parentNode}return null}function j(t){if(t=t[Ye]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Tt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Rt(t){var n=t[C];return n||(n=t[C]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Nt(t){t[k]=!0}var Gt=new Set,te={};function Qt(t,n){It(t,n),It(t+"Capture",n)}function It(t,n){for(te[t]=n,t=0;t<n.length;t++)Gt.add(n[t])}var ye=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ne={},Oe={};function Sn(t){return Re.call(Oe,t)?!0:Re.call(Ne,t)?!1:ye.test(t)?Oe[t]=!0:(Ne[t]=!0,!1)}function _e(t,n,a){if(Sn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Vt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function rn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Un(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ua(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function mn(t){if(!t._valueTracker){var n=Un(t)?"checked":"value";t._valueTracker=ua(t,n,""+t[n])}}function fa(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Un(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function we(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qn=/[\n"\\]/g;function un(t){return t.replace(Qn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,r,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ie(n)):t.value!==""+ie(n)&&(t.value=""+ie(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Jn(t,g,ie(n)):a!=null?Jn(t,g,ie(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ie(E):t.removeAttribute("name")}function hi(t,n,a,r,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){mn(t);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),mn(t)}function Jn(t,n,a){n==="number"&&we(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function zi(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function zh(t,n,a){if(n!=null&&(n=""+ie(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ie(a):""}function Ph(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ie(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),mn(t)}function Cs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var m_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||m_.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Bh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Bh(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(t){return v_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Wc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ws=null,Rs=null;function Ih(t){var n=j(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[pn]||null;if(!c)throw Error(s(90));Mn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&fa(r)}break t;case"textarea":zh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&zi(t,!!a.multiple,n,!1)}}}var Yc=!1;function Hh(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var r=t(n);return r}finally{if(Yc=!1,(ws!==null||Rs!==null)&&(Ol(),ws&&(n=ws,t=Rs,Rs=ws=null,Ih(n),t)))for(n=0;n<t.length;n++)Ih(t[n])}}function Vr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Bi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Zc=!1}var da=null,Kc=null,Yo=null;function Gh(){if(Yo)return Yo;var t,n=Kc,a=n.length,r,c="value"in da?da.value:da.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Yo=c.slice(t,1<r?1-r:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Vh(){return!1}function Ln(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Vh,this.isPropagationStopped=Vh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Ln(Za),jr=x({},Za,{view:0,detail:0}),__=Ln(jr),Qc,Jc,Xr,Jo=x({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Qc=t.screenX-Xr.screenX,Jc=t.screenY-Xr.screenY):Jc=Qc=0,Xr=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),kh=Ln(Jo),x_=x({},Jo,{dataTransfer:0}),y_=Ln(x_),S_=x({},jr,{relatedTarget:0}),$c=Ln(S_),M_=x({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=Ln(M_),E_=x({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=Ln(E_),A_=x({},Za,{data:0}),jh=Ln(A_),C_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=R_[t])?!!n[t]:!1}function tu(){return N_}var D_=x({},jr,{key:function(t){if(t.key){var n=C_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U_=Ln(D_),L_=x({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Ln(L_),O_=x({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),z_=Ln(O_),P_=x({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=Ln(P_),F_=x({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I_=Ln(F_),H_=x({},Za,{newState:0,oldState:0}),G_=Ln(H_),V_=[9,13,27,32],eu=Bi&&"CompositionEvent"in window,Wr=null;Bi&&"documentMode"in document&&(Wr=document.documentMode);var k_=Bi&&"TextEvent"in window&&!Wr,Wh=Bi&&(!eu||Wr&&8<Wr&&11>=Wr),qh=" ",Yh=!1;function Zh(t,n){switch(t){case"keyup":return V_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function j_(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return t=n.data,t===qh&&Yh?null:t;default:return null}}function X_(t,n){if(Ns)return t==="compositionend"||!eu&&Zh(t,n)?(t=Gh(),Yo=Kc=da=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!W_[t.type]:n==="textarea"}function Jh(t,n,a,r){ws?Rs?Rs.push(r):Rs=[r]:ws=r,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function q_(t){Og(t,0)}function $o(t){var n=Tt(t);if(fa(n))return t}function $h(t,n){if(t==="change")return n}var tp=!1;if(Bi){var nu;if(Bi){var iu="oninput"in document;if(!iu){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),iu=typeof ep.oninput=="function"}nu=iu}else nu=!1;tp=nu&&(!document.documentMode||9<document.documentMode)}function np(){qr&&(qr.detachEvent("onpropertychange",ip),Yr=qr=null)}function ip(t){if(t.propertyName==="value"&&$o(Yr)){var n=[];Jh(n,Yr,t,qc(t)),Hh(q_,n)}}function Y_(t,n,a){t==="focusin"?(np(),qr=n,Yr=a,qr.attachEvent("onpropertychange",ip)):t==="focusout"&&np()}function Z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Yr)}function K_(t,n){if(t==="click")return $o(n)}function Q_(t,n){if(t==="input"||t==="change")return $o(n)}function J_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:J_;function Zr(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Re.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,n){var a=ap(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ap(a)}}function rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=we(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=we(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $_=Bi&&"documentMode"in document&&11>=document.documentMode,Ds=null,su=null,Kr=null,ru=!1;function lp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Ds==null||Ds!==we(r)||(r=Ds,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=Gl(su,"onSelect"),0<r.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ds)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Us={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},ou={},cp={};Bi&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Qa(t){if(ou[t])return ou[t];if(!Us[t])return t;var n=Us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cp)return ou[t]=n[a];return t}var up=Qa("animationend"),fp=Qa("animationiteration"),dp=Qa("animationstart"),tx=Qa("transitionrun"),ex=Qa("transitionstart"),nx=Qa("transitioncancel"),hp=Qa("transitionend"),pp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function pi(t,n){pp.set(t,n),Qt(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$n=[],Ls=0,cu=0;function el(){for(var t=Ls,n=cu=Ls=0;n<t;){var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&mp(a,c,f)}}function nl(t,n,a,r){$n[Ls++]=t,$n[Ls++]=n,$n[Ls++]=a,$n[Ls++]=r,cu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uu(t,n,a,r){return nl(t,n,a,r),il(t)}function Ja(t,n){return nl(t,null,null,n),il(t)}function mp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function il(t){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Os={};function ix(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,r){return new ix(t,n,a,r)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")fu(t)&&(g=1);else if(typeof t=="string")g=ly(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Vn(31,a,n,c),t.elementType=D,t.lanes=f,t;case R:return $a(a.children,c,f,n);case S:g=8,c|=24;break;case v:return t=Vn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case it:return t=Vn(13,a,n,c),t.elementType=it,t.lanes=f,t;case G:return t=Vn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case F:g=9;break t;case N:g=11;break t;case P:g=14;break t;case K:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Vn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function $a(t,n,a,r){return t=Vn(7,t,r,n),t.lanes=a,t}function du(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function vp(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function hu(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _p=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=_p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},_p.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var zs=[],Ps=0,sl=null,Qr=0,ei=[],ni=0,ha=null,Ei=1,Ti="";function Ii(t,n){zs[Ps++]=Qr,zs[Ps++]=sl,sl=t,Qr=n}function xp(t,n,a){ei[ni++]=Ei,ei[ni++]=Ti,ei[ni++]=ha,ha=t;var r=Ei;t=Ti;var c=32-Jt(r)-1;r&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ei=1<<32-Jt(n)+c|a<<c|r,Ti=f+t}else Ei=1<<f|a<<c|r,Ti=t}function pu(t){t.return!==null&&(Ii(t,1),xp(t,1,0))}function mu(t){for(;t===sl;)sl=zs[--Ps],zs[Ps]=null,Qr=zs[--Ps],zs[Ps]=null;for(;t===ha;)ha=ei[--ni],ei[ni]=null,Ti=ei[--ni],ei[ni]=null,Ei=ei[--ni],ei[ni]=null}function yp(t,n){ei[ni++]=Ei,ei[ni++]=Ti,ei[ni++]=ha,Ei=n.id,Ti=n.overflow,ha=t}var gn=null,Ve=null,xe=!1,pa=null,ii=!1,gu=Error(s(519));function ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(ti(n,t)),gu}function Sp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ye]=t,n[pn]=r,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)he(So[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),hi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Ph(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Fg(n.textContent,a)?(r.popover!=null&&(he("beforetoggle",n),he("toggle",n)),r.onScroll!=null&&he("scroll",n),r.onScrollEnd!=null&&he("scrollend",n),r.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ma(t,!0)}function Mp(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:gn=gn.return}}function Bs(t){if(t!==gn)return!1;if(!xe)return Mp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&Ve&&ma(t),Mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=qg(t)}else n===27?(n=Ve,Ra(t.type)?(t=Hf,Hf=null,Ve=t):Ve=n):Ve=gn?si(t.stateNode.nextSibling):null;return!0}function ts(){Ve=gn=null,xe=!1}function vu(){var t=pa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),pa=null),t}function Jr(t){pa===null?pa=[t]:pa.push(t)}var _u=L(null),es=null,Hi=null;function ga(t,n,a){xt(_u,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=_u.current,tt(_u)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),xu(f.return,a,t),r||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),xu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Fs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=c.type;Gn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===yt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}c=c.return}t!==null&&yu(n,t,a,r),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ns(t){es=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return bp(es,t)}function ol(t,n){return es===null&&ns(t),bp(t,n)}function bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(s(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,rx=o.unstable_NormalPriority,$e={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new ax,data:new Map,refCount:0}}function $r(t){t.refCount--,t.refCount===0&&sx(rx,function(){t.controller.abort()})}var to=null,Mu=0,Is=0,Hs=null;function ox(t,n){if(to===null){var a=to=[];Mu=0,Is=Af(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Mu++,n.then(Ep,Ep),n}function Ep(){if(--Mu===0&&to!==null){Hs!==null&&(Hs.status="fulfilled");var t=to;to=null,Is=0,Hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Tp=z.S;z.S=function(t,n){lg=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(t,n),Tp!==null&&Tp(t,n)};var is=L(null);function bu(){var t=is.current;return t!==null?t:Ge.pooledCache}function ll(t,n){n===null?xt(is,is.current):xt(is,n.pool)}function Ap(){var t=bu();return t===null?null:{parent:$e._currentValue,pool:t}}var Gs=Error(s(460)),Eu=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function Cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t}throw ss=n,Gs}}function as(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Gs):a}}var ss=null;function Rp(){if(ss===null)throw Error(s(459));var t=ss;return ss=null,t}function Np(t){if(t===Gs||t===cl)throw Error(s(483))}var Vs=null,eo=0;function fl(t){var n=eo;return eo+=1,Vs===null&&(Vs=[]),wp(Vs,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(W,I){if(t){var J=W.deletions;J===null?(W.deletions=[I],W.flags|=16):J.push(I)}}function a(W,I){if(!t)return null;for(;I!==null;)n(W,I),I=I.sibling;return null}function r(W){for(var I=new Map;W!==null;)W.key!==null?I.set(W.key,W):I.set(W.index,W),W=W.sibling;return I}function c(W,I){return W=Fi(W,I),W.index=0,W.sibling=null,W}function f(W,I,J){return W.index=J,t?(J=W.alternate,J!==null?(J=J.index,J<I?(W.flags|=67108866,I):J):(W.flags|=67108866,I)):(W.flags|=1048576,I)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,I,J,mt){return I===null||I.tag!==6?(I=du(J,W.mode,mt),I.return=W,I):(I=c(I,J),I.return=W,I)}function B(W,I,J,mt){var Wt=J.type;return Wt===R?dt(W,I,J.props.children,mt,J.key):I!==null&&(I.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===K&&as(Wt)===I.type)?(I=c(I,J.props),no(I,J),I.return=W,I):(I=al(J.type,J.key,J.props,null,W.mode,mt),no(I,J),I.return=W,I)}function $(W,I,J,mt){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=hu(J,W.mode,mt),I.return=W,I):(I=c(I,J.children||[]),I.return=W,I)}function dt(W,I,J,mt,Wt){return I===null||I.tag!==7?(I=$a(J,W.mode,mt,Wt),I.return=W,I):(I=c(I,J),I.return=W,I)}function vt(W,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=du(""+I,W.mode,J),I.return=W,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case b:return J=al(I.type,I.key,I.props,null,W.mode,J),no(J,I),J.return=W,J;case A:return I=hu(I,W.mode,J),I.return=W,I;case K:return I=as(I),vt(W,I,J)}if(ht(I)||ut(I))return I=$a(I,W.mode,J,null),I.return=W,I;if(typeof I.then=="function")return vt(W,fl(I),J);if(I.$$typeof===O)return vt(W,ol(W,I),J);dl(W,I)}return null}function et(W,I,J,mt){var Wt=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Wt!==null?null:E(W,I,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Wt?B(W,I,J,mt):null;case A:return J.key===Wt?$(W,I,J,mt):null;case K:return J=as(J),et(W,I,J,mt)}if(ht(J)||ut(J))return Wt!==null?null:dt(W,I,J,mt,null);if(typeof J.then=="function")return et(W,I,fl(J),mt);if(J.$$typeof===O)return et(W,I,ol(W,J),mt);dl(W,J)}return null}function ot(W,I,J,mt,Wt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return W=W.get(J)||null,E(I,W,""+mt,Wt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case b:return W=W.get(mt.key===null?J:mt.key)||null,B(I,W,mt,Wt);case A:return W=W.get(mt.key===null?J:mt.key)||null,$(I,W,mt,Wt);case K:return mt=as(mt),ot(W,I,J,mt,Wt)}if(ht(mt)||ut(mt))return W=W.get(J)||null,dt(I,W,mt,Wt,null);if(typeof mt.then=="function")return ot(W,I,J,fl(mt),Wt);if(mt.$$typeof===O)return ot(W,I,J,ol(I,mt),Wt);dl(I,mt)}return null}function Ht(W,I,J,mt){for(var Wt=null,Ee=null,kt=I,oe=I=0,ve=null;kt!==null&&oe<J.length;oe++){kt.index>oe?(ve=kt,kt=null):ve=kt.sibling;var Te=et(W,kt,J[oe],mt);if(Te===null){kt===null&&(kt=ve);break}t&&kt&&Te.alternate===null&&n(W,kt),I=f(Te,I,oe),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te,kt=ve}if(oe===J.length)return a(W,kt),xe&&Ii(W,oe),Wt;if(kt===null){for(;oe<J.length;oe++)kt=vt(W,J[oe],mt),kt!==null&&(I=f(kt,I,oe),Ee===null?Wt=kt:Ee.sibling=kt,Ee=kt);return xe&&Ii(W,oe),Wt}for(kt=r(kt);oe<J.length;oe++)ve=ot(kt,W,oe,J[oe],mt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?oe:ve.key),I=f(ve,I,oe),Ee===null?Wt=ve:Ee.sibling=ve,Ee=ve);return t&&kt.forEach(function(Oa){return n(W,Oa)}),xe&&Ii(W,oe),Wt}function Kt(W,I,J,mt){if(J==null)throw Error(s(151));for(var Wt=null,Ee=null,kt=I,oe=I=0,ve=null,Te=J.next();kt!==null&&!Te.done;oe++,Te=J.next()){kt.index>oe?(ve=kt,kt=null):ve=kt.sibling;var Oa=et(W,kt,Te.value,mt);if(Oa===null){kt===null&&(kt=ve);break}t&&kt&&Oa.alternate===null&&n(W,kt),I=f(Oa,I,oe),Ee===null?Wt=Oa:Ee.sibling=Oa,Ee=Oa,kt=ve}if(Te.done)return a(W,kt),xe&&Ii(W,oe),Wt;if(kt===null){for(;!Te.done;oe++,Te=J.next())Te=vt(W,Te.value,mt),Te!==null&&(I=f(Te,I,oe),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te);return xe&&Ii(W,oe),Wt}for(kt=r(kt);!Te.done;oe++,Te=J.next())Te=ot(kt,W,oe,Te.value,mt),Te!==null&&(t&&Te.alternate!==null&&kt.delete(Te.key===null?oe:Te.key),I=f(Te,I,oe),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te);return t&&kt.forEach(function(xy){return n(W,xy)}),xe&&Ii(W,oe),Wt}function Be(W,I,J,mt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:t:{for(var Wt=J.key;I!==null;){if(I.key===Wt){if(Wt=J.type,Wt===R){if(I.tag===7){a(W,I.sibling),mt=c(I,J.props.children),mt.return=W,W=mt;break t}}else if(I.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===K&&as(Wt)===I.type){a(W,I.sibling),mt=c(I,J.props),no(mt,J),mt.return=W,W=mt;break t}a(W,I);break}else n(W,I);I=I.sibling}J.type===R?(mt=$a(J.props.children,W.mode,mt,J.key),mt.return=W,W=mt):(mt=al(J.type,J.key,J.props,null,W.mode,mt),no(mt,J),mt.return=W,W=mt)}return g(W);case A:t:{for(Wt=J.key;I!==null;){if(I.key===Wt)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){a(W,I.sibling),mt=c(I,J.children||[]),mt.return=W,W=mt;break t}else{a(W,I);break}else n(W,I);I=I.sibling}mt=hu(J,W.mode,mt),mt.return=W,W=mt}return g(W);case K:return J=as(J),Be(W,I,J,mt)}if(ht(J))return Ht(W,I,J,mt);if(ut(J)){if(Wt=ut(J),typeof Wt!="function")throw Error(s(150));return J=Wt.call(J),Kt(W,I,J,mt)}if(typeof J.then=="function")return Be(W,I,fl(J),mt);if(J.$$typeof===O)return Be(W,I,ol(W,J),mt);dl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(a(W,I.sibling),mt=c(I,J),mt.return=W,W=mt):(a(W,I),mt=du(J,W.mode,mt),mt.return=W,W=mt),g(W)):a(W,I)}return function(W,I,J,mt){try{eo=0;var Wt=Be(W,I,J,mt);return Vs=null,Wt}catch(kt){if(kt===Gs||kt===cl)throw kt;var Ee=Vn(29,kt,null,W.mode);return Ee.lanes=mt,Ee.return=W,Ee}finally{}}}var rs=Dp(!0),Up=Dp(!1),va=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=il(t),mp(t,null,a),n}return nl(t,r,n,a),il(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}function Cu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var wu=!1;function ao(){if(wu){var t=Hs;if(t!==null)throw t}}function so(t,n,a,r){wu=!1;var c=t.updateQueue;va=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,$=B.next;B.next=null,g===null?f=$:g.next=$,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==g&&(E===null?dt.firstBaseUpdate=$:E.next=$,dt.lastBaseUpdate=B))}if(f!==null){var vt=c.baseState;g=0,dt=$=B=null,E=f;do{var et=E.lane&-536870913,ot=et!==E.lane;if(ot?(ge&et)===et:(r&et)===et){et!==0&&et===Is&&(wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ht=t,Kt=E;et=n;var Be=a;switch(Kt.tag){case 1:if(Ht=Kt.payload,typeof Ht=="function"){vt=Ht.call(Be,vt,et);break t}vt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Kt.payload,et=typeof Ht=="function"?Ht.call(Be,vt,et):Ht,et==null)break t;vt=x({},vt,et);break t;case 2:va=!0}}et=E.callback,et!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?($=dt=ot,B=vt):dt=dt.next=ot,g|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);dt===null&&(B=vt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ea|=g,t.lanes=g,t.memoizedState=vt}}function Lp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lp(a[t],n)}var ks=L(null),hl=L(0);function zp(t,n){t=Ki,xt(hl,t),xt(ks,n),Ki=t|n.baseLanes}function Ru(){xt(hl,Ki),xt(ks,ks.current)}function Nu(){Ki=hl.current,tt(ks),tt(hl)}var kn=L(null),ai=null;function ya(t){var n=t.alternate;xt(Qe,Qe.current&1),xt(kn,t),ai===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(ai=t)}function Du(t){xt(Qe,Qe.current),xt(kn,t),ai===null&&(ai=t)}function Pp(t){t.tag===22?(xt(Qe,Qe.current),xt(kn,t),ai===null&&(ai=t)):Sa()}function Sa(){xt(Qe,Qe.current),xt(kn,kn.current)}function jn(t){tt(kn),ai===t&&(ai=null),tt(Qe)}var Qe=L(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,se=null,ze=null,tn=null,ml=!1,js=!1,os=!1,gl=0,ro=0,Xs=null,cx=0;function Ze(){throw Error(s(321))}function Uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function Lu(t,n,a,r,c,f){return Vi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?xm:Yu,os=!1,f=a(r,c),os=!1,js&&(f=Fp(n,a,r,c)),Bp(t),f}function Bp(t){z.H=co;var n=ze!==null&&ze.next!==null;if(Vi=0,tn=ze=se=null,ml=!1,ro=0,Xs=null,n)throw Error(s(300));t===null||en||(t=t.dependencies,t!==null&&rl(t)&&(en=!0))}function Fp(t,n,a,r){se=t;var c=0;do{if(js&&(Xs=null),ro=0,js=!1,25<=c)throw Error(s(301));if(c+=1,tn=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=ym,f=n(a,r)}while(js);return f}function ux(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(se.flags|=1024),n}function Ou(){var t=gl!==0;return gl=0,t}function zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}Vi=0,tn=ze=se=null,js=!1,ro=gl=0,Xs=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?se.memoizedState=tn=t:tn=tn.next=t,tn}function Je(){if(ze===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=tn===null?se.memoizedState:tn.next;if(n!==null)tn=n,ze=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},tn===null?se.memoizedState=tn=t:tn=tn.next=t}return tn}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=ro;return ro+=1,Xs===null&&(Xs=[]),t=wp(Xs,t,n),n=se,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?xm:Yu),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===O)return vn(t)}throw Error(s(438,String(t)))}function Bu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=Je();return Fu(n,ze,t)}function Fu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,B=null,$=n,dt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(ge&vt)===vt:(Vi&vt)===vt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Is&&(dt=!0);else if((Vi&et)===et){$=$.next,et===Is&&(dt=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(E=B=vt,g=f):B=B.next=vt,se.lanes|=et,Ea|=et;vt=$.action,os&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else et={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(E=B=et,g=f):B=B.next=et,se.lanes|=vt,Ea|=vt;$=$.next}while($!==null&&$!==n);if(B===null?g=f:B.next=E,!Gn(f,t.memoizedState)&&(en=!0,dt&&(a=Hs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Iu(t){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Gn(f,n.memoizedState)||(en=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Ip(t,n,a){var r=se,c=Je(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Gn((ze||c).memoizedState,a);if(g&&(c.memoizedState=a,en=!0),c=c.queue,Vu(Vp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||tn!==null&&tn.memoizedState.tag&1){if(r.flags|=2048,Ws(9,{destroy:void 0},Gp.bind(null,r,c,a,n),null),Ge===null)throw Error(s(349));f||(Vi&127)!==0||Hp(r,n,a)}return a}function Hp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=vl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gp(t,n,a,r){n.value=a,n.getSnapshot=r,kp(n)&&jp(t)}function Vp(t,n,a){return a(function(){kp(n)&&jp(t)})}function kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function jp(t){var n=Ja(t,2);n!==null&&Fn(n,t,2)}function Hu(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),os){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Xp(t,n,a,r){return t.baseState=a,Fu(t,ze,typeof r=="function"?r:ki)}function fx(t,n,a,r,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var E=a(c,r),B=z.S;B!==null&&B(g,E),qp(t,n,E)}catch($){Gu(t,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,r),qp(t,n,f)}catch($){Gu(t,n,$)}}function qp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Yp(t,n,r)},function(r){return Gu(t,n,r)}):Yp(t,n,a)}function Yp(t,n,a){n.status="fulfilled",n.value=a,Zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wp(t,a)))}function Gu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==r)}t.action=null}function Zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Kp(t,n){return n}function Qp(t,n){if(xe){var a=Ge.formState;if(a!==null){t:{var r=se;if(xe){if(Ve){e:{for(var c=Ve,f=ii;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ve=si(c.nextSibling),r=c.data==="F!";break t}}ma(r)}r=!1}r&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=r,a=gm.bind(null,se,r),r.dispatch=a,r=Hu(!1),f=qu.bind(null,se,!1,r.queue),r=Cn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=fx.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Jp(t){var n=Je();return $p(n,ze,t)}function $p(t,n,a){if(n=Fu(t,n,Kp)[0],t=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(g){throw g===Gs?cl:g}else r=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Ws(9,{destroy:void 0},dx.bind(null,c,a),null)),[r,f,t]}function dx(t,n){t.action=n}function tm(t){var n=Je(),a=ze;if(a!==null)return $p(n,a,t);Je(),n=n.memoizedState,a=Je();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ws(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=vl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function em(){return Je().memoizedState}function yl(t,n,a,r){var c=Cn();se.flags|=t,c.memoizedState=Ws(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sl(t,n,a,r){var c=Je();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Uu(r,ze.memoizedState.deps)?c.memoizedState=Ws(n,f,a,r):(se.flags|=t,c.memoizedState=Ws(1|n,f,a,r))}function nm(t,n){yl(8390656,8,t,n)}function Vu(t,n){Sl(2048,8,t,n)}function hx(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=vl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function im(t){var n=Je().memoizedState;return hx({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function am(t,n){return Sl(4,2,t,n)}function sm(t,n){return Sl(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function om(t,n,a){a=a!=null?a.concat([t]):null,Sl(4,4,rm.bind(null,n,t),a)}function ku(){}function lm(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function cm(t,n){var a=Je();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uu(n,r[1]))return r[0];if(r=t(),os){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function ju(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ug(),se.lanes|=t,Ea|=t,a)}function um(t,n,a,r){return Gn(a,n)?a:ks.current!==null?(t=ju(t,a,r),Gn(t,n)||(en=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(ge&261930)===0?(en=!0,t.memoizedState=a):(t=ug(),se.lanes|=t,Ea|=t,n)}function fm(t,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=z.T,E={};z.T=E,qu(t,!1,n,a);try{var B=c(),$=z.S;if($!==null&&$(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=lx(B,r);lo(t,n,dt,qn(t))}else lo(t,n,r,qn(t))}catch(vt){lo(t,n,{then:function(){},status:"rejected",reason:vt},qn())}finally{Z.p=f,g!==null&&E.types!==null&&(g.types=E.types),z.T=g}}function px(){}function Xu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=dm(t).queue;fm(t,c,n,q,a===null?px:function(){return hm(t),a(r)})}function dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hm(t){var n=dm(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},qn())}function Wu(){return vn(Ao)}function pm(){return Je().memoizedState}function mm(){return Je().memoizedState}function mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=_a(a);var r=xa(n,t,a);r!==null&&(Fn(r,n,a),io(r,n,a)),n={cache:Su()},t.payload=n;return}n=n.return}}function gx(t,n,a){var r=qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?vm(n,a):(a=uu(t,n,a,r),a!==null&&(Fn(a,t,r),_m(a,n,r)))}function gm(t,n,a){var r=qn();lo(t,n,a,r)}function lo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))vm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Gn(E,g))return nl(t,n,c,0),Ge===null&&el(),!1}catch{}finally{}if(a=uu(t,n,c,r),a!==null)return Fn(a,t,r),_m(a,n,r),!0}return!1}function qu(t,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=uu(t,a,r,2),n!==null&&Fn(n,t,2)}function Ml(t){var n=t.alternate;return t===se||n!==null&&n===se}function vm(t,n){js=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _m(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ir(t,a)}}var co={readContext:vn,use:_l,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};co.useEffectEvent=Ze;var xm={readContext:vn,use:_l,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:vn,useEffect:nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,yl(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return yl(4194308,4,t,n)},useInsertionEffect:function(t,n){yl(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var r=t();if(os){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Cn();if(a!==void 0){var c=a(n);if(os){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=gx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=gm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(t,n){var a=Cn();return ju(a,t,n)},useTransition:function(){var t=Hu(!1);return t=fm.bind(null,se,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Cn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(ge&127)!==0||Hp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Vp.bind(null,r,f,t),[t]),r.flags|=2048,Ws(9,{destroy:void 0},Gp.bind(null,r,f,a,n),null),a},useId:function(){var t=Cn(),n=Ge.identifierPrefix;if(xe){var a=Ti,r=Ei;a=(r&~(1<<32-Jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bu,useCacheRefresh:function(){return Cn().memoizedState=mx.bind(null,se)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:vn,use:_l,useCallback:lm,useContext:vn,useEffect:Vu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:xl,useRef:em,useState:function(){return xl(ki)},useDebugValue:ku,useDeferredValue:function(t,n){var a=Je();return um(a,ze.memoizedState,t,n)},useTransition:function(){var t=xl(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Ip,useId:pm,useHostTransitionStatus:Wu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=Je();return Xp(a,ze,t,n)},useMemoCache:Bu,useCacheRefresh:mm};Yu.useEffectEvent=im;var ym={readContext:vn,use:_l,useCallback:lm,useContext:vn,useEffect:Vu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:Iu,useRef:em,useState:function(){return Iu(ki)},useDebugValue:ku,useDeferredValue:function(t,n){var a=Je();return ze===null?ju(a,t,n):um(a,ze.memoizedState,t,n)},useTransition:function(){var t=Iu(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Ip,useId:pm,useHostTransitionStatus:Wu,useFormState:tm,useActionState:tm,useOptimistic:function(t,n){var a=Je();return ze!==null?Xp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:mm};ym.useEffectEvent=im;function Zu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=qn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,r),n!==null&&(Fn(n,t,r),io(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=qn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,r),n!==null&&(Fn(n,t,r),io(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=xa(t,r,a),n!==null&&(Fn(n,t,a),io(n,t,a))}};function Sm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(c,f):!0}function Mm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function ls(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function bm(t){tl(t)}function Em(t){console.error(t)}function Tm(t){tl(t)}function bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Am(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(t,n)},a}function Cm(t){return t=_a(t),t.tag=3,t}function wm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Am(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Am(n,a,r),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function vx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?zl():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(t,r,c)),!1;case 22:return a.flags|=65536,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(t,r,c)),!1}throw Error(s(435,a.tag))}return bf(t,r,c),zl(),!1}if(xe)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),Jr(ti(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),Jr(ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ti(r,a),c=Qu(t.stateNode,r,c),Cu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),_o===null?_o=[f]:_o.push(f),Ke!==4&&(Ke=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,r,t),Cu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cm(c),wm(c,t,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),en=!1;function _n(t,n,a,r){n.child=t===null?Up(n,null,a,r):rs(n,t.child,a,r)}function Rm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return ns(n),r=Lu(t,n,a,g,f,c),E=Ou(),t!==null&&!en?(zu(t,n,c),ji(t,n,c)):(xe&&E&&pu(n),n.flags|=1,_n(t,n,r,c),n.child)}function Nm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,r,c)):(t=al(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(g,r)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Fi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Zr(f,r)&&t.ref===n.ref)if(en=!1,n.pendingProps=r=f,of(t,c))(t.flags&131072)!==0&&(en=!0);else return n.lanes=t.lanes,ji(t,n,c)}return $u(t,n,a,r,c)}function Um(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Lm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Ru(),Pp(n);else return r=n.lanes=536870912,Lm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ll(n,f.cachePool),zp(n,f),Sa(),n.memoizedState=null):(t!==null&&ll(n,null),Ru(),Sa());return _n(t,n,c,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lm(t,n,a,r,c){var f=bu();return f=f===null?null:{parent:$e._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),Ru(),Pp(n),t!==null&&Fs(t,n,r,!0),n.childLanes=c,null}function El(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Om(t,n,a){return rs(n,t.child,null,a),t=El(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function _x(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=El(n,r),n.lanes=536870912,uo(null,t);if(Du(n),(t=Ve)?(t=Wg(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,gn=n,Ve=null)):t=null,t===null)throw ma(n);return n.lanes=536870912,null}return El(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=Om(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||Fs(t,n,a,!1),c=(a&t.childLanes)!==0,en||c){if(r=Ge,r!==null&&(g=bi(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ja(t,g),Fn(r,t,g),Ju;zl(),n=Om(t,n,a)}else t=f.treeContext,Ve=si(g.nextSibling),gn=n,xe=!0,pa=null,ii=!1,t!==null&&yp(n,t),n=El(n,r),n.flags|=4096;return n}return t=Fi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Tl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,r,c){return ns(n),a=Lu(t,n,a,r,void 0,c),r=Ou(),t!==null&&!en?(zu(t,n,c),ji(t,n,c)):(xe&&r&&pu(n),n.flags|=1,_n(t,n,a,c),n.child)}function zm(t,n,a,r,c,f){return ns(n),n.updateQueue=null,a=Fp(n,r,a,c),Bp(t),r=Ou(),t!==null&&!en?(zu(t,n,f),ji(t,n,f)):(xe&&r&&pu(n),n.flags|=1,_n(t,n,a,f),n.child)}function Pm(t,n,a,r,c){if(ns(n),n.stateNode===null){var f=Os,g=a.contextType;typeof g=="object"&&g!==null&&(f=vn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Tu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?vn(g):Os,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Zu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ku.enqueueReplaceState(f,f.state,null),so(n,r,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=ls(a,E);f.props=B;var $=f.context,dt=a.contextType;g=Os,typeof dt=="object"&&dt!==null&&(g=vn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==g)&&Mm(n,f,r,g),va=!1;var et=n.memoizedState;f.state=et,so(n,r,f,c),ao(),$=n.memoizedState,E||et!==$||va?(typeof vt=="function"&&(Zu(n,a,vt,r),$=n.memoizedState),(B=va||Sm(n,a,B,r,et,$,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=g,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(t,n),g=n.memoizedProps,dt=ls(a,g),f.props=dt,vt=n.pendingProps,et=f.context,$=a.contextType,B=Os,typeof $=="object"&&$!==null&&(B=vn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||et!==B)&&Mm(n,f,r,B),va=!1,et=n.memoizedState,f.state=et,so(n,r,f,c),ao();var ot=n.memoizedState;g!==vt||et!==ot||va||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof E=="function"&&(Zu(n,a,E,r),ot=n.memoizedState),(dt=va||Sm(n,a,dt,r,et,ot,B)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=B,r=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=rs(n,t.child,null,c),n.child=rs(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function Bm(t,n,a,r){return ts(),n.flags|=256,_n(t,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Ap()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function Fm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?ya(n):Sa(),(t=Ve)?(t=Wg(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,gn=n,Ve=null)):t=null,t===null)throw ma(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Sa(),c=n.mode,E=Al({mode:"hidden",children:E},c),r=$a(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,g,a),n.memoizedState=tf,uo(null,r)):(ya(n),af(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),E=r.fallback,c=n.mode,r=Al({mode:"visible",children:r.children},c),E=$a(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,rs(n,t.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,g,a),n.memoizedState=tf,n=uo(null,r));else if(ya(n),If(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var $=g.dgst;g=$,r=Error(s(419)),r.stack="",r.digest=g,Jr({value:r,source:null,stack:null}),n=sf(t,n,a)}else if(en||Fs(t,n,a,!1),g=(a&t.childLanes)!==0,en||g){if(g=Ge,g!==null&&(r=bi(g,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ja(t,r),Fn(g,t,r),Ju;Ff(E)||zl(),n=sf(t,n,a)}else Ff(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ve=si(E.nextSibling),gn=n,xe=!0,pa=null,ii=!1,t!==null&&yp(n,t),n=af(n,r.children),n.flags|=4096);return n}return c?(Sa(),E=r.fallback,c=n.mode,B=t.child,$=B.sibling,r=Fi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,$!==null?E=Fi($,E):(E=$a(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,uo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=ef(a):(c=E.cachePool,c!==null?(B=$e._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Ap(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=nf(t,g,a),n.memoizedState=tf,uo(t.child,r)):(ya(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function sf(t,n,a){return rs(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Im(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function rf(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Hm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=Qe.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,xt(Qe,g),_n(t,n,r,a),r=xe?Qr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,a,n);else if(t.tag===19)Im(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function xx(t,n,a){switch(n.tag){case 3:Bt(n,n.stateNode.containerInfo),ga(n,$e,t.memoizedState.cache),ts();break;case 27:case 5:ee(n);break;case 4:Bt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(t,n,a):(ya(n),t=ji(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Fs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Hm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(Qe,Qe.current),r)break;return null;case 22:return n.lanes=0,Um(t,n,a,n.pendingProps);case 24:ga(n,$e,t.memoizedState.cache)}return ji(t,n,a)}function Gm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)en=!0;else{if(!of(t,a)&&(n.flags&128)===0)return en=!1,xx(t,n,a);en=(t.flags&131072)!==0}else en=!1,xe&&(n.flags&1048576)!==0&&xp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=as(n.elementType),n.type=t,typeof t=="function")fu(t)?(r=ls(t,r),n.tag=1,n=Pm(null,n,t,r,a)):(n.tag=0,n=$u(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Rm(null,n,t,r,a);break t}else if(c===P){n.tag=14,n=Nm(null,n,t,r,a);break t}}throw n=lt(t)||t,Error(s(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ls(r,n.pendingProps),Pm(t,n,r,c,a);case 3:t:{if(Bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),so(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ga(n,$e,r),r!==f.cache&&yu(n,[$e],a,!0),ao(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(t,n,r,a);break t}else if(r!==c){c=ti(Error(s(424)),n),Jr(c),n=Bm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=si(t.firstChild),gn=n,xe=!0,pa=null,ii=!0,a=Up(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ts(),r===c){n=ji(t,n,a);break t}_n(t,n,r,a)}n=n.child}return n;case 26:return Tl(t,n),t===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Vl(bt.current).createElement(a),r[Ye]=n,r[pn]=t,xn(r,a,t),Nt(r),n.stateNode=r):n.memoizedState=Jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&xe&&(r=n.stateNode=Zg(n.type,n.pendingProps,bt.current),gn=n,ii=!0,c=Ve,Ra(n.type)?(Hf=c,Ve=si(r.firstChild)):Ve=c),_n(t,n,n.pendingProps.children,a),Tl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=Ve)&&(r=Zx(r,n.type,n.pendingProps,ii),r!==null?(n.stateNode=r,gn=n,Ve=si(r.firstChild),ii=!1,c=!0):c=!1),c||ma(n)),ee(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,zf(c,f)?r=null:g!==null&&zf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(t,n,ux,null,null,a),Ao._currentValue=c),Tl(t,n),_n(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Ve)&&(a=Kx(a,n.pendingProps,ii),a!==null?(n.stateNode=a,gn=n,Ve=null,t=!0):t=!1),t||ma(n)),null;case 13:return Fm(t,n,a);case 4:return Bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=rs(n,null,r,a):_n(t,n,r,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ga(n,n.type,r.value),_n(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ns(n),c=vn(c),r=r(c),n.flags|=1,_n(t,n,r,a),n.child;case 14:return Nm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return Hm(t,n,a);case 31:return _x(t,n,a);case 22:return Um(t,n,a,n.pendingProps);case 24:return ns(n),r=vn($e),t===null?(c=bu(),c===null&&(c=Ge,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Tu(n),ga(n,$e,c)):((t.lanes&a)!==0&&(Au(t,n),so(n,null,null,a),ao()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,$e,r)):(r=f.cache,ga(n,$e,r),r!==c.cache&&yu(n,[$e],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function lf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(pg())t.flags|=8192;else throw ss=ul,Eu}else t.flags&=-16777217}function Vm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i0(n))if(pg())t.flags|=8192;else throw ss=ul,Eu}function Cl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?sn():536870912,t.lanes|=n,Ks|=n)}function fo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function yx(t,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Gi($e),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(ke(n),Vm(n,f)):(ke(n),lf(n,c,null,r,a))):f?f!==t.memoizedState?(Xi(n),ke(n),Vm(n,f)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),ke(n),lf(n,c,t,r,a)),null;case 27:if(Ce(n),a=bt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}t=Y.current,Bs(n)?Sp(n):(t=Zg(c,r,a),n.stateNode=t,Xi(n))}return ke(n),null;case 5:if(Ce(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return ke(n),null}if(f=Y.current,Bs(n))Sp(n);else{var g=Vl(bt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[Ye]=n,f[pn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(xn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return ke(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=bt.current,Bs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=gn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Fg(t.nodeValue,a)),t||ma(n,!0)}else t=Vl(t).createTextNode(r),t[Ye]=n,n.stateNode=t}return ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Bs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ye]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else a=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Bs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ye]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),ke(n),null);case 4:return zt(),t===null&&Nf(n.stateNode.containerInfo),ke(n),null;case 10:return Gi(n.type),ke(n),null;case 19:if(tt(Qe),r=n.memoizedState,r===null)return ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)fo(r,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,fo(r,!1),t=f.updateQueue,n.updateQueue=t,Cl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gp(a,t),a=a.sibling;return xt(Qe,Qe.current&1|2),xe&&Ii(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&pt()>Ul&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Cl(n,t),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return ke(n),null}else 2*pt()-r.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=pt(),t.sibling=null,a=Qe.current,xt(Qe,c?a&1|2:a&1),xe&&Ii(n,r.treeForkCount),t):(ke(n),null);case 22:case 23:return jn(n),Nu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&tt(is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi($e),ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Sx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi($e),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(Qe),null;case 4:return zt(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),Nu(),t!==null&&tt(is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi($e),null;case 25:return null;default:return null}}function km(t,n){switch(mu(n),n.tag){case 3:Gi($e),zt();break;case 26:case 27:case 5:Ce(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:tt(Qe);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),Nu(),t!==null&&tt(is);break;case 24:Gi($e)}}function ho(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(E){Ue(n,n.return,E)}}function Ma(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var B=a,$=E;try{$()}catch(dt){Ue(c,B,dt)}}}r=r.next}while(r!==f)}}catch(dt){Ue(n,n.return,dt)}}function jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Op(n,a)}catch(r){Ue(t,t.return,r)}}}function Xm(t,n,a){a.props=ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ue(t,n,r)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ue(t,n,c)}}function Ai(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ue(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ue(t,n,c)}else a.current=null}function Wm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ue(t,t.return,c)}}function cf(t,n,a){try{var r=t.stateNode;kx(r,t.type,a,n),r[pn]=n}catch(c){Ue(t,t.return,c)}}function qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function wl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wl(t,n,a),t=t.sibling;t!==null;)wl(t,n,a),t=t.sibling}function Ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);xn(n,r,a),n[Ye]=t,n[pn]=a}catch(f){Ue(t,t.return,f)}}var Wi=!1,nn=!1,df=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function Mx(t,n){if(t=t.containerInfo,Lf=Zl,t=op(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,$=0,dt=0,vt=t,et=null;e:for(;;){for(var ot;vt!==a||c!==0&&vt.nodeType!==3||(E=g+c),vt!==f||r!==0&&vt.nodeType!==3||(B=g+r),vt.nodeType===3&&(g+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)et=vt,vt=ot;for(;;){if(vt===t)break e;if(et===a&&++$===c&&(E=g),et===f&&++dt===r&&(B=g),(ot=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=ot}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},Zl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=ls(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ue(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Km(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&ho(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ue(a,a.return,g)}else{var c=ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ue(a,a.return,g)}}r&64&&jm(a),r&512&&po(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(t,n)}catch(g){Ue(a,a.return,g)}}break;case 27:n===null&&r&4&&Ym(a);case 26:case 5:Yi(t,a),n===null&&r&4&&Wm(a),r&512&&po(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&$m(t,a);break;case 13:Yi(t,a),r&4&&tg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Dx.bind(null,a),Qx(t,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||nn,c=Wi;var f=nn;Wi=r,(nn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),Wi=c,nn=f}break;case 30:break;default:Yi(t,a)}}function Qm(t){var n=t.alternate;n!==null&&(t.alternate=null,Qm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&st(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,On=!1;function qi(t,n,a){for(a=a.child;a!==null;)Jm(t,n,a),a=a.sibling}function Jm(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:nn||Ai(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ai(a,n);var r=qe,c=On;Ra(a.type)&&(qe=a.stateNode,On=!1),qi(t,n,a),bo(a.stateNode),qe=r,On=c;break;case 5:nn||Ai(a,n);case 6:if(r=qe,c=On,qe=null,qi(t,n,a),qe=r,On=c,qe!==null)if(On)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:qe!==null&&(On?(t=qe,jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ar(t)):jg(qe,a.stateNode));break;case 4:r=qe,c=On,qe=a.stateNode.containerInfo,On=!0,qi(t,n,a),qe=r,On=c;break;case 0:case 11:case 14:case 15:Ma(2,a,n),nn||Ma(4,a,n),qi(t,n,a);break;case 1:nn||(Ai(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Xm(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:nn=(r=nn)||a.memoizedState!==null,qi(t,n,a),nn=r;break;default:qi(t,n,a)}}function $m(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ar(t)}catch(a){Ue(n,n.return,a)}}}function tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ar(t)}catch(a){Ue(n,n.return,a)}}function bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Zm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Zm),n;default:throw Error(s(435,t.tag))}}function Rl(t,n){var a=bx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Ux.bind(null,t,r);r.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){qe=E.stateNode,On=!1;break t}break;case 5:qe=E.stateNode,On=!1;break t;case 3:case 4:qe=E.stateNode.containerInfo,On=!0;break t}E=E.return}if(qe===null)throw Error(s(160));Jm(f,g,c),qe=null,On=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)eg(n,t),n=n.sibling}var mi=null;function eg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Pn(t),r&4&&(Ma(3,t,t.return),ho(3,t),Ma(5,t,t.return));break;case 1:zn(n,t),Pn(t),r&512&&(nn||a===null||Ai(a,a.return)),r&64&&Wi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=mi;if(zn(n,t),Pn(t),r&512&&(nn||a===null||Ai(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[k]||f[Ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,r,a),f[Ye]=t,Nt(f),r=f;break t;case"link":var g=e0("link","href",c).get(r+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=e0("meta","content",c).get(r+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ye]=t,Nt(f),r=f}t.stateNode=r}else n0(c,t.type,t.stateNode);else t.stateNode=t0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?n0(c,t.type,t.stateNode):t0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Pn(t),r&512&&(nn||a===null||Ai(a,a.return)),a!==null&&r&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Pn(t),r&512&&(nn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{Cs(c,"")}catch(Ht){Ue(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(zn(n,t),Pn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Ue(t,t.return,Ht)}}break;case 3:if(Xl=null,c=mi,mi=kl(n.containerInfo),zn(n,t),mi=c,Pn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(Ht){Ue(t,t.return,Ht)}df&&(df=!1,ng(t));break;case 4:r=mi,mi=kl(t.stateNode.containerInfo),zn(n,t),Pn(t),mi=r;break;case 12:zn(n,t),Pn(t);break;case 31:zn(n,t),Pn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 13:zn(n,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dl=pt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Wi,dt=nn;if(Wi=$||c,nn=dt||B,zn(n,t),nn=dt,Wi=$,Pn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Wi||nn||cs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var vt=B.memoizedProps.style,et=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){Ue(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ht){Ue(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?Xg(ot,!0):Xg(B.stateNode,!1)}catch(Ht){Ue(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Rl(t,a))));break;case 19:zn(n,t),Pn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 30:break;case 21:break;default:zn(n,t),Pn(t)}}function Pn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(qm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);wl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Cs(g,""),a.flags&=-33);var E=uf(t);wl(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,$=uf(t);ff(t,$,B);break;default:throw Error(s(161))}}catch(dt){Ue(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(t,n.alternate,n),n=n.sibling}function cs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),cs(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),cs(n);break;case 27:bo(n.stateNode);case 26:case 5:Ai(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ho(4,f);break;case 1:if(Zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ue(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Lp(B[c],E)}catch($){Ue(r,r.return,$)}}a&&g&64&&jm(f),po(f,f.return);break;case 27:Ym(f);case 26:case 5:Zi(c,f,a),a&&r===null&&g&4&&Wm(f),po(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&g&4&&$m(c,f);break;case 13:Zi(c,f,a),a&&g&4&&tg(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),po(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$r(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t))}function gi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,a,r),n=n.sibling}function ig(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,r),c&2048&&ho(9,n);break;case 1:gi(t,n,a,r);break;case 3:gi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t)));break;case 12:if(c&2048){gi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ue(n,n.return,B)}}else gi(t,n,a,r);break;case 31:gi(t,n,a,r);break;case 13:gi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,r):mo(t,n):f._visibility&2?gi(t,n,a,r):(f._visibility|=2,qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&hf(g,n);break;case 24:gi(t,n,a,r),c&2048&&pf(n.alternate,n);break;default:gi(t,n,a,r)}}function qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:qs(f,g,E,B,c),ho(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?qs(f,g,E,B,c):mo(f,g):(dt._visibility|=2,qs(f,g,E,B,c)),c&&$&2048&&hf(g.alternate,g);break;case 24:qs(f,g,E,B,c),c&&$&2048&&pf(g.alternate,g);break;default:qs(f,g,E,B,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:mo(a,r),c&2048&&hf(r.alternate,r);break;case 24:mo(a,r),c&2048&&pf(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var go=8192;function Ys(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)ag(t,n,a),t=t.sibling}function ag(t,n,a){switch(t.tag){case 26:Ys(t,n,a),t.flags&go&&t.memoizedState!==null&&cy(a,mi,t.memoizedState,t.memoizedProps);break;case 5:Ys(t,n,a);break;case 3:case 4:var r=mi;mi=kl(t.stateNode.containerInfo),Ys(t,n,a),mi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,Ys(t,n,a),go=r):Ys(t,n,a));break;default:Ys(t,n,a)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,og(r,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nl(t)):vo(t);break;default:vo(t)}}function Nl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,og(r,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}t=t.sibling}}function og(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,fn=r;else t:for(a=t;fn!==null;){r=fn;var c=r.sibling,f=r.return;if(Qm(r),r===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var Ex={getCacheForType:function(t){var n=vn($e),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return vn($e).controller.signal}},Tx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ge=null,de=null,ge=0,De=0,Xn=null,ba=!1,Zs=!1,mf=!1,Ki=0,Ke=0,Ea=0,us=0,gf=0,Wn=0,Ks=0,_o=null,Bn=null,vf=!1,Dl=0,lg=0,Ul=1/0,Ll=null,Ta=null,on=0,Aa=null,Qs=null,Qi=0,_f=0,xf=null,cg=null,xo=0,yf=null;function qn(){return(Ae&2)!==0&&ge!==0?ge&-ge:z.T!==null?Af():Hr()}function ug(){if(Wn===0)if((ge&536870912)===0||xe){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),Wn=t}else Wn=536870912;return t=kn.current,t!==null&&(t.flags|=32),Wn}function Fn(t,n,a){(t===Ge&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Js(t,0),Ca(t,ge,Wn,!1)),hn(t,a),((Ae&2)===0||t!==Ge)&&(t===Ge&&((Ae&2)===0&&(us|=a),Ke===4&&Ca(t,ge,Wn,!1)),Ci(t))}function fg(t,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=r?wx(t,n):Mf(t,n,!0),f=r;do{if(c===0){Zs&&!r&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ax(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=_o;var B=E.current.memoizedState.isDehydrated;if(B&&(Js(E,g).flags|=256),g=Mf(E,g,!1),g!==2){if(mf&&!B){E.errorRecoveryDisabledLanes|=f,us|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Js(t,0),Ca(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,Wn,!ba);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Dl+300-pt(),10<c)){if(Ca(r,n,Wn,!ba),Ut(r,0,!0)!==0)break t;Qi=n,r.timeoutHandle=Vg(dg.bind(null,r,a,Bn,Ll,vf,n,Wn,us,Ks,ba,f,"Throttled",-0,0),c);break t}dg(r,a,Bn,Ll,vf,n,Wn,us,Ks,ba,f,null,-0,0)}}break}while(!0);Ci(t)}function dg(t,n,a,r,c,f,g,E,B,$,dt,vt,et,ot){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ag(n,f,vt);var Ht=(f&62914560)===f?Dl-pt():(f&4194048)===f?lg-pt():0;if(Ht=uy(vt,Ht),Ht!==null){Qi=f,t.cancelPendingCommit=Ht(yg.bind(null,t,n,f,a,r,c,g,E,B,dt,vt,null,et,ot)),Ca(t,f,g,!$);return}}yg(t,n,f,a,r,c,g,E,B)}function Ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,r){n&=~gf,n&=~us,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Fr(t,a,n)}function Ol(){return(Ae&6)===0?(yo(0),!1):!0}function Sf(){if(de!==null){if(De===0)var t=de.return;else t=de,Hi=es=null,Pu(t),Vs=null,eo=0,t=de;for(;t!==null;)km(t.alternate,t),t=t.return;de=null}}function Js(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Wx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Sf(),Ge=t,de=a=Fi(t.current,null),ge=n,De=0,Xn=null,ba=!1,Zs=$t(t,n),mf=!1,Ks=Wn=gf=us=Ea=Ke=0,Bn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Jt(r),f=1<<c;n|=t[c],r&=~f}return Ki=n,el(),a}function hg(t,n){se=null,z.H=co,n===Gs||n===cl?(n=Rp(),De=3):n===Eu?(n=Rp(),De=4):De=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,de===null&&(Ke=1,bl(t,ti(n,t.current)))}function pg(){var t=kn.current;return t===null?!0:(ge&4194048)===ge?ai===null:(ge&62914560)===ge||(ge&536870912)!==0?t===ai:!1}function mg(){var t=z.H;return z.H=co,t===null?co:t}function gg(){var t=z.A;return z.A=Ex,t}function zl(){Ke=4,ba||(ge&4194048)!==ge&&kn.current!==null||(Zs=!0),(Ea&134217727)===0&&(us&134217727)===0||Ge===null||Ca(Ge,ge,Wn,!1)}function Mf(t,n,a){var r=Ae;Ae|=2;var c=mg(),f=gg();(Ge!==t||ge!==n)&&(Ll=null,Js(t,n)),n=!1;var g=Ke;t:do try{if(De!==0&&de!==null){var E=de,B=Xn;switch(De){case 8:Sf(),g=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var $=De;if(De=0,Xn=null,$s(t,E,B,$),a&&Zs){g=0;break t}break;default:$=De,De=0,Xn=null,$s(t,E,B,$)}}Cx(),g=Ke;break}catch(dt){hg(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Hi=es=null,Ae=r,z.H=c,z.A=f,de===null&&(Ge=null,ge=0,el()),g}function Cx(){for(;de!==null;)vg(de)}function wx(t,n){var a=Ae;Ae|=2;var r=mg(),c=gg();Ge!==t||ge!==n?(Ll=null,Ul=pt()+500,Js(t,n)):Zs=$t(t,n);t:do try{if(De!==0&&de!==null){n=de;var f=Xn;e:switch(De){case 1:De=0,Xn=null,$s(t,n,f,1);break;case 2:case 9:if(Cp(f)){De=0,Xn=null,_g(n);break}n=function(){De!==2&&De!==9||Ge!==t||(De=7),Ci(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Cp(f)?(De=0,Xn=null,_g(n)):(De=0,Xn=null,$s(t,n,f,7));break;case 5:var g=null;switch(de.tag){case 26:g=de.memoizedState;case 5:case 27:var E=de;if(g?i0(g):E.stateNode.complete){De=0,Xn=null;var B=E.sibling;if(B!==null)de=B;else{var $=E.return;$!==null?(de=$,Pl($)):de=null}break e}}De=0,Xn=null,$s(t,n,f,5);break;case 6:De=0,Xn=null,$s(t,n,f,6);break;case 8:Sf(),Ke=6;break t;default:throw Error(s(462))}}Rx();break}catch(dt){hg(t,dt)}while(!0);return Hi=es=null,z.H=r,z.A=c,Ae=a,de!==null?0:(Ge=null,ge=0,el(),Ke)}function Rx(){for(;de!==null&&!T();)vg(de)}function vg(t){var n=Gm(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Pl(t):de=n}function _g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Pu(n);default:km(a,n),n=de=gp(n,Ki),n=Gm(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Pl(t):de=n}function $s(t,n,a,r){Hi=es=null,Pu(n),Vs=null,eo=0;var c=n.return;try{if(vx(t,c,n,a,ge)){Ke=1,bl(t,ti(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ke=1,bl(t,ti(a,t.current)),de=null;return}n.flags&32768?(xe||r===1?t=!0:Zs||(ge&536870912)!==0?t=!1:(ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),xg(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){xg(n,ba);return}t=n.return;var a=yx(n.alternate,n,Ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ke===0&&(Ke=5)}function xg(t,n){do{var a=Sx(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ke=6,de=null}function yg(t,n,a,r,c,f,g,E,B){t.cancelPendingCommit=null;do Bl();while(on!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,fi(t,a,f,g,E,B),t===Ge&&(de=Ge=null,ge=0),Qs=n,Aa=t,Qi=a,_f=f,xf=c,cg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lx(Dt,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=Z.p,Z.p=2,g=Ae,Ae|=4;try{Mx(t,n,a)}finally{Ae=g,Z.p=c,z.T=r}}on=1,Sg(),Mg(),bg()}}function Sg(){if(on===1){on=0;var t=Aa,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=Ae;Ae|=4;try{eg(n,t);var f=Of,g=op(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&rp(E.ownerDocument.documentElement,E)){if(B!==null&&au(E)){var $=B.start,dt=B.end;if(dt===void 0&&(dt=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(dt,E.value.length);else{var vt=E.ownerDocument||document,et=vt&&vt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Ht=E.textContent.length,Kt=Math.min(B.start,Ht),Be=B.end===void 0?Kt:Math.min(B.end,Ht);!ot.extend&&Kt>Be&&(g=Be,Be=Kt,Kt=g);var W=sp(E,Kt),I=sp(E,Be);if(W&&I&&(ot.rangeCount!==1||ot.anchorNode!==W.node||ot.anchorOffset!==W.offset||ot.focusNode!==I.node||ot.focusOffset!==I.offset)){var J=vt.createRange();J.setStart(W.node,W.offset),ot.removeAllRanges(),Kt>Be?(ot.addRange(J),ot.extend(I.node,I.offset)):(J.setEnd(I.node,I.offset),ot.addRange(J))}}}}for(vt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&vt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<vt.length;E++){var mt=vt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Zl=!!Lf,Of=Lf=null}finally{Ae=c,Z.p=r,z.T=a}}t.current=n,on=2}}function Mg(){if(on===2){on=0;var t=Aa,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=Ae;Ae|=4;try{Km(t,n.alternate,n)}finally{Ae=c,Z.p=r,z.T=a}}on=3}}function bg(){if(on===4||on===3){on=0,nt();var t=Aa,n=Qs,a=Qi,r=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,Qs=Aa=null,Eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ta=null),As(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];f(E.value,{componentStack:E.stack})}}finally{z.T=n,Z.p=c}}(Qi&3)!==0&&Bl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?xo++:(xo=0,yf=t):xo=0,yo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$r(n)))}function Bl(){return Sg(),Mg(),bg(),Tg()}function Tg(){if(on!==5)return!1;var t=Aa,n=_f;_f=0;var a=As(Qi),r=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=xf,xf=null;var f=Aa,g=Qi;if(on=0,Qs=Aa=null,Qi=0,(Ae&6)!==0)throw Error(s(331));var E=Ae;if(Ae|=4,rg(f.current),ig(f,f.current,g,a),Ae=E,yo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{Z.p=c,z.T=r,Eg(t,n)}}function Ag(t,n,a){n=ti(a,n),n=Qu(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(hn(t,2),Ci(t))}function Ue(t,n,a){if(t.tag===3)Ag(t,t,a);else for(;n!==null;){if(n.tag===3){Ag(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))){t=ti(a,t),a=Cm(2),r=xa(n,a,2),r!==null&&(wm(a,r,n,t),hn(r,2),Ci(r));break}}n=n.return}}function bf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Nx.bind(null,t,n,a),n.then(t,t))}function Nx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(ge&a)===a&&(Ke===4||Ke===3&&(ge&62914560)===ge&&300>pt()-Dl?(Ae&2)===0&&Js(t,0):gf|=a,Ks===ge&&(Ks=0)),Ci(t)}function Cg(t,n){n===0&&(n=sn()),t=Ja(t,n),t!==null&&(hn(t,n),Ci(t))}function Dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(t,a)}function Ux(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Cg(t,a)}function Lx(t,n){return qt(t,n)}var Fl=null,tr=null,Ef=!1,Il=!1,Tf=!1,wa=0;function Ci(t){t!==tr&&t.next===null&&(tr===null?Fl=tr=t:tr=tr.next=t),Il=!0,Ef||(Ef=!0,zx())}function yo(t,n){if(!Tf&&Il){Tf=!0;do for(var a=!1,r=Fl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(r,f))}else f=ge,f=Ut(r,r===Ge?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||$t(r,f)||(a=!0,Dg(r,f));r=r.next}while(a);Tf=!1}}function Ox(){wg()}function wg(){Il=Ef=!1;var t=0;wa!==0&&Xx()&&(t=wa);for(var n=pt(),a=null,r=Fl;r!==null;){var c=r.next,f=Rg(r,n);f===0?(r.next=null,a===null?Fl=c:a.next=c,c===null&&(tr=a)):(a=r,(t!==0||(f&3)!==0)&&(Il=!0)),r=c}on!==0&&on!==5||yo(t),wa!==0&&(wa=0)}function Rg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Jt(f),E=1<<g,B=c[g];B===-1?((E&a)===0||(E&r)!==0)&&(c[g]=We(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ge,a=ge,a=Ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),As(a)){case 2:case 8:a=jt;break;case 32:a=Dt;break;case 268435456:a=me;break;default:a=Dt}return r=Ng.bind(null,t),a=qt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function Ng(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var r=ge;return r=Ut(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(fg(t,r,n),Rg(t,pt()),t.callbackNode!=null&&t.callbackNode===a?Ng.bind(null,t):null)}function Dg(t,n){if(Bl())return null;fg(t,n,!0)}function zx(){qx(function(){(Ae&6)!==0?qt(gt,Ox):wg()})}function Af(){if(wa===0){var t=Is;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),wa=t}return wa}function Ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qo(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Px(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ug((c[pn]||null).action),g=r.submitter;g&&(n=(n=g[pn]||null)?Ug(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wa!==0){var B=g?Lg(c,g):new FormData(c);Xu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?Lg(c,g):new FormData(c),Xu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Cf=0;Cf<lu.length;Cf++){var wf=lu[Cf],Bx=wf.toLowerCase(),Fx=wf[0].toUpperCase()+wf.slice(1);pi(Bx,"on"+Fx)}pi(up,"onAnimationEnd"),pi(fp,"onAnimationIteration"),pi(dp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(tx,"onTransitionRun"),pi(ex,"onTransitionStart"),pi(nx,"onTransitionCancel"),pi(hp,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],B=E.instance,$=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(dt){tl(dt)}c.currentTarget=null,f=B}else for(g=0;g<r.length;g++){if(E=r[g],B=E.instance,$=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(dt){tl(dt)}c.currentTarget=null,f=B}}}}function he(t,n){var a=n[Gr];a===void 0&&(a=n[Gr]=new Set);var r=t+"__bubble";a.has(r)||(zg(n,t,2,!1),a.add(r))}function Rf(t,n,a){var r=0;n&&(r|=4),zg(a,t,r,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[Hl]){t[Hl]=!0,Gt.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Rf("selectionchange",!1,n))}}function zg(t,n,a,r){switch(u0(n)){case 2:var c=hy;break;case 8:c=py;break;default:c=Xf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Df(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=at(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=f=g;continue t}E=E.parentNode}}r=r.return}Hh(function(){var $=f,dt=qc(a),vt=[];t:{var et=pp.get(t);if(et!==void 0){var ot=Qo,Ht=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":ot=U_;break;case"focusin":Ht="focus",ot=$c;break;case"focusout":Ht="blur",ot=$c;break;case"beforeblur":case"afterblur":ot=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=z_;break;case up:case fp:case dp:ot=b_;break;case hp:ot=B_;break;case"scroll":case"scrollend":ot=__;break;case"wheel":ot=I_;break;case"copy":case"cut":case"paste":ot=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Xh;break;case"toggle":case"beforetoggle":ot=G_}var Kt=(n&4)!==0,Be=!Kt&&(t==="scroll"||t==="scrollend"),W=Kt?et!==null?et+"Capture":null:et;Kt=[];for(var I=$,J;I!==null;){var mt=I;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||W===null||(mt=Vr(I,W),mt!=null&&Kt.push(Mo(I,mt,J))),Be)break;I=I.return}0<Kt.length&&(et=new ot(et,Ht,null,a,dt),vt.push({event:et,listeners:Kt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",et&&a!==Wc&&(Ht=a.relatedTarget||a.fromElement)&&(at(Ht)||Ht[Oi]))break t;if((ot||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Ht=a.relatedTarget||a.toElement,ot=$,Ht=Ht?at(Ht):null,Ht!==null&&(Be=u(Ht),Kt=Ht.tag,Ht!==Be||Kt!==5&&Kt!==27&&Kt!==6)&&(Ht=null)):(ot=null,Ht=$),ot!==Ht)){if(Kt=kh,mt="onMouseLeave",W="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Xh,mt="onPointerLeave",W="onPointerEnter",I="pointer"),Be=ot==null?et:Tt(ot),J=Ht==null?et:Tt(Ht),et=new Kt(mt,I+"leave",ot,a,dt),et.target=Be,et.relatedTarget=J,mt=null,at(dt)===$&&(Kt=new Kt(W,I+"enter",Ht,a,dt),Kt.target=J,Kt.relatedTarget=Be,mt=Kt),Be=mt,ot&&Ht)e:{for(Kt=Hx,W=ot,I=Ht,J=0,mt=W;mt;mt=Kt(mt))J++;mt=0;for(var Wt=I;Wt;Wt=Kt(Wt))mt++;for(;0<J-mt;)W=Kt(W),J--;for(;0<mt-J;)I=Kt(I),mt--;for(;J--;){if(W===I||I!==null&&W===I.alternate){Kt=W;break e}W=Kt(W),I=Kt(I)}Kt=null}else Kt=null;ot!==null&&Pg(vt,et,ot,Kt,!1),Ht!==null&&Be!==null&&Pg(vt,Be,Ht,Kt,!0)}}t:{if(et=$?Tt($):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ee=$h;else if(Qh(et))if(tp)Ee=Q_;else{Ee=Z_;var kt=Y_}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Xc($.elementType)&&(Ee=$h):Ee=K_;if(Ee&&(Ee=Ee(t,$))){Jh(vt,Ee,a,dt);break t}kt&&kt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&Jn(et,"number",et.value)}switch(kt=$?Tt($):window,t){case"focusin":(Qh(kt)||kt.contentEditable==="true")&&(Ds=kt,su=$,Kr=null);break;case"focusout":Kr=su=Ds=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,lp(vt,a,dt);break;case"selectionchange":if($_)break;case"keydown":case"keyup":lp(vt,a,dt)}var oe;if(eu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ns?Zh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Wh&&a.locale!=="ko"&&(Ns||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ns&&(oe=Gh()):(da=dt,Kc="value"in da?da.value:da.textContent,Ns=!0)),kt=Gl($,ve),0<kt.length&&(ve=new jh(ve,t,null,a,dt),vt.push({event:ve,listeners:kt}),oe?ve.data=oe:(oe=Kh(a),oe!==null&&(ve.data=oe)))),(oe=k_?j_(t,a):X_(t,a))&&(ve=Gl($,"onBeforeInput"),0<ve.length&&(kt=new jh("onBeforeInput","beforeinput",null,a,dt),vt.push({event:kt,listeners:ve}),kt.data=oe)),Px(vt,t,$,a,dt)}Og(vt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vr(t,a),c!=null&&r.unshift(Mo(t,c,f)),c=Vr(t,n),c!=null&&r.push(Mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var E=a,B=E.alternate,$=E.stateNode;if(E=E.tag,B!==null&&B===r)break;E!==5&&E!==26&&E!==27||$===null||(B=$,c?($=Vr(a,f),$!=null&&g.unshift(Mo(a,$,B))):c||($=Vr(a,f),$!=null&&g.push(Mo(a,$,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function Fg(t,n){return n=Bg(n),Bg(t)===n}function Pe(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Cs(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Cs(t,""+r);break;case"className":Vt(t,"class",r);break;case"tabIndex":Vt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(t,a,r);break;case"style":Fh(t,r,f);break;case"data":if(n!=="object"){Vt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=qo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=qo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Pi);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=qo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":he("beforetoggle",t),he("toggle",t),_e(t,"popover",r);break;case"xlinkActuate":rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_e(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=g_.get(a)||a,_e(t,a,r))}}function Uf(t,n,a,r,c,f){switch(a){case"style":Fh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Cs(t,r):(typeof r=="number"||typeof r=="bigint")&&Cs(t,""+r);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):_e(t,a,r)}}}function xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,f,g,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),r&&Pe(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=g=c=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Pe(t,n,r,dt,a,null)}}hi(t,f,E,B,$,g,c,!1);return;case"select":he("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Pe(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!r,n!=null?zi(t,!!r,n,!1):a!=null&&zi(t,!!r,a,!0);return;case"textarea":he("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pe(t,n,g,E,a,null)}Ph(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,n,B,r,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)he(So[r],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,$,r,a,null)}return;default:if(Xc(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Uf(t,n,dt,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Pe(t,n,E,r,a,null))}function kx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,B=null,$=null,dt=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=vt;default:r.hasOwnProperty(ot)||Pe(t,n,ot,null,r,vt)}}for(var et in r){var ot=r[et];if(vt=a[et],r.hasOwnProperty(et)&&(ot!=null||vt!=null))switch(et){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":dt=ot;break;case"value":g=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==vt&&Pe(t,n,et,ot,r,vt)}}Mn(t,g,E,B,$,dt,f,c);return;case"select":ot=g=E=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:r.hasOwnProperty(f)||Pe(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&Pe(t,n,c,f,r,B)}n=E,a=g,r=ot,et!=null?zi(t,!!a,et,!1):!!r!=!!a&&(n!=null?zi(t,!!a,n,!0):zi(t,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":et=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(t,n,g,c,r,f)}zh(t,et,ot);return;case"option":for(var Ht in a)if(et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:Pe(t,n,Ht,null,r,et)}for(B in r)if(et=r[B],ot=a[B],r.hasOwnProperty(B)&&et!==ot&&(et!=null||ot!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Pe(t,n,B,et,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!r.hasOwnProperty(Kt)&&Pe(t,n,Kt,null,r,et);for($ in r)if(et=r[$],ot=a[$],r.hasOwnProperty($)&&et!==ot&&(et!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Pe(t,n,$,et,r,ot)}return;default:if(Xc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!r.hasOwnProperty(Be)&&Uf(t,n,Be,void 0,r,et);for(dt in r)et=r[dt],ot=a[dt],!r.hasOwnProperty(dt)||et===ot||et===void 0&&ot===void 0||Uf(t,n,dt,et,r,ot);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!r.hasOwnProperty(W)&&Pe(t,n,W,null,r,et);for(vt in r)et=r[vt],ot=a[vt],!r.hasOwnProperty(vt)||et===ot||et==null&&ot==null||Pe(t,n,vt,et,r,ot)}function Ig(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&Ig(g)){for(g=0,E=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>E)break;var dt=B.transferSize,vt=B.initiatorType;dt&&Ig(vt)&&(B=B.responseEnd,g+=dt*(B<E?1:(E-$)/(B-$)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lf=null,Of=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Xx(){var t=window.event;return t&&t.type==="popstate"?t===Pf?!1:(Pf=t,!0):(Pf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Yx)}:Vg;function Yx(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function jg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ar(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[k]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=c}while(a);ar(n)}function Xg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),st(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[k])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zg(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);st(t)}var ri=new Map,Kg=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=Z.d;Z.d={f:Jx,r:$x,D:ty,C:ey,L:ny,m:iy,X:sy,S:ay,M:ry};function Jx(){var t=Ji.f(),n=Ol();return t||n}function $x(t){var n=j(t);n!==null&&n.tag===5&&n.type==="form"?hm(n):Ji.r(t)}var er=typeof document>"u"?null:document;function Qg(t,n,a){var r=er;if(r&&typeof n=="string"&&n){var c=un(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Kg.has(c)||(Kg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),xn(n,"link",t),Nt(n),r.head.appendChild(n)))}}function ty(t){Ji.D(t),Qg("dns-prefetch",t,null)}function ey(t,n){Ji.C(t,n),Qg("preconnect",t,n)}function ny(t,n,a){Ji.L(t,n,a);var r=er;if(r&&t&&n){var c='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+un(a.imageSizes)+'"]')):c+='[href="'+un(t)+'"]';var f=c;switch(n){case"style":f=nr(t);break;case"script":f=ir(t)}ri.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),xn(n,"link",t),Nt(n),r.head.appendChild(n)))}}function iy(t,n){Ji.m(t,n);var a=er;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+un(r)+'"][href="'+un(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ir(t)}if(!ri.has(f)&&(t=x({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),xn(r,"link",t),Nt(r),a.head.appendChild(r)}}}function ay(t,n,a){Ji.S(t,n,a);var r=er;if(r&&t){var c=Rt(r).hoistableStyles,f=nr(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Eo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Gf(t,a);var B=g=r.createElement("link");Nt(B),xn(B,"link",t),B._p=new Promise(function($,dt){B.onload=$,B.onerror=dt}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function sy(t,n){Ji.X(t,n);var a=er;if(a&&t){var r=Rt(a).hoistableScripts,c=ir(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0},n),(n=ri.get(c))&&Vf(t,n),f=a.createElement("script"),Nt(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ry(t,n){Ji.M(t,n);var a=er;if(a&&t){var r=Rt(a).hoistableScripts,c=ir(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&Vf(t,n),f=a.createElement("script"),Nt(f),xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Jg(t,n,a,r){var c=(c=bt.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=nr(a.href),a=Rt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=nr(a.href);var f=Rt(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||oy(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ir(a),a=Rt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function nr(t){return'href="'+un(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function $g(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function oy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),xn(n,"link",a),Nt(n),t.head.appendChild(n))}function ir(t){return'[src="'+un(t)+'"]'}function To(t){return"script[async]"+t}function t0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(r)return n.instance=r,Nt(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Nt(r),xn(r,"style",c),jl(r,a.precedence,t),n.instance=r;case"stylesheet":c=nr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,Nt(f),f;r=$g(a),(c=ri.get(c))&&Gf(r,c),f=(t.ownerDocument||t).createElement("link"),Nt(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),xn(f,"link",r),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=ir(a.src),(c=t.querySelector(To(f)))?(n.instance=c,Nt(c),c):(r=a,(c=ri.get(f))&&(r=x({},a),Vf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Nt(c),xn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,jl(r,a.precedence,t));return n.instance}function jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xl=null;function e0(t,n,a){if(Xl===null){var r=new Map,c=Xl=new Map;c.set(a,r)}else c=Xl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[k]||f[Ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(f):r.set(g,[f])}}return r}function n0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ly(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=nr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Nt(f);return}f=n.ownerDocument||n,r=$g(r),(c=ri.get(c))&&Gf(r,c),f=f.createElement("link"),Nt(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),xn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Wl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function uy(t,n){return t.stylesheets&&t.count===0&&Yl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&kf===0&&(kf=62500*jx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ql=null;function Yl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ql=new Map,n.forEach(fy,t),ql=null,Wl.call(t))}function fy(t,n){if(!(n.state.loading&4)){var a=ql.get(t);if(a)var r=a.get(null);else{a=new Map,ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Wl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function dy(t,n,a,r,c,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function a0(t,n,a,r,c,f,g,E,B,$,dt,vt){return t=new dy(t,n,a,g,B,$,dt,vt,E),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=Su(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Tu(f),t}function s0(t){return t?(t=Os,t):Os}function r0(t,n,a,r,c,f){c=s0(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=xa(t,r,n),a!==null&&(Fn(a,t,n),io(a,t,n))}function o0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){o0(t,n),(t=t.alternate)&&o0(t,n)}function l0(t){if(t.tag===13||t.tag===31){var n=Ja(t,67108864);n!==null&&Fn(n,t,67108864),jf(t,67108864)}}function c0(t){if(t.tag===13||t.tag===31){var n=qn();n=qa(n);var a=Ja(t,n);a!==null&&Fn(a,t,n),jf(t,n)}}var Zl=!0;function hy(t,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,Xf(t,n,a,r)}finally{Z.p=f,z.T=c}}function py(t,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,Xf(t,n,a,r)}finally{Z.p=f,z.T=c}}function Xf(t,n,a,r){if(Zl){var c=Wf(r);if(c===null)Df(t,n,r,Kl,a),f0(t,r);else if(gy(c,t,n,a,r))r.stopPropagation();else if(f0(t,r),n&4&&-1<my.indexOf(t)){for(;c!==null;){var f=j(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=wt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Jt(g);E.entanglements[1]|=B,g&=~B}Ci(f),(Ae&6)===0&&(Ul=pt()+500,yo(0))}}break;case 31:case 13:E=Ja(f,2),E!==null&&Fn(E,f,2),Ol(),jf(f,2)}if(f=Wf(r),f===null&&Df(t,n,r,Kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Df(t,n,r,null,a)}}function Wf(t){return t=qc(t),qf(t)}var Kl=null;function qf(t){if(Kl=null,t=at(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function u0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case jt:return 8;case Dt:case Pt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Yf=!1,Na=null,Da=null,Ua=null,Co=new Map,wo=new Map,La=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Ro(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=j(n),n!==null&&l0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function gy(t,n,a,r,c){switch(n){case"focusin":return Na=Ro(Na,t,n,a,r,c),!0;case"dragenter":return Da=Ro(Da,t,n,a,r,c),!0;case"mouseover":return Ua=Ro(Ua,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Ro(Co.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Ro(wo.get(f)||null,t,n,a,r,c)),!0}return!1}function d0(t){var n=at(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ya(t.priority,function(){c0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ya(t.priority,function(){c0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wc=r,a.target.dispatchEvent(r),Wc=null}else return n=j(a),n!==null&&l0(n),t.blockedOn=a,!1;n.shift()}return!0}function h0(t,n,a){Ql(t)&&a.delete(n)}function vy(){Yf=!1,Na!==null&&Ql(Na)&&(Na=null),Da!==null&&Ql(Da)&&(Da=null),Ua!==null&&Ql(Ua)&&(Ua=null),Co.forEach(h0),wo.forEach(h0)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vy)))}var $l=null;function p0(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=j(a);f!==null&&(t.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ar(t){function n(B){return Jl(B,t)}Na!==null&&Jl(Na,t),Da!==null&&Jl(Da,t),Ua!==null&&Jl(Ua,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<La.length;a++){var r=La[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[pn]||null;if(typeof f=="function")g||p0(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[pn]||null)E=g.formAction;else if(qf(c)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),p0(a)}}}function m0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}tc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=qn();r0(a,r,t,n,null,null)},tc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),Ol(),n[Oi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&d0(t)}};var g0=e.version;if(g0!=="19.2.4")throw Error(s(527,g0,"19.2.4"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var _y={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Yt=ec.inject(_y),Xt=ec}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=bm,f=Em,g=Tm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=a0(t,1,!1,null,null,a,r,null,c,f,g,m0),t[Oi]=n.current,Nf(t),new Zf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=bm,g=Em,E=Tm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=a0(t,1,!0,n,a??null,r,c,B,f,g,E,m0),n.context=s0(null),a=n.current,r=qn(),r=qa(r),c=_a(r),c.callback=null,xa(a,c,r),a=r,n.current.lanes=a,hn(n,a),Ci(n),t[Oi]=n.current,Nf(t),new tc(n)},Do.version="19.2.4",Do}var A0;function Ry(){if(A0)return Jf.exports;A0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=wy(),Jf.exports}var Ny=Ry();const Dy=Uv(Ny),Uy=({onNavigate:o,currentPage:e})=>{const[i,s]=Nn.useState(!1),[l,u]=Nn.useState(!1);Nn.useEffect(()=>{const b=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[]);const d=e==="home",h=b=>`
    relative py-1.5 px-3 md:px-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500
    hover:text-[#C5A059] group flex items-center justify-center overflow-hidden rounded-full
    ${e===b?"text-[#C5A059] scale-105":"text-white/70 hover:scale-105"}
  `,p=b=>`
    w-full py-4 px-8 text-[12px] font-black uppercase tracking-[0.3em] transition-all duration-300
    flex items-center justify-between border-b border-white/5
    ${e===b?"text-[#C5A059] bg-white/5":"text-white/70"}
  `,m=b=>`
    absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#991B1B] transition-all duration-500
    ${e===b?"opacity-100 shadow-[0_0_8px_#991B1B] scale-125":"opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"}
  `,_=b=>`
    absolute inset-0 bg-white/5 transition-opacity duration-500 rounded-full -z-10
    ${e===b?"opacity-100":"opacity-0 group-hover:opacity-100"}
  `,x=[{id:"services",label:"Services"},{id:"about",label:"About Us"},{id:"contact",label:"Contact"}],y=b=>{o(b),u(!1)};return M.jsxs(M.Fragment,{children:[M.jsx("nav",{className:"fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none",children:M.jsxs("div",{className:`
          flex items-center justify-between w-full max-w-7xl px-4 md:px-6 py-1.5 
          transition-all duration-700 rounded-full border pointer-events-auto
          ${i||!d||l?"bg-[#0B1120]/95 backdrop-blur-2xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] scale-[0.98]":"bg-[#0F172A]/40 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"}
        `,children:[M.jsxs("button",{onClick:()=>{o("home"),window.scrollTo({top:0,behavior:"smooth"}),u(!1)},className:"flex items-center gap-2 md:gap-3 group shrink-0",children:[M.jsx("div",{className:"w-10 h-10 md:w-14 md:h-14 transition-all duration-500 group-hover:scale-110 flex items-center justify-center",children:M.jsx("img",{src:"https://i.postimg.cc/Z05jsMCb/logonotstra.png",alt:"Divyana Logo",className:"w-full h-full object-contain block drop-shadow-lg",loading:"eager"})}),M.jsxs("div",{className:"flex flex-col items-start leading-none gap-0.5",children:[M.jsx("span",{className:"text-white text-[9px] md:text-[12px] font-extrabold tracking-[0.05em] uppercase transition-all duration-300 group-hover:text-[#C5A059]",children:"Divyana Operations"}),M.jsx("span",{className:"text-white/40 text-[7px] md:text-[9px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-white/80",children:"& Solutions"})]})]}),M.jsx("div",{className:"hidden md:flex items-center space-x-1",children:x.map(b=>M.jsxs("button",{onClick:()=>o(b.id),className:h(b.id),children:[M.jsx("span",{className:_(b.id)}),b.label,M.jsx("span",{className:m(b.id)})]},b.id))}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("div",{className:"shrink-0",children:M.jsx("button",{onClick:()=>{o("partner"),u(!1)},className:`
                  px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] 
                  transition-all duration-500 shadow-xl transform hover:scale-105 active:scale-95
                  ${i||!d?"bg-[#C5A059] text-white hover:bg-[#D9B775]":"bg-white text-[#0F172A] hover:bg-[#C5A059] hover:text-white"}
                `,children:"Partner Up"})}),M.jsxs("button",{onClick:()=>u(!l),className:"md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300","aria-label":"Toggle Menu",children:[M.jsx("span",{className:`w-5 h-0.5 bg-white transition-all duration-300 ${l?"rotate-45 translate-y-2":""}`}),M.jsx("span",{className:`w-5 h-0.5 bg-white transition-all duration-300 ${l?"opacity-0":""}`}),M.jsx("span",{className:`w-5 h-0.5 bg-white transition-all duration-300 ${l?"-rotate-45 -translate-y-2":""}`})]})]})]})}),M.jsxs("div",{className:`
        fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out
        ${l?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}
      `,children:[M.jsx("div",{className:"absolute inset-0 bg-[#0B1120]/60 backdrop-blur-xl",onClick:()=>u(!1)}),M.jsx("div",{className:`
          absolute top-24 left-4 right-4 bg-[#0B1120] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 transform
          ${l?"translate-y-0 scale-100":"-translate-y-10 scale-95"}
        `,children:M.jsxs("div",{className:"flex flex-col py-4",children:[x.map(b=>M.jsxs("button",{onClick:()=>y(b.id),className:p(b.id),children:[b.label,e===b.id&&M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#991B1B] shadow-[0_0_8px_#991B1B]"})]},b.id)),M.jsx("div",{className:"p-8 mt-4 text-center",children:M.jsx("p",{className:"text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold",children:"Divyana Operations & Solutions"})})]})})]})]})},Ly=()=>M.jsxs("section",{className:"relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")'},children:M.jsx("div",{className:"absolute inset-0 bg-[#0F172A]/70"})}),M.jsxs("div",{className:"relative z-10 text-center px-6 max-w-5xl mx-auto",children:[M.jsx("span",{className:"inline-block text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#C5A059] mb-8 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-[#991B1B]/30",children:"Global Strategic Partner"}),M.jsxs("h1",{className:"text-5xl md:text-8xl font-black text-white leading-[1.05] mb-10 tracking-tighter uppercase",children:["Moving ",M.jsx("br",{}),"Commerce ",M.jsx("br",{}),M.jsx("span",{className:"text-white/40",children:"Forward"})]}),M.jsxs("div",{className:"flex justify-center gap-2 mb-10",children:[M.jsx("div",{className:"w-12 h-1 bg-[#C5A059]"}),M.jsx("div",{className:"w-4 h-1 bg-[#991B1B]"})]}),M.jsxs("p",{className:"text-xs md:text-lg text-slate-300 max-w-2xl mx-auto uppercase tracking-widest font-medium leading-relaxed opacity-90",children:["Connecting enterprises worldwide with integrated ",M.jsx("br",{className:"hidden md:block"})," logistics and professional trade solutions."]})]})]}),C0=({title:o,description:e,image:i})=>M.jsxs("div",{className:"bg-slate-50 rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full",children:[M.jsx("div",{className:"overflow-hidden rounded-xl aspect-[16/9] mb-8 bg-slate-200",children:M.jsx("img",{src:i,alt:o,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-110"})}),M.jsx("div",{className:"flex-grow flex flex-col items-center text-center",children:M.jsx("p",{className:"text-slate-600 text-sm md:text-base leading-relaxed mb-4 max-w-sm",children:e})})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="170",Oy=0,w0=1,zy=2,Lv=1,Py=2,aa=3,Xa=0,Hn=1,sa=2,Va=0,Ar=1,R0=2,N0=3,D0=4,By=5,xs=100,Fy=101,Iy=102,Hy=103,Gy=104,Vy=200,ky=201,jy=202,Xy=203,zd=204,Pd=205,Wy=206,qy=207,Yy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tS=214,Bd=0,Fd=1,Id=2,Rr=3,Hd=4,Gd=5,Vd=6,kd=7,Ah=0,eS=1,nS=2,ka=0,iS=1,aS=2,sS=3,rS=4,oS=5,lS=6,cS=7,Ov=300,Nr=301,Dr=302,jd=303,Xd=304,Fc=306,Wd=1e3,Ss=1001,qd=1002,Si=1003,uS=1004,nc=1005,Ni=1006,nd=1007,Ms=1008,ca=1009,zv=1010,Pv=1011,Vo=1012,Ch=1013,bs=1014,ra=1015,ko=1016,wh=1017,Rh=1018,Ur=1020,Bv=35902,Fv=1021,Iv=1022,yi=1023,Hv=1024,Gv=1025,Cr=1026,Lr=1027,Vv=1028,Nh=1029,kv=1030,Dh=1031,Uh=1033,wc=33776,Rc=33777,Nc=33778,Dc=33779,Yd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,th=37496,eh=37808,nh=37809,ih=37810,ah=37811,sh=37812,rh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,Uc=36492,mh=36494,gh=36495,jv=36283,vh=36284,_h=36285,xh=36286,fS=3200,dS=3201,Xv=0,hS=1,Ga="",li="srgb",zr="srgb-linear",Ic="linear",Fe="srgb",sr=7680,U0=519,pS=512,mS=513,gS=514,Wv=515,vS=516,_S=517,xS=518,yS=519,yh=35044,L0="300 es",oa=2e3,Oc=2001;class Pr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Sh=180/Math.PI;function ja(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function In(o,e,i){return Math.max(e,Math.min(i,o))}function SS(o,e){return(o%e+e)%e}function ad(o,e,i){return(1-i)*o+i*e}function Ri(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,i=0){fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,u,d,h,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,p,m)}set(e,i,s,l,u,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],_=s[4],x=s[7],y=s[2],b=s[5],A=s[8],R=l[0],S=l[3],v=l[6],F=l[1],O=l[4],N=l[7],it=l[2],G=l[5],P=l[8];return u[0]=d*R+h*F+p*it,u[3]=d*S+h*O+p*G,u[6]=d*v+h*N+p*P,u[1]=m*R+_*F+x*it,u[4]=m*S+_*O+x*G,u[7]=m*v+_*N+x*P,u[2]=y*R+b*F+A*it,u[5]=y*S+b*O+A*G,u[8]=y*v+b*N+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*d*_-i*h*m-s*u*_+s*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],x=_*d-h*m,y=h*p-_*u,b=m*u-d*p,A=i*x+s*y+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(l*m-_*s)*R,e[2]=(h*s-l*d)*R,e[3]=y*R,e[4]=(_*i-l*p)*R,e[5]=(l*u-h*i)*R,e[6]=b*R,e[7]=(s*p-m*i)*R,e[8]=(d*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(sd.makeScale(e,i)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new le;function qv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MS(){const o=zc("canvas");return o.style.display="block",o}const O0={};function Ho(o){o in O0||(O0[o]=!0,console.warn(o))}function bS(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function ES(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const be={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Fe&&(o.r=la(o.r),o.g=la(o.g),o.b=la(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Fe&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ga?Ic:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const z0=[.64,.33,.3,.6,.15,.06],P0=[.2126,.7152,.0722],B0=[.3127,.329],F0=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[zr]:{primaries:z0,whitePoint:B0,transfer:Ic,toXYZ:F0,fromXYZ:I0,luminanceCoefficients:P0,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:z0,whitePoint:B0,transfer:Fe,toXYZ:F0,fromXYZ:I0,luminanceCoefficients:P0,outputColorSpaceConfig:{drawingBufferColorSpace:li}}});let rr;class AS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=zc("canvas")),rr.width=e.width,rr.height=e.height;const s=rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=rr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=la(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class Yv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?AS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class Dn extends Pr{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Ni,d=Ms,h=yi,p=ca,m=Dn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ja(),this.name="",this.source=new Yv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ov;Dn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,m=p[0],_=p[4],x=p[8],y=p[1],b=p[5],A=p[9],R=p[2],S=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-R)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+R)<.1&&Math.abs(A+S)<.1&&Math.abs(m+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,N=(b+1)/2,it=(v+1)/2,G=(_+y)/4,P=(x+R)/4,K=(A+S)/4;return O>N&&O>it?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=G/s,u=P/s):N>it?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=G/l,u=K/l):it<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(it),s=P/u,l=K/u),this.set(s,l,u,i),this}let F=Math.sqrt((S-A)*(S-A)+(x-R)*(x-R)+(y-_)*(y-_));return Math.abs(F)<.001&&(F=1),this.x=(S-A)/F,this.y=(x-R)/F,this.z=(y-_)/F,this.w=Math.acos((m+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends Pr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Dn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Yv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends RS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Zv extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NS extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let p=s[l+0],m=s[l+1],_=s[l+2],x=s[l+3];const y=u[d+0],b=u[d+1],A=u[d+2],R=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=x;return}if(h===1){e[i+0]=y,e[i+1]=b,e[i+2]=A,e[i+3]=R;return}if(x!==R||p!==y||m!==b||_!==A){let S=1-h;const v=p*y+m*b+_*A+x*R,F=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const it=Math.sqrt(O),G=Math.atan2(it,v*F);S=Math.sin(S*G)/it,h=Math.sin(h*G)/it}const N=h*F;if(p=p*S+y*N,m=m*S+b*N,_=_*S+A*N,x=x*S+R*N,S===1-h){const it=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=it,m*=it,_*=it,x*=it}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],p=s[l+1],m=s[l+2],_=s[l+3],x=u[d],y=u[d+1],b=u[d+2],A=u[d+3];return e[i]=h*A+_*x+p*b-m*y,e[i+1]=p*A+_*y+m*x-h*b,e[i+2]=m*A+_*b+h*y-p*x,e[i+3]=_*A-h*x-p*y-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),_=h(l/2),x=h(u/2),y=p(s/2),b=p(l/2),A=p(u/2);switch(d){case"XYZ":this._x=y*_*x+m*b*A,this._y=m*b*x-y*_*A,this._z=m*_*A+y*b*x,this._w=m*_*x-y*b*A;break;case"YXZ":this._x=y*_*x+m*b*A,this._y=m*b*x-y*_*A,this._z=m*_*A-y*b*x,this._w=m*_*x+y*b*A;break;case"ZXY":this._x=y*_*x-m*b*A,this._y=m*b*x+y*_*A,this._z=m*_*A+y*b*x,this._w=m*_*x-y*b*A;break;case"ZYX":this._x=y*_*x-m*b*A,this._y=m*b*x+y*_*A,this._z=m*_*A-y*b*x,this._w=m*_*x+y*b*A;break;case"YZX":this._x=y*_*x+m*b*A,this._y=m*b*x+y*_*A,this._z=m*_*A-y*b*x,this._w=m*_*x-y*b*A;break;case"XZY":this._x=y*_*x-m*b*A,this._y=m*b*x-y*_*A,this._z=m*_*A+y*b*x,this._w=m*_*x+y*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],x=i[10],y=s+h+x;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(_-p)*b,this._y=(u-m)*b,this._z=(d-l)*b}else if(s>h&&s>x){const b=2*Math.sqrt(1+s-h-x);this._w=(_-p)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+m)/b}else if(h>x){const b=2*Math.sqrt(1+h-s-x);this._w=(u-m)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(p+_)/b}else{const b=2*Math.sqrt(1+x-s-h);this._w=(d-l)/b,this._x=(u+m)/b,this._y=(p+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-s*m,this._z=u*_+d*m+s*p-l*h,this._w=d*_-s*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*s+i*this._x,this._y=b*l+i*this._y,this._z=b*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),x=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=d*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(H0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),_=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+p*m+d*x-h*_,this.y=s+p*_+h*m-u*x,this.z=l+p*x+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new Q,H0=new jo;class Xo{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ac.subVectors(this.max,Uo),or.subVectors(e.a,Uo),lr.subVectors(e.b,Uo),cr.subVectors(e.c,Uo),za.subVectors(lr,or),Pa.subVectors(cr,lr),fs.subVectors(or,cr);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,za.z,0,-za.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!ld(i,or,lr,cr,ac)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,or,lr,cr,ac))?!1:(sc.crossVectors(za,Pa),i=[sc.x,sc.y,sc.z],ld(i,or,lr,cr,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vi=new Q,ic=new Xo,or=new Q,lr=new Q,cr=new Q,za=new Q,Pa=new Q,fs=new Q,Uo=new Q,ac=new Q,sc=new Q,ds=new Q;function ld(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ds.fromArray(o,u);const h=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),p=e.dot(ds),m=i.dot(ds),_=s.dot(ds);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const DS=new Xo,Lo=new Q,cd=new Q;class Hc{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):DS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(cd)),this.expandByPoint(Lo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Q,ud=new Q,rc=new Q,Ba=new Q,fd=new Q,oc=new Q,dd=new Q;class Kv{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ud.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(ud);const u=e.distanceTo(i)*.5,d=-this.direction.dot(rc),h=Ba.dot(this.direction),p=-Ba.dot(rc),m=Ba.lengthSq(),_=Math.abs(1-d*d);let x,y,b,A;if(_>0)if(x=d*p-h,y=d*h-p,A=u*_,x>=0)if(y>=-A)if(y<=A){const R=1/_;x*=R,y*=R,b=x*(x+d*y+2*h)+y*(d*x+y+2*p)+m}else y=u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*p)+m;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-p),u),b=-x*x+y*(y+2*p)+m):y<=A?(x=0,y=Math.min(Math.max(-u,-p),u),b=y*(y+2*p)+m):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-p),u),b=-x*x+y*(y+2*p)+m);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),b=-x*x+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ud).addScaledVector(rc,y),b}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),_>=0?(u=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,s,l,u){fd.subVectors(i,e),oc.subVectors(s,e),dd.crossVectors(fd,oc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ba.subVectors(this.origin,e);const p=h*this.direction.dot(oc.crossVectors(Ba,oc));if(p<0)return null;const m=h*this.direction.dot(fd.cross(Ba));if(m<0||p+m>d)return null;const _=-h*Ba.dot(dd);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,s,l,u,d,h,p,m,_,x,y,b,A,R,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,p,m,_,x,y,b,A,R,S)}set(e,i,s,l,u,d,h,p,m,_,x,y,b,A,R,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=y,v[3]=b,v[7]=A,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ur.setFromMatrixColumn(e,0).length(),u=1/ur.setFromMatrixColumn(e,1).length(),d=1/ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*_,b=d*x,A=h*_,R=h*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=b+A*m,i[5]=y-R*m,i[9]=-h*p,i[2]=R-y*m,i[6]=A+b*m,i[10]=d*p}else if(e.order==="YXZ"){const y=p*_,b=p*x,A=m*_,R=m*x;i[0]=y+R*h,i[4]=A*h-b,i[8]=d*m,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=b*h-A,i[6]=R+y*h,i[10]=d*p}else if(e.order==="ZXY"){const y=p*_,b=p*x,A=m*_,R=m*x;i[0]=y-R*h,i[4]=-d*x,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*_,i[9]=R-y*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const y=d*_,b=d*x,A=h*_,R=h*x;i[0]=p*_,i[4]=A*m-b,i[8]=y*m+R,i[1]=p*x,i[5]=R*m+y,i[9]=b*m-A,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const y=d*p,b=d*m,A=h*p,R=h*m;i[0]=p*_,i[4]=R-y*x,i[8]=A*x+b,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=b*x+A,i[10]=y-R*x}else if(e.order==="XZY"){const y=d*p,b=d*m,A=h*p,R=h*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=y*x+R,i[5]=d*_,i[9]=b*x-A,i[2]=A*x-b,i[6]=h*_,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,LS)}lookAt(e,i,s){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Fa.crossVectors(s,Yn),Fa.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Fa.crossVectors(s,Yn)),Fa.normalize(),lc.crossVectors(Yn,Fa),l[0]=Fa.x,l[4]=lc.x,l[8]=Yn.x,l[1]=Fa.y,l[5]=lc.y,l[9]=Yn.y,l[2]=Fa.z,l[6]=lc.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],_=s[1],x=s[5],y=s[9],b=s[13],A=s[2],R=s[6],S=s[10],v=s[14],F=s[3],O=s[7],N=s[11],it=s[15],G=l[0],P=l[4],K=l[8],D=l[12],w=l[1],H=l[5],ut=l[9],rt=l[13],lt=l[2],ht=l[6],z=l[10],Z=l[14],q=l[3],St=l[7],Et=l[11],L=l[15];return u[0]=d*G+h*w+p*lt+m*q,u[4]=d*P+h*H+p*ht+m*St,u[8]=d*K+h*ut+p*z+m*Et,u[12]=d*D+h*rt+p*Z+m*L,u[1]=_*G+x*w+y*lt+b*q,u[5]=_*P+x*H+y*ht+b*St,u[9]=_*K+x*ut+y*z+b*Et,u[13]=_*D+x*rt+y*Z+b*L,u[2]=A*G+R*w+S*lt+v*q,u[6]=A*P+R*H+S*ht+v*St,u[10]=A*K+R*ut+S*z+v*Et,u[14]=A*D+R*rt+S*Z+v*L,u[3]=F*G+O*w+N*lt+it*q,u[7]=F*P+O*H+N*ht+it*St,u[11]=F*K+O*ut+N*z+it*Et,u[15]=F*D+O*rt+N*Z+it*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],x=e[6],y=e[10],b=e[14],A=e[3],R=e[7],S=e[11],v=e[15];return A*(+u*p*x-l*m*x-u*h*y+s*m*y+l*h*b-s*p*b)+R*(+i*p*b-i*m*y+u*d*y-l*d*b+l*m*_-u*p*_)+S*(+i*m*x-i*h*b-u*d*x+s*d*b+u*h*_-s*m*_)+v*(-l*h*_-i*p*x+i*h*y+l*d*x-s*d*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],x=e[9],y=e[10],b=e[11],A=e[12],R=e[13],S=e[14],v=e[15],F=x*S*m-R*y*m+R*p*b-h*S*b-x*p*v+h*y*v,O=A*y*m-_*S*m-A*p*b+d*S*b+_*p*v-d*y*v,N=_*R*m-A*x*m+A*h*b-d*R*b-_*h*v+d*x*v,it=A*x*p-_*R*p-A*h*y+d*R*y+_*h*S-d*x*S,G=i*F+s*O+l*N+u*it;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=F*P,e[1]=(R*y*u-x*S*u-R*l*b+s*S*b+x*l*v-s*y*v)*P,e[2]=(h*S*u-R*p*u+R*l*m-s*S*m-h*l*v+s*p*v)*P,e[3]=(x*p*u-h*y*u-x*l*m+s*y*m+h*l*b-s*p*b)*P,e[4]=O*P,e[5]=(_*S*u-A*y*u+A*l*b-i*S*b-_*l*v+i*y*v)*P,e[6]=(A*p*u-d*S*u-A*l*m+i*S*m+d*l*v-i*p*v)*P,e[7]=(d*y*u-_*p*u+_*l*m-i*y*m-d*l*b+i*p*b)*P,e[8]=N*P,e[9]=(A*x*u-_*R*u-A*s*b+i*R*b+_*s*v-i*x*v)*P,e[10]=(d*R*u-A*h*u+A*s*m-i*R*m-d*s*v+i*h*v)*P,e[11]=(_*h*u-d*x*u-_*s*m+i*x*m+d*s*b-i*h*b)*P,e[12]=it*P,e[13]=(_*R*l-A*x*l+A*s*y-i*R*y-_*s*S+i*x*S)*P,e[14]=(A*h*l-d*R*l-A*s*p+i*R*p+d*s*S-i*h*S)*P,e[15]=(d*x*l-_*h*l+_*s*p-i*x*p-d*s*y+i*h*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,p=e.z,m=u*d,_=u*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+s,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,x=h+h,y=u*m,b=u*_,A=u*x,R=d*_,S=d*x,v=h*x,F=p*m,O=p*_,N=p*x,it=s.x,G=s.y,P=s.z;return l[0]=(1-(R+v))*it,l[1]=(b+N)*it,l[2]=(A-O)*it,l[3]=0,l[4]=(b-N)*G,l[5]=(1-(y+v))*G,l[6]=(S+F)*G,l[7]=0,l[8]=(A+O)*P,l[9]=(S-F)*P,l[10]=(1-(y+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=ur.set(l[0],l[1],l[2]).length();const d=ur.set(l[4],l[5],l[6]).length(),h=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const m=1/u,_=1/d,x=1/h;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=oa){const p=this.elements,m=2*u/(i-e),_=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let b,A;if(h===oa)b=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Oc)b=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=oa){const p=this.elements,m=1/(i-e),_=1/(s-l),x=1/(d-u),y=(i+e)*m,b=(s+l)*_;let A,R;if(h===oa)A=(d+u)*x,R=-2*x;else if(h===Oc)A=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ur=new Q,_i=new je,US=new Q(0,0,0),LS=new Q(1,1,1),Fa=new Q,lc=new Q,Yn=new Q,G0=new je,V0=new jo;class Ui{constructor(e=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],x=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(In(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-In(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(In(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return V0.setFromEuler(this),this.setFromQuaternion(V0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const k0=new Q,fr=new jo,ea=new je,cc=new Q,Oo=new Q,zS=new Q,PS=new jo,j0=new Q(1,0,0),X0=new Q(0,1,0),W0=new Q(0,0,1),q0={type:"added"},BS={type:"removed"},dr={type:"childadded",child:null},hd={type:"childremoved",child:null};class An extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Q,i=new Ui,s=new jo,l=new Q(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fr.setFromAxisAngle(e,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,i){return fr.setFromAxisAngle(e,i),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(X0,e)}rotateZ(e){return this.rotateOnAxis(W0,e)}translateOnAxis(e,i){return k0.copy(e).applyQuaternion(this.quaternion),this.position.add(k0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(X0,e)}translateZ(e){return this.translateOnAxis(W0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,cc,this.up):ea.lookAt(cc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(ea),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q0),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BS),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q0),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),x=d(e.shapes),y=d(e.skeletons),b=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Q,na=new Q,pd=new Q,ia=new Q,hr=new Q,pr=new Q,Y0=new Q,md=new Q,gd=new Q,vd=new Q,_d=new He,xd=new He,yd=new He;class ci{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),xi.subVectors(e,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){xi.subVectors(l,i),na.subVectors(s,i),pd.subVectors(e,i);const d=xi.dot(xi),h=xi.dot(na),p=xi.dot(pd),m=na.dot(na),_=na.dot(pd),x=d*m-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,b=(m*p-h*_)*y,A=(d*_-h*p)*y;return u.set(1-b-A,A,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,s,l,u,d,h,p){return this.getBarycoord(e,i,s,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(d,ia.y),p.addScaledVector(h,ia.z),p)}static getInterpolatedAttribute(e,i,s,l,u,d){return _d.setScalar(0),xd.setScalar(0),yd.setScalar(0),_d.fromBufferAttribute(e,i),xd.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(_d,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(yd,u.z),d}static isFrontFacing(e,i,s,l){return xi.subVectors(s,i),na.subVectors(e,i),xi.cross(na).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;hr.subVectors(l,s),pr.subVectors(u,s),md.subVectors(e,s);const p=hr.dot(md),m=pr.dot(md);if(p<=0&&m<=0)return i.copy(s);gd.subVectors(e,l);const _=hr.dot(gd),x=pr.dot(gd);if(_>=0&&x<=_)return i.copy(l);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(hr,d);vd.subVectors(e,u);const b=hr.dot(vd),A=pr.dot(vd);if(A>=0&&b<=A)return i.copy(u);const R=b*m-p*A;if(R<=0&&m>=0&&A<=0)return h=m/(m-A),i.copy(s).addScaledVector(pr,h);const S=_*A-b*x;if(S<=0&&x-_>=0&&b-A>=0)return Y0.subVectors(u,l),h=(x-_)/(x-_+(b-A)),i.copy(l).addScaledVector(Y0,h);const v=1/(S+R+y);return d=R*v,h=y*v,i.copy(s).addScaledVector(hr,d).addScaledVector(pr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Sd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Se{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=be.workingColorSpace){if(e=SS(e,1),i=In(i,0,1),s=In(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const s=Jv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return be.fromWorkingColorSpace(Tn.copy(this),e),Math.round(In(Tn.r*255,0,255))*65536+Math.round(In(Tn.g*255,0,255))*256+Math.round(In(Tn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(Tn.copy(this),i);const s=Tn.r,l=Tn.g,u=Tn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=_<=.5?x/(d+h):x/(2-d-h),d){case s:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-s)/x+2;break;case u:p=(s-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=li){be.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,s=Tn.g,l=Tn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(uc);const s=ad(Ia.h,uc.h,i),l=ad(Ia.s,uc.s,i),u=ad(Ia.l,uc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Se;Se.NAMES=Jv;let FS=0;class Ts extends Pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ja(),this.name="",this.blending=Ar,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pc extends Ts{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new Q,fc=new fe;class Mi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=yh,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ri(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ie(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ri(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ri(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ri(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ri(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array),u=Ie(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),e}}class $v extends Mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class t_ extends Mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Di extends Mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let IS=0;const oi=new je,Md=new An,mr=new Q,Zn=new Xo,zo=new Xo,dn=new Q;class Li extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?t_:$v)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,s){return oi.makeTranslation(e,i,s),this.applyMatrix4(oi),this}scale(e,i,s){return oi.makeScale(e,i,s),this.applyMatrix4(oi),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Di(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];zo.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors(Zn.min,zo.min),Zn.expandByPoint(dn),dn.addVectors(Zn.max,zo.max),Zn.expandByPoint(dn)):(Zn.expandByPoint(zo.min),Zn.expandByPoint(zo.max))}Zn.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(dn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)dn.fromBufferAttribute(h,m),p&&(mr.fromBufferAttribute(e,m),dn.add(mr)),l=Math.max(l,s.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<s.count;K++)h[K]=new Q,p[K]=new Q;const m=new Q,_=new Q,x=new Q,y=new fe,b=new fe,A=new fe,R=new Q,S=new Q;function v(K,D,w){m.fromBufferAttribute(s,K),_.fromBufferAttribute(s,D),x.fromBufferAttribute(s,w),y.fromBufferAttribute(u,K),b.fromBufferAttribute(u,D),A.fromBufferAttribute(u,w),_.sub(m),x.sub(m),b.sub(y),A.sub(y);const H=1/(b.x*A.y-A.x*b.y);isFinite(H)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(H),S.copy(x).multiplyScalar(b.x).addScaledVector(_,-A.x).multiplyScalar(H),h[K].add(R),h[D].add(R),h[w].add(R),p[K].add(S),p[D].add(S),p[w].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,D=F.length;K<D;++K){const w=F[K],H=w.start,ut=w.count;for(let rt=H,lt=H+ut;rt<lt;rt+=3)v(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const O=new Q,N=new Q,it=new Q,G=new Q;function P(K){it.fromBufferAttribute(l,K),G.copy(it);const D=h[K];O.copy(D),O.sub(it.multiplyScalar(it.dot(D))).normalize(),N.crossVectors(G,D);const H=N.dot(p[K])<0?-1:1;d.setXYZW(K,O.x,O.y,O.z,H)}for(let K=0,D=F.length;K<D;++K){const w=F[K],H=w.start,ut=w.count;for(let rt=H,lt=H+ut;rt<lt;rt+=3)P(e.getX(rt+0)),P(e.getX(rt+1)),P(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,p=new Q,m=new Q,_=new Q,x=new Q;if(e)for(let y=0,b=e.count;y<b;y+=3){const A=e.getX(y+0),R=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,S),h.add(_),p.add(_),m.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,x=h.normalized,y=new m.constructor(p.length*_);let b=0,A=0;for(let R=0,S=p.length;R<S;R++){h.isInterleavedBufferAttribute?b=p[R]*h.data.stride+h.offset:b=p[R]*_;for(let v=0;v<_;v++)y[A++]=m[b++]}return new Mi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,x=m.length;_<x;_++){const y=m[_],b=e(y,s);p.push(b)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const b=m[x];_.push(b.toJSON(e.data))}_.length>0&&(l[p]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let y=0,b=x.length;y<b;y++)_.push(x[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new je,hs=new Kv,dc=new Hc,K0=new Q,hc=new Q,pc=new Q,mc=new Q,bd=new Q,gc=new Q,Q0=new Q,vc=new Q;class ui extends An{constructor(e=new Li,i=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){gc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],x=u[p];_!==0&&(bd.fromBufferAttribute(x,e),d?gc.addScaledVector(bd,_):gc.addScaledVector(bd.sub(i),_))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(u),hs.copy(e.ray).recast(e.near),!(dc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(dc,K0)===null||hs.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(Z0.copy(u).invert(),hs.copy(e.ray).applyMatrix4(Z0),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,hs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,y=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const S=y[A],v=d[S.materialIndex],F=Math.max(S.start,b.start),O=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let N=F,it=O;N<it;N+=3){const G=h.getX(N),P=h.getX(N+1),K=h.getX(N+2);l=_c(this,v,e,s,m,_,x,G,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(h.count,b.start+b.count);for(let S=A,v=R;S<v;S+=3){const F=h.getX(S),O=h.getX(S+1),N=h.getX(S+2);l=_c(this,d,e,s,m,_,x,F,O,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const S=y[A],v=d[S.materialIndex],F=Math.max(S.start,b.start),O=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let N=F,it=O;N<it;N+=3){const G=N,P=N+1,K=N+2;l=_c(this,v,e,s,m,_,x,G,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(p.count,b.start+b.count);for(let S=A,v=R;S<v;S+=3){const F=S,O=S+1,N=S+2;l=_c(this,d,e,s,m,_,x,F,O,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function HS(o,e,i,s,l,u,d,h){let p;if(e.side===Hn?p=s.intersectTriangle(d,u,l,!0,h):p=s.intersectTriangle(l,u,d,e.side===Xa,h),p===null)return null;vc.copy(h),vc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(vc);return m<i.near||m>i.far?null:{distance:m,point:vc.clone(),object:o}}function _c(o,e,i,s,l,u,d,h,p,m){o.getVertexPosition(h,hc),o.getVertexPosition(p,pc),o.getVertexPosition(m,mc);const _=HS(o,e,i,s,hc,pc,mc,Q0);if(_){const x=new Q;ci.getBarycoord(Q0,hc,pc,mc,x),l&&(_.uv=ci.getInterpolatedAttribute(l,h,p,m,x,new fe)),u&&(_.uv1=ci.getInterpolatedAttribute(u,h,p,m,x,new fe)),d&&(_.normal=ci.getInterpolatedAttribute(d,h,p,m,x,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new Q,materialIndex:0};ci.getNormal(hc,pc,mc,y.normal),_.face=y,_.barycoord=x}return _}class Wo extends Li{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],x=[];let y=0,b=0;A("z","y","x",-1,-1,s,i,e,d,u,0),A("z","y","x",1,-1,s,i,-e,d,u,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Di(m,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(x,2));function A(R,S,v,F,O,N,it,G,P,K,D){const w=N/P,H=it/K,ut=N/2,rt=it/2,lt=G/2,ht=P+1,z=K+1;let Z=0,q=0;const St=new Q;for(let Et=0;Et<z;Et++){const L=Et*H-rt;for(let tt=0;tt<ht;tt++){const xt=tt*w-ut;St[R]=xt*F,St[S]=L*O,St[v]=lt,m.push(St.x,St.y,St.z),St[R]=0,St[S]=0,St[v]=G>0?1:-1,_.push(St.x,St.y,St.z),x.push(tt/P),x.push(1-Et/K),Z+=1}}for(let Et=0;Et<K;Et++)for(let L=0;L<P;L++){const tt=y+L+ht*Et,xt=y+L+ht*(Et+1),Y=y+(L+1)+ht*(Et+1),ft=y+(L+1)+ht*Et;p.push(tt,xt,ft),p.push(xt,Y,ft),q+=6}h.addGroup(b,q,D),b+=q,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Rn(o){const e={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)e[l]=s[l]}return e}function GS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function e_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const VS={clone:Or,merge:Rn};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Ts{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class n_ extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new Q,J0=new fe,$0=new fe;class Kn extends n_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,i){return this.getViewBounds(e,J0,$0),i.subVectors($0,J0)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(id*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,vr=1;class XS extends An{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(gr,vr,e,i);l.layers=this.layers,this.add(l);const u=new Kn(gr,vr,e,i);u.layers=this.layers,this.add(u);const d=new Kn(gr,vr,e,i);d.layers=this.layers,this.add(d);const h=new Kn(gr,vr,e,i);h.layers=this.layers,this.add(h);const p=new Kn(gr,vr,e,i);p.layers=this.layers,this.add(p);const m=new Kn(gr,vr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(x,y,b),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class i_ extends Dn{constructor(e,i,s,l,u,d,h,p,m,_){e=e!==void 0?e:[],i=i!==void 0?i:Nr,super(e,i,s,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new i_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wo(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:Va});u.uniforms.tEquirect.value=i;const d=new ui(l,u),h=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ni),new XS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const Ed=new Q,qS=new Q,YS=new le;class vs{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ed.subVectors(s,i).cross(qS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ed),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||YS.getNormalMatrix(e),l=this.coplanarPoint(Ed).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Hc,xc=new Q;class Lh{constructor(e=new vs,i=new vs,s=new vs,l=new vs,u=new vs,d=new vs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],_=l[5],x=l[6],y=l[7],b=l[8],A=l[9],R=l[10],S=l[11],v=l[12],F=l[13],O=l[14],N=l[15];if(s[0].setComponents(p-u,y-m,S-b,N-v).normalize(),s[1].setComponents(p+u,y+m,S+b,N+v).normalize(),s[2].setComponents(p+d,y+_,S+A,N+F).normalize(),s[3].setComponents(p-d,y-_,S-A,N-F).normalize(),s[4].setComponents(p-h,y-x,S-R,N-O).normalize(),i===oa)s[5].setComponents(p+h,y+x,S+R,N+O).normalize();else if(i===Oc)s[5].setComponents(h,x,R,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a_(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ZS(o){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,x=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,_),h.onUploadCallback();let b;if(m instanceof Float32Array)b=o.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=o.SHORT;else if(m instanceof Uint32Array)b=o.UNSIGNED_INT;else if(m instanceof Int32Array)b=o.INT;else if(m instanceof Int8Array)b=o.BYTE;else if(m instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,p,m){const _=p.array,x=p.updateRanges;if(o.bindBuffer(m,h),x.length===0)o.bufferSubData(m,0,_);else{x.sort((b,A)=>b.start-A.start);let y=0;for(let b=1;b<x.length;b++){const A=x[y],R=x[b];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++y,x[y]=R)}x.length=y+1;for(let b=0,A=x.length;b<A;b++){const R=x[b];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}class Gc extends Li{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,_=p+1,x=e/h,y=i/p,b=[],A=[],R=[],S=[];for(let v=0;v<_;v++){const F=v*y-d;for(let O=0;O<m;O++){const N=O*x-u;A.push(N,-F,0),R.push(0,0,1),S.push(O/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let F=0;F<h;F++){const O=F+m*v,N=F+m*(v+1),it=F+1+m*(v+1),G=F+1+m*v;b.push(O,N,G),b.push(N,it,G)}this.setIndex(b),this.setAttribute("position",new Di(A,3)),this.setAttribute("normal",new Di(R,3)),this.setAttribute("uv",new Di(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}var KS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:KS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:$S,alphatest_fragment:tM,alphatest_pars_fragment:eM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:aM,batching_vertex:sM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:vM,color_vertex:_M,common:xM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:SM,displacementmap_pars_vertex:MM,displacementmap_vertex:bM,emissivemap_fragment:EM,emissivemap_pars_fragment:TM,colorspace_fragment:AM,colorspace_pars_fragment:CM,envmap_fragment:wM,envmap_common_pars_fragment:RM,envmap_pars_fragment:NM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:VM,envmap_vertex:UM,fog_vertex:LM,fog_pars_vertex:OM,fog_fragment:zM,fog_pars_fragment:PM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:FM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:HM,lights_pars_begin:GM,lights_toon_fragment:kM,lights_toon_pars_fragment:jM,lights_phong_fragment:XM,lights_phong_pars_fragment:WM,lights_physical_fragment:qM,lights_physical_pars_fragment:YM,lights_fragment_begin:ZM,lights_fragment_maps:KM,lights_fragment_end:QM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:eb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:db,normal_fragment_begin:hb,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:vb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:Mb,opaque_fragment:bb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Rb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Ob,skinbase_vertex:zb,skinning_pars_vertex:Pb,skinning_vertex:Bb,skinnormal_vertex:Fb,specularmap_fragment:Ib,specularmap_pars_fragment:Hb,tonemapping_fragment:Gb,tonemapping_pars_fragment:Vb,transmission_fragment:kb,transmission_pars_fragment:jb,uv_pars_fragment:Xb,uv_pars_vertex:Wb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:t1,depth_vert:e1,depth_frag:n1,distanceRGBA_vert:i1,distanceRGBA_frag:a1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:v1,meshphong_frag:_1,meshphysical_vert:x1,meshphysical_frag:y1,meshtoon_vert:S1,meshtoon_frag:M1,points_vert:b1,points_frag:E1,shadow_vert:T1,shadow_frag:A1,sprite_vert:C1,sprite_frag:w1},Lt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Rn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Rn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Rn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Rn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Rn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Rn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Rn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Rn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Rn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Rn([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Rn([Lt.lights,Lt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const yc={r:0,b:0,g:0},ms=new Ui,R1=new je;function N1(o,e,i,s,l,u,d){const h=new Se(0);let p=u===!0?0:1,m,_,x=null,y=0,b=null;function A(F){let O=F.isScene===!0?F.background:null;return O&&O.isTexture&&(O=(F.backgroundBlurriness>0?i:e).get(O)),O}function R(F){let O=!1;const N=A(F);N===null?v(h,p):N&&N.isColor&&(v(N,1),O=!0);const it=o.xr.getEnvironmentBlendMode();it==="additive"?s.buffers.color.setClear(0,0,0,1,d):it==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(F,O){const N=A(O);N&&(N.isCubeTexture||N.mapping===Fc)?(_===void 0&&(_=new ui(new Wo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Or(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(it,G,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(O.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(ms)),_.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,(x!==N||y!==N.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,x=N,y=N.version,b=o.toneMapping),_.layers.enableAll(),F.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ui(new Gc(2,2),new Wa({name:"BackgroundMaterial",uniforms:Or(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||b!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,y=N.version,b=o.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function v(F,O){F.getRGB(yc,e_(o)),s.buffers.color.setClear(yc.r,yc.g,yc.b,O,d)}return{getClearColor:function(){return h},setClearColor:function(F,O=1){h.set(F),p=O,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,v(h,p)},render:R,addToRenderList:S}}function D1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,d=!1;function h(w,H,ut,rt,lt){let ht=!1;const z=x(rt,ut,H);u!==z&&(u=z,m(u.object)),ht=b(w,rt,ut,lt),ht&&A(w,rt,ut,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,N(w,H,ut,rt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function p(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function x(w,H,ut){const rt=ut.wireframe===!0;let lt=s[w.id];lt===void 0&&(lt={},s[w.id]=lt);let ht=lt[H.id];ht===void 0&&(ht={},lt[H.id]=ht);let z=ht[rt];return z===void 0&&(z=y(p()),ht[rt]=z),z}function y(w){const H=[],ut=[],rt=[];for(let lt=0;lt<i;lt++)H[lt]=0,ut[lt]=0,rt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ut,attributeDivisors:rt,object:w,attributes:{},index:null}}function b(w,H,ut,rt){const lt=u.attributes,ht=H.attributes;let z=0;const Z=ut.getAttributes();for(const q in Z)if(Z[q].location>=0){const Et=lt[q];let L=ht[q];if(L===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),Et===void 0||Et.attribute!==L||L&&Et.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function A(w,H,ut,rt){const lt={},ht=H.attributes;let z=0;const Z=ut.getAttributes();for(const q in Z)if(Z[q].location>=0){let Et=ht[q];Et===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const L={};L.attribute=Et,Et&&Et.data&&(L.data=Et.data),lt[q]=L,z++}u.attributes=lt,u.attributesNum=z,u.index=rt}function R(){const w=u.newAttributes;for(let H=0,ut=w.length;H<ut;H++)w[H]=0}function S(w){v(w,0)}function v(w,H){const ut=u.newAttributes,rt=u.enabledAttributes,lt=u.attributeDivisors;ut[w]=1,rt[w]===0&&(o.enableVertexAttribArray(w),rt[w]=1),lt[w]!==H&&(o.vertexAttribDivisor(w,H),lt[w]=H)}function F(){const w=u.newAttributes,H=u.enabledAttributes;for(let ut=0,rt=H.length;ut<rt;ut++)H[ut]!==w[ut]&&(o.disableVertexAttribArray(ut),H[ut]=0)}function O(w,H,ut,rt,lt,ht,z){z===!0?o.vertexAttribIPointer(w,H,ut,lt,ht):o.vertexAttribPointer(w,H,ut,rt,lt,ht)}function N(w,H,ut,rt){R();const lt=rt.attributes,ht=ut.getAttributes(),z=H.defaultAttributeValues;for(const Z in ht){const q=ht[Z];if(q.location>=0){let St=lt[Z];if(St===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Et=St.normalized,L=St.itemSize,tt=e.get(St);if(tt===void 0)continue;const xt=tt.buffer,Y=tt.type,ft=tt.bytesPerElement,bt=Y===o.INT||Y===o.UNSIGNED_INT||St.gpuType===Ch;if(St.isInterleavedBufferAttribute){const yt=St.data,Bt=yt.stride,zt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ee=0;ee<q.locationSize;ee++)v(q.location+ee,yt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ee=0;ee<q.locationSize;ee++)S(q.location+ee);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ee=0;ee<q.locationSize;ee++)O(q.location+ee,L/q.locationSize,Y,Et,Bt*ft,(zt+L/q.locationSize*ee)*ft,bt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)v(q.location+yt,St.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<q.locationSize;yt++)S(q.location+yt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let yt=0;yt<q.locationSize;yt++)O(q.location+yt,L/q.locationSize,Y,Et,L*ft,L/q.locationSize*yt*ft,bt)}}else if(z!==void 0){const Et=z[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(q.location,Et);break;case 3:o.vertexAttrib3fv(q.location,Et);break;case 4:o.vertexAttrib4fv(q.location,Et);break;default:o.vertexAttrib1fv(q.location,Et)}}}}F()}function it(){K();for(const w in s){const H=s[w];for(const ut in H){const rt=H[ut];for(const lt in rt)_(rt[lt].object),delete rt[lt];delete H[ut]}delete s[w]}}function G(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ut in H){const rt=H[ut];for(const lt in rt)_(rt[lt].object),delete rt[lt];delete H[ut]}delete s[w.id]}function P(w){for(const H in s){const ut=s[H];if(ut[w.id]===void 0)continue;const rt=ut[w.id];for(const lt in rt)_(rt[lt].object),delete rt[lt];delete ut[w.id]}}function K(){D(),d=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:D,dispose:it,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:S,disableUnusedAttributes:F}}function U1(o,e,i){let s;function l(m){s=m}function u(m,_){o.drawArrays(s,m,_),i.update(_,s,1)}function d(m,_,x){x!==0&&(o.drawArraysInstanced(s,m,_,x),i.update(_,s,x))}function h(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,x);let b=0;for(let A=0;A<x;A++)b+=_[A];i.update(b,s,1)}function p(m,_,x,y){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<m.length;A++)d(m[A],_[A],y[A]);else{b.multiDrawArraysInstancedWEBGL(s,m,0,_,0,y,0,x);let A=0;for(let R=0;R<x;R++)A+=_[R]*y[R];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function L1(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==yi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const K=P===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ca&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!K)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),it=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:N,vertexTextures:it,maxSamples:G}}function O1(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new vs,h=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const b=x.length!==0||y||s!==0||l;return l=y,s=x.length,b},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,b){const A=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?_(null):m();else{const F=u?0:s,O=F*4;let N=v.clippingState||null;p.value=N,N=_(A,y,O,b);for(let it=0;it!==O;++it)N[it]=i[it];v.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,y,b,A){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=p.value,A!==!0||S===null){const v=b+R*4,F=y.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<v)&&(S=new Float32Array(v));for(let O=0,N=b;O!==R;++O,N+=4)d.copy(x[O]).applyMatrix4(F,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function z1(o){let e=new WeakMap;function i(d,h){return h===jd?d.mapping=Nr:h===Xd&&(d.mapping=Dr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===jd||h===Xd)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new WS(p.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class P1 extends n_{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const br=4,tv=[.125,.215,.35,.446,.526,.582],ys=20,Td=new P1,ev=new Se;let Ad=null,Cd=0,wd=0,Rd=!1;const _s=(1+Math.sqrt(5))/2,_r=1/_s,nv=[new Q(-_s,_r,0),new Q(_s,_r,0),new Q(-_r,0,_s),new Q(_r,0,_s),new Q(0,_s,-_r),new Q(0,_s,_r),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Cd,wd),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:ko,format:yi,colorSpace:zr,depthBuffer:!1},l=av(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(u)),this._blurMaterial=F1(u,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,Td)}_sceneToCubeUV(e,i,s,l){const h=new Kn(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(ev),_.toneMapping=ka,_.autoClear=!1;const b=new Pc({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),A=new ui(new Wo,b);let R=!1;const S=e.background;S?S.isColor&&(b.color.copy(S),e.background=null,R=!0):(b.color.copy(ev),R=!0);for(let v=0;v<6;v++){const F=v%3;F===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):F===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const O=this._cubeSize;Sc(l,F*O,v>2?O:0,O,O),_.setRenderTarget(l),R&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Nr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ui(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Sc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Td)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=nv[(l-u-1)%nv.length];this._blur(e,u-1,u,d,h)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new ui(this._lodPlanes[l],m),y=m.uniforms,b=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*ys-1),R=u/A,S=isFinite(u)?1+Math.floor(_*R):ys;S>ys&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const v=[];let F=0;for(let P=0;P<ys;++P){const K=P/R,D=Math.exp(-K*K/2);v.push(D),P===0?F+=D:P<S&&(F+=2*D)}for(let P=0;P<v.length;P++)v[P]=v[P]/F;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=A,y.mipInt.value=O-s;const N=this._sizeLods[l],it=3*N*(l>O-br?l-O+br:0),G=4*(this._cubeSize-N);Sc(i,it,G,3*N,2*N),p.setRenderTarget(i),p.render(x,Td)}}function B1(o){const e=[],i=[],s=[];let l=o;const u=o-br+1+tv.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-br?p=tv[d-o+br-1]:d===0&&(p=0),s.push(p);const m=1/(h-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],b=6,A=6,R=3,S=2,v=1,F=new Float32Array(R*A*b),O=new Float32Array(S*A*b),N=new Float32Array(v*A*b);for(let G=0;G<b;G++){const P=G%3*2/3-1,K=G>2?0:-1,D=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];F.set(D,R*A*G),O.set(y,S*A*G);const w=[G,G,G,G,G,G];N.set(w,v*A*G)}const it=new Li;it.setAttribute("position",new Mi(F,R)),it.setAttribute("uv",new Mi(O,S)),it.setAttribute("faceIndex",new Mi(N,v)),e.push(it),l>br&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function av(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function F1(o,e,i){const s=new Float32Array(ys),l=new Q(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function sv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function rv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===jd||p===Xd,_=p===Nr||p===Dr;if(m||_){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new iv(o)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return m&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new iv(o)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function H1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ho("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function G1(o,e,i,s){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const R=y.morphAttributes[A];for(let S=0,v=R.length;S<v;S++)e.remove(R[S])}y.removeEventListener("dispose",d),delete l[y.id];const b=u.get(y);b&&(e.remove(b),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const b=x.morphAttributes;for(const A in b){const R=b[A];for(let S=0,v=R.length;S<v;S++)e.update(R[S],o.ARRAY_BUFFER)}}function m(x){const y=[],b=x.index,A=x.attributes.position;let R=0;if(b!==null){const F=b.array;R=b.version;for(let O=0,N=F.length;O<N;O+=3){const it=F[O+0],G=F[O+1],P=F[O+2];y.push(it,G,G,P,P,it)}}else if(A!==void 0){const F=A.array;R=A.version;for(let O=0,N=F.length/3-1;O<N;O+=3){const it=O+0,G=O+1,P=O+2;y.push(it,G,G,P,P,it)}}else return;const S=new(qv(y)?t_:$v)(y,1);S.version=R;const v=u.get(x);v&&e.remove(v),u.set(x,S)}function _(x){const y=u.get(x);if(y){const b=x.index;b!==null&&y.version<b.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:_}}function V1(o,e,i){let s;function l(y){s=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function p(y,b){o.drawElements(s,b,u,y*d),i.update(b,s,1)}function m(y,b,A){A!==0&&(o.drawElementsInstanced(s,b,u,y*d,A),i.update(b,s,A))}function _(y,b,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,y,0,A);let S=0;for(let v=0;v<A;v++)S+=b[v];i.update(S,s,1)}function x(y,b,A,R){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)m(y[v]/d,b[v],R[v]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,u,y,0,R,0,A);let v=0;for(let F=0;F<A;F++)v+=b[F]*R[F];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function k1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function j1(o,e,i){const s=new WeakMap,l=new He;function u(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(h);if(y===void 0||y.count!==x){let w=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var b=w;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;A===!0&&(N=1),R===!0&&(N=2),S===!0&&(N=3);let it=h.attributes.position.count*N,G=1;it>e.maxTextureSize&&(G=Math.ceil(it/e.maxTextureSize),it=e.maxTextureSize);const P=new Float32Array(it*G*4*x),K=new Zv(P,it,G,x);K.type=ra,K.needsUpdate=!0;const D=N*4;for(let H=0;H<x;H++){const ut=v[H],rt=F[H],lt=O[H],ht=it*G*4*H;for(let z=0;z<ut.count;z++){const Z=z*D;A===!0&&(l.fromBufferAttribute(ut,z),P[ht+Z+0]=l.x,P[ht+Z+1]=l.y,P[ht+Z+2]=l.z,P[ht+Z+3]=0),R===!0&&(l.fromBufferAttribute(rt,z),P[ht+Z+4]=l.x,P[ht+Z+5]=l.y,P[ht+Z+6]=l.z,P[ht+Z+7]=0),S===!0&&(l.fromBufferAttribute(lt,z),P[ht+Z+8]=l.x,P[ht+Z+9]=l.y,P[ht+Z+10]=l.z,P[ht+Z+11]=lt.itemSize===4?l.w:1)}}y={count:x,texture:K,size:new fe(it,G)},s.set(h,y),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<m.length;S++)A+=m[S];const R=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function X1(o,e,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,_=p.geometry,x=e.get(p,_);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}class s_ extends Dn{constructor(e,i,s,l,u,d,h,p,m,_=Cr){if(_!==Cr&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Cr&&(s=bs),s===void 0&&_===Lr&&(s=Ur),super(null,l,u,d,h,p,_,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Si,this.minFilter=p!==void 0?p:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const r_=new Dn,ov=new s_(1,1),o_=new Zv,l_=new NS,c_=new i_,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),dv=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=lv[l];if(u===void 0&&(u=new Float32Array(l),lv[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Vc(o,e){let i=cv[e];i===void 0&&(i=new Int32Array(e),cv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function W1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function q1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function Y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function Z1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function K1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;dv.set(s),o.uniformMatrix2fv(this.addr,!1,dv),cn(i,s)}}function Q1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;fv.set(s),o.uniformMatrix3fv(this.addr,!1,fv),cn(i,s)}}function J1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;uv.set(s),o.uniformMatrix4fv(this.addr,!1,uv),cn(i,s)}}function $1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function tE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function eE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function nE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function iE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function aE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function sE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function rE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function oE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(ov.compareFunction=Wv,u=ov):u=r_,i.setTexture2D(e||u,l)}function lE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||l_,l)}function cE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||c_,l)}function uE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||o_,l)}function fE(o){switch(o){case 5126:return W1;case 35664:return q1;case 35665:return Y1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return tE;case 35668:case 35672:return eE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return aE;case 36295:return sE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return uE}}function dE(o,e){o.uniform1fv(this.addr,e)}function hE(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function pE(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function mE(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function gE(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vE(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _E(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function xE(o,e){o.uniform1iv(this.addr,e)}function yE(o,e){o.uniform2iv(this.addr,e)}function SE(o,e){o.uniform3iv(this.addr,e)}function ME(o,e){o.uniform4iv(this.addr,e)}function bE(o,e){o.uniform1uiv(this.addr,e)}function EE(o,e){o.uniform2uiv(this.addr,e)}function TE(o,e){o.uniform3uiv(this.addr,e)}function AE(o,e){o.uniform4uiv(this.addr,e)}function CE(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||r_,u[d])}function wE(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||l_,u[d])}function RE(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||c_,u[d])}function NE(o,e,i){const s=this.cache,l=e.length,u=Vc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||o_,u[d])}function DE(o){switch(o){case 5126:return dE;case 35664:return hE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return vE;case 35676:return _E;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return SE;case 35669:case 35673:return ME;case 5125:return bE;case 36294:return EE;case 36295:return TE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return NE}}class UE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fE(i.type)}}class LE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DE(i.type)}}class OE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function hv(o,e){o.seq.push(e),o.map[e.id]=e}function zE(o,e,i){const s=o.name,l=s.length;for(Nd.lastIndex=0;;){const u=Nd.exec(s),d=Nd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){hv(i,m===void 0?new UE(h,o,e):new LE(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new OE(h),hv(i,x)),i=x}}}class Lc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);zE(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function pv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const PE=37297;let BE=0;function FE(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const mv=new le;function IE(o){be._getMatrix(mv,be.workingColorSpace,o);const e=`mat3( ${mv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ic:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function gv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+FE(o.getShaderSource(e),d)}else return l}function HE(o,e){const i=IE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function GE(o,e){let i;switch(e){case iS:i="Linear";break;case aS:i="Reinhard";break;case sS:i="Cineon";break;case rS:i="ACESFilmic";break;case lS:i="AgX";break;case cS:i="Neutral";break;case oS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new Q;function VE(){be.getLuminanceCoefficients(Mc);const o=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function jE(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function XE(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Go(o){return o!==""}function vv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(o){return o.replace(WE,YE)}const qE=new Map;function YE(o,e){let i=ce[e];if(i===void 0){const s=qE.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Mh(i)}const ZE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(o){return o.replace(ZE,KE)}function KE(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function yv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Py?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function JE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Nr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $E(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function eT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function nT(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=QE(i),m=JE(i),_=$E(i),x=tT(i),y=eT(i),b=kE(i),A=jE(u),R=l.createProgram();let S,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Go).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Go).join(`
`),v.length>0&&(v+=`
`)):(S=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),v=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?GE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,HE("linearToOutputTexel",i.outputColorSpace),VE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),d=Mh(d),d=vv(d,i),d=_v(d,i),h=Mh(h),h=vv(h,i),h=_v(h,i),d=xv(d),h=xv(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=F+S+d,N=F+v+h,it=pv(l,l.VERTEX_SHADER,O),G=pv(l,l.FRAGMENT_SHADER,N);l.attachShader(R,it),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(H){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(it).trim(),lt=l.getShaderInfoLog(G).trim();let ht=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,it,G);else{const Z=gv(l,it,"vertex"),q=gv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+Z+`
`+q)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(rt===""||lt==="")&&(z=!1);z&&(H.diagnostics={runnable:ht,programLog:ut,vertexShader:{log:rt,prefix:S},fragmentShader:{log:lt,prefix:v}})}l.deleteShader(it),l.deleteShader(G),K=new Lc(l,R),D=XE(l,R)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,PE)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=it,this.fragmentShader=G,this}let iT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new sT(e),i.set(e,s)),s}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function rT(o,e,i,s,l,u,d){const h=new Qv,p=new aT,m=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,w,H,ut,rt){const lt=ut.fog,ht=rt.geometry,z=D.isMeshStandardMaterial?ut.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),q=Z&&Z.mapping===Fc?Z.image.height:null,St=A[D.type];D.precision!==null&&(b=l.getMaxPrecision(D.precision),b!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,L=Et!==void 0?Et.length:0;let tt=0;ht.morphAttributes.position!==void 0&&(tt=1),ht.morphAttributes.normal!==void 0&&(tt=2),ht.morphAttributes.color!==void 0&&(tt=3);let xt,Y,ft,bt;if(St){const Me=wi[St];xt=Me.vertexShader,Y=Me.fragmentShader}else xt=D.vertexShader,Y=D.fragmentShader,p.update(D),ft=p.getVertexShaderID(D),bt=p.getFragmentShaderID(D);const yt=o.getRenderTarget(),Bt=o.state.buffers.depth.getReversed(),zt=rt.isInstancedMesh===!0,ee=rt.isBatchedMesh===!0,Ce=!!D.map,re=!!D.matcap,Xe=!!Z,X=!!D.aoMap,yn=!!D.lightMap,ue=!!D.bumpMap,pe=!!D.normalMap,Zt=!!D.displacementMap,Re=!!D.emissiveMap,qt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,nt=D.clearcoat>0,pt=D.dispersion>0,Mt=D.iridescence>0,gt=D.sheen>0,jt=D.transmission>0,Dt=T&&!!D.anisotropyMap,Pt=nt&&!!D.clearcoatMap,me=nt&&!!D.clearcoatNormalMap,At=nt&&!!D.clearcoatRoughnessMap,Ft=Mt&&!!D.iridescenceMap,Yt=Mt&&!!D.iridescenceThicknessMap,Xt=gt&&!!D.sheenColorMap,Ot=gt&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,ae=!!D.specularColorMap,Le=!!D.specularIntensityMap,V=jt&&!!D.transmissionMap,Ct=jt&&!!D.thicknessMap,ct=!!D.gradientMap,_t=!!D.alphaMap,wt=D.alphaTest>0,Ut=!!D.alphaHash,$t=!!D.extensions;let We=ka;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(We=o.toneMapping);const sn={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Y,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:bt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:ee,batchingColor:ee&&rt._colorsTexture!==null,instancing:zt,instancingColor:zt&&rt.instanceColor!==null,instancingMorph:zt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:zr,alphaToCoverage:!!D.alphaToCoverage,map:Ce,matcap:re,envMap:Xe,envMapMode:Xe&&Z.mapping,envMapCubeUVHeight:q,aoMap:X,lightMap:yn,bumpMap:ue,normalMap:pe,displacementMap:y&&Zt,emissiveMap:Re,normalMapObjectSpace:pe&&D.normalMapType===hS,normalMapTangentSpace:pe&&D.normalMapType===Xv,metalnessMap:qt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:nt,clearcoatMap:Pt,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:pt,iridescence:Mt,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:gt,sheenColorMap:Xt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Le,transmission:jt,transmissionMap:V,thicknessMap:Ct,gradientMap:ct,opaque:D.transparent===!1&&D.blending===Ar&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:D.combine,mapUv:Ce&&R(D.map.channel),aoMapUv:X&&R(D.aoMap.channel),lightMapUv:yn&&R(D.lightMap.channel),bumpMapUv:ue&&R(D.bumpMap.channel),normalMapUv:pe&&R(D.normalMap.channel),displacementMapUv:Zt&&R(D.displacementMap.channel),emissiveMapUv:Re&&R(D.emissiveMap.channel),metalnessMapUv:qt&&R(D.metalnessMap.channel),roughnessMapUv:U&&R(D.roughnessMap.channel),anisotropyMapUv:Dt&&R(D.anisotropyMap.channel),clearcoatMapUv:Pt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(D.sheenRoughnessMap.channel),specularMapUv:Jt&&R(D.specularMap.channel),specularColorMapUv:ae&&R(D.specularColorMap.channel),specularIntensityMapUv:Le&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ct&&R(D.thicknessMap.channel),alphaMapUv:_t&&R(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(pe||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ht.attributes.uv&&(Ce||_t),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Bt,skinning:rt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Ce&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:Re&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===sa,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:$t&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&D.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return sn.vertexUv1s=m.has(1),sn.vertexUv2s=m.has(2),sn.vertexUv3s=m.has(3),m.clear(),sn}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)w.push(H),w.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(F(w,D),O(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function F(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function O(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function N(D){const w=A[D.type];let H;if(w){const ut=wi[w];H=VS.clone(ut.uniforms)}else H=D.uniforms;return H}function it(D,w){let H;for(let ut=0,rt=_.length;ut<rt;ut++){const lt=_[ut];if(lt.cacheKey===w){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new nT(o,w,D,u),_.push(H)),H}function G(D){if(--D.usedTimes===0){const w=_.indexOf(D);_[w]=_[_.length-1],_.pop(),D.destroy()}}function P(D){p.remove(D)}function K(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:N,acquireProgram:it,releaseProgram:G,releaseShaderCache:P,programs:_,dispose:K}}function oT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function lT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Sv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Mv(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,b,A,R,S){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:b,groupOrder:A,renderOrder:x.renderOrder,z:R,group:S},o[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=b,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=R,v.group=S),e++,v}function h(x,y,b,A,R,S){const v=d(x,y,b,A,R,S);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):i.push(v)}function p(x,y,b,A,R,S){const v=d(x,y,b,A,R,S);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function m(x,y){i.length>1&&i.sort(x||lT),s.length>1&&s.sort(y||Sv),l.length>1&&l.sort(y||Sv)}function _(){for(let x=e,y=o.length;x<y;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:p,finish:_,sort:m}}function cT(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new Mv,o.set(s,[d])):l>=u.length?(d=new Mv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function uT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Se};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function fT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let dT=0;function hT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pT(o){const e=new uT,i=fT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Q);const l=new Q,u=new je,d=new je;function h(m){let _=0,x=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let b=0,A=0,R=0,S=0,v=0,F=0,O=0,N=0,it=0,G=0,P=0;m.sort(hT);for(let D=0,w=m.length;D<w;D++){const H=m[D],ut=H.color,rt=H.intensity,lt=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=ut.r*rt,x+=ut.g*rt,y+=ut.b*rt;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],rt);P++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[b]=q,s.directionalShadowMap[b]=ht,s.directionalShadowMatrix[b]=H.shadow.matrix,F++}s.directional[b]=z,b++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(ut).multiplyScalar(rt),z.distance=lt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[R]=z;const Z=H.shadow;if(H.map&&(s.spotLightMap[it]=H.map,it++,Z.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[R]=Z.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[R]=q,s.spotShadowMap[R]=ht,N++}R++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(ut).multiplyScalar(rt),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=z,S++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const Z=H.shadow,q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[A]=q,s.pointShadowMap[A]=ht,s.pointShadowMatrix[A]=H.shadow.matrix,O++}s.point[A]=z,A++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(rt),z.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[v]=z,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==b||K.pointLength!==A||K.spotLength!==R||K.rectAreaLength!==S||K.hemiLength!==v||K.numDirectionalShadows!==F||K.numPointShadows!==O||K.numSpotShadows!==N||K.numSpotMaps!==it||K.numLightProbes!==P)&&(s.directional.length=b,s.spot.length=R,s.rectArea.length=S,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+it-G,s.spotLightMap.length=it,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=P,K.directionalLength=b,K.pointLength=A,K.spotLength=R,K.rectAreaLength=S,K.hemiLength=v,K.numDirectionalShadows=F,K.numPointShadows=O,K.numSpotShadows=N,K.numSpotMaps=it,K.numLightProbes=P,s.version=dT++)}function p(m,_){let x=0,y=0,b=0,A=0,R=0;const S=_.matrixWorldInverse;for(let v=0,F=m.length;v<F;v++){const O=m[v];if(O.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),x++}else if(O.isSpotLight){const N=s.spot[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),b++}else if(O.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),d.identity(),u.copy(O.matrixWorld),u.premultiply(S),d.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const N=s.point[y];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),y++}else if(O.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(S),R++}}}return{setup:h,setupView:p,state:s}}function bv(o){const e=new pT(o),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function mT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new bv(o),e.set(l,[h])):u>=d.length?(h=new bv(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}class gT extends Ts{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends Ts{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yT(o,e,i){let s=new Lh;const l=new fe,u=new fe,d=new He,h=new gT({depthPacking:dS}),p=new vT,m={},_=i.maxTextureSize,x={[Xa]:Hn,[Hn]:Xa,[sa]:sa},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:_T,fragmentShader:xT}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const A=new Li;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ui(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lv;let v=this.type;this.render=function(G,P,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Va),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const rt=v!==aa&&this.type===aa,lt=v===aa&&this.type!==aa;for(let ht=0,z=G.length;ht<z;ht++){const Z=G[ht],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),u.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/St.x),l.x=u.x*St.x,q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/St.y),l.y=u.y*St.y,q.mapSize.y=u.y)),q.map===null||rt===!0||lt===!0){const L=this.type!==aa?{minFilter:Si,magFilter:Si}:{};q.map!==null&&q.map.dispose(),q.map=new Es(l.x,l.y,L),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Et=q.getViewportCount();for(let L=0;L<Et;L++){const tt=q.getViewport(L);d.set(u.x*tt.x,u.y*tt.y,u.x*tt.z,u.y*tt.w),ut.viewport(d),q.updateMatrices(Z,L),s=q.getFrustum(),N(P,K,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&F(q,K),q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(D,w,H)};function F(G,P){const K=e.update(R);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Es(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,K,y,R,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,K,b,R,null)}function O(G,P,K,D){let w=null;const H=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)w=H;else if(w=K.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ut=w.uuid,rt=P.uuid;let lt=m[ut];lt===void 0&&(lt={},m[ut]=lt);let ht=lt[rt];ht===void 0&&(ht=w.clone(),lt[rt]=ht,P.addEventListener("dispose",it)),w=ht}if(w.visible=P.visible,w.wireframe=P.wireframe,D===aa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:x[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ut=o.properties.get(w);ut.light=K}return w}function N(G,P,K,D,w){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===aa)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const rt=e.update(G),lt=G.material;if(Array.isArray(lt)){const ht=rt.groups;for(let z=0,Z=ht.length;z<Z;z++){const q=ht[z],St=lt[q.materialIndex];if(St&&St.visible){const Et=O(G,St,D,w);G.onBeforeShadow(o,G,P,K,rt,Et,q),o.renderBufferDirect(K,null,rt,Et,G,q),G.onAfterShadow(o,G,P,K,rt,Et,q)}}}else if(lt.visible){const ht=O(G,lt,D,w);G.onBeforeShadow(o,G,P,K,rt,ht,null),o.renderBufferDirect(K,null,rt,ht,G,null),G.onAfterShadow(o,G,P,K,rt,ht,null)}}const ut=G.children;for(let rt=0,lt=ut.length;rt<lt;rt++)N(ut[rt],P,K,D,w)}function it(G){G.target.removeEventListener("dispose",it);for(const K in m){const D=m[K],w=G.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const ST={[Bd]:Fd,[Id]:Vd,[Hd]:kd,[Rr]:Gd,[Fd]:Bd,[Vd]:Id,[kd]:Hd,[Gd]:Rr};function MT(o,e){function i(){let V=!1;const Ct=new He;let ct=null;const _t=new He(0,0,0,0);return{setMask:function(wt){ct!==wt&&!V&&(o.colorMask(wt,wt,wt,wt),ct=wt)},setLocked:function(wt){V=wt},setClear:function(wt,Ut,$t,We,sn){sn===!0&&(wt*=We,Ut*=We,$t*=We),Ct.set(wt,Ut,$t,We),_t.equals(Ct)===!1&&(o.clearColor(wt,Ut,$t,We),_t.copy(Ct))},reset:function(){V=!1,ct=null,_t.set(-1,0,0,0)}}}function s(){let V=!1,Ct=!1,ct=null,_t=null,wt=null;return{setReversed:function(Ut){if(Ct!==Ut){const $t=e.get("EXT_clip_control");Ct?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const We=wt;wt=null,this.setClear(We)}Ct=Ut},getReversed:function(){return Ct},setTest:function(Ut){Ut?yt(o.DEPTH_TEST):Bt(o.DEPTH_TEST)},setMask:function(Ut){ct!==Ut&&!V&&(o.depthMask(Ut),ct=Ut)},setFunc:function(Ut){if(Ct&&(Ut=ST[Ut]),_t!==Ut){switch(Ut){case Bd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Id:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ut}},setLocked:function(Ut){V=Ut},setClear:function(Ut){wt!==Ut&&(Ct&&(Ut=1-Ut),o.clearDepth(Ut),wt=Ut)},reset:function(){V=!1,ct=null,_t=null,wt=null,Ct=!1}}}function l(){let V=!1,Ct=null,ct=null,_t=null,wt=null,Ut=null,$t=null,We=null,sn=null;return{setTest:function(Me){V||(Me?yt(o.STENCIL_TEST):Bt(o.STENCIL_TEST))},setMask:function(Me){Ct!==Me&&!V&&(o.stencilMask(Me),Ct=Me)},setFunc:function(Me,hn,fi){(ct!==Me||_t!==hn||wt!==fi)&&(o.stencilFunc(Me,hn,fi),ct=Me,_t=hn,wt=fi)},setOp:function(Me,hn,fi){(Ut!==Me||$t!==hn||We!==fi)&&(o.stencilOp(Me,hn,fi),Ut=Me,$t=hn,We=fi)},setLocked:function(Me){V=Me},setClear:function(Me){sn!==Me&&(o.clearStencil(Me),sn=Me)},reset:function(){V=!1,Ct=null,ct=null,_t=null,wt=null,Ut=null,$t=null,We=null,sn=null}}}const u=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let _={},x={},y=new WeakMap,b=[],A=null,R=!1,S=null,v=null,F=null,O=null,N=null,it=null,G=null,P=new Se(0,0,0),K=0,D=!1,w=null,H=null,ut=null,rt=null,lt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=Z>=2);let St=null,Et={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),xt=new He().fromArray(L),Y=new He().fromArray(tt);function ft(V,Ct,ct,_t){const wt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(V,Ut),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ct;$t++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Ct+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Ut}const bt={};bt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),bt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),bt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),yt(o.DEPTH_TEST),d.setFunc(Rr),ue(!1),pe(w0),yt(o.CULL_FACE),X(Va);function yt(V){_[V]!==!0&&(o.enable(V),_[V]=!0)}function Bt(V){_[V]!==!1&&(o.disable(V),_[V]=!1)}function zt(V,Ct){return x[V]!==Ct?(o.bindFramebuffer(V,Ct),x[V]=Ct,V===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ct),V===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ee(V,Ct){let ct=b,_t=!1;if(V){ct=y.get(Ct),ct===void 0&&(ct=[],y.set(Ct,ct));const wt=V.textures;if(ct.length!==wt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)ct[Ut]=o.COLOR_ATTACHMENT0+Ut;ct.length=wt.length,_t=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ct)}function Ce(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const re={[xs]:o.FUNC_ADD,[Fy]:o.FUNC_SUBTRACT,[Iy]:o.FUNC_REVERSE_SUBTRACT};re[Hy]=o.MIN,re[Gy]=o.MAX;const Xe={[Vy]:o.ZERO,[ky]:o.ONE,[jy]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[Ky]:o.SRC_ALPHA_SATURATE,[Yy]:o.DST_COLOR,[Wy]:o.DST_ALPHA,[Xy]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[Zy]:o.ONE_MINUS_DST_COLOR,[qy]:o.ONE_MINUS_DST_ALPHA,[Qy]:o.CONSTANT_COLOR,[Jy]:o.ONE_MINUS_CONSTANT_COLOR,[$y]:o.CONSTANT_ALPHA,[tS]:o.ONE_MINUS_CONSTANT_ALPHA};function X(V,Ct,ct,_t,wt,Ut,$t,We,sn,Me){if(V===Va){R===!0&&(Bt(o.BLEND),R=!1);return}if(R===!1&&(yt(o.BLEND),R=!0),V!==By){if(V!==S||Me!==D){if((v!==xs||N!==xs)&&(o.blendEquation(o.FUNC_ADD),v=xs,N=xs),Me)switch(V){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R0:o.blendFunc(o.ONE,o.ONE);break;case N0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case N0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}F=null,O=null,it=null,G=null,P.set(0,0,0),K=0,S=V,D=Me}return}wt=wt||Ct,Ut=Ut||ct,$t=$t||_t,(Ct!==v||wt!==N)&&(o.blendEquationSeparate(re[Ct],re[wt]),v=Ct,N=wt),(ct!==F||_t!==O||Ut!==it||$t!==G)&&(o.blendFuncSeparate(Xe[ct],Xe[_t],Xe[Ut],Xe[$t]),F=ct,O=_t,it=Ut,G=$t),(We.equals(P)===!1||sn!==K)&&(o.blendColor(We.r,We.g,We.b,sn),P.copy(We),K=sn),S=V,D=!1}function yn(V,Ct){V.side===sa?Bt(o.CULL_FACE):yt(o.CULL_FACE);let ct=V.side===Hn;Ct&&(ct=!ct),ue(ct),V.blending===Ar&&V.transparent===!1?X(Va):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const _t=V.stencilWrite;h.setTest(_t),_t&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function pe(V){V!==Oy?(yt(o.CULL_FACE),V!==H&&(V===w0?o.cullFace(o.BACK):V===zy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Bt(o.CULL_FACE),H=V}function Zt(V){V!==ut&&(z&&o.lineWidth(V),ut=V)}function Re(V,Ct,ct){V?(yt(o.POLYGON_OFFSET_FILL),(rt!==Ct||lt!==ct)&&(o.polygonOffset(Ct,ct),rt=Ct,lt=ct)):Bt(o.POLYGON_OFFSET_FILL)}function qt(V){V?yt(o.SCISSOR_TEST):Bt(o.SCISSOR_TEST)}function U(V){V===void 0&&(V=o.TEXTURE0+ht-1),St!==V&&(o.activeTexture(V),St=V)}function T(V,Ct,ct){ct===void 0&&(St===null?ct=o.TEXTURE0+ht-1:ct=St);let _t=Et[ct];_t===void 0&&(_t={type:void 0,texture:void 0},Et[ct]=_t),(_t.type!==V||_t.texture!==Ct)&&(St!==ct&&(o.activeTexture(ct),St=ct),o.bindTexture(V,Ct||bt[V]),_t.type=V,_t.texture=Ct)}function nt(){const V=Et[St];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(V){xt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function Ot(V){Y.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Jt(V,Ct){let ct=m.get(Ct);ct===void 0&&(ct=new WeakMap,m.set(Ct,ct));let _t=ct.get(V);_t===void 0&&(_t=o.getUniformBlockIndex(Ct,V.name),ct.set(V,_t))}function ae(V,Ct){const _t=m.get(Ct).get(V);p.get(Ct)!==_t&&(o.uniformBlockBinding(Ct,_t,V.__bindingPointIndex),p.set(Ct,_t))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,Et={},x={},y=new WeakMap,b=[],A=null,R=!1,S=null,v=null,F=null,O=null,N=null,it=null,G=null,P=new Se(0,0,0),K=0,D=!1,w=null,H=null,ut=null,rt=null,lt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:yt,disable:Bt,bindFramebuffer:zt,drawBuffers:ee,useProgram:Ce,setBlending:X,setMaterial:yn,setFlipSided:ue,setCullFace:pe,setLineWidth:Zt,setPolygonOffset:Re,setScissorTest:qt,activeTexture:U,bindTexture:T,unbindTexture:nt,compressedTexImage2D:pt,compressedTexImage3D:Mt,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:me,texStorage3D:At,texSubImage2D:gt,texSubImage3D:jt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Pt,scissor:Xt,viewport:Ot,reset:Le}}function Ev(o,e,i,s){const l=bT(s);switch(i){case Fv:return o*e;case Hv:return o*e;case Gv:return o*e*2;case Vv:return o*e/l.components*l.byteLength;case Nh:return o*e/l.components*l.byteLength;case kv:return o*e*2/l.components*l.byteLength;case Dh:return o*e*2/l.components*l.byteLength;case Iv:return o*e*3/l.components*l.byteLength;case yi:return o*e*4/l.components*l.byteLength;case Uh:return o*e*4/l.components*l.byteLength;case wc:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Qd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case Kd:return Math.max(o,8)*Math.max(e,8)/2;case Jd:case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Uc:case mh:case gh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case jv:case vh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _h:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bT(o){switch(o){case ca:case zv:return{byteLength:1,components:1};case Vo:case Pv:case ko:return{byteLength:2,components:1};case wh:case Rh:return{byteLength:2,components:4};case bs:case Ch:case ra:return{byteLength:4,components:1};case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function ET(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new fe,_=new WeakMap;let x;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return b?new OffscreenCanvas(U,T):zc("canvas")}function R(U,T,nt){let pt=1;const Mt=qt(U);if((Mt.width>nt||Mt.height>nt)&&(pt=nt/Math.max(Mt.width,Mt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const gt=Math.floor(pt*Mt.width),jt=Math.floor(pt*Mt.height);x===void 0&&(x=A(gt,jt));const Dt=T?A(gt,jt):x;return Dt.width=gt,Dt.height=jt,Dt.getContext("2d").drawImage(U,0,0,gt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+jt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,nt,pt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let gt=T;if(T===o.RED&&(nt===o.FLOAT&&(gt=o.R32F),nt===o.HALF_FLOAT&&(gt=o.R16F),nt===o.UNSIGNED_BYTE&&(gt=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.R8UI),nt===o.UNSIGNED_SHORT&&(gt=o.R16UI),nt===o.UNSIGNED_INT&&(gt=o.R32UI),nt===o.BYTE&&(gt=o.R8I),nt===o.SHORT&&(gt=o.R16I),nt===o.INT&&(gt=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(gt=o.RG32F),nt===o.HALF_FLOAT&&(gt=o.RG16F),nt===o.UNSIGNED_BYTE&&(gt=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RG16UI),nt===o.UNSIGNED_INT&&(gt=o.RG32UI),nt===o.BYTE&&(gt=o.RG8I),nt===o.SHORT&&(gt=o.RG16I),nt===o.INT&&(gt=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),nt===o.UNSIGNED_INT&&(gt=o.RGB32UI),nt===o.BYTE&&(gt=o.RGB8I),nt===o.SHORT&&(gt=o.RGB16I),nt===o.INT&&(gt=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(gt=o.RGBA32UI),nt===o.BYTE&&(gt=o.RGBA8I),nt===o.SHORT&&(gt=o.RGBA16I),nt===o.INT&&(gt=o.RGBA32I)),T===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),T===o.RGBA){const jt=Mt?Ic:be.getTransfer(pt);nt===o.FLOAT&&(gt=o.RGBA32F),nt===o.HALF_FLOAT&&(gt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(gt=jt===Fe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function N(U,T){let nt;return U?T===null||T===bs||T===Ur?nt=o.DEPTH24_STENCIL8:T===ra?nt=o.DEPTH32F_STENCIL8:T===Vo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bs||T===Ur?nt=o.DEPTH_COMPONENT24:T===ra?nt=o.DEPTH_COMPONENT32F:T===Vo&&(nt=o.DEPTH_COMPONENT16),nt}function it(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Si&&U.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),K(T),T.isVideoTexture&&_.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),w(T)}function K(U){const T=s.get(U);if(T.__webglInit===void 0)return;const nt=U.source,pt=y.get(nt);if(pt){const Mt=pt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(U),Object.keys(pt).length===0&&y.delete(nt)}s.remove(U)}function D(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,pt=y.get(nt);delete pt[T.__cacheKey],d.memory.textures--}function w(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let Mt=0;Mt<T.__webglFramebuffer[pt].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[pt][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let pt=0,Mt=nt.length;pt<Mt;pt++){const gt=s.get(nt[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),d.memory.textures--),s.remove(nt[pt])}s.remove(U)}let H=0;function ut(){H=0}function rt(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function lt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ht(U,T){const nt=s.get(U);if(U.isVideoTexture&&Zt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(nt,U,T);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function z(U,T){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){Y(nt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){Y(nt,U,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){ft(nt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const St={[Wd]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},Et={[Si]:o.NEAREST,[uS]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[nd]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},L={[pS]:o.NEVER,[yS]:o.ALWAYS,[mS]:o.LESS,[Wv]:o.LEQUAL,[gS]:o.EQUAL,[xS]:o.GEQUAL,[vS]:o.GREATER,[_S]:o.NOTEQUAL};function tt(U,T){if(T.type===ra&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===nd||T.magFilter===nc||T.magFilter===Ms||T.minFilter===Ni||T.minFilter===nd||T.minFilter===nc||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Si||T.minFilter!==nc&&T.minFilter!==Ms||T.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const pt=T.source;let Mt=y.get(pt);Mt===void 0&&(Mt={},y.set(pt,Mt));const gt=lt(T);if(gt!==U.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),Mt[gt].usedTimes++;const jt=Mt[U.__cacheKey];jt!==void 0&&(Mt[U.__cacheKey].usedTimes--,jt.usedTimes===0&&D(T)),U.__cacheKey=gt,U.__webglTexture=Mt[gt].texture}return nt}function Y(U,T,nt){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const Mt=xt(U,T),gt=T.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+nt);const jt=s.get(gt);if(gt.version!==jt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+nt);const Dt=be.getPrimaries(be.workingColorSpace),Pt=T.colorSpace===Ga?null:be.getPrimaries(T.colorSpace),me=T.colorSpace===Ga||Dt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=R(T.image,!1,l.maxTextureSize);At=Re(T,At);const Ft=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Xt=O(T.internalFormat,Ft,Yt,T.colorSpace,T.isVideoTexture);tt(pt,T);let Ot;const Jt=T.mipmaps,ae=T.isVideoTexture!==!0,Le=jt.__version===void 0||Mt===!0,V=gt.dataReady,Ct=it(T,At);if(T.isDepthTexture)Xt=N(T.format===Lr,T.type),Le&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Xt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Ft,Yt,null));else if(T.isDataTexture)if(Jt.length>0){ae&&Le&&i.texStorage2D(o.TEXTURE_2D,Ct,Xt,Jt[0].width,Jt[0].height);for(let ct=0,_t=Jt.length;ct<_t;ct++)Ot=Jt[ct],ae?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,Xt,Ot.width,Ot.height,0,Ft,Yt,Ot.data);T.generateMipmaps=!1}else ae?(Le&&i.texStorage2D(o.TEXTURE_2D,Ct,Xt,At.width,At.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ft,Yt,At.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,At.width,At.height,0,Ft,Yt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Xt,Jt[0].width,Jt[0].height,At.depth);for(let ct=0,_t=Jt.length;ct<_t;ct++)if(Ot=Jt[ct],T.format!==yi)if(Ft!==null)if(ae){if(V)if(T.layerUpdates.size>0){const wt=Ev(Ot.width,Ot.height,T.format,T.type);for(const Ut of T.layerUpdates){const $t=Ot.data.subarray(Ut*wt/Ot.data.BYTES_PER_ELEMENT,(Ut+1)*wt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Ut,Ot.width,Ot.height,1,Ft,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,At.depth,Ft,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Xt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,At.depth,Ft,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,Xt,Ot.width,Ot.height,At.depth,0,Ft,Yt,Ot.data)}else{ae&&Le&&i.texStorage2D(o.TEXTURE_2D,Ct,Xt,Jt[0].width,Jt[0].height);for(let ct=0,_t=Jt.length;ct<_t;ct++)Ot=Jt[ct],T.format!==yi?Ft!==null?ae?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,Xt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,Xt,Ot.width,Ot.height,0,Ft,Yt,Ot.data)}else if(T.isDataArrayTexture)if(ae){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Xt,At.width,At.height,At.depth),V)if(T.layerUpdates.size>0){const ct=Ev(At.width,At.height,T.format,T.type);for(const _t of T.layerUpdates){const wt=At.data.subarray(_t*ct/At.data.BYTES_PER_ELEMENT,(_t+1)*ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Ft,Yt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ft,Yt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,At.width,At.height,At.depth,0,Ft,Yt,At.data);else if(T.isData3DTexture)ae?(Le&&i.texStorage3D(o.TEXTURE_3D,Ct,Xt,At.width,At.height,At.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ft,Yt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,At.width,At.height,At.depth,0,Ft,Yt,At.data);else if(T.isFramebufferTexture){if(Le)if(ae)i.texStorage2D(o.TEXTURE_2D,Ct,Xt,At.width,At.height);else{let ct=At.width,_t=At.height;for(let wt=0;wt<Ct;wt++)i.texImage2D(o.TEXTURE_2D,wt,Xt,ct,_t,0,Ft,Yt,null),ct>>=1,_t>>=1}}else if(Jt.length>0){if(ae&&Le){const ct=qt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Xt,ct.width,ct.height)}for(let ct=0,_t=Jt.length;ct<_t;ct++)Ot=Jt[ct],ae?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ft,Yt,Ot):i.texImage2D(o.TEXTURE_2D,ct,Xt,Ft,Yt,Ot);T.generateMipmaps=!1}else if(ae){if(Le){const ct=qt(At);i.texStorage2D(o.TEXTURE_2D,Ct,Xt,ct.width,ct.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Yt,At)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Ft,Yt,At);S(T)&&v(pt),jt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ft(U,T,nt){if(T.image.length!==6)return;const pt=xt(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const gt=s.get(Mt);if(Mt.version!==gt.__version||pt===!0){i.activeTexture(o.TEXTURE0+nt);const jt=be.getPrimaries(be.workingColorSpace),Dt=T.colorSpace===Ga?null:be.getPrimaries(T.colorSpace),Pt=T.colorSpace===Ga||jt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!me&&!At?Ft[_t]=R(T.image[_t],!0,l.maxCubemapSize):Ft[_t]=At?T.image[_t].image:T.image[_t],Ft[_t]=Re(T,Ft[_t]);const Yt=Ft[0],Xt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),Jt=O(T.internalFormat,Xt,Ot,T.colorSpace),ae=T.isVideoTexture!==!0,Le=gt.__version===void 0||pt===!0,V=Mt.dataReady;let Ct=it(T,Yt);tt(o.TEXTURE_CUBE_MAP,T);let ct;if(me){ae&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Jt,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ct=Ft[_t].mipmaps;for(let wt=0;wt<ct.length;wt++){const Ut=ct[wt];T.format!==yi?Xt!==null?ae?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Xt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,Jt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Xt,Ot,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,Jt,Ut.width,Ut.height,0,Xt,Ot,Ut.data)}}}else{if(ct=T.mipmaps,ae&&Le){ct.length>0&&Ct++;const _t=qt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ae?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Xt,Ot,Ft[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Ft[_t].width,Ft[_t].height,0,Xt,Ot,Ft[_t].data);for(let wt=0;wt<ct.length;wt++){const $t=ct[wt].image[_t].image;ae?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,$t.width,$t.height,Xt,Ot,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,Jt,$t.width,$t.height,0,Xt,Ot,$t.data)}}else{ae?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ot,Ft[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Xt,Ot,Ft[_t]);for(let wt=0;wt<ct.length;wt++){const Ut=ct[wt];ae?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Xt,Ot,Ut.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,Jt,Xt,Ot,Ut.image[_t])}}}S(T)&&v(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function bt(U,T,nt,pt,Mt,gt){const jt=u.convert(nt.format,nt.colorSpace),Dt=u.convert(nt.type),Pt=O(nt.internalFormat,jt,Dt,nt.colorSpace),me=s.get(T),At=s.get(nt);if(At.__renderTarget=T,!me.__hasExternalTextures){const Ft=Math.max(1,T.width>>gt),Yt=Math.max(1,T.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,gt,Pt,Ft,Yt,T.depth,0,jt,Dt,null):i.texImage2D(Mt,gt,Pt,Ft,Yt,0,jt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),pe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,0,ue(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Mt,At.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const pt=T.depthTexture,Mt=pt&&pt.isDepthTexture?pt.type:null,gt=N(T.stencilBuffer,Mt),jt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ue(T);pe(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,gt,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,gt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,gt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,U)}else{const pt=T.textures;for(let Mt=0;Mt<pt.length;Mt++){const gt=pt[Mt],jt=u.convert(gt.format,gt.colorSpace),Dt=u.convert(gt.type),Pt=O(gt.internalFormat,jt,Dt,gt.colorSpace),me=ue(T);nt&&pe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Pt,T.width,T.height):pe(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const Mt=pt.__webglTexture,gt=ue(T);if(T.depthTexture.format===Cr)pe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Lr)pe(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function zt(U){const T=s.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",Mt)};pt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=pt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Bt(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),yt(T.__webglDepthbuffer[pt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),yt(T.__webglDepthbuffer,U,!1);else{const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(U,T,nt){const pt=s.get(U);T!==void 0&&bt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&zt(U)}function Ce(U){const T=U.texture,nt=s.get(U),pt=s.get(T);U.addEventListener("dispose",P);const Mt=U.textures,gt=U.isWebGLCubeRenderTarget===!0,jt=Mt.length>1;if(jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,d.memory.textures++),gt){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)nt.__webglFramebuffer[Dt][Pt]=o.createFramebuffer()}else nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Dt=0,Pt=Mt.length;Dt<Pt;Dt++){const me=s.get(Mt[Dt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&pe(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const Pt=Mt[Dt];nt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const me=u.convert(Pt.format,Pt.colorSpace),At=u.convert(Pt.type),Ft=O(Pt.internalFormat,me,At,Pt.colorSpace,U.isXRRenderTarget===!0),Yt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ft,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)bt(nt.__webglFramebuffer[Dt][Pt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Pt);else bt(nt.__webglFramebuffer[Dt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Dt=0,Pt=Mt.length;Dt<Pt;Dt++){const me=Mt[Dt],At=s.get(me);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),tt(o.TEXTURE_2D,me),bt(nt.__webglFramebuffer,U,me,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),S(me)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),tt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)bt(nt.__webglFramebuffer[Pt],U,T,o.COLOR_ATTACHMENT0,Dt,Pt);else bt(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Dt,0);S(T)&&v(Dt),i.unbindTexture()}U.depthBuffer&&zt(U)}function re(U){const T=U.textures;for(let nt=0,pt=T.length;nt<pt;nt++){const Mt=T[nt];if(S(Mt)){const gt=F(U),jt=s.get(Mt).__webglTexture;i.bindTexture(gt,jt),v(gt),i.unbindTexture()}}}const Xe=[],X=[];function yn(U){if(U.samples>0){if(pe(U)===!1){const T=U.textures,nt=U.width,pt=U.height;let Mt=o.COLOR_BUFFER_BIT;const gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(U),Dt=T.length>1;if(Dt)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Pt]);const me=s.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,Mt,o.NEAREST),p===!0&&(Xe.length=0,X.length=0,Xe.push(o.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Xe.push(gt),X.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Xe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Pt]);const me=s.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ue(U){return Math.min(l.maxSamples,U.samples)}function pe(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(U){const T=d.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function Re(U,T){const nt=U.colorSpace,pt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==zr&&nt!==Ga&&(be.getTransfer(nt)===Fe?(pt!==yi||Mt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=ut,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=ee,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=pe}function TT(o,e){function i(s,l=Ga){let u;const d=be.getTransfer(l);if(s===ca)return o.UNSIGNED_BYTE;if(s===wh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Bv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===zv)return o.BYTE;if(s===Pv)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Ch)return o.INT;if(s===bs)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ko)return o.HALF_FLOAT;if(s===Fv)return o.ALPHA;if(s===Iv)return o.RGB;if(s===yi)return o.RGBA;if(s===Hv)return o.LUMINANCE;if(s===Gv)return o.LUMINANCE_ALPHA;if(s===Cr)return o.DEPTH_COMPONENT;if(s===Lr)return o.DEPTH_STENCIL;if(s===Vv)return o.RED;if(s===Nh)return o.RED_INTEGER;if(s===kv)return o.RG;if(s===Dh)return o.RG_INTEGER;if(s===Uh)return o.RGBA_INTEGER;if(s===wc||s===Rc||s===Nc||s===Dc)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===Zd||s===Kd||s===Qd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Yd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jd||s===$d||s===th)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Jd||s===$d)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===th)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eh||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===eh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ah)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ch)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hh)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===mh||s===gh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jv||s===vh||s===_h||s===xh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===vh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_h)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class AT extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CT={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,s),v=this._getHandJoint(m,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),b=.02,A=.005;m.inputState.pinching&&y>b+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=b-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Er;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Dn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wa({vertexShader:wT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends Pr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,x=null,y=null,b=null,A=null;const R=new NT,S=i.getContextAttributes();let v=null,F=null;const O=[],N=[],it=new fe;let G=null;const P=new Kn;P.viewport=new He;const K=new Kn;K.viewport=new He;const D=[P,K],w=new AT;let H=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=O[Y];return ft===void 0&&(ft=new Dd,O[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=O[Y];return ft===void 0&&(ft=new Dd,O[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=O[Y];return ft===void 0&&(ft=new Dd,O[Y]=ft),ft.getHandSpace()};function rt(Y){const ft=N.indexOf(Y.inputSource);if(ft===-1)return;const bt=O[ft];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,m||d),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function lt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ht);for(let Y=0;Y<O.length;Y++){const ft=N[Y];ft!==null&&(N[Y]=null,O[Y].disconnect(ft))}H=null,ut=null,R.reset(),e.setRenderTarget(v),b=null,y=null,x=null,l=null,F=null,xt.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(it.width,it.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(it),l.renderState.layers===void 0){const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),F=new Es(b.framebufferWidth,b.framebufferHeight,{format:yi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ft=null,bt=null,yt=null;S.depth&&(yt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=S.stencil?Lr:Cr,bt=S.stencil?Ur:bs);const Bt={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Bt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),F=new Es(y.textureWidth,y.textureHeight,{format:yi,type:ca,depthTexture:new s_(y.textureWidth,y.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(Y){for(let ft=0;ft<Y.removed.length;ft++){const bt=Y.removed[ft],yt=N.indexOf(bt);yt>=0&&(N[yt]=null,O[yt].disconnect(bt))}for(let ft=0;ft<Y.added.length;ft++){const bt=Y.added[ft];let yt=N.indexOf(bt);if(yt===-1){for(let zt=0;zt<O.length;zt++)if(zt>=N.length){N.push(bt),yt=zt;break}else if(N[zt]===null){N[zt]=bt,yt=zt;break}if(yt===-1)break}const Bt=O[yt];Bt&&Bt.connect(bt)}}const z=new Q,Z=new Q;function q(Y,ft,bt){z.setFromMatrixPosition(ft.matrixWorld),Z.setFromMatrixPosition(bt.matrixWorld);const yt=z.distanceTo(Z),Bt=ft.projectionMatrix.elements,zt=bt.projectionMatrix.elements,ee=Bt[14]/(Bt[10]-1),Ce=Bt[14]/(Bt[10]+1),re=(Bt[9]+1)/Bt[5],Xe=(Bt[9]-1)/Bt[5],X=(Bt[8]-1)/Bt[0],yn=(zt[8]+1)/zt[0],ue=ee*X,pe=ee*yn,Zt=yt/(-X+yn),Re=Zt*-X;if(ft.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(Zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Bt[10]===-1)Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const qt=ee+Zt,U=Ce+Zt,T=ue-Re,nt=pe+(yt-Re),pt=re*Ce/U*qt,Mt=Xe*Ce/U*qt;Y.projectionMatrix.makePerspective(T,nt,pt,Mt,qt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ft=Y.near,bt=Y.far;R.texture!==null&&(R.depthNear>0&&(ft=R.depthNear),R.depthFar>0&&(bt=R.depthFar)),w.near=K.near=P.near=ft,w.far=K.far=P.far=bt,(H!==w.near||ut!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ut=w.far),P.layers.mask=Y.layers.mask|2,K.layers.mask=Y.layers.mask|4,w.layers.mask=P.layers.mask|K.layers.mask;const yt=Y.parent,Bt=w.cameras;St(w,yt);for(let zt=0;zt<Bt.length;zt++)St(Bt[zt],yt);Bt.length===2?q(w,P,K):w.projectionMatrix.copy(P.projectionMatrix),Et(Y,w,yt)};function Et(Y,ft,bt){bt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&b===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let L=null;function tt(Y,ft){if(_=ft.getViewerPose(m||d),A=ft,_!==null){const bt=_.views;b!==null&&(e.setRenderTargetFramebuffer(F,b.framebuffer),e.setRenderTarget(F));let yt=!1;bt.length!==w.cameras.length&&(w.cameras.length=0,yt=!0);for(let zt=0;zt<bt.length;zt++){const ee=bt[zt];let Ce=null;if(b!==null)Ce=b.getViewport(ee);else{const Xe=x.getViewSubImage(y,ee);Ce=Xe.viewport,zt===0&&(e.setRenderTargetTextures(F,Xe.colorTexture,y.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(F))}let re=D[zt];re===void 0&&(re=new Kn,re.layers.enable(zt),re.viewport=new He,D[zt]=re),re.matrix.fromArray(ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),zt===0&&(w.matrix.copy(re.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),yt===!0&&w.cameras.push(re)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const zt=x.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&R.init(e,zt,l.renderState)}}for(let bt=0;bt<O.length;bt++){const yt=N[bt],Bt=O[bt];yt!==null&&Bt!==void 0&&Bt.update(yt,ft,m||d)}L&&L(Y,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),A=null}const xt=new a_;xt.setAnimationLoop(tt),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const gs=new Ui,UT=new je;function LT(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,e_(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,F,O,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),_(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&b(S,v,N)):v.isMeshMatcapMaterial?(u(S,v),A(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),R(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,F,O):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Hn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Hn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const F=e.get(v),O=F.envMap,N=F.envMapRotation;O&&(S.envMap.value=O,gs.copy(N),gs.x*=-1,gs.y*=-1,gs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.envMapRotation.value.setFromMatrix4(UT.makeRotationFromEuler(gs)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,F,O){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*F,S.scale.value=O*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,F){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const F=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OT(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,O){const N=O.program;s.uniformBlockBinding(F,N)}function m(F,O){let N=l[F.id];N===void 0&&(A(F),N=_(F),l[F.id]=N,F.addEventListener("dispose",S));const it=O.program;s.updateUBOMapping(F,it);const G=e.render.frame;u[F.id]!==G&&(y(F),u[F.id]=G)}function _(F){const O=x();F.__bindingPointIndex=O;const N=o.createBuffer(),it=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,it,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function x(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const O=l[F.id],N=F.uniforms,it=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,P=N.length;G<P;G++){const K=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,w=K.length;D<w;D++){const H=K[D];if(b(H,G,D,it)===!0){const ut=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let ht=0;ht<rt.length;ht++){const z=rt[ht],Z=R(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ut+lt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,lt),lt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(F,O,N,it){const G=F.value,P=O+"_"+N;if(it[P]===void 0)return typeof G=="number"||typeof G=="boolean"?it[P]=G:it[P]=G.clone(),!0;{const K=it[P];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return it[P]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function A(F){const O=F.uniforms;let N=0;const it=16;for(let P=0,K=O.length;P<K;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,H=D.length;w<H;w++){const ut=D[w],rt=Array.isArray(ut.value)?ut.value:[ut.value];for(let lt=0,ht=rt.length;lt<ht;lt++){const z=rt[lt],Z=R(z),q=N%it,St=q%Z.boundary,Et=q+St;N+=St,Et!==0&&it-Et<Z.storage&&(N+=it-Et),ut.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=N,N+=Z.storage}}}const G=N%it;return G>0&&(N+=it-G),F.__size=N,F.__cache={},this}function R(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),O}function S(F){const O=F.target;O.removeEventListener("dispose",S);const N=d.indexOf(O.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class zT{constructor(e={}){const{canvas:i=MS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const A=new Uint32Array(4),R=new Int32Array(4);let S=null,v=null;const F=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=ka,this.toneMappingExposure=1;const N=this;let it=!1,G=0,P=0,K=null,D=-1,w=null;const H=new He,ut=new He;let rt=null;const lt=new Se(0);let ht=0,z=i.width,Z=i.height,q=1,St=null,Et=null;const L=new He(0,0,z,Z),tt=new He(0,0,z,Z);let xt=!1;const Y=new Lh;let ft=!1,bt=!1;const yt=new je,Bt=new je,zt=new Q,ee=new He,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Xe(){return K===null?q:1}let X=s;function yn(C,k){return i.getContext(C,k)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Th}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),X===null){const k="webgl2";if(X=yn(k,C),X===null)throw yn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,pe,Zt,Re,qt,U,T,nt,pt,Mt,gt,jt,Dt,Pt,me,At,Ft,Yt,Xt,Ot,Jt,ae,Le,V;function Ct(){ue=new H1(X),ue.init(),ae=new TT(X,ue),pe=new L1(X,ue,e,ae),Zt=new MT(X,ue),pe.reverseDepthBuffer&&y&&Zt.buffers.depth.setReversed(!0),Re=new k1(X),qt=new oT,U=new ET(X,ue,Zt,qt,pe,ae,Re),T=new z1(N),nt=new I1(N),pt=new ZS(X),Le=new D1(X,pt),Mt=new G1(X,pt,Re,Le),gt=new X1(X,Mt,pt,Re),Xt=new j1(X,pe,U),At=new O1(qt),jt=new rT(N,T,nt,ue,pe,Le,At),Dt=new LT(N,qt),Pt=new cT,me=new mT(ue),Yt=new N1(N,T,nt,Zt,gt,b,p),Ft=new yT(N,gt,pe),V=new OT(X,Re,pe,Zt),Ot=new U1(X,ue,Re),Jt=new V1(X,ue,Re),Re.programs=jt.programs,N.capabilities=pe,N.extensions=ue,N.properties=qt,N.renderLists=Pt,N.shadowMap=Ft,N.state=Zt,N.info=Re}Ct();const ct=new DT(N,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(z,Z,!1))},this.getSize=function(C){return C.set(z,Z)},this.setSize=function(C,k,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,Z=k,i.width=Math.floor(C*q),i.height=Math.floor(k*q),st===!0&&(i.style.width=C+"px",i.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(z*q,Z*q).floor()},this.setDrawingBufferSize=function(C,k,st){z=C,Z=k,q=st,i.width=Math.floor(C*st),i.height=Math.floor(k*st),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,k,st,at){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,k,st,at),Zt.viewport(H.copy(L).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,k,st,at){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,k,st,at),Zt.scissor(ut.copy(tt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){Zt.setScissorTest(xt=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(C=!0,k=!0,st=!0){let at=0;if(C){let j=!1;if(K!==null){const Tt=K.texture.format;j=Tt===Uh||Tt===Dh||Tt===Nh}if(j){const Tt=K.texture.type,Rt=Tt===ca||Tt===bs||Tt===Vo||Tt===Ur||Tt===wh||Tt===Rh,Nt=Yt.getClearColor(),Gt=Yt.getClearAlpha(),te=Nt.r,Qt=Nt.g,It=Nt.b;Rt?(A[0]=te,A[1]=Qt,A[2]=It,A[3]=Gt,X.clearBufferuiv(X.COLOR,0,A)):(R[0]=te,R[1]=Qt,R[2]=It,R[3]=Gt,X.clearBufferiv(X.COLOR,0,R))}else at|=X.COLOR_BUFFER_BIT}k&&(at|=X.DEPTH_BUFFER_BIT),st&&(at|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Pt.dispose(),me.dispose(),qt.dispose(),T.dispose(),nt.dispose(),gt.dispose(),Le.dispose(),V.dispose(),jt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Fr),ct.removeEventListener("sessionend",Ir),bi.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),it=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),it=!1;const C=Re.autoReset,k=Ft.enabled,st=Ft.autoUpdate,at=Ft.needsUpdate,j=Ft.type;Ct(),Re.autoReset=C,Ft.enabled=k,Ft.autoUpdate=st,Ft.needsUpdate=at,Ft.type=j}function Ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const k=C.target;k.removeEventListener("dispose",$t),We(k)}function We(C){sn(C),qt.remove(C)}function sn(C){const k=qt.get(C).programs;k!==void 0&&(k.forEach(function(st){jt.releaseProgram(st)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,st,at,j,Tt){k===null&&(k=Ce);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Nt=Gr(C,k,st,at,j);Zt.setMaterial(at,Rt);let Gt=st.index,te=1;if(at.wireframe===!0){if(Gt=Mt.getWireframeAttribute(st),Gt===void 0)return;te=2}const Qt=st.drawRange,It=st.attributes.position;let ye=Qt.start*te,Ne=(Qt.start+Qt.count)*te;Tt!==null&&(ye=Math.max(ye,Tt.start*te),Ne=Math.min(Ne,(Tt.start+Tt.count)*te)),Gt!==null?(ye=Math.max(ye,0),Ne=Math.min(Ne,Gt.count)):It!=null&&(ye=Math.max(ye,0),Ne=Math.min(Ne,It.count));const Oe=Ne-ye;if(Oe<0||Oe===1/0)return;Le.setup(j,at,Nt,st,Gt);let Sn,_e=Ot;if(Gt!==null&&(Sn=pt.get(Gt),_e=Jt,_e.setIndex(Sn)),j.isMesh)at.wireframe===!0?(Zt.setLineWidth(at.wireframeLinewidth*Xe()),_e.setMode(X.LINES)):_e.setMode(X.TRIANGLES);else if(j.isLine){let Vt=at.linewidth;Vt===void 0&&(Vt=1),Zt.setLineWidth(Vt*Xe()),j.isLineSegments?_e.setMode(X.LINES):j.isLineLoop?_e.setMode(X.LINE_LOOP):_e.setMode(X.LINE_STRIP)}else j.isPoints?_e.setMode(X.POINTS):j.isSprite&&_e.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)_e.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))_e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Vt=j._multiDrawStarts,rn=j._multiDrawCounts,ie=j._multiDrawCount,Un=Gt?pt.get(Gt).bytesPerElement:1,ua=qt.get(at).currentProgram.getUniforms();for(let mn=0;mn<ie;mn++)ua.setValue(X,"_gl_DrawID",mn),_e.render(Vt[mn]/Un,rn[mn])}else if(j.isInstancedMesh)_e.renderInstances(ye,Oe,j.count);else if(st.isInstancedBufferGeometry){const Vt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,rn=Math.min(st.instanceCount,Vt);_e.renderInstances(ye,Oe,rn)}else _e.render(ye,Oe)};function Me(C,k,st){C.transparent===!0&&C.side===sa&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,Ye(C,k,st),C.side=Xa,C.needsUpdate=!0,Ye(C,k,st),C.side=sa):Ye(C,k,st)}this.compile=function(C,k,st=null){st===null&&(st=C),v=me.get(st),v.init(k),O.push(v),st.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),C!==st&&C.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const at=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Rt=0;Rt<Tt.length;Rt++){const Nt=Tt[Rt];Me(Nt,st,j),at.add(Nt)}else Me(Tt,st,j),at.add(Tt)}),O.pop(),v=null,at},this.compileAsync=function(C,k,st=null){const at=this.compile(C,k,st);return new Promise(j=>{function Tt(){if(at.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&at.delete(Rt)}),at.size===0){j(C);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let hn=null;function fi(C){hn&&hn(C)}function Fr(){bi.stop()}function Ir(){bi.start()}const bi=new a_;bi.setAnimationLoop(fi),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(C){hn=C,ct.setAnimationLoop(C),C===null?bi.stop():bi.start()},ct.addEventListener("sessionstart",Fr),ct.addEventListener("sessionend",Ir),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(it===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,k,K),v=me.get(C,O.length),v.init(k),O.push(v),Bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Bt),bt=this.localClippingEnabled,ft=At.init(this.clippingPlanes,bt),S=Pt.get(C,F.length),S.init(),F.push(S),ct.enabled===!0&&ct.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,k,-1/0,N.sortObjects)}qa(C,k,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(St,Et),re=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,re&&Yt.addToRenderList(S,C),this.info.render.frame++,ft===!0&&At.beginShadows();const st=v.state.shadowsArray;Ft.render(st,C,k),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,j=S.transmissive;if(v.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(j.length>0)for(let Rt=0,Nt=Tt.length;Rt<Nt;Rt++){const Gt=Tt[Rt];Hr(at,j,C,Gt)}re&&Yt.render(C);for(let Rt=0,Nt=Tt.length;Rt<Nt;Rt++){const Gt=Tt[Rt];As(S,C,Gt,Gt.viewport)}}else j.length>0&&Hr(at,j,C,k),re&&Yt.render(C),As(S,C,k);K!==null&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),C.isScene===!0&&C.onAfterRender(N,C,k),Le.resetDefaultState(),D=-1,w=null,O.pop(),O.length>0?(v=O[O.length-1],ft===!0&&At.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function qa(C,k,st,at){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){at&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Bt);const Rt=gt.update(C),Nt=C.material;Nt.visible&&S.push(C,Rt,Nt,st,ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Rt=gt.update(C),Nt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ee.copy(C.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ee.copy(Rt.boundingSphere.center)),ee.applyMatrix4(C.matrixWorld).applyMatrix4(Bt)),Array.isArray(Nt)){const Gt=Rt.groups;for(let te=0,Qt=Gt.length;te<Qt;te++){const It=Gt[te],ye=Nt[It.materialIndex];ye&&ye.visible&&S.push(C,Rt,ye,st,ee.z,It)}}else Nt.visible&&S.push(C,Rt,Nt,st,ee.z,null)}}const Tt=C.children;for(let Rt=0,Nt=Tt.length;Rt<Nt;Rt++)qa(Tt[Rt],k,st,at)}function As(C,k,st,at){const j=C.opaque,Tt=C.transmissive,Rt=C.transparent;v.setupLightsView(st),ft===!0&&At.setGlobalState(N.clippingPlanes,st),at&&Zt.viewport(H.copy(at)),j.length>0&&Ya(j,k,st),Tt.length>0&&Ya(Tt,k,st),Rt.length>0&&Ya(Rt,k,st),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Hr(C,k,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[at.id]===void 0&&(v.state.transmissionRenderTarget[at.id]=new Es(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ko:ca,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[at.id],Rt=at.viewport||H;Tt.setSize(Rt.z,Rt.w);const Nt=N.getRenderTarget();N.setRenderTarget(Tt),N.getClearColor(lt),ht=N.getClearAlpha(),ht<1&&N.setClearColor(16777215,.5),N.clear(),re&&Yt.render(st);const Gt=N.toneMapping;N.toneMapping=ka;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),v.setupLightsView(at),ft===!0&&At.setGlobalState(N.clippingPlanes,at),Ya(C,st,at),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let It=0,ye=k.length;It<ye;It++){const Ne=k[It],Oe=Ne.object,Sn=Ne.geometry,_e=Ne.material,Vt=Ne.group;if(_e.side===sa&&Oe.layers.test(at.layers)){const rn=_e.side;_e.side=Hn,_e.needsUpdate=!0,di(Oe,st,at,Sn,_e,Vt),_e.side=rn,_e.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Nt),N.setClearColor(lt,ht),te!==void 0&&(at.viewport=te),N.toneMapping=Gt}function Ya(C,k,st){const at=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Tt=C.length;j<Tt;j++){const Rt=C[j],Nt=Rt.object,Gt=Rt.geometry,te=at===null?Rt.material:at,Qt=Rt.group;Nt.layers.test(st.layers)&&di(Nt,k,st,Gt,te,Qt)}}function di(C,k,st,at,j,Tt){C.onBeforeRender(N,k,st,at,j,Tt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(N,k,st,at,C,Tt),j.transparent===!0&&j.side===sa&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,N.renderBufferDirect(st,k,at,j,C,Tt),j.side=Xa,j.needsUpdate=!0,N.renderBufferDirect(st,k,at,j,C,Tt),j.side=sa):N.renderBufferDirect(st,k,at,j,C,Tt),C.onAfterRender(N,k,st,at,j,Tt)}function Ye(C,k,st){k.isScene!==!0&&(k=Ce);const at=qt.get(C),j=v.state.lights,Tt=v.state.shadowsArray,Rt=j.state.version,Nt=jt.getParameters(C,j.state,Tt,k,st),Gt=jt.getProgramCacheKey(Nt);let te=at.programs;at.environment=C.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(C.isMeshStandardMaterial?nt:T).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",$t),te=new Map,at.programs=te);let Qt=te.get(Gt);if(Qt!==void 0){if(at.currentProgram===Qt&&at.lightsStateVersion===Rt)return Oi(C,Nt),Qt}else Nt.uniforms=jt.getUniforms(C),C.onBeforeCompile(Nt,N),Qt=jt.acquireProgram(Nt,Gt),te.set(Gt,Qt),at.uniforms=Nt.uniforms;const It=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=At.uniform),Oi(C,Nt),at.needsLights=jc(C),at.lightsStateVersion=Rt,at.needsLights&&(It.ambientLightColor.value=j.state.ambient,It.lightProbe.value=j.state.probe,It.directionalLights.value=j.state.directional,It.directionalLightShadows.value=j.state.directionalShadow,It.spotLights.value=j.state.spot,It.spotLightShadows.value=j.state.spotShadow,It.rectAreaLights.value=j.state.rectArea,It.ltc_1.value=j.state.rectAreaLTC1,It.ltc_2.value=j.state.rectAreaLTC2,It.pointLights.value=j.state.point,It.pointLightShadows.value=j.state.pointShadow,It.hemisphereLights.value=j.state.hemi,It.directionalShadowMap.value=j.state.directionalShadowMap,It.directionalShadowMatrix.value=j.state.directionalShadowMatrix,It.spotShadowMap.value=j.state.spotShadowMap,It.spotLightMatrix.value=j.state.spotLightMatrix,It.spotLightMap.value=j.state.spotLightMap,It.pointShadowMap.value=j.state.pointShadowMap,It.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=Qt,at.uniformsList=null,Qt}function pn(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Lc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Oi(C,k){const st=qt.get(C);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function Gr(C,k,st,at,j){k.isScene!==!0&&(k=Ce),U.resetTextureUnits();const Tt=k.fog,Rt=at.isMeshStandardMaterial?k.environment:null,Nt=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:zr,Gt=(at.isMeshStandardMaterial?nt:T).get(at.envMap||Rt),te=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),It=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color;let Oe=ka;at.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=N.toneMapping);const Sn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,_e=Sn!==void 0?Sn.length:0,Vt=qt.get(at),rn=v.state.lights;if(ft===!0&&(bt===!0||C!==w)){const Mn=C===w&&at.id===D;At.setState(at,C,Mn)}let ie=!1;at.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==rn.state.version||Vt.outputColorSpace!==Nt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Gt||at.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==At.numPlanes||Vt.numIntersection!==At.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==Qt||Vt.morphTargets!==It||Vt.morphNormals!==ye||Vt.morphColors!==Ne||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==_e)&&(ie=!0):(ie=!0,Vt.__version=at.version);let Un=Vt.currentProgram;ie===!0&&(Un=Ye(at,k,j));let ua=!1,mn=!1,fa=!1;const we=Un.getUniforms(),Qn=Vt.uniforms;if(Zt.useProgram(Un.program)&&(ua=!0,mn=!0,fa=!0),at.id!==D&&(D=at.id,mn=!0),ua||w!==C){Zt.buffers.depth.getReversed()?(yt.copy(C.projectionMatrix),ES(yt),TS(yt),we.setValue(X,"projectionMatrix",yt)):we.setValue(X,"projectionMatrix",C.projectionMatrix),we.setValue(X,"viewMatrix",C.matrixWorldInverse);const hi=we.map.cameraPosition;hi!==void 0&&hi.setValue(X,zt.setFromMatrixPosition(C.matrixWorld)),pe.logarithmicDepthBuffer&&we.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&we.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,mn=!0,fa=!0)}if(j.isSkinnedMesh){we.setOptional(X,j,"bindMatrix"),we.setOptional(X,j,"bindMatrixInverse");const Mn=j.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),we.setValue(X,"boneTexture",Mn.boneTexture,U))}j.isBatchedMesh&&(we.setOptional(X,j,"batchingTexture"),we.setValue(X,"batchingTexture",j._matricesTexture,U),we.setOptional(X,j,"batchingIdTexture"),we.setValue(X,"batchingIdTexture",j._indirectTexture,U),we.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&we.setValue(X,"batchingColorTexture",j._colorsTexture,U));const un=st.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Xt.update(j,st,Un),(mn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,we.setValue(X,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Qn.envMap.value=Gt,Qn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&k.environment!==null&&(Qn.envMapIntensity.value=k.environmentIntensity),mn&&(we.setValue(X,"toneMappingExposure",N.toneMappingExposure),Vt.needsLights&&kc(Qn,fa),Tt&&at.fog===!0&&Dt.refreshFogUniforms(Qn,Tt),Dt.refreshMaterialUniforms(Qn,at,q,Z,v.state.transmissionRenderTarget[C.id]),Lc.upload(X,pn(Vt),Qn,U)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Lc.upload(X,pn(Vt),Qn,U),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&we.setValue(X,"center",j.center),we.setValue(X,"modelViewMatrix",j.modelViewMatrix),we.setValue(X,"normalMatrix",j.normalMatrix),we.setValue(X,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Mn=at.uniformsGroups;for(let hi=0,Jn=Mn.length;hi<Jn;hi++){const zi=Mn[hi];V.update(zi,Un),V.bind(zi,Un)}}return Un}function kc(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function jc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,k,st){qt.get(C.texture).__webglTexture=k,qt.get(C.depthTexture).__webglTexture=st;const at=qt.get(C);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=st===void 0,at.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const st=qt.get(C);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,st=0){K=C,G=k,P=st;let at=!0,j=null,Tt=!1,Rt=!1;if(C){const Gt=qt.get(C);if(Gt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(X.FRAMEBUFFER,null),at=!1;else if(Gt.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Gt.__hasExternalTextures)U.rebindTextures(C,qt.get(C.texture).__webglTexture,qt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const It=C.depthTexture;if(Gt.__boundDepthTexture!==It){if(It!==null&&qt.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const Qt=qt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?j=Qt[k][st]:j=Qt[k],Tt=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?j=qt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?j=Qt[st]:j=Qt,H.copy(C.viewport),ut.copy(C.scissor),rt=C.scissorTest}else H.copy(L).multiplyScalar(q).floor(),ut.copy(tt).multiplyScalar(q).floor(),rt=xt;if(Zt.bindFramebuffer(X.FRAMEBUFFER,j)&&at&&Zt.drawBuffers(C,j),Zt.viewport(H),Zt.scissor(ut),Zt.setScissorTest(rt),Tt){const Gt=qt.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,st)}else if(Rt){const Gt=qt.get(C.texture),te=k||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Gt.__webglTexture,st||0,te)}D=-1},this.readRenderTargetPixels=function(C,k,st,at,j,Tt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){Zt.bindFramebuffer(X.FRAMEBUFFER,Nt);try{const Gt=C.texture,te=Gt.format,Qt=Gt.type;if(!pe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-at&&st>=0&&st<=C.height-j&&X.readPixels(k,st,at,j,ae.convert(te),ae.convert(Qt),Tt)}finally{const Gt=K!==null?qt.get(K).__webglFramebuffer:null;Zt.bindFramebuffer(X.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(C,k,st,at,j,Tt,Rt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){const Gt=C.texture,te=Gt.format,Qt=Gt.type;if(!pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-at&&st>=0&&st<=C.height-j){Zt.bindFramebuffer(X.FRAMEBUFFER,Nt);const It=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.bufferData(X.PIXEL_PACK_BUFFER,Tt.byteLength,X.STREAM_READ),X.readPixels(k,st,at,j,ae.convert(te),ae.convert(Qt),0);const ye=K!==null?qt.get(K).__webglFramebuffer:null;Zt.bindFramebuffer(X.FRAMEBUFFER,ye);const Ne=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await bS(X,Ne,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Tt),X.deleteBuffer(It),X.deleteSync(Ne),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,st=0){C.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const at=Math.pow(2,-st),j=Math.floor(C.image.width*at),Tt=Math.floor(C.image.height*at),Rt=k!==null?k.x:0,Nt=k!==null?k.y:0;U.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,st,0,0,Rt,Nt,j,Tt),Zt.unbindTexture()},this.copyTextureToTexture=function(C,k,st=null,at=null,j=0){C.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,C=arguments[1],k=arguments[2],j=arguments[3]||0,st=null);let Tt,Rt,Nt,Gt,te,Qt,It,ye,Ne;const Oe=C.isCompressedTexture?C.mipmaps[j]:C.image;st!==null?(Tt=st.max.x-st.min.x,Rt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Gt=st.min.x,te=st.min.y,Qt=st.isBox3?st.min.z:0):(Tt=Oe.width,Rt=Oe.height,Nt=Oe.depth||1,Gt=0,te=0,Qt=0),at!==null?(It=at.x,ye=at.y,Ne=at.z):(It=0,ye=0,Ne=0);const Sn=ae.convert(k.format),_e=ae.convert(k.type);let Vt;k.isData3DTexture?(U.setTexture3D(k,0),Vt=X.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),Vt=X.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),Vt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,k.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,k.unpackAlignment);const rn=X.getParameter(X.UNPACK_ROW_LENGTH),ie=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Un=X.getParameter(X.UNPACK_SKIP_PIXELS),ua=X.getParameter(X.UNPACK_SKIP_ROWS),mn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Oe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Oe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Gt),X.pixelStorei(X.UNPACK_SKIP_ROWS,te),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);const fa=C.isDataArrayTexture||C.isData3DTexture,we=k.isDataArrayTexture||k.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Qn=qt.get(C),un=qt.get(k),Mn=qt.get(Qn.__renderTarget),hi=qt.get(un.__renderTarget);Zt.bindFramebuffer(X.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Zt.bindFramebuffer(X.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Jn=0;Jn<Nt;Jn++)fa&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.get(C).__webglTexture,j,Qt+Jn),C.isDepthTexture?(we&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.get(k).__webglTexture,j,Ne+Jn),X.blitFramebuffer(Gt,te,Tt,Rt,It,ye,Tt,Rt,X.DEPTH_BUFFER_BIT,X.NEAREST)):we?X.copyTexSubImage3D(Vt,j,It,ye,Ne+Jn,Gt,te,Tt,Rt):X.copyTexSubImage2D(Vt,j,It,ye,Ne+Jn,Gt,te,Tt,Rt);Zt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else we?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Vt,j,It,ye,Ne,Tt,Rt,Nt,Sn,_e,Oe.data):k.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,j,It,ye,Ne,Tt,Rt,Nt,Sn,Oe.data):X.texSubImage3D(Vt,j,It,ye,Ne,Tt,Rt,Nt,Sn,_e,Oe):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,It,ye,Tt,Rt,Sn,_e,Oe.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,It,ye,Oe.width,Oe.height,Sn,Oe.data):X.texSubImage2D(X.TEXTURE_2D,j,It,ye,Tt,Rt,Sn,_e,Oe);X.pixelStorei(X.UNPACK_ROW_LENGTH,rn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ie),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Un),X.pixelStorei(X.UNPACK_SKIP_ROWS,ua),X.pixelStorei(X.UNPACK_SKIP_IMAGES,mn),j===0&&k.generateMipmaps&&X.generateMipmap(Vt),Zt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,st=null,at=null,j=0){return C.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,at=arguments[1]||null,C=arguments[2],k=arguments[3],j=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,st,at,j)},this.initRenderTarget=function(C){qt.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Zt.unbindTexture()},this.resetState=function(){G=0,P=0,K=null,Zt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}class PT extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class BT{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=ja()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ja()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new Q;class Bc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Ri(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ie(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Ri(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Ri(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Ri(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Ri(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),s=Ie(s,this.array),l=Ie(l,this.array),u=Ie(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Mi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class u_ extends Ts{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xr;const Po=new Q,yr=new Q,Sr=new Q,Mr=new fe,Bo=new fe,f_=new je,bc=new Q,Fo=new Q,Ec=new Q,Tv=new fe,Ud=new fe,Av=new fe;class FT extends An{constructor(e=new u_){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Li;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new BT(i,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Bc(s,3,0,!1)),xr.setAttribute("uv",new Bc(s,2,3,!1))}this.geometry=xr,this.material=e,this.center=new fe(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),f_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Sr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const d=this.center;Tc(bc.set(-.5,-.5,0),Sr,d,yr,l,u),Tc(Fo.set(.5,-.5,0),Sr,d,yr,l,u),Tc(Ec.set(.5,.5,0),Sr,d,yr,l,u),Tv.set(0,0),Ud.set(1,0),Av.set(1,1);let h=e.ray.intersectTriangle(bc,Fo,Ec,!1,Po);if(h===null&&(Tc(Fo.set(-.5,.5,0),Sr,d,yr,l,u),Ud.set(0,1),h=e.ray.intersectTriangle(bc,Ec,Fo,!1,Po),h===null))return;const p=e.ray.origin.distanceTo(Po);p<e.near||p>e.far||i.push({distance:p,point:Po.clone(),uv:ci.getInterpolation(Po,bc,Fo,Ec,Tv,Ud,Av,new fe),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tc(o,e,i,s,l,u){Mr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Bo.x=u*Mr.x-l*Mr.y,Bo.y=l*Mr.x+u*Mr.y):Bo.copy(Mr),o.copy(e),o.x+=Bo.x,o.y+=Bo.y,o.applyMatrix4(f_)}class d_ extends Ts{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cv=new je,bh=new Kv,Ac=new Hc,Cc=new Q;class IT extends An{constructor(e=new Li,i=new d_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,e.ray.intersectsSphere(Ac)===!1)return;Cv.copy(l).invert(),bh.copy(e.ray).applyMatrix4(Cv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,x=s.attributes.position;if(m!==null){const y=Math.max(0,d.start),b=Math.min(m.count,d.start+d.count);for(let A=y,R=b;A<R;A++){const S=m.getX(A);Cc.fromBufferAttribute(x,S),wv(Cc,S,p,l,e,i,this)}}else{const y=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let A=y,R=b;A<R;A++)Cc.fromBufferAttribute(x,A),wv(Cc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function wv(o,e,i,s,l,u,d){const h=bh.distanceSqToPoint(o);if(h<i){const p=new Q;bh.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class HT extends Dn{constructor(e,i,s,l,u,d,h,p,m){super(e,i,s,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tr extends Li{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let m=0;const _=[],x=new Q,y=new Q,b=[],A=[],R=[],S=[];for(let v=0;v<=s;v++){const F=[],O=v/s;let N=0;v===0&&d===0?N=.5/i:v===s&&p===Math.PI&&(N=-.5/i);for(let it=0;it<=i;it++){const G=it/i;x.x=-e*Math.cos(l+G*u)*Math.sin(d+O*h),x.y=e*Math.cos(d+O*h),x.z=e*Math.sin(l+G*u)*Math.sin(d+O*h),A.push(x.x,x.y,x.z),y.copy(x).normalize(),R.push(y.x,y.y,y.z),S.push(G+N,1-O),F.push(m++)}_.push(F)}for(let v=0;v<s;v++)for(let F=0;F<i;F++){const O=_[v][F+1],N=_[v][F],it=_[v+1][F],G=_[v+1][F+1];(v!==0||d>0)&&b.push(O,N,G),(v!==s-1||p<Math.PI)&&b.push(N,it,G)}this.setIndex(b),this.setAttribute("position",new Di(A,3)),this.setAttribute("normal",new Di(R,3)),this.setAttribute("uv",new Di(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class GT extends Ts{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h_ extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ld=new je,Rv=new Q,Nv=new Q;class VT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Rv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rv),Nv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Nv),i.updateMatrixWorld(),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dv=new je,Io=new Q,Od=new Q;class kT extends VT{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),s.position.copy(Io),Od.copy(s.position),Od.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Od),s.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),Dv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dv)}}class jT extends h_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new kT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class XT extends h_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);const WT=()=>{try{const o=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(o.getContext("webgl")||o.getContext("experimental-webgl")))}catch{return!1}},qT=()=>{const o=Nn.useRef(null),e=Nn.useRef(!1),i=Nn.useRef({x:0,y:0}),[s,l]=Nn.useState(!0),[u,d]=Nn.useState(null);return Nn.useEffect(()=>{if(!WT()){l(!1);return}if(!o.current)return;let h;const p=o.current,m=new PT,_=new Kn(75,p.clientWidth/p.clientHeight,.1,1e3);try{h=new zT({antialias:!0,alpha:!0,failIfMajorPerformanceCaveat:!1})}catch(lt){console.warn("WebGL initialization failed, falling back to SVG Globe:",lt),l(!1);return}h.setSize(p.clientWidth,p.clientHeight),h.setPixelRatio(window.devicePixelRatio),p.appendChild(h.domElement);const x=lt=>{const ht=document.createElement("canvas"),z=ht.getContext("2d");return z?(ht.width=256,ht.height=64,z.font="Bold 32px Inter, Arial",z.fillStyle="#C5A059",z.textAlign="center",z.textBaseline="middle",z.fillText(lt,128,32),new HT(ht)):null},y=new Er;m.add(y);const b=new Tr(5,64,64),A=new GT({color:988970,transparent:!0,opacity:.8,wireframe:!0}),R=new ui(b,A);y.add(R);const S=new Tr(5.1,48,48),v=new d_({color:3359061,size:.04}),F=new IT(S,v);y.add(F);const O=new Er;y.add(O);const N=(lt,ht,z,Z)=>{const q=(90-lt)*(Math.PI/180),St=(ht+180)*(Math.PI/180),Et=5.1,L=-(Et*Math.sin(q)*Math.cos(St)),tt=Et*Math.sin(q)*Math.sin(St),xt=Et*Math.cos(q),Y=new Tr(.12,16,16),ft=new Pc({color:z}),bt=new ui(Y,ft);bt.position.set(L,xt,tt);const yt=new Tr(.25,16,16),Bt=new Pc({color:z,transparent:!0,opacity:.3}),zt=new ui(yt,Bt);zt.position.set(L,xt,tt);const ee=x(Z);if(ee){const Ce=new u_({map:ee,transparent:!0}),re=new FT(Ce);re.position.set(L*1.15,xt*1.15,tt*1.15),re.scale.set(1.5,.375,1),O.add(re)}O.add(bt),O.add(zt)};[{name:"GCC",lat:24,lon:45,color:12951641},{name:"EUROPE",lat:50,lon:10,color:12951641},{name:"SE ASIA",lat:15,lon:100,color:12951641},{name:"AFRICA",lat:0,lon:20,color:12951641}].forEach(lt=>{N(lt.lat,lt.lon,lt.color,lt.name)});const G=new XT(16777215,.5);m.add(G);const P=new jT(16777215,1);P.position.set(10,10,10),m.add(P);const K=()=>{const lt=p.clientWidth/p.clientHeight;lt<1?_.position.z=Math.min(12/lt,22):_.position.z=12};K();const D=lt=>{e.current=!0,i.current={x:lt.clientX,y:lt.clientY},p.style.cursor="grabbing"},w=lt=>{if(!e.current)return;const ht={x:lt.clientX-i.current.x,y:lt.clientY-i.current.y};y.rotation.y+=ht.x*.005,y.rotation.x+=ht.y*.005,i.current={x:lt.clientX,y:lt.clientY}},H=()=>{e.current=!1,p.style.cursor="grab"};p.addEventListener("pointerdown",D),window.addEventListener("pointermove",w),window.addEventListener("pointerup",H);const ut=()=>{requestAnimationFrame(ut),e.current||(y.rotation.y+=.0015,y.rotation.x*=.99),h.render(m,_)};ut();const rt=()=>{p&&(_.aspect=p.clientWidth/p.clientHeight,_.updateProjectionMatrix(),K(),h.setSize(p.clientWidth,p.clientHeight))};return window.addEventListener("resize",rt),()=>{window.removeEventListener("resize",rt),p.removeEventListener("pointerdown",D),window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",H),h&&(p.contains(h.domElement)&&p.removeChild(h.domElement),b.dispose(),A.dispose(),h.dispose())}},[]),s?M.jsx("div",{ref:o,className:"w-full h-[240px] sm:h-[320px] md:h-[600px] cursor-grab active:cursor-grabbing touch-none","aria-label":"3D Global Reach Visualization"}):M.jsxs("div",{className:"w-full h-[320px] md:h-[600px] bg-[#0F172A] relative overflow-hidden flex items-center justify-center p-4",children:[M.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @keyframes rotateGrid {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes laserFlow {
            to { stroke-dashoffset: -40; }
          }
          @keyframes ripple {
            0% { transform: scale(0.6); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          .rotating-grid {
            transform-origin: center;
            animation: rotateGrid 160s linear infinite;
          }
          .shipping-lane {
            stroke-dasharray: 6 4;
            animation: laserFlow 1.8s linear infinite;
          }
          .pulsing-ring {
            transform-origin: center;
            animation: ripple 2.5s cubic-bezier(0.25, 0, 0, 1) infinite;
          }
        `}}),M.jsxs("div",{className:"relative w-full max-w-[800px] aspect-[16/10] flex items-center justify-center",children:[M.jsxs("svg",{viewBox:"0 0 800 500",className:"w-full h-full text-[#334155]/60 z-0",children:[M.jsx("defs",{children:M.jsxs("radialGradient",{id:"glowG",cx:"50%",cy:"50%",r:"50%",children:[M.jsx("stop",{offset:"0%",stopColor:"#C5A059",stopOpacity:"0.15"}),M.jsx("stop",{offset:"100%",stopColor:"#0F172A",stopOpacity:"0"})]})}),M.jsx("circle",{cx:"400",cy:"250",r:"240",fill:"url(#glowG)"}),M.jsxs("g",{className:"rotating-grid",children:[M.jsx("circle",{cx:"400",cy:"250",r:"220",fill:"none",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"4 8"}),M.jsx("circle",{cx:"400",cy:"250",r:"170",fill:"none",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"3 6"}),M.jsx("circle",{cx:"400",cy:"250",r:"110",fill:"none",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"2 4"}),M.jsx("line",{x1:"160",y1:"250",x2:"640",y2:"250",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"4 4"}),M.jsx("line",{x1:"400",y1:"10",x2:"400",y2:"490",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"4 4"}),M.jsx("line",{x1:"230",y1:"80",x2:"570",y2:"420",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"4 4"}),M.jsx("line",{x1:"230",y1:"420",x2:"570",y2:"80",stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"4 4"})]}),M.jsxs("g",{children:[M.jsx("path",{d:"M 350 140 Q 410 180 480 220",fill:"none",stroke:"#C5A059",strokeWidth:"1.2",opacity:"0.45",className:"shipping-lane"}),M.jsx("path",{d:"M 480 220 Q 560 260 650 310",fill:"none",stroke:"#C5A059",strokeWidth:"1.2",opacity:"0.45",className:"shipping-lane"}),M.jsx("path",{d:"M 480 220 Q 450 270 420 330",fill:"none",stroke:"#C5A059",strokeWidth:"1.2",opacity:"0.45",className:"shipping-lane"}),M.jsx("path",{d:"M 350 140 Q 380 230 420 330",fill:"none",stroke:"#C5A059",strokeWidth:"1.2",opacity:"0.45",className:"shipping-lane"})]}),M.jsx("g",{children:[{name:"EUROPE",x:350,y:140},{name:"GCC",x:480,y:220},{name:"SE ASIA",x:650,y:310},{name:"AFRICA",x:420,y:330}].map(h=>M.jsxs("g",{children:[M.jsx("circle",{cx:h.x,cy:h.y,r:"18",fill:"none",stroke:"#C5A059",strokeWidth:"1",className:"pulsing-ring"}),M.jsx("circle",{cx:h.x,cy:h.y,r:"5",fill:"#C5A059"}),M.jsx("circle",{cx:h.x,cy:h.y,r:"2",fill:"#FFFFFF"})]},h.name))}),M.jsx("g",{children:[{name:"EUROPE",x:350,y:140,textAnchor:"end",dx:-14,dy:4},{name:"GCC HQ",x:480,y:220,textAnchor:"start",dx:14,dy:4},{name:"SE ASIA",x:650,y:310,textAnchor:"start",dx:14,dy:4},{name:"AFRICA",x:420,y:330,textAnchor:"end",dx:-14,dy:4}].map(h=>{const p=u===h.name;return M.jsxs("g",{className:"cursor-pointer pointer-events-auto z-10",onMouseEnter:()=>d(h.name),onMouseLeave:()=>d(null),children:[M.jsx("rect",{x:h.textAnchor==="start"?h.x+h.dx-8:h.x+h.dx-122,y:h.y-12,width:"130",height:"24",rx:"4",fill:"#0B1120",stroke:p?"#C5A059":"transparent",strokeWidth:"1",opacity:p?"0.9":"0.5"}),M.jsx("text",{x:h.x,y:h.y,dx:h.dx,dy:h.dy,fill:p?"#FFFFFF":"#C5A059",fontSize:"10",fontWeight:"bold",fontFamily:"Inter, system-ui, sans-serif",textAnchor:h.textAnchor,children:h.name.toUpperCase()}),M.jsx("circle",{cx:h.x,cy:h.y,r:"25",fill:"transparent"})]},h.name)})})]}),M.jsxs("div",{className:"absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/5 p-3 rounded-lg shadow-2xl backdrop-blur-md max-w-sm mx-auto transition-all duration-300 pointer-events-none text-center",children:[M.jsx("p",{className:"text-[9px] text-[#C5A059] uppercase tracking-[0.2em] font-black mb-0.5",children:"Interactive Logistics Network"}),M.jsx("h4",{className:"text-white font-bold text-xs",children:u||"Global Transit Highway"}),M.jsxs("p",{className:"text-white/50 text-[10px] leading-relaxed",children:[u==="EUROPE"&&"Western corridor operations bridging industrial capitals and shipping ports.",u==="GCC HQ"&&"Primary regional clearing terminal coordinating heavy cargo in Middle East.",u==="SE ASIA"&&"Pinnacle transshipment center managing critical eastbound channels.",u==="AFRICA"&&"Major land logistics depots connecting emergent southern trade routes.",!u&&"Active freight channels establishing continuous marine, aviation, and land connectivity routes."]})]})]})]})},YT=({title:o,content:e,isOpen:i,onToggle:s})=>M.jsxs("div",{className:"border-b border-slate-200 py-8 first:border-t",children:[M.jsxs("button",{onClick:s,className:"w-full flex justify-between items-center group text-left","aria-expanded":i,children:[M.jsx("span",{className:"text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#C5A059] transition-colors tracking-tight",children:o}),M.jsx("span",{className:`text-3xl font-light transition-transform duration-500 ease-out ${i?"rotate-45 text-[#991B1B]":"text-slate-300"}`,children:"+"})]}),M.jsx("div",{className:`overflow-hidden transition-all duration-500 ease-in-out ${i?"max-h-60 opacity-100 mt-6":"max-h-0 opacity-0"}`,children:M.jsx("p",{className:"text-slate-500 text-lg leading-relaxed max-w-2xl",children:e})})]}),ZT=()=>{const[o,e]=Nn.useState(0),i=[{title:"International Standards",content:" Full adherence to international trade regulations, customs requirements, and import-export laws across all markets."},{title:"Compliance-Focused",content:"Rigorous adherence to international trade regulations, documentation standards, and ethical business practices."},{title:"Certifications",content:"Destination-specific certifications and documentation ensuring smooth customs clearance and regulatory approval."},{title:"Ethical Sourcing",content:"Transparent operations with verified suppliers, ensuring ethical sourcing practices and supply chain integrity."},{title:"Quality Control",content:"Strict quality control processes at every stage—from vendor selection to final delivery inspection."}];return M.jsx("section",{className:"py-32 px-6 bg-[#F8FAFC] border-t border-slate-200",children:M.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start",children:[M.jsxs("div",{className:"lg:col-span-5",children:[M.jsxs("div",{className:"flex gap-2 mb-8",children:[M.jsx("div",{className:"w-12 h-1 bg-[#C5A059]"}),M.jsx("div",{className:"w-4 h-1 bg-[#991B1B]"})]}),M.jsxs("h2",{className:"text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tighter uppercase",children:["Why Choose ",M.jsx("br",{}),"Divyana ",M.jsx("br",{}),"Operations & ",M.jsx("br",{}),"Solutions"]}),M.jsx("p",{className:"mt-8 text-slate-500 text-lg max-w-sm",children:"Professional excellence driven by trust and global compliance."})]}),M.jsx("div",{className:"lg:col-span-7",children:M.jsx("div",{className:"flex flex-col",children:i.map((s,l)=>M.jsx(YT,{title:s.title,content:s.content,isOpen:o===l,onToggle:()=>e(o===l?null:l)},l))})})]})})},KT=({onBack:o,onPartner:e})=>{const i=[{name:"Beauty & Wellness",icon:"✨"},{name:"Food & Agriculture",icon:"🌾"},{name:"Construction",icon:"🏗️"},{name:"Textiles & Apparel",icon:"👕"},{name:"Leather & Footwear",icon:"👞"},{name:"Industrial Materials",icon:"⚙️"},{name:"Medical Equipment",icon:"🏥"},{name:"Electronics",icon:"📱"}],s=[{title:"General Trading",desc:"Our trading division specializes in sourcing and distributing a diverse range of high-quality products globally. We focus on value creation, ethical sourcing, and market-leading reliability.",image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"},{title:"Import & Export",desc:"Facilitating seamless cross-border trade with deep expertise in international regulations. We handle the complexities of documentation and compliance to ensure your goods move across borders without friction.",image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"},{title:"Integrated Logistics",desc:"A comprehensive approach to supply chain management. We synchronize every moving part of your logistics operations to create a single, efficient window for your global commerce needs.",image:"https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"}],l=[{title:"Sea Freight",desc:"Strategic ocean transport solutions offering cost-effective and reliable delivery for LCL and FCL shipments across all major global trade lanes.",icon:M.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 012-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})})},{title:"Air Freight",desc:"High-speed global transport solutions for time-critical cargo, ensuring rapid transit across continents with maximum security and precision.",icon:M.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},{title:"Warehousing",desc:"State-of-the-art storage facilities equipped with advanced inventory tracking systems to ensure the safety and accessibility of your assets.",icon:M.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})},{title:"Custom Clearance",desc:"Expert regulatory guidance and rapid processing. Our compliance-driven team ensures your cargo meets all legal requirements for timely transit.",icon:M.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})},{title:"Last-Mile Delivery",desc:"Optimized end-to-end distribution services ensuring your products reach their final destination efficiently, reliably, and on schedule.",icon:M.jsxs("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}),M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"})]})}];return M.jsxs("div",{className:"pt-24 pb-12 animate-in fade-in duration-700 bg-white",children:[M.jsxs("section",{className:"relative py-24 px-6 overflow-hidden border-b border-slate-100",children:[M.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[M.jsxs("button",{onClick:o,className:"text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest",children:[M.jsx("span",{className:"text-xl",children:"←"})," Back to Overview"]}),M.jsxs("div",{className:"max-w-3xl",children:[M.jsx("p",{className:"text-[#C5A059] border border-[#C5A059] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6",children:"Our Expertise"}),M.jsxs("h1",{className:"text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8",children:["Core ",M.jsx("br",{}),"Business ",M.jsx("br",{}),"Verticals"]}),M.jsx("p",{className:"text-slate-500 text-lg md:text-xl leading-relaxed",children:"Divyana Operations & Solutions provides a professional, compliance-driven framework for international trade, connecting global supply with regional demand in the GCC, Europe, SE Asia, and Africa through precision logistics."})]})]}),M.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-0 hidden lg:block"})]}),M.jsx("section",{className:"py-24 px-6",children:M.jsx("div",{className:"max-w-7xl mx-auto space-y-24",children:s.map((u,d)=>M.jsxs("div",{className:`flex flex-col ${d%2===0?"md:flex-row":"md:flex-row-reverse"} gap-12 items-center`,children:[M.jsxs("div",{className:"flex-1",children:[M.jsxs("div",{className:"text-4xl font-black text-slate-100 mb-4",children:["0",d+1]}),M.jsx("h3",{className:"text-3xl font-black text-[#0F172A] mb-6 uppercase tracking-tight border-l-4 border-[#C5A059] pl-6",children:u.title}),M.jsx("p",{className:"text-slate-600 text-lg leading-relaxed max-w-xl",children:u.desc})]}),M.jsx("div",{className:"flex-1 w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl",children:M.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-1000"})})]},d))})}),M.jsxs("section",{className:"py-24 px-6 bg-[#0B1120] text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden relative shadow-2xl",children:[M.jsx("div",{className:"absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none",children:M.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]"})}),M.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[M.jsxs("div",{className:"mb-20 text-center max-w-2xl mx-auto",children:[M.jsx("h2",{className:"text-4xl md:text-6xl font-black uppercase tracking-tight mb-6",children:"Logistics & Supply Chain"}),M.jsx("div",{className:"w-20 h-1 bg-[#C5A059] mx-auto mb-8"}),M.jsx("p",{className:"text-slate-400",children:"Leveraging deep operational expertise to provide high-speed, transparent, and secure movement of cargo worldwide."})]}),M.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map((u,d)=>M.jsxs("div",{className:"bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-[#C5A059]/40 hover:bg-white/10 transition-all group",children:[M.jsx("div",{className:"text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-300",children:u.icon}),M.jsx("h3",{className:"text-2xl font-bold mb-4",children:u.title}),M.jsx("p",{className:"text-slate-400 leading-relaxed text-sm md:text-base",children:u.desc})]},d))})]})]}),M.jsx("section",{className:"py-24 px-6",children:M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs("div",{className:"mb-16 text-center",children:[M.jsx("p",{className:"text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4",children:"Market Versatility"}),M.jsx("h2",{className:"text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight",children:"Product Portfolio"})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:i.map((u,d)=>M.jsxs("div",{className:"group p-8 border border-slate-100 rounded-2xl flex flex-col items-center text-center hover:bg-[#0B1120] hover:border-[#0B1120] transition-all duration-300 shadow-sm hover:shadow-xl",children:[M.jsx("span",{className:"text-5xl mb-6 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100",children:u.icon}),M.jsx("span",{className:"font-bold text-[#0F172A] group-hover:text-[#C5A059] tracking-tight uppercase text-sm",children:u.name})]},d))})]})}),M.jsx("section",{className:"py-24 px-6",children:M.jsx("div",{className:"max-w-7xl mx-auto",children:M.jsxs("div",{className:"bg-[#0F172A] rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl",children:[M.jsxs("div",{className:"max-w-xl relative z-10",children:[M.jsxs("h2",{className:"text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none",children:["Scale Your ",M.jsx("br",{}),"Global Trade ",M.jsx("br",{}),M.jsx("span",{className:"text-[#C5A059]",children:"With Confidence"})]}),M.jsx("p",{className:"text-slate-400 text-lg",children:"Our team is ready to provide a customized solution for your logistics and trading requirements. Let's build a lasting partnership."})]}),M.jsx("div",{className:"relative z-10",children:M.jsx("button",{onClick:e,className:"bg-[#C5A059] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-[#0F172A] transition-all duration-300 shadow-2xl hover:-translate-y-2 uppercase tracking-widest",children:"Ready To Partner"})}),M.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"})]})})})]})},QT=({onBack:o,onPartner:e})=>{const i=[{title:"Reliability",desc:"Consistency in performance and delivery schedules is our hallmark."},{title:"Compliance",desc:"Adhering to strict international standards and local regional regulations."},{title:"Transparency",desc:"Clear communication and honest dealings with every partner."},{title:"Innovation",desc:"Constantly evolving our logistics systems for maximum efficiency."}];return M.jsxs("div",{className:"pt-24 pb-12 animate-in fade-in duration-700 bg-white",children:[M.jsx("section",{className:"relative py-24 px-6 overflow-hidden border-b border-slate-100 bg-[#F8FAFC]",children:M.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[M.jsxs("button",{onClick:o,className:"text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest",children:[M.jsx("span",{className:"text-xl",children:"←"})," Back to Home"]}),M.jsxs("div",{className:"max-w-4xl",children:[M.jsx("p",{className:"text-white bg-[#0F172A] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6",children:"Who We Are"}),M.jsxs("h1",{className:"text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8",children:["Excellence ",M.jsx("br",{}),"In Trade & ",M.jsx("br",{}),M.jsx("span",{className:"text-[#C5A059]",children:"Logistics"})]}),M.jsx("p",{className:"text-slate-600 text-lg md:text-xl leading-relaxed font-medium",children:"Divyana Operations & Solutions is a professional, compliance-driven, B2B trade and logistics services firm. We are dedicated to building trust and simplifying the complexities of global commerce."})]})]})}),M.jsx("section",{className:"py-24 px-6",children:M.jsxs("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"text-3xl font-black text-[#0F172A] uppercase tracking-tight mb-8",children:"Our Firm"}),M.jsxs("div",{className:"space-y-6 text-slate-600 text-lg leading-relaxed",children:[M.jsx("p",{children:"Founded on the principles of integrity and operational excellence, Divyana Operations & Solutions has emerged as a trusted partner for businesses across the GCC & Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Europe, South East Asia, and Africa."}),M.jsx("p",{children:"We provide a single-window solution for global trade, bridging the gap between manufacturers and markets through a robust network of logistics, warehousing, and strategic sourcing. Our approach is compliance-heavy, ensuring that every shipment meets the highest regulatory standards."})]})]}),M.jsxs("div",{className:"bg-[#0B1120] text-white p-12 rounded-[2.5rem] shadow-2xl",children:[M.jsx("h3",{className:"text-2xl font-black uppercase mb-8 tracking-tighter text-[#C5A059]",children:"Our Mission"}),M.jsx("p",{className:"text-xl leading-relaxed italic mb-12 text-slate-100",children:'"To revolutionize the B2B supply chain by providing transparent, efficient, and ethical trade and logistics services that empower businesses to scale globally with confidence."'}),M.jsxs("div",{className:"pt-8 border-t border-white/10",children:[M.jsx("h3",{className:"text-2xl font-black uppercase mb-6 tracking-tighter text-[#C5A059]",children:"Our Vision"}),M.jsx("p",{className:"text-slate-400",children:"To become the world's most reliable 'single window' for international B2B commerce, recognized for our compliance, reach, and dedication to partner success."})]})]})]})}),M.jsx("section",{className:"py-24 px-6 bg-[#F8FAFC]",children:M.jsxs("div",{className:"max-w-7xl mx-auto",children:[M.jsxs("div",{className:"text-center mb-16",children:[M.jsx("h2",{className:"text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight",children:"Our Core Values"}),M.jsx("div",{className:"w-16 h-1 bg-[#C5A059] mx-auto mt-4"})]}),M.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-8",children:i.map((s,l)=>M.jsxs("div",{className:"p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group",children:[M.jsx("div",{className:"w-12 h-1 bg-[#C5A059] mb-6 group-hover:w-full transition-all duration-500"}),M.jsx("h3",{className:"text-xl font-bold mb-4 uppercase tracking-tighter text-[#0F172A]",children:s.title}),M.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:s.desc})]},l))})]})}),M.jsx("section",{className:"py-24 px-6",children:M.jsx("div",{className:"max-w-7xl mx-auto",children:M.jsxs("div",{className:"bg-[#0B1120] text-white rounded-[3.5rem] p-12 md:p-20 overflow-hidden relative shadow-2xl",children:[M.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center relative z-10",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-4",children:"Visit Us"}),M.jsx("h2",{className:"text-4xl md:text-6xl font-black uppercase tracking-tight mb-8",children:"Our Headquarters"}),M.jsxs("div",{className:"space-y-4 text-xl",children:[M.jsx("p",{className:"font-bold text-[#C5A059]",children:"Divyana Operations & Solutions"}),M.jsx("p",{className:"text-slate-300",children:"Bandra, Mumbai,"}),M.jsx("p",{className:"text-slate-300",children:"Maharashtra, India."})]}),M.jsx("div",{className:"mt-12",children:M.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=Bandra+West+Mumbai+Maharashtra",target:"_blank",rel:"noopener noreferrer",className:"bg-[#C5A059] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#0B1120] transition-all inline-block shadow-lg",children:"View on Maps"})})]}),M.jsx("div",{className:"h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-inner",children:M.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.68445226012!2d72.8090546548857!3d19.05447790729573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x437996b49a236a78!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770637509055!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0,filter:"grayscale(1) contrast(1.2) invert(0.9)"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]}),M.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full blur-[120px] opacity-5 -mr-32 -mt-32"})]})})}),M.jsx("section",{className:"py-24 px-6 bg-[#0B1120] text-white border-t border-white/5",children:M.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black uppercase tracking-tight mb-16",children:["Global Reach, ",M.jsx("span",{className:"text-[#C5A059]",children:"Local Expertise"})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-4xl font-black text-[#C5A059] mb-4",children:"GCC"}),M.jsx("p",{className:"text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2",children:"Middle East Hub"}),M.jsxs("p",{className:"text-slate-500 text-[9px] uppercase leading-relaxed",children:["UAE, Saudi Arabia, Qatar, ",M.jsx("br",{})," Oman, Kuwait, Bahrain"]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-4xl font-black text-[#C5A059] mb-4",children:"EU"}),M.jsx("p",{className:"text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2",children:"European Markets"}),M.jsxs("p",{className:"text-slate-500 text-[9px] uppercase leading-relaxed",children:["Western Europe Presence, ",M.jsx("br",{})," Eastern expansion"]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-4xl font-black text-[#C5A059] mb-4",children:"SEA"}),M.jsx("p",{className:"text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2",children:"South East Asia"}),M.jsxs("p",{className:"text-slate-500 text-[9px] uppercase leading-relaxed",children:["Singapore, Malaysia, ",M.jsx("br",{})," Indonesia, Thailand"]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"text-4xl font-black text-[#C5A059] mb-4",children:"AF"}),M.jsx("p",{className:"text-slate-100 text-[10px] font-bold tracking-widest uppercase mb-2",children:"Africa"}),M.jsxs("p",{className:"text-slate-500 text-[9px] uppercase leading-relaxed",children:["East, West & North Africa ",M.jsx("br",{})," Emerging markets"]})]})]})]})}),M.jsx("section",{className:"py-12 px-6",children:M.jsxs("div",{className:"max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden",children:[M.jsxs("div",{className:"relative z-10",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase",children:["Let's Shape The ",M.jsx("br",{})," ",M.jsx("span",{className:"text-[#C5A059]",children:"Future Of Trade"})]}),M.jsx("p",{className:"text-slate-400 text-lg mb-10 max-w-xl mx-auto",children:"Experience the Divyana difference. Professional, compliance-driven, and partner-focused."}),M.jsx("button",{onClick:e,className:"bg-[#C5A059] text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-[#0F172A] transition-all shadow-xl",children:"Be Our Partner"})]}),M.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A059]/5 to-transparent"})]})})]})},JT=({onBack:o})=>{const[e,i]=Nn.useState({name:"",company:"",email:"",phone:"",service:"",message:""}),s=async u=>{u.preventDefault();try{if((await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)alert("Thank you for your inquiry. A logistics specialist will contact you shortly."),i({name:"",company:"",email:"",phone:"",service:"",message:""});else throw new Error("Failed to submit")}catch(d){console.error("Error submitting form:",d),alert("There was an error submitting your inquiry. Please try again later.")}},l=[{title:"Global Support",detail:"info.divyana@gmail.com",sub:"24/7 Monitoring & Logistics Support",icon:M.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})},{title:"Headquarters",detail:"Bandra, Mumbai",sub:"Maharashtra, India 400050",icon:M.jsxs("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})},{title:"Direct Line",detail:"9821121143 / 9004710415",sub:"Mon - Fri, 9am - 6pm IST",icon:M.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}];return M.jsxs("div",{className:"pt-24 pb-12 animate-in fade-in duration-700 bg-white min-h-screen",children:[M.jsxs("section",{className:"relative py-24 px-6 overflow-hidden",children:[M.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[M.jsxs("button",{onClick:o,className:"text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest",children:[M.jsx("span",{className:"text-xl",children:"←"})," Back to Home"]}),M.jsxs("div",{className:"max-w-4xl",children:[M.jsx("p",{className:"text-[#C5A059] border border-[#C5A059] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6",children:"Connect With Us"}),M.jsxs("h1",{className:"text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8",children:["Let's Scale ",M.jsx("br",{}),"Your Global ",M.jsx("br",{}),M.jsx("span",{className:"text-[#C5A059]",children:"Operations"})]}),M.jsx("p",{className:"text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl",children:"Whether you are looking for integrated logistics solutions or strategic trade partnerships, our professional team is here to assist."})]})]}),M.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"})]}),M.jsx("section",{className:"py-12 px-6",children:M.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start",children:[M.jsxs("div",{className:"lg:col-span-5 space-y-8",children:[M.jsx("h2",{className:"text-2xl font-black uppercase tracking-tight text-[#0F172A]",children:"Reach Out"}),M.jsx("p",{className:"text-slate-500 leading-relaxed",children:"Divyana Operations & Solutions operates across multiple time zones. For urgent logistics inquiries, please use our global support channels for immediate attention."}),M.jsx("div",{className:"space-y-6",children:l.map((u,d)=>M.jsxs("div",{className:"flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-[#C5A059]/30 hover:bg-[#F8FAFC] transition-all",children:[M.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-[#0F172A] text-[#C5A059] rounded-xl flex items-center justify-center",children:u.icon}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xs font-bold uppercase tracking-widest text-slate-400 mb-1",children:u.title}),M.jsx("p",{className:"text-lg font-bold text-[#0F172A] mb-1",children:u.detail}),M.jsx("p",{className:"text-sm text-slate-500",children:u.sub})]})]},d))}),M.jsx("div",{className:"rounded-[2.5rem] overflow-hidden grayscale contrast-125 h-64 border border-slate-100 shadow-xl",children:M.jsx("img",{src:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2068&auto=format&fit=crop",alt:"Logistics Network",className:"w-full h-full object-cover opacity-90"})})]}),M.jsxs("div",{className:"lg:col-span-7 bg-[#F8FAFC] rounded-[3.5rem] p-8 md:p-14 border border-slate-100 shadow-sm",children:[M.jsx("h2",{className:"text-3xl font-black text-[#0F172A] mb-8 uppercase tracking-tight",children:"Business Inquiry"}),M.jsxs("form",{onSubmit:s,className:"grid md:grid-cols-2 gap-6",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Full Name"}),M.jsx("input",{required:!0,type:"text",placeholder:"John Doe",className:"w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",value:e.name,onChange:u=>i({...e,name:u.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Company Name"}),M.jsx("input",{required:!0,type:"text",placeholder:"Global Trade Ltd.",className:"w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",value:e.company,onChange:u=>i({...e,company:u.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Email Address"}),M.jsx("input",{required:!0,type:"email",placeholder:"john@company.com",className:"w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",value:e.email,onChange:u=>i({...e,email:u.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Service Interest"}),M.jsx("input",{required:!0,type:"text",placeholder:"e.g. Integrated Logistics",className:"w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",value:e.service,onChange:u=>i({...e,service:u.target.value})})]}),M.jsxs("div",{className:"md:col-span-2 space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"How can we help?"}),M.jsx("textarea",{required:!0,rows:5,placeholder:"Tell us about your logistics requirements...",className:"w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all resize-none",value:e.message,onChange:u=>i({...e,message:u.target.value})})]}),M.jsx("div",{className:"md:col-span-2 pt-4",children:M.jsx("button",{type:"submit",className:"w-full bg-[#0F172A] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-xl hover:-translate-y-1",children:"Submit Inquiry"})})]}),M.jsx("p",{className:"text-[10px] text-slate-400 mt-8 text-center uppercase tracking-widest",children:"We Appreciate Your Interest In Our Professional Services."})]})]})})]})},$T=({onBack:o})=>{const[e,i]=Nn.useState({companyName:"",industry:"",contactName:"",email:"",partnershipType:"Client",volume:"",regions:[],description:""}),s=["GCC","Europe","South East Asia","Africa","Middle East","Americas"],l=async d=>{d.preventDefault();try{if((await fetch("/api/partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)alert("Onboarding successful. Our partnership team will review your profile and reach out within 48 business hours."),o();else throw new Error("Failed to submit")}catch(h){console.error("Error submitting form:",h),alert("There was an error submitting your application. Please try again later.")}},u=d=>{i(h=>({...h,regions:h.regions.includes(d)?h.regions.filter(p=>p!==d):[...h.regions,d]}))};return M.jsxs("div",{className:"pt-24 pb-12 animate-in fade-in duration-700 bg-white min-h-screen",children:[M.jsxs("section",{className:"relative py-24 px-6 overflow-hidden",children:[M.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[M.jsxs("button",{onClick:o,className:"text-slate-400 mb-12 flex items-center gap-2 hover:text-[#0F172A] transition-colors font-medium text-sm uppercase tracking-widest",children:[M.jsx("span",{className:"text-xl",children:"←"})," Back to Home"]}),M.jsxs("div",{className:"max-w-4xl",children:[M.jsx("p",{className:"text-[#C5A059] border border-[#C5A059] inline-block px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6",children:"Strategic Collaboration"}),M.jsxs("h1",{className:"text-5xl md:text-8xl font-black text-[#0F172A] uppercase tracking-tighter leading-[0.9] mb-8",children:["Corporate ",M.jsx("br",{}),"Partnership ",M.jsx("br",{}),M.jsx("span",{className:"text-[#C5A059]",children:"Onboarding"})]}),M.jsx("p",{className:"text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl",children:"Join the Divyana network. We are looking for professional organizations to build long-term, compliance-driven global logistics ecosystems."})]})]}),M.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC] -z-10 hidden lg:block"})]}),M.jsx("section",{className:"py-12 px-6",children:M.jsxs("div",{className:"max-w-5xl mx-auto bg-white rounded-[3.5rem] p-8 md:p-20 border border-slate-100 shadow-2xl relative",children:[M.jsx("div",{className:"absolute top-10 right-10 opacity-5 text-[#C5A059]",children:M.jsx("svg",{className:"w-24 h-24",fill:"currentColor",viewBox:"0 0 24 24",children:M.jsx("path",{d:"M13 13h-2V7h2v6zm0 4h-2v-2h2v2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})})}),M.jsx("h2",{className:"text-3xl font-black text-[#0F172A] mb-12 uppercase tracking-tight border-b border-slate-100 pb-6",children:"Business Profile"}),M.jsxs("form",{onSubmit:l,className:"space-y-12",children:[M.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Company Legal Name"}),M.jsx("input",{required:!0,type:"text",className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",placeholder:"Enter Registered Name",value:e.companyName,onChange:d=>i({...e,companyName:d.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Industry Sector"}),M.jsx("input",{required:!0,type:"text",className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",placeholder:"e.g. Electronics, Medical, etc.",value:e.industry,onChange:d=>i({...e,industry:d.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Contact Authority Name"}),M.jsx("input",{required:!0,type:"text",className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",placeholder:"Full Name of Representative",value:e.contactName,onChange:d=>i({...e,contactName:d.target.value})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Professional Email"}),M.jsx("input",{required:!0,type:"email",className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",placeholder:"name@company.com",value:e.email,onChange:d=>i({...e,email:d.target.value})})]})]}),M.jsxs("div",{className:"pt-8",children:[M.jsx("h2",{className:"text-3xl font-black text-[#0F172A] mb-12 uppercase tracking-tight border-b border-slate-100 pb-6",children:"Operational Requirements"}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-10 mb-10",children:[M.jsxs("div",{className:"space-y-3",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Partnership Category"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:["Client","Logistics Provider","Agent","Vendor"].map(d=>M.jsx("button",{type:"button",onClick:()=>i({...e,partnershipType:d}),className:`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${e.partnershipType===d?"bg-[#0F172A] text-[#C5A059] shadow-lg":"bg-slate-100 text-slate-400 hover:bg-slate-200"}`,children:d},d))})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Anticipated Monthly Volume"}),M.jsx("input",{required:!0,type:"text",className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all",placeholder:"e.g. 50 shipments / month",value:e.volume,onChange:d=>i({...e,volume:d.target.value})})]})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Operational Regions of Interest"}),M.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:s.map(d=>M.jsxs("div",{onClick:()=>u(d),className:`p-5 border-2 rounded-2xl cursor-pointer transition-all flex items-center gap-4 ${e.regions.includes(d)?"border-[#0F172A] bg-[#0F172A] text-white shadow-xl":"border-slate-100 bg-[#F8FAFC] hover:border-[#C5A059]/30"}`,children:[M.jsx("div",{className:`w-5 h-5 rounded-full border-2 ${e.regions.includes(d)?"bg-[#C5A059] border-[#C5A059]":"border-slate-300"}`}),M.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:d})]},d))})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("label",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1",children:"Brief Overview of Partnership Objectives"}),M.jsx("textarea",{rows:4,className:"w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/10 focus:border-[#C5A059] transition-all resize-none",placeholder:"How do you envision our cooperation?",value:e.description,onChange:d=>i({...e,description:d.target.value})})]}),M.jsxs("div",{className:"pt-10",children:[M.jsx("button",{type:"submit",className:"w-full bg-[#0F172A] text-white px-10 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-2xl hover:-translate-y-2",children:"Apply for Partnership"}),M.jsxs("p",{className:"text-center text-slate-400 text-[10px] mt-8 uppercase tracking-widest leading-relaxed",children:["By submitting, you agree to our professional compliance vetting process. ",M.jsx("br",{})," Your data is protected by enterprise-grade encryption."]})]})]})]})})]})},tA=()=>{const[o,e]=Nn.useState("home");Nn.useEffect(()=>{window.scrollTo(0,0)},[o]);const i=l=>{e(l)},s=()=>{switch(o){case"services":return M.jsx(KT,{onBack:()=>i("home"),onPartner:()=>i("partner")});case"about":return M.jsx(QT,{onBack:()=>i("home"),onPartner:()=>i("partner")});case"contact":return M.jsx(JT,{onBack:()=>i("home")});case"partner":return M.jsx($T,{onBack:()=>i("home")});default:return M.jsxs(M.Fragment,{children:[M.jsx(Ly,{}),M.jsxs("section",{id:"services",className:"py-20 md:py-32 px-6 bg-white",children:[M.jsxs("div",{className:"max-w-7xl mx-auto text-center mb-16 md:mb-20",children:[M.jsxs("p",{className:"text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6 flex items-center justify-center gap-3",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-[#991B1B]"}),"Our Core Competencies",M.jsx("span",{className:"w-2 h-2 rounded-full bg-[#991B1B]"})]}),M.jsxs("h2",{className:"text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter uppercase leading-none",children:["Comprehensive ",M.jsx("br",{})," ",M.jsx("span",{className:"text-[#C5A059]",children:"Trade Solutions"})]}),M.jsx("div",{className:"w-16 h-1 bg-[#C5A059] mx-auto mt-10"})]}),M.jsxs("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-12",children:[M.jsx(C0,{title:"Integrated Logistics",description:"We focus on creating lasting relationships with our clients through consistent performance, ethical practices, and a dedication to excellence in every transaction. Trusted trade and logistics partner across all markets we serve.",image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"}),M.jsx(C0,{title:"Global Supply Chain",description:"Simplifying international trade with reliability, speed, and transparency—building long-term global partnerships that drive mutual success. We use intelligent logistics systems to streamline your workflow.",image:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"})]}),M.jsx("div",{className:"mt-16 md:mt-20 text-center",children:M.jsxs("button",{onClick:()=>i("services"),className:"group relative text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] hover:text-[#991B1B] transition-all",children:["Explore All Capabilities",M.jsx("div",{className:"absolute -bottom-2 left-0 w-full h-[2px] bg-[#0F172A] group-hover:bg-[#991B1B] transition-all"})]})})]}),M.jsx("section",{id:"about",className:"py-20 md:py-32 px-6 bg-[#F8FAFC] border-y border-slate-100 overflow-hidden",children:M.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6",children:"Global Infrastructure"}),M.jsxs("h2",{className:"text-4xl md:text-6xl font-black text-[#0F172A] mb-8 md:mb-10 uppercase tracking-tight leading-none",children:["Strategic ",M.jsx("br",{})," ",M.jsx("span",{className:"text-[#C5A059]",children:"Presence"})]}),M.jsx("p",{className:"text-base md:text-lg text-slate-600 mb-10 md:mb-12 leading-relaxed font-medium",children:"Divyana Operations & Solutions is a professional, compliance-driven, B2B trade and logistics services firm. From the trade hubs of the GCC and Europe to South East Asia and Africa, we provide a single window for Electronics, Medical Equipment, and Industrial Materials."}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",children:[{name:"GCC & Middle East",detail:"UAE, Saudi, Qatar, Oman, Kuwait, Bahrain"},{name:"European Markets",detail:"Western EU markets & Eastern expansion"},{name:"South East Asia",detail:"Singapore, Malaysia, Indonesia, Thailand"},{name:"Africa",detail:"East, West & North Africa focus"}].map(l=>M.jsxs("div",{className:"bg-white p-6 md:p-8 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center hover:border-[#991B1B] transition-all shadow-sm",children:[M.jsx("span",{className:"font-black text-[10px] md:text-xs tracking-widest text-[#0F172A] mb-2 uppercase",children:l.name}),M.jsx("span",{className:"text-[8px] md:text-[10px] text-slate-400 font-bold tracking-wider",children:l.detail})]},l.name))})]}),M.jsx("div",{className:"relative mt-12 lg:mt-0 w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-none mx-auto",children:M.jsx("div",{className:"bg-[#0F172A]/5 rounded-[2rem] md:rounded-[3rem] p-2 sm:p-6 md:p-12 shadow-inner border border-slate-200/50",children:M.jsx(qT,{})})})]})}),M.jsx("section",{id:"contact",className:"py-20 md:py-32 px-6",children:M.jsxs("div",{className:"max-w-7xl mx-auto bg-[#0F172A] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center overflow-hidden relative shadow-2xl border-t border-[#991B1B]/10",children:[M.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] -mr-48 -mt-48"}),M.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-[#991B1B]/5 rounded-full blur-[120px] -ml-48 -mb-48"}),M.jsxs("div",{className:"relative z-10",children:[M.jsxs("h2",{className:"text-3xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none",children:["Scale Your ",M.jsx("br",{})," ",M.jsx("span",{className:"text-[#C5A059]",children:"Global Ambitions"})]}),M.jsx("p",{className:"text-slate-400 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-medium",children:"Partner with Divyana for world-class logistics and trade solutions that scale with your enterprise's complex requirements."}),M.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:gap-6 justify-center",children:[M.jsx("button",{onClick:()=>i("partner"),className:"bg-[#C5A059] border border-[#991B1B]/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#991B1B] transition-all shadow-xl",children:"Establish Partnership"}),M.jsx("button",{onClick:()=>i("services"),className:"border-2 border-white/20 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all",children:"Explore Verticals"})]})]})]})}),M.jsx(ZT,{})]})}};return M.jsxs("div",{className:"min-h-screen bg-white selection:bg-[#991B1B] selection:text-white",children:[M.jsx(Uy,{onNavigate:i,currentPage:o}),s(),M.jsx("footer",{className:"py-16 md:py-20 px-6 bg-[#0B1120] border-t border-white/5",children:M.jsx("div",{className:"max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-10 text-center",children:M.jsxs("div",{className:"space-y-4",children:[M.jsx("h3",{className:"text-[#C5A059] font-black uppercase tracking-[0.3em] text-sm",children:"Divyana Operations & Solutions"}),M.jsx("div",{className:"text-[10px] md:text-xs text-slate-500 font-medium tracking-widest",children:"© 2026 Corporate Excellence in Trade & Logistics. All rights reserved."})]})})})]})},p_=document.getElementById("root");if(!p_)throw new Error("Could not find root element to mount to");const eA=Dy.createRoot(p_);eA.render(M.jsx(by.StrictMode,{children:M.jsx(tA,{})}));
