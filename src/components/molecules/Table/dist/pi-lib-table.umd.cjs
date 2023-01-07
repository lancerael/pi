(function(S,M){typeof exports=="object"&&typeof module<"u"?module.exports=M(require("styled-components"),require("react")):typeof define=="function"&&define.amd?define(["styled-components","react"],M):(S=typeof globalThis<"u"?globalThis:S||self,S["@pi-lib/table"]=M(S.A,S.je))})(this,function(S,M){"use strict";const vr=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},N=vr(S),ke=vr(M),yr={default:"#444444",pending:"blue",error:"red",success:"green"},gr=S.keyframes`
  to {
    rotate: 360deg;
  }
`,wr=S.keyframes`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`,Or=N.default.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`,Sr=N.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${gr} 2s linear infinite;
  margin: 2px;
`,hr=N.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,Te=N.default.div(({delay:d})=>S.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: ${yr.pending};
    animation: ${wr} 0.3s linear alternate infinite;

    ${d?"animation-delay: 0.3s;":""}
  `);N.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${yr.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${gr} 2s linear infinite;
`;var Ce={exports:{}},Z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr;function xr(){if(mr)return Z;mr=1;var d=ke.default,E=Symbol.for("react.element"),x=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,k=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function T(h,c,j){var v,m={},R=null,A=null;j!==void 0&&(R=""+j),c.key!==void 0&&(R=""+c.key),c.ref!==void 0&&(A=c.ref);for(v in c)g.call(c,v)&&!O.hasOwnProperty(v)&&(m[v]=c[v]);if(h&&h.defaultProps)for(v in c=h.defaultProps,c)m[v]===void 0&&(m[v]=c[v]);return{$$typeof:E,type:h,key:R,ref:A,props:m,_owner:k.current}}return Z.Fragment=x,Z.jsx=T,Z.jsxs=T,Z}var je={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br;function kr(){return br||(br=1,process.env.NODE_ENV!=="production"&&function(){var d=ke.default,E=Symbol.for("react.element"),x=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),te=Symbol.iterator,$e="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[$e];return typeof r=="function"?r:null}var P=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=P.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Ne=!1,Ae=!1,We=!1,Le=!1,Ye=!1,ne;ne=Symbol.for("react.module.reference");function Ue(e){return!!(typeof e=="string"||typeof e=="function"||e===g||e===O||Ye||e===k||e===j||e===v||Le||e===A||Ne||Ae||We||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===m||e.$$typeof===T||e.$$typeof===h||e.$$typeof===c||e.$$typeof===ne||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case x:return"Portal";case O:return"Profiler";case k:return"StrictMode";case j:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return ae(r)+".Consumer";case T:var t=e;return ae(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case m:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case R:{var i=e,s=i._payload,o=i._init;try{return b(o(s))}catch{return null}}}return null}var w=Object.assign,$=0,oe,ie,se,ue,le,ce,fe;function pe(){}pe.__reactDisabledLog=!0;function Me(){{if($===0){oe=console.log,ie=console.info,se=console.warn,ue=console.error,le=console.group,ce=console.groupCollapsed,fe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function Be(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},e,{value:oe}),info:w({},e,{value:ie}),warn:w({},e,{value:se}),error:w({},e,{value:ue}),group:w({},e,{value:le}),groupCollapsed:w({},e,{value:ce}),groupEnd:w({},e,{value:fe})})}$<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=P.ReactCurrentDispatcher,z;function W(e,r,t){{if(z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var q=!1,L;{var ze=typeof WeakMap=="function"?WeakMap:Map;L=new ze}function de(e,r){if(!e||q)return"";{var t=L.get(e);if(t!==void 0)return t}var n;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=B.current,B.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),p=n.stack.split(`
`),u=a.length-1,l=p.length-1;u>=1&&l>=0&&a[u]!==p[l];)l--;for(;u>=1&&l>=0;u--,l--)if(a[u]!==p[l]){if(u!==1||l!==1)do if(u--,l--,l<0||a[u]!==p[l]){var y=`
`+a[u].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,y),y}while(u>=1&&l>=0);break}}}finally{q=!1,B.current=s,Be(),Error.prepareStackTrace=i}var D=e?e.displayName||e.name:"",xe=D?W(D):"";return typeof e=="function"&&L.set(e,xe),xe}function qe(e,r,t){return de(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function Y(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Je(e));if(typeof e=="string")return W(e);switch(e){case j:return W("Suspense");case v:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return qe(e.render);case m:return Y(e.type,r,t);case R:{var n=e,i=n._payload,s=n._init;try{return Y(s(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,ve={},ye=P.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var s=Function.call.bind(U);for(var o in e)if(s(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var p=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(V(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,V(i),f("Failed %s type: %s",t,a.message),V(null))}}}var He=Array.isArray;function J(e){return He(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function he(e){if(Xe(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),ge(e)}var F=P.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},me,be,G;G={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&F.current&&r&&F.current.stateNode!==r){var t=b(F.current.type);G[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(F.current.type),e.ref),G[t]=!0)}}function tr(e,r){{var t=function(){me||(me=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){be||(be=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,s,o){var a={$$typeof:E,type:e,key:r,ref:t,props:o,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var s,o={},a=null,p=null;t!==void 0&&(he(t),a=""+t),er(r)&&(he(r.key),a=""+r.key),Qe(r)&&(p=r.ref,rr(r,i));for(s in r)U.call(r,s)&&!Ze.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(a||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,l),p&&nr(o,l)}return ar(e,a,p,i,n,F.current,o)}}var H=P.ReactCurrentOwner,_e=P.ReactDebugCurrentFrame;function C(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var K;K=!1;function X(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function Ee(){{if(H.current){var e=b(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function sr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function we(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),C(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),C(null)}}function Oe(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];X(n)&&we(n,r)}else if(X(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),o;!(o=s.next()).done;)X(o.value)&&we(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===m))t=r.propTypes;else return;if(t){var n=b(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!K){K=!0;var i=b(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){C(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}e.ref!==null&&(C(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}function Se(e,r,t,n,i,s){{var o=Ue(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=ir(i);p?a+=p:a+=Ee();var u;e===null?u="null":J(e)?u="array":e!==void 0&&e.$$typeof===E?(u="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var l=or(e,r,t,i,s);if(l==null)return l;if(o){var y=r.children;if(y!==void 0)if(n)if(J(y)){for(var D=0;D<y.length;D++)Oe(y[D],e);Object.freeze&&Object.freeze(y)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(y,e)}return e===g?lr(l):ur(l),l}}function cr(e,r,t){return Se(e,r,t,!0)}function fr(e,r,t){return Se(e,r,t,!1)}var pr=fr,dr=cr;je.Fragment=g,je.jsx=pr,je.jsxs=dr}()),je}(function(d){process.env.NODE_ENV==="production"?d.exports=xr():d.exports=kr()})(Ce);const Q=Ce.exports.jsx,De=Ce.exports.jsxs,Tr=()=>Q(Or,{title:"Loading...","data-selector":"pi-lib-loader",children:De(Sr,{children:[De(hr,{children:[Q(Te,{delay:!0}),Q(Te,{})]}),De(hr,{children:[Q(Te,{}),Q(Te,{delay:!0})]})]})}),jr=N.default.tr(({isOdd:d,isExpandable:E})=>S.css`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${E&&S.css`
      cursor: pointer;
      &:hover {
        background: var(--special);
      }
    `}

    ${d&&S.css`
      background: var(--border);
    `}
  `),Pr=N.default.tr`
  & > td {
    transition: all 0.5s;
    background: var(--shadow);
  }
`;var Pe={exports:{}},ee={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r;function Cr(){if(_r)return ee;_r=1;var d=ke.default,E=Symbol.for("react.element"),x=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,k=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function T(h,c,j){var v,m={},R=null,A=null;j!==void 0&&(R=""+j),c.key!==void 0&&(R=""+c.key),c.ref!==void 0&&(A=c.ref);for(v in c)g.call(c,v)&&!O.hasOwnProperty(v)&&(m[v]=c[v]);if(h&&h.defaultProps)for(v in c=h.defaultProps,c)m[v]===void 0&&(m[v]=c[v]);return{$$typeof:E,type:h,key:R,ref:A,props:m,_owner:k.current}}return ee.Fragment=x,ee.jsx=T,ee.jsxs=T,ee}var re={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er;function Dr(){return Er||(Er=1,process.env.NODE_ENV!=="production"&&function(){var d=ke.default,E=Symbol.for("react.element"),x=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),te=Symbol.iterator,$e="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[$e];return typeof r=="function"?r:null}var P=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=P.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Ne=!1,Ae=!1,We=!1,Le=!1,Ye=!1,ne;ne=Symbol.for("react.module.reference");function Ue(e){return!!(typeof e=="string"||typeof e=="function"||e===g||e===O||Ye||e===k||e===j||e===v||Le||e===A||Ne||Ae||We||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===m||e.$$typeof===T||e.$$typeof===h||e.$$typeof===c||e.$$typeof===ne||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case x:return"Portal";case O:return"Profiler";case k:return"StrictMode";case j:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return ae(r)+".Consumer";case T:var t=e;return ae(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case m:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case R:{var i=e,s=i._payload,o=i._init;try{return b(o(s))}catch{return null}}}return null}var w=Object.assign,$=0,oe,ie,se,ue,le,ce,fe;function pe(){}pe.__reactDisabledLog=!0;function Me(){{if($===0){oe=console.log,ie=console.info,se=console.warn,ue=console.error,le=console.group,ce=console.groupCollapsed,fe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function Be(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},e,{value:oe}),info:w({},e,{value:ie}),warn:w({},e,{value:se}),error:w({},e,{value:ue}),group:w({},e,{value:le}),groupCollapsed:w({},e,{value:ce}),groupEnd:w({},e,{value:fe})})}$<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=P.ReactCurrentDispatcher,z;function W(e,r,t){{if(z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var q=!1,L;{var ze=typeof WeakMap=="function"?WeakMap:Map;L=new ze}function de(e,r){if(!e||q)return"";{var t=L.get(e);if(t!==void 0)return t}var n;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=B.current,B.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),p=n.stack.split(`
`),u=a.length-1,l=p.length-1;u>=1&&l>=0&&a[u]!==p[l];)l--;for(;u>=1&&l>=0;u--,l--)if(a[u]!==p[l]){if(u!==1||l!==1)do if(u--,l--,l<0||a[u]!==p[l]){var y=`
`+a[u].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,y),y}while(u>=1&&l>=0);break}}}finally{q=!1,B.current=s,Be(),Error.prepareStackTrace=i}var D=e?e.displayName||e.name:"",xe=D?W(D):"";return typeof e=="function"&&L.set(e,xe),xe}function qe(e,r,t){return de(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function Y(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Je(e));if(typeof e=="string")return W(e);switch(e){case j:return W("Suspense");case v:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return qe(e.render);case m:return Y(e.type,r,t);case R:{var n=e,i=n._payload,s=n._init;try{return Y(s(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,ve={},ye=P.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var s=Function.call.bind(U);for(var o in e)if(s(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var p=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(V(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,V(i),f("Failed %s type: %s",t,a.message),V(null))}}}var He=Array.isArray;function J(e){return He(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function he(e){if(Xe(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),ge(e)}var F=P.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},me,be,G;G={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&F.current&&r&&F.current.stateNode!==r){var t=b(F.current.type);G[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(F.current.type),e.ref),G[t]=!0)}}function tr(e,r){{var t=function(){me||(me=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){be||(be=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,s,o){var a={$$typeof:E,type:e,key:r,ref:t,props:o,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var s,o={},a=null,p=null;t!==void 0&&(he(t),a=""+t),er(r)&&(he(r.key),a=""+r.key),Qe(r)&&(p=r.ref,rr(r,i));for(s in r)U.call(r,s)&&!Ze.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(a||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,l),p&&nr(o,l)}return ar(e,a,p,i,n,F.current,o)}}var H=P.ReactCurrentOwner,_e=P.ReactDebugCurrentFrame;function C(e){if(e){var r=e._owner,t=Y(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var K;K=!1;function X(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function Ee(){{if(H.current){var e=b(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function sr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function we(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),C(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),C(null)}}function Oe(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];X(n)&&we(n,r)}else if(X(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),o;!(o=s.next()).done;)X(o.value)&&we(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===m))t=r.propTypes;else return;if(t){var n=b(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!K){K=!0;var i=b(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){C(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}e.ref!==null&&(C(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}function Se(e,r,t,n,i,s){{var o=Ue(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=ir(i);p?a+=p:a+=Ee();var u;e===null?u="null":J(e)?u="array":e!==void 0&&e.$$typeof===E?(u="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var l=or(e,r,t,i,s);if(l==null)return l;if(o){var y=r.children;if(y!==void 0)if(n)if(J(y)){for(var D=0;D<y.length;D++)Oe(y[D],e);Object.freeze&&Object.freeze(y)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(y,e)}return e===g?lr(l):ur(l),l}}function cr(e,r,t){return Se(e,r,t,!0)}function fr(e,r,t){return Se(e,r,t,!1)}var pr=fr,dr=cr;re.Fragment=g,re.jsx=pr,re.jsxs=dr}()),re}(function(d){process.env.NODE_ENV==="production"?d.exports=Cr():d.exports=Dr()})(Pe);const $r=Pe.exports.Fragment,I=Pe.exports.jsx,Rr=Pe.exports.jsxs,Fr=({cols:d,i:E,expandedContent:x})=>{const[g,k]=M.useState(!1),[O,T]=M.useState(!1);return M.useEffect(()=>{T(g)},[g]),Rr($r,{children:[I(jr,{isOdd:!!(E%2),isExpandable:!!x,onClick:()=>!!x&&k(h=>!h),children:d.map((h,c)=>I("td",{children:h},c))}),g&&I(Pr,{children:I("td",{colSpan:7,style:{height:O?"175px":"0px",position:"relative",overflow:"hidden"},children:x})})]})},Ir=N.default.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`,Nr=N.default.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`;return({headers:d,tableRows:E,fixedWidths:x={}})=>E.length?Rr(Ir,{children:[!!(d!=null&&d.length)&&I(Nr,{children:I("tr",{children:d.map(g=>I("th",{style:{...x[g]},children:g},g))})}),I("tbody",{children:E.map(({cols:g,expandedContent:k},O)=>I(Fr,{cols:g,i:O,expandedContent:k},O))})]}):I(Tr,{})});
