(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("styled-components"),require("react")):typeof define=="function"&&define.amd?define(["styled-components","react"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=n(t.o,t.e))})(this,function(t,n){"use strict";const i=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=i(t),a=i(n),s=d.default.div``,l={default:"black",pending:"blue",error:"red",success:"green"},c="font-family: serif;",u=d.default.button(({status:e})=>t.css`
  ${c}
  border: 2px solid ${l[e]};
  color:  ${l[e]};
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
`),p=({children:e,status:o="default",dataSelector:m="pi-lib-button",...y})=>a.default.createElement(u,{status:o,...y,"data-selector":m},e),f={default:"black",pending:"blue",error:"red",success:"green"},b=t.keyframes`
  to {
    transform: rotate(360deg);
  }
`,x=d.default.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`,r=d.default.div(({secondary:e})=>t.css`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0px 2px ${f.pending};
  overflow: hidden;
  clip-path: polygon(-3px -3px, 50% -3px, 50% 23px, -3px 23px);
  animation: ${b} ${e?"2":"3"}s linear infinite;
`),h=()=>a.default.createElement(x,{title:"Loading...","data-selector":"pi-lib-loader"},a.default.createElement(r,null),a.default.createElement(r,{secondary:!0}));return({isLoading:e,children:o})=>React.createElement(s,null,React.createElement(p,null,e?React.createElement(h,null):o))});
