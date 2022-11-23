(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=n(t.React,t.t))})(this,function(t,n){"use strict";const l=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=l(t),a=l(n),r={default:"black",pending:"blue",error:"red",success:"green"},u="font-family: serif;",s=a.default.button(({status:e})=>n.css`
  ${u}
  border: 2px solid ${r[e]};
  color:  ${r[e]};
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
`),c=({children:e,status:i="default",dataSelector:o="pi-lib-button",...g})=>d.default.createElement(s,{status:i,...g,"data-selector":o},e),p={default:"black",pending:"blue",error:"red",success:"green"},f=n.keyframes`
  to {
    transform: rotate(360deg);
  }
`,b=a.default.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`,h=a.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${p.pending};
  overflow: hidden;
  clip-path: polygon(-5px -5px, 50% -5px, 50% 50%, 100% 50%, 100% 100%, -5px 100%);
  animation: ${f} 2s linear infinite;
`,m=()=>d.default.createElement(b,{title:"Loading...","data-selector":"pi-lib-loader"},d.default.createElement(h,null)),x=a.default.div``;return({isLoading:e,children:i,buttonProps:o})=>d.default.createElement(x,null,d.default.createElement(c,{status:e?"pending":"default",...o},e?d.default.createElement(m,null):i))});
