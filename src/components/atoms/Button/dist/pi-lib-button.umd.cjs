(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("styled-components"),require("@pi-lib/styles"),require("react/jsx-runtime")):typeof define=="function"&&define.amd?define(["styled-components","@pi-lib/styles","react/jsx-runtime"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=n(t.styled,t.styles,t.jsxRuntime))})(this,function(t,n,r){"use strict";const s=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(t),u={default:"#444444",pending:"blue",error:"red",success:"green"},d=s.default.button(({status:e,minWidth:o,margin:i})=>t.css`
    ${n.box({color:e==="default"?"":u[e]})}
    min-width: ${o};
    margin: ${i};
    cursor: pointer;
    &:hover:not([disabled]) {
      filter: brightness(115%);
    }
    &:disabled {
      background-color: var(--border);
      color: var(--textSoft);
      cursor: default;
    }
  `);return({children:e,status:o="default",dataSelector:i="pi-lib-button",minWidth:l="220px",margin:c="10px",...f})=>r.jsx(d,{status:o,...f,minWidth:l,margin:c,"data-selector":i,children:e})});
