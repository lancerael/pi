(function(f,b){typeof exports=="object"&&typeof module<"u"?module.exports=b(require("react"),require("@pi-lib/styles"),require("styled-components"),require("react/jsx-runtime")):typeof define=="function"&&define.amd?define(["react","@pi-lib/styles","styled-components","react/jsx-runtime"],b):(f=typeof globalThis<"u"?globalThis:f||self,f["@pi-lib/tooltip"]=b(f.React,f.styles,f.styled,f.jsxRuntime))})(this,function(f,b,I,W){"use strict";const $=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="Expected a function",S=0/0,C="[object Symbol]",M=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,N=/^0o[0-7]+$/i,w=parseInt,A=typeof g=="object"&&g&&g.Object===Object&&g,B=typeof self=="object"&&self&&self.Object===Object&&self,D=A||B||Function("return this")(),F=Object.prototype,G=F.toString,H=Math.max,U=Math.min,x=function(){return D.Date.now()};function X(e,n,t){var r,s,p,l,o,a,u=0,m=!1,c=!1,T=!0;if(typeof e!="function")throw new TypeError(O);n=L(n)||0,v(t)&&(m=!!t.leading,c="maxWait"in t,p=c?H(L(t.maxWait)||0,n):p,T="trailing"in t?!!t.trailing:T);function j(i){var d=r,y=s;return r=s=void 0,u=i,l=e.apply(y,d),l}function Y(i){return u=i,o=setTimeout(h,n),m?j(i):l}function Z(i){var d=i-a,y=i-u,_=n-d;return c?U(_,p-y):_}function k(i){var d=i-a,y=i-u;return a===void 0||d>=n||d<0||c&&y>=p}function h(){var i=x();if(k(i))return R(i);o=setTimeout(h,Z(i))}function R(i){return o=void 0,T&&r?j(i):(r=s=void 0,l)}function ee(){o!==void 0&&clearTimeout(o),u=0,r=a=s=o=void 0}function te(){return o===void 0?l:R(x())}function E(){var i=x(),d=k(i);if(r=arguments,s=this,a=i,d){if(o===void 0)return Y(a);if(c)return o=setTimeout(h,n),j(a)}return o===void 0&&(o=setTimeout(h,n)),l}return E.cancel=ee,E.flush=te,E}function z(e,n,t){var r=!0,s=!0;if(typeof e!="function")throw new TypeError(O);return v(t)&&(r="leading"in t?!!t.leading:r,s="trailing"in t?!!t.trailing:s),X(e,n,{leading:r,maxWait:n,trailing:s})}function v(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function J(e){return!!e&&typeof e=="object"}function K(e){return typeof e=="symbol"||J(e)&&G.call(e)==C}function L(e){if(typeof e=="number")return e;if(K(e))return S;if(v(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=v(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(M,"");var t=q.test(e);return t||N.test(e)?w(e.slice(2),t?2:8):P.test(e)?S:+e}var Q=z;const V=$.default.div(({isVisible:e=!1})=>I.css`
    position: absolute;
    transition: all 0.2s;
    opacity: ${e?.9:0};
    ${b.box()}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 3px solid var(--border);
      border-right: 3px solid var(--border);
      background: var(--subtle);
      rotate: -135deg;
      left: calc(50% - 5px);
      top: -8px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `);return({children:e,isVisible:n=!1,x:t=0,y:r=0})=>{const s=f.useRef(null),[p,l]=f.useState({x:t,y:r}),o=f.useCallback((a,u)=>{var m,c;return l({x:a-((c=(m=s.current)==null?void 0:m.clientWidth)!=null?c:0)/2,y:u+24})},[s.current]);return f.useEffect(()=>{o(t,r);const a=Q(({clientX:m,clientY:c})=>!t&&!r&&o(m,c),100),u=()=>{removeEventListener("mousemove",a)};return t&&r?u():addEventListener("mousemove",a),u},[t,r]),W.jsx(V,{ref:s,isVisible:n,children:e,style:{left:p.x,top:p.y}})}});
