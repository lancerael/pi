(function(t,d){typeof exports=="object"&&typeof module<"u"?module.exports=d(require("styled-components"),require("@pi-lib/styles"),require("react/jsx-runtime")):typeof define=="function"&&define.amd?define(["styled-components","@pi-lib/styles","react/jsx-runtime"],d):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=d(t.t,t.styles,t.jsxRuntime))})(this,function(t,d,i){"use strict";const n=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(t),l={default:"#444444",pending:"blue",error:"red",success:"green"},c=n.default.button(({status:e,minWidth:a,margin:s})=>t.css`
    ${d.box({color:e==="default"?"":l[e]})}
    min-width: ${a};
    margin: ${s};
    cursor: pointer;
    &:hover:not([disabled]) {
      filter: brightness(115%);
    }
    &:disabled {
      background-color: var(--border);
      color: var(--textSoft);
      cursor: default;
    }
  `),p=({children:e,status:a="default",dataSelector:s="pi-lib-button",minWidth:g="220px",margin:m="10px",...v})=>i.jsx(c,{status:a,...v,minWidth:g,margin:m,"data-selector":s,children:e}),u=t.keyframes`
  to {
    rotate: 360deg;
  }
`,f=t.keyframes`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`,h=n.default.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`,x=n.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${u} 2s linear infinite;
  margin: 2px;
`,r=n.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,o=n.default.div(({delay:e})=>t.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${f} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${e?"animation-delay: 0.3s;":""}
  `),y=()=>i.jsx(h,{title:"Loading...","data-selector":"pi-lib-loader",children:i.jsxs(x,{children:[i.jsxs(r,{children:[i.jsx(o,{delay:!0}),i.jsx(o,{})]}),i.jsxs(r,{children:[i.jsx(o,{}),i.jsx(o,{delay:!0})]})]})}),b=n.default.div``;return({isLoading:e,buttonProps:a,children:s})=>i.jsx(b,{children:i.jsx(p,{status:e?"pending":"default",...a,children:e?i.jsx(y,{}):s})})});
