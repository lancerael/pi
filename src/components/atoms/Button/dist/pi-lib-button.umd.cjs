(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=n(t.React,t.styled))})(this,function(t,n){"use strict";const r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},u=r(t),s=r(n),i={default:"black",pending:"blue",error:"red",success:"green"},c="font-family: serif;",f=s.default.button(({status:e,minWidth:o,margin:d})=>n.css`
    ${c}
    border: 2px solid ${i[e]};
    color: ${i[e]};
    background-color: white;
    border-radius: 15px;
    min-width: ${o};
    padding: 10px;
    margin: ${d};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `);return({children:e,status:o="default",dataSelector:d="pi-lib-button",minWidth:l="220px",margin:a="10px",...p})=>u.default.createElement(f,{status:o,...p,minWidth:l,margin:a,"data-selector":d},e)});
