(function(y,C){typeof exports=="object"&&typeof module<"u"?module.exports=C(require("styled-components"),require("react")):typeof define=="function"&&define.amd?define(["styled-components","react"],C):(y=typeof globalThis<"u"?globalThis:y||self,y["@pi-lib/loader"]=C(y.styled,y.require$$0))})(this,function(y,C){"use strict";const ne=v=>v&&typeof v=="object"&&"default"in v?v:{default:v},P=ne(y),ae=ne(C),ie={default:"#444444",pending:"blue",error:"red",success:"green"},oe=y.keyframes`
  to {
    rotate: 360deg;
  }
`,$e=y.keyframes`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`,Ie=P.default.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`,Le=P.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${oe} 2s linear infinite;
  margin: 2px;
`,ue=P.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,L=P.default.div(({delay:v})=>y.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${ie.pending};
    animation: ${$e} 0.3s linear alternate infinite;

    ${v?"animation-delay: 0.2s;":""}
  `);P.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${ie.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${oe} 2s linear infinite;
`;var J={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function We(){if(se)return j;se=1;var v=ae.default,F=Symbol.for("react.element"),z=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,W=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function A(_,f,T){var p,g={},E=null,N=null;T!==void 0&&(E=""+T),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(N=f.ref);for(p in f)x.call(f,p)&&!Y.hasOwnProperty(p)&&(g[p]=f[p]);if(_&&_.defaultProps)for(p in f=_.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:F,type:_,key:E,ref:N,props:g,_owner:W.current}}return j.Fragment=z,j.jsx=A,j.jsxs=A,j}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Ye(){return le||(le=1,process.env.NODE_ENV!=="production"&&function(){var v=ae.default,F=Symbol.for("react.element"),z=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),_=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),fe=Symbol.iterator,Ne="@@iterator";function Ue(e){if(e===null||typeof e!="object")return null;var r=fe&&e[fe]||e[Ne];return typeof r=="function"?r:null}var w=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ve("error",e,t)}}function Ve(e,r,t){{var n=w.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Me=!1,qe=!1,Be=!1,Je=!1,Ge=!1,ce;ce=Symbol.for("react.module.reference");function ze(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===Y||Ge||e===W||e===T||e===p||Je||e===N||Me||qe||Be||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===g||e.$$typeof===A||e.$$typeof===_||e.$$typeof===f||e.$$typeof===ce||e.getModuleId!==void 0))}function Ke(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function de(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case z:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case T:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return de(r)+".Consumer";case A:var t=e;return de(t._context)+".Provider";case f:return Ke(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case E:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var R=Object.assign,$=0,ve,pe,he,ye,ge,be,me;function _e(){}_e.__reactDisabledLog=!0;function He(){{if($===0){ve=console.log,pe=console.info,he=console.warn,ye=console.error,ge=console.group,be=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:_e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function Xe(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ve}),info:R({},e,{value:pe}),warn:R({},e,{value:he}),error:R({},e,{value:ye}),group:R({},e,{value:ge}),groupCollapsed:R({},e,{value:be}),groupEnd:R({},e,{value:me})})}$<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=w.ReactCurrentDispatcher,H;function U(e,r,t){{if(H===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||""}return`
`+H+e}}var X=!1,V;{var Ze=typeof WeakMap=="function"?WeakMap:Map;V=new Ze}function Ee(e,r){if(!e||X)return"";{var t=V.get(e);if(t!==void 0)return t}var n;X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=K.current,K.current=null,He();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(m){n=m}Reflect.construct(e,[],i)}else{try{i.call()}catch(m){n=m}e.call(i.prototype)}}else{try{throw Error()}catch(m){n=m}e()}}catch(m){if(m&&n&&typeof m.stack=="string"){for(var a=m.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var h=`
`+a[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,h),h}while(s>=1&&l>=0);break}}}finally{X=!1,K.current=u,Xe(),Error.prepareStackTrace=o}var O=e?e.displayName||e.name:"",Ae=O?U(O):"";return typeof e=="function"&&V.set(e,Ae),Ae}function Qe(e,r,t){return Ee(e,!1)}function er(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function M(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,er(e));if(typeof e=="string")return U(e);switch(e){case T:return U("Suspense");case p:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Qe(e.render);case g:return M(e.type,r,t);case E:{var n=e,o=n._payload,u=n._init;try{return M(u(o),r,t)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,Re={},xe=w.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);xe.setExtraStackFrame(t)}else xe.setExtraStackFrame(null)}function rr(e,r,t,n,o){{var u=Function.call.bind(q);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),B(null)),a instanceof Error&&!(a.message in Re)&&(Re[a.message]=!0,B(o),c("Failed %s type: %s",t,a.message),B(null))}}}var tr=Array.isArray;function Z(e){return tr(e)}function nr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ar(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function we(e){if(ar(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",nr(e)),Te(e)}var I=w.ReactCurrentOwner,ir={key:!0,ref:!0,__self:!0,__source:!0},Se,Oe,Q;Q={};function or(e){if(q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ur(e){if(q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function sr(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=b(I.current.type);Q[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(I.current.type),e.ref),Q[t]=!0)}}function lr(e,r){{var t=function(){Se||(Se=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function fr(e,r){{var t=function(){Oe||(Oe=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var cr=function(e,r,t,n,o,u,i){var a={$$typeof:F,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function dr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(we(t),a=""+t),ur(r)&&(we(r.key),a=""+r.key),or(r)&&(d=r.ref,sr(r,o));for(u in r)q.call(r,u)&&!ir.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&lr(i,l),d&&fr(i,l)}return cr(e,a,d,o,n,I.current,i)}}var ee=w.ReactCurrentOwner,Ce=w.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=M(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===F}function Pe(){{if(ee.current){var e=b(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var je={};function pr(e){{var r=Pe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function ke(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=pr(r);if(je[t])return;je[t]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),S(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function De(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var n=e[t];te(n)&&ke(n,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var o=Ue(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)te(i.value)&&ke(i.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=b(r);rr(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var o=b(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function yr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}function Fe(e,r,t,n,o,u){{var i=ze(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=vr(o);d?a+=d:a+=Pe();var s;e===null?s="null":Z(e)?s="array":e!==void 0&&e.$$typeof===F?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=dr(e,r,t,o,u);if(l==null)return l;if(i){var h=r.children;if(h!==void 0)if(n)if(Z(h)){for(var O=0;O<h.length;O++)De(h[O],e);Object.freeze&&Object.freeze(h)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else De(h,e)}return e===x?yr(l):hr(l),l}}function gr(e,r,t){return Fe(e,r,t,!0)}function br(e,r,t){return Fe(e,r,t,!1)}var mr=br,_r=gr;k.Fragment=x,k.jsx=mr,k.jsxs=_r}()),k}(function(v){process.env.NODE_ENV==="production"?v.exports=We():v.exports=Ye()})(J);const D=J.exports.jsx,G=J.exports.jsxs;return()=>D(Ie,{title:"Loading...","data-selector":"pi-lib-loader",children:G(Le,{children:[G(ue,{children:[D(L,{delay:!0}),D(L,{})]}),G(ue,{children:[D(L,{}),D(L,{delay:!0})]})]})})});
