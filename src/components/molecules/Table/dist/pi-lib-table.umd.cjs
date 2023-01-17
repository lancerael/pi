(function(s,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("react"),require("styled-components"),require("react/jsx-runtime")):typeof define=="function"&&define.amd?define(["react","styled-components","react/jsx-runtime"],r):(s=typeof globalThis<"u"?globalThis:s||self,s["@pi-lib/table"]=r(s.React,s.styled,s.jsxRuntime))})(this,function(s,r,e){"use strict";const a=(t=>t&&typeof t=="object"&&"default"in t?t:{default:t})(r),p=a.default.tr(({isOdd:t,isExpandable:l})=>r.css`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${l&&r.css`
      cursor: pointer;
      &:hover {
        background: var(--shadow);
      }
    `}

    ${t&&r.css`
      background: var(--border);
    `}
  `),f=a.default.tr`
  & > td,
  & > div {
    transition: all 1s;
  }

  & > td {
    background: var(--shadow);
    position: relative;
    overflow: hidden;

    & > div {
      position: absolute;
    }
  }
`,h=({cols:t,i:l,expandedContent:i})=>{const[o,c]=s.useState(!1),[d,v]=s.useState(!1);return s.useEffect(()=>{v(o)},[o]),e.jsxs(e.Fragment,{children:[e.jsx(p,{isOdd:!!(l%2),isExpandable:!!i,onClick:()=>!!i&&c(n=>!n),children:t.map((n,y)=>e.jsx("td",{children:n},y))}),o&&e.jsx(f,{children:e.jsx("td",{colSpan:7,style:{height:d?"175px":"0px"},children:e.jsx("div",{style:{opacity:d?"1":"0"},children:i})})})]})},u=a.default.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`,b=a.default.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`;return({headers:t=[],tableRows:l=[],fixedWidths:i={}})=>e.jsxs(u,{children:[!!(t!=null&&t.length)&&e.jsx(b,{children:e.jsx("tr",{children:t.map(o=>e.jsx("th",{style:{...i[o]},children:o},o))})}),e.jsx("tbody",{children:l.map(({cols:o,expandedContent:c},d)=>e.jsx(h,{cols:o,i:d,expandedContent:c},d))})]})});
