(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],o):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/button"]=o(t.React,t.styled))})(this,function(t,o){"use strict";const n=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},r=n(t),u=n(o),d={default:"black",pending:"blue",error:"red",success:"green"},c="",s=u.default.button(({status:e})=>o.css`
  ${c}
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
`);return({children:e,status:i="default",dataSelector:l="pi-lib-button",...a})=>r.default.createElement(s,{status:i,...a,"data-selector":l},e)});