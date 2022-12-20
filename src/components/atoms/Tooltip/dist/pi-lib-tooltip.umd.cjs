(function(S,A){typeof exports=="object"&&typeof module<"u"?module.exports=A(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],A):(S=typeof globalThis<"u"?globalThis:S||self,S["@pi-lib/tooltip"]=A(S.require$$0,S.styled))})(this,function(S,A){"use strict";const de=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},ve=de(S),Ve=de(A);var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pe="Expected a function",ge=0/0,Be="[object Symbol]",Ge=/^\s+|\s+$/g,qe=/^[-+]0x[0-9a-f]+$/i,Je=/^0b[01]+$/i,ze=/^0o[0-7]+$/i,He=parseInt,Ke=typeof B=="object"&&B&&B.Object===Object&&B,Xe=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Ke||Xe||Function("return this")(),Qe=Object.prototype,er=Qe.toString,rr=Math.max,tr=Math.min,Q=function(){return Ze.Date.now()};function nr(n,l,c){var d,h,x,T,v,s,_=0,p=!1,m=!1,j=!0;if(typeof n!="function")throw new TypeError(pe);l=be(l)||0,G(c)&&(p=!!c.leading,m="maxWait"in c,x=m?rr(be(c.maxWait)||0,l):x,j="trailing"in c?!!c.trailing:j);function D(g){var w=d,F=h;return d=h=void 0,_=g,T=n.apply(F,w),T}function q(g){return _=g,v=setTimeout(C,l),p?D(g):T}function re(g){var w=g-s,F=g-_,M=l-w;return m?tr(M,x-F):M}function J(g){var w=g-s,F=g-_;return s===void 0||w>=l||w<0||m&&F>=x}function C(){var g=Q();if(J(g))return E(g);v=setTimeout(C,re(g))}function E(g){return v=void 0,j&&d?D(g):(d=h=void 0,T)}function te(){v!==void 0&&clearTimeout(v),_=0,d=s=h=v=void 0}function ne(){return v===void 0?T:E(Q())}function N(){var g=Q(),w=J(g);if(d=arguments,h=this,s=g,w){if(v===void 0)return q(s);if(m)return v=setTimeout(C,l),D(s)}return v===void 0&&(v=setTimeout(C,l)),T}return N.cancel=te,N.flush=ne,N}function ar(n,l,c){var d=!0,h=!0;if(typeof n!="function")throw new TypeError(pe);return G(c)&&(d="leading"in c?!!c.leading:d,h="trailing"in c?!!c.trailing:h),nr(n,l,{leading:d,maxWait:l,trailing:h})}function G(n){var l=typeof n;return!!n&&(l=="object"||l=="function")}function ir(n){return!!n&&typeof n=="object"}function or(n){return typeof n=="symbol"||ir(n)&&er.call(n)==Be}function be(n){if(typeof n=="number")return n;if(or(n))return ge;if(G(n)){var l=typeof n.valueOf=="function"?n.valueOf():n;n=G(l)?l+"":l}if(typeof n!="string")return n===0?n:+n;n=n.replace(Ge,"");var c=Je.test(n);return c||ze.test(n)?He(n.slice(2),c?2:8):qe.test(n)?ge:+n}var ur=ar;const ee={default:"#444444",pending:"blue",error:"red",success:"green"},sr=n=>`
  border: 1px solid ${n};
  color: ${n};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`,fr=Ve.default.div(({isVisible:n=!1})=>A.css`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;
    opacity: ${n?.8:0};
    ${sr(ee.default)}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${ee.default};
      border-right: 1px solid ${ee.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `);var me={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function lr(){if(ye)return L;ye=1;var n=ve.default,l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function T(v,s,_){var p,m={},j=null,D=null;_!==void 0&&(j=""+_),s.key!==void 0&&(j=""+s.key),s.ref!==void 0&&(D=s.ref);for(p in s)d.call(s,p)&&!x.hasOwnProperty(p)&&(m[p]=s[p]);if(v&&v.defaultProps)for(p in s=v.defaultProps,s)m[p]===void 0&&(m[p]=s[p]);return{$$typeof:l,type:v,key:j,ref:D,props:m,_owner:h.current}}return L.Fragment=c,L.jsx=T,L.jsxs=T,L}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function cr(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var n=ve.default,l=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),v=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),q=Symbol.iterator,re="@@iterator";function J(e){if(e===null||typeof e!="object")return null;var r=q&&e[q]||e[re];return typeof r=="function"?r:null}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];te("error",e,t)}}function te(e,r,t){{var a=C.ReactDebugCurrentFrame,u=a.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var f=t.map(function(o){return String(o)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var ne=!1,N=!1,g=!1,w=!1,F=!1,M;M=Symbol.for("react.module.reference");function vr(e){return!!(typeof e=="string"||typeof e=="function"||e===d||e===x||F||e===h||e===_||e===p||w||e===D||ne||N||g||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===m||e.$$typeof===T||e.$$typeof===v||e.$$typeof===s||e.$$typeof===M||e.getModuleId!==void 0))}function pr(e,r,t){var a=e.displayName;if(a)return a;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function Ee(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case c:return"Portal";case x:return"Profiler";case h:return"StrictMode";case _:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v:var r=e;return Ee(r)+".Consumer";case T:var t=e;return Ee(t._context)+".Provider";case s:return pr(e,e.render,"ForwardRef");case m:var a=e.displayName||null;return a!==null?a:P(e.type)||"Memo";case j:{var u=e,f=u._payload,o=u._init;try{return P(o(f))}catch{return null}}}return null}var I=Object.assign,U=0,_e,Re,Te,xe,Oe,Se,je;function Ce(){}Ce.__reactDisabledLog=!0;function gr(){{if(U===0){_e=console.log,Re=console.info,Te=console.warn,xe=console.error,Oe=console.group,Se=console.groupCollapsed,je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function br(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:_e}),info:I({},e,{value:Re}),warn:I({},e,{value:Te}),error:I({},e,{value:xe}),group:I({},e,{value:Oe}),groupCollapsed:I({},e,{value:Se}),groupEnd:I({},e,{value:je})})}U<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ae=C.ReactCurrentDispatcher,ie;function z(e,r,t){{if(ie===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);ie=a&&a[1]||""}return`
`+ie+e}}var oe=!1,H;{var mr=typeof WeakMap=="function"?WeakMap:Map;H=new mr}function we(e,r){if(!e||oe)return"";{var t=H.get(e);if(t!==void 0)return t}var a;oe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=ae.current,ae.current=null,gr();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(k){a=k}Reflect.construct(e,[],o)}else{try{o.call()}catch(k){a=k}e.call(o.prototype)}}else{try{throw Error()}catch(k){a=k}e()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),R=a.stack.split(`
`),b=i.length-1,y=R.length-1;b>=1&&y>=0&&i[b]!==R[y];)y--;for(;b>=1&&y>=0;b--,y--)if(i[b]!==R[y]){if(b!==1||y!==1)do if(b--,y--,y<0||i[b]!==R[y]){var O=`
`+i[b].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,O),O}while(b>=1&&y>=0);break}}}finally{oe=!1,ae.current=f,br(),Error.prepareStackTrace=u}var $=e?e.displayName||e.name:"",Ue=$?z($):"";return typeof e=="function"&&H.set(e,Ue),Ue}function yr(e,r,t){return we(e,!1)}function hr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function K(e,r,t){if(e==null)return"";if(typeof e=="function")return we(e,hr(e));if(typeof e=="string")return z(e);switch(e){case _:return z("Suspense");case p:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case s:return yr(e.render);case m:return K(e.type,r,t);case j:{var a=e,u=a._payload,f=a._init;try{return K(f(u),r,t)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,Pe={},ke=C.ReactDebugCurrentFrame;function Z(e){if(e){var r=e._owner,t=K(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(t)}else ke.setExtraStackFrame(null)}function Er(e,r,t,a,u){{var f=Function.call.bind(X);for(var o in e)if(f(e,o)){var i=void 0;try{if(typeof e[o]!="function"){var R=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}i=e[o](r,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(b){i=b}i&&!(i instanceof Error)&&(Z(u),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof i),Z(null)),i instanceof Error&&!(i.message in Pe)&&(Pe[i.message]=!0,Z(u),E("Failed %s type: %s",t,i.message),Z(null))}}}var _r=Array.isArray;function ue(e){return _r(e)}function Rr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Tr(e){try{return De(e),!1}catch{return!0}}function De(e){return""+e}function Fe(e){if(Tr(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Rr(e)),De(e)}var V=C.ReactCurrentOwner,xr={key:!0,ref:!0,__self:!0,__source:!0},Ie,Ae,se;se={};function Or(e){if(X.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Sr(e){if(X.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function jr(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var t=P(V.current.type);se[t]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(V.current.type),e.ref),se[t]=!0)}}function Cr(e,r){{var t=function(){Ie||(Ie=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function wr(e,r){{var t=function(){Ae||(Ae=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Pr=function(e,r,t,a,u,f,o){var i={$$typeof:l,type:e,key:r,ref:t,props:o,_owner:f};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function kr(e,r,t,a,u){{var f,o={},i=null,R=null;t!==void 0&&(Fe(t),i=""+t),Sr(r)&&(Fe(r.key),i=""+r.key),Or(r)&&(R=r.ref,jr(r,u));for(f in r)X.call(r,f)&&!xr.hasOwnProperty(f)&&(o[f]=r[f]);if(e&&e.defaultProps){var b=e.defaultProps;for(f in b)o[f]===void 0&&(o[f]=b[f])}if(i||R){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&Cr(o,y),R&&wr(o,y)}return Pr(e,i,R,u,a,V.current,o)}}var fe=C.ReactCurrentOwner,We=C.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=K(e.type,e._source,r?r.type:null);We.setExtraStackFrame(t)}else We.setExtraStackFrame(null)}var le;le=!1;function ce(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function $e(){{if(fe.current){var e=P(fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Dr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Le={};function Fr(e){{var r=$e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ye(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Fr(r);if(Le[t])return;Le[t]=!0;var a="";e&&e._owner&&e._owner!==fe.current&&(a=" It was passed a child from "+P(e._owner.type)+"."),W(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),W(null)}}function Ne(e,r){{if(typeof e!="object")return;if(ue(e))for(var t=0;t<e.length;t++){var a=e[t];ce(a)&&Ye(a,r)}else if(ce(e))e._store&&(e._store.validated=!0);else if(e){var u=J(e);if(typeof u=="function"&&u!==e.entries)for(var f=u.call(e),o;!(o=f.next()).done;)ce(o.value)&&Ye(o.value,r)}}}function Ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===s||r.$$typeof===m))t=r.propTypes;else return;if(t){var a=P(r);Er(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!le){le=!0;var u=P(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ar(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){W(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),W(null);break}}e.ref!==null&&(W(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}function Me(e,r,t,a,u,f){{var o=vr(e);if(!o){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=Dr(u);R?i+=R:i+=$e();var b;e===null?b="null":ue(e)?b="array":e!==void 0&&e.$$typeof===l?(b="<"+(P(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):b=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",b,i)}var y=kr(e,r,t,u,f);if(y==null)return y;if(o){var O=r.children;if(O!==void 0)if(a)if(ue(O)){for(var $=0;$<O.length;$++)Ne(O[$],e);Object.freeze&&Object.freeze(O)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ne(O,e)}return e===d?Ar(y):Ir(y),y}}function Wr(e,r,t){return Me(e,r,t,!0)}function $r(e,r,t){return Me(e,r,t,!1)}var Lr=$r,Yr=Wr;Y.Fragment=d,Y.jsx=Lr,Y.jsxs=Yr}()),Y}(function(n){process.env.NODE_ENV==="production"?n.exports=lr():n.exports=cr()})(me);const dr=me.exports.jsx;return({children:n,isVisible:l=!1,x:c=0,y:d=0})=>{const h=S.useRef(null),[x,T]=S.useState({x:c,y:d}),v=S.useCallback((s,_)=>{var p,m;return T({x:s-((m=(p=h.current)==null?void 0:p.clientWidth)!=null?m:0)/2,y:_+24})},[h.current]);return S.useEffect(()=>{v(c,d);const s=ur(({clientX:p,clientY:m})=>!c&&!d&&v(p,m),100),_=()=>{removeEventListener("mousemove",s)};return c&&d?_():addEventListener("mousemove",s),_},[c,d]),dr(fr,{ref:h,isVisible:l,children:n,style:{left:x.x,top:x.y}})}});
