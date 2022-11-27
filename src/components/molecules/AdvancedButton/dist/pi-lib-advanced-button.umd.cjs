(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=n(t.React,t.t))})(this,function(t,n){"use strict";const o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=o(t),r=o(n),l={default:"black",pending:"blue",error:"red",success:"green"},u="font-family: serif;",s=r.default.button(({status:e,minWidth:i,margin:a})=>n.css`
    ${u}
    border: 2px solid ${l[e]};
    color: ${l[e]};
    background-color: white;
    border-radius: 15px;
    min-width: ${i};
    padding: 10px;
    margin: ${a};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `),c=({children:e,status:i="default",dataSelector:a="pi-lib-button",minWidth:x="220px",margin:y="10px",...v})=>d.default.createElement(s,{status:i,...v,minWidth:x,margin:y,"data-selector":a},e),f={default:"black",pending:"blue",error:"red",success:"green"},p=n.keyframes`
  to {
    transform: rotate(360deg);
  }
`,m=r.default.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`,h=r.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${f.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${p} 2s linear infinite;
`,b=()=>d.default.createElement(m,{title:"Loading...","data-selector":"pi-lib-loader"},d.default.createElement(h,null)),g=r.default.div``;return({isLoading:e,children:i,buttonProps:a})=>d.default.createElement(g,null,d.default.createElement(c,{status:e?"pending":"default",...a},e?d.default.createElement(b,null):i))});
