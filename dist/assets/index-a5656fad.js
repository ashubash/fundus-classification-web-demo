(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function a(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(p){if(p.ep)return;p.ep=!0;const h=a(p);fetch(p.href,h)}})();function M1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cv={exports:{}},qs={},fv={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),N1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),L1=Symbol.for("react.strict_mode"),V1=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),F1=Symbol.for("react.forward_ref"),G1=Symbol.for("react.suspense"),j1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),t0=Symbol.iterator;function K1(t){return t===null||typeof t!="object"?null:(t=t0&&t[t0]||t["@@iterator"],typeof t=="function"?t:null)}var hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function pi(t,n,a){this.props=t,this.context=n,this.refs=gv,this.updater=a||hv}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,n){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=pi.prototype;function ud(t,n,a){this.props=t,this.context=n,this.refs=gv,this.updater=a||hv}var dd=ud.prototype=new yv;dd.constructor=ud;mv(dd,pi.prototype);dd.isPureReactComponent=!0;var n0=Array.isArray,vv=Object.prototype.hasOwnProperty,pd={current:null},_v={key:!0,ref:!0,__self:!0,__source:!0};function wv(t,n,a){var l,p={},h=null,v=null;if(n!=null)for(l in n.ref!==void 0&&(v=n.ref),n.key!==void 0&&(h=""+n.key),n)vv.call(n,l)&&!_v.hasOwnProperty(l)&&(p[l]=n[l]);var E=arguments.length-2;if(E===1)p.children=a;else if(1<E){for(var x=Array(E),R=0;R<E;R++)x[R]=arguments[R+2];p.children=x}if(t&&t.defaultProps)for(l in E=t.defaultProps,E)p[l]===void 0&&(p[l]=E[l]);return{$$typeof:ga,type:t,key:h,ref:v,props:p,_owner:pd.current}}function Q1(t,n){return{$$typeof:ga,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function Z1(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return n[a]})}var r0=/\/+/g;function ql(t,n){return typeof t=="object"&&t!==null&&t.key!=null?Z1(""+t.key):n.toString(36)}function ss(t,n,a,l,p){var h=typeof t;(h==="undefined"||h==="boolean")&&(t=null);var v=!1;if(t===null)v=!0;else switch(h){case"string":case"number":v=!0;break;case"object":switch(t.$$typeof){case ga:case N1:v=!0}}if(v)return v=t,p=p(v),t=l===""?"."+ql(v,0):l,n0(p)?(a="",t!=null&&(a=t.replace(r0,"$&/")+"/"),ss(p,n,a,"",function(R){return R})):p!=null&&(cd(p)&&(p=Q1(p,a+(!p.key||v&&v.key===p.key?"":(""+p.key).replace(r0,"$&/")+"/")+t)),n.push(p)),1;if(v=0,l=l===""?".":l+":",n0(t))for(var E=0;E<t.length;E++){h=t[E];var x=l+ql(h,E);v+=ss(h,n,a,x,p)}else if(x=K1(t),typeof x=="function")for(t=x.call(t),E=0;!(h=t.next()).done;)h=h.value,x=l+ql(h,E++),v+=ss(h,n,a,x,p);else if(h==="object")throw n=String(t),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return v}function qa(t,n,a){if(t==null)return t;var l=[],p=0;return ss(t,l,"","",function(h){return n.call(a,h,p++)}),l}function X1(t){if(t._status===-1){var n=t._result;n=n(),n.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},os={transition:null},Y1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:os,ReactCurrentOwner:pd};function $v(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:qa,forEach:function(t,n,a){qa(t,function(){n.apply(this,arguments)},a)},count:function(t){var n=0;return qa(t,function(){n++}),n},toArray:function(t){return qa(t,function(n){return n})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Se.Component=pi;Se.Fragment=U1;Se.Profiler=V1;Se.PureComponent=ud;Se.StrictMode=L1;Se.Suspense=G1;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;Se.act=$v;Se.cloneElement=function(t,n,a){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var l=mv({},t.props),p=t.key,h=t.ref,v=t._owner;if(n!=null){if(n.ref!==void 0&&(h=n.ref,v=pd.current),n.key!==void 0&&(p=""+n.key),t.type&&t.type.defaultProps)var E=t.type.defaultProps;for(x in n)vv.call(n,x)&&!_v.hasOwnProperty(x)&&(l[x]=n[x]===void 0&&E!==void 0?E[x]:n[x])}var x=arguments.length-2;if(x===1)l.children=a;else if(1<x){E=Array(x);for(var R=0;R<x;R++)E[R]=arguments[R+2];l.children=E}return{$$typeof:ga,type:t.type,key:p,ref:h,props:l,_owner:v}};Se.createContext=function(t){return t={$$typeof:q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W1,_context:t},t.Consumer=t};Se.createElement=wv;Se.createFactory=function(t){var n=wv.bind(null,t);return n.type=t,n};Se.createRef=function(){return{current:null}};Se.forwardRef=function(t){return{$$typeof:F1,render:t}};Se.isValidElement=cd;Se.lazy=function(t){return{$$typeof:H1,_payload:{_status:-1,_result:t},_init:X1}};Se.memo=function(t,n){return{$$typeof:j1,type:t,compare:n===void 0?null:n}};Se.startTransition=function(t){var n=os.transition;os.transition={};try{t()}finally{os.transition=n}};Se.unstable_act=$v;Se.useCallback=function(t,n){return mt.current.useCallback(t,n)};Se.useContext=function(t){return mt.current.useContext(t)};Se.useDebugValue=function(){};Se.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};Se.useEffect=function(t,n){return mt.current.useEffect(t,n)};Se.useId=function(){return mt.current.useId()};Se.useImperativeHandle=function(t,n,a){return mt.current.useImperativeHandle(t,n,a)};Se.useInsertionEffect=function(t,n){return mt.current.useInsertionEffect(t,n)};Se.useLayoutEffect=function(t,n){return mt.current.useLayoutEffect(t,n)};Se.useMemo=function(t,n){return mt.current.useMemo(t,n)};Se.useReducer=function(t,n,a){return mt.current.useReducer(t,n,a)};Se.useRef=function(t){return mt.current.useRef(t)};Se.useState=function(t){return mt.current.useState(t)};Se.useSyncExternalStore=function(t,n,a){return mt.current.useSyncExternalStore(t,n,a)};Se.useTransition=function(){return mt.current.useTransition()};Se.version="18.3.1";fv.exports=Se;var Xt=fv.exports;const J1=M1(Xt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e$=Xt,t$=Symbol.for("react.element"),n$=Symbol.for("react.fragment"),r$=Object.prototype.hasOwnProperty,i$=e$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a$={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,n,a){var l,p={},h=null,v=null;a!==void 0&&(h=""+a),n.key!==void 0&&(h=""+n.key),n.ref!==void 0&&(v=n.ref);for(l in n)r$.call(n,l)&&!a$.hasOwnProperty(l)&&(p[l]=n[l]);if(t&&t.defaultProps)for(l in n=t.defaultProps,n)p[l]===void 0&&(p[l]=n[l]);return{$$typeof:t$,type:t,key:h,ref:v,props:p,_owner:i$.current}}qs.Fragment=n$;qs.jsx=xv;qs.jsxs=xv;cv.exports=qs;var ct=cv.exports,mu={},bv={exports:{}},Rt={},kv={exports:{}},Sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function n(te,we){var ge=te.length;te.push(we);e:for(;0<ge;){var Ae=ge-1>>>1,Fe=te[Ae];if(0<p(Fe,we))te[Ae]=we,te[ge]=Fe,ge=Ae;else break e}}function a(te){return te.length===0?null:te[0]}function l(te){if(te.length===0)return null;var we=te[0],ge=te.pop();if(ge!==we){te[0]=ge;e:for(var Ae=0,Fe=te.length,rr=Fe>>>1;Ae<rr;){var fn=2*(Ae+1)-1,Or=te[fn],sn=fn+1,Rr=te[sn];if(0>p(Or,ge))sn<Fe&&0>p(Rr,Or)?(te[Ae]=Rr,te[sn]=ge,Ae=sn):(te[Ae]=Or,te[fn]=ge,Ae=fn);else if(sn<Fe&&0>p(Rr,ge))te[Ae]=Rr,te[sn]=ge,Ae=sn;else break e}}return we}function p(te,we){var ge=te.sortIndex-we.sortIndex;return ge!==0?ge:te.id-we.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var v=Date,E=v.now();t.unstable_now=function(){return v.now()-E}}var x=[],R=[],F=1,V=null,L=3,H=!1,Q=!1,Z=!1,Ee=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(te){for(var we=a(R);we!==null;){if(we.callback===null)l(R);else if(we.startTime<=te)l(R),we.sortIndex=we.expirationTime,n(x,we);else break;we=a(R)}}function G(te){if(Z=!1,B(te),!Q)if(a(x)!==null)Q=!0,zr(ee);else{var we=a(R);we!==null&&Cr(G,we.startTime-te)}}function ee(te,we){Q=!1,Z&&(Z=!1,A(X),X=-1),H=!0;var ge=L;try{for(B(we),V=a(x);V!==null&&(!(V.expirationTime>we)||te&&!yt());){var Ae=V.callback;if(typeof Ae=="function"){V.callback=null,L=V.priorityLevel;var Fe=Ae(V.expirationTime<=we);we=t.unstable_now(),typeof Fe=="function"?V.callback=Fe:V===a(x)&&l(x),B(we)}else l(x);V=a(x)}if(V!==null)var rr=!0;else{var fn=a(R);fn!==null&&Cr(G,fn.startTime-we),rr=!1}return rr}finally{V=null,L=ge,H=!1}}var J=!1,de=null,X=-1,Ue=5,xe=-1;function yt(){return!(t.unstable_now()-xe<Ue)}function nr(){if(de!==null){var te=t.unstable_now();xe=te;var we=!0;try{we=de(!0,te)}finally{we?an():(J=!1,de=null)}}else J=!1}var an;if(typeof C=="function")an=function(){C(nr)};else if(typeof MessageChannel<"u"){var hi=new MessageChannel,$a=hi.port2;hi.port1.onmessage=nr,an=function(){$a.postMessage(null)}}else an=function(){Ee(nr,0)};function zr(te){de=te,J||(J=!0,an())}function Cr(te,we){X=Ee(function(){te(t.unstable_now())},we)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(te){te.callback=null},t.unstable_continueExecution=function(){Q||H||(Q=!0,zr(ee))},t.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<te?Math.floor(1e3/te):5},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_getFirstCallbackNode=function(){return a(x)},t.unstable_next=function(te){switch(L){case 1:case 2:case 3:var we=3;break;default:we=L}var ge=L;L=we;try{return te()}finally{L=ge}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(te,we){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ge=L;L=te;try{return we()}finally{L=ge}},t.unstable_scheduleCallback=function(te,we,ge){var Ae=t.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Ae+ge:Ae):ge=Ae,te){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=ge+Fe,te={id:F++,callback:we,priorityLevel:te,startTime:ge,expirationTime:Fe,sortIndex:-1},ge>Ae?(te.sortIndex=ge,n(R,te),a(x)===null&&te===a(R)&&(Z?(A(X),X=-1):Z=!0,Cr(G,ge-Ae))):(te.sortIndex=Fe,n(x,te),Q||H||(Q=!0,zr(ee))),te},t.unstable_shouldYield=yt,t.unstable_wrapCallback=function(te){var we=L;return function(){var ge=L;L=we;try{return te.apply(this,arguments)}finally{L=ge}}}})(Sv);kv.exports=Sv;var s$=kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o$=Xt,Ot=s$;function j(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,Ji={};function Tr(t,n){ii(t,n),ii(t+"Capture",n)}function ii(t,n){for(Ji[t]=n,t=0;t<n.length;t++)Ev.add(n[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,l$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i0={},a0={};function u$(t){return gu.call(a0,t)?!0:gu.call(i0,t)?!1:l$.test(t)?a0[t]=!0:(i0[t]=!0,!1)}function d$(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p$(t,n,a,l){if(n===null||typeof n>"u"||d$(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function gt(t,n,a,l,p,h,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=h,this.removeEmptyString=v}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];at[n]=new gt(n,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(fd,hd);at[n]=new gt(n,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(fd,hd);at[n]=new gt(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(fd,hd);at[n]=new gt(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,n,a,l){var p=at.hasOwnProperty(n)?at[n]:null;(p!==null?p.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(p$(n,a,p,l)&&(a=null),l||p===null?u$(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):p.mustUseProperty?t[p.propertyName]=a===null?p.type===3?!1:"":a:(n=p.attributeName,l=p.attributeNamespace,a===null?t.removeAttribute(n):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var Tn=o$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Lr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),s0=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=s0&&t[s0]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,Fl;function Ui(t){if(Fl===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fl=n&&n[1]||""}return`
`+Fl+t}var Gl=!1;function jl(t,n){if(!t||Gl)return"";Gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(R){var l=R}Reflect.construct(t,[],n)}else{try{n.call()}catch(R){l=R}t.call(n.prototype)}else{try{throw Error()}catch(R){l=R}t()}}catch(R){if(R&&l&&typeof R.stack=="string"){for(var p=R.stack.split(`
`),h=l.stack.split(`
`),v=p.length-1,E=h.length-1;1<=v&&0<=E&&p[v]!==h[E];)E--;for(;1<=v&&0<=E;v--,E--)if(p[v]!==h[E]){if(v!==1||E!==1)do if(v--,E--,0>E||p[v]!==h[E]){var x=`
`+p[v].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=v&&0<=E);break}}}finally{Gl=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Ui(t):""}function c$(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=jl(t.type,!1),t;case 11:return t=jl(t.type.render,!1),t;case 1:return t=jl(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Lr:return"Portal";case yu:return"Profiler";case gd:return"StrictMode";case vu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Iv:return(t.displayName||"Context")+".Consumer";case Tv:return(t._context.displayName||"Context")+".Provider";case yd:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return n=t.displayName||null,n!==null?n:wu(t.type)||"Memo";case Mn:n=t._payload,t=t._init;try{return wu(t(n))}catch{}}return null}function f$(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(n);case 8:return n===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cv(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function h$(t){var n=Cv(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return p.call(this)},set:function(v){l=""+v,h.call(this,v)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ga(t){t._valueTracker||(t._valueTracker=h$(t))}function Ov(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=Cv(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function _s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,n){var a=n.checked;return qe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function o0(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=Xn(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Rv(t,n){n=n.checked,n!=null&&md(t,"checked",n,!1)}function xu(t,n){Rv(t,n);var a=Xn(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?bu(t,n.type,a):n.hasOwnProperty("defaultValue")&&bu(t,n.type,Xn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function l0(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function bu(t,n,a){(n!=="number"||_s(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Li=Array.isArray;function Yr(t,n,a,l){if(t=t.options,n){n={};for(var p=0;p<a.length;p++)n["$"+a[p]]=!0;for(a=0;a<t.length;a++)p=n.hasOwnProperty("$"+t[a].value),t[a].selected!==p&&(t[a].selected=p),p&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Xn(a),n=null,p=0;p<t.length;p++){if(t[p].value===a){t[p].selected=!0,l&&(t[p].defaultSelected=!0);return}n!==null||t[p].disabled||(n=t[p])}n!==null&&(n.selected=!0)}}function ku(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return qe({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function u0(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(j(92));if(Li(a)){if(1<a.length)throw Error(j(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:Xn(a)}}function Av(t,n){var a=Xn(n.value),l=Xn(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function d0(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Bv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Bv(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,Dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,p){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,p)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function ea(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m$=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){m$.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Fi[n]=Fi[t]})});function Pv(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+n).trim():n+"px"}function Mv(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,p=Pv(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,p):t[a]=p}}var g$=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,n){if(n){if(g$[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function Tu(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,Jr=null,ei=null;function p0(t){if(t=_a(t)){if(typeof zu!="function")throw Error(j(280));var n=t.stateNode;n&&(n=Ks(n),zu(t.stateNode,t.type,n))}}function Nv(t){Jr?ei?ei.push(t):ei=[t]:Jr=t}function Uv(){if(Jr){var t=Jr,n=ei;if(ei=Jr=null,p0(t),n)for(t=0;t<n.length;t++)p0(n[t])}}function Lv(t,n){return t(n)}function Vv(){}var Hl=!1;function Wv(t,n,a){if(Hl)return t(n,a);Hl=!0;try{return Lv(t,n,a)}finally{Hl=!1,(Jr!==null||ei!==null)&&(Vv(),Uv())}}function ta(t,n){var a=t.stateNode;if(a===null)return null;var l=Ks(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(j(231,n,typeof a));return a}var Cu=!1;if(bn)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{Cu=!1}function y$(t,n,a,l,p,h,v,E,x){var R=Array.prototype.slice.call(arguments,3);try{n.apply(a,R)}catch(F){this.onError(F)}}var Gi=!1,ws=null,$s=!1,Ou=null,v$={onError:function(t){Gi=!0,ws=t}};function _$(t,n,a,l,p,h,v,E,x){Gi=!1,ws=null,y$.apply(v$,arguments)}function w$(t,n,a,l,p,h,v,E,x){if(_$.apply(this,arguments),Gi){if(Gi){var R=ws;Gi=!1,ws=null}else throw Error(j(198));$s||($s=!0,Ou=R)}}function Ir(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function qv(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function c0(t){if(Ir(t)!==t)throw Error(j(188))}function $$(t){var n=t.alternate;if(!n){if(n=Ir(t),n===null)throw Error(j(188));return n!==t?null:t}for(var a=t,l=n;;){var p=a.return;if(p===null)break;var h=p.alternate;if(h===null){if(l=p.return,l!==null){a=l;continue}break}if(p.child===h.child){for(h=p.child;h;){if(h===a)return c0(p),t;if(h===l)return c0(p),n;h=h.sibling}throw Error(j(188))}if(a.return!==l.return)a=p,l=h;else{for(var v=!1,E=p.child;E;){if(E===a){v=!0,a=p,l=h;break}if(E===l){v=!0,l=p,a=h;break}E=E.sibling}if(!v){for(E=h.child;E;){if(E===a){v=!0,a=h,l=p;break}if(E===l){v=!0,l=h,a=p;break}E=E.sibling}if(!v)throw Error(j(189))}}if(a.alternate!==l)throw Error(j(190))}if(a.tag!==3)throw Error(j(188));return a.stateNode.current===a?t:n}function Fv(t){return t=$$(t),t!==null?Gv(t):null}function Gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Gv(t);if(n!==null)return n;t=t.sibling}return null}var jv=Ot.unstable_scheduleCallback,f0=Ot.unstable_cancelCallback,x$=Ot.unstable_shouldYield,b$=Ot.unstable_requestPaint,He=Ot.unstable_now,k$=Ot.unstable_getCurrentPriorityLevel,wd=Ot.unstable_ImmediatePriority,Hv=Ot.unstable_UserBlockingPriority,xs=Ot.unstable_NormalPriority,S$=Ot.unstable_LowPriority,Kv=Ot.unstable_IdlePriority,Fs=null,pn=null;function E$(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Fs,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:z$,T$=Math.log,I$=Math.LN2;function z$(t){return t>>>=0,t===0?32:31-(T$(t)/I$|0)|0}var Ha=64,Ka=4194304;function Vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bs(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,p=t.suspendedLanes,h=t.pingedLanes,v=a&268435455;if(v!==0){var E=v&~p;E!==0?l=Vi(E):(h&=v,h!==0&&(l=Vi(h)))}else v=a&~p,v!==0?l=Vi(v):h!==0&&(l=Vi(h));if(l===0)return 0;if(n!==0&&n!==l&&!(n&p)&&(p=l&-l,h=n&-n,p>=h||p===16&&(h&4194240)!==0))return n;if(l&4&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-tn(n),p=1<<a,l|=t[a],n&=~p;return l}function C$(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O$(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,p=t.expirationTimes,h=t.pendingLanes;0<h;){var v=31-tn(h),E=1<<v,x=p[v];x===-1?(!(E&a)||E&l)&&(p[v]=C$(E,n)):x<=n&&(t.expiredLanes|=E),h&=~E}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qv(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function Kl(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ya(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-tn(n),t[n]=a}function R$(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var p=31-tn(a),h=1<<p;n[p]=0,l[p]=-1,t[p]=-1,a&=~h}}function $d(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-tn(a),p=1<<l;p&n|t[l]&n&&(t[l]|=n),a&=~p}}var Oe=0;function Zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xv,xd,Yv,Jv,e_,Au=!1,Qa=[],qn=null,Fn=null,Gn=null,na=new Map,ra=new Map,Un=[],A$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h0(t,n){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":na.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(n.pointerId)}}function Ai(t,n,a,l,p,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[p]},n!==null&&(n=_a(n),n!==null&&xd(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),t)}function B$(t,n,a,l,p){switch(n){case"focusin":return qn=Ai(qn,t,n,a,l,p),!0;case"dragenter":return Fn=Ai(Fn,t,n,a,l,p),!0;case"mouseover":return Gn=Ai(Gn,t,n,a,l,p),!0;case"pointerover":var h=p.pointerId;return na.set(h,Ai(na.get(h)||null,t,n,a,l,p)),!0;case"gotpointercapture":return h=p.pointerId,ra.set(h,Ai(ra.get(h)||null,t,n,a,l,p)),!0}return!1}function t_(t){var n=yr(t.target);if(n!==null){var a=Ir(n);if(a!==null){if(n=a.tag,n===13){if(n=qv(a),n!==null){t.blockedOn=n,e_(t.priority,function(){Yv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ls(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bu(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Iu=l,a.target.dispatchEvent(l),Iu=null}else return n=_a(a),n!==null&&xd(n),t.blockedOn=a,!1;n.shift()}return!0}function m0(t,n,a){ls(t)&&a.delete(n)}function D$(){Au=!1,qn!==null&&ls(qn)&&(qn=null),Fn!==null&&ls(Fn)&&(Fn=null),Gn!==null&&ls(Gn)&&(Gn=null),na.forEach(m0),ra.forEach(m0)}function Bi(t,n){t.blockedOn===n&&(t.blockedOn=null,Au||(Au=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,D$)))}function ia(t){function n(p){return Bi(p,t)}if(0<Qa.length){Bi(Qa[0],t);for(var a=1;a<Qa.length;a++){var l=Qa[a];l.blockedOn===t&&(l.blockedOn=null)}}for(qn!==null&&Bi(qn,t),Fn!==null&&Bi(Fn,t),Gn!==null&&Bi(Gn,t),na.forEach(n),ra.forEach(n),a=0;a<Un.length;a++)l=Un[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Un.shift()}var ti=Tn.ReactCurrentBatchConfig,ks=!0;function P$(t,n,a,l){var p=Oe,h=ti.transition;ti.transition=null;try{Oe=1,bd(t,n,a,l)}finally{Oe=p,ti.transition=h}}function M$(t,n,a,l){var p=Oe,h=ti.transition;ti.transition=null;try{Oe=4,bd(t,n,a,l)}finally{Oe=p,ti.transition=h}}function bd(t,n,a,l){if(ks){var p=Bu(t,n,a,l);if(p===null)iu(t,n,l,Ss,a),h0(t,l);else if(B$(p,t,n,a,l))l.stopPropagation();else if(h0(t,l),n&4&&-1<A$.indexOf(t)){for(;p!==null;){var h=_a(p);if(h!==null&&Xv(h),h=Bu(t,n,a,l),h===null&&iu(t,n,l,Ss,a),h===p)break;p=h}p!==null&&l.stopPropagation()}else iu(t,n,l,null,a)}}var Ss=null;function Bu(t,n,a,l){if(Ss=null,t=_d(l),t=yr(t),t!==null)if(n=Ir(t),n===null)t=null;else if(a=n.tag,a===13){if(t=qv(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ss=t,null}function n_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k$()){case wd:return 1;case Hv:return 4;case xs:case S$:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var Vn=null,kd=null,us=null;function r_(){if(us)return us;var t,n=kd,a=n.length,l,p="value"in Vn?Vn.value:Vn.textContent,h=p.length;for(t=0;t<a&&n[t]===p[t];t++);var v=a-t;for(l=1;l<=v&&n[a-l]===p[h-l];l++);return us=p.slice(t,1<l?1-l:void 0)}function ds(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function g0(){return!1}function At(t){function n(a,l,p,h,v){this._reactName=a,this._targetInst=p,this.type=l,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Za:g0,this.isPropagationStopped=g0,this}return qe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),n}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=At(ci),va=qe({},ci,{view:0,detail:0}),N$=At(va),Ql,Zl,Di,Gs=qe({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Ql=t.screenX-Di.screenX,Zl=t.screenY-Di.screenY):Zl=Ql=0,Di=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),y0=At(Gs),U$=qe({},Gs,{dataTransfer:0}),L$=At(U$),V$=qe({},va,{relatedTarget:0}),Xl=At(V$),W$=qe({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),q$=At(W$),F$=qe({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G$=At(F$),j$=qe({},ci,{data:0}),v0=At(j$),H$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z$(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Q$[t])?!!n[t]:!1}function Ed(){return Z$}var X$=qe({},va,{key:function(t){if(t.key){var n=H$[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K$[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y$=At(X$),J$=qe({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=At(J$),e2=qe({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),t2=At(e2),n2=qe({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),r2=At(n2),i2=qe({},Gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a2=At(i2),s2=[9,13,27,32],Td=bn&&"CompositionEvent"in window,ji=null;bn&&"documentMode"in document&&(ji=document.documentMode);var o2=bn&&"TextEvent"in window&&!ji,i_=bn&&(!Td||ji&&8<ji&&11>=ji),w0=String.fromCharCode(32),$0=!1;function a_(t,n){switch(t){case"keyup":return s2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function l2(t,n){switch(t){case"compositionend":return s_(n);case"keypress":return n.which!==32?null:($0=!0,w0);case"textInput":return t=n.data,t===w0&&$0?null:t;default:return null}}function u2(t,n){if(Wr)return t==="compositionend"||!Td&&a_(t,n)?(t=r_(),us=kd=Vn=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return i_&&n.locale!=="ko"?null:n.data;default:return null}}var d2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!d2[t.type]:n==="textarea"}function o_(t,n,a,l){Nv(l),n=Es(n,"onChange"),0<n.length&&(a=new Sd("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Hi=null,aa=null;function p2(t){v_(t,0)}function js(t){var n=Gr(t);if(Ov(n))return t}function c2(t,n){if(t==="change")return n}var l_=!1;if(bn){var Yl;if(bn){var Jl="oninput"in document;if(!Jl){var b0=document.createElement("div");b0.setAttribute("oninput","return;"),Jl=typeof b0.oninput=="function"}Yl=Jl}else Yl=!1;l_=Yl&&(!document.documentMode||9<document.documentMode)}function k0(){Hi&&(Hi.detachEvent("onpropertychange",u_),aa=Hi=null)}function u_(t){if(t.propertyName==="value"&&js(aa)){var n=[];o_(n,aa,t,_d(t)),Wv(p2,n)}}function f2(t,n,a){t==="focusin"?(k0(),Hi=n,aa=a,Hi.attachEvent("onpropertychange",u_)):t==="focusout"&&k0()}function h2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return js(aa)}function m2(t,n){if(t==="click")return js(n)}function g2(t,n){if(t==="input"||t==="change")return js(n)}function y2(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var rn=typeof Object.is=="function"?Object.is:y2;function sa(t,n){if(rn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var p=a[l];if(!gu.call(n,p)||!rn(t[p],n[p]))return!1}return!0}function S0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function E0(t,n){var a=S0(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=S0(a)}}function d_(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?d_(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function p_(){for(var t=window,n=_s();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_s(t.document)}return n}function Id(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function v2(t){var n=p_(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&d_(a.ownerDocument.documentElement,a)){if(l!==null&&Id(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var p=a.textContent.length,h=Math.min(l.start,p);l=l.end===void 0?h:Math.min(l.end,p),!t.extend&&h>l&&(p=l,l=h,h=p),p=E0(a,h);var v=E0(a,l);p&&v&&(t.rangeCount!==1||t.anchorNode!==p.node||t.anchorOffset!==p.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),t.removeAllRanges(),h>l?(t.addRange(n),t.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _2=bn&&"documentMode"in document&&11>=document.documentMode,qr=null,Du=null,Ki=null,Pu=!1;function T0(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||qr==null||qr!==_s(l)||(l=qr,"selectionStart"in l&&Id(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ki&&sa(Ki,l)||(Ki=l,l=Es(Du,"onSelect"),0<l.length&&(n=new Sd("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=qr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Fr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},eu={},c_={};bn&&(c_=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Hs(t){if(eu[t])return eu[t];if(!Fr[t])return t;var n=Fr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in c_)return eu[t]=n[a];return t}var f_=Hs("animationend"),h_=Hs("animationiteration"),m_=Hs("animationstart"),g_=Hs("transitionend"),y_=new Map,I0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,n){y_.set(t,n),Tr(n,[t])}for(var tu=0;tu<I0.length;tu++){var nu=I0[tu],w2=nu.toLowerCase(),$2=nu[0].toUpperCase()+nu.slice(1);Jn(w2,"on"+$2)}Jn(f_,"onAnimationEnd");Jn(h_,"onAnimationIteration");Jn(m_,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(g_,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function z0(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,w$(l,n,void 0,t),t.currentTarget=null}function v_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],p=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var v=l.length-1;0<=v;v--){var E=l[v],x=E.instance,R=E.currentTarget;if(E=E.listener,x!==h&&p.isPropagationStopped())break e;z0(p,E,R),h=x}else for(v=0;v<l.length;v++){if(E=l[v],x=E.instance,R=E.currentTarget,E=E.listener,x!==h&&p.isPropagationStopped())break e;z0(p,E,R),h=x}}}if($s)throw t=Ou,$s=!1,Ou=null,t}function De(t,n){var a=n[Vu];a===void 0&&(a=n[Vu]=new Set);var l=t+"__bubble";a.has(l)||(__(n,t,2,!1),a.add(l))}function ru(t,n,a){var l=0;n&&(l|=4),__(a,t,l,n)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Ya]){t[Ya]=!0,Ev.forEach(function(a){a!=="selectionchange"&&(x2.has(a)||ru(a,!1,t),ru(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ya]||(n[Ya]=!0,ru("selectionchange",!1,n))}}function __(t,n,a,l){switch(n_(n)){case 1:var p=P$;break;case 4:p=M$;break;default:p=bd}a=p.bind(null,n,a,t),p=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?t.addEventListener(n,a,{capture:!0,passive:p}):t.addEventListener(n,a,!0):p!==void 0?t.addEventListener(n,a,{passive:p}):t.addEventListener(n,a,!1)}function iu(t,n,a,l,p){var h=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===p||E.nodeType===8&&E.parentNode===p)break;if(v===4)for(v=l.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===p||x.nodeType===8&&x.parentNode===p))return;v=v.return}for(;E!==null;){if(v=yr(E),v===null)return;if(x=v.tag,x===5||x===6){l=h=v;continue e}E=E.parentNode}}l=l.return}Wv(function(){var R=h,F=_d(a),V=[];e:{var L=y_.get(t);if(L!==void 0){var H=Sd,Q=t;switch(t){case"keypress":if(ds(a)===0)break e;case"keydown":case"keyup":H=Y$;break;case"focusin":Q="focus",H=Xl;break;case"focusout":Q="blur",H=Xl;break;case"beforeblur":case"afterblur":H=Xl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=y0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=L$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=t2;break;case f_:case h_:case m_:H=q$;break;case g_:H=r2;break;case"scroll":H=N$;break;case"wheel":H=a2;break;case"copy":case"cut":case"paste":H=G$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=_0}var Z=(n&4)!==0,Ee=!Z&&t==="scroll",A=Z?L!==null?L+"Capture":null:L;Z=[];for(var C=R,B;C!==null;){B=C;var G=B.stateNode;if(B.tag===5&&G!==null&&(B=G,A!==null&&(G=ta(C,A),G!=null&&Z.push(la(C,G,B)))),Ee)break;C=C.return}0<Z.length&&(L=new H(L,Q,null,a,F),V.push({event:L,listeners:Z}))}}if(!(n&7)){e:{if(L=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",L&&a!==Iu&&(Q=a.relatedTarget||a.fromElement)&&(yr(Q)||Q[kn]))break e;if((H||L)&&(L=F.window===F?F:(L=F.ownerDocument)?L.defaultView||L.parentWindow:window,H?(Q=a.relatedTarget||a.toElement,H=R,Q=Q?yr(Q):null,Q!==null&&(Ee=Ir(Q),Q!==Ee||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(H=null,Q=R),H!==Q)){if(Z=y0,G="onMouseLeave",A="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(Z=_0,G="onPointerLeave",A="onPointerEnter",C="pointer"),Ee=H==null?L:Gr(H),B=Q==null?L:Gr(Q),L=new Z(G,C+"leave",H,a,F),L.target=Ee,L.relatedTarget=B,G=null,yr(F)===R&&(Z=new Z(A,C+"enter",Q,a,F),Z.target=B,Z.relatedTarget=Ee,G=Z),Ee=G,H&&Q)t:{for(Z=H,A=Q,C=0,B=Z;B;B=Nr(B))C++;for(B=0,G=A;G;G=Nr(G))B++;for(;0<C-B;)Z=Nr(Z),C--;for(;0<B-C;)A=Nr(A),B--;for(;C--;){if(Z===A||A!==null&&Z===A.alternate)break t;Z=Nr(Z),A=Nr(A)}Z=null}else Z=null;H!==null&&C0(V,L,H,Z,!1),Q!==null&&Ee!==null&&C0(V,Ee,Q,Z,!0)}}e:{if(L=R?Gr(R):window,H=L.nodeName&&L.nodeName.toLowerCase(),H==="select"||H==="input"&&L.type==="file")var ee=c2;else if(x0(L))if(l_)ee=g2;else{ee=h2;var J=f2}else(H=L.nodeName)&&H.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=m2);if(ee&&(ee=ee(t,R))){o_(V,ee,a,F);break e}J&&J(t,L,R),t==="focusout"&&(J=L._wrapperState)&&J.controlled&&L.type==="number"&&bu(L,"number",L.value)}switch(J=R?Gr(R):window,t){case"focusin":(x0(J)||J.contentEditable==="true")&&(qr=J,Du=R,Ki=null);break;case"focusout":Ki=Du=qr=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,T0(V,a,F);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":T0(V,a,F)}var de;if(Td)e:{switch(t){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Wr?a_(t,a)&&(X="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(i_&&a.locale!=="ko"&&(Wr||X!=="onCompositionStart"?X==="onCompositionEnd"&&Wr&&(de=r_()):(Vn=F,kd="value"in Vn?Vn.value:Vn.textContent,Wr=!0)),J=Es(R,X),0<J.length&&(X=new v0(X,t,null,a,F),V.push({event:X,listeners:J}),de?X.data=de:(de=s_(a),de!==null&&(X.data=de)))),(de=o2?l2(t,a):u2(t,a))&&(R=Es(R,"onBeforeInput"),0<R.length&&(F=new v0("onBeforeInput","beforeinput",null,a,F),V.push({event:F,listeners:R}),F.data=de))}v_(V,n)})}function la(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Es(t,n){for(var a=n+"Capture",l=[];t!==null;){var p=t,h=p.stateNode;p.tag===5&&h!==null&&(p=h,h=ta(t,a),h!=null&&l.unshift(la(t,h,p)),h=ta(t,n),h!=null&&l.push(la(t,h,p))),t=t.return}return l}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C0(t,n,a,l,p){for(var h=n._reactName,v=[];a!==null&&a!==l;){var E=a,x=E.alternate,R=E.stateNode;if(x!==null&&x===l)break;E.tag===5&&R!==null&&(E=R,p?(x=ta(a,h),x!=null&&v.unshift(la(a,x,E))):p||(x=ta(a,h),x!=null&&v.push(la(a,x,E)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var b2=/\r\n?/g,k2=/\u0000|\uFFFD/g;function O0(t){return(typeof t=="string"?t:""+t).replace(b2,`
`).replace(k2,"")}function Ja(t,n,a){if(n=O0(n),O0(t)!==n&&a)throw Error(j(425))}function Ts(){}var Mu=null,Nu=null;function Uu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,S2=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,E2=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(T2)}:Lu;function T2(t){setTimeout(function(){throw t})}function au(t,n){var a=n,l=0;do{var p=a.nextSibling;if(t.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(l===0){t.removeChild(p),ia(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=p}while(a);ia(n)}function jn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function A0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var fi=Math.random().toString(36).slice(2),dn="__reactFiber$"+fi,ua="__reactProps$"+fi,kn="__reactContainer$"+fi,Vu="__reactEvents$"+fi,I2="__reactListeners$"+fi,z2="__reactHandles$"+fi;function yr(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[kn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=A0(t);t!==null;){if(a=t[dn])return a;t=A0(t)}return n}t=a,a=t.parentNode}return null}function _a(t){return t=t[dn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ks(t){return t[ua]||null}var Wu=[],jr=-1;function er(t){return{current:t}}function Pe(t){0>jr||(t.current=Wu[jr],Wu[jr]=null,jr--)}function Be(t,n){jr++,Wu[jr]=t.current,t.current=n}var Yn={},dt=er(Yn),$t=er(!1),xr=Yn;function ai(t,n){var a=t.type.contextTypes;if(!a)return Yn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var p={},h;for(h in a)p[h]=n[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=p),p}function xt(t){return t=t.childContextTypes,t!=null}function Is(){Pe($t),Pe(dt)}function B0(t,n,a){if(dt.current!==Yn)throw Error(j(168));Be(dt,n),Be($t,a)}function w_(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var p in l)if(!(p in n))throw Error(j(108,f$(t)||"Unknown",p));return qe({},a,l)}function zs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yn,xr=dt.current,Be(dt,t),Be($t,$t.current),!0}function D0(t,n,a){var l=t.stateNode;if(!l)throw Error(j(169));a?(t=w_(t,n,xr),l.__reactInternalMemoizedMergedChildContext=t,Pe($t),Pe(dt),Be(dt,t)):Pe($t),Be($t,a)}var _n=null,Qs=!1,su=!1;function $_(t){_n===null?_n=[t]:_n.push(t)}function C2(t){Qs=!0,$_(t)}function tr(){if(!su&&_n!==null){su=!0;var t=0,n=Oe;try{var a=_n;for(Oe=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}_n=null,Qs=!1}catch(p){throw _n!==null&&(_n=_n.slice(t+1)),jv(wd,tr),p}finally{Oe=n,su=!1}}return null}var Hr=[],Kr=0,Cs=null,Os=0,Pt=[],Mt=0,br=null,wn=1,$n="";function mr(t,n){Hr[Kr++]=Os,Hr[Kr++]=Cs,Cs=t,Os=n}function x_(t,n,a){Pt[Mt++]=wn,Pt[Mt++]=$n,Pt[Mt++]=br,br=t;var l=wn;t=$n;var p=32-tn(l)-1;l&=~(1<<p),a+=1;var h=32-tn(n)+p;if(30<h){var v=p-p%5;h=(l&(1<<v)-1).toString(32),l>>=v,p-=v,wn=1<<32-tn(n)+p|a<<p|l,$n=h+t}else wn=1<<h|a<<p|l,$n=t}function zd(t){t.return!==null&&(mr(t,1),x_(t,1,0))}function Cd(t){for(;t===Cs;)Cs=Hr[--Kr],Hr[Kr]=null,Os=Hr[--Kr],Hr[Kr]=null;for(;t===br;)br=Pt[--Mt],Pt[Mt]=null,$n=Pt[--Mt],Pt[Mt]=null,wn=Pt[--Mt],Pt[Mt]=null}var Ct=null,zt=null,Ne=!1,en=null;function b_(t,n){var a=Nt(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function P0(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Ct=t,zt=jn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Ct=t,zt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=br!==null?{id:wn,overflow:$n}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Nt(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,Ct=t,zt=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fu(t){if(Ne){var n=zt;if(n){var a=n;if(!P0(t,n)){if(qu(t))throw Error(j(418));n=jn(a.nextSibling);var l=Ct;n&&P0(t,n)?b_(l,a):(t.flags=t.flags&-4097|2,Ne=!1,Ct=t)}}else{if(qu(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ne=!1,Ct=t}}}function M0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function es(t){if(t!==Ct)return!1;if(!Ne)return M0(t),Ne=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Uu(t.type,t.memoizedProps)),n&&(n=zt)){if(qu(t))throw k_(),Error(j(418));for(;n;)b_(t,n),n=jn(n.nextSibling)}if(M0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){zt=jn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}zt=null}}else zt=Ct?jn(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=zt;t;)t=jn(t.nextSibling)}function si(){zt=Ct=null,Ne=!1}function Od(t){en===null?en=[t]:en.push(t)}var O2=Tn.ReactCurrentBatchConfig;function Pi(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(j(309));var l=a.stateNode}if(!l)throw Error(j(147,t));var p=l,h=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(v){var E=p.refs;v===null?delete E[h]:E[h]=v},n._stringRef=h,n)}if(typeof t!="string")throw Error(j(284));if(!a._owner)throw Error(j(290,t))}return t}function ts(t,n){throw t=Object.prototype.toString.call(n),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function N0(t){var n=t._init;return n(t._payload)}function S_(t){function n(A,C){if(t){var B=A.deletions;B===null?(A.deletions=[C],A.flags|=16):B.push(C)}}function a(A,C){if(!t)return null;for(;C!==null;)n(A,C),C=C.sibling;return null}function l(A,C){for(A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function p(A,C){return A=Zn(A,C),A.index=0,A.sibling=null,A}function h(A,C,B){return A.index=B,t?(B=A.alternate,B!==null?(B=B.index,B<C?(A.flags|=2,C):B):(A.flags|=2,C)):(A.flags|=1048576,C)}function v(A){return t&&A.alternate===null&&(A.flags|=2),A}function E(A,C,B,G){return C===null||C.tag!==6?(C=fu(B,A.mode,G),C.return=A,C):(C=p(C,B),C.return=A,C)}function x(A,C,B,G){var ee=B.type;return ee===Vr?F(A,C,B.props.children,G,B.key):C!==null&&(C.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Mn&&N0(ee)===C.type)?(G=p(C,B.props),G.ref=Pi(A,C,B),G.return=A,G):(G=ys(B.type,B.key,B.props,null,A.mode,G),G.ref=Pi(A,C,B),G.return=A,G)}function R(A,C,B,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==B.containerInfo||C.stateNode.implementation!==B.implementation?(C=hu(B,A.mode,G),C.return=A,C):(C=p(C,B.children||[]),C.return=A,C)}function F(A,C,B,G,ee){return C===null||C.tag!==7?(C=$r(B,A.mode,G,ee),C.return=A,C):(C=p(C,B),C.return=A,C)}function V(A,C,B){if(typeof C=="string"&&C!==""||typeof C=="number")return C=fu(""+C,A.mode,B),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fa:return B=ys(C.type,C.key,C.props,null,A.mode,B),B.ref=Pi(A,null,C),B.return=A,B;case Lr:return C=hu(C,A.mode,B),C.return=A,C;case Mn:var G=C._init;return V(A,G(C._payload),B)}if(Li(C)||Oi(C))return C=$r(C,A.mode,B,null),C.return=A,C;ts(A,C)}return null}function L(A,C,B,G){var ee=C!==null?C.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ee!==null?null:E(A,C,""+B,G);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Fa:return B.key===ee?x(A,C,B,G):null;case Lr:return B.key===ee?R(A,C,B,G):null;case Mn:return ee=B._init,L(A,C,ee(B._payload),G)}if(Li(B)||Oi(B))return ee!==null?null:F(A,C,B,G,null);ts(A,B)}return null}function H(A,C,B,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return A=A.get(B)||null,E(C,A,""+G,ee);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Fa:return A=A.get(G.key===null?B:G.key)||null,x(C,A,G,ee);case Lr:return A=A.get(G.key===null?B:G.key)||null,R(C,A,G,ee);case Mn:var J=G._init;return H(A,C,B,J(G._payload),ee)}if(Li(G)||Oi(G))return A=A.get(B)||null,F(C,A,G,ee,null);ts(C,G)}return null}function Q(A,C,B,G){for(var ee=null,J=null,de=C,X=C=0,Ue=null;de!==null&&X<B.length;X++){de.index>X?(Ue=de,de=null):Ue=de.sibling;var xe=L(A,de,B[X],G);if(xe===null){de===null&&(de=Ue);break}t&&de&&xe.alternate===null&&n(A,de),C=h(xe,C,X),J===null?ee=xe:J.sibling=xe,J=xe,de=Ue}if(X===B.length)return a(A,de),Ne&&mr(A,X),ee;if(de===null){for(;X<B.length;X++)de=V(A,B[X],G),de!==null&&(C=h(de,C,X),J===null?ee=de:J.sibling=de,J=de);return Ne&&mr(A,X),ee}for(de=l(A,de);X<B.length;X++)Ue=H(de,A,X,B[X],G),Ue!==null&&(t&&Ue.alternate!==null&&de.delete(Ue.key===null?X:Ue.key),C=h(Ue,C,X),J===null?ee=Ue:J.sibling=Ue,J=Ue);return t&&de.forEach(function(yt){return n(A,yt)}),Ne&&mr(A,X),ee}function Z(A,C,B,G){var ee=Oi(B);if(typeof ee!="function")throw Error(j(150));if(B=ee.call(B),B==null)throw Error(j(151));for(var J=ee=null,de=C,X=C=0,Ue=null,xe=B.next();de!==null&&!xe.done;X++,xe=B.next()){de.index>X?(Ue=de,de=null):Ue=de.sibling;var yt=L(A,de,xe.value,G);if(yt===null){de===null&&(de=Ue);break}t&&de&&yt.alternate===null&&n(A,de),C=h(yt,C,X),J===null?ee=yt:J.sibling=yt,J=yt,de=Ue}if(xe.done)return a(A,de),Ne&&mr(A,X),ee;if(de===null){for(;!xe.done;X++,xe=B.next())xe=V(A,xe.value,G),xe!==null&&(C=h(xe,C,X),J===null?ee=xe:J.sibling=xe,J=xe);return Ne&&mr(A,X),ee}for(de=l(A,de);!xe.done;X++,xe=B.next())xe=H(de,A,X,xe.value,G),xe!==null&&(t&&xe.alternate!==null&&de.delete(xe.key===null?X:xe.key),C=h(xe,C,X),J===null?ee=xe:J.sibling=xe,J=xe);return t&&de.forEach(function(nr){return n(A,nr)}),Ne&&mr(A,X),ee}function Ee(A,C,B,G){if(typeof B=="object"&&B!==null&&B.type===Vr&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Fa:e:{for(var ee=B.key,J=C;J!==null;){if(J.key===ee){if(ee=B.type,ee===Vr){if(J.tag===7){a(A,J.sibling),C=p(J,B.props.children),C.return=A,A=C;break e}}else if(J.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Mn&&N0(ee)===J.type){a(A,J.sibling),C=p(J,B.props),C.ref=Pi(A,J,B),C.return=A,A=C;break e}a(A,J);break}else n(A,J);J=J.sibling}B.type===Vr?(C=$r(B.props.children,A.mode,G,B.key),C.return=A,A=C):(G=ys(B.type,B.key,B.props,null,A.mode,G),G.ref=Pi(A,C,B),G.return=A,A=G)}return v(A);case Lr:e:{for(J=B.key;C!==null;){if(C.key===J)if(C.tag===4&&C.stateNode.containerInfo===B.containerInfo&&C.stateNode.implementation===B.implementation){a(A,C.sibling),C=p(C,B.children||[]),C.return=A,A=C;break e}else{a(A,C);break}else n(A,C);C=C.sibling}C=hu(B,A.mode,G),C.return=A,A=C}return v(A);case Mn:return J=B._init,Ee(A,C,J(B._payload),G)}if(Li(B))return Q(A,C,B,G);if(Oi(B))return Z(A,C,B,G);ts(A,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,C!==null&&C.tag===6?(a(A,C.sibling),C=p(C,B),C.return=A,A=C):(a(A,C),C=fu(B,A.mode,G),C.return=A,A=C),v(A)):a(A,C)}return Ee}var oi=S_(!0),E_=S_(!1),Rs=er(null),As=null,Qr=null,Rd=null;function Ad(){Rd=Qr=As=null}function Bd(t){var n=Rs.current;Pe(Rs),t._currentValue=n}function Gu(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function ni(t,n){As=t,Rd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(wt=!0),t.firstContext=null)}function Lt(t){var n=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:n,next:null},Qr===null){if(As===null)throw Error(j(308));Qr=t,As.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return n}var vr=null;function Dd(t){vr===null?vr=[t]:vr.push(t)}function T_(t,n,a,l){var p=n.interleaved;return p===null?(a.next=a,Dd(n)):(a.next=p.next,p.next=a),n.interleaved=a,Sn(t,l)}function Sn(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Nn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I_(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Hn(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,ze&2){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,Sn(t,a)}return p=l.interleaved,p===null?(n.next=n,Dd(l)):(n.next=p.next,p.next=n),l.interleaved=n,Sn(t,a)}function ps(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,$d(t,a)}}function U0(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var p=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?p=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?p=h=n:h=h.next=n}else p=h=n;a={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function Bs(t,n,a,l){var p=t.updateQueue;Nn=!1;var h=p.firstBaseUpdate,v=p.lastBaseUpdate,E=p.shared.pending;if(E!==null){p.shared.pending=null;var x=E,R=x.next;x.next=null,v===null?h=R:v.next=R,v=x;var F=t.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=R:E.next=R,F.lastBaseUpdate=x))}if(h!==null){var V=p.baseState;v=0,F=R=x=null,E=h;do{var L=E.lane,H=E.eventTime;if((l&L)===L){F!==null&&(F=F.next={eventTime:H,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var Q=t,Z=E;switch(L=n,H=a,Z.tag){case 1:if(Q=Z.payload,typeof Q=="function"){V=Q.call(H,V,L);break e}V=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=Z.payload,L=typeof Q=="function"?Q.call(H,V,L):Q,L==null)break e;V=qe({},V,L);break e;case 2:Nn=!0}}E.callback!==null&&E.lane!==0&&(t.flags|=64,L=p.effects,L===null?p.effects=[E]:L.push(E))}else H={eventTime:H,lane:L,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(R=F=H,x=V):F=F.next=H,v|=L;if(E=E.next,E===null){if(E=p.shared.pending,E===null)break;L=E,E=L.next,L.next=null,p.lastBaseUpdate=L,p.shared.pending=null}}while(1);if(F===null&&(x=V),p.baseState=x,p.firstBaseUpdate=R,p.lastBaseUpdate=F,n=p.shared.interleaved,n!==null){p=n;do v|=p.lane,p=p.next;while(p!==n)}else h===null&&(p.shared.lanes=0);Sr|=v,t.lanes=v,t.memoizedState=V}}function L0(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],p=l.callback;if(p!==null){if(l.callback=null,l=a,typeof p!="function")throw Error(j(191,p));p.call(l)}}}var wa={},cn=er(wa),da=er(wa),pa=er(wa);function _r(t){if(t===wa)throw Error(j(174));return t}function Md(t,n){switch(Be(pa,n),Be(da,t),Be(cn,wa),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Su(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Su(n,t)}Pe(cn),Be(cn,n)}function li(){Pe(cn),Pe(da),Pe(pa)}function z_(t){_r(pa.current);var n=_r(cn.current),a=Su(n,t.type);n!==a&&(Be(da,t),Be(cn,a))}function Nd(t){da.current===t&&(Pe(cn),Pe(da))}var Ve=er(0);function Ds(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ou=[];function Ud(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var cs=Tn.ReactCurrentDispatcher,lu=Tn.ReactCurrentBatchConfig,kr=0,We=null,Ze=null,et=null,Ps=!1,Qi=!1,ca=0,R2=0;function ot(){throw Error(j(321))}function Ld(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!rn(t[a],n[a]))return!1;return!0}function Vd(t,n,a,l,p,h){if(kr=h,We=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,cs.current=t===null||t.memoizedState===null?P2:M2,t=a(l,p),Qi){h=0;do{if(Qi=!1,ca=0,25<=h)throw Error(j(301));h+=1,et=Ze=null,n.updateQueue=null,cs.current=N2,t=a(l,p)}while(Qi)}if(cs.current=Ms,n=Ze!==null&&Ze.next!==null,kr=0,et=Ze=We=null,Ps=!1,n)throw Error(j(300));return t}function Wd(){var t=ca!==0;return ca=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?We.memoizedState=et=t:et=et.next=t,et}function Vt(){if(Ze===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=et===null?We.memoizedState:et.next;if(n!==null)et=n,Ze=t;else{if(t===null)throw Error(j(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},et===null?We.memoizedState=et=t:et=et.next=t}return et}function fa(t,n){return typeof n=="function"?n(t):n}function uu(t){var n=Vt(),a=n.queue;if(a===null)throw Error(j(311));a.lastRenderedReducer=t;var l=Ze,p=l.baseQueue,h=a.pending;if(h!==null){if(p!==null){var v=p.next;p.next=h.next,h.next=v}l.baseQueue=p=h,a.pending=null}if(p!==null){h=p.next,l=l.baseState;var E=v=null,x=null,R=h;do{var F=R.lane;if((kr&F)===F)x!==null&&(x=x.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),l=R.hasEagerState?R.eagerState:t(l,R.action);else{var V={lane:F,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};x===null?(E=x=V,v=l):x=x.next=V,We.lanes|=F,Sr|=F}R=R.next}while(R!==null&&R!==h);x===null?v=l:x.next=E,rn(l,n.memoizedState)||(wt=!0),n.memoizedState=l,n.baseState=v,n.baseQueue=x,a.lastRenderedState=l}if(t=a.interleaved,t!==null){p=t;do h=p.lane,We.lanes|=h,Sr|=h,p=p.next;while(p!==t)}else p===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function du(t){var n=Vt(),a=n.queue;if(a===null)throw Error(j(311));a.lastRenderedReducer=t;var l=a.dispatch,p=a.pending,h=n.memoizedState;if(p!==null){a.pending=null;var v=p=p.next;do h=t(h,v.action),v=v.next;while(v!==p);rn(h,n.memoizedState)||(wt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,l]}function C_(){}function O_(t,n){var a=We,l=Vt(),p=n(),h=!rn(l.memoizedState,p);if(h&&(l.memoizedState=p,wt=!0),l=l.queue,qd(B_.bind(null,a,l,t),[t]),l.getSnapshot!==n||h||et!==null&&et.memoizedState.tag&1){if(a.flags|=2048,ha(9,A_.bind(null,a,l,p,n),void 0,null),tt===null)throw Error(j(349));kr&30||R_(a,n,p)}return p}function R_(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function A_(t,n,a,l){n.value=a,n.getSnapshot=l,D_(n)&&P_(t)}function B_(t,n,a){return a(function(){D_(n)&&P_(t)})}function D_(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!rn(t,a)}catch{return!0}}function P_(t){var n=Sn(t,1);n!==null&&nn(n,t,1,-1)}function V0(t){var n=un();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n.queue=t,t=t.dispatch=D2.bind(null,We,t),[n.memoizedState,t]}function ha(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function M_(){return Vt().memoizedState}function fs(t,n,a,l){var p=un();We.flags|=t,p.memoizedState=ha(1|n,a,void 0,l===void 0?null:l)}function Zs(t,n,a,l){var p=Vt();l=l===void 0?null:l;var h=void 0;if(Ze!==null){var v=Ze.memoizedState;if(h=v.destroy,l!==null&&Ld(l,v.deps)){p.memoizedState=ha(n,a,h,l);return}}We.flags|=t,p.memoizedState=ha(1|n,a,h,l)}function W0(t,n){return fs(8390656,8,t,n)}function qd(t,n){return Zs(2048,8,t,n)}function N_(t,n){return Zs(4,2,t,n)}function U_(t,n){return Zs(4,4,t,n)}function L_(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function V_(t,n,a){return a=a!=null?a.concat([t]):null,Zs(4,4,L_.bind(null,n,t),a)}function Fd(){}function W_(t,n){var a=Vt();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Ld(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function q_(t,n){var a=Vt();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Ld(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function F_(t,n,a){return kr&21?(rn(a,n)||(a=Qv(),We.lanes|=a,Sr|=a,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=a)}function A2(t,n){var a=Oe;Oe=a!==0&&4>a?a:4,t(!0);var l=lu.transition;lu.transition={};try{t(!1),n()}finally{Oe=a,lu.transition=l}}function G_(){return Vt().memoizedState}function B2(t,n,a){var l=Qn(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},j_(t))H_(n,a);else if(a=T_(t,n,a,l),a!==null){var p=ht();nn(a,t,l,p),K_(a,n,l)}}function D2(t,n,a){var l=Qn(t),p={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(j_(t))H_(n,p);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,E=h(v,a);if(p.hasEagerState=!0,p.eagerState=E,rn(E,v)){var x=n.interleaved;x===null?(p.next=p,Dd(n)):(p.next=x.next,x.next=p),n.interleaved=p;return}}catch{}finally{}a=T_(t,n,p,l),a!==null&&(p=ht(),nn(a,t,l,p),K_(a,n,l))}}function j_(t){var n=t.alternate;return t===We||n!==null&&n===We}function H_(t,n){Qi=Ps=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function K_(t,n,a){if(a&4194240){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,$d(t,a)}}var Ms={readContext:Lt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},P2={readContext:Lt,useCallback:function(t,n){return un().memoizedState=[t,n===void 0?null:n],t},useContext:Lt,useEffect:W0,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,fs(4194308,4,L_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fs(4194308,4,t,n)},useInsertionEffect:function(t,n){return fs(4,2,t,n)},useMemo:function(t,n){var a=un();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=un();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=B2.bind(null,We,t),[l.memoizedState,t]},useRef:function(t){var n=un();return t={current:t},n.memoizedState=t},useState:V0,useDebugValue:Fd,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=V0(!1),n=t[0];return t=A2.bind(null,t[1]),un().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=We,p=un();if(Ne){if(a===void 0)throw Error(j(407));a=a()}else{if(a=n(),tt===null)throw Error(j(349));kr&30||R_(l,n,a)}p.memoizedState=a;var h={value:a,getSnapshot:n};return p.queue=h,W0(B_.bind(null,l,h,t),[t]),l.flags|=2048,ha(9,A_.bind(null,l,h,a,n),void 0,null),a},useId:function(){var t=un(),n=tt.identifierPrefix;if(Ne){var a=$n,l=wn;a=(l&~(1<<32-tn(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=ca++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=R2++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},M2={readContext:Lt,useCallback:W_,useContext:Lt,useEffect:qd,useImperativeHandle:V_,useInsertionEffect:N_,useLayoutEffect:U_,useMemo:q_,useReducer:uu,useRef:M_,useState:function(){return uu(fa)},useDebugValue:Fd,useDeferredValue:function(t){var n=Vt();return F_(n,Ze.memoizedState,t)},useTransition:function(){var t=uu(fa)[0],n=Vt().memoizedState;return[t,n]},useMutableSource:C_,useSyncExternalStore:O_,useId:G_,unstable_isNewReconciler:!1},N2={readContext:Lt,useCallback:W_,useContext:Lt,useEffect:qd,useImperativeHandle:V_,useInsertionEffect:N_,useLayoutEffect:U_,useMemo:q_,useReducer:du,useRef:M_,useState:function(){return du(fa)},useDebugValue:Fd,useDeferredValue:function(t){var n=Vt();return Ze===null?n.memoizedState=t:F_(n,Ze.memoizedState,t)},useTransition:function(){var t=du(fa)[0],n=Vt().memoizedState;return[t,n]},useMutableSource:C_,useSyncExternalStore:O_,useId:G_,unstable_isNewReconciler:!1};function Yt(t,n){if(t&&t.defaultProps){n=qe({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function ju(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:qe({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xs={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=ht(),p=Qn(t),h=xn(l,p);h.payload=n,a!=null&&(h.callback=a),n=Hn(t,h,p),n!==null&&(nn(n,t,p,l),ps(n,t,p))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=ht(),p=Qn(t),h=xn(l,p);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Hn(t,h,p),n!==null&&(nn(n,t,p,l),ps(n,t,p))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ht(),l=Qn(t),p=xn(a,l);p.tag=2,n!=null&&(p.callback=n),n=Hn(t,p,l),n!==null&&(nn(n,t,l,a),ps(n,t,l))}};function q0(t,n,a,l,p,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,v):n.prototype&&n.prototype.isPureReactComponent?!sa(a,l)||!sa(p,h):!0}function Q_(t,n,a){var l=!1,p=Yn,h=n.contextType;return typeof h=="object"&&h!==null?h=Lt(h):(p=xt(n)?xr:dt.current,l=n.contextTypes,h=(l=l!=null)?ai(t,p):Yn),n=new n(a,h),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xs,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=p,t.__reactInternalMemoizedMaskedChildContext=h),n}function F0(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Xs.enqueueReplaceState(n,n.state,null)}function Hu(t,n,a,l){var p=t.stateNode;p.props=a,p.state=t.memoizedState,p.refs={},Pd(t);var h=n.contextType;typeof h=="object"&&h!==null?p.context=Lt(h):(h=xt(n)?xr:dt.current,p.context=ai(t,h)),p.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ju(t,n,h,a),p.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(n=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),n!==p.state&&Xs.enqueueReplaceState(p,p.state,null),Bs(t,a,p,l),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,n){try{var a="",l=n;do a+=c$(l),l=l.return;while(l);var p=a}catch(h){p=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:n,stack:p,digest:null}}function pu(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function Ku(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var U2=typeof WeakMap=="function"?WeakMap:Map;function Z_(t,n,a){a=xn(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Us||(Us=!0,id=l),Ku(t,n)},a}function X_(t,n,a){a=xn(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var p=n.value;a.payload=function(){return l(p)},a.callback=function(){Ku(t,n)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Ku(t,n),typeof l!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),a}function G0(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new U2;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(a)||(p.add(a),t=J2.bind(null,t,n,a),n.then(t,t))}function j0(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function H0(t,n,a,l,p){return t.mode&1?(t.flags|=65536,t.lanes=p,t):(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=xn(-1,1),n.tag=2,Hn(a,n,1))),a.lanes|=1),t)}var L2=Tn.ReactCurrentOwner,wt=!1;function ft(t,n,a,l){n.child=t===null?E_(n,null,a,l):oi(n,t.child,a,l)}function K0(t,n,a,l,p){a=a.render;var h=n.ref;return ni(n,p),l=Vd(t,n,a,l,h,p),a=Wd(),t!==null&&!wt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,En(t,n,p)):(Ne&&a&&zd(n),n.flags|=1,ft(t,n,l,p),n.child)}function Q0(t,n,a,l,p){if(t===null){var h=a.type;return typeof h=="function"&&!Yd(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=h,Y_(t,n,h,l,p)):(t=ys(a.type,null,l,n,n.mode,p),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!(t.lanes&p)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:sa,a(v,l)&&t.ref===n.ref)return En(t,n,p)}return n.flags|=1,t=Zn(h,l),t.ref=n.ref,t.return=n,n.child=t}function Y_(t,n,a,l,p){if(t!==null){var h=t.memoizedProps;if(sa(h,l)&&t.ref===n.ref)if(wt=!1,n.pendingProps=l=h,(t.lanes&p)!==0)t.flags&131072&&(wt=!0);else return n.lanes=t.lanes,En(t,n,p)}return Qu(t,n,a,l,p)}function J_(t,n,a){var l=n.pendingProps,p=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Xr,It),It|=a;else{if(!(a&1073741824))return t=h!==null?h.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Be(Xr,It),It|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Be(Xr,It),It|=l}else h!==null?(l=h.baseLanes|a,n.memoizedState=null):l=a,Be(Xr,It),It|=l;return ft(t,n,p,a),n.child}function ew(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Qu(t,n,a,l,p){var h=xt(a)?xr:dt.current;return h=ai(n,h),ni(n,p),a=Vd(t,n,a,l,h,p),l=Wd(),t!==null&&!wt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,En(t,n,p)):(Ne&&l&&zd(n),n.flags|=1,ft(t,n,a,p),n.child)}function Z0(t,n,a,l,p){if(xt(a)){var h=!0;zs(n)}else h=!1;if(ni(n,p),n.stateNode===null)hs(t,n),Q_(n,a,l),Hu(n,a,l,p),l=!0;else if(t===null){var v=n.stateNode,E=n.memoizedProps;v.props=E;var x=v.context,R=a.contextType;typeof R=="object"&&R!==null?R=Lt(R):(R=xt(a)?xr:dt.current,R=ai(n,R));var F=a.getDerivedStateFromProps,V=typeof F=="function"||typeof v.getSnapshotBeforeUpdate=="function";V||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==l||x!==R)&&F0(n,v,l,R),Nn=!1;var L=n.memoizedState;v.state=L,Bs(n,l,v,p),x=n.memoizedState,E!==l||L!==x||$t.current||Nn?(typeof F=="function"&&(ju(n,a,F,l),x=n.memoizedState),(E=Nn||q0(n,a,E,l,L,x,R))?(V||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=x),v.props=l,v.state=x,v.context=R,l=E):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{v=n.stateNode,I_(t,n),E=n.memoizedProps,R=n.type===n.elementType?E:Yt(n.type,E),v.props=R,V=n.pendingProps,L=v.context,x=a.contextType,typeof x=="object"&&x!==null?x=Lt(x):(x=xt(a)?xr:dt.current,x=ai(n,x));var H=a.getDerivedStateFromProps;(F=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==V||L!==x)&&F0(n,v,l,x),Nn=!1,L=n.memoizedState,v.state=L,Bs(n,l,v,p);var Q=n.memoizedState;E!==V||L!==Q||$t.current||Nn?(typeof H=="function"&&(ju(n,a,H,l),Q=n.memoizedState),(R=Nn||q0(n,a,R,l,L,Q,x)||!1)?(F||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,Q,x),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,Q,x)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Q),v.props=l,v.state=Q,v.context=x,l=R):(typeof v.componentDidUpdate!="function"||E===t.memoizedProps&&L===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&L===t.memoizedState||(n.flags|=1024),l=!1)}return Zu(t,n,a,l,h,p)}function Zu(t,n,a,l,p,h){ew(t,n);var v=(n.flags&128)!==0;if(!l&&!v)return p&&D0(n,a,!1),En(t,n,h);l=n.stateNode,L2.current=n;var E=v&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&v?(n.child=oi(n,t.child,null,h),n.child=oi(n,null,E,h)):ft(t,n,E,h),n.memoizedState=l.state,p&&D0(n,a,!0),n.child}function tw(t){var n=t.stateNode;n.pendingContext?B0(t,n.pendingContext,n.pendingContext!==n.context):n.context&&B0(t,n.context,!1),Md(t,n.containerInfo)}function X0(t,n,a,l,p){return si(),Od(p),n.flags|=256,ft(t,n,a,l),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function nw(t,n,a){var l=n.pendingProps,p=Ve.current,h=!1,v=(n.flags&128)!==0,E;if((E=v)||(E=t!==null&&t.memoizedState===null?!1:(p&2)!==0),E?(h=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(p|=1),Be(Ve,p&1),t===null)return Fu(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(v=l.children,t=l.fallback,h?(l=n.mode,h=n.child,v={mode:"hidden",children:v},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=v):h=eo(v,l,0,null),t=$r(t,l,a,null),h.return=n,t.return=n,h.sibling=t,n.child=h,n.child.memoizedState=Yu(a),n.memoizedState=Xu,t):Gd(n,v));if(p=t.memoizedState,p!==null&&(E=p.dehydrated,E!==null))return V2(t,n,v,l,E,p,a);if(h){h=l.fallback,v=n.mode,p=t.child,E=p.sibling;var x={mode:"hidden",children:l.children};return!(v&1)&&n.child!==p?(l=n.child,l.childLanes=0,l.pendingProps=x,n.deletions=null):(l=Zn(p,x),l.subtreeFlags=p.subtreeFlags&14680064),E!==null?h=Zn(E,h):(h=$r(h,v,a,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,v=t.child.memoizedState,v=v===null?Yu(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=t.childLanes&~a,n.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=Zn(h,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function Gd(t,n){return n=eo({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function ns(t,n,a,l){return l!==null&&Od(l),oi(n,t.child,null,a),t=Gd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function V2(t,n,a,l,p,h,v){if(a)return n.flags&256?(n.flags&=-257,l=pu(Error(j(422))),ns(t,n,v,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(h=l.fallback,p=n.mode,l=eo({mode:"visible",children:l.children},p,0,null),h=$r(h,p,v,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,n.mode&1&&oi(n,t.child,null,v),n.child.memoizedState=Yu(v),n.memoizedState=Xu,h);if(!(n.mode&1))return ns(t,n,v,null);if(p.data==="$!"){if(l=p.nextSibling&&p.nextSibling.dataset,l)var E=l.dgst;return l=E,h=Error(j(419)),l=pu(h,l,void 0),ns(t,n,v,l)}if(E=(v&t.childLanes)!==0,wt||E){if(l=tt,l!==null){switch(v&-v){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(l.suspendedLanes|v)?0:p,p!==0&&p!==h.retryLane&&(h.retryLane=p,Sn(t,p),nn(l,t,p,-1))}return Xd(),l=pu(Error(j(421))),ns(t,n,v,l)}return p.data==="$?"?(n.flags|=128,n.child=t.child,n=ex.bind(null,t),p._reactRetry=n,null):(t=h.treeContext,zt=jn(p.nextSibling),Ct=n,Ne=!0,en=null,t!==null&&(Pt[Mt++]=wn,Pt[Mt++]=$n,Pt[Mt++]=br,wn=t.id,$n=t.overflow,br=n),n=Gd(n,l.children),n.flags|=4096,n)}function Y0(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Gu(t.return,n,a)}function cu(t,n,a,l,p){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:p}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=p)}function rw(t,n,a){var l=n.pendingProps,p=l.revealOrder,h=l.tail;if(ft(t,n,l.children,a),l=Ve.current,l&2)l=l&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,a,n);else if(t.tag===19)Y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Be(Ve,l),!(n.mode&1))n.memoizedState=null;else switch(p){case"forwards":for(a=n.child,p=null;a!==null;)t=a.alternate,t!==null&&Ds(t)===null&&(p=a),a=a.sibling;a=p,a===null?(p=n.child,n.child=null):(p=a.sibling,a.sibling=null),cu(n,!1,p,a,h);break;case"backwards":for(a=null,p=n.child,n.child=null;p!==null;){if(t=p.alternate,t!==null&&Ds(t)===null){n.child=p;break}t=p.sibling,p.sibling=a,a=p,p=t}cu(n,!0,a,null,h);break;case"together":cu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function hs(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function En(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sr|=n.lanes,!(a&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(j(153));if(n.child!==null){for(t=n.child,a=Zn(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zn(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function W2(t,n,a){switch(n.tag){case 3:tw(n),si();break;case 5:z_(n);break;case 1:xt(n.type)&&zs(n);break;case 4:Md(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,p=n.memoizedProps.value;Be(Rs,l._currentValue),l._currentValue=p;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Be(Ve,Ve.current&1),n.flags|=128,null):a&n.child.childLanes?nw(t,n,a):(Be(Ve,Ve.current&1),t=En(t,n,a),t!==null?t.sibling:null);Be(Ve,Ve.current&1);break;case 19:if(l=(a&n.childLanes)!==0,t.flags&128){if(l)return rw(t,n,a);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Be(Ve,Ve.current),l)break;return null;case 22:case 23:return n.lanes=0,J_(t,n,a)}return En(t,n,a)}var iw,Ju,aw,sw;iw=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Ju=function(){};aw=function(t,n,a,l){var p=t.memoizedProps;if(p!==l){t=n.stateNode,_r(cn.current);var h=null;switch(a){case"input":p=$u(t,p),l=$u(t,l),h=[];break;case"select":p=qe({},p,{value:void 0}),l=qe({},l,{value:void 0}),h=[];break;case"textarea":p=ku(t,p),l=ku(t,l),h=[];break;default:typeof p.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ts)}Eu(a,l);var v;a=null;for(R in p)if(!l.hasOwnProperty(R)&&p.hasOwnProperty(R)&&p[R]!=null)if(R==="style"){var E=p[R];for(v in E)E.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(Ji.hasOwnProperty(R)?h||(h=[]):(h=h||[]).push(R,null));for(R in l){var x=l[R];if(E=p!=null?p[R]:void 0,l.hasOwnProperty(R)&&x!==E&&(x!=null||E!=null))if(R==="style")if(E){for(v in E)!E.hasOwnProperty(v)||x&&x.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in x)x.hasOwnProperty(v)&&E[v]!==x[v]&&(a||(a={}),a[v]=x[v])}else a||(h||(h=[]),h.push(R,a)),a=x;else R==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,E=E?E.__html:void 0,x!=null&&E!==x&&(h=h||[]).push(R,x)):R==="children"?typeof x!="string"&&typeof x!="number"||(h=h||[]).push(R,""+x):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(R)?(x!=null&&R==="onScroll"&&De("scroll",t),h||E===x||(h=[])):(h=h||[]).push(R,x))}a&&(h=h||[]).push("style",a);var R=h;(n.updateQueue=R)&&(n.flags|=4)}};sw=function(t,n,a,l){a!==l&&(n.flags|=4)};function Mi(t,n){if(!Ne)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function lt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags&14680064,l|=p.flags&14680064,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function q2(t,n,a){var l=n.pendingProps;switch(Cd(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return xt(n.type)&&Is(),lt(n),null;case 3:return l=n.stateNode,li(),Pe($t),Pe(dt),Ud(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(es(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,en!==null&&(od(en),en=null))),Ju(t,n),lt(n),null;case 5:Nd(n);var p=_r(pa.current);if(a=n.type,t!==null&&n.stateNode!=null)aw(t,n,a,l,p),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(j(166));return lt(n),null}if(t=_r(cn.current),es(n)){l=n.stateNode,a=n.type;var h=n.memoizedProps;switch(l[dn]=n,l[ua]=h,t=(n.mode&1)!==0,a){case"dialog":De("cancel",l),De("close",l);break;case"iframe":case"object":case"embed":De("load",l);break;case"video":case"audio":for(p=0;p<Wi.length;p++)De(Wi[p],l);break;case"source":De("error",l);break;case"img":case"image":case"link":De("error",l),De("load",l);break;case"details":De("toggle",l);break;case"input":o0(l,h),De("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},De("invalid",l);break;case"textarea":u0(l,h),De("invalid",l)}Eu(a,h),p=null;for(var v in h)if(h.hasOwnProperty(v)){var E=h[v];v==="children"?typeof E=="string"?l.textContent!==E&&(h.suppressHydrationWarning!==!0&&Ja(l.textContent,E,t),p=["children",E]):typeof E=="number"&&l.textContent!==""+E&&(h.suppressHydrationWarning!==!0&&Ja(l.textContent,E,t),p=["children",""+E]):Ji.hasOwnProperty(v)&&E!=null&&v==="onScroll"&&De("scroll",l)}switch(a){case"input":Ga(l),l0(l,h,!0);break;case"textarea":Ga(l),d0(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ts)}l=p,n.updateQueue=l,l!==null&&(n.flags|=4)}else{v=p.nodeType===9?p:p.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bv(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=v.createElement(a,{is:l.is}):(t=v.createElement(a),a==="select"&&(v=t,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):t=v.createElementNS(t,a),t[dn]=n,t[ua]=l,iw(t,n,!1,!1),n.stateNode=t;e:{switch(v=Tu(a,l),a){case"dialog":De("cancel",t),De("close",t),p=l;break;case"iframe":case"object":case"embed":De("load",t),p=l;break;case"video":case"audio":for(p=0;p<Wi.length;p++)De(Wi[p],t);p=l;break;case"source":De("error",t),p=l;break;case"img":case"image":case"link":De("error",t),De("load",t),p=l;break;case"details":De("toggle",t),p=l;break;case"input":o0(t,l),p=$u(t,l),De("invalid",t);break;case"option":p=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},p=qe({},l,{value:void 0}),De("invalid",t);break;case"textarea":u0(t,l),p=ku(t,l),De("invalid",t);break;default:p=l}Eu(a,p),E=p;for(h in E)if(E.hasOwnProperty(h)){var x=E[h];h==="style"?Mv(t,x):h==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Dv(t,x)):h==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&ea(t,x):typeof x=="number"&&ea(t,""+x):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ji.hasOwnProperty(h)?x!=null&&h==="onScroll"&&De("scroll",t):x!=null&&md(t,h,x,v))}switch(a){case"input":Ga(t),l0(t,l,!1);break;case"textarea":Ga(t),d0(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Xn(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Yr(t,!!l.multiple,h,!1):l.defaultValue!=null&&Yr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof p.onClick=="function"&&(t.onclick=Ts)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return lt(n),null;case 6:if(t&&n.stateNode!=null)sw(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(j(166));if(a=_r(pa.current),_r(cn.current),es(n)){if(l=n.stateNode,a=n.memoizedProps,l[dn]=n,(h=l.nodeValue!==a)&&(t=Ct,t!==null))switch(t.tag){case 3:Ja(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(l.nodeValue,a,(t.mode&1)!==0)}h&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[dn]=n,n.stateNode=l}return lt(n),null;case 13:if(Pe(Ve),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&zt!==null&&n.mode&1&&!(n.flags&128))k_(),si(),n.flags|=98560,h=!1;else if(h=es(n),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(j(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(j(317));h[dn]=n}else si(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;lt(n),h=!1}else en!==null&&(od(en),en=null),h=!0;if(!h)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(t===null||Ve.current&1?Xe===0&&(Xe=3):Xd())),n.updateQueue!==null&&(n.flags|=4),lt(n),null);case 4:return li(),Ju(t,n),t===null&&oa(n.stateNode.containerInfo),lt(n),null;case 10:return Bd(n.type._context),lt(n),null;case 17:return xt(n.type)&&Is(),lt(n),null;case 19:if(Pe(Ve),h=n.memoizedState,h===null)return lt(n),null;if(l=(n.flags&128)!==0,v=h.rendering,v===null)if(l)Mi(h,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(v=Ds(t),v!==null){for(n.flags|=128,Mi(h,!1),l=v.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)h=a,t=l,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,t=v.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Be(Ve,Ve.current&1|2),n.child}t=t.sibling}h.tail!==null&&He()>di&&(n.flags|=128,l=!0,Mi(h,!1),n.lanes=4194304)}else{if(!l)if(t=Ds(v),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),Mi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!Ne)return lt(n),null}else 2*He()-h.renderingStartTime>di&&a!==1073741824&&(n.flags|=128,l=!0,Mi(h,!1),n.lanes=4194304);h.isBackwards?(v.sibling=n.child,n.child=v):(a=h.last,a!==null?a.sibling=v:n.child=v,h.last=v)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=He(),n.sibling=null,a=Ve.current,Be(Ve,l?a&1|2:a&1),n):(lt(n),null);case 22:case 23:return Zd(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?It&1073741824&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function F2(t,n){switch(Cd(n),n.tag){case 1:return xt(n.type)&&Is(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return li(),Pe($t),Pe(dt),Ud(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Nd(n),null;case 13:if(Pe(Ve),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(j(340));si()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Pe(Ve),null;case 4:return li(),null;case 10:return Bd(n.type._context),null;case 22:case 23:return Zd(),null;case 24:return null;default:return null}}var rs=!1,ut=!1,G2=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Zr(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ge(t,n,l)}else a.current=null}function ed(t,n,a){try{a()}catch(l){Ge(t,n,l)}}var J0=!1;function j2(t,n){if(Mu=ks,t=p_(),Id(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var p=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,E=-1,x=-1,R=0,F=0,V=t,L=null;t:for(;;){for(var H;V!==a||p!==0&&V.nodeType!==3||(E=v+p),V!==h||l!==0&&V.nodeType!==3||(x=v+l),V.nodeType===3&&(v+=V.nodeValue.length),(H=V.firstChild)!==null;)L=V,V=H;for(;;){if(V===t)break t;if(L===a&&++R===p&&(E=v),L===h&&++F===l&&(x=v),(H=V.nextSibling)!==null)break;V=L,L=V.parentNode}V=H}a=E===-1||x===-1?null:{start:E,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nu={focusedElem:t,selectionRange:a},ks=!1,ie=n;ie!==null;)if(n=ie,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ie=t;else for(;ie!==null;){n=ie;try{var Q=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var Z=Q.memoizedProps,Ee=Q.memoizedState,A=n.stateNode,C=A.getSnapshotBeforeUpdate(n.elementType===n.type?Z:Yt(n.type,Z),Ee);A.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var B=n.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(G){Ge(n,n.return,G)}if(t=n.sibling,t!==null){t.return=n.return,ie=t;break}ie=n.return}return Q=J0,J0=!1,Q}function Zi(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&t)===t){var h=p.destroy;p.destroy=void 0,h!==void 0&&ed(n,a,h)}p=p.next}while(p!==l)}}function Ys(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function td(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function ow(t){var n=t.alternate;n!==null&&(t.alternate=null,ow(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[dn],delete n[ua],delete n[Vu],delete n[I2],delete n[z2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lw(t){return t.tag===5||t.tag===3||t.tag===4}function ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ts));else if(l!==4&&(t=t.child,t!==null))for(nd(t,n,a),t=t.sibling;t!==null;)nd(t,n,a),t=t.sibling}function rd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(rd(t,n,a),t=t.sibling;t!==null;)rd(t,n,a),t=t.sibling}var rt=null,Jt=!1;function Pn(t,n,a){for(a=a.child;a!==null;)uw(t,n,a),a=a.sibling}function uw(t,n,a){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Fs,a)}catch{}switch(a.tag){case 5:ut||Zr(a,n);case 6:var l=rt,p=Jt;rt=null,Pn(t,n,a),rt=l,Jt=p,rt!==null&&(Jt?(t=rt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):rt.removeChild(a.stateNode));break;case 18:rt!==null&&(Jt?(t=rt,a=a.stateNode,t.nodeType===8?au(t.parentNode,a):t.nodeType===1&&au(t,a),ia(t)):au(rt,a.stateNode));break;case 4:l=rt,p=Jt,rt=a.stateNode.containerInfo,Jt=!0,Pn(t,n,a),rt=l,Jt=p;break;case 0:case 11:case 14:case 15:if(!ut&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){p=l=l.next;do{var h=p,v=h.destroy;h=h.tag,v!==void 0&&(h&2||h&4)&&ed(a,n,v),p=p.next}while(p!==l)}Pn(t,n,a);break;case 1:if(!ut&&(Zr(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(E){Ge(a,n,E)}Pn(t,n,a);break;case 21:Pn(t,n,a);break;case 22:a.mode&1?(ut=(l=ut)||a.memoizedState!==null,Pn(t,n,a),ut=l):Pn(t,n,a);break;default:Pn(t,n,a)}}function tv(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new G2),n.forEach(function(l){var p=tx.bind(null,t,l);a.has(l)||(a.add(l),l.then(p,p))})}}function Zt(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var p=a[l];try{var h=t,v=n,E=v;e:for(;E!==null;){switch(E.tag){case 5:rt=E.stateNode,Jt=!1;break e;case 3:rt=E.stateNode.containerInfo,Jt=!0;break e;case 4:rt=E.stateNode.containerInfo,Jt=!0;break e}E=E.return}if(rt===null)throw Error(j(160));uw(h,v,p),rt=null,Jt=!1;var x=p.alternate;x!==null&&(x.return=null),p.return=null}catch(R){Ge(p,n,R)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)dw(n,t),n=n.sibling}function dw(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(n,t),ln(t),l&4){try{Zi(3,t,t.return),Ys(3,t)}catch(Z){Ge(t,t.return,Z)}try{Zi(5,t,t.return)}catch(Z){Ge(t,t.return,Z)}}break;case 1:Zt(n,t),ln(t),l&512&&a!==null&&Zr(a,a.return);break;case 5:if(Zt(n,t),ln(t),l&512&&a!==null&&Zr(a,a.return),t.flags&32){var p=t.stateNode;try{ea(p,"")}catch(Z){Ge(t,t.return,Z)}}if(l&4&&(p=t.stateNode,p!=null)){var h=t.memoizedProps,v=a!==null?a.memoizedProps:h,E=t.type,x=t.updateQueue;if(t.updateQueue=null,x!==null)try{E==="input"&&h.type==="radio"&&h.name!=null&&Rv(p,h),Tu(E,v);var R=Tu(E,h);for(v=0;v<x.length;v+=2){var F=x[v],V=x[v+1];F==="style"?Mv(p,V):F==="dangerouslySetInnerHTML"?Dv(p,V):F==="children"?ea(p,V):md(p,F,V,R)}switch(E){case"input":xu(p,h);break;case"textarea":Av(p,h);break;case"select":var L=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!h.multiple;var H=h.value;H!=null?Yr(p,!!h.multiple,H,!1):L!==!!h.multiple&&(h.defaultValue!=null?Yr(p,!!h.multiple,h.defaultValue,!0):Yr(p,!!h.multiple,h.multiple?[]:"",!1))}p[ua]=h}catch(Z){Ge(t,t.return,Z)}}break;case 6:if(Zt(n,t),ln(t),l&4){if(t.stateNode===null)throw Error(j(162));p=t.stateNode,h=t.memoizedProps;try{p.nodeValue=h}catch(Z){Ge(t,t.return,Z)}}break;case 3:if(Zt(n,t),ln(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ia(n.containerInfo)}catch(Z){Ge(t,t.return,Z)}break;case 4:Zt(n,t),ln(t);break;case 13:Zt(n,t),ln(t),p=t.child,p.flags&8192&&(h=p.memoizedState!==null,p.stateNode.isHidden=h,!h||p.alternate!==null&&p.alternate.memoizedState!==null||(Kd=He())),l&4&&tv(t);break;case 22:if(F=a!==null&&a.memoizedState!==null,t.mode&1?(ut=(R=ut)||F,Zt(n,t),ut=R):Zt(n,t),ln(t),l&8192){if(R=t.memoizedState!==null,(t.stateNode.isHidden=R)&&!F&&t.mode&1)for(ie=t,F=t.child;F!==null;){for(V=ie=F;ie!==null;){switch(L=ie,H=L.child,L.tag){case 0:case 11:case 14:case 15:Zi(4,L,L.return);break;case 1:Zr(L,L.return);var Q=L.stateNode;if(typeof Q.componentWillUnmount=="function"){l=L,a=L.return;try{n=l,Q.props=n.memoizedProps,Q.state=n.memoizedState,Q.componentWillUnmount()}catch(Z){Ge(l,a,Z)}}break;case 5:Zr(L,L.return);break;case 22:if(L.memoizedState!==null){rv(V);continue}}H!==null?(H.return=L,ie=H):rv(V)}F=F.sibling}e:for(F=null,V=t;;){if(V.tag===5){if(F===null){F=V;try{p=V.stateNode,R?(h=p.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(E=V.stateNode,x=V.memoizedProps.style,v=x!=null&&x.hasOwnProperty("display")?x.display:null,E.style.display=Pv("display",v))}catch(Z){Ge(t,t.return,Z)}}}else if(V.tag===6){if(F===null)try{V.stateNode.nodeValue=R?"":V.memoizedProps}catch(Z){Ge(t,t.return,Z)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===t)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===t)break e;for(;V.sibling===null;){if(V.return===null||V.return===t)break e;F===V&&(F=null),V=V.return}F===V&&(F=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Zt(n,t),ln(t),l&4&&tv(t);break;case 21:break;default:Zt(n,t),ln(t)}}function ln(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(lw(a)){var l=a;break e}a=a.return}throw Error(j(160))}switch(l.tag){case 5:var p=l.stateNode;l.flags&32&&(ea(p,""),l.flags&=-33);var h=ev(t);rd(t,h,p);break;case 3:case 4:var v=l.stateNode.containerInfo,E=ev(t);nd(t,E,v);break;default:throw Error(j(161))}}catch(x){Ge(t,t.return,x)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function H2(t,n,a){ie=t,pw(t)}function pw(t,n,a){for(var l=(t.mode&1)!==0;ie!==null;){var p=ie,h=p.child;if(p.tag===22&&l){var v=p.memoizedState!==null||rs;if(!v){var E=p.alternate,x=E!==null&&E.memoizedState!==null||ut;E=rs;var R=ut;if(rs=v,(ut=x)&&!R)for(ie=p;ie!==null;)v=ie,x=v.child,v.tag===22&&v.memoizedState!==null?iv(p):x!==null?(x.return=v,ie=x):iv(p);for(;h!==null;)ie=h,pw(h),h=h.sibling;ie=p,rs=E,ut=R}nv(t)}else p.subtreeFlags&8772&&h!==null?(h.return=p,ie=h):nv(t)}}function nv(t){for(;ie!==null;){var n=ie;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ut||Ys(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!ut)if(a===null)l.componentDidMount();else{var p=n.elementType===n.type?a.memoizedProps:Yt(n.type,a.memoizedProps);l.componentDidUpdate(p,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&L0(n,h,l);break;case 3:var v=n.updateQueue;if(v!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}L0(n,v,a)}break;case 5:var E=n.stateNode;if(a===null&&n.flags&4){a=E;var x=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var R=n.alternate;if(R!==null){var F=R.memoizedState;if(F!==null){var V=F.dehydrated;V!==null&&ia(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||n.flags&512&&td(n)}catch(L){Ge(n,n.return,L)}}if(n===t){ie=null;break}if(a=n.sibling,a!==null){a.return=n.return,ie=a;break}ie=n.return}}function rv(t){for(;ie!==null;){var n=ie;if(n===t){ie=null;break}var a=n.sibling;if(a!==null){a.return=n.return,ie=a;break}ie=n.return}}function iv(t){for(;ie!==null;){var n=ie;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Ys(4,n)}catch(x){Ge(n,a,x)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var p=n.return;try{l.componentDidMount()}catch(x){Ge(n,p,x)}}var h=n.return;try{td(n)}catch(x){Ge(n,h,x)}break;case 5:var v=n.return;try{td(n)}catch(x){Ge(n,v,x)}}}catch(x){Ge(n,n.return,x)}if(n===t){ie=null;break}var E=n.sibling;if(E!==null){E.return=n.return,ie=E;break}ie=n.return}}var K2=Math.ceil,Ns=Tn.ReactCurrentDispatcher,jd=Tn.ReactCurrentOwner,Ut=Tn.ReactCurrentBatchConfig,ze=0,tt=null,Ke=null,it=0,It=0,Xr=er(0),Xe=0,ma=null,Sr=0,Js=0,Hd=0,Xi=null,_t=null,Kd=0,di=1/0,vn=null,Us=!1,id=null,Kn=null,is=!1,Wn=null,Ls=0,Yi=0,ad=null,ms=-1,gs=0;function ht(){return ze&6?He():ms!==-1?ms:ms=He()}function Qn(t){return t.mode&1?ze&2&&it!==0?it&-it:O2.transition!==null?(gs===0&&(gs=Qv()),gs):(t=Oe,t!==0||(t=window.event,t=t===void 0?16:n_(t.type)),t):1}function nn(t,n,a,l){if(50<Yi)throw Yi=0,ad=null,Error(j(185));ya(t,a,l),(!(ze&2)||t!==tt)&&(t===tt&&(!(ze&2)&&(Js|=a),Xe===4&&Ln(t,it)),bt(t,l),a===1&&ze===0&&!(n.mode&1)&&(di=He()+500,Qs&&tr()))}function bt(t,n){var a=t.callbackNode;O$(t,n);var l=bs(t,t===tt?it:0);if(l===0)a!==null&&f0(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&f0(a),n===1)t.tag===0?C2(av.bind(null,t)):$_(av.bind(null,t)),E2(function(){!(ze&6)&&tr()}),a=null;else{switch(Zv(l)){case 1:a=wd;break;case 4:a=Hv;break;case 16:a=xs;break;case 536870912:a=Kv;break;default:a=xs}a=_w(a,cw.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function cw(t,n){if(ms=-1,gs=0,ze&6)throw Error(j(327));var a=t.callbackNode;if(ri()&&t.callbackNode!==a)return null;var l=bs(t,t===tt?it:0);if(l===0)return null;if(l&30||l&t.expiredLanes||n)n=Vs(t,l);else{n=l;var p=ze;ze|=2;var h=hw();(tt!==t||it!==n)&&(vn=null,di=He()+500,wr(t,n));do try{X2();break}catch(E){fw(t,E)}while(1);Ad(),Ns.current=h,ze=p,Ke!==null?n=0:(tt=null,it=0,n=Xe)}if(n!==0){if(n===2&&(p=Ru(t),p!==0&&(l=p,n=sd(t,p))),n===1)throw a=ma,wr(t,0),Ln(t,l),bt(t,He()),a;if(n===6)Ln(t,l);else{if(p=t.current.alternate,!(l&30)&&!Q2(p)&&(n=Vs(t,l),n===2&&(h=Ru(t),h!==0&&(l=h,n=sd(t,h))),n===1))throw a=ma,wr(t,0),Ln(t,l),bt(t,He()),a;switch(t.finishedWork=p,t.finishedLanes=l,n){case 0:case 1:throw Error(j(345));case 2:gr(t,_t,vn);break;case 3:if(Ln(t,l),(l&130023424)===l&&(n=Kd+500-He(),10<n)){if(bs(t,0)!==0)break;if(p=t.suspendedLanes,(p&l)!==l){ht(),t.pingedLanes|=t.suspendedLanes&p;break}t.timeoutHandle=Lu(gr.bind(null,t,_t,vn),n);break}gr(t,_t,vn);break;case 4:if(Ln(t,l),(l&4194240)===l)break;for(n=t.eventTimes,p=-1;0<l;){var v=31-tn(l);h=1<<v,v=n[v],v>p&&(p=v),l&=~h}if(l=p,l=He()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*K2(l/1960))-l,10<l){t.timeoutHandle=Lu(gr.bind(null,t,_t,vn),l);break}gr(t,_t,vn);break;case 5:gr(t,_t,vn);break;default:throw Error(j(329))}}}return bt(t,He()),t.callbackNode===a?cw.bind(null,t):null}function sd(t,n){var a=Xi;return t.current.memoizedState.isDehydrated&&(wr(t,n).flags|=256),t=Vs(t,n),t!==2&&(n=_t,_t=a,n!==null&&od(n)),t}function od(t){_t===null?_t=t:_t.push.apply(_t,t)}function Q2(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var p=a[l],h=p.getSnapshot;p=p.value;try{if(!rn(h(),p))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ln(t,n){for(n&=~Hd,n&=~Js,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-tn(n),l=1<<a;t[a]=-1,n&=~l}}function av(t){if(ze&6)throw Error(j(327));ri();var n=bs(t,0);if(!(n&1))return bt(t,He()),null;var a=Vs(t,n);if(t.tag!==0&&a===2){var l=Ru(t);l!==0&&(n=l,a=sd(t,l))}if(a===1)throw a=ma,wr(t,0),Ln(t,n),bt(t,He()),a;if(a===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,gr(t,_t,vn),bt(t,He()),null}function Qd(t,n){var a=ze;ze|=1;try{return t(n)}finally{ze=a,ze===0&&(di=He()+500,Qs&&tr())}}function Er(t){Wn!==null&&Wn.tag===0&&!(ze&6)&&ri();var n=ze;ze|=1;var a=Ut.transition,l=Oe;try{if(Ut.transition=null,Oe=1,t)return t()}finally{Oe=l,Ut.transition=a,ze=n,!(ze&6)&&tr()}}function Zd(){It=Xr.current,Pe(Xr)}function wr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,S2(a)),Ke!==null)for(a=Ke.return;a!==null;){var l=a;switch(Cd(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Is();break;case 3:li(),Pe($t),Pe(dt),Ud();break;case 5:Nd(l);break;case 4:li();break;case 13:Pe(Ve);break;case 19:Pe(Ve);break;case 10:Bd(l.type._context);break;case 22:case 23:Zd()}a=a.return}if(tt=t,Ke=t=Zn(t.current,null),it=It=n,Xe=0,ma=null,Hd=Js=Sr=0,_t=Xi=null,vr!==null){for(n=0;n<vr.length;n++)if(a=vr[n],l=a.interleaved,l!==null){a.interleaved=null;var p=l.next,h=a.pending;if(h!==null){var v=h.next;h.next=p,l.next=v}a.pending=l}vr=null}return t}function fw(t,n){do{var a=Ke;try{if(Ad(),cs.current=Ms,Ps){for(var l=We.memoizedState;l!==null;){var p=l.queue;p!==null&&(p.pending=null),l=l.next}Ps=!1}if(kr=0,et=Ze=We=null,Qi=!1,ca=0,jd.current=null,a===null||a.return===null){Xe=1,ma=n,Ke=null;break}e:{var h=t,v=a.return,E=a,x=n;if(n=it,E.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=x,F=E,V=F.tag;if(!(F.mode&1)&&(V===0||V===11||V===15)){var L=F.alternate;L?(F.updateQueue=L.updateQueue,F.memoizedState=L.memoizedState,F.lanes=L.lanes):(F.updateQueue=null,F.memoizedState=null)}var H=j0(v);if(H!==null){H.flags&=-257,H0(H,v,E,h,n),H.mode&1&&G0(h,R,n),n=H,x=R;var Q=n.updateQueue;if(Q===null){var Z=new Set;Z.add(x),n.updateQueue=Z}else Q.add(x);break e}else{if(!(n&1)){G0(h,R,n),Xd();break e}x=Error(j(426))}}else if(Ne&&E.mode&1){var Ee=j0(v);if(Ee!==null){!(Ee.flags&65536)&&(Ee.flags|=256),H0(Ee,v,E,h,n),Od(ui(x,E));break e}}h=x=ui(x,E),Xe!==4&&(Xe=2),Xi===null?Xi=[h]:Xi.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var A=Z_(h,x,n);U0(h,A);break e;case 1:E=x;var C=h.type,B=h.stateNode;if(!(h.flags&128)&&(typeof C.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Kn===null||!Kn.has(B)))){h.flags|=65536,n&=-n,h.lanes|=n;var G=X_(h,E,n);U0(h,G);break e}}h=h.return}while(h!==null)}gw(a)}catch(ee){n=ee,Ke===a&&a!==null&&(Ke=a=a.return);continue}break}while(1)}function hw(){var t=Ns.current;return Ns.current=Ms,t===null?Ms:t}function Xd(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(Sr&268435455)&&!(Js&268435455)||Ln(tt,it)}function Vs(t,n){var a=ze;ze|=2;var l=hw();(tt!==t||it!==n)&&(vn=null,wr(t,n));do try{Z2();break}catch(p){fw(t,p)}while(1);if(Ad(),ze=a,Ns.current=l,Ke!==null)throw Error(j(261));return tt=null,it=0,Xe}function Z2(){for(;Ke!==null;)mw(Ke)}function X2(){for(;Ke!==null&&!x$();)mw(Ke)}function mw(t){var n=vw(t.alternate,t,It);t.memoizedProps=t.pendingProps,n===null?gw(t):Ke=n,jd.current=null}function gw(t){var n=t;do{var a=n.alternate;if(t=n.return,n.flags&32768){if(a=F2(a,n),a!==null){a.flags&=32767,Ke=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ke=null;return}}else if(a=q2(a,n,It),a!==null){Ke=a;return}if(n=n.sibling,n!==null){Ke=n;return}Ke=n=t}while(n!==null);Xe===0&&(Xe=5)}function gr(t,n,a){var l=Oe,p=Ut.transition;try{Ut.transition=null,Oe=1,Y2(t,n,a,l)}finally{Ut.transition=p,Oe=l}return null}function Y2(t,n,a,l){do ri();while(Wn!==null);if(ze&6)throw Error(j(327));a=t.finishedWork;var p=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(R$(t,h),t===tt&&(Ke=tt=null,it=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||is||(is=!0,_w(xs,function(){return ri(),null})),h=(a.flags&15990)!==0,a.subtreeFlags&15990||h){h=Ut.transition,Ut.transition=null;var v=Oe;Oe=1;var E=ze;ze|=4,jd.current=null,j2(t,a),dw(a,t),v2(Nu),ks=!!Mu,Nu=Mu=null,t.current=a,H2(a),b$(),ze=E,Oe=v,Ut.transition=h}else t.current=a;if(is&&(is=!1,Wn=t,Ls=p),h=t.pendingLanes,h===0&&(Kn=null),E$(a.stateNode),bt(t,He()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)p=n[a],l(p.value,{componentStack:p.stack,digest:p.digest});if(Us)throw Us=!1,t=id,id=null,t;return Ls&1&&t.tag!==0&&ri(),h=t.pendingLanes,h&1?t===ad?Yi++:(Yi=0,ad=t):Yi=0,tr(),null}function ri(){if(Wn!==null){var t=Zv(Ls),n=Ut.transition,a=Oe;try{if(Ut.transition=null,Oe=16>t?16:t,Wn===null)var l=!1;else{if(t=Wn,Wn=null,Ls=0,ze&6)throw Error(j(331));var p=ze;for(ze|=4,ie=t.current;ie!==null;){var h=ie,v=h.child;if(ie.flags&16){var E=h.deletions;if(E!==null){for(var x=0;x<E.length;x++){var R=E[x];for(ie=R;ie!==null;){var F=ie;switch(F.tag){case 0:case 11:case 15:Zi(8,F,h)}var V=F.child;if(V!==null)V.return=F,ie=V;else for(;ie!==null;){F=ie;var L=F.sibling,H=F.return;if(ow(F),F===R){ie=null;break}if(L!==null){L.return=H,ie=L;break}ie=H}}}var Q=h.alternate;if(Q!==null){var Z=Q.child;if(Z!==null){Q.child=null;do{var Ee=Z.sibling;Z.sibling=null,Z=Ee}while(Z!==null)}}ie=h}}if(h.subtreeFlags&2064&&v!==null)v.return=h,ie=v;else e:for(;ie!==null;){if(h=ie,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Zi(9,h,h.return)}var A=h.sibling;if(A!==null){A.return=h.return,ie=A;break e}ie=h.return}}var C=t.current;for(ie=C;ie!==null;){v=ie;var B=v.child;if(v.subtreeFlags&2064&&B!==null)B.return=v,ie=B;else e:for(v=C;ie!==null;){if(E=ie,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:Ys(9,E)}}catch(ee){Ge(E,E.return,ee)}if(E===v){ie=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,ie=G;break e}ie=E.return}}if(ze=p,tr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Fs,t)}catch{}l=!0}return l}finally{Oe=a,Ut.transition=n}}return!1}function sv(t,n,a){n=ui(a,n),n=Z_(t,n,1),t=Hn(t,n,1),n=ht(),t!==null&&(ya(t,1,n),bt(t,n))}function Ge(t,n,a){if(t.tag===3)sv(t,t,a);else for(;n!==null;){if(n.tag===3){sv(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Kn===null||!Kn.has(l))){t=ui(a,t),t=X_(n,t,1),n=Hn(n,t,1),t=ht(),n!==null&&(ya(n,1,t),bt(n,t));break}}n=n.return}}function J2(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=ht(),t.pingedLanes|=t.suspendedLanes&a,tt===t&&(it&a)===a&&(Xe===4||Xe===3&&(it&130023424)===it&&500>He()-Kd?wr(t,0):Hd|=a),bt(t,n)}function yw(t,n){n===0&&(t.mode&1?(n=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):n=1);var a=ht();t=Sn(t,n),t!==null&&(ya(t,n,a),bt(t,a))}function ex(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),yw(t,a)}function tx(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,p=t.memoizedState;p!==null&&(a=p.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(j(314))}l!==null&&l.delete(n),yw(t,a)}var vw;vw=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||$t.current)wt=!0;else{if(!(t.lanes&a)&&!(n.flags&128))return wt=!1,W2(t,n,a);wt=!!(t.flags&131072)}else wt=!1,Ne&&n.flags&1048576&&x_(n,Os,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;hs(t,n),t=n.pendingProps;var p=ai(n,dt.current);ni(n,a),p=Vd(null,n,l,t,p,a);var h=Wd();return n.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xt(l)?(h=!0,zs(n)):h=!1,n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Pd(n),p.updater=Xs,n.stateNode=p,p._reactInternals=n,Hu(n,l,t,a),n=Zu(null,n,l,!0,h,a)):(n.tag=0,Ne&&h&&zd(n),ft(null,n,p,a),n=n.child),n;case 16:l=n.elementType;e:{switch(hs(t,n),t=n.pendingProps,p=l._init,l=p(l._payload),n.type=l,p=n.tag=rx(l),t=Yt(l,t),p){case 0:n=Qu(null,n,l,t,a);break e;case 1:n=Z0(null,n,l,t,a);break e;case 11:n=K0(null,n,l,t,a);break e;case 14:n=Q0(null,n,l,Yt(l.type,t),a);break e}throw Error(j(306,l,""))}return n;case 0:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Yt(l,p),Qu(t,n,l,p,a);case 1:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Yt(l,p),Z0(t,n,l,p,a);case 3:e:{if(tw(n),t===null)throw Error(j(387));l=n.pendingProps,h=n.memoizedState,p=h.element,I_(t,n),Bs(n,l,null,a);var v=n.memoizedState;if(l=v.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){p=ui(Error(j(423)),n),n=X0(t,n,l,a,p);break e}else if(l!==p){p=ui(Error(j(424)),n),n=X0(t,n,l,a,p);break e}else for(zt=jn(n.stateNode.containerInfo.firstChild),Ct=n,Ne=!0,en=null,a=E_(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(si(),l===p){n=En(t,n,a);break e}ft(t,n,l,a)}n=n.child}return n;case 5:return z_(n),t===null&&Fu(n),l=n.type,p=n.pendingProps,h=t!==null?t.memoizedProps:null,v=p.children,Uu(l,p)?v=null:h!==null&&Uu(l,h)&&(n.flags|=32),ew(t,n),ft(t,n,v,a),n.child;case 6:return t===null&&Fu(n),null;case 13:return nw(t,n,a);case 4:return Md(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=oi(n,null,l,a):ft(t,n,l,a),n.child;case 11:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Yt(l,p),K0(t,n,l,p,a);case 7:return ft(t,n,n.pendingProps,a),n.child;case 8:return ft(t,n,n.pendingProps.children,a),n.child;case 12:return ft(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,p=n.pendingProps,h=n.memoizedProps,v=p.value,Be(Rs,l._currentValue),l._currentValue=v,h!==null)if(rn(h.value,v)){if(h.children===p.children&&!$t.current){n=En(t,n,a);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var E=h.dependencies;if(E!==null){v=h.child;for(var x=E.firstContext;x!==null;){if(x.context===l){if(h.tag===1){x=xn(-1,a&-a),x.tag=2;var R=h.updateQueue;if(R!==null){R=R.shared;var F=R.pending;F===null?x.next=x:(x.next=F.next,F.next=x),R.pending=x}}h.lanes|=a,x=h.alternate,x!==null&&(x.lanes|=a),Gu(h.return,a,n),E.lanes|=a;break}x=x.next}}else if(h.tag===10)v=h.type===n.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(j(341));v.lanes|=a,E=v.alternate,E!==null&&(E.lanes|=a),Gu(v,a,n),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}ft(t,n,p.children,a),n=n.child}return n;case 9:return p=n.type,l=n.pendingProps.children,ni(n,a),p=Lt(p),l=l(p),n.flags|=1,ft(t,n,l,a),n.child;case 14:return l=n.type,p=Yt(l,n.pendingProps),p=Yt(l.type,p),Q0(t,n,l,p,a);case 15:return Y_(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Yt(l,p),hs(t,n),n.tag=1,xt(l)?(t=!0,zs(n)):t=!1,ni(n,a),Q_(n,l,p),Hu(n,l,p,a),Zu(null,n,l,!0,t,a);case 19:return rw(t,n,a);case 22:return J_(t,n,a)}throw Error(j(156,n.tag))};function _w(t,n){return jv(t,n)}function nx(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,n,a,l){return new nx(t,n,a,l)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===vd)return 14}return 2}function Zn(t,n){var a=t.alternate;return a===null?(a=Nt(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ys(t,n,a,l,p,h){var v=2;if(l=t,typeof t=="function")Yd(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case Vr:return $r(a.children,p,h,n);case gd:v=8,p|=8;break;case yu:return t=Nt(12,a,n,p|2),t.elementType=yu,t.lanes=h,t;case vu:return t=Nt(13,a,n,p),t.elementType=vu,t.lanes=h,t;case _u:return t=Nt(19,a,n,p),t.elementType=_u,t.lanes=h,t;case zv:return eo(a,p,h,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tv:v=10;break e;case Iv:v=9;break e;case yd:v=11;break e;case vd:v=14;break e;case Mn:v=16,l=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return n=Nt(v,a,n,p),n.elementType=t,n.type=l,n.lanes=h,n}function $r(t,n,a,l){return t=Nt(7,t,l,n),t.lanes=a,t}function eo(t,n,a,l){return t=Nt(22,t,l,n),t.elementType=zv,t.lanes=a,t.stateNode={isHidden:!1},t}function fu(t,n,a){return t=Nt(6,t,null,n),t.lanes=a,t}function hu(t,n,a){return n=Nt(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function ix(t,n,a,l,p){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=l,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Jd(t,n,a,l,p,h,v,E,x){return t=new ix(t,n,a,E,x),n===1?(n=1,h===!0&&(n|=8)):n=0,h=Nt(3,null,null,n),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(h),t}function ax(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lr,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function ww(t){if(!t)return Yn;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(j(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(t.tag===1){var a=t.type;if(xt(a))return w_(t,a,n)}return n}function $w(t,n,a,l,p,h,v,E,x){return t=Jd(a,l,!0,t,p,h,v,E,x),t.context=ww(null),a=t.current,l=ht(),p=Qn(a),h=xn(l,p),h.callback=n??null,Hn(a,h,p),t.current.lanes=p,ya(t,p,l),bt(t,l),t}function to(t,n,a,l){var p=n.current,h=ht(),v=Qn(p);return a=ww(a),n.context===null?n.context=a:n.pendingContext=a,n=xn(h,v),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Hn(p,n,v),t!==null&&(nn(t,p,v,h),ps(t,p,v)),v}function Ws(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ov(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ep(t,n){ov(t,n),(t=t.alternate)&&ov(t,n)}function sx(){return null}var xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function tp(t){this._internalRoot=t}no.prototype.render=tp.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(j(409));to(t,n,null,null)};no.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Er(function(){to(null,t,null,null)}),n[kn]=null}};function no(t){this._internalRoot=t}no.prototype.unstable_scheduleHydration=function(t){if(t){var n=Jv();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Un.length&&n!==0&&n<Un[a].priority;a++);Un.splice(a,0,t),a===0&&t_(t)}};function np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ro(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lv(){}function ox(t,n,a,l,p){if(p){if(typeof l=="function"){var h=l;l=function(){var R=Ws(v);h.call(R)}}var v=$w(n,l,t,0,null,!1,!1,"",lv);return t._reactRootContainer=v,t[kn]=v.current,oa(t.nodeType===8?t.parentNode:t),Er(),v}for(;p=t.lastChild;)t.removeChild(p);if(typeof l=="function"){var E=l;l=function(){var R=Ws(x);E.call(R)}}var x=Jd(t,0,!1,null,null,!1,!1,"",lv);return t._reactRootContainer=x,t[kn]=x.current,oa(t.nodeType===8?t.parentNode:t),Er(function(){to(n,x,a,l)}),x}function io(t,n,a,l,p){var h=a._reactRootContainer;if(h){var v=h;if(typeof p=="function"){var E=p;p=function(){var x=Ws(v);E.call(x)}}to(n,v,t,p)}else v=ox(a,n,t,p,l);return Ws(v)}Xv=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=Vi(n.pendingLanes);a!==0&&($d(n,a|1),bt(n,He()),!(ze&6)&&(di=He()+500,tr()))}break;case 13:Er(function(){var l=Sn(t,1);if(l!==null){var p=ht();nn(l,t,1,p)}}),ep(t,1)}};xd=function(t){if(t.tag===13){var n=Sn(t,134217728);if(n!==null){var a=ht();nn(n,t,134217728,a)}ep(t,134217728)}};Yv=function(t){if(t.tag===13){var n=Qn(t),a=Sn(t,n);if(a!==null){var l=ht();nn(a,t,n,l)}ep(t,n)}};Jv=function(){return Oe};e_=function(t,n){var a=Oe;try{return Oe=t,n()}finally{Oe=a}};zu=function(t,n,a){switch(n){case"input":if(xu(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var p=Ks(l);if(!p)throw Error(j(90));Ov(l),xu(l,p)}}}break;case"textarea":Av(t,a);break;case"select":n=a.value,n!=null&&Yr(t,!!a.multiple,n,!1)}};Lv=Qd;Vv=Er;var lx={usingClientEntryPoint:!1,Events:[_a,Gr,Ks,Nv,Uv,Qd]},Ni={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Fs=as.inject(ux),pn=as}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;Rt.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(n))throw Error(j(200));return ax(t,n,null,a)};Rt.createRoot=function(t,n){if(!np(t))throw Error(j(299));var a=!1,l="",p=xw;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Jd(t,1,!1,null,null,a,!1,l,p),t[kn]=n.current,oa(t.nodeType===8?t.parentNode:t),new tp(n)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Fv(n),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Er(t)};Rt.hydrate=function(t,n,a){if(!ro(n))throw Error(j(200));return io(null,t,n,!0,a)};Rt.hydrateRoot=function(t,n,a){if(!np(t))throw Error(j(405));var l=a!=null&&a.hydratedSources||null,p=!1,h="",v=xw;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),n=$w(n,null,t,1,a??null,p,!1,h,v),t[kn]=n.current,oa(t),l)for(t=0;t<l.length;t++)a=l[t],p=a._getVersion,p=p(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,p]:n.mutableSourceEagerHydrationData.push(a,p);return new no(n)};Rt.render=function(t,n,a){if(!ro(n))throw Error(j(200));return io(null,t,n,!1,a)};Rt.unmountComponentAtNode=function(t){if(!ro(t))throw Error(j(40));return t._reactRootContainer?(Er(function(){io(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Qd;Rt.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!ro(a))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return io(t,n,a,!1,l)};Rt.version="18.3.1-next-f1338f8080-20240426";function bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bw)}catch(t){console.error(t)}}bw(),bv.exports=Rt;var dx=bv.exports,uv=dx;mu.createRoot=uv.createRoot,mu.hydrateRoot=uv.hydrateRoot;const px="modulepreload",cx=function(t){return"/"+t},dv={},fx=function(n,a,l){if(!a||a.length===0)return n();const p=document.getElementsByTagName("link");return Promise.all(a.map(h=>{if(h=cx(h),h in dv)return;dv[h]=!0;const v=h.endsWith(".css"),E=v?'[rel="stylesheet"]':"";if(!!l)for(let F=p.length-1;F>=0;F--){const V=p[F];if(V.href===h&&(!v||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${E}`))return;const R=document.createElement("link");if(R.rel=v?"stylesheet":px,v||(R.as="script",R.crossOrigin=""),R.href=h,document.head.appendChild(R),v)return new Promise((F,V)=>{R.addEventListener("load",F),R.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${h}`)))})})).then(()=>n()).catch(h=>{const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=h,window.dispatchEvent(v),!v.defaultPrevented)throw h})};function Ur(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var kw={exports:{}};(function(t,n){var a=(()=>{var l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,v=Object.prototype.hasOwnProperty,E=(e=>typeof Ur<"u"?Ur:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof Ur<"u"?Ur:r)[i]}):e)(function(e){if(typeof Ur<"u")return Ur.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),x=(e,r)=>()=>(e&&(r=e(e=0)),r),R=(e,r)=>{for(var i in r)l(e,i,{get:r[i],enumerable:!0})},F=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of h(r))!v.call(e,o)&&o!==i&&l(e,o,{get:()=>r[o],enumerable:!(s=p(r,o))||s.enumerable});return e},V=e=>F(l({},"__esModule",{value:!0}),e),L,H,Q,Z,Ee,A=x(()=>{L=new Map,H=[],Q=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=L.get(e);if(s===void 0)L.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=H.indexOf(e);o!==-1&&H.splice(o,1);for(let u=0;u<H.length;u++)if(L.get(H[u]).priority<=i){H.splice(u,0,e);return}H.push(e)}return}throw new TypeError("not a valid backend")},Z=async e=>{let r=L.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{return i||(r.initPromise=r.backend.init(e)),await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},Ee=async e=>{let r=e.executionProviders||[],i=r.map(f=>typeof f=="string"?f:f.name),s=i.length===0?H:i,o,u=[],d=new Set;for(let f of s){let m=await Z(f);typeof m=="string"?u.push({name:f,err:m}):(o||(o=m),o===m&&d.add(f))}if(!o)throw new Error(`no available backend found. ERR: ${u.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:m}of u)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${m}`);let c=r.filter(f=>d.has(typeof f=="string"?f:f.name));return[o,new Proxy(e,{get:(f,m)=>m==="executionProviders"?c:Reflect.get(f,m)})]}}),C=x(()=>{A()}),B,G=x(()=>{B="1.23.0"}),ee,J,de=x(()=>{G(),ee="warning",J={wasm:{},webgl:{},webgpu:{},versions:{common:B},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ee=e}},get logLevel(){return ee}},Object.defineProperty(J,"logLevel",{enumerable:!0})}),X,Ue=x(()=>{de(),X=J}),xe,yt,nr=x(()=>{xe=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[3]):(o=e.dims[3],u=e.dims[2]);let d=(r==null?void 0:r.format)!==void 0?r.format:"RGB",c=r==null?void 0:r.norm,f,m;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let g=u*o,y=0,_=g,w=g*2,$=-1;d==="RGBA"?(y=0,_=g,w=g*2,$=g*3):d==="RGB"?(y=0,_=g,w=g*2):d==="RBG"&&(y=0,w=g,_=g*2);for(let b=0;b<u;b++)for(let T=0;T<o;T++){let S=(e.data[y++]-m[0])*f[0],k=(e.data[_++]-m[1])*f[1],z=(e.data[w++]-m[2])*f[2],I=$===-1?255:(e.data[$++]-m[3])*f[3];s.fillStyle="rgba("+S+","+k+","+z+","+I+")",s.fillRect(T,b,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},yt=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,u,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[1],d=e.dims[3]):(o=e.dims[3],u=e.dims[2],d=e.dims[1]);let c=r!==void 0&&r.format!==void 0?r.format:"RGB",f=r==null?void 0:r.norm,m,g;f===void 0||f.mean===void 0?m=[255,255,255,255]:typeof f.mean=="number"?m=[f.mean,f.mean,f.mean,f.mean]:(m=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(m[3]=f.mean[3])),f===void 0||f.bias===void 0?g=[0,0,0,0]:typeof f.bias=="number"?g=[f.bias,f.bias,f.bias,f.bias]:(g=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(g[3]=f.bias[3]));let y=u*o;if(r!==void 0&&(r.format!==void 0&&d===4&&r.format!=="RGBA"||d===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let _=4,w=0,$=1,b=2,T=3,S=0,k=y,z=y*2,I=-1;c==="RGBA"?(S=0,k=y,z=y*2,I=y*3):c==="RGB"?(S=0,k=y,z=y*2):c==="RBG"&&(S=0,z=y,k=y*2),s=i.createImageData(o,u);for(let O=0;O<u*o;w+=_,$+=_,b+=_,T+=_,O++)s.data[w]=(e.data[S++]-g[0])*m[0],s.data[$]=(e.data[k++]-g[1])*m[1],s.data[b]=(e.data[z++]-g[2])*m[2],s.data[T]=I===-1?255:(e.data[I++]-g[3])*m[3]}else throw new Error("Can not access image data");return s}}),an,hi,$a,zr,Cr,te,we=x(()=>{ao(),an=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},u,d;typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:u=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:d=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let c=r.format!==void 0?r.format:"RGBA",f=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",m=i*s,g=f==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),y=4,_=0,w=1,$=2,b=3,T=0,S=m,k=m*2,z=-1;c==="RGB"&&(y=3,_=0,w=1,$=2,b=-1),f==="RGBA"?z=m*3:f==="RBG"?(T=0,k=m,S=m*2):f==="BGR"&&(k=0,S=m,T=m*2);for(let I=0;I<m;I++,_+=y,$+=y,w+=y,b+=y)g[T++]=(e[_]+d[0])/u[0],g[S++]=(e[w]+d[1])/u[1],g[k++]=(e[$]+d[2])/u[2],z!==-1&&b!==-1&&(g[z++]=(e[b]+d[3])/u[3]);return f==="RGBA"?new kt("float32",g,[1,4,i,s]):new kt("float32",g,[1,3,i,s])},hi=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",d,c=r??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=g=>typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||g instanceof OffscreenCanvas?g.getContext("2d"):null;if(i){let g=f();g.width=e.width,g.height=e.height;let y=m(g);if(y!=null){let _=e.height,w=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&(_=r.resizedHeight,w=r.resizedWidth),r!==void 0){if(c=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=_,c.width=w}else c.tensorFormat="RGBA",c.height=_,c.width=w;y.drawImage(e,0,0),d=y.getImageData(0,0,w,_).data}else throw new Error("Can not access image data")}else if(s){let g,y;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(g=r.resizedHeight,y=r.resizedWidth):(g=e.height,y=e.width),r!==void 0&&(c=r),c.format="RGBA",c.height=g,c.width=y,r!==void 0){let _=f();_.width=y,_.height=g;let w=m(_);if(w!=null)w.putImageData(e,0,0),d=w.getImageData(0,0,y,g).data;else throw new Error("Can not access image data")}else d=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let g=f();g.width=e.width,g.height=e.height;let y=m(g);if(y!=null){let _=e.height,w=e.width;return y.drawImage(e,0,0,w,_),d=y.getImageData(0,0,w,_).data,c.height=_,c.width=w,an(d,c)}else throw new Error("Can not access image data")}else{if(u)return new Promise((g,y)=>{let _=f(),w=m(_);if(!e||!w)return y();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{_.width=$.width,_.height=$.height,w.drawImage($,0,0,_.width,_.height);let b=w.getImageData(0,0,_.width,_.height);c.height=_.height,c.width=_.width,g(an(b.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return an(d,c);throw new Error("Input data provided is not supported - aborted tensor creation")},$a=(e,r)=>{let{width:i,height:s,download:o,dispose:u}=r,d=[1,s,i,4];return new kt({location:"texture",type:"float32",texture:e,dims:d,download:o,dispose:u})},zr=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new kt({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:u})},Cr=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new kt({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:u})},te=(e,r,i)=>new kt({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),ge,Ae,Fe,rr,fn=x(()=>{ge=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ae=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Fe=!1,rr=()=>{if(!Fe){Fe=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,s=typeof i<"u"&&i.from;e&&(ge.set("int64",BigInt64Array),Ae.set(BigInt64Array,"int64")),r&&(ge.set("uint64",BigUint64Array),Ae.set(BigUint64Array,"uint64")),s?(ge.set("float16",i),Ae.set(i,"float16")):ge.set("float16",Uint16Array)}}}),Or,sn,Rr=x(()=>{ao(),Or=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},sn=(e,r)=>{switch(e.location){case"cpu":return new kt(e.type,e.data,r);case"cpu-pinned":return new kt({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new kt({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new kt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new kt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),kt,ao=x(()=>{nr(),we(),fn(),Rr(),kt=class{constructor(e,r,i){rr();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let d=ge.get(s);if(!d)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,c;if(typeof e=="string")if(s=e,c=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");d=r}else{let f=ge.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?d=f.from(r,BigInt):d=f.from(r)}else if(r instanceof f)d=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")d=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&r instanceof Uint16Array&&f!==Uint16Array)d=new globalThis.Float16Array(r.buffer,r.byteOffset,r.length);else throw new TypeError(`A ${s} tensor's data must be type of ${f}`)}else if(c=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")s="string",d=e;else if(f==="boolean")s="bool",d=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",d=Uint8Array.from(e);else{let f=Ae.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=f,d=e}if(c===void 0)c=[d.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");o=c,this.cpuData=d,this.dataLocation="cpu"}let u=Or(o);if(this.cpuData&&u!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=u}static async fromImage(e,r){return hi(e,r)}static fromTexture(e,r){return $a(e,r)}static fromGpuBuffer(e,r){return zr(e,r)}static fromMLTensor(e,r){return Cr(e,r)}static fromPinnedBuffer(e,r,i){return te(e,r,i)}toDataURL(e){return xe(this,e)}toImageData(e){return yt(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return sn(this,e)}}}),Wt,rp=x(()=>{ao(),Wt=kt}),mi,so,qt,Bt,In,zn,ip=x(()=>{de(),mi=(e,r)=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeStamp(`${e}::ORT::${r}`)},so=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let u=0;u<i.length;u++){if(s&&!i[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[u].trim().split(" ")[1]}`;r&&(d+=`::${r}`),mi("CPU",d);return}i[u].includes("TRACE_FUNC")&&(s=!0)}},qt=e=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||so("BEGIN",e)},Bt=e=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||so("END",e)},In=e=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.time(`ORT::${e}`)},zn=e=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeEnd(`ORT::${e}`)}}),ap,Tw=x(()=>{A(),rp(),ip(),ap=class Sw{constructor(r){this.handler=r}async run(r,i,s){qt(),In("InferenceSession.run");let o={},u={};if(typeof r!="object"||r===null||r instanceof Wt||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Wt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let m of i){if(typeof m!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(m)===-1)throw new RangeError(`'fetches' contains invalid output name: ${m}.`);o[m]=null}if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let m=!1,g=Object.getOwnPropertyNames(i);for(let y of this.outputNames)if(g.indexOf(y)!==-1){let _=i[y];(_===null||_ instanceof Wt)&&(m=!0,d=!1,o[y]=_)}if(m){if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else u=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let m of this.inputNames)if(typeof r[m]>"u")throw new Error(`input '${m}' is missing in 'feeds'.`);if(d)for(let m of this.outputNames)o[m]=null;let c=await this.handler.run(r,o,u),f={};for(let m in c)if(Object.hasOwnProperty.call(c,m)){let g=c[m];g instanceof Wt?f[m]=g:f[m]=new Wt(g.type,g.data,g.dims)}return zn("InferenceSession.run"),Bt(),f}async release(){return this.handler.dispose()}static async create(r,i,s,o){qt(),In("InferenceSession.create");let u,d={};if(typeof r=="string"){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let g=r,y=0,_=r.byteLength;if(typeof i=="object"&&i!==null)d=i;else if(typeof i=="number"){if(y=i,!Number.isSafeInteger(y))throw new RangeError("'byteOffset' must be an integer.");if(y<0||y>=g.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${g.byteLength}).`);if(_=r.byteLength-y,typeof s=="number"){if(_=s,!Number.isSafeInteger(_))throw new RangeError("'byteLength' must be an integer.");if(_<=0||y+_>g.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${g.byteLength-y}].`);if(typeof o=="object"&&o!==null)d=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(g,y,_)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await Ee(d),m=await c.createInferenceSessionHandler(u,f);return zn("InferenceSession.create"),Bt(),new Sw(m)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),oo,Iw=x(()=>{Tw(),oo=ap}),zw=x(()=>{}),Cw=x(()=>{}),Ow=x(()=>{}),Rw=x(()=>{}),sp={};R(sp,{InferenceSession:()=>oo,TRACE:()=>mi,TRACE_EVENT_BEGIN:()=>In,TRACE_EVENT_END:()=>zn,TRACE_FUNC_BEGIN:()=>qt,TRACE_FUNC_END:()=>Bt,Tensor:()=>Wt,env:()=>X,registerBackend:()=>Q});var Dt=x(()=>{C(),Ue(),Iw(),rp(),zw(),Cw(),ip(),Ow(),Rw()}),lo=x(()=>{}),op={};R(op,{default:()=>lp});var uo,po,lp,Aw=x(()=>{var e;Uy(),ir(),go(),uo="ort-wasm-proxy-worker",po=((e=globalThis.self)==null?void 0:e.name)===uo,po&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":_o(s.wasm).then(()=>{Cl(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:u}=s;Ol(u,o).then(()=>{postMessage({type:i})},d=>{postMessage({type:i,err:d})});break}case"copy-from":{let{buffer:o}=s,u=La(o);postMessage({type:i,out:u});break}case"create":{let{model:o,options:u}=s;Al(o,u).then(d=>{postMessage({type:i,out:d})},d=>{postMessage({type:i,err:d})});break}case"release":Bl(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:u,inputs:d,outputIndices:c,options:f}=s;Pl(o,u,d,c,new Array(c.length).fill(null),f).then(m=>{m.some(g=>g[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:m},Nl([...d,...m]))},m=>{postMessage({type:i,err:m})});break}case"end-profiling":Ml(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),lp=po?null:r=>new Worker(r??St,{type:"classic",name:uo})}),up,dp,St,co,xa,pp,cp,fo,fp,ho,hp,mo,mp,go=x(()=>{lo(),up=typeof location>"u"?void 0:location.origin,dp=()=>{var e,r;return typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(r=self.location)==null?void 0:r.href:void 0},St=dp(),co=()=>{if(St&&!St.startsWith("blob:"))return St.substring(0,St.lastIndexOf("/")+1)},xa=(e,r)=>{try{let i=r??St;return(i?new URL(e,i):new URL(e)).origin===up}catch{return!1}},pp=(e,r)=>{let i=r??St;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},cp=(e,r)=>`${r??"./"}${e}`,fo=async e=>{let r=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},fp=async e=>(await fx(()=>import(e),[])).default,ho=(Aw(),V(op)).default,hp=async()=>{if(!St)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xa(St))return[void 0,ho()];let e=await fo(St);return[e,ho(e)]},mo=void 0,mp=async(e,r,i,s)=>{let o=mo&&!(e||r);if(o)if(St)o=xa(St);else if(s&&!i)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,mo];{let u="ort-wasm-simd-threaded.jsep.mjs",d=e??pp(u,r),c=i&&d&&!xa(d,r),f=c?await fo(d):d??cp(u,r);return[c?f:void 0,await fp(f)]}}}),yo,ba,gi,vo,gp,yp,vp,_o,Re,ir=x(()=>{go(),ba=!1,gi=!1,vo=!1,gp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},yp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},vp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},_o=async e=>{if(ba)return Promise.resolve();if(gi)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(vo)throw new Error("previous call to 'initializeWebAssembly()' failed.");gi=!0;let r=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!vp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!yp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let s=gp();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,u=typeof o=="string"?o:void 0,d=o==null?void 0:o.mjs,c=(d==null?void 0:d.href)??d,f=o==null?void 0:o.wasm,m=(f==null?void 0:f.href)??f,g=e.wasmBinary,[y,_]=await mp(c,u,i>1,!!g||!!m),w=!1,$=[];if(r>0&&$.push(new Promise(b=>{setTimeout(()=>{w=!0,b()},r)})),$.push(new Promise((b,T)=>{let S={numThreads:i};if(g)S.wasmBinary=g;else if(m||u)S.locateFile=k=>m??u+k;else if(c&&c.indexOf("blob:")!==0)S.locateFile=k=>new URL(k,c).href;else if(y){let k=co();k&&(S.locateFile=z=>k+z)}_(S).then(k=>{gi=!1,ba=!0,yo=k,b(),y&&URL.revokeObjectURL(y)},k=>{gi=!1,vo=!0,T(k)})})),await Promise.race($),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},Re=()=>{if(ba&&yo)return yo;throw new Error("WebAssembly is not initialized yet.")}}),Ft,ka,Ce,wo=x(()=>{ir(),Ft=(e,r)=>{let i=Re(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},ka=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,u])=>{let d=r?r+o:o;if(typeof u=="object")ka(u,d+".",i,s);else if(typeof u=="string"||typeof u=="number")s(d,u.toString());else if(typeof u=="boolean")s(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Ce=e=>{let r=Re(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetLastError(o,o+s);let u=Number(r.getValue(o,s===4?"i32":"i64")),d=r.getValue(o+s,"*"),c=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${c}`)}finally{r.stackRestore(i)}}}),_p,Bw=x(()=>{ir(),wo(),_p=e=>{let r=Re(),i=0,s=[],o=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)o.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)o.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(o.terminate=!1);let u=0;return(e==null?void 0:e.tag)!==void 0&&(u=Ft(e.tag,s)),i=r._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,u),i===0&&Ce("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ka(e.extra,"",new WeakSet,(d,c)=>{let f=Ft(d,s),m=Ft(c,s);r._OrtAddRunConfigEntry(i,f,m)!==0&&Ce(`Can't set a run config entry: ${d} - ${c}.`)}),[i,s]}catch(u){throw i!==0&&r._OrtReleaseRunOptions(i),s.forEach(d=>r._free(d)),u}}}),wp,$p,xp,yi,bp,kp,Dw=x(()=>{ir(),wo(),wp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},$p=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},yi=(e,r,i,s)=>{let o=Ft(r,s),u=Ft(i,s);Re()._OrtAddSessionConfigEntry(e,o,u)!==0&&Ce(`Can't set a session config entry: ${r} - ${i}.`)},bp=async(e,r,i)=>{for(let s of r){let o=typeof s=="string"?s:s.name,u=[];switch(o){case"webnn":if(o="WEBNN",typeof s!="string"){let g=s==null?void 0:s.deviceType;g&&yi(e,"deviceType",g,i)}break;case"webgpu":if(o="JS",typeof s!="string"){let g=s;if(g!=null&&g.preferredLayout){if(g.preferredLayout!=="NCHW"&&g.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);yi(e,"preferredLayout",g.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let d=Ft(o,i),c=u.length,f=0,m=0;if(c>0){f=Re()._malloc(c*Re().PTR_SIZE),i.push(f),m=Re()._malloc(c*Re().PTR_SIZE),i.push(m);for(let g=0;g<c;g++)Re().setValue(f+g*Re().PTR_SIZE,u[g][0],"*"),Re().setValue(m+g*Re().PTR_SIZE,u[g][1],"*")}await Re()._OrtAppendExecutionProvider(e,d,f,m,c)!==0&&Ce(`Can't append execution provider: ${o}.`)}},kp=async e=>{let r=Re(),i=0,s=[],o=e||{};xp(o);try{let u=wp(o.graphOptimizationLevel??"all"),d=$p(o.executionMode??"sequential"),c=typeof o.logId=="string"?Ft(o.logId,s):0,f=o.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let m=o.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let g=typeof o.optimizedModelFilePath=="string"?Ft(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(u,!!o.enableCpuMemArena,!!o.enableMemPattern,d,!!o.enableProfiling,0,c,f,m,g),i===0&&Ce("Can't create session options."),o.executionProviders&&await bp(i,o.executionProviders,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);yi(i,"enableGraphCapture",o.enableGraphCapture.toString(),s)}if(o.freeDimensionOverrides)for(let[y,_]of Object.entries(o.freeDimensionOverrides)){if(typeof y!="string")throw new Error(`free dimension override name must be a string: ${y}`);if(typeof _!="number"||!Number.isInteger(_)||_<0)throw new Error(`free dimension override value must be a non-negative integer: ${_}`);let w=Ft(y,s);r._OrtAddFreeDimensionOverride(i,w,_)!==0&&Ce(`Can't set a free dimension override: ${y} - ${_}.`)}return o.extra!==void 0&&ka(o.extra,"",new WeakSet,(y,_)=>{yi(i,y,_,s)}),[i,s]}catch(u){throw i!==0&&r._OrtReleaseSessionOptions(i)!==0&&Ce("Can't release session options."),s.forEach(d=>r._free(d)),u}}}),ar,hn,sr,Sa,Ea,$o,xo,bo,fe=x(()=>{ar=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},hn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},sr=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,u)=>o*u,1);return i>0?Math.ceil(s*i):void 0},Sa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ea=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},$o=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",xo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",bo=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ko,Sp=x(()=>{lo(),ko=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),u;try{u=new ArrayBuffer(s)}catch(c){if(c instanceof RangeError){let f=Math.ceil(s/65536);u=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let d=0;for(;;){let{done:c,value:f}=await o.read();if(c)break;let m=f.byteLength;new Uint8Array(u,d,m).set(f),d+=m}return new Uint8Array(u,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ep,Tp,Ip,zp,So,Cp,be,mn=x(()=>{fe(),Ep=["V","I","W","E","F"],Tp=(e,r)=>{console.log(`[${Ep[e]},${new Date().toISOString()}]${r}`)},So=(e,r)=>{Ip=e,zp=r},Cp=(e,r)=>{let i=Ea(e),s=Ea(Ip);i>=s&&Tp(i,typeof r=="function"?r():r)},be=(...e)=>{zp&&Cp(...e)}}),Op,Ar,M,Ta,Rp,Ap,Bp,me=x(()=>{Op=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},Ar=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let u=Math.max(e.length,r.length),d=new Array(u);if(i){if(s<2||o<2)return;let c=Op.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(c===void 0)return;[d[u-2],d[u-1]]=c}for(let c=i?3:1;c<=u;c++){let f=s-c<0?1:e[s-c],m=o-c<0?1:r[o-c];if(f!==m&&f>1&&m>1)return;let g=Math.max(f,m);if(f&&m)d[u-c]=Math.max(f,m);else{if(g>1)return;d[u-c]=0}}return d}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},M=class vs{static size(r){return vs.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),u=s-1;for(;u>=0;){if(r[u]%i===0){o[u]=r[u]/i;break}if(i%r[u]!==0)throw new Error("cannot convert shape");o[u]=1,i/=r[u],u--}for(u--;u>=0;u--)o[u]=r[u];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return vs.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return vs.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let u=i;u<s;u++){if(r[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(r[u])}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,u)=>o+i[u]+i[u+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Ta=class qi{static adjustPoolAttributes(r,i,s,o,u,d){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let c=0;c<i.length-2;c++)c>=s.length?s.push(i[c+2]):s[c]=i[c+2];for(let c=0;c<s.length;c++)if(c<o.length){if(o[c]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let c=0;c<s.length;c++)if(c<u.length){if(u[c]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let c=0;c<s.length*2;c++)if(c<d.length){if(d[c]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let c=0;c<s.length;c++){if(s[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[c]>=s[c]||d[c+s.length]>=s[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,u,d,c){if(c){if(u.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<r.length-2;f++)qi.adjustPadAndReturnShape(r[f+(d?1:2)],i[f],s[f],o[f],u,f,f+r.length-2,c)}}static computePoolOutputShape(r,i,s,o,u,d,c){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let f=[i[0],i[1]];return qi.computeShapeHelper(r,i,f,s,o,u,d,c),f}static computeConvOutputShape(r,i,s,o,u,d,c){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[r[0],i[0]];return qi.computeShapeHelper(!1,r,f,s,o,u,d,c),f}static computeShapeHelper(r,i,s,o,u,d,c,f){if(r)for(let m=0;m<i.length-2;m++)s.push(1);else for(let m=0;m<i.length-2;m++)s.push(qi.adjustPadAndReturnShape(i[m+2],o[m],u[m],d[m],c,m,m+i.length-2,f))}static adjustPadAndReturnShape(r,i,s,o,u,d,c,f){let m=s*(o-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return u[d]=0,u[c]=0,Math.floor((r-m)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let g=((r+i-1)/i-1)*i+o-r;return u[d]=Math.floor(f==="SAME_LOWER"?(g+1)/2:g/2),u[c]=g-u[d],Math.floor((r+g-o)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((r+u[d]+u[c]-m)/i+1)}},Rp=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let u,d,c;r?(u=e[1],d=e[0]):(u=e[0],d=e[1]);let f=-1;if(s?(c=i[0],f=1):(c=i[1],f=0),i[f]!==d)throw new Error("dimension mismatch");if(u<=0||c<=0||d<=0)throw new Error("invalid shape specified");if(o&&!Ar.isValidBroadcast(o,[u,c]))throw new Error("gemm: invalid bias shape for broadcast");return[u,c,d]}},Ap=-34028234663852886e22,Bp=34028234663852886e22}),Eo,Dp=x(()=>{fe(),Eo=(e,r)=>new(Sa(r))(e)}),To,Io,zo,Pp,Co,Mp,Oo,Ro,Ao,Np,Up,Pw=x(()=>{fe(),mn(),To=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Io=(e,r)=>{if(r==="int32")return e;let i=To.get(r);if(!i)throw new Error(`WebNN backend does not support data type: ${r}`);let s=i/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);let o=e.byteLength/s,u=new(Sa(r))(e.buffer,e.byteOffset,o);switch(r){case"int64":case"uint64":{let d=new Int32Array(o);for(let c=0;c<o;c++){let f=u[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[c]=Number(f)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(r==="uint32"&&u.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${r} to 'int32'`)}},zo=(e,r)=>{if(r==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,i);switch(r){case"int64":{let o=BigInt64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"uint64":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let o=BigUint64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"int8":{if(s.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let o=Int8Array.from(s,Number);return new Uint8Array(o.buffer)}case"uint8":{if(s.some(o=>o<0||o>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let o=Uint32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${r}`)}},Pp=1,Co=()=>Pp++,Mp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Oo=(e,r)=>{let i=To.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return r.length>0?Math.ceil(r.reduce((s,o)=>s*o)*i/8):0},Ro=class{constructor(e){this.isDataConverted=!1;let{sessionId:r,context:i,tensor:s,dataType:o,shape:u,fallbackDataType:d}=e;this.sessionId=r,this.mlContext=i,this.mlTensor=s,this.dataType=o,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Oo(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let r=await this.mlContext.readTensor(this.mlTensor),i=zo(new Uint8Array(r),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return i.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,r,i){return this.mlContext===e&&this.dataType===r&&this.tensorShape.length===i.length&&this.tensorShape.every((s,o)=>s===i[o])}setIsDataConverted(e){this.isDataConverted=e}},Ao=class{constructor(e,r){this.tensorManager=e,this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,r,i,s){let o=this.tensorManager.getMLContext(e),u;if(!o.opSupportLimits().input.dataTypes.includes(r)){if(u=Mp.get(r),!u||!o.opSupportLimits().input.dataTypes.includes(u))throw new Error(`WebNN backend does not support data type: ${r}`);be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${r} to ${u}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(o,r,i))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Oo(r,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let d=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,r,i,d,!0,!0,u),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let r=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")r=Io(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(r);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(r):this.activeUpload=new Uint8Array(r)}async download(e){var r,i;if(this.activeUpload){let s=(r=this.wrapper)!=null&&r.isDataConverted?zo(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(s):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s);return}else return s.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Np=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let r=this.backend.getMLContext(e);if(!r)throw new Error("MLContext not found for session.");return r}reserveTensorId(){let e=Co();return this.tensorTrackersById.set(e,new Ao(this)),e}releaseTensorId(e){let r=this.tensorTrackersById.get(e);r&&(this.tensorTrackersById.delete(e),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(e,r,i,s,o){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${i}, shape: ${s}, copyOld: ${o}}`);let u=this.tensorTrackersById.get(r);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(e,i,s,o)}upload(e,r){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(r)}async download(e,r){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(r)}releaseTensorsForSession(e){for(let r of this.freeTensors)r.sessionId===e&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==e)}registerTensor(e,r,i,s){let o=this.getMLContext(e),u=Co(),d=new Ro({sessionId:e,context:o,tensor:r,dataType:i,shape:s});return this.tensorTrackersById.set(u,new Ao(this,d)),this.externalTensors.add(d),u}async getCachedTensor(e,r,i,s,o,u,d){let c=this.getMLContext(e);for(let[m,g]of this.freeTensors.entries())if(g.canReuseTensor(c,r,i)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}`);let y=this.freeTensors.splice(m,1)[0];return y.sessionId=e,y}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}}`);let f=await c.createTensor({dataType:d??r,shape:i,dimensions:i,usage:s,writable:o,readable:u});return new Ro({sessionId:e,context:c,tensor:f,dataType:r,shape:i,fallbackDataType:d})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Up=(...e)=>new Np(...e)}),vi,Lp,Vp,Mw=x(()=>{fe(),ir(),Dp(),Pw(),mn(),vi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Lp=(e,r)=>{if(e===r)return!0;if(e===void 0||r===void 0)return!1;let i=Object.keys(e).sort(),s=Object.keys(r).sort();return i.length===s.length&&i.every((o,u)=>o===s[u]&&e[o]===r[o])},Vp=class{constructor(e){this.tensorManager=Up(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,So(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let r=this.temporarySessionTensorIds.get(e);if(r){for(let i of r)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){let i=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let r=this.mlContextCache.findIndex(i=>Lp(i.options,e));if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let r=this.mlContextBySessionId.get(e);if(!r)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(r);let s=this.mlContextCache.findIndex(o=>o.mlContext===r);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s,o){let u=vi.get(i);if(!u)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,r,u,s,o)}async createTemporaryTensor(e,r,i){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${i}}`);let s=vi.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,o,s,i,!1);let u=this.temporarySessionTensorIds.get(e);return u?u.push(o):this.temporarySessionTensorIds.set(e,[o]),o}uploadTensor(e,r){if(!Re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return Eo(i,r)}}registerMLTensor(e,r,i,s){let o=vi.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);let u=this.tensorManager.registerTensor(e,r,o,s);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${o}, dimensions: ${s}} -> {tensorId: ${u}}`),u}registerMLConstant(e,r,i,s,o,u,d=!1){if(!u)throw new Error("External mounted files are not available.");let c=e;e.startsWith("./")&&(c=e.substring(2));let f=u.get(c);if(!f)throw new Error(`File with name ${c} not found in preloaded files.`);if(r+i>f.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let m=f.slice(r,r+i).buffer,g;switch(o.dataType){case"float32":g=new Float32Array(m);break;case"float16":g=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(m):new Uint16Array(m);break;case"int32":g=new Int32Array(m);break;case"uint32":g=new Uint32Array(m);break;case"int64":if(d){let y=Io(new Uint8Array(m),"int64");g=new Int32Array(y.buffer),o.dataType="int32"}else g=new BigInt64Array(m);break;case"uint64":g=new BigUint64Array(m);break;case"int8":g=new Int8Array(m);break;case"int4":case"uint4":case"uint8":g=new Uint8Array(m);break;default:throw new Error(`Unsupported data type: ${o.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${o.dataType}, shape: ${o.shape}}} ${d?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),s.constant(o,g)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,r){let i=this.sessionGraphInputs.get(e);return i?i.includes(r):!1}isGraphOutput(e,r){let i=this.sessionGraphOutputs.get(e);return i?i.includes(r):!1}isGraphInputOutputTypeSupported(e,r,i=!0){let s=this.mlContextBySessionId.get(e),o=vi.get(ar(r));return typeof o>"u"?!1:i?!!(s!=null&&s.opSupportLimits().input.dataTypes.includes(o)):!!(s!=null&&s.opSupportLimits().output.dataTypes.includes(o))}flush(){}}}),Bo=x(()=>{}),Do,Ia,za,Wp,qp,Po,Mo,Fp,Gp,Nw=x(()=>{mn(),Bo(),Do=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ia=[],za=e=>Math.ceil(Number(e)/16)*16,Wp=e=>{for(let r=0;r<Ia.length;r++){let i=Ia[r];if(e<=i)return i}return Math.ceil(e/16)*16},qp=1,Po=()=>qp++,Mo=async(e,r,i,s)=>{let o=za(i),u=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=e.getCommandEncoder();e.endComputePass(),d.copyBufferToBuffer(r,0,u,0,o),e.flush(),await u.mapAsync(GPUMapMode.READ);let c=u.getMappedRange();if(s){let f=s();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{u.destroy()}},Fp=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Do)Ia.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,u=za(o),d=this.storageCache.get(e);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==o)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${o}`);let c=this.backend.device.createBuffer({mappedAtCreation:!0,size:u,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),f=c.getMappedRange();new Uint8Array(f).set(new Uint8Array(i,s,o)),c.unmap();let m=this.backend.device.createCommandEncoder();m.copyBufferToBuffer(c,0,d.gpuData.buffer,0,u),this.backend.device.queue.submit([m.finish()]),c.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=za(i.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Po();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Wp(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||u){let c=(o?this.freeBuffers:this.freeUniformBuffers).get(i);c?c.length>0?s=c.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let d={id:Po(),type:0,buffer:s};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${d.id}`),d}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(r);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,r){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Mo(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Do.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gp=(...e)=>new Fp(...e)}),jp,Ie,Le=x(()=>{jp=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ie=e=>new jp(e)}),Br,Ca,Qe,st,se,Me,No,Dr,Cn,ae,_i,U,ne,Hp,Uo,Kp,Qp,ye=x(()=>{fe(),me(),Br=64,Ca=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,r=1)=>{let i=Ca(e,r);return typeof i=="string"?i:i[0]},st=(e,r=1)=>{let i=Ca(e,r);return typeof i=="string"?i:i[1]},se=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:M.computeStrides(i)})}),r},Me=e=>e%4===0?4:e%2===0?2:1,No=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,Dr=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,Cn=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,_i=(e,r,i,s,o)=>{let u=typeof i=="number",d=u?i:i.length,c=[...new Array(d).keys()],f=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=Ca(r,o),g=typeof m=="string"?m:m[1],y=typeof m=="string"?m:m[0],_={indices:f,value:g,storage:y,tensor:r},w=q=>typeof q=="string"?q:`${q}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=u?"uniforms.":"",T=`${b}${e}_shape`,S=`${b}${e}_strides`,k="";for(let q=0;q<d-1;q++)k+=`
    let dim${q} = current / ${ae(S,q,d)};
    let rest${q} = current % ${ae(S,q,d)};
    indices[${q}] = dim${q};
    current = rest${q};
    `;k+=`indices[${d-1}] = current;`;let z=d<2?"":`
  fn o2i_${e}(offset: u32) -> ${_.indices} {
    var indices: ${_.indices};
    var current = offset;
    ${k}
    return indices;
  }`,I=q=>($.offsetToIndices=!0,d<2?q:`o2i_${e}(${q})`),O=[];if(d>=2)for(let q=d-1;q>=0;q--)O.push(`${ae(S,q,d)} * (indices[${q}])`);let P=d<2?"":`
  fn i2o_${e}(indices: ${_.indices}) -> u32 {
    return ${O.join("+")};
  }`,D=q=>($.indicesToOffset=!0,d<2?q:`i2o_${e}(${q})`),N=(...q)=>d===0?"0u":`${_.indices}(${q.map(w).join(",")})`,W=(q,Y)=>d<2?`${q}`:`${ae(q,Y,d)}`,K=(q,Y,ue)=>d<2?`${q}=${ue};`:`${ae(q,Y,d)}=${ue};`,ce={},re=(q,Y)=>{$.broadcastedIndicesToOffset=!0;let ue=`${Y.name}broadcastedIndicesTo${e}Offset`;if(ue in ce)return`${ue}(${q})`;let $e=[];for(let Tt=d-1;Tt>=0;Tt--){let Mr=Y.indicesGet("outputIndices",Tt+Y.rank-d);$e.push(`${W(S,Tt)} * (${Mr} % ${W(T,Tt)})`)}return ce[ue]=`fn ${ue}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${$e.length>0?$e.join("+"):"0u"};
           }`,`${ue}(${q})`},pe=(q,Y)=>(()=>{if(_.storage===_.value)return`${e}[${q}]=${Y};`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`${e}[${q}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`${e}[${q}]=vec2<u32>(u32(${Y}), 0u);`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`${e}[${q}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),ke=q=>(()=>{if(_.storage===_.value)return`${e}[${q}]`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`i32(${e}[${q}].x)`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`u32(${e}[${q}].x)`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${q}] & 0xFFu), bool(${e}[${q}] & 0xFF00u), bool(${e}[${q}] & 0xFF0000u), bool(${e}[${q}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),ve=d<2?"":`
  fn get_${e}ByIndices(indices: ${_.indices}) -> ${g} {
    return ${ke(`i2o_${e}(indices)`)};
  }`,le=d<2?"":(()=>{let q=c.map(ue=>`d${ue}: u32`).join(", "),Y=c.map(ue=>`d${ue}`).join(", ");return`
  fn get_${e}(${q}) -> ${g} {
    return get_${e}ByIndices(${N(Y)});
  }`})(),_e=(...q)=>{if(q.length!==d)throw new Error(`indices length must be ${d}`);let Y=q.map(w).join(",");return d===0?ke("0u"):d===1?ke(Y[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${Y})`)},oe=q=>d<2?ke(q):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${q})`),he=d<2?"":`
  fn set_${e}ByIndices(indices: ${_.indices}, value: ${g}) {
    ${pe(`i2o_${e}(indices)`,"value")}
  }`,nt=d<2?"":(()=>{let q=c.map(ue=>`d${ue}: u32`).join(", "),Y=c.map(ue=>`d${ue}`).join(", ");return`
  fn set_${e}(${q}, value: ${g}) {
    set_${e}ByIndices(${N(Y)}, value);
  }`})();return{impl:()=>{let q=[],Y=!1;return $.offsetToIndices&&(q.push(z),Y=!0),$.indicesToOffset&&(q.push(P),Y=!0),$.broadcastedIndicesToOffset&&(Object.values(ce).forEach(ue=>q.push(ue)),Y=!0),$.set&&(q.push(nt),Y=!0),$.setByIndices&&(q.push(he),Y=!0),$.get&&(q.push(le),Y=!0),$.getByIndices&&(q.push(ve),Y=!0),!u&&Y&&q.unshift(`const ${T} = ${_.indices}(${i.join(",")});`,`const ${S} = ${_.indices}(${M.computeStrides(i).join(",")});`),q.join(`
`)},type:_,offsetToIndices:I,indicesToOffset:D,broadcastedIndicesToOffset:re,indices:N,indicesGet:W,indicesSet:K,set:(...q)=>{if(q.length!==d+1)throw new Error(`indices length must be ${d}`);let Y=q[d];if(typeof Y!="string")throw new Error("value must be string");let ue=q.slice(0,d).map(w).join(",");return d===0?pe("0u",Y):d===1?pe(ue[0],Y):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${ue}, ${Y})`)},setByOffset:pe,setByIndices:(q,Y)=>d<2?pe(q,Y):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${q}, ${Y});`),get:_e,getByOffset:ke,getByIndices:oe,usage:s,name:e,strides:S,shape:T,rank:d}},U=(e,r,i,s=1)=>_i(e,r,i,"input",s),ne=(e,r,i,s=1)=>_i(e,r,i,"output",s),Hp=(e,r,i)=>_i(e,r,i,"atomicOutput",1),Uo=(e,r,i,s=1)=>_i(e,r,i,"internal",s),Kp=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Br){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,d=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*s}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${s})
  fn main(${u}) {
    ${d}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,r){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(r=>this.declareVariable(r,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(r=>this.registerInternalVariable(r)),this}registerUniform(e,r,i=1){return this.uniforms.push({name:e,type:r,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:r,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${r}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let o=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${r}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},Qp=(e,r)=>new Kp(e,r)}),Zp,Lo,Xp,Yp,Jp,ec,Et,tc,nc,On=x(()=>{fe(),me(),Le(),ye(),Zp=(e,r)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(r.length!==0&&r.length!==e[0].dims.length)throw new Error(`perm size ${r.length} does not match input rank ${e[0].dims.length}`)},Lo=(e,r)=>r.length!==0?r:[...new Array(e).keys()].reverse(),Xp=(e,r)=>M.sortBasedOnPerm(e,Lo(e.length,r)),Yp=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let u=0;u<r;++u)o+=`a[${e[u]}]=i[${u}];`;return o+="return a;}"},Jp=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},ec=(e,r)=>{let i=0;for(let s=0;s<e.length;++s)if(r[e[s]]!==1){if(e[s]<i)return!1;i=e[s]}return!0},Et=(e,r)=>{let i=e.dataType,s=e.dims.length,o=Lo(s,r),u=Xp(e.dims,o),d=e.dims,c=u,f=s<2||ec(o,e.dims),m;if(f)return m=$=>{let b=U("input",i,d,4),T=ne("output",i,c,4);return`
  ${$.registerUniform("output_size","u32").declareVariables(b,T)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=M.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64/4)},programUniforms:[{type:12,data:Math.ceil($/4)}]}},getShaderSource:m};let{newShape:g,newPerm:y}=Jp(e.dims,o),_=M.areEqual(y,[2,3,1]),w=M.areEqual(y,[3,1,2]);if(g.length===2||_||w){d=_?[g[0],g[1]*g[2]]:w?[g[0]*g[1],g[2]]:g,c=[d[1],d[0]];let $=16;return m=b=>{let T=U("a",i,d.length),S=ne("output",i,c.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(T,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${$+1}>, ${$}>;
  ${b.mainStart([$,$,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${$} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${$}u + local_id.x;
    let input_row = workgroup_id_x * ${$}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${$}u + local_id.x;
    let output_row = workgroup_id_y * ${$}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=M.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c[1]/$),y:Math.ceil(c[0]/$)},programUniforms:[{type:12,data:b},...se(d,c)]}},getShaderSource:m}}return m=$=>{let b=U("a",i,d.length),T=ne("output",i,c.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(b,T)}

  ${Yp(o,s,b,T)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let $=M.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...se(d,c)]}},getShaderSource:m}},tc=(e,r)=>{Zp(e.inputs,r.perm),e.compute(Et(e.inputs[0],r.perm))},nc=e=>Ie({perm:e.perm})}),rc,ic,ac,sc,oc,lc,uc,dc,pc,cc,Gt,fc,hc,mc,gc,yc,vc,_c,wc,$c,xc,Uw=x(()=>{fe(),me(),ye(),Wo(),On(),rc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ic={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ac={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},sc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},oc=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},lc=(e,r)=>{let i=[],s=e.length;for(let u=0;u<s;u++)r.indexOf(u)===-1&&i.push(e[u]);let o=r.map(u=>e[u]);return[i,o]},uc=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let u=0;u<i;u++)r.indexOf(u)===-1?s.push(e[o++]):s.push(1);return s},dc=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},pc=(e,r)=>{let i=[];if(!dc(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},cc=(e,r,i,s,o,u,d)=>{let c=i[0].dims,f=M.size(u),m=M.size(d),g=U("_A",i[0].dataType,c),y=ne("output",o,u),_=64;f===1&&(_=256);let w=`
          var<workgroup> aBestValues : array<f32, ${_}>;
       `,$=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(g,y)}
        ${w}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(_)}

          let outputIndex = global_idx / ${_};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ac[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${_}) {
           let candidate = f32(${g.getByOffset("offset + k")});
           bestValue = ${rc[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${_}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ic[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${y.setByOffset("outputIndex",`${s==="mean"?`${y.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${y.type.storage}(${sc[s]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${r};${_}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:f},programUniforms:[{type:12,data:m}]})}},Gt=(e,r,i,s)=>{let o=e.inputs.length===1?i:Vo(e.inputs,i),u=o.axes;u.length===0&&!o.noopWithEmptyAxes&&(u=e.inputs[0].dims.map((w,$)=>$));let d=M.normalizeAxes(u,e.inputs[0].dims.length),c=d,f=e.inputs[0],m=pc(c,e.inputs[0].dims.length);m.length>0&&(f=e.compute(Et(e.inputs[0],m),{inputs:[0],outputs:[-1]})[0],c=oc(c.length,f.dims.length));let[g,y]=lc(f.dims,c),_=g;o.keepDims&&(_=uc(g,d)),e.compute(cc(r,o.cacheKey,[f],s,e.inputs[0].dataType,_,y),{inputs:[f]})},fc=(e,r)=>{Gt(e,"ReduceMeanShared",r,"mean")},hc=(e,r)=>{Gt(e,"ReduceL1Shared",r,"l1")},mc=(e,r)=>{Gt(e,"ReduceL2Shared",r,"l2")},gc=(e,r)=>{Gt(e,"ReduceLogSumExpShared",r,"logSumExp")},yc=(e,r)=>{Gt(e,"ReduceMaxShared",r,"max")},vc=(e,r)=>{Gt(e,"ReduceMinShared",r,"min")},_c=(e,r)=>{Gt(e,"ReduceProdShared",r,"prod")},wc=(e,r)=>{Gt(e,"ReduceSumShared",r,"sum")},$c=(e,r)=>{Gt(e,"ReduceSumSquareShared",r,"sumSquare")},xc=(e,r)=>{Gt(e,"ReduceLogSumShared",r,"logSum")}}),jt,bc,Oa,Vo,Ht,kc,Sc,Ec,Tc,Ic,zc,Cc,Oc,Rc,Ac,Kt,Bc,Dc,Pc,Mc,Nc,Uc,Lc,Vc,Wc,qc,Wo=x(()=>{fe(),me(),Le(),ye(),Uw(),jt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},bc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Oa=(e,r,i,s,o,u,d=!1,c=!1)=>{let f=[],m=i[0].dims,g=m.length,y=M.normalizeAxes(o,g),_=!c&&y.length===0;m.forEach((b,T)=>{_||y.indexOf(T)>=0?d&&f.push(1):f.push(b)});let w=f.length,$=M.size(f);return{name:e,shaderCache:r,getShaderSource:b=>{let T=[],S=U("_A",i[0].dataType,g),k=ne("output",u,w),z=s(S,k,y),I=z[2];for(let O=0,P=0;O<g;O++)_||y.indexOf(O)>=0?(d&&P++,I=`for(var j${O}: u32 = 0; j${O} < ${m[O]}; j${O}++) {
                  ${z[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${S.indicesSet("input_indices",O,`j${O}`)}
                  ${I}
                }`):(T.push(`${S.indicesSet("input_indices",O,k.indicesGet("output_indices",P))};`),P++);return`

        ${b.registerUniform("output_size","u32").declareVariables(S,k)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${k.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${z[0]}       // init ops for reduce max/min
          ${z[1]}
          ${I}
          ${z[3]}
          ${z.length===4?k.setByOffset("global_idx","value"):z.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...se(m,f)]})}},Vo=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ie({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},Ht=(e,r,i,s)=>{let o=e.inputs,u=o.length===1?i:Vo(o,i);e.compute(Oa(r,{hint:u.cacheKey,inputDependencies:["rank"]},[o[0]],u.noopWithEmptyAxes&&u.axes.length===0?bc:s,u.axes,o[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},kc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Sc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Ec=(e,r)=>{jt(e.inputs),Ht(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Tc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},Ic=(e,r)=>{jt(e.inputs),Ht(e,"ReduceMax",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(i.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},zc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceMean",r,(i,s,o)=>{let u=1;for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&(u*=e.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${u});`]})},Cc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceMin",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},Oc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},Rc=(e,r)=>{jt(e.inputs),Ht(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},Ac=(e,r)=>{jt(e.inputs),Ht(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Kt=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let u=0;u<r.length;u++)r.indexOf(u)===-1?s*=e[u]:o*=e[u];return o<32&&s>1024},Bc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?zc(e,r):fc(e,r)},Dc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Sc(e,r):hc(e,r)},Pc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Ec(e,r):mc(e,r)},Mc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Tc(e,r):gc(e,r)},Nc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Ic(e,r):yc(e,r)},Uc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Cc(e,r):vc(e,r)},Lc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Oc(e,r):_c(e,r)},Vc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Rc(e,r):wc(e,r)},Wc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Ac(e,r):$c(e,r)},qc=(e,r)=>{Kt(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?kc(e,r):xc(e,r)}}),qo,Fc,Gc,Fo,Lw=x(()=>{fe(),Le(),Wo(),qo=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Fc=(e,r)=>{qo(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Oa("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},Gc=(e,r)=>{qo(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Oa("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},Fo=e=>Ie(e)}),jc,Ra,Hc,Kc,Qc,wi,Zc,Xc,Go=x(()=>{fe(),me(),Bo(),ye(),jc=(e,r)=>{let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4],c=e[5];if(d&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],m=i.dims[1],g=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==g)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let y=o.dims[0]/3,_=y,w=_;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let z of r.qkvHiddenSizes)if(z%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");y=r.qkvHiddenSizes[0],_=r.qkvHiddenSizes[1],w=r.qkvHiddenSizes[2]}let $=m;if(y!==_)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==y+_+w)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(d){if(_!==w)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==_/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(b=d.dims[3])}let T=$+b,S=-1,k=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==r.numHeads||c.dims[2]!==m||c.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:b,kvSequenceLength:$,totalSequenceLength:T,maxSequenceLength:S,inputHiddenSize:g,hiddenSize:y,vHiddenSize:w,headSize:Math.floor(y/r.numHeads),vHeadSize:Math.floor(w/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:k,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ra=(e,r,i)=>r&&e?`
      let total_sequence_length_input = u32(${r.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Hc=(e,r,i,s,o,u,d,c)=>{let f=Me(d?1:u),m=64,g=u/f;g<m&&(m=32);let y=Math.ceil(u/f/m),_=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:o},{type:12,data:g},{type:12,data:y}],w=Qe(e.dataType,f),$=st(1,f),b=["type"];d&&b.push("type"),c&&b.push("type");let T=S=>{let k=ne("x",e.dataType,e.dims,f),z=[k],I=d?U("seq_lens",d.dataType,d.dims):void 0;I&&z.push(I);let O=c?U("total_sequence_length_input",c.dataType,c.dims):void 0;O&&z.push(O);let P=st(e.dataType),D=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${m}>;
  var<workgroup> thread_sum: array<f32, ${m}>;
  ${S.registerUniforms(D).declareVariables(...z)}
  ${S.mainStart([m,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ra(I,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${m}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${d?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(f){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${m}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(f){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${m}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${k.type.value}(${P}(1.0) / ${P}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${k.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${d?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${k.type.value}(${P}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${w};${f}`,inputDependencies:b},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:o,z:r*i},programUniforms:_})}},Kc=(e,r,i,s,o,u,d,c,f)=>{let m=d+u.kvSequenceLength,g=[u.batchSize,u.numHeads,u.sequenceLength,m],y=e>1&&s,_=u.kvNumHeads?u.kvNumHeads:u.numHeads,w=y?[u.batchSize,_,m,u.headSize]:void 0,$=u.nReps?u.nReps:1,b=u.scale===0?1/Math.sqrt(u.headSize):u.scale,T=Me(u.headSize),S=u.headSize/T,k=12,z={x:Math.ceil(m/k),y:Math.ceil(u.sequenceLength/k),z:u.batchSize*u.numHeads},I=[{type:12,data:u.sequenceLength},{type:12,data:S},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:b},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:$}],O=y&&s&&M.size(s.dims)>0,P=["type","type"];O&&P.push("type"),o&&P.push("type"),c&&P.push("type"),f&&P.push("type");let D=[{dims:g,dataType:r.dataType,gpuDataType:0}];y&&D.push({dims:w,dataType:r.dataType,gpuDataType:0});let N=W=>{let K=U("q",r.dataType,r.dims,T),ce=U("key",i.dataType,i.dims,T),re=[K,ce];if(O){let he=U("past_key",s.dataType,s.dims,T);re.push(he)}o&&re.push(U("attention_bias",o.dataType,o.dims));let pe=c?U("seq_lens",c.dataType,c.dims):void 0;pe&&re.push(pe);let ke=f?U("total_sequence_length_input",f.dataType,f.dims):void 0;ke&&re.push(ke);let ve=ne("output",r.dataType,g),le=[ve];y&&le.push(ne("present_key",r.dataType,w,T));let _e=st(1,T),oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${k}u;

  var<workgroup> tileQ: array<${K.type.storage}, ${k*k}>;
  var<workgroup> tileK: array<${K.type.storage}, ${k*k}>;
  ${W.registerUniforms(oe).declareVariables(...re,...le)}
  ${W.mainStart([k,k,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ra(pe,ke,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&y?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${y?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${_e}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&y?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${y?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${_e}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${ve.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${o!==void 0};${s!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:D,dispatchGroup:z,programUniforms:I}),getShaderSource:N}},Qc=(e,r,i,s,o,u,d=void 0,c=void 0)=>{let f=u+o.kvSequenceLength,m=o.nReps?o.nReps:1,g=o.vHiddenSize*m,y=e>1&&s,_=o.kvNumHeads?o.kvNumHeads:o.numHeads,w=y?[o.batchSize,_,f,o.headSize]:void 0,$=[o.batchSize,o.sequenceLength,g],b=12,T={x:Math.ceil(o.vHeadSize/b),y:Math.ceil(o.sequenceLength/b),z:o.batchSize*o.numHeads},S=[{type:12,data:o.sequenceLength},{type:12,data:f},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:g},{type:12,data:u},{type:12,data:o.kvSequenceLength},{type:12,data:m}],k=y&&s&&M.size(s.dims)>0,z=["type","type"];k&&z.push("type"),d&&z.push("type"),c&&z.push("type");let I=[{dims:$,dataType:r.dataType,gpuDataType:0}];y&&I.push({dims:w,dataType:r.dataType,gpuDataType:0});let O=P=>{let D=U("probs",r.dataType,r.dims),N=U("v",i.dataType,i.dims),W=[D,N];k&&W.push(U("past_value",s.dataType,s.dims));let K=d?U("seq_lens",d.dataType,d.dims):void 0;d&&W.push(K);let ce=c?U("total_sequence_length_input",c.dataType,c.dims):void 0;c&&W.push(ce);let re=[ne("output",r.dataType,$)];y&&re.push(ne("present_value",r.dataType,w));let pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${D.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${D.type.value}, ${b*b}>;
  ${P.registerUniforms(pe).declareVariables(...W,...re)}
  ${P.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ra(K,ce,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${k&&y?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${y?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${D.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${k&&y?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${y?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:I,dispatchGroup:T,programUniforms:S}),getShaderSource:O}},wi=(e,r,i,s,o,u,d,c,f,m,g=void 0,y=void 0)=>{let _=Math.min(e.outputCount,1+(d?1:0)+(c?1:0)),w=_>1?m.pastSequenceLength:0,$=w+m.kvSequenceLength,b=f&&M.size(f.dims)>0?f:void 0,T=[r,i];_>1&&d&&M.size(d.dims)>0&&T.push(d),b&&T.push(b),g&&T.push(g),y&&T.push(y);let S=e.compute(Kc(_,r,i,d,b,m,w,g,y),{inputs:T,outputs:_>1?[-1,1]:[-1]})[0];e.compute(Hc(S,m.batchSize,m.numHeads,w,m.sequenceLength,$,g,y),{inputs:g&&y?[S,g,y]:[S],outputs:[]});let k=[S,s];_>1&&c&&M.size(c.dims)>0&&k.push(c),g&&k.push(g),y&&k.push(y),e.compute(Qc(_,S,s,c,m,w,g,y),{inputs:k,outputs:_>1?[0,2]:[0]})},Zc=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,u=r.headSize,d=12,c={x:Math.ceil(r.headSize/d),y:Math.ceil(r.sequenceLength/d),z:r.batchSize*r.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],m=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],g=y=>{let _=ne("output_q",f[0].dataType,i),w=ne("output_k",f[0].dataType,i),$=ne("output_v",f[0].dataType,i),b=U("input",f[0].dataType,f[0].dims),T=U("weight",f[1].dataType,f[1].dims),S=U("bias",f[2].dataType,f[2].dims),k=b.type.storage,z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${k}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${k}, ${d*d}>;
  var<workgroup> tileWeightK: array<${k}, ${d*d}>;
  var<workgroup> tileWeightV: array<${k}, ${d*d}>;
  ${y.registerUniforms(z).declareVariables(b,T,S,_,w,$)}
  ${y.mainStart([d,d,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${k}(0);
    var valueK = ${k}(0);
    var valueV = ${k}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:m}),getShaderSource:g},{inputs:f,outputs:[-1,-1,-1]})},Xc=(e,r)=>{let i=jc(e.inputs,r),[s,o,u]=Zc(e,i);return wi(e,s,o,u,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),Yc,Jc,ef,tf,Vw=x(()=>{Dt(),fe(),me(),Le(),ye(),Yc=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,u)=>{let d=o.length;if(d!==s.length)throw new Error(`${u}: num dimensions != ${d}`);o.forEach((c,f)=>{if(c!==s[f])throw new Error(`${u}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},Jc=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,u=e[0].dims,d=s?Me(u[u.length-1]):1,c=o==="NHWC"&&u.length>1?d:1,f=M.size(u)/d,m=s,g=m?u.length:u,y=U("x",e[0].dataType,e[0].dims,d),_=U("scale",e[1].dataType,e[1].dims,c),w=U("bias",e[2].dataType,e[2].dims,c),$=U("inputMean",e[3].dataType,e[3].dims,c),b=U("inputVar",e[4].dataType,e[4].dims,c),T=ne("y",e[0].dataType,g,d),S=()=>{let z="";if(s)z=`let cOffset = ${u.length===1?"0u":o==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(o==="NCHW")z=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{z=`var cIndices = ${_.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let I=1;I<_.rank;I++)z+=`cIndices[${I}] = outputIndices[${I}];`;z+=`let cOffset = ${_.indicesToOffset("cIndices")};`}return z},k=z=>`
  const epsilon = ${i};
  ${z.registerUniform("outputSize","u32").declareVariables(y,_,w,$,b,T)}
  ${z.mainStart()}
  ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${d}`)};
    ${S()}
    let scale = ${_.getByOffset("cOffset")};
    let bias = ${w.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${y.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:k,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m?[{type:12,data:f},...se(u)]:[{type:12,data:f}]})}},ef=e=>Ie(e),tf=(e,r)=>{let{inputs:i,outputCount:s}=e,o=ef({...r,outputCount:s});if(X.webgpu.validateInputContent&&Yc(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Jc(i,o))}}),nf,rf,af,Ww=x(()=>{me(),ye(),nf=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},rf=e=>{let r=e[0].dims,i=e[0].dims[2],s=M.size(r)/4,o=e[0].dataType,u=U("input",o,r,4),d=U("bias",o,[i],4),c=U("residual",o,r,4),f=ne("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:m=>`
  const channels = ${i}u / 4;
  ${m.declareVariables(u,d,c,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},af=e=>{nf(e.inputs),e.compute(rf(e.inputs))}}),sf,Te,of,lf,uf,df,pf,cf,ff,hf,mf,gf,yf,vf,_f,wf,$i,$f,Aa,xf,bf,kf,Sf,Ef,Tf,If,zf,Cf,Of,Rf,Af,Bf,Df,Pf,Mf,jo,Nf,Ho,Ko,Uf,Lf,Vf,Wf,qf,Ff,Qo=x(()=>{fe(),me(),Le(),ye(),sf=(e,r,i,s,o,u,d)=>{let c=Math.ceil(r/4),f="";typeof o=="string"?f=`${o}(a)`:f=o("a");let m=U("inputData",i,[c],4),g=ne("outputData",s,[c],4),y=[{name:"vec_size",type:"u32"}];return d&&y.push(...d),`
      ${e.registerUniforms(y).declareVariables(m,g)}

  ${u??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${g.setByOffset("global_idx",f)}
  }`},Te=(e,r,i,s,o,u=e.dataType,d,c)=>{let f=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return d&&f.push(...d),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:m=>sf(m,M.size(e.dims),e.dataType,u,i,s,c),getRunData:m=>({outputs:[{dims:e.dims,dataType:u}],dispatchGroup:{x:Math.ceil(M.size(m[0].dims)/64/4)},programUniforms:f})}},of=e=>{e.compute(Te(e.inputs[0],"Abs","abs"))},lf=e=>{e.compute(Te(e.inputs[0],"Acos","acos"))},uf=e=>{e.compute(Te(e.inputs[0],"Acosh","acosh"))},df=e=>{e.compute(Te(e.inputs[0],"Asin","asin"))},pf=e=>{e.compute(Te(e.inputs[0],"Asinh","asinh"))},cf=e=>{e.compute(Te(e.inputs[0],"Atan","atan"))},ff=e=>{e.compute(Te(e.inputs[0],"Atanh","atanh"))},hf=e=>Ie(e),mf=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(Te(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},gf=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ie({min:r,max:i})},yf=(e,r)=>{let i=r||gf(e.inputs),s=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},vf=e=>{e.compute(Te(e.inputs[0],"Ceil","ceil"))},_f=e=>{e.compute(Te(e.inputs[0],"Cos","cos"))},wf=e=>{e.compute(Te(e.inputs[0],"Cosh","cosh"))},$i=e=>Ie(e),$f=(e,r)=>{let i=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},Aa=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,xf=e=>{let r=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Aa(r)))},bf=e=>{e.compute(Te(e.inputs[0],"Exp","exp"))},kf=e=>{e.compute(Te(e.inputs[0],"Floor","floor"))},Sf=e=>{let r=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Aa(r)))},Ef=(e,r)=>{let i=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},Tf=e=>{e.compute(Te(e.inputs[0],"Not",r=>`!${r}`))},If=e=>{e.compute(Te(e.inputs[0],"Neg",r=>`-${r}`))},zf=e=>{e.compute(Te(e.inputs[0],"Reciprocal",r=>`1.0/${r}`))},Cf=e=>{let r=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"Relu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > vec4<${r}>(0.0))`))},Of=e=>{e.compute(Te(e.inputs[0],"Sigmoid",r=>`(1.0 / (1.0 + exp(-${r})))`))},Rf=e=>Ie(e),Af=(e,r)=>{let i=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${s} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},Bf=e=>{e.compute(Te(e.inputs[0],"Sin","sin"))},Df=e=>{e.compute(Te(e.inputs[0],"Sinh","sinh"))},Pf=e=>{e.compute(Te(e.inputs[0],"Sqrt","sqrt"))},Mf=e=>{e.compute(Te(e.inputs[0],"Tan","tan"))},jo=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Nf=e=>{e.compute(Te(e.inputs[0],"Tanh",jo))},Ho=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${jo("v")};
}
`,Ko=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Uf=e=>{let r=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"FastGelu",Ko,Ho(r),void 0,e.inputs[0].dataType))},Lf=(e,r)=>{let i=st(e.inputs[0].dataType);return e.compute(Te(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},Vf=e=>{e.compute(Te(e.inputs[0],"Log","log"))},Wf=(e,r)=>`
const alpha = vec4<${e}>(${r});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,qf=e=>`quick_gelu_impl(${e})`,Ff=(e,r)=>{let i=st(e.inputs[0].dataType);e.compute(Te(e.inputs[0],"QuickGelu",qf,Wf(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),Gf,jf,Hf,qw=x(()=>{me(),ye(),Qo(),Gf=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jf=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=U("input",e[0].dataType,e[0].dims,4),s=U("bias",e[0].dataType,[e[0].dims[2]],4),o=ne("output",e[0].dataType,r,4),u=M.size(r)/4,d=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${c.declareVariables(i,s,o)}

  ${Aa(d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Hf=e=>{Gf(e.inputs),e.compute(jf(e.inputs))}}),Kf,Qf,Qt,Zf,Xf,Yf,Jf,eh,th,nh,rh,ih,ah,Fw=x(()=>{fe(),me(),ye(),Kf=(e,r,i,s,o,u,d,c,f,m,g,y)=>{let _,w;typeof c=="string"?_=w=(k,z)=>`${c}((${k}),(${z}))`:typeof c=="function"?_=w=c:(_=c.scalar,w=c.vector);let $=ne("outputData",g,s.length,4),b=U("aData",f,r.length,4),T=U("bData",m,i.length,4),S;if(o)if(u){let k=M.size(r)===1,z=M.size(i)===1,I=r.length>0&&r[r.length-1]%4===0,O=i.length>0&&i[i.length-1]%4===0;k||z?S=$.setByOffset("global_idx",w(k?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),z?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):S=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",w(d||I?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||O?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=$.setByOffset("global_idx",w(b.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let k=(z,I,O="")=>{let P=`aData[indexA${I}][componentA${I}]`,D=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${$.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${b.broadcastedIndicesToOffset(`outputIndices${I}`,$)};
            let offsetB${I} = ${T.broadcastedIndicesToOffset(`outputIndices${I}`,$)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${z}[${I}] = ${O}(${_(P,D)});
          `};g===9?S=`
            var data = vec4<u32>(0);
            ${k("data",0,"u32")}
            ${k("data",1,"u32")}
            ${k("data",2,"u32")}
            ${k("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:S=`
            ${k("outputData[global_idx]",0)}
            ${k("outputData[global_idx]",1)}
            ${k("outputData[global_idx]",2)}
            ${k("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,T,$)}

        ${y??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},Qf=(e,r,i,s,o,u,d=i.dataType)=>{let c=i.dims.map(b=>Number(b)??1),f=s.dims.map(b=>Number(b)??1),m=!M.areEqual(c,f),g=c,y=M.size(c),_=!1,w=!1,$=[m];if(m){let b=Ar.calcShape(c,f,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");g=b.slice(),y=M.size(g);let T=M.size(c)===1,S=M.size(f)===1,k=c.length>0&&c[c.length-1]%4===0,z=f.length>0&&f[f.length-1]%4===0;$.push(T),$.push(S),$.push(k),$.push(z);let I=1;for(let O=1;O<g.length;O++){let P=c[c.length-O],D=f[f.length-O];if(P===D)I*=P;else break}I%4===0?(w=!0,_=!0):(T||S||k||z)&&(_=!0)}else _=!0;return $.push(_),{name:e,shaderCache:{hint:r+$.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Kf(b,c,f,g,_,m,w,o,i.dataType,s.dataType,d,u),getRunData:()=>({outputs:[{dims:g,dataType:d}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(g)/4)},...se(c,f,g)]})}},Qt=(e,r,i,s,o,u)=>{e.compute(Qf(r,o??"",e.inputs[0],e.inputs[1],i,s,u))},Zf=e=>{Qt(e,"Add",(r,i)=>`${r}+${i}`)},Xf=e=>{Qt(e,"Div",(r,i)=>`${r}/${i}`)},Yf=e=>{Qt(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},Jf=e=>{Qt(e,"Mul",(r,i)=>`${r}*${i}`)},eh=e=>{let r=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Qt(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${r==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},th=e=>{Qt(e,"Sub",(r,i)=>`${r}-${i}`)},nh=e=>{Qt(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},rh=e=>{Qt(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},ih=e=>{Qt(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},ah=e=>{Qt(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),sh,oh,lh,uh,dh,ph,Gw=x(()=>{fe(),me(),Le(),ye(),sh=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,u=s.dims.length;e.forEach((d,c)=>{if(c!==i){if(d.dataType!==o)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((f,m)=>{if(m!==r&&f!==s.dims[m])throw new Error("non concat dimensions must match")})}})},oh=(e,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${r});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,lh=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;++o){let u=r.setByOffset("global_idx",e[o].getByIndices("indices"));i===1?s.push(u):o===0?s.push(`if (inputIndex == ${o}u) { ${u} }`):o===i-1?s.push(`else { ${u} }`):s.push(`else if (inputIndex == ${o}) { ${u} }`)}return s.join(`
`)},uh=(e,r,i,s)=>{let o=M.size(i),u=new Array(e.length),d=new Array(e.length),c=0,f=[],m=[],g=[{type:12,data:o}];for(let b=0;b<e.length;++b)c+=e[b].dims[r],u[b]=c,m.push(e[b].dims.length),d[b]=U(`input${b}`,s,m[b]),f.push("rank"),g.push({type:12,data:u[b]});for(let b=0;b<e.length;++b)g.push(...se(e[b].dims));g.push(...se(i));let y=ne("output",s,i.length),_=y.indicesGet("indices",r),w=Array.from(Array(u.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),$=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)b.registerUniform(`sizeInConcatAxis${T}`,"u32");return b.declareVariables(...d,y)})()}

  ${oh(u.length,w)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${y.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${_});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${u.length}u>(${w});
      ${_} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${lh(d,y)}
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:g}),getShaderSource:$}},dh=(e,r)=>{let i=e.inputs,s=i[0].dims,o=M.normalizeAxis(r.axis,s.length);sh(i,o);let u=s.slice();u[o]=i.reduce((c,f)=>c+(f.dims.length>o?f.dims[o]:0),0);let d=i.filter(c=>M.size(c.dims)>0);e.compute(uh(d,o,u,i[0].dataType),{inputs:d})},ph=e=>Ie({axis:e.axis})}),or,lr,ur,Zo,dr=x(()=>{fe(),me(),or=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},lr=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},ur=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},Zo=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[Ap,Bp];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Ye,ch,Xo=x(()=>{Ye=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},ch=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fh,jw=x(()=>{fh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),xi,Yo,Jo=x(()=>{fe(),me(),ye(),dr(),xi=(e,r,i,s,o)=>{let u=s-i;return`
      ${Array.from({length:i}).map((d,c)=>`
      if (${ae(r.shape,c,r.rank)} != 1) {
        ${r.indicesSet(e,c,ae(o,c+u,s))}
      } else {
        ${r.indicesSet(e,c,0)}
      }`).join("")}
`},Yo=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d[d.length-2],m=c[c.length-1],g=d[d.length-1],y=Me(m),_=Me(g),w=Me(f),$=M.size(i)/y/w,b=e.length>2,T=s?s.slice(0,-2):i.slice(0,-2),S=[M.size(T),f,m],k=[{type:12,data:$},{type:12,data:f},{type:12,data:m},{type:12,data:g}];lr(r,k),k.push(...se(T,d,c)),b&&k.push(...se(e[2].dims)),k.push(...se(S));let z=I=>{let O=Uo("batch_dims",e[0].dataType,T.length),P=U("a",e[0].dataType,d.length,_),D=U("b",e[1].dataType,c.length,y),N=ne("output",e[0].dataType,S.length,y),W=Qe(N.type.tensor),K=or(r,N.type.value,W),ce=[P,D],re="";if(b){let ve=o?y:1;ce.push(U("bias",e[2].dataType,e[2].dims.length,ve)),re=`${o?`value += bias[col / ${ve}];`:`value += ${N.type.value}(bias[row + i]);`}`}let pe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ur(r,pe);let ke=()=>{let ve=`var a_data: ${P.type.value};`;for(let le=0;le<_;le++)ve+=`
              let b_data${le} = b[(b_offset + (k + ${le}) * uniforms.N + col) / ${y}];`;for(let le=0;le<w;le++){ve+=`a_data = a[(a_offset + (row + ${le}) * uniforms.K + k) / ${_}];`;for(let _e=0;_e<_;_e++)ve+=`
            values[${le}] = fma(${D.type.value}(a_data${_===1?"":`[${_e}]`}), b_data${_e}, values[${le}]);
`}return ve};return`
  ${I.registerUniforms(pe).registerInternalVariables(O).declareVariables(...ce,N)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${y})) * ${y};
    var index1 = global_idx / (uniforms.N / ${y});
    let stride1 = uniforms.M / ${w};
    let row = (index1 % stride1) * ${w};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${P.type.indices};
    ${xi("a_indices",P,P.rank-2,O.rank,"batch_indices")}
    ${P.indicesSet("a_indices",P.rank-2,0)}
    ${P.indicesSet("a_indices",P.rank-1,0)}
    let a_offset = ${P.indicesToOffset("a_indices")};

    var b_indices: ${D.type.indices};
    ${xi("b_indices",D,D.rank-2,O.rank,"batch_indices")}
    ${D.indicesSet("b_indices",D.rank-2,0)}
    ${D.indicesSet("b_indices",D.rank-1,0)}
    let b_offset = ${D.indicesToOffset("b_indices")};
    var values: array<${N.type.value}, ${w}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${_}) {
      ${ke()}
    }
    for (var i = 0u; i < ${w}u; i++) {
      var value = values[i];
      ${re}
      ${K}
      let cur_indices = ${N.type.indices}(batch, row + i, col);
      let offset = ${N.indicesToOffset("cur_indices")};
      ${N.setByOffset(`offset / ${y}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${y};${_};${w};${o}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:k}),getShaderSource:z}}}),hh,mh,el,tl,gh,nl,yh,Ba,rl=x(()=>{fe(),me(),ye(),dr(),Jo(),Xo(),hh=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,mh=(e,r)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${r===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,el=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32)=>{let f=r[1]*e[1],m=r[0]*e[0],g=o?f:u,y=o?u:f,_=g/r[0],w=u/r[1];if(!((o&&_===4&&e[1]===4||!o&&(_===3||_===4))&&g%r[0]===0&&u%r[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${_} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${_} must be 3 or 4.
  tileAWidth ${g} must be divisible by workgroupSize[0]${r[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${_}<${i}>, ${g/_}>, ${y}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${m/e[0]}>, ${u}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${_};
const tileInner = ${u};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${d?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${f};

  let num_tiles = ${d?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${d?`i32(globalId.z) * ${c}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${w};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${hh(o,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${_===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${mh(o,_)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},tl=(e,r)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,gh=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",nl=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32,f=!1)=>{let m=e[1]*r[1],g=e[0]*r[0],y=o?m:u,_=o?u:m;if(!(_%r[1]===0&&y%r[0]===0&&u%r[1]===0))throw new Error(`tileAHight ${_} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${y} must be divisible by workgroupSize[0]${r[0]}, tileInner ${u} must be divisible by workgroupSize[1]${r[1]}`);let w=_/r[1],$=y/r[0],b=u/r[1],T=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${g};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${_}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${r[0]}) {
          ${tl(o,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${m};

let tileRowA = i32(localId.y) * ${w};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${tl(o,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${gh(o)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${y}>, ${_}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${g}>, ${u}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${u};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${d?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${d?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${d?`i32(globalId.z) * ${c}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${T}
  }
`},yh=(e,r,i,s,o=!1)=>{let[u,d,c,f]=s,m=Qe(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Ye(e,m)} {
      var value = ${Ye(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${d.type.indices};
        ${xi("aIndices",d,d.rank-2,u.rank,"batchIndices")}
        ${d.indicesSet("aIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("aIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Ye(e,m)} {
      var value = ${Ye(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${c.type.indices};
        ${xi("bIndices",c,c.rank-2,u.rank,"batchIndices")}
        ${c.indicesSet("bIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("bIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ye(e,m)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${o?"bias[colIn]":`${Ye(e,m)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ba=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d.slice(0,-2),m=c.slice(0,-2),g=s?s.slice(0,-2):i.slice(0,-2),y=M.size(g),_=d[d.length-2],w=d[d.length-1],$=c[c.length-1],b=w%4===0&&$%4===0,T=_<=8?[4,1,1]:[4,4,1],S=[8,8,1],k=[Math.ceil($/S[0]/T[0]),Math.ceil(_/S[1]/T[1]),Math.ceil(y/S[2]/T[2])],z=b?4:1,I=[...f,_,w/z],O=I.length,P=[...m,w,$/z],D=P.length,N=[y,_,$/z],W=[{type:6,data:_},{type:6,data:$},{type:6,data:w}];lr(r,W),W.push(...se(g,I,P));let K=["rank","rank"],ce=e.length>2;ce&&(W.push(...se(e[2].dims)),K.push("rank")),W.push(...se(N));let re=pe=>{let ke=g.length,ve=Uo("batchDims",e[0].dataType,ke,1),le=Qe(e[0].dataType),_e=U("a",e[0].dataType,O,z),oe=U("b",e[1].dataType,D,z),he=ne("result",e[0].dataType,N.length,z),nt=[_e,oe];if(ce){let Tt=o?z:1;nt.push(U("bias",e[2].dataType,e[2].dims.length,Tt))}let q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ur(r,q);let Y=Qe(he.type.tensor),ue=or(r,he.type.value,Y),$e=yh(z,ce,ue,[ve,_e,oe,he],o);return`
  ${pe.registerUniforms(q).registerInternalVariables(ve).declareVariables(...nt,he)}
  ${$e}
  ${b?el(T,S,le,ve):nl(T,S,le,ve)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${r.activation};${b};${o}`,inputDependencies:K},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:W}),getShaderSource:re}}}),vh,_h,Hw=x(()=>{fe(),mn(),ye(),dr(),Xo(),jw(),rl(),vh=(e,r,i,s,o=!1,u,d=4,c=4,f=4,m="f32")=>{let g=W=>{switch(W){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},y=W=>{switch(W){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${W} is not supported.`)}},_=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,w=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",S=e?"col":"row",k=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${S} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${S} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${S} % inChannels;
    var resData = ${Ye(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${b}) {
      ${_}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${g(d)}
    }
    return resData;`,z=e?r&&s?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${k}
    }
    return ${Ye(d,m)}(0.0);`:s&&i?`
    let col = colIn * ${d};
    ${k}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${k}
    }
    return ${Ye(d,m)}(0.0);`,I=e?s&&i?y(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y(c)}
    }
    return ${Ye(c,m)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${y(c)}
    }
    return ${Ye(c,m)}(0.0);`,O=Ye(f,m),P=Ye(e?d:c,m),D=Ye(e?c:d,m),N=or(u,O,m);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?z:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${D} {
      ${e?I:z}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${f};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${w}
      ${ch(o)}
      ${N}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},_h=(e,r,i,s,o,u,d,c,f)=>{let m=r.format==="NHWC",g=m?e[0].dims[3]:e[0].dims[1],y=i[0],_=m?i[2]:i[3],w=m?i[1]:i[2],$=m?i[3]:i[1],b=m&&(g%4===0||g%3===0)&&$%4===0,T=m?$:_*w,S=m?_*w:$,k=[8,8,1],z=s<=8?[4,1,1]:[4,4,1],I=[Math.ceil(T/k[0]/z[0]),Math.ceil(S/k[1]/z[1]),Math.ceil(y/k[2]/z[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let O=b?m&&g%4!==0?3:4:1,P=k[1]*z[1],D=k[0]*z[0],N=Math.max(k[0]*O,k[1]),W=s%P===0,K=o%D===0,ce=u%N===0,re=b?[O,4,4]:[1,1,1],pe=[{type:6,data:s},{type:6,data:o},{type:6,data:u},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];lr(r,pe),pe.push(...se(e[0].dims,e[1].dims));let ke=["rank","rank"];d&&(pe.push(...se(e[2].dims)),ke.push("rank")),pe.push(...se(i));let ve=le=>{let _e=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ur(r,_e);let oe=b?4:1,he=Qe(e[0].dataType),nt=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${he}>`:he}) {
        result[flatIndex] = ${b?`vec4<${he}>`:he}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${he}>`:he}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,q=U("x",e[0].dataType,e[0].dims.length,O===3?1:O),Y=U("w",e[1].dataType,e[1].dims.length,oe),ue=[q,Y],$e=ne("result",e[0].dataType,i.length,oe);if(d){let Tt=U("bias",e[2].dataType,e[2].dims.length,oe);ue.push(Tt),nt+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${he}>`:he} {
          return bias[coords.${m?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${fh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${le.registerUniforms(_e).declareVariables(...ue,$e)}
        ${nt}
        ${vh(m,W,K,ce,d,r,re[0],re[1],re[2],he)}
        ${b?el(z,k,he,void 0,!m,N):nl(z,k,he,void 0,!m,N,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${O};${b};${W};${K};${ce};${P};${D};${N}`,inputDependencies:ke},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:pe}),getShaderSource:ve}}}),wh,il,bi,$h,al,xh,bh,kh,Kw=x(()=>{fe(),mn(),me(),ye(),dr(),Xo(),wh=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},il=e=>typeof e=="number"?[e,e,e]:e,bi=(e,r)=>r<=1?e:e+(e-1)*(r-1),$h=(e,r,i,s=1)=>{let o=bi(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},al=(e,r,i,s,o)=>{o==null&&(o=$h(e,r[0],s[0]));let u=[0,0,0,i];for(let d=0;d<3;d++)e[d]+2*o>=r[d]&&(u[d]=Math.trunc((e[d]-r[d]+2*o)/s[d]+1));return u},xh=(e,r,i,s,o,u,d,c,f,m)=>{let g,y,_,w;if(e==="VALID"&&(e=0),typeof e=="number"){g={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=al([r,i,s,1],[c,f,m],1,[o,u,d],e);y=$[0],_=$[1],w=$[2]}else if(Array.isArray(e)){if(!e.every((b,T,S)=>b===S[0]))throw Error(`Unsupported padding parameter: ${e}`);g={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=al([r,i,s,1],[c,f,m],1,[o,u,d],e[0]);y=$[0],_=$[1],w=$[2]}else if(e==="SAME_UPPER"){y=Math.ceil(r/o),_=Math.ceil(i/u),w=Math.ceil(s/d);let $=(y-1)*o+c-r,b=(_-1)*u+f-i,T=(w-1)*d+m-s,S=Math.floor($/2),k=$-S,z=Math.floor(b/2),I=b-z,O=Math.floor(T/2),P=T-O;g={top:z,bottom:I,left:O,right:P,front:S,back:k}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:g,outDepth:y,outHeight:_,outWidth:w}},bh=(e,r,i,s,o,u=!1,d="channelsLast")=>{let c,f,m,g,y;if(d==="channelsLast")[c,f,m,g,y]=e;else if(d==="channelsFirst")[c,y,f,m,g]=e;else throw new Error(`Unknown dataFormat ${d}`);let[_,,w,$,b]=r,[T,S,k]=il(i),[z,I,O]=il(s),P=bi(w,z),D=bi($,I),N=bi(b,O),{padInfo:W,outDepth:K,outHeight:ce,outWidth:re}=xh(o,f,m,g,T,S,k,P,D,N),pe=u?_*y:_,ke=[0,0,0,0,0];return d==="channelsFirst"?ke=[c,pe,K,ce,re]:d==="channelsLast"&&(ke=[c,K,ce,re,pe]),{batchSize:c,dataFormat:d,inDepth:f,inHeight:m,inWidth:g,inChannels:y,outDepth:K,outHeight:ce,outWidth:re,outChannels:pe,padInfo:W,strideDepth:T,strideHeight:S,strideWidth:k,filterDepth:w,filterHeight:$,filterWidth:b,effectiveFilterDepth:P,effectiveFilterHeight:D,effectiveFilterWidth:N,dilationDepth:z,dilationHeight:I,dilationWidth:O,inShape:e,outShape:ke,filterShape:r}},kh=(e,r,i,s,o,u)=>{let d=u==="channelsLast";d?e[0].dims[3]:e[0].dims[1];let c=[64,1,1],f={x:i.map((T,S)=>S)},m=[Math.ceil(wh(f.x.map(T=>i[T]))/c[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${m}`);let g=1,y=M.size(i),_=[{type:12,data:y},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];lr(r,_),_.push(...se(e[0].dims,e[1].dims));let w=["rank","rank"],$=e.length===3;$&&(_.push(...se(e[2].dims)),w.push("rank")),_.push(...se(i));let b=T=>{let S=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];ur(r,S);let k=1,z=Qe(e[0].dataType),I=U("x",e[0].dataType,e[0].dims.length,g),O=U("W",e[1].dataType,e[1].dims.length,k),P=[I,O],D=ne("result",e[0].dataType,i.length,k),N="";if($){let ce=U("bias",e[2].dataType,e[2].dims.length,k);P.push(ce),N+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${z} {
          return bias[${d?ae("coords",4,5):ae("coords",1,5)}];
        }`}let W=Ye(g,z),K=or(r,W,z);return`
            ${N}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${T.registerUniforms(S).declareVariables(...P,D)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${D.offsetToIndices("global_idx")};
              let batch = ${ae("coords",0,I.rank)};
              let d2 = ${d?ae("coords",I.rank-1,I.rank):ae("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${d?ae("coords",1,I.rank):ae("coords",2,I.rank)},
              ${d?ae("coords",2,I.rank):ae("coords",3,I.rank)},
              ${d?ae("coords",3,I.rank):ae("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${d?ae("uniforms.x_shape",1,I.rank):ae("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${d?ae("uniforms.x_shape",2,I.rank):ae("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${d?ae("uniforms.x_shape",3,I.rank):ae("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${d?ae("uniforms.x_shape",4,I.rank):ae("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${d?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${d?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${d?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${d?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${K}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${d};${g};${$}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:_}),getShaderSource:b}}}),Sh,Eh,Qw=x(()=>{fe(),me(),ye(),dr(),Sh=(e,r,i,s)=>{let o=e.length>2,u=o?"value += b[output_channel];":"",d=e[0].dims,c=e[1].dims,f=r.format==="NHWC",m=f?i[3]:i[1],g=m/r.group,y=f&&g>=4?Me(m):1,_=M.size(i)/y,w=[{type:12,data:_},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:g}];lr(r,w),w.push(...se(d,[c[0],c[1],c[2],c[3]/y]));let $=o?["rank","rank","rank"]:["rank","rank"];w.push(...se([i[0],i[1],i[2],i[3]/y]));let b=T=>{let S=ne("output",e[0].dataType,i.length,y),k=Qe(S.type.tensor),z=or(r,S.type.value,k),I=U("x",e[0].dataType,d.length),O=U("w",e[1].dataType,c.length,y),P=[I,O];o&&P.push(U("b",e[2].dataType,e[2].dims,y));let D=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ur(r,D);let N=f?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(D).declareVariables(...P,S)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${f?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${f?1:2}], outputIndices[${f?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${y} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${f?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${N}
    ${u}
    ${z}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:b}},Eh=(e,r,i,s)=>{let o=e.length>2,u=Me(i[3]),d=Me(i[2]),c=M.size(i)/u/d,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/u],m=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/u],g=[i[0],i[1],i[2],i[3]/u],y=[{type:12,data:c},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];lr(r,y),y.push(...se(f,m,g));let _=(d-1)*r.strides[1]+m[1],w=$=>{let b=ne("output",e[0].dataType,g.length,u),T=Qe(b.type.tensor),S=or(r,b.type.value,T),k=U("x",e[0].dataType,f.length,u),z=U("w",e[1].dataType,m.length,u),I=[k,z];o&&I.push(U("b",e[2].dataType,e[2].dims,u));let O=o?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ur(r,P),`
  ${$.registerUniforms(P).declareVariables(...I,b)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${d}u;
    let col = (index1 % width1) * ${d}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${k.type.value}, ${_}>;
    var values: array<${b.type.value}, ${d}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${m[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${_}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${k.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${k.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${m[1]}; w_width++) {
          let w_val = ${z.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${d}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${d}u; i++) {
      var value = values[i];
      ${O}
      ${S}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${u};${d};${_};${m[0]};${m[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:w}}}),Th,Da,Ih,Pa,sl,ol,zh,Ch,ll,Zw=x(()=>{me(),Hw(),Kw(),rl(),Qw(),dr(),Jo(),On(),Th=(e,r,i,s,o,u)=>{let d=e[0],c=e.slice(u?1:2,u?3:4),f=c.length,m=r[0],g=r.slice(2).map((_,w)=>_+(_-1)*(i[w]-1)),y=c.map((_,w)=>_+s[w]+s[w+f]).map((_,w)=>Math.floor((_-g[w]+o[w])/o[w]));return y.splice(0,0,d),y.splice(u?3:1,0,m),y},Da=[2,3,1,0],Ih=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pa=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let u=2;u<r[1].dims.length;++u)i[u-2]===0&&(i[u-2]=r[1].dims[u]);let s=e.pads.slice();Ta.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},sl=e=>{let r=Zo(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,u=e.group,d=e.kernel_shape,c=e.pads,f=e.strides,m=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},ol=(e,r,i,s)=>{let o=i.format==="NHWC",u=Th(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let P=[r[0]];if(o){let D=e.kernelCustomData.wT??e.compute(Et(r[1],Da),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=D),P.push(D)}else P.push(r[1]);r.length===3&&P.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Eh(P,i,u,s),{inputs:P}):e.compute(Sh(P,i,u,s),{inputs:P});return}let d=r.length===3,c=r[0].dims[o?1:2],f=r[0].dims[o?2:3],m=r[0].dims[o?3:1],g=r[1].dims[2],y=r[1].dims[3],_=u[o?1:2],w=u[o?2:3],$=u[o?3:1],b=o&&g===c&&y===f&&i.pads[0]===0&&i.pads[1]===0;if(b||g===1&&y===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let P=u[0],D,N,W,K=[];if(o){let pe=e.kernelCustomData.wT??e.compute(Et(r[1],Da),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=pe),b){let ke=c*f*m;D=r[0].reshape([1,P,ke]),N=pe.reshape([1,ke,$]),W=[1,P,$]}else D=r[0].reshape([P,c*f,m]),N=pe.reshape([1,m,$]),W=[P,_*w,$];K.push(D),K.push(N)}else D=r[0].reshape([P,m,c*f]),N=r[1].reshape([1,$,m]),W=[P,$,_*w],K.push(N),K.push(D);d&&K.push(r[2]);let ce=W[2],re=K[0].dims[K[0].dims.length-1];ce<8&&re<8?e.compute(Yo(K,i,u,W,o,s),{inputs:K}):e.compute(Ba(K,i,u,W,o,s),{inputs:K});return}let T=!0,S=e.kernelCustomData.wT??e.compute(Et(r[1],Da),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let k=[r[0],S];d&&k.push(r[2]);let z=o?_*w:$,I=o?$:_*w,O=g*y*m;e.compute(_h(k,i,u,z,I,O,d,T,s),{inputs:k})},zh=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],u=[1].concat(r.strides),d=[1].concat(r.dilations),c=[1].concat(r.kernelShape),f=Pa({...r,pads:o,strides:u,dilations:d,kernelShape:c},s);ol(e,s,f,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Ch=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=Pa(i,r),u=i.autoPad==="NOTSET"?i.pads:i.autoPad,d=bh(r[0].dims,r[1].dims,i.strides,i.dilations,u,!1,s);e.compute(kh(r,o,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],s))},ll=(e,r)=>{if(Ih(e.inputs,r),e.inputs[0].dims.length===3)zh(e,r);else if(e.inputs[0].dims.length===5)Ch(e,e.inputs,r);else{let i=Pa(r,e.inputs);ol(e,e.inputs,i)}}}),Oh,Xw=x(()=>{fe(),mn(),me(),ye(),Oh=(e,r,i)=>{let s=e.length>2,o=r.outputShape,u=r.format==="NHWC",d=r.group,c=e[1].dims,f=c[2]/d,m=c[3],g=u?Me(f):1,y=u&&m===1&&f>=4,_=y?Math.floor(f/4)*4:Math.floor(f/g)*g,w=f-_,$=u?Me(m):1,b=u?m===1?g:$:1,T=M.size(o)/$,S=[Math.ceil(T/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let k=["rank","rank"],z=[r.strides[0],r.strides[1]],I=[r.kernelShape[u?1:2],r.kernelShape[u?2:3]],O=[r.dilations[0],r.dilations[1]],P=[I[0]+(r.dilations[0]<=1?0:(r.kernelShape[u?1:2]-1)*(r.dilations[0]-1)),I[1]+(r.dilations[1]<=1?0:(r.kernelShape[u?2:3]-1)*(r.dilations[1]-1))],D=[P[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),P[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],N=[{type:12,data:T},{type:12,data:z},{type:12,data:I},{type:12,data:O},{type:12,data:P},{type:6,data:D},{type:12,data:_},{type:12,data:f},{type:12,data:m},...se(e[0].dims,e[1].dims)];s&&(N.push(...se(e[2].dims)),k.push("rank")),N.push(...se(o));let W=K=>{let ce=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:z.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:D.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],re=Qe(e[0].dataType),pe=u?1:2,ke=u?2:3,ve=u?3:1,le=U("W",e[1].dataType,e[1].dims.length,b),_e=U("Dy",e[0].dataType,e[0].dims.length,g),oe=[_e,le];s&&oe.push(U("bias",e[2].dataType,[o[ve]].length,$));let he=ne("result",e[0].dataType,o.length,$),nt=()=>{let ue="";if(y)g===4?ue+=`
        let xValue = ${_e.getByOffset("x_offset")};
        let wValue = ${le.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:g===2?ue+=`
          dotProd = dotProd + dot(vec4<${re}>(${_e.getByOffset("x_offset")}, ${_e.getByOffset("x_offset + 1u")}), vec4<${re}>(${le.getByOffset("w_offset")}, ${le.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:g===1&&(ue+=`
          dotProd = dotProd + dot(vec4<${re}>(${_e.getByOffset("x_offset")}, ${_e.getByOffset("x_offset + 1u")}, ${_e.getByOffset("x_offset + 2u")}, ${_e.getByOffset("x_offset + 3u")}), vec4<${re}>(${le.getByOffset("w_offset")}, ${le.getByOffset("w_offset + 1u")}, ${le.getByOffset("w_offset + 2u")}, ${le.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ue+=`
                  let xValue = ${u?_e.getByOffset(`${_e.indicesToOffset(`${_e.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g}`):_e.get("batch","inputChannel","idyR","idyC")};
        `,g===1)ue+=`
          let w_offset = ${le.indicesToOffset(`${le.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${le.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let $e=0;$e<g;$e++)ue+=`
            let wValue${$e} = ${le.getByOffset(`${le.indicesToOffset(`${le.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${$e}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${$e}] * wValue${$e};`;return ue},q=()=>{if(w===0)return"";if(!y)throw new Error(`packInputAs4 ${y} is not true.`);let ue="";if(g===1){ue+="dotProd = dotProd";for(let $e=0;$e<w;$e++)ue+=`
            + ${_e.getByOffset(`x_offset + ${$e}`)} * ${le.getByOffset(`w_offset + ${$e}`)}`;ue+=";"}else if(g===2){if(w!==2)throw new Error(`Invalid inputChannelsRemainder ${w}.`);ue+=`
          let xValue = ${_e.getByOffset("x_offset")};
          let wValue = ${le.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ue},Y=`
            let outputIndices = ${he.offsetToIndices(`global_idx * ${$}`)};
            let batch = ${he.indicesGet("outputIndices",0)};
            let d1 = ${he.indicesGet("outputIndices",ve)};
            let r = ${he.indicesGet("outputIndices",pe)};
            let c = ${he.indicesGet("outputIndices",ke)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${he.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${re}(dyRCorner) + ${re}(wR)) / ${re}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${re}(uniforms.Dy_shape[${pe}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${re}(dyCCorner) + ${re}(wC)) / ${re}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${re}(uniforms.Dy_shape[${ke}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${y?`
                var x_offset = ${_e.indicesToOffset(`${_e.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g};
                var w_offset = ${le.indicesToOffset(`${le.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${y?4:g}) {
                  ${nt()}
                  inputChannel = inputChannel + ${y?4:g};
                }
                ${q()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${s?` + bias[d1 / ${$}]`:""};
            ${he.setByOffset("global_idx","value")};
          `;return`
    ${K.registerUniforms(ce).declareVariables(...oe,he)}
      ${K.mainStart()}
      ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};${g}${b}${$}${y}${w}`,inputDependencies:k},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:N}),getShaderSource:W}}}),Rh,Ah,Bh,ul,Dh,Ph,dl,Mh,Nh,Yw=x(()=>{Xw(),dr(),On(),Rh=(e,r,i,s,o,u)=>(e-1)*r+i+(s-1)*o+1-u,Ah=(e,r,i,s,o)=>{let u=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=u,i[o]=e-u):r==="SAME_LOWER"&&(i[s]=e-u,i[o]=u)},Bh=(e,r,i,s,o,u,d,c,f,m)=>{let g=e.length-2,y=m.length===0;f.length<g&&f.push(...Array(g-f.length).fill(0));let _=e[0],w=r[c?3:1]*o;for(let $=0,b=e.length-g-(c?1:0);$<g;++$,++b){let T=e[b],S=y?T*d[$]:m[$],k=Rh(T,d[$],u[$],r[b],i[$],S);Ah(k,s,u,$,$+g),y&&m.push(d[$]*(T-1)+f[$]+(r[b]-1)*i[$]+1-u[$]-u[$+g])}m.splice(0,0,_),m.splice(c?3:1,0,w)},ul=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((y,_)=>y*_,1)===0){i.length=0;for(let y=2;y<r[1].dims.length;++y)i.push(r[1].dims[y])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),u=e.outputShape.slice(),d=e.outputPadding.slice(),c=r[0].dims,f=e.dilations.slice();if(f.reduce((y,_)=>y+_,0)===0){let y=r[0].dims.length-2;f=new Array(y).fill(1)}let m=e.strides.slice();if(m.reduce((y,_)=>y+_,0)===0){let y=r[0].dims.length-2;m=new Array(y).fill(1)}Bh(c,i,f,e.autoPad,e.group,o,m,s,d,u);let g=Object.assign({},e);return Object.assign(g,{kernelShape:i,pads:o,outputPadding:d,outputShape:u,dilations:f,strides:m}),g},Dh=e=>{let r=Zo(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,u=e.group,d=e.kernelShape,c=e.pads,f=e.strides,m=e.wIsConst(),g=e.outputPadding,y=e.outputShape;return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,outputPadding:g,outputShape:y,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},Ph=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let u=e[0].dims.length-2;if(r.dilations.reduce((d,c)=>d+c,0)>0&&r.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(r.strides.reduce((d,c)=>d+c,0)>0&&r.strides.length!==u)throw new Error(`strides should be ${u}D`);if(r.pads.reduce((d,c)=>d+c,0)>0&&r.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(r.outputPadding.length!==u&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(r.kernelShape.reduce((d,c)=>d+c,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},dl=(e,r,i,s)=>{let o=e.kernelCustomData.wT??e.compute(Et(r[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=o);let u=[r[0],o];r.length===3&&u.push(r[2]),e.compute(Oh(u,i,s),{inputs:u})},Mh=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let u=r.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=r.strides;(d.length===0||d[0]===0)&&(d=[1]);let c=r.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],d=[1].concat(d),u=[1].concat(u),o=[1].concat(o);let f=r.outputPadding;f=[0].concat(f);let m=ul({...r,pads:c,strides:d,dilations:u,kernelShape:o,outputPadding:f},s);dl(e,s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Nh=(e,r)=>{if(Ph(e.inputs,r),e.inputs[0].dims.length===3)Mh(e,r);else{let i=ul(r,e.inputs);dl(e,e.inputs,i)}}}),Uh,Lh,Vh,Jw=x(()=>{fe(),me(),Le(),ye(),Uh=(e,r,i,s)=>{let o=M.size(r),u=r.length,d=U("input",e,u),c=ne("output",e,u),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),m=M.normalizeAxis(f,u),g=y=>{let _=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,w=ae("uniforms.input_shape","uniforms.axis",u),$=s.reverse?_+(s.exclusive?" + 1":""):"0",b=s.reverse?w:_+(s.exclusive?"":" + 1");return`
                ${y.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(d,c)}
                ${y.mainStart()}
                  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${c.offsetToIndices("global_idx")};
                  var sum = ${c.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${d.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${d.getByIndices("inputIndices")};
                  }
                  ${c.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:m},...se(r,r)]}),getShaderSource:g}},Lh=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(Uh(s,i,o,r),{inputs:[0]})},Vh=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ie({exclusive:r,reverse:i})}}),Wh,qh,Fh,Gh,jh,e1=x(()=>{fe(),me(),Le(),ye(),Wh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},qh=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let u=0;u<r;++u)o.push(i.indicesSet("a",e[u],`i[${u}]`));return o.push("return a;}"),o.join(`
`)},Fh=(e,r)=>{let i,s,o,u,d,c,f=r.format==="NHWC",m=r.blocksize,g=r.mode==="DCR";f?([i,s,o,u]=e.dims,d=g?[i,s,o,m,m,u/m**2]:[i,s,o,u/m**2,m,m],c=g?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,u]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],d=g?[i,m,m,u/m**2,s,o]:[i,u/m**2,m,m,s,o],c=g?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let y=e.reshape(d),_=y.dims.length,w=e.dataType,$=U("a",w,_),b=ne("output",w,_),T=S=>`
  ${S.registerUniform("output_size","u32").declareVariables($,b)}

  ${qh(c,_,$,b)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:S=>{let k=f?[i,s*m,o*m,u/m**2]:[i,u/m**2,s*m,o*m],z=M.size(k),I=y.dims,O=M.sortBasedOnPerm(I,c);return{outputs:[{dims:k,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(z/64)},programUniforms:[{type:12,data:z},...se(I,O)]}},getShaderSource:T}},Gh=(e,r)=>{Wh(e.inputs),e.compute(Fh(e.inputs[0],r))},jh=e=>Ie({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ma,ki,pl,Hh,Kh,Qh,Zh,cl,Xh,Yh,Jh,t1=x(()=>{fe(),me(),Le(),ye(),Ma="[a-zA-Z]|\\.\\.\\.",ki="("+Ma+")+",pl="^"+ki+"$",Hh="("+ki+",)*"+ki,Kh="^"+Hh+"$",Qh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},Zh=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(Kh)))throw new Error("Invalid LHS term");if(i.split(",").forEach((u,d)=>{let c=e[d].dims.slice();if(!u.match(RegExp(pl)))throw new Error("Invalid LHS term");let f=this.processTerm(u,!0,c,d);this.lhs.push(f)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!s.match(RegExp(ki)))throw new Error("Invalid RHS");(o=s.match(RegExp(Ma,"g")))==null||o.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,u=!1,d=[],c=0;if(!e.match(RegExp(pl))&&!r&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Ma,"g")),m=new Qh(s);return f==null||f.forEach((g,y)=>{if(g==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let _=o-f.length+1;if(_<0)throw new Error("Ellipsis out of bounds");if(d=i.slice(c,c+_),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let w=0;w<d.length;w++){let $=String.fromCharCode(48+w);m.addSymbol($,y+w),this.addSymbol($,i[c++],s)}}else m.addSymbol(g,y+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(g,i[c++],s)}),m}},cl=e=>e+"_max",Xh=(e,r,i,s)=>{let o=e.map(m=>m.length).map((m,g)=>U(`input${g}`,r,m)),u=M.size(s),d=ne("output",r,s.length),c=[...i.symbolToInfo.keys()].filter(m=>!i.rhs.symbolToIndices.has(m)),f=m=>{let g=[],y="var prod = 1.0;",_="var sum = 0.0;",w="sum += prod;",$=[],b=[],T=[],S=[],k=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((I,O)=>{var P;if(i.rhs.symbolToIndices.has(O)){let D=(P=i.rhs.symbolToIndices.get(O))==null?void 0:P[0];D!==void 0&&i.lhs.forEach((N,W)=>{if(I.inputIndices.includes(W)){let K=N.symbolToIndices.get(O);if(K===void 0)throw new Error("Invalid symbol error");K.forEach(ce=>{g.push(`${o[W].indicesSet(`input${W}Indices`,ce,d.indicesGet("outputIndices",D))}`)})}})}else i.lhs.forEach((D,N)=>{if(I.inputIndices.includes(N)){let W=D.symbolToIndices.get(O);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(K=>{$.push(`${o[N].indicesSet(`input${N}Indices`,K,`${O}`)}`)}),S.push(`prod *= ${o[N].getByIndices(`input${N}Indices`)};`)}}),b.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${cl(O)}; ${O}++) {`),T.push("}")});let z=k?[...g,`let sum = ${o.map((I,O)=>I.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...g,_,...b,...$,y,...S,w,...T];return`
            ${m.registerUniforms(c.map(I=>({name:`${cl(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${o.map((I,O)=>`var input${O}Indices: ${o[O].type.indices};`).join(`
`)}
            ${z.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let m=c.filter(y=>i.symbolToInfo.has(y)).map(y=>{var _;return{type:12,data:((_=i.symbolToInfo.get(y))==null?void 0:_.dimValue)||0}});m.push({type:12,data:u});let g=e.map((y,_)=>[...se(y)]).reduce((y,_)=>y.concat(_),m);return g.push(...se(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:g}},getShaderSource:f}},Yh=(e,r)=>{let i=new Zh(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((u,d)=>u.dims);e.compute(Xh(o,e.inputs[0].dataType,i,s))},Jh=e=>{let r=e.equation.replace(/\s+/g,"");return Ie({equation:r})}}),em,fl,tm,nm,rm,n1=x(()=>{fe(),me(),ye(),em=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},fl=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},tm=(e,r)=>e.length>r.length?fl(e,r):fl(r,e),nm=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=tm(r,i),o=e[0].dataType,u=o===9||M.size(r)===1,d=o===9||r.length>0&&r[r.length-1]%4===0?4:1,c=u||s.length>0&&s[s.length-1]%4===0?4:1,f=Math.ceil(M.size(s)/c),m=y=>{let _=U("input",o,r.length,d),w=ne("output",o,s.length,c),$;if(o===9){let b=(T,S,k="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${k}(${_.getByOffset(`index${S}`)}[component${S}]);
        `;$=`
        let outputOffset = global_idx * ${c};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${w.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${w.offsetToIndices(`global_idx * ${c}`)};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",w)};
        let data = ${w.type.value}(${_.getByOffset(`inputOffset / ${d}`)});
        ${w.setByOffset("global_idx","data")}
      }`;return`
    ${y.registerUniform("vec_size","u32").declareVariables(_,w)}
    ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},g=[{type:12,data:f},...se(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${d}${c}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g})}},rm=e=>{em(e.inputs),e.compute(nm(e.inputs),{inputs:[0]})}}),im,am,r1=x(()=>{fe(),me(),ye(),Qo(),im=e=>{let r=e[0].dataType,i=M.size(e[0].dims),s=M.size(e[1].dims),o=s%4===0,u=d=>{let c=U("x",r,[1],4),f=U("bias",r,[1],4),m=ne("y",r,[1],4),g=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],y=w=>`
      let bias${w}_offset: u32 = (global_idx * 4 + ${w}) % uniforms.bias_size;
      let bias${w} = ${f.getByOffset(`bias${w}_offset / 4`)}[bias${w}_offset % 4];`,_=o?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${y(0)}${y(1)}${y(2)}${y(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(g).declareVariables(c,f,m)}

    ${Ho(st(r))}

    ${d.mainStart(Br)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${_}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",Ko("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/Br/4)}})}},am=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?Uf(e):e.compute(im(e.inputs))}}),sm,om,lm,um,i1=x(()=>{fe(),me(),Le(),ye(),sm=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},om=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=M.normalizeAxis(r.axis,o),d=i.slice(0);d.splice(u,1,...s);let c=i[u],f=e[0].dataType===9?4:1,m=Math.ceil(M.size(d)/f),g=[{type:12,data:m},{type:6,data:c},{type:12,data:u},...se(e[0].dims,e[1].dims,d)],y=_=>{let w=U("data",e[0].dataType,e[0].dims.length,f),$=U("inputIndices",e[1].dataType,e[1].dims.length),b=ne("output",e[0].dataType,d.length,f),T=k=>{let z=s.length,I=`var indicesIndices${k}  = ${$.type.indices}(0);`;for(let O=0;O<z;O++)I+=`${z>1?`indicesIndices${k}[${O}]`:`indicesIndices${k}`} = ${d.length>1?`outputIndices${k}[uniforms.axis + ${O}]`:`outputIndices${k}`};`;I+=`
          var idx${k} = ${$.getByIndices(`indicesIndices${k}`)};
          if (idx${k} < 0) {
            idx${k} = idx${k} + uniforms.axisDimLimit;
          }
          var dataIndices${k} : ${w.type.indices};
        `;for(let O=0,P=0;O<o;O++)O===u?(I+=`${o>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = u32(idx${k});`,P+=z):(I+=`${o>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = ${d.length>1?`outputIndices${k}[${P}]`:`outputIndices${k}`};`,P++);return I},S;if(e[0].dataType===9){let k=(z,I,O="")=>`
          let outputIndices${I} = ${b.offsetToIndices(`outputOffset + ${I}u`)};
          ${T(I)};
          let offset${I} = ${w.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${z}[${I}] = ${O}(${w.getByOffset(`index${I}`)}[component${I}]);
        `;S=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${k("value",0,"u32")}
        ${k("value",1,"u32")}
        ${k("value",2,"u32")}
        ${k("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else S=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${w.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,$,b)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},lm=e=>Ie({axis:e.axis}),um=(e,r)=>{let i=e.inputs;sm(i),e.compute(om(e.inputs,r))}}),dm,pm,cm,a1=x(()=>{fe(),me(),ye(),dm=(e,r,i,s,o,u,d,c,f)=>{let m=[{type:12,data:u},{type:12,data:s},{type:12,data:o},{type:12,data:i},{type:12,data:d},{type:12,data:c},{type:12,data:f}],g=[u];m.push(...se(r.dims,g));let y=_=>{let w=U("indices_data",r.dataType,r.dims.length),$=ne("input_slice_offsets_data",12,1,1),b=[w,$],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${_.registerUniforms(T).declareVariables(...b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${o.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y},{inputs:[r],outputs:[-1]})[0]},pm=(e,r)=>{let i=e.inputs,s=i[0].dims,o=i[0].dataType,u=i[1].dims,d=u[u.length-1],c=M.sizeToDimension(u,u.length-1),f=M.sizeFromDimension(s,r.batchDims+d),m=M.sizeToDimension(s,r.batchDims),g=M.sizeFromDimension(s,r.batchDims),y=c/m,_=new Array(d),w=f;for(let I=0;I<d;++I)_[d-1-I]=w,w*=s[r.batchDims+d-1-I];let $=dm(e,i[1],_,r.batchDims,s,c,y,g,d),b=r.batchDims+d;if(b>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=u.slice(0,-1).concat(s.slice(b)),S=M.size(T),k=[{type:12,data:S},{type:12,data:f},...se(i[0].dims,$.dims,T)],z=I=>{let O=U("data",i[0].dataType,i[0].dims.length),P=U("slice_offsets",12,$.dims.length),D=ne("output",i[0].dataType,T.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,P,D)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:o}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:k}),getShaderSource:z},{inputs:[i[0],$]})},cm=e=>({batchDims:e.batch_dims,cacheKey:""})}),fm,hm,mm,gm,s1=x(()=>{fe(),me(),Le(),ye(),fm=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=M.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],u=e[2],d=e.length===4?e[3]:void 0;if(u.dims.length!==o.dims.length||!o.dims.map((c,f)=>f===i?Math.ceil(c/s)===u.dims[f]:c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((c,f)=>c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hm=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=M.normalizeAxis(r.gatherAxis,o),d=M.normalizeAxis(r.quantizeAxis,o),c=i.slice(0);c.splice(u,1,...s);let f=M.size(c),m=e[2].dataType,g=e[0].dataType===22,y=[{type:12,data:f},{type:12,data:d},{type:12,data:u},{type:12,data:r.blockSize},...se(...e.map((w,$)=>w.dims),c)],_=w=>{let $=U("data",e[0].dataType,e[0].dims.length),b=U("inputIndices",e[1].dataType,e[1].dims.length),T=U("scales",e[2].dataType,e[2].dims.length),S=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,k=ne("output",m,c.length),z=[$,b,T];S&&z.push(S);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${w.registerUniforms(I).declareVariables(...z,k)}
        ${w.mainStart()}
        let output_indices = ${k.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${k.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${k.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${k.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[u]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${c.length}; i++) {
          let index = ${k.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${st(m)}(quantized_data - zero_point) * scale;
        ${k.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((w,$)=>$!==1).map(w=>w.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(w,$)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:m}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:_}},mm=(e,r)=>{let i=e.inputs;fm(i,r),e.compute(hm(e.inputs,r))},gm=e=>Ie({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ym,vm,_m,wm,o1=x(()=>{fe(),me(),Le(),ye(),ym=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},vm=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,u=e[1].dims,d=e[1].dataType,c=M.normalizeAxis(r.axis,o),f=i[c],m=u.slice(0),g=M.size(m),y=U("input",s,o),_=U("indicesInput",d,u.length),w=ne("output",s,m.length),$=[{type:12,data:g},{type:6,data:f},{type:12,data:c}];return $.push(...se(i,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${w.offsetToIndices("global_idx")};

      var idx = ${_.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${y.type.indices}(outputIndices);
      ${y.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${y.getByIndices("inputIndices")};

      ${w.setByOffset("global_idx","value")};
  }`}},_m=e=>Ie({axis:e.axis}),wm=(e,r)=>{let i=e.inputs;ym(i),e.compute(vm(e.inputs,r))}}),$m,xm,bm,km,l1=x(()=>{fe(),me(),ye(),$m=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},xm=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,u,d]=Rp.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),c=[o,u];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,m=Math.ceil(u/f),g=Math.ceil(o/f),y=!0,_=M.size(c),w=[{type:12,data:y?m:_},{type:12,data:o},{type:12,data:u},{type:12,data:d},{type:1,data:r.alpha},{type:1,data:r.beta}],$=["type","type"];e.length===3&&(w.push(...se(e[2].dims)),$.push("rank")),w.push(...se(c));let b=S=>{let k="";r.transA&&r.transB?k="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?k="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?k="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(k="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let z=r.alpha===1?"":"value *= uniforms.alpha;",I=U("a",e[0].dataType,e[0].dims),O=U("b",e[1].dataType,e[1].dims),P=I.type.value,D=null,N=[I,O];e.length===3&&(D=U("c",e[2].dataType,e[2].dims.length),N.push(D));let W=ne("output",e[0].dataType,c.length);N.push(W);let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(K).declareVariables(...N)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${k}
    }

    ${z}
    ${D!=null?`let cOffset = ${D.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${P}(uniforms.beta) * ${D.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=S=>{let k=U("a",e[0].dataType,e[0].dims),z=U("b",e[1].dataType,e[1].dims),I=null,O=[k,z];e.length===3&&(I=U("c",e[2].dataType,e[2].dims.length),O.push(I));let P=ne("output",e[0].dataType,c.length);O.push(P);let D=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],N="",W="";r.transA&&r.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,N="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):r.transA&&!r.transB?(W=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,N="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!r.transA&&r.transB?(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,N="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!r.transA&&!r.transB&&(W=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,N="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let K=r.alpha===1?"":"value *= uniforms.alpha;";return`
  ${S.registerUniforms(D).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${k.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${z.type.storage}, ${f}>, ${f}>;
  ${S.mainStart([f,f,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${f};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${f};
    let num_tiles = (uniforms.K - 1) / ${f} + 1;
    var k_start = 0u;
    var value = ${P.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${W}
      k_start = k_start + ${f};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${f}; k++) {
        ${N}
      }
      workgroupBarrier();
    }

    ${K}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${P.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return y?{name:"GemmShared",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:m*g},programUniforms:w}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:b}},bm=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},km=(e,r)=>{$m(e.inputs),e.compute(xm(e.inputs,r))}}),on,gn,pr,cr,Sm,Em,Tm,Im,zm,Cm,Om,Rm,Am,Bm,u1=x(()=>{fe(),me(),Le(),ye(),[on,gn,pr,cr]=[0,1,2,3],Sm=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Em=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Tm=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Im=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,zm=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Cm=(e,r,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${r} {
     var pixel = ${r}(0);
     var indices = vec4<u32>(0);
     indices[${on}] = batch;
     indices[${gn}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${pr}] = u32(r);
            indices[${cr}] = u32(c);
          } else {
            return ${r}(0);
          }
        `;case"border":return`
          indices[${pr}] = u32(clamp(r, 0, H - 1));
          indices[${cr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${pr}] = gs_reflect(r, border[1], border[3]);
          indices[${cr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Om=(e,r,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${on}], indices[${gn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${on}], indices[${gn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${on}], indices[${gn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${on}], indices[${gn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${on}], indices[${gn}], border);

          let dx2 = ${r}(f32(x2) - x);
          let dx1 = ${r}(x - f32(x1));
          let dy2 = ${r}(f32(y2) - y);
          let dy1 = ${r}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${r}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${on}], indices[${gn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Rm=(e,r)=>{let i=U("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],o=U("grid",e[1].dataType,s.length,2),u=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];r.format==="NHWC"&&(u=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[on,gn,pr,cr]=[0,3,1,2]);let d=ne("output",e[0].dataType,u.length),c=i.type.value,f=M.size(u),m=[{type:12,data:f},...se(e[0].dims,s,u)],g=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(i,o,d)}
  ${Em}
  ${Tm(c)}
  ${Im(r)}
  ${zm(r)}
  ${Cm(i,c,r)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${pr}]);
      let W_in = i32(uniforms.x_shape[${cr}]);

      ${r.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${d.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${on}], indices[${pr}], indices[${cr}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Om(d,c,r)}
  }`;return{name:"GridSample",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:["type","type"]},getRunData:y=>{let _=M.size(u);return{outputs:[{dims:u,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:m}},getShaderSource:g}},Am=(e,r)=>{Sm(e.inputs),e.compute(Rm(e.inputs,r))},Bm=e=>Ie({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),pt,Dm,Pm,hl,Mm,Si,Nm,Um=x(()=>{fe(),me(),Le(),Bo(),Go(),ye(),On(),pt=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,Dm=(e,r)=>{let i=e[0],s=pt(e,1),o=pt(e,2),u=pt(e,3),d=pt(e,4),c=pt(e,5),f=pt(e,6),m=pt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let g=i.dims[0],y=i.dims[1],_=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],w=y,$=0,b=0,T=Math.floor(_/r.numHeads);if(f&&m&&M.size(f.dims)&&M.size(m.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==g||f.dims[1]!==r.numHeads||f.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==g||m.dims[1]!==r.numHeads||m.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=f.dims[2],b=f.dims[2]}else if(f&&M.size(f.dims)||m&&M.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(s&&M.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,w=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,w=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,w=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(u&&M.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let k=$+w,z=0;if(d&&M.size(d.dims)>0){z=8;let D=d.dims;throw D.length===1?D[0]===g?z=1:D[0]===3*g+2&&(z=3):D.length===2&&D[0]===g&&D[1]===k&&(z=5),z===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,O=_;if(o&&M.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(w!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=o.dims[2]}else{if(w!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=o.dims[1]*o.dims[3],I=!0}}let P=!1;if(d&&M.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(c&&M.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==g||c.dims[1]!==r.numHeads||c.dims[2]!==y||c.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:g,sequenceLength:y,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:k,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:_,vHiddenSize:O,headSize:T,vHeadSize:Math.floor(O/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:z,scale:r.scale,broadcastResPosBias:P,passPastInKv:I,qkvFormat:S}},Pm=e=>Ie({...e}),hl=Ie({perm:[0,2,1,3]}),Mm=(e,r,i,s,o,u,d)=>{let c=[s,o,u],f=M.size(c),m=[{type:12,data:f},{type:12,data:d},{type:12,data:u}],g=y=>{let _=ne("qkv_with_bias",r.dataType,c),w=U("qkv",r.dataType,c),$=U("bias",i.dataType,c),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${y.registerUniforms(b).declareVariables(w,$,_)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:g},{inputs:[r,i],outputs:[-1]})[0]},Si=(e,r,i,s,o,u,d,c)=>{let f=u;if(d&&M.size(d.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=Mm(e,u,d,r,s,i*o,c),f=f.reshape([r,s,i,o]),i===1||s===1?f:e.compute(Et(f,hl.perm),{inputs:[f],outputs:[-1]})[0]}else return u.dims.length===3&&(f=u.reshape([r,s,i,o])),i===1||s===1?f:e.compute(Et(f,hl.perm),{inputs:[f],outputs:[-1]})[0]},Nm=(e,r)=>{let i=Dm(e.inputs,r),s=e.inputs[0],o=pt(e.inputs,1),u=pt(e.inputs,2),d=pt(e.inputs,3),c=pt(e.inputs,4),f=pt(e.inputs,5),m=pt(e.inputs,6),g=pt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let y=o&&u&&o.dims.length===4&&u.dims.length===4,_=Si(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,d,0);if(y)return wi(e,_,o,u,c,void 0,m,g,f,i);if(!o||!u)throw new Error("key and value must be provided");let w=Si(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,d,i.hiddenSize),$=Si(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,u,d,2*i.hiddenSize);wi(e,_,w,$,c,void 0,m,g,f,i)}}),Lm,Vm,Wm,qm,ml,Fm,Gm,jm=x(()=>{fe(),me(),Le(),ye(),Lm=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Vm=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ie({numOutputs:s,axis:r.axis,splitSizes:i})},Wm=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,qm=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},ml=(e,r)=>{let i=e[0].dims,s=M.size(i),o=e[0].dataType,u=M.normalizeAxis(r.axis,i.length),d=new Array(r.numOutputs),c=U("input",o,i.length),f=new Array(r.numOutputs),m=[],g=[],y=0,_=[{type:12,data:s}];for(let $=0;$<r.numOutputs;$++){y+=r.splitSizes[$],f[$]=y;let b=i.slice();b[u]=r.splitSizes[$],g.push(b),d[$]=ne(`output${$}`,o,b.length),m.push({dims:g[$],dataType:e[0].dataType})}_.push({type:12,data:f},...se(i,...g));let w=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",f.length).declareVariables(c,...d)}
  ${Wm(f.length)}
  ${qm(d)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${c.offsetToIndices("global_idx")};
    var index = ${c.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ae("uniforms.size_in_split_axis","output_number - 1u",f.length)};
      ${c.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:_})}},Fm=(e,r)=>{Lm(e.inputs);let i=e.inputs.length===1?r:Vm(e.inputs,r);e.compute(ml(e.inputs,i),{inputs:[0]})},Gm=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Ie({axis:r,numOutputs:s,splitSizes:i})}}),Hm,Na,Km,Qm=x(()=>{fe(),me(),Le(),ye(),Hm=(e,r)=>{let[i,s,o,u]=e,{numHeads:d,rotaryEmbeddingDim:c}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!M.areEqual(s.dims,[])&&!M.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!M.areEqual(o.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],m=i.dims[i.dims.length-2],g=o.dims[0],y=M.sizeFromDimension(i.dims,1)/m,_=c===0?o.dims[1]*2:y/d;if(c>_)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(f!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(m!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(_/2!==o.dims[1]&&c/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(m>g)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Na=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:u}=r,d=e[0].dims[0],c=M.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],m=c/f,g=e[2].dims[1],y=o===0?g*2:m/s,_=new Array(d,f,m/y,y-g),w=M.computeStrides(_),$=[{type:1,data:u},{type:12,data:_},{type:12,data:w},...e[0].dims.length===3?new Array({type:12,data:[c,m,y,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,y,f*y,1]}):[],...se(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=T=>{let S=U("input",e[0].dataType,e[0].dims.length),k=U("position_ids",e[1].dataType,e[1].dims.length),z=U("cos_cache",e[2].dataType,e[2].dims.length),I=U("sin_cache",e[3].dataType,e[3].dims.length),O=ne("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:_.length},{name:"global_strides",type:"u32",length:w.length},{name:"input_output_strides",type:"u32",length:w.length}]),`
        ${T.declareVariables(S,k,z,I,O)}

        ${T.mainStart(Br)}
          let half_rotary_emb_dim = uniforms.${z.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${k.broadcastedIndicesToOffset("bsnh.xy",ne("",k.type.tensor,2))};
            let position_id =
                u32(${k.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${S.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ie({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(_)/Br)},programUniforms:$})}},Km=(e,r)=>{Hm(e.inputs,r),e.compute(Na(e.inputs,r))}}),Zm,Xm,gl,Ym,Jm,d1=x(()=>{Le(),fe(),Go(),Um(),jm(),On(),Qm(),ye(),Zm=(e,r)=>{if(r.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4];if(r.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(r.localWindowSize!==-1)throw new Error("Local attention is not supported");if(r.softcap!==0)throw new Error("Softcap is not supported");if(r.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(r.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],m=i.dims[1],g=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],y=m,_=0,w=!s||s.dims.length===0,$=Math.floor(w?g/(r.numHeads+2*r.kvNumHeads):g/r.numHeads);w&&(g=$*r.numHeads);let b=u&&u.dims.length!==0,T=d&&d.dims.length!==0;if(b&&u.dims.length===4&&u.dims[0]===f&&u.dims[1]!==r.kvNumHeads&&u.dims[2]===r.kvNumHeads&&u.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&T){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=u.dims[2]}else if(b||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(s&&s.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');y=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');y=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let k=0,z=!1,I=r.kvNumHeads?$*r.kvNumHeads:g;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(y!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=o.dims[2]}else{if(y!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=o.dims[1]*o.dims[3],z=!0}}let O=e.length>4?e[5]:void 0;if(O&&O.dims.length!==1&&O.dims[0]!==f)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:f,sequenceLength:m,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:$,vHeadSize:Math.floor(I/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:k,scale:r.scale,broadcastResPosBias:!1,passPastInKv:z,qkvFormat:S}},Xm=Ie({perm:[0,2,1,3]}),gl=(e,r,i)=>{let s=r,o=i.kvNumHeads;return r.dims.length===3&&i.kvSequenceLength!==0&&(s=r.reshape([i.batchSize,i.kvSequenceLength,o,i.headSize]),s=e.compute(Et(s,Xm.perm),{inputs:[s],outputs:[-1]})[0]),s},Ym=(e,r,i,s)=>{let o=7,u=["type","type"],d=[e*r],c=e*r,f=[{type:12,data:c},{type:12,data:r},{type:12,data:e}],m=g=>{let y=U("seq_lens",i.dataType,i.dims),_=U("total_seq_lens",s.dataType,s.dims),w=ne("pos_ids",o,d),$=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${g.registerUniforms($).declareVariables(y,_,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${_.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${y.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${w.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${r}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m}},Jm=(e,r)=>{var I;let i=Zm(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((I=e.inputs[1])==null?void 0:I.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],o=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,u=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,d=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,m=e.inputs.length>5?e.inputs[6]:void 0,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=Ie({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,g*i.headSize,g*i.headSize]}),[_,w,$]=!o&&!u?e.compute(ml([s],y),{inputs:[s],outputs:[-1,-1,-1]}):[s,o,u],b,T;if(r.doRotary){let O=e.compute(Ym(i.batchSize,i.sequenceLength,f,m),{inputs:[f,m],outputs:[-1]})[0],P=e.inputs[7],D=e.inputs[8],N=Ie({interleaved:r.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:r.scale}),W=[_,O,P,D],K=[-1];b=e.compute(Na(W,N),{inputs:W,outputs:K})[0],W.splice(0,1,w);let ce=Ie({interleaved:r.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:r.scale});T=e.compute(Na(W,ce),{inputs:W,outputs:K})[0]}let S=Si(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r.doRotary?b:_,void 0,0),k=gl(e,r.doRotary?T:w,i),z=gl(e,$,i);wi(e,S,k,z,void 0,void 0,d,c,void 0,i,f,m)}}),yl,eg,tg,ng,p1=x(()=>{fe(),me(),On(),ye(),yl=(e,r,i,s,o,u,d,c)=>{let f=Me(u),m=f===1?"f32":`vec${f}f`,g=f===1?"vec2f":`mat2x${f}f`,y=o*d,_=64;y===1&&(_=256);let w=[o,d,u/f],$=[o,d,2],b=["rank","type","type"],T=[];T.push(...se(w,$));let S=k=>{let z=U("x",r.dataType,3,f),I=U("scale",i.dataType,i.dims),O=U("bias",s.dataType,s.dims),P=ne("output",1,3,2),D=[z,I,O,P];return`
  var<workgroup> workgroup_shared : array<${g}, ${_}>;
  const workgroup_size = ${_}u;
  ${k.declareVariables(...D)}
  ${k.mainStart(_)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${m}(0);
    var squared_sum = ${m}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${m}(${z.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${g}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Cn("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${Cn("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:y},programUniforms:T}),getShaderSource:S},{inputs:[r,i,s],outputs:[-1]})[0]},eg=(e,r,i)=>{let s=r[0].dims,o=s,u=2,d=s[0],c=s[1],f=M.sizeFromDimension(s,u),m=Me(f),g=M.size(o)/m,y=yl(e,r[0],r[1],r[2],d,f,c,i.epsilon),_=[d,c,f/m],w=[d,c],$=["type","none"],b=T=>{let S=U("x",r[0].dataType,_.length,m),k=U("scale_shift",1,w.length,2),z=ne("output",r[0].dataType,_.length,m),I=[S,k,z];return`
  ${T.registerUniform("output_size","u32").declareVariables(...I)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${z.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${k.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${z.type.value}(scale_shift.x) + ${z.type.value}(scale_shift.y);
      ${z.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...se(_,w,_)]}),getShaderSource:b},{inputs:[r[0],y]})},tg=(e,r,i)=>{let s=r[0].dims,o=s,u=s[0],d=s[s.length-1],c=M.sizeFromDimension(s,1)/d,f=Me(d),m=M.size(o)/f,g=[{type:12,data:c},{type:12,data:Math.floor(d/f)}],y=["type","type"],_=!1,w=[0,s.length-1];for(let S=0;S<s.length-2;S++)_=_||s[S+1]!==1,w.push(S+1);_=_&&s[s.length-1]!==1;let $=_?e.compute(Et(e.inputs[0],w),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(S,k)=>s[w[k]])),b=yl(e,$,r[1],r[2],u,c,d,i.epsilon),T=S=>{let k=Qe(r[0].dataType),z=f===1?"vec2f":`mat${f}x2f`,I=D=>{let N=D===0?"x":"y",W=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${k}(${W}(scale.${N}))`;case 2:return`vec2<${k}>(${W}(scale[0].${N}, scale[1].${N}))`;case 4:return`vec4<${k}>(${W}(scale[0].${N}, scale[1].${N}, scale[2].${N}, scale[3].${N}))`;default:throw new Error(`Not supported compoents ${f}`)}},O=U("input",r[0].dataType,r[0].dims,f),P=ne("output",r[0].dataType,o,f);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${z}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${P.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:T},{inputs:[r[0],b]})},ng=(e,r)=>{r.format==="NHWC"?tg(e,e.inputs,r):eg(e,e.inputs,r)}}),rg,ig,ag,c1=x(()=>{fe(),me(),ye(),rg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ig=(e,r,i)=>{let s=r.simplified,o=e[0].dims,u=e[1],d=!s&&e[2],c=o,f=M.normalizeAxis(r.axis,o.length),m=M.sizeToDimension(o,f),g=M.sizeFromDimension(o,f),y=M.size(u.dims),_=d?M.size(d.dims):0;if(y!==g||d&&_!==g)throw new Error(`Size of X.shape()[axis:] == ${g}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${y} and bias size of ${_}`);let w=[];for(let O=0;O<o.length;++O)O<f?w.push(o[O]):w.push(1);let $=Me(g),b=["type","type"],T=[{type:12,data:m},{type:1,data:g},{type:12,data:Math.floor(g/$)},{type:1,data:r.epsilon}];d&&b.push("type");let S=i>1,k=i>2,z=O=>{let P=Qe(e[0].dataType),D=[U("x",e[0].dataType,e[0].dims,$),U("scale",u.dataType,u.dims,$)];d&&D.push(U("bias",d.dataType,d.dims,$)),D.push(ne("output",e[0].dataType,c,$)),S&&D.push(ne("mean_data_output",1,w)),k&&D.push(ne("inv_std_output",1,w));let N=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(N).declareVariables(...D)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${No("f32",$)};
    var mean_square_vector = ${No("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dr(P,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Cn("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Cn("mean_square_vector",$)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dr(P,$,"x[j + offset]")};
      let f32scale = ${Dr(P,$,"scale[j]")};
      output[j + offset] = ${D[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${Dr(P,$,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${k?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:c,dataType:e[0].dataType}];return S&&I.push({dims:w,dataType:1}),k&&I.push({dims:w,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${i};${s}`,inputDependencies:b},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:T}),getShaderSource:z}},ag=(e,r)=>{rg(e.inputs),e.compute(ig(e.inputs,r,e.outputCount))}}),sg,og,f1=x(()=>{me(),Jo(),rl(),sg=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},og=e=>{sg(e.inputs);let r=Ar.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&s<8)e.compute(Yo(e.inputs,{activation:""},r));else{let o=r[r.length-2],u=M.size(e.inputs[0].dims.slice(0,-2)),d=M.size(e.inputs[1].dims.slice(0,-2));if(u!==1&&o===1&&d===1){let c=e.inputs[0].reshape([1,u,s]),f=e.inputs[1].reshape([1,s,i]),m=[1,u,i],g=[c,f];e.compute(Ba(g,{activation:""},r,m),{inputs:g})}else e.compute(Ba(e.inputs,{activation:""},r))}}}),lg,ug,dg,pg,cg,h1=x(()=>{fe(),me(),Le(),ye(),lg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),u=r.blockSize/8*r.bits,d=e[1];if(!M.areEqual(d.dims,[r.n,o,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=e[2].dims;if(M.size(c)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let f=e[3].dims,m=r.n*(r.bits===8?o:Math.floor((o*r.bits+7)/8));if(M.size(f)!==m)throw new Error("zeroPoints input size error.")}},ug=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=M.size(c),m=e[1].dims[2]/4,g=e[0].dataType,y=Me(r.k),_=Me(m),w=Me(d),$=c.concat([o,d]),b=o>1&&d/w%2===0?2:1,T=M.size($)/w/b,S=64,k=[],z=[f,o,u/y],I=M.convertShape(e[1].dims).slice();I.splice(-1,1,m/_),k.push(...se(z)),k.push(...se(I)),k.push(...se(e[2].dims)),e.length===4&&k.push(...se(M.convertShape(e[3].dims)));let O=[f,o,d/w];k.push(...se(O));let P=D=>{let N=z.length,W=U("a",e[0].dataType,N,y),K=U("b",12,I.length,_),ce=U("scales",e[2].dataType,e[2].dims.length),re=[W,K,ce],pe=e.length===4?U("zero_points",12,e[3].dims.length):void 0;pe&&re.push(pe);let ke=O.length,ve=ne("output",e[0].dataType,ke,w),le=Qe(e[0].dataType),_e=(()=>{switch(y){case 1:return`array<${le}, 8>`;case 2:return`mat4x2<${le}>`;case 4:return`mat2x4<${le}>`;default:throw new Error(`${y}-component is not supported.`)}})(),oe=()=>{let q=`
          // reuse a data
            var input_offset = ${W.indicesToOffset(`${W.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_e};
            for (var j: u32 = 0; j < ${8/y}; j++) {
              a_data[j] = ${W.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Y=0;Y<w*b;Y++)q+=`
            b_value = ${_===1?`b${Y}_data`:`b${Y}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_e}(${Array.from({length:4},(ue,$e)=>`${le}(b_value_lower[${$e}]), ${le}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${y===1?`${_e}(${Array.from({length:8},(ue,$e)=>`(b_quantized_values[${$e}] - ${pe?`zero_point${Y}`:"zero_point"}) * scale${Y}`).join(", ")});`:`(b_quantized_values - ${_e}(${Array(8).fill(`${pe?`zero_point${Y}`:"zero_point"}`).join(",")})) * scale${Y};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Y/w)}]${w>1?`[${Y%w}]`:""} += ${Array.from({length:8/y},(ue,$e)=>`${y===1?`a_data[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `;return q},he=()=>{let q=`
            var col_index = col * ${w};
            ${pe?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${le}(8);`}
            `;for(let Y=0;Y<w*b;Y++)q+=`
            let scale${Y} = ${ce.getByOffset("col_index * nBlocksPerCol + block")};
            ${pe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${pe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Y} = ${le}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return q},nt=()=>{let q=`col_index = col * ${w};`;for(let Y=0;Y<w*b;Y++)q+=`
            let b${Y}_data = ${K.getByIndices(`${K.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_e};
            var b_dequantized_values: ${_e};`,q};return`
        var<workgroup> workgroup_shared: array<${ve.type.value}, ${b*S}>;
        ${D.declareVariables(...re,ve)}
        ${D.mainStart([S,1,1])}
          let output_indices = ${ve.offsetToIndices(`(global_idx / ${S}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${S}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/y};
            ${he()}
            for (var word: u32 = 0; word < ${m}; word += ${_}) {
              ${nt()}
              for (var i: u32 = 0; i < ${_}; i++) {
                ${oe()}
                word_offset += ${8/y};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${ve.type.value} = ${ve.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${ve.setByIndices(`${ve.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${y};${_};${w};${b};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:g}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:P}},dg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=M.size(c),m=e[1].dims[2]/4,g=e[0].dataType,y=Me(r.k),_=Me(m),w=c.concat([o,d]),$=128,b=d%8===0?8:d%4===0?4:1,T=$/b,S=T*_*8,k=S/y,z=S/r.blockSize,I=M.size(w)/b,O=[],P=[f,o,u/y],D=M.convertShape(e[1].dims).slice();D.splice(-1,1,m/_),O.push(...se(P)),O.push(...se(D)),O.push(...se(e[2].dims)),e.length===4&&O.push(...se(M.convertShape(e[3].dims)));let N=[f,o,d];O.push(...se(N));let W=K=>{let ce=P.length,re=U("a",e[0].dataType,ce,y),pe=U("b",12,D.length,_),ke=U("scales",e[2].dataType,e[2].dims.length),ve=[re,pe,ke],le=e.length===4?U("zero_points",12,e[3].dims.length):void 0;le&&ve.push(le);let _e=N.length,oe=ne("output",e[0].dataType,_e),he=Qe(e[0].dataType),nt=()=>{switch(y){case 1:return`
          let a_data0 = vec4<${he}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${he}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${he}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${he}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${y}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${re.type.value}, ${k}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${T}>, ${b}>;
        ${K.declareVariables(...ve,oe)}
        ${K.mainStart([T,b,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${z} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${k};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${k}; a_offset += ${$})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${re.getByIndices(`${re.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${re.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${z} + local_id.x;
            ${le?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${le.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${he}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${he}(8);`}
            let scale = ${ke.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${pe.getByIndices(`${pe.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/y};
            for (var i: u32 = 0; i < ${_}; i++) {
              ${nt()}
              let b_value = ${_===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${he}>(${Array.from({length:4},(q,Y)=>`${he}(b_value_lower[${Y}]), ${he}(b_value_upper[${Y}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${he}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(q,Y)=>`${`dot(a_data${Y}, b_dequantized_values[${Y}])`}`).join(" + ")};
              word_offset += ${8/y};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${y};${_};${T};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:g}],dispatchGroup:{x:I},programUniforms:O}),getShaderSource:W}},pg=(e,r)=>{lg(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(dg(e.inputs,r)):e.compute(ug(e.inputs,r))},cg=e=>Ie(e)}),fg,hg,mg,gg,yg,vg,_g,wg,$g,m1=x(()=>{fe(),me(),ye(),fg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},hg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${ae("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ae("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${ae("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},mg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ae("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ae("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ae("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ae("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},gg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ae("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ae("uniforms.x_shape",o,r)})) {
                  k = i32(${ae("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${ae("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},yg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ae("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${ae("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${ae("uniforms.x_shape",o,r)})) {
                  k -= i32(${ae("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${ae("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},vg=(e,r,i)=>{switch(i.mode){case 0:return hg(e,r,i.pads.length);case 1:return mg(e,r,i.pads.length);case 2:return gg(e,r,i.pads.length);case 3:return yg(e,r,i.pads.length);default:throw new Error("Invalid mode")}},_g=(e,r)=>{let i=M.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=M.size(i),u=[{type:12,data:o},{type:6,data:r.pads}],d=e.length>=3&&e[2].data;r.mode===0&&u.push({type:d?e[2].dataType:1,data:r.value}),u.push(...se(e[0].dims,i));let c=["rank"],f=m=>{let g=ne("output",e[0].dataType,i.length),y=U("x",e[0].dataType,s.length),_=y.type.value,w=vg(g,s.length,r),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&$.push({name:"constant_value",type:d?_:"f32"}),`
            ${m.registerUniforms($).declareVariables(y,g)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${g.offsetToIndices("global_idx")};

            var value = ${_}(0);
            ${w}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${d}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:u}),getShaderSource:f}},wg=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,u=new Int32Array(2*o).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)u[Number(c[f])]=Number(i[f]),u[Number(c[f])+o]=Number(i[f+c.length])}else i.forEach((c,f)=>u[Number(f)]=Number(c));let d=[];return u.forEach(c=>d.push(c)),{mode:r.mode,value:s,pads:d}}else return r},$g=(e,r)=>{fg(e.inputs);let i=wg(e.inputs,r);e.compute(_g(e.inputs,i),{inputs:[0]})}}),Ei,vl,_l,wl,$l,xg,bg,xl,bl,kg,Sg,kl,Eg,Tg,Sl,Ig,zg,Cg,Og,g1=x(()=>{Dt(),fe(),me(),ye(),Ei=e=>{if(X.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},vl=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let u=Object.hasOwnProperty.call(r,"dilations"),d=r.kernelShape.slice(),c=r.strides.slice(),f=u?r.dilations.slice():[],m=r.pads.slice();Ta.adjustPoolAttributes(i,o,d,c,f,m);let g=Ta.computePoolOutputShape(i,o,c,f,d,m,r.autoPad),y=Object.assign({},r);u?Object.assign(y,{kernelShape:d,strides:c,pads:m,dilations:f,cacheKey:r.cacheKey}):Object.assign(y,{kernelShape:d,strides:c,pads:m,cacheKey:r.cacheKey});let _=g.slice();return _.push(_.splice(1,1)[0]),[y,s?_:g]},_l=(e,r)=>{let i=r.format==="NHWC",s=M.size(e),o=M.size(r.kernelShape),u=[{type:12,data:s},{type:12,data:o}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let c=r.kernelShape[r.kernelShape.length-1],f=r.strides[r.strides.length-1],m=r.pads[r.pads.length/2-1],g=r.pads[r.pads.length-1],y=!!(m+g);u.push({type:12,data:c},{type:12,data:f},{type:12,data:m},{type:12,data:g}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let _=!1;if(r.kernelShape.length===2){let w=r.kernelShape[r.kernelShape.length-2],$=r.strides[r.strides.length-2],b=r.pads[r.pads.length/2-2],T=r.pads[r.pads.length-2];_=!!(b+T),u.push({type:12,data:w},{type:12,data:$},{type:12,data:b},{type:12,data:T}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,y,_]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=M.computeStrides(r.kernelShape);u.push({type:12,data:c},{type:12,data:r.pads},{type:12,data:r.strides}),d.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let f=r.pads.reduce((m,g)=>m+g);return[u,d,!!f,!1,!1]}},wl=(e,r,i,s,o,u,d,c,f,m,g,y)=>{let _=o.format==="NHWC",w=r.type.value,$=ne("output",r.type.tensor,s);if(o.kernelShape.length<=2){let b="",T="",S="",k=i-(_?2:1);if(g?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${k}] < 0 || xIndices[${k}]
                      >= uniforms.x_shape[${k}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${u}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${u}
                }`,o.kernelShape.length===2){let z=i-(_?3:2);y?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${z}] < 0 || xIndices[${z}] >= uniforms.x_shape[${z}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                `,S=`
              }
            `}return`
            ${e.registerUniforms(f).declareVariables(r,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${w}(${c});
              var pad = 0;
              ${T}
              ${b}
              ${S}
              ${d}

              output[global_idx] = value;
            }`}else{if(_)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=o.kernelShape.length,T=o.pads.length,S="";return m?S=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${u}
              }`:S=`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${u}
            `,`
            ${e.registerUniforms(f).declareVariables(r,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${w}(${c});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${ae("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${ae("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${i-b}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ae("uniforms.strides",`j - ${i-b}u`,b)}
                    + offsets[j - ${i-b}u] - ${ae("uniforms.pads","j - 2u",T)};
                  ${S}
              }
              ${d}

              output[global_idx] = value;
            }`}},$l=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,xg=e=>`${$l(e)};${e.countIncludePad}`,bg=e=>`${$l(e)};${e.storageOrder};${e.dilations}`,xl=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),bl=(e,r,i,s)=>{let[o,u]=vl(r,s,i),d=U("x",r.dataType,r.dims.length),c=d.type.value,f="value += x_val;",m="";o.countIncludePad?m+=`value /= ${c}(uniforms.kernelSize);`:m+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[g,y,_,w,$]=_l(u,o);g.push(...se(r.dims,u));let b=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${_};${w};${$}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(M.size(u)/64)},programUniforms:g}),getShaderSource:T=>wl(T,d,r.dims.length,u.length,o,f,m,0,y,_,w,$)}},kg=e=>{let r=e.count_include_pad!==0,i=xl(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:xg(s)}},Sg=(e,r)=>{Ei(e.inputs),e.compute(bl("AveragePool",e.inputs[0],!1,r))},kl={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Eg=e=>{let r=e.format;return{format:r,...kl,cacheKey:r}},Tg=(e,r)=>{Ei(e.inputs),e.compute(bl("GlobalAveragePool",e.inputs[0],!0,r))},Sl=(e,r,i,s)=>{let[o,u]=vl(r,s,i),d=`
      value = max(x_val, value);
    `,c="",f=U("x",r.dataType,r.dims.length),m=["rank"],[g,y,_,w,$]=_l(u,o);return g.push(...se(r.dims,u)),{name:e,shaderCache:{hint:`${s.cacheKey};${_};${w};${$}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(M.size(u)/64)},programUniforms:g}),getShaderSource:b=>wl(b,f,r.dims.length,u.length,o,d,c,r.dataType===10?-65504:-1e5,y,_,w,$)}},Ig=(e,r)=>{Ei(e.inputs),e.compute(Sl("MaxPool",e.inputs[0],!1,r))},zg=e=>{let r=e.storage_order,i=e.dilations,s=xl(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:bg(o)}},Cg=e=>{let r=e.format;return{format:r,...kl,cacheKey:r}},Og=(e,r)=>{Ei(e.inputs),e.compute(Sl("GlobalMaxPool",e.inputs[0],!0,r))}}),Rg,Ag,Bg,Dg,y1=x(()=>{fe(),me(),Le(),ye(),Rg=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,u)=>u===r.axis||o===e[0].dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ag=(e,r)=>{let i=M.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,u=e[0].dims,d=e[1].dataType,c=M.size(u),f=s===3||s===2,m=f?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,g=e[1].dims,y=e.length>2?e[2]:void 0,_=y?f?[Math.ceil(M.size(y.dims)/4)]:y.dims:void 0,w=g.length===0||g.length===1&&g[0]===1,$=w===!1&&g.length===1,b=Me(c),T=w&&(!f||b===4),S=T?b:1,k=T&&!f?b:1,z=U("input",f?12:s,m.length,k),I=U("scale",d,g.length),O=y?U("zero_point",f?12:s,_.length):void 0,P=ne("output",d,u.length,S),D=[z,I];O&&D.push(O);let N=[m,g];y&&N.push(_);let W=[{type:12,data:c/S},{type:12,data:i},{type:12,data:r.blockSize},...se(...N,u)],K=ce=>{let re=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ce.registerUniforms(re).declareVariables(...D,P)}
      ${ce.mainStart()}
          ${ce.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${f?`
            let input = ${z.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${z.getByOffset("global_idx")};`};

          // Set scale input
          ${w?`let scale_value= ${I.getByOffset("0")}`:$?`
            let scale_index = ${P.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?w?f?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:$?f?`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:f?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${f?o?"i32":"u32":z.type.value}(0);`};
      // Compute and write output
      ${P.setByOffset("global_idx",`${P.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:K,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(c/S/64),y:1,z:1},programUniforms:W})}},Bg=(e,r)=>{Rg(e.inputs,r),e.compute(Ag(e.inputs,r))},Dg=e=>Ie({axis:e.axis,blockSize:e.blockSize})}),Pg,Mg,Ng,v1=x(()=>{Dt(),fe(),ye(),Pg=(e,r,i)=>{let s=e===r,o=e<r&&i<0,u=e>r&&i>0;if(s||o||u)throw new Error("Range these inputs' contents are invalid.")},Mg=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),u=[o],d=o,c=[{type:12,data:d},{type:s,data:e},{type:s,data:i},...se(u)],f=m=>{let g=ne("output",s,u.length),y=g.type.value,_=[{name:"outputSize",type:"u32"},{name:"start",type:y},{name:"delta",type:y}];return`
        ${m.registerUniforms(_).declareVariables(g)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${y}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c})}},Ng=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),X.webgpu.validateInputContent&&Pg(r,i,s),e.compute(Mg(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),Ug,Lg,Vg,Wg,_1=x(()=>{fe(),me(),Le(),ye(),Ug=(e,r,i,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);let o=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,u=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${r}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${r}=${i};`;case"add":return s==="i32"||s==="u32"?`atomicAdd(&${r}, bitcast<${s}>(${i}));`:`
              ${o}bitcast<${s}>(oldValue) + (${i})${u}`;case"max":return s==="i32"||s==="u32"?`atomicMax(&${r}, bitcast<${s}>(${i}));`:`
                ${o}max(bitcast<f32>(oldValue), (${i}))${u}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${r}, bitcast<${s}>(${i}));`:`${o}min(bitcast<${s}>(oldValue), (${i}))${u}`;case"mul":return`${o}(bitcast<${s}>(oldValue) * (${i}))${u}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Lg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i,u=1,d=Math.ceil(M.sizeToDimension(s,s.length-1)/u),c=s[s.length-1],f=M.sizeFromDimension(i,c),m=[{type:12,data:d},{type:12,data:c},{type:12,data:f},...se(e[1].dims,e[2].dims,o)],g=y=>{let _=U("indices",e[1].dataType,e[1].dims.length),w=U("updates",e[2].dataType,e[2].dims.length,u),$=r.reduction!=="none"&&r.reduction!==""?Hp("output",e[0].dataType,o.length):ne("output",e[0].dataType,o.length,u);return`
      ${y.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(_,w,$)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Ug(r.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${r.cacheKey}_${r.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g}},Vg=e=>Ie({reduction:e.reduction}),Wg=(e,r)=>{e.compute(Lg(e.inputs,r),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),qg,Fg,Gg,El,jg,Hg,Kg,Qg,Zg,Xg,Yg,Jg,Tl,ey,ty,ny,ry,iy,ay,sy,w1=x(()=>{fe(),me(),Le(),ye(),qg=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(r.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Fg=(e,r,i)=>{r.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return r.forEach((o,u)=>s[o]=e[u]),s},Gg=(e,r,i,s,o,u)=>{let[d,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],m=e[0].dims.length;if(d>0&&e.length>d&&e[d].dims.length>0)e[d].getFloat32Array().forEach(g=>u.push(g));else if(r.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(g=>s.push(g)),s.length!==0&&s.length!==m&&i>=18&&s.length!==r.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");qg(s,r),r.axes.length>0&&Fg(s,r.axes,m).forEach((g,y)=>s[y]=g)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(g=>o.push(Number(g))),o.length!==0&&o.length!==m&&i>=18&&o.length!==r.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(s.length!==0&&s.length!==r.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==r.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},El=(e,r,i,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${r});
  let whole = ${s}(big / (${i}));
  let fract = ${s}(big % (${i})) / ${s}(${i});
  return whole + fract;
`,jg=(e,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${r}(xResized) / ${r}(xScale);
          } else {
            ${El("xResized","lengthOriginal","lengthResized",r)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${El("xResized","lengthOriginal - 1","lengthResized - 1",r)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Hg=(e,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Kg=(e,r,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return r.length>0?(r.forEach((u,d)=>{s[u]=o[d],s[d+i]=o[r.length+d]}),s):o},Qg=(e,r,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(u=>o.push(u)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((u,d)=>o[u]=i[d])}else i.forEach(u=>o.push(u));else{if(r.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((u,d)=>Math.round(u*r[d]))}return o},Zg=(e,r,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(u=>r[u]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(u=>r[u]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(u=>r[u]=s),i.axes.forEach(u=>o[u]=Math.round(e[u]*r[u]))):(r.fill(s,0,r.length),o.forEach((u,d)=>o[d]=Math.round(u*r[d]))),o},Xg=(e,r,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ae("uniforms.scales","i",s)};
        var roi_low = ${ae("uniforms.roi","i",o)};
        var roi_hi = ${ae("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ae("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Yg=(e,r,i,s,o,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ae("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ae("uniforms.roi","i",u)};
          var roi_hi = ${ae("uniforms.roi",`i + ${i.length}`,u)};
          var input_shape_i = ${ae("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${d} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Jg=(e,r)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,Tl=(e,r,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",r,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",ey=(e,r,i,s,o)=>{let[u,d,c,f]=i.length===2?[-1,0,1,-1]:[0,2,3,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(row, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(col, ${i[c]} - 1))`)};
      ${Tl(e,f,u,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${m} = originalIndices[${d}];
      var col:${m} = originalIndices[${c}];
      ${s?`if (row < 0 || row > (${i[d]} - 1) || col < 0 || col > (${i[c]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${i[d]} - 1));
      col = max(0, min(col, ${i[c]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${f}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${u}])`:"0"};
      var x11: ${m} = getInputValue(batch, channel, row1, col1);
      var x12: ${m} = getInputValue(batch, channel, row1, col2);
      var x21: ${m} = getInputValue(batch, channel, row2, col1);
      var x22: ${m} = getInputValue(batch, channel, row2, col2);
      var dx1: ${m} = abs(row - ${m}(row1));
      var dx2: ${m} = abs(${m}(row2) - row);
      var dy1: ${m} = abs(col - ${m}(col1));
      var dy2: ${m} = abs(${m}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ty=(e,r,i,s,o,u,d,c,f,m)=>{let g=i.length===2,[y,_]=g?[0,1]:[2,3],w=e.type.value,$=b=>{let T=b===y?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${w} {
        var output_index = ${r.indicesGet("output_indices",b)};
        var originalIdx: ${w} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[b]},
        ${s[b]}, ${i[b]}, ${u[b]}, ${u[b]} + ${i.length});
        var fractOriginalIdx: ${w} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${c} && (originalIdx < 0 || originalIdx > (${i[b]} - 1))) {
          return ${f};
        }
        var data: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${w} = originalIdx + ${w}(i);
          if (${T} < 0 || ${T} >= ${i[b]}) {
            ${m?`coefs[i + 1] = 0.0;
                        continue;`:c?`return ${f};`:`${T} = max(0, min(${T}, ${i[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${T})`)};
          data[i + 1] = ${b===y?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(y)};
    ${$(_)};
  fn getCubicInterpolationCoefs(s: ${w}) -> array<${w}, 4> {
    var absS = abs(s);
    var coeffs: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${w} = 1.0 - absS;
    var twoMinusAbsS: ${w} = 2.0 - absS;
    var onePlusAbsS: ${w} = 1.0 + absS;
    coeffs[0] = ((${d} * onePlusAbsS - 5 * ${d}) * onePlusAbsS + 8 * ${d}) * onePlusAbsS - 4 * ${d};
    coeffs[1] = ((${d} + 2) * absS - (${d} + 3)) * absS * absS + 1;
    coeffs[2] = ((${d} + 2) * oneMinusAbsS - (${d} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${d} * twoMinusAbsS - 5 * ${d}) * twoMinusAbsS + 8 * ${d}) * twoMinusAbsS - 4 * ${d};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${w}, 4>, coefs: array<${w}, 4>) -> ${w} {
    var coefsSum: ${w} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${w} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ny=(e,r,i,s,o)=>{let[u,d,c,f,m]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(depth, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(height, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(width, ${i[f]} - 1))`)};
      ${Tl(e,m,u,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${g} = originalIndices[${d}];
      var height:${g} = originalIndices[${c}];
      var width:${g} = originalIndices[${f}];
      ${s?`if (depth < 0 || depth > (${i[d]} - 1) || height < 0 || height > (${i[c]} - 1) || width < 0 || (width > ${i[f]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${i[d]} - 1));
      height = max(0, min(height, ${i[c]} - 1));
      width = max(0, min(width, ${i[f]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${u}])`:"0"};

      var x111: ${g} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${g} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${g} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${g} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${g} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${g} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${g} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${g} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${g} = abs(depth - ${g}(depth1));
      var dx2: ${g} = abs(${g}(depth2) - depth);
      var dy1: ${g} = abs(height - ${g}(height1));
      var dy2: ${g} = abs(${g}(height2) - height);
      var dz1: ${g} = abs(width - ${g}(width1));
      var dz2: ${g} = abs(${g}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ry=(e,r,i,s,o,u)=>{let d=e.dims,c=Kg(u,r.axes,d.length),f=Qg(d,s,o,r.axes),m=s.slice();s.length===0&&(m=d.map((k,z)=>k===0?1:f[z]/k),r.keepAspectRatioPolicy!=="stretch"&&(f=Zg(d,m,r)));let g=ne("output",e.dataType,f.length),y=U("input",e.dataType,d.length),_=M.size(f),w=d.length===f.length&&d.every((k,z)=>k===f[z]),$=r.coordinateTransformMode==="tf_crop_and_resize",b=r.extrapolationValue,T=y.type.value,S=k=>`
      ${w?"":`
      ${jg(r.coordinateTransformMode,T)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${Jg(y,d)};
              ${Hg(r.nearestMode,i,T)};
              ${Yg(y,g,d,f,m.length,c.length,$)};
              `;case"linear":return`
              ${Xg(g,d,f,m.length,c.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${ey(y,g,d,$,b)}`;if(d.length===3||d.length===5)return`${ny(y,g,d,$,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${ty(y,g,d,f,m,c,r.cubicCoeffA,$,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${k.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",c.length).declareVariables(y,g)}
      ${k.mainStart()}
        ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${w?"output[global_idx] = input[global_idx];":`
        let output_indices = ${g.offsetToIndices("global_idx")};
        var input_indices: ${y.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${y.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${m.length>0?r.mode==="cubic"?m:m.length:""}|${o.length>0?o:""}|${c.length>0?c:""}|${w}|${r.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},{type:1,data:m},{type:1,data:c},...se(d,f)]})}},iy=e=>{let r=e.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]},ay=(e,r)=>{let i=[],s=[],o=[],u=iy(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Gg(e.inputs,r,u,i,s,o),e.compute(ry(e.inputs[0],r,u,i,s,o),{inputs:[0]})},sy=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,u=e.excludeOutside!==0,d=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,m=e.nearestMode===""?"simple":e.nearestMode;return Ie({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:c,mode:f,nearestMode:m})}}),oy,ly,uy,$1=x(()=>{fe(),me(),ye(),oy=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],u=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let d=e[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let d=e[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},ly=(e,r,i,s)=>{let o=r.simplified,u=e[0].dims,d=M.size(u),c=u,f=d,m=u.slice(-1)[0],g=s?u.slice(0,-1).concat(1):[],y=!o&&e.length>3,_=e.length>4,w=s&&i>1,$=s&&i>2,b=i>3,T=64,S=Me(m),k=[{type:12,data:f},{type:12,data:S},{type:12,data:m},{type:1,data:r.epsilon}],z=O=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],D=[U("x",e[0].dataType,e[0].dims,S),U("skip",e[1].dataType,e[1].dims,S),U("gamma",e[2].dataType,e[2].dims,S)];y&&D.push(U("beta",e[3].dataType,e[3].dims,S)),_&&D.push(U("bias",e[4].dataType,e[4].dims,S)),D.push(ne("output",e[0].dataType,c,S)),w&&D.push(ne("mean_output",1,g)),$&&D.push(ne("inv_std_output",1,g)),b&&D.push(ne("input_skip_bias_sum",e[0].dataType,c,S));let N=Qe(e[0].dataType),W=Qe(1,S);return`

      ${O.registerUniforms(P).declareVariables(...D)}
      var<workgroup> sum_shared : array<${W}, ${T}>;
      var<workgroup> sum_squared_shared : array<${W}, ${T}>;

      ${O.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${_?"bias[offset1d + i]":N+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Dr(N,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Cn("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Cn("square_sum",S)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${w?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${N}(mean)`}) *
            ${N}(inv_std_dev) * gamma[offset1d + i]
            ${y?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:c,dataType:e[0].dataType}];return i>1&&I.push({dims:g,dataType:1}),i>2&&I.push({dims:g,dataType:1}),i>3&&I.push({dims:u,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${w};${$};${b}`,inputDependencies:e.map((O,P)=>"type")},getShaderSource:z,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(f/m)},programUniforms:k})}},uy=(e,r)=>{oy(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(ly(e.inputs,r,e.outputCount,!1),{outputs:i})}}),dy,Ti,py,Il,cy,fy,hy,my,x1=x(()=>{fe(),me(),Le(),ye(),dy=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ti=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},py=(e,r)=>{if(e.length>1){let i=Ti(e,1),s=Ti(e,2),o=Ti(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ie({starts:i,ends:s,axes:o})}else return r},Il=(e,r,i,s,o)=>{let u=e;return e<0&&(u+=i[s[r]]),o[r]<0?Math.max(0,Math.min(u,i[s[r]]-1)):Math.max(0,Math.min(u,i[s[r]]))},cy=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${ae("uniforms.input_shape","i",i.length)};
            let steps_i = ${ae("uniforms.steps","i",i.length)};
            let signs_i = ${ae("uniforms.signs","i",i.length)};
            let starts_i = ${ae("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,fy=(e,r)=>{let i=e[0].dims,s=M.size(i),o=r.axes.length>0?M.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],u=Ti(e,4);u.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(o.length).fill(1));let d=r.starts.map((S,k)=>Il(S,k,i,o,u)),c=r.ends.map((S,k)=>Il(S,k,i,o,u));if(o.length!==d.length||o.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let S=0;S<i.length;++S)o.includes(S)||(d.splice(S,0,0),c.splice(S,0,i[S]),u.splice(S,0,1));let f=u.map(S=>Math.sign(S));u.forEach((S,k,z)=>{if(S<0){let I=(c[k]-d[k])/S,O=d[k],P=O+I*u[k];d[k]=P,c[k]=O,z[k]=-S}});let m=i.slice(0);o.forEach((S,k)=>{m[S]=Math.ceil((c[S]-d[S])/u[S])});let g={dims:m,dataType:e[0].dataType},y=ne("output",e[0].dataType,m.length),_=U("input",e[0].dataType,e[0].dims.length),w=M.size(m),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:u.length}],b=[{type:12,data:w},{type:12,data:d},{type:6,data:f},{type:12,data:u},...se(e[0].dims,m)],T=S=>`
      ${S.registerUniforms($).declareVariables(_,y)}
        ${cy(_,y,i)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${y.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${y.setByOffset("global_idx",_.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[g],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:b})}},hy=(e,r)=>{dy(e.inputs,r);let i=py(e.inputs,r);e.compute(fy(e.inputs,i),{inputs:[0]})},my=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ie({starts:r,ends:i,axes:s})}}),gy,yy,vy,_y,b1=x(()=>{fe(),me(),Le(),On(),ye(),gy=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},yy=(e,r)=>{let i=e.inputs[0],s=i.dims,o=M.size(s),u=s.length,d=M.normalizeAxis(r.axis,u),c=d<s.length-1,f,m=[];c?(m=Array.from({length:u},(D,N)=>N),m[d]=u-1,m[u-1]=d,f=e.compute(Et(i,m),{inputs:[i],outputs:[-1]})[0]):f=i;let g=f.dims,y=g[u-1],_=o/y,w=Me(y),$=y/w,b=64;_===1&&(b=256);let T=(D,N)=>N===4?`max(max(${D}.x, ${D}.y), max(${D}.z, ${D}.w))`:N===2?`max(${D}.x, ${D}.y)`:N===3?`max(max(${D}.x, ${D}.y), ${D}.z)`:D,S=U("x",f.dataType,f.dims,w),k=ne("result",f.dataType,f.dims,w),z=S.type.value,I=Qe(f.dataType)==="f32"?`var threadMax = ${z}(-3.402823e+38f);`:`var threadMax = ${z}(-65504.0h);`,O=D=>`
      var<workgroup> rowMaxShared : ${z};
      var<workgroup> rowSumShared : ${z};
      var<workgroup> threadShared : array<${z}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${z} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${z}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${D.registerUniform("packedCols","i32").declareVariables(S,k)}
      ${D.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${z}(${T("threadShared[0]",w)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${z}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${z}(${Cn("threadShared[0]",w)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${z}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${w};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:g,dataType:f.dataType}],dispatchGroup:{x:_},programUniforms:[{type:6,data:$}]}),getShaderSource:O},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(Et(P,m),{inputs:[P]})},vy=(e,r)=>{gy(e.inputs),yy(e,r)},_y=e=>Ie({axis:e.axis})}),zl,wy,$y,xy,by,k1=x(()=>{fe(),me(),ye(),zl=e=>Array.from(e.getBigInt64Array(),Number),wy=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(zl(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},$y=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},xy=(e,r)=>{let i=e[0].dims,s=r??zl(e[1]),o=$y(i,s),u=M.size(o),d=e[0].dataType,c=U("input",d,i.length),f=ne("output",d,o.length),m=g=>`
      const inputShape = ${c.indices(...i)};
      ${g.registerUniform("output_size","u32").declareVariables(c,f)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${f.offsetToIndices("global_idx")};
      var input_indices: ${c.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${c.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${f.indicesGet("output_indices","i")}  % input_dim_i;

        ${c.indicesSet("input_indices","i","input_dim_value")}
      }
      ${f.setByOffset("global_idx",c.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...se(e[0].dims,o)]}),getShaderSource:m}},by=e=>{wy(e.inputs),e.compute(xy(e.inputs),{inputs:[0]})}}),ky,Sy,Ey,S1=x(()=>{fe(),me(),ye(),ky=(e,r,i,s,o)=>{let u=ne("output_data",o,i.length,4),d=U("a_data",r[1].dataType,r[1].dims.length,4),c=U("b_data",r[2].dataType,r[2].dims.length,4),f=U("c_data",r[0].dataType,r[0].dims.length,4),m,g=(y,_,w)=>`select(${_}, ${y}, ${w})`;if(!s)m=u.setByOffset("global_idx",g(d.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let y=(_,w,$="")=>{let b=`a_data[index_a${w}][component_a${w}]`,T=`b_data[index_b${w}][component_b${w}]`,S=`bool(c_data[index_c${w}] & (0xffu << (component_c${w} * 8)))`;return`
            let output_indices${w} = ${u.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offset_a${w} = ${d.broadcastedIndicesToOffset(`output_indices${w}`,u)};
            let offset_b${w} = ${c.broadcastedIndicesToOffset(`output_indices${w}`,u)};
            let offset_c${w} = ${f.broadcastedIndicesToOffset(`output_indices${w}`,u)};
            let index_a${w} = offset_a${w} / 4u;
            let index_b${w} = offset_b${w} / 4u;
            let index_c${w} = offset_c${w} / 4u;
            let component_a${w} = offset_a${w} % 4u;
            let component_b${w} = offset_b${w} % 4u;
            let component_c${w} = offset_c${w} % 4u;
            ${_}[${w}] = ${$}(${g(b,T,S)});
          `};o===9?m=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:m=`
            ${y("output_data[global_idx]",0)}
            ${y("output_data[global_idx]",1)}
            ${y("output_data[global_idx]",2)}
            ${y("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(f,d,c,u)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${m}
      }`},Sy=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,u=!(M.areEqual(r,i)&&M.areEqual(i,s)),d=r,c=M.size(r);if(u){let m=Ar.calcShape(Ar.calcShape(r,i,!1),s,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,c=M.size(d)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>ky(m,e,d,u,o),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...se(s,r,i,d)]})}},Ey=e=>{e.compute(Sy(e.inputs))}}),Ty,E1=x(()=>{Lw(),Go(),Vw(),Ww(),qw(),Fw(),Gw(),Zw(),Yw(),Jw(),e1(),t1(),n1(),r1(),i1(),a1(),s1(),o1(),l1(),u1(),d1(),p1(),c1(),f1(),h1(),Um(),m1(),g1(),y1(),v1(),_1(),Wo(),w1(),Qm(),$1(),x1(),b1(),jm(),k1(),On(),Qo(),S1(),Ty=new Map([["Abs",[of]],["Acos",[lf]],["Acosh",[uf]],["Add",[Zf]],["ArgMax",[Gc,Fo]],["ArgMin",[Fc,Fo]],["Asin",[df]],["Asinh",[pf]],["Atan",[cf]],["Atanh",[ff]],["Attention",[Xc]],["AveragePool",[Sg,kg]],["BatchNormalization",[tf]],["BiasAdd",[af]],["BiasSplitGelu",[Hf]],["Cast",[mf,hf]],["Ceil",[vf]],["Clip",[yf]],["Concat",[dh,ph]],["Conv",[ll,sl]],["ConvTranspose",[Nh,Dh]],["Cos",[_f]],["Cosh",[wf]],["CumSum",[Lh,Vh]],["DepthToSpace",[Gh,jh]],["DequantizeLinear",[Bg,Dg]],["Div",[Xf]],["Einsum",[Yh,Jh]],["Elu",[$f,$i]],["Equal",[Yf]],["Erf",[xf]],["Exp",[bf]],["Expand",[rm]],["FastGelu",[am]],["Floor",[kf]],["FusedConv",[ll,sl]],["Gather",[um,lm]],["GatherElements",[wm,_m]],["GatherBlockQuantized",[mm,gm]],["GatherND",[pm,cm]],["Gelu",[Sf]],["Gemm",[km,bm]],["GlobalAveragePool",[Tg,Eg]],["GlobalMaxPool",[Og,Cg]],["Greater",[nh]],["GreaterOrEqual",[ih]],["GridSample",[Am,Bm]],["GroupQueryAttention",[Jm]],["HardSigmoid",[Af,Rf]],["InstanceNormalization",[ng]],["LayerNormalization",[ag]],["LeakyRelu",[Ef,$i]],["Less",[rh]],["LessOrEqual",[ah]],["Log",[Vf]],["MatMul",[og]],["MatMulNBits",[pg,cg]],["MaxPool",[Ig,zg]],["Mul",[Jf]],["MultiHeadAttention",[Nm,Pm]],["Neg",[If]],["Not",[Tf]],["Pad",[$g]],["Pow",[eh]],["QuickGelu",[Ff,$i]],["Range",[Ng]],["Reciprocal",[zf]],["ReduceMin",[Uc]],["ReduceMean",[Bc]],["ReduceMax",[Nc]],["ReduceSum",[Vc]],["ReduceProd",[Lc]],["ReduceL1",[Dc]],["ReduceL2",[Pc]],["ReduceLogSum",[qc]],["ReduceLogSumExp",[Mc]],["ReduceSumSquare",[Wc]],["Relu",[Cf]],["Resize",[ay,sy]],["RotaryEmbedding",[Km]],["ScatterND",[Wg,Vg]],["Sigmoid",[Of]],["Sin",[Bf]],["Sinh",[Df]],["Slice",[hy,my]],["SkipLayerNormalization",[uy]],["Split",[Fm,Gm]],["Sqrt",[Pf]],["Softmax",[vy,_y]],["Sub",[th]],["Tan",[Mf]],["Tanh",[Nf]],["ThresholdedRelu",[Lf,$i]],["Tile",[by]],["Transpose",[tc,nc]],["Where",[Ey]]])}),Iy,T1=x(()=>{Dt(),mn(),ye(),Iy=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){qt(e.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of r)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of i)c.push({binding:c.length,resource:{buffer:m.buffer}});o&&c.push({binding:c.length,resource:o});let f=u.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(e.computePipeline),d.setBindGroup(0,f),d.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Bt(e.programInfo.name)}dispose(){}build(e,r){qt(e.name);let i=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{i.features.has(m.feature)&&s.push(`enable ${m.extension};`)});let o=Qp(r,this.backend.device.limits),u=e.getShaderSource(o),d=`${s.join(`
`)}
${o.additionalImplementations}
${u}`,c=i.createShaderModule({code:d,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${d}`);let f=i.createComputePipeline({compute:{module:c,entryPoint:"main"},layout:"auto",label:e.name});return Bt(e.name),{programInfo:e,computePipeline:f,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let u=r*i*s,d=Math.ceil(Math.sqrt(u));if(d>o){if(d=Math.ceil(Math.cbrt(u)),d>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),zy={};R(zy,{WebGpuBackend:()=>Ay});var Cy,Oy,Ry,Ay,I1=x(()=>{Dt(),fe(),mn(),Dp(),Nw(),E1(),T1(),Cy=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let u=e[s].dims.length;i.push(`${o};${u}`);break}case"dims":{let u=e[s].dims.join(",");i.push(`${o};${u}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},Oy=(e,r,i)=>{var o,u;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${Cy(r,((u=e.shaderCache)==null?void 0:u.inputDependencies)??new Array(r.length).fill("dims"))}`,s},Ry=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ay=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},o=u=>r.features.has(u)&&i.push(u)&&!0;o("chromium-experimental-timestamp-query-inside-passes")||o("timestamp-query"),o("shader-f16"),o("subgroups"),this.device=await r.requestDevice(s),this.adapterInfo=new Ry(r.info||await r.requestAdapterInfo()),this.gpuDataManager=Gp(this),this.programManager=new Iy(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,So(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;qt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let u=i[o],d=u.kernelId,c=this.kernels.get(d),f=c.kernelType,m=c.kernelName,g=u.programName,y=u.inputTensorViews,_=u.outputTensorViews,w=r[o*2],$=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=w);let b=Number(w-this.queryTimeBase),T=Number($-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:y.map(S=>({dims:S.dims,dataType:hn(S.dataType)})),outputsMetadata:_.map(S=>({dims:S.dims,dataType:hn(S.dataType)})),kernelId:d,kernelType:f,kernelName:m,programName:g,startTime:b,endTime:T});else{let S="";y.forEach((z,I)=>{S+=`input[${I}]: [${z.dims}] | ${hn(z.dataType)}, `});let k="";_.forEach((z,I)=>{k+=`output[${I}]: [${z.dims}] | ${hn(z.dataType)}, `}),console.log(`[profiling] kernel "${d}|${f}|${m}|${g}" ${S}${k}start time: ${b} ns, execution time: ${T-b} ns`)}mi("GPU",`${g}::${w}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),Bt()}run(e,r,i,s,o,u){qt(e.name);let d=[];for(let k=0;k<r.length;++k){let z=r[k].data;if(z===0)continue;let I=this.gpuDataManager.get(z);if(!I)throw new Error(`no GPU data for input: ${z}`);d.push(I)}let{outputs:c,dispatchGroup:f,programUniforms:m}=e.getRunData(r),g=i.length===0?c.map((k,z)=>z):i;if(g.length!==c.length)throw new Error(`Output size ${g.length} must be equal to ${c.length}.`);let y=[],_=[];for(let k=0;k<c.length;++k){if(!Number.isInteger(g[k])||g[k]<-3||g[k]>=u)throw new Error(`Invalid output index: ${g[k]}`);if(g[k]===-3)continue;let z=g[k]===-1,I=g[k]===-2,O=z||I?o(c[k].dataType,c[k].dims):s(g[k],c[k].dataType,c[k].dims);if(y.push(O),O.data===0)continue;let P=this.gpuDataManager.get(O.data);if(!P)throw new Error(`no GPU data for output: ${O.data}`);if(z&&this.temporaryData.push(P),I){let D=this.kernelPersistentData.get(this.currentKernelId);D||(D=[],this.kernelPersistentData.set(this.currentKernelId,D)),D.push(P)}_.push(P)}if(d.length!==r.length||_.length!==y.length){if(_.length===0)return Bt(e.name),y;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let w;if(m){let k=0,z=[];m.forEach(D=>{let N=typeof D.data=="number"?[D.data]:D.data;if(N.length===0)return;let W=D.type===10?2:4,K,ce;D.type===10?(ce=N.length>4?16:N.length>2?8:N.length*W,K=N.length>4?16:W*N.length):(ce=N.length<=2?N.length*W:16,K=16),k=Math.ceil(k/ce)*ce,z.push(k);let re=D.type===10?8:4;k+=N.length>4?Math.ceil(N.length/re)*K:N.length*W});let I=16;k=Math.ceil(k/I)*I;let O=new ArrayBuffer(k);m.forEach((D,N)=>{let W=z[N],K=typeof D.data=="number"?[D.data]:D.data;if(D.type===6)new Int32Array(O,W,K.length).set(K);else if(D.type===12)new Uint32Array(O,W,K.length).set(K);else if(D.type===10)new Uint16Array(O,W,K.length).set(K);else if(D.type===1)new Float32Array(O,W,K.length).set(K);else throw new Error(`Unsupported uniform type: ${hn(D.type)}`)});let P=this.gpuDataManager.create(k,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,O,0,k),this.gpuDataManager.release(P.id),w={offset:0,size:k,buffer:P.buffer}}let $=this.programManager.normalizeDispatchGroupSize(f),b=$[1]===1&&$[2]===1,T=Oy(e,r,b),S=this.programManager.getArtifact(T);if(S||(S=this.programManager.build(e,$),this.programManager.setArtifact(T,S),be("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),m&&S.uniformVariablesInfo){if(m.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${m.length} in program "${S.programInfo.name}".`);for(let k=0;k<m.length;k++){let z=m[k],I=z.type,O=typeof z.data=="number"?1:z.data.length,[P,D]=S.uniformVariablesInfo[k];if(I!==P||O!==D)throw new Error(`Uniform variable ${k} mismatch: expect type ${P} with size ${D}, got type ${I} with size ${O} in program "${S.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let k={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:r,outputTensorViews:y};this.pendingKernels.push(k),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(k)}return this.programManager.run(S,d,_,$,w),Bt(e.name),y}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=Ty.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let u={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,u)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,u=s.kernelName,d=s.kernelEntry,c=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${u}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${o}] ${u}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),d(r,c[1]),0}catch(m){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${u}" failed. ${m}`)),1}finally{f&&i.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${o}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let u=o.get(r),d=this.gpuDataManager.registerExternalBuffer(i,s,u);return o.set(r,[d,i]),d}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Mo(this,e,r);return Eo(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),u=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(u.computePipeline),o.setBindGroup(0,u.bindGroup),o.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),By={};R(By,{init:()=>Py});var Ua,Dy,Py,z1=x(()=>{fe(),mn(),me(),Mw(),Ua=class Ew{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=M.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=M.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=M.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=M.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(M.size(r)!==M.size(this.dims))throw new Error("Invalid new shape");return new Ew(this.module,this.dataType,this.data,r)}},Dy=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo;let s=e.PTR_SIZE,o=i/e.PTR_SIZE,u=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*o++,u));let d=Number(e.getValue(s*o++,u));this.outputCount=Number(e.getValue(s*o++,u)),this.customDataOffset=Number(e.getValue(s*o++,"*")),this.customDataSize=Number(e.getValue(s*o++,u));let c=[];for(let f=0;f<d;f++){let m=Number(e.getValue(s*o++,u)),g=Number(e.getValue(s*o++,"*")),y=Number(e.getValue(s*o++,u)),_=[];for(let w=0;w<y;w++)_.push(Number(e.getValue(s*o++,u)));c.push(new Ua(e,m,g,_))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,r){var d;let i=((d=r==null?void 0:r.inputs)==null?void 0:d.map(c=>typeof c=="number"?this.inputs[c]:c))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(c,f,m)=>new Ua(this.module,f,this.output(c,m),m),u=(c,f)=>{let m=sr(c,f);if(!m)throw new Error(`Unsupported data type: ${c}`);let g=m>0?this.backend.gpuDataManager.create(m).id:0;return new Ua(this.module,c,g,f)};return this.backend.run(e,i,s,o,u,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.PTR_SIZE,o=s===4?"i32":"i64",u=this.module.stackAlloc((1+r.length)*s);this.module.setValue(u,r.length,o);for(let d=0;d<r.length;d++)this.module.setValue(u+s*(d+1),r[d],o);return this.module._JsepOutput(this.opKernelContext,e,u)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},Py=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let u=(I1(),V(zy)).WebGpuBackend,d=new u;await d.initialize(i,s),o("webgpu",[d,c=>d.alloc(Number(c)),c=>d.free(c),(c,f,m,g=!1)=>{if(g)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(m)}`),d.memcpy(Number(c),Number(f));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(m)}`);let y=r.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(m));d.upload(Number(f),y)}},async(c,f,m)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${m}`),await d.download(Number(c),()=>r.HEAPU8.subarray(Number(f)>>>0,Number(f+m)>>>0))},(c,f,m)=>d.createKernel(c,Number(f),m,r.UTF8ToString(r._JsepGetNodeName(Number(f)))),c=>d.releaseKernel(c),(c,f,m,g)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${c}, contextDataOffset=${f}`);let y=new Dy(r,d,Number(f));return d.computeKernel(Number(c),y,g)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new Vp(i);o("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,c,f,m,g)=>u.ensureTensor(d,c,f,m,g),(d,c)=>{u.uploadTensor(d,c)},async(d,c)=>u.downloadTensor(d,c),(d,c)=>u.registerMLContext(d,c),!!i.trace])}}}),My,Cl,Ol,Rn,Ny,Rl,La,Al,Bl,Dl,Pl,Ml,Nl,Uy=x(()=>{Dt(),Bw(),Dw(),fe(),ir(),wo(),Sp(),My=(e,r)=>{Re()._OrtInit(e,r)!==0&&Ce("Can't initialize onnxruntime.")},Cl=async e=>{My(e.wasm.numThreads,Ea(e.logLevel))},Ol=async(e,r)=>{var s,o;(o=(s=Re()).asyncInit)==null||o.call(s);let i=e.webgpu.adapter;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(r==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(z1(),V(By)).init;r==="webgpu"&&await u("webgpu",Re(),e,i),r==="webnn"&&await u("webnn",Re(),e)}},Rn=new Map,Ny=e=>{let r=Re(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetInputOutputCount(e,o,o+s)!==0&&Ce("Can't get session input/output count.");let u=s===4?"i32":"i64";return[Number(r.getValue(o,u)),Number(r.getValue(o+s,u))]}finally{r.stackRestore(i)}},Rl=(e,r)=>{let i=Re(),s=i.stackSave(),o=0;try{let u=i.PTR_SIZE,d=i.stackAlloc(2*u);i._OrtGetInputOutputMetadata(e,r,d,d+u)!==0&&Ce("Can't get session input/output metadata.");let c=Number(i.getValue(d,"*"));o=Number(i.getValue(d+u,"*"));let f=i.HEAP32[o/4];if(f===0)return[c,0];let m=i.HEAPU32[o/4+1],g=[];for(let y=0;y<m;y++){let _=Number(i.getValue(o+8+y*u,"*"));g.push(_!==0?i.UTF8ToString(_):Number(i.getValue(o+8+(y+m)*u,"*")))}return[c,f,g]}finally{i.stackRestore(s),o!==0&&i._OrtFree(o)}},La=e=>{let r=Re(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},Al=async(e,r)=>{var y,_,w,$;let i,s,o=Re();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=La(e);let u=0,d=0,c=0,f=[],m=[],g=[];try{if([d,f]=await kp(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let N=[];for(let W of r.externalData){let K=typeof W=="string"?W:W.path;N.push(ko(typeof W=="string"?W:W.data).then(ce=>{o.mountExternalData(K,ce)}))}await Promise.all(N)}for(let N of(r==null?void 0:r.executionProviders)??[])if((typeof N=="string"?N:N.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof N!="string"){let W=N,K=W==null?void 0:W.context,ce=W==null?void 0:W.gpuDevice,re=W==null?void 0:W.deviceType,pe=W==null?void 0:W.powerPreference;K?o.currentContext=K:ce?o.currentContext=await o.webnnCreateMLContext(ce):o.currentContext=await o.webnnCreateMLContext({deviceType:re,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}u=await o._OrtCreateSession(i,s,d),(y=o.webgpuOnCreateSession)==null||y.call(o,u),u===0&&Ce("Can't create a session."),(_=o.jsepOnCreateSession)==null||_.call(o),o.currentContext&&(o.webnnRegisterMLContext(u,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[b,T]=Ny(u),S=!!(r!=null&&r.enableGraphCapture),k=[],z=[],I=[],O=[],P=[];for(let N=0;N<b;N++){let[W,K,ce]=Rl(u,N);W===0&&Ce("Can't get an input name."),m.push(W);let re=o.UTF8ToString(W);k.push(re),I.push(K===0?{name:re,isTensor:!1}:{name:re,isTensor:!0,type:hn(K),shape:ce})}for(let N=0;N<T;N++){let[W,K,ce]=Rl(u,N+b);W===0&&Ce("Can't get an output name."),g.push(W);let re=o.UTF8ToString(W);z.push(re),O.push(K===0?{name:re,isTensor:!1}:{name:re,isTensor:!0,type:hn(K),shape:ce});{if(S&&(r==null?void 0:r.preferredOutputLocation)===void 0){P.push("gpu-buffer");continue}let pe=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((w=r==null?void 0:r.preferredOutputLocation)==null?void 0:w[re])??"cpu",ke=o.webnnIsGraphOutput;if(pe==="cpu"&&ke&&ke(u,re)){P.push("ml-tensor-cpu-output");continue}if(pe!=="cpu"&&pe!=="cpu-pinned"&&pe!=="gpu-buffer"&&pe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${pe}.`);if(S&&pe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${pe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);P.push(pe)}}let D=null;return P.some(N=>N==="gpu-buffer"||N==="ml-tensor"||N==="ml-tensor-cpu-output")&&(c=o._OrtCreateBinding(u),c===0&&Ce("Can't create IO binding."),D={handle:c,outputPreferredLocations:P,outputPreferredLocationsEncoded:P.map(N=>N==="ml-tensor-cpu-output"?"ml-tensor":N).map(N=>bo(N))}),Rn.set(u,[u,m,g,D,S,!1]),[u,k,z,I,O]}catch(b){throw m.forEach(T=>o._OrtFree(T)),g.forEach(T=>o._OrtFree(T)),c!==0&&o._OrtReleaseBinding(c)!==0&&Ce("Can't release IO binding."),u!==0&&o._OrtReleaseSession(u)!==0&&Ce("Can't release session."),b}finally{o._free(i),d!==0&&o._OrtReleaseSessionOptions(d)!==0&&Ce("Can't release session options."),f.forEach(b=>o._free(b)),($=o.unmountExternalData)==null||$.call(o)}},Bl=e=>{var f,m,g;let r=Re(),i=Rn.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,u,d,c]=i;d&&(c&&r._OrtClearBoundOutputs(d.handle)!==0&&Ce("Can't clear bound outputs."),r._OrtReleaseBinding(d.handle)!==0&&Ce("Can't release IO binding.")),(f=r.jsepOnReleaseSession)==null||f.call(r,e),(m=r.webnnOnReleaseSession)==null||m.call(r,e),(g=r.webgpuOnReleaseSession)==null||g.call(r,e),o.forEach(y=>r._OrtFree(y)),u.forEach(y=>r._OrtFree(y)),r._OrtReleaseSession(s)!==0&&Ce("Can't release session."),Rn.delete(e)},Dl=async(e,r,i,s,o,u,d=!1)=>{if(!e){r.push(0);return}let c=Re(),f=c.PTR_SIZE,m=e[0],g=e[1],y=e[3],_=y,w,$;if(m==="string"&&(y==="gpu-buffer"||y==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&y!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(y==="gpu-buffer"){let S=e[2].gpuBuffer;$=sr(ar(m),g);{let k=c.jsepRegisterBuffer;if(!k)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');w=k(s,u,S,$)}}else if(y==="ml-tensor"){let S=e[2].mlTensor;$=sr(ar(m),g);let k=c.webnnRegisterMLTensor;if(!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');w=k(s,S,ar(m),g)}else{let S=e[2];if(Array.isArray(S)){$=f*S.length,w=c._malloc($),i.push(w);for(let k=0;k<S.length;k++){if(typeof S[k]!="string")throw new TypeError(`tensor data at index ${k} is not a string`);c.setValue(w+k*f,Ft(S[k],i),"*")}}else{let k=c.webnnIsGraphInput,z=c.webnnIsGraphOutput;if(m!=="string"&&k&&z){let I=c.UTF8ToString(o);if(k(s,I)||z(s,I)){let O=ar(m);$=sr(O,g),_="ml-tensor";let P=c.webnnCreateTemporaryTensor,D=c.webnnUploadTensor;if(!P||!D)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let N=await P(s,O,g);D(N,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),w=N}else $=S.byteLength,w=c._malloc($),i.push(w),c.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,$),w)}else $=S.byteLength,w=c._malloc($),i.push(w),c.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,$),w)}}let b=c.stackSave(),T=c.stackAlloc(4*g.length);try{g.forEach((k,z)=>c.setValue(T+z*f,k,f===4?"i32":"i64"));let S=c._OrtCreateTensor(ar(m),w,$,T,g.length,bo(_));S===0&&Ce(`Can't create tensor for input/output. session=${s}, index=${u}.`),r.push(S)}finally{c.stackRestore(b)}},Pl=async(e,r,i,s,o,u)=>{var ce,re,pe,ke;let d=Re(),c=d.PTR_SIZE,f=Rn.get(e);if(!f)throw new Error(`cannot run inference. invalid session id: ${e}`);let m=f[0],g=f[1],y=f[2],_=f[3],w=f[4],$=f[5],b=r.length,T=s.length,S=0,k=[],z=[],I=[],O=[],P=d.stackSave(),D=d.stackAlloc(b*c),N=d.stackAlloc(b*c),W=d.stackAlloc(T*c),K=d.stackAlloc(T*c);try{[S,k]=_p(u),In("wasm prepareInputOutputTensor");for(let oe=0;oe<b;oe++)await Dl(i[oe],z,O,e,g[r[oe]],r[oe],w);for(let oe=0;oe<T;oe++)await Dl(o[oe],I,O,e,y[s[oe]],b+s[oe],w);zn("wasm prepareInputOutputTensor");for(let oe=0;oe<b;oe++)d.setValue(D+oe*c,z[oe],"*"),d.setValue(N+oe*c,g[r[oe]],"*");for(let oe=0;oe<T;oe++)d.setValue(W+oe*c,I[oe],"*"),d.setValue(K+oe*c,y[s[oe]],"*");if(_&&!$){let{handle:oe,outputPreferredLocations:he,outputPreferredLocationsEncoded:nt}=_;if(g.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${g.length}).`);In("wasm bindInputsOutputs");for(let q=0;q<b;q++){let Y=r[q];await d._OrtBindInput(oe,g[Y],z[q])!==0&&Ce(`Can't bind input[${q}] for session=${e}.`)}for(let q=0;q<T;q++){let Y=s[q];(ce=o[q])!=null&&ce[3]?d._OrtBindOutput(oe,y[Y],I[q],0)!==0&&Ce(`Can't bind pre-allocated output[${q}] for session=${e}.`):d._OrtBindOutput(oe,y[Y],0,nt[Y])!==0&&Ce(`Can't bind output[${q}] to ${he[q]} for session=${e}.`)}zn("wasm bindInputsOutputs"),Rn.set(e,[m,g,y,_,w,!0])}(re=d.jsepOnRunStart)==null||re.call(d,m),(pe=d.webnnOnRunStart)==null||pe.call(d,m);let ve;_?ve=await d._OrtRunWithBinding(m,_.handle,T,W,S):ve=await d._OrtRun(m,N,D,b,K,T,W,S),ve!==0&&Ce("failed to call OrtRun().");let le=[],_e=[];In("wasm ProcessOutputTensor");for(let oe=0;oe<T;oe++){let he=Number(d.getValue(W+oe*c,"*"));if(he===I[oe]){le.push(o[oe]);continue}let nt=d.stackSave(),q=d.stackAlloc(4*c),Y=!1,ue,$e=0;try{d._OrtGetTensorData(he,q,q+c,q+2*c,q+3*c)!==0&&Ce(`Can't access output tensor data on index ${oe}.`);let Tt=c===4?"i32":"i64",Mr=Number(d.getValue(q,Tt));$e=d.getValue(q+c,"*");let e0=d.getValue(q+c*2,"*"),B1=Number(d.getValue(q+c*3,Tt)),Bn=[];for(let Je=0;Je<B1;Je++)Bn.push(Number(d.getValue(e0+Je*c,Tt)));d._OrtFree(e0)!==0&&Ce("Can't free memory for tensor dims.");let Dn=Bn.reduce((Je,je)=>Je*je,1);ue=hn(Mr);let Ci=_==null?void 0:_.outputPreferredLocations[s[oe]];if(ue==="string"){if(Ci==="gpu-buffer"||Ci==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Je=[];for(let je=0;je<Dn;je++){let yn=d.getValue($e+je*c,"*"),D1=d.getValue($e+(je+1)*c,"*"),P1=je===Dn-1?void 0:D1-yn;Je.push(d.UTF8ToString(yn,P1))}le.push([ue,Bn,Je,"cpu"])}else if(Ci==="gpu-buffer"&&Dn>0){let Je=d.jsepGetBuffer;if(!Je)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let je=Je($e),yn=sr(Mr,Dn);if(yn===void 0||!$o(ue))throw new Error(`Unsupported data type: ${ue}`);Y=!0,le.push([ue,Bn,{gpuBuffer:je,download:d.jsepCreateDownloader(je,yn,ue),dispose:()=>{d._OrtReleaseTensor(he)!==0&&Ce("Can't release tensor.")}},"gpu-buffer"])}else if(Ci==="ml-tensor"&&Dn>0){let Je=d.webnnEnsureTensor,je=d.webnnIsGraphInputOutputTypeSupported;if(!Je||!je)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(sr(Mr,Dn)===void 0||!xo(ue))throw new Error(`Unsupported data type: ${ue}`);if(!je(e,ue,!1))throw new Error(`preferredLocation "ml-tensor" for ${ue} output is not supported by current WebNN Context.`);let yn=await Je(e,$e,Mr,Bn,!1);Y=!0,le.push([ue,Bn,{mlTensor:yn,download:d.webnnCreateMLTensorDownloader($e,ue),dispose:()=>{d.webnnReleaseTensorId($e),d._OrtReleaseTensor(he)}},"ml-tensor"])}else if(Ci==="ml-tensor-cpu-output"&&Dn>0){let Je=d.webnnCreateMLTensorDownloader($e,ue)(),je=le.length;Y=!0,_e.push((async()=>{let yn=[je,await Je];return d.webnnReleaseTensorId($e),d._OrtReleaseTensor(he),yn})()),le.push([ue,Bn,[],"cpu"])}else{let Je=Sa(ue),je=new Je(Dn);new Uint8Array(je.buffer,je.byteOffset,je.byteLength).set(d.HEAPU8.subarray($e,$e+je.byteLength)),le.push([ue,Bn,je,"cpu"])}}finally{d.stackRestore(nt),ue==="string"&&$e&&d._free($e),Y||d._OrtReleaseTensor(he)}}_&&!w&&(d._OrtClearBoundOutputs(_.handle)!==0&&Ce("Can't clear bound outputs."),Rn.set(e,[m,g,y,_,w,!1]));for(let[oe,he]of await Promise.all(_e))le[oe][2]=he;return zn("wasm ProcessOutputTensor"),le}finally{(ke=d.webnnOnRunEnd)==null||ke.call(d,m),d.stackRestore(P),z.forEach(ve=>d._OrtReleaseTensor(ve)),I.forEach(ve=>d._OrtReleaseTensor(ve)),O.forEach(ve=>d._free(ve)),S!==0&&d._OrtReleaseRunOptions(S),k.forEach(ve=>d._free(ve))}},Ml=e=>{let r=Re(),i=Rn.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&Ce("Can't get an profile file name."),r._OrtFree(o)},Nl=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),An,vt,Pr,Ii,zi,Va,Ul,Wa,fr,hr,Ly,Vy,Wy,qy,Fy,Gy,jy,Hy,Ky=x(()=>{Dt(),Uy(),ir(),go(),An=()=>!!X.wasm.proxy&&typeof document<"u",Pr=!1,Ii=!1,zi=!1,Wa=new Map,fr=(e,r)=>{let i=Wa.get(e);i?i.push(r):Wa.set(e,[r])},hr=()=>{if(Pr||!Ii||zi||!vt)throw new Error("worker not ready")},Ly=e=>{switch(e.data.type){case"init-wasm":Pr=!1,e.data.err?(zi=!0,Ul[1](e.data.err)):(Ii=!0,Ul[0]()),Va&&(URL.revokeObjectURL(Va),Va=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Wa.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}}},Vy=async()=>{if(!Ii){if(Pr)throw new Error("multiple calls to 'initWasm()' detected.");if(zi)throw new Error("previous call to 'initWasm()' failed.");if(Pr=!0,An())return new Promise((e,r)=>{vt==null||vt.terminate(),hp().then(([i,s])=>{try{vt=s,vt.onerror=u=>r(u),vt.onmessage=Ly,Ul=[e,r];let o={type:"init-wasm",in:X};if(!o.in.wasm.wasmPaths&&i){let u=co();u&&(o.in.wasm.wasmPaths=u)}vt.postMessage(o),Va=i}catch(o){r(o)}},r)});try{await _o(X.wasm),await Cl(X),Ii=!0}catch(e){throw zi=!0,e}finally{Pr=!1}}},Wy=async e=>{if(An())return hr(),new Promise((r,i)=>{fr("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:X}};vt.postMessage(s)});await Ol(X,e)},qy=async e=>An()?(hr(),new Promise((r,i)=>{fr("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};vt.postMessage(s,[e.buffer])})):La(e),Fy=async(e,r)=>{if(An()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return hr(),new Promise((i,s)=>{fr("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),vt.postMessage(o,u)})}else return Al(e,r)},Gy=async e=>{if(An())return hr(),new Promise((r,i)=>{fr("release",[r,i]);let s={type:"release",in:e};vt.postMessage(s)});Bl(e)},jy=async(e,r,i,s,o,u)=>{if(An()){if(i.some(d=>d[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(d=>d))throw new Error("pre-allocated output tensor is not supported for proxy.");return hr(),new Promise((d,c)=>{fr("run",[d,c]);let f=i,m={type:"run",in:{sessionId:e,inputIndices:r,inputs:f,outputIndices:s,options:u}};vt.postMessage(m,Nl(f))})}else return Pl(e,r,i,s,o,u)},Hy=async e=>{if(An())return hr(),new Promise((r,i)=>{fr("end-profiling",[r,i]);let s={type:"end-profiling",in:e};vt.postMessage(s)});Ml(e)}}),Ll,Qy,Zy,C1=x(()=>{Dt(),Ky(),fe(),lo(),Sp(),Ll=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},Qy=e=>{switch(e[3]){case"cpu":return new Wt(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!$o(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return Wt.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!xo(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return Wt.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},Zy=class{async fetchModelAndCopyToWasmMemory(e){return qy(await ko(e))}async loadModel(e,r){qt();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Fy(i,r),Bt()}async dispose(){return Gy(this.sessionId)}async run(e,r,i){qt();let s=[],o=[];Object.entries(e).forEach(y=>{let _=y[0],w=y[1],$=this.inputNames.indexOf(_);if($===-1)throw new Error(`invalid input '${_}'`);s.push(w),o.push($)});let u=[],d=[];Object.entries(r).forEach(y=>{let _=y[0],w=y[1],$=this.outputNames.indexOf(_);if($===-1)throw new Error(`invalid output '${_}'`);u.push(w),d.push($)});let c=s.map((y,_)=>Ll(y,()=>`input "${this.inputNames[o[_]]}"`)),f=u.map((y,_)=>y?Ll(y,()=>`output "${this.outputNames[d[_]]}"`):null),m=await jy(this.sessionId,o,c,d,f,i),g={};for(let y=0;y<m.length;y++)g[this.outputNames[d[y]]]=u[y]??Qy(m[y]);return Bt(),g}startProfiling(){}endProfiling(){Hy(this.sessionId)}}}),Xy={};R(Xy,{OnnxruntimeWebAssemblyBackend:()=>Wl,initializeFlags:()=>Vl,wasmBackend:()=>Yy});var Vl,Wl,Yy,O1=x(()=>{Dt(),Ky(),C1(),Vl=()=>{(typeof X.wasm.initTimeout!="number"||X.wasm.initTimeout<0)&&(X.wasm.initTimeout=0);let e=X.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),X.wasm.simd=!1),typeof X.wasm.proxy!="boolean"&&(X.wasm.proxy=!1),typeof X.wasm.trace!="boolean"&&(X.wasm.trace=!1),typeof X.wasm.numThreads!="number"||!Number.isInteger(X.wasm.numThreads)||X.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)X.wasm.numThreads=1;else{let r=typeof navigator>"u"?E("node:os").cpus().length:navigator.hardwareConcurrency;X.wasm.numThreads=Math.min(4,Math.ceil((r||1)/2))}},Wl=class{async init(e){Vl(),await Vy(),await Wy(e)}async createInferenceSessionHandler(e,r){let i=new Zy;return await i.loadModel(e,r),i}},Yy=new Wl}),Jy={};R(Jy,{InferenceSession:()=>oo,TRACE:()=>mi,TRACE_EVENT_BEGIN:()=>In,TRACE_EVENT_END:()=>zn,TRACE_FUNC_BEGIN:()=>qt,TRACE_FUNC_END:()=>Bt,Tensor:()=>Wt,default:()=>A1,env:()=>X,registerBackend:()=>Q}),Dt(),Dt(),Dt();var R1="1.23.0",A1=sp;{let e=(O1(),V(Xy)).wasmBackend;Q("webgpu",e,5),Q("webnn",e,5),Q("cpu",e,10),Q("wasm",e,10)}return Object.defineProperty(X.versions,"web",{value:R1,enumerable:!0}),V(Jy)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */t.exports=a})(kw);var ld=kw.exports;ld.env.wasm.wasmPaths="/public/dist/";const hx="/student_model_fp16.onnx",pv=["Normal","Glaucoma","Myopia","Diabetes"];function mx(){const[t,n]=Xt.useState(null),[a,l]=Xt.useState([]),[p,h]=Xt.useState(null),[v,E]=Xt.useState(null),[x,R]=Xt.useState(null),[F,V]=Xt.useState(null);Xt.useEffect(()=>{async function Z(){const Ee=await ld.InferenceSession.create(hx,{executionProviders:["wasm"],graphOptimizationLevel:"all"});n(Ee),console.log("ONNX FP16 model loaded!")}Z()},[]),Xt.useEffect(()=>{async function Z(){const A=await(await fetch("/test_split.json")).json();l(A)}Z()},[]);const L=()=>{if(!a.length)return;const Z=a[Math.floor(Math.random()*a.length)];h(Z.full_path),E(parseInt(Z.class_label_remapped)),R(null),V(null)},H=async Z=>{const Ee=document.createElement("canvas");Ee.width=224,Ee.height=224;const A=Ee.getContext("2d");A.drawImage(Z,0,0,224,224);const{data:C}=A.getImageData(0,0,224,224),B=new Float32Array(1*3*224*224);for(let G=0;G<224*224;G++)B[G]=(C[G*4]/255-.485)/.229,B[G+224*224]=(C[G*4+1]/255-.456)/.224,B[G+2*224*224]=(C[G*4+2]/255-.406)/.225;return new ld.Tensor("float16",B,[1,3,224,224])},Q=async()=>{if(!t||!p)return;const Z=document.getElementById("sampleImage"),Ee=await H(Z),A={};A[t.inputNames[0]]=Ee;const C=performance.now(),B=await t.run(A),G=performance.now(),ee=B[t.outputNames[0]].data,J=ee.indexOf(Math.max(...ee));R(J),V((G-C).toFixed(2))};return ct.jsxs("div",{children:[ct.jsx("button",{onClick:L,children:"Pick Random Image"}),ct.jsx("button",{onClick:Q,disabled:!p||!t,children:"Run Inference"}),p&&ct.jsxs("div",{children:[ct.jsx("h3",{children:"Selected Image:"}),ct.jsx("img",{id:"sampleImage",src:p,alt:"Fundus",width:224,height:224})]}),v!==null&&ct.jsxs("p",{children:["Ground Truth: ",ct.jsx("b",{children:pv[v]})]}),x!==null&&ct.jsxs("p",{children:["Prediction: ",ct.jsx("b",{children:pv[x]})," | Inference Time: ",F," ms"]})]})}function gx(){return ct.jsxs("div",{children:[ct.jsx("h1",{children:"Fundus Classification Demo"}),ct.jsx(mx,{})]})}mu.createRoot(document.getElementById("root")).render(ct.jsx(J1.StrictMode,{children:ct.jsx(gx,{})}));
