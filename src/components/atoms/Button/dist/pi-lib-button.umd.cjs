(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=n(t.React,t.styled))})(this,function(t,n){"use strict";const d=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},i=d(t),u=d(n),r={default:"black",pending:"blue",error:"red",success:"green"},s="font-family: serif;",c=u.default.button(({status:e,minWidth:o})=>n.css`
    ${s}
    border: 2px solid ${r[e]};
    color: ${r[e]};
    background-color: white;
    border-radius: 15px;
    min-width: ${o};
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `);return({children:e,status:o="default",dataSelector:f="pi-lib-button",minWidth:l="220px",...a})=>i.default.createElement(c,{status:o,...a,minWidth:l,"data-selector":f},e)});
