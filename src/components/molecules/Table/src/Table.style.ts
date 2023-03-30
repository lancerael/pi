import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--special);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }

  & * {
    transition: all 0.2s;
  }
`
export const StyledTableHead = styled.thead`
  background: var(--textSoft);
  font-variant: all-small-caps;
  color: var(--border);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`
