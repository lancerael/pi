(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=n(t.React,t.styled))})(this,function(t,n){"use strict";const o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=o(t),s=o(n),d={default:"black",pending:"blue",error:"red",success:"green"},u="font-family: sans-serif;",i=s.default.button(({status:e})=>n.css`
  ${u}
  border: 2px solid ${d[e]};
  color:  ${d[e]};
  background-color: white;
  border-radius: 15px;
  width: 220px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: default;
  }
`);return({children:e,status:c="default",dataSelector:f="pi-lib-button",...l})=>r.default.createElement(i,{status:c,...l,"data-selector":f},e)});
