import { useState as n, useEffect as v } from 'react'
import s, { css as c } from 'styled-components'
import { jsxs as p, Fragment as f, jsx as t } from 'react/jsx-runtime'
const m = s.tr(
    ({ isOdd: l, isExpandable: o }) => c`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${
      o &&
      c`
      cursor: pointer;
      &:hover {
        background: var(--shadow);
      }
    `
    }

    ${
      l &&
      c`
      background: var(--border);
    `
    }
  `
  ),
  g = s.tr`
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
`,
  u = ({ cols: l, i: o, expandedContent: e }) => {
    const [r, a] = n(!1),
      [i, h] = n(!1)
    return (
      v(() => {
        h(r)
      }, [r]),
      /* @__PURE__ */ p(f, {
        children: [
          /* @__PURE__ */ t(m, {
            isOdd: !!(o % 2),
            isExpandable: !!e,
            onClick: () => !!e && a((d) => !d),
            children: l.map((d, b) =>
              /* @__PURE__ */ t(
                'td',
                {
                  children: d,
                },
                b
              )
            ),
          }),
          r &&
            /* @__PURE__ */ t(g, {
              children: /* @__PURE__ */ t('td', {
                colSpan: 7,
                style: {
                  height: i ? '175px' : '0px',
                },
                children: /* @__PURE__ */ t('div', {
                  style: {
                    opacity: i ? '1' : '0',
                  },
                  children: e,
                }),
              }),
            }),
        ],
      })
    )
  },
  y = s.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`,
  x = s.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`,
  I = ({ headers: l = [], tableRows: o = [], fixedWidths: e = {} }) =>
    /* @__PURE__ */ p(y, {
      children: [
        !!(l != null && l.length) &&
          /* @__PURE__ */ t(x, {
            children: /* @__PURE__ */ t('tr', {
              children: l.map((r) =>
                /* @__PURE__ */ t(
                  'th',
                  {
                    style: {
                      ...e[r],
                    },
                    children: r,
                  },
                  r
                )
              ),
            }),
          }),
        /* @__PURE__ */ t('tbody', {
          children: o.map(({ cols: r, expandedContent: a }, i) =>
            /* @__PURE__ */ t(
              u,
              {
                cols: r,
                i,
                expandedContent: a,
              },
              i
            )
          ),
        }),
      ],
    })
export { I as default }
