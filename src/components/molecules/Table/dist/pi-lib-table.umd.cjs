(function(m,O){typeof exports=="object"&&typeof module<"u"?module.exports=O(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],O):(m=typeof globalThis<"u"?globalThis:m||self,m["@pi-lib/table"]=O(m.require$$0,m.styled))})(this,function(m,O){"use strict";const re=s=>s&&typeof s=="object"&&"default"in s?s:{default:s},te=re(m),L=re(O),ke=L.default.tr(({isOdd:s,isExpandable:g})=>O.css`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${g&&O.css`
      cursor: pointer;
      &:hover {
        background: var(--shadow);
      }
    `}

    ${s&&O.css`
      background: var(--border);
    `}
  `),De=L.default.tr`
  & > td,
  & > div {
    transition: all 1s;
  }

  & > td {
    background: var(--shadow);
    position: relative;
    overflow: hidden;

    & > div {
      position: absolute;
    }
  }
`;var V={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Fe(){if(ne)return I;ne=1;var s=te.default,g=Symbol.for("react.element"),R=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function C(y,c,k){var h,T={},P=null,N=null;k!==void 0&&(P=""+k),c.key!==void 0&&(P=""+c.key),c.ref!==void 0&&(N=c.ref);for(h in c)d.call(c,h)&&!E.hasOwnProperty(h)&&(T[h]=c[h]);if(y&&y.defaultProps)for(h in c=y.defaultProps,c)T[h]===void 0&&(T[h]=c[h]);return{$$typeof:g,type:y,key:P,ref:N,props:T,_owner:x.current}}return I.Fragment=R,I.jsx=C,I.jsxs=C,I}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Ae(){return ae||(ae=1,process.env.NODE_ENV!=="production"&&function(){var s=te.default,g=Symbol.for("react.element"),R=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),y=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),ie=Symbol.iterator,Le="@@iterator";function Ve(e){if(e===null||typeof e!="object")return null;var r=ie&&e[ie]||e[Le];return typeof r=="function"?r:null}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ne("error",e,t)}}function Ne(e,r,t){{var n=D.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Me=!1,Ue=!1,Be=!1,qe=!1,Je=!1,ue;ue=Symbol.for("react.module.reference");function ze(e){return!!(typeof e=="string"||typeof e=="function"||e===d||e===E||Je||e===x||e===k||e===h||qe||e===N||Me||Ue||Be||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===T||e.$$typeof===C||e.$$typeof===y||e.$$typeof===c||e.$$typeof===ue||e.getModuleId!==void 0))}function Ge(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function se(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case R:return"Portal";case E:return"Profiler";case x:return"StrictMode";case k:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return se(r)+".Consumer";case C:var t=e;return se(t._context)+".Provider";case c:return Ge(e,e.render,"ForwardRef");case T:var n=e.displayName||null;return n!==null?n:S(e.type)||"Memo";case P:{var i=e,u=i._payload,o=i._init;try{return S(o(u))}catch{return null}}}return null}var j=Object.assign,Y=0,le,fe,ce,de,ve,pe,he;function be(){}be.__reactDisabledLog=!0;function He(){{if(Y===0){le=console.log,fe=console.info,ce=console.warn,de=console.error,ve=console.group,pe=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Ke(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:j({},e,{value:le}),info:j({},e,{value:fe}),warn:j({},e,{value:ce}),error:j({},e,{value:de}),group:j({},e,{value:ve}),groupCollapsed:j({},e,{value:pe}),groupEnd:j({},e,{value:he})})}Y<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var z=D.ReactCurrentDispatcher,G;function M(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var H=!1,U;{var Xe=typeof WeakMap=="function"?WeakMap:Map;U=new Xe}function ge(e,r){if(!e||H)return"";{var t=U.get(e);if(t!==void 0)return t}var n;H=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=z.current,z.current=null,He();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(w){n=w}Reflect.construct(e,[],o)}else{try{o.call()}catch(w){n=w}e.call(o.prototype)}}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),p=n.stack.split(`
`),l=a.length-1,f=p.length-1;l>=1&&f>=0&&a[l]!==p[f];)f--;for(;l>=1&&f>=0;l--,f--)if(a[l]!==p[f]){if(l!==1||f!==1)do if(l--,f--,f<0||a[l]!==p[f]){var b=`
`+a[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&U.set(e,b),b}while(l>=1&&f>=0);break}}}finally{H=!1,z.current=u,Ke(),Error.prepareStackTrace=i}var A=e?e.displayName||e.name:"",je=A?M(A):"";return typeof e=="function"&&U.set(e,je),je}function Ze(e,r,t){return ge(e,!1)}function Qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,Qe(e));if(typeof e=="string")return M(e);switch(e){case k:return M("Suspense");case h:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ze(e.render);case T:return B(e.type,r,t);case P:{var n=e,i=n._payload,u=n._init;try{return B(u(i),r,t)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,ye={},me=D.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function er(e,r,t,n,i){{var u=Function.call.bind(q);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var p=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){a=l}a&&!(a instanceof Error)&&(J(i),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),J(null)),a instanceof Error&&!(a.message in ye)&&(ye[a.message]=!0,J(i),v("Failed %s type: %s",t,a.message),J(null))}}}var rr=Array.isArray;function K(e){return rr(e)}function tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function nr(e){try{return _e(e),!1}catch{return!0}}function _e(e){return""+e}function Ee(e){if(nr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),_e(e)}var $=D.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0},Re,Te,X;X={};function or(e){if(q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ur(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=S($.current.type);X[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S($.current.type),e.ref),X[t]=!0)}}function sr(e,r){{var t=function(){Re||(Re=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function lr(e,r){{var t=function(){Te||(Te=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var fr=function(e,r,t,n,i,u,o){var a={$$typeof:g,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function cr(e,r,t,n,i){{var u,o={},a=null,p=null;t!==void 0&&(Ee(t),a=""+t),ir(r)&&(Ee(r.key),a=""+r.key),or(r)&&(p=r.ref,ur(r,i));for(u in r)q.call(r,u)&&!ar.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var l=e.defaultProps;for(u in l)o[u]===void 0&&(o[u]=l[u])}if(a||p){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&sr(o,f),p&&lr(o,f)}return fr(e,a,p,i,n,$.current,o)}}var Z=D.ReactCurrentOwner,Se=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Se.setExtraStackFrame(t)}else Se.setExtraStackFrame(null)}var Q;Q=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function we(){{if(Z.current){var e=S(Z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Oe={};function vr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=vr(r);if(Oe[t])return;Oe[t]=!0;var n="";e&&e._owner&&e._owner!==Z.current&&(n=" It was passed a child from "+S(e._owner.type)+"."),F(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),F(null)}}function Ce(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&xe(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var i=Ve(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)ee(o.value)&&xe(o.value,r)}}}function pr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===T))t=r.propTypes;else return;if(t){var n=S(r);er(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Q){Q=!0;var i=S(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function hr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){F(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),F(null);break}}e.ref!==null&&(F(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function Pe(e,r,t,n,i,u){{var o=ze(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=dr(i);p?a+=p:a+=we();var l;e===null?l="null":K(e)?l="array":e!==void 0&&e.$$typeof===g?(l="<"+(S(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,a)}var f=cr(e,r,t,i,u);if(f==null)return f;if(o){var b=r.children;if(b!==void 0)if(n)if(K(b)){for(var A=0;A<b.length;A++)Ce(b[A],e);Object.freeze&&Object.freeze(b)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(b,e)}return e===d?hr(f):pr(f),f}}function br(e,r,t){return Pe(e,r,t,!0)}function gr(e,r,t){return Pe(e,r,t,!1)}var yr=gr,mr=br;W.Fragment=d,W.jsx=yr,W.jsxs=mr}()),W}(function(s){process.env.NODE_ENV==="production"?s.exports=Fe():s.exports=Ae()})(V);const Ie=V.exports.Fragment,_=V.exports.jsx,oe=V.exports.jsxs,We=({cols:s,i:g,expandedContent:R})=>{const[d,x]=m.useState(!1),[E,C]=m.useState(!1);return m.useEffect(()=>{C(d)},[d]),oe(Ie,{children:[_(ke,{isOdd:!!(g%2),isExpandable:!!R,onClick:()=>!!R&&x(y=>!y),children:s.map((y,c)=>_("td",{children:y},c))}),d&&_(De,{children:_("td",{colSpan:7,style:{height:E?"175px":"0px"},children:_("div",{style:{opacity:E?"1":"0"},children:R})})})]})},Ye=L.default.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`,$e=L.default.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`;return({headers:s=[],tableRows:g=[],fixedWidths:R={}})=>oe(Ye,{children:[!!(s!=null&&s.length)&&_($e,{children:_("tr",{children:s.map(d=>_("th",{style:{...R[d]},children:d},d))})}),_("tbody",{children:g.map(({cols:d,expandedContent:x},E)=>_(We,{cols:d,i:E,expandedContent:x},E))})]})});
