(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],o):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=o(t.React,t.styled))})(this,function(t,o){"use strict";const d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},s=d(t),u=d(o),i={default:"black",pending:"blue",error:"red",success:"green"},c="font-family: serif;",f=u.default.button(({status:e,minWidth:n,margin:r})=>o.css`
    ${c}
    border: 1px solid ${i[e]};
    color: ${i[e]};
    background-color: white;
    border-radius: 6px;
    min-width: ${n};
    padding: 8px;
    margin: ${r};
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
    &:hover {
      filter: brightness(85%);
    }
    &:disabled {
      color: grey;
      cursor: default;
      filter: brightness(95%);
    }
  `);return({children:e,status:n="default",dataSelector:r="pi-lib-button",minWidth:l="220px",margin:a="10px",...p})=>s.default.createElement(f,{status:n,...p,minWidth:l,margin:a,"data-selector":r},e)});
