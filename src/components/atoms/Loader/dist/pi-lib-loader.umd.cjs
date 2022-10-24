(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["@pi-lib/loader"]=t(e.React,e.styled))})(this,function(e,t){"use strict";const i=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},o=i(e),d=i(t),r={default:"black",pending:"blue",error:"red",success:"green"},a=t.keyframes`
  to {
    transform: rotate(360deg);
  }
`,s=d.default.div`
  border-radius: 50%;
  border: 2px solid ${r.pending};
  width: 22px;
  height: 22px;
  margin: -8px 0 -8px 28px;
  display: inline-block;
  clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);
  animation: ${a} 1s linear infinite;
`;return()=>o.default.createElement(s,{title:"Loading...","data-selector":"pi-lib-loader"})});
