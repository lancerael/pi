import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th,
  & td {
    padding: 6px;
    text-align: center;
    &:not(:last-of-type) {
      border-right: 2px solid var(--mark);
    }
  }

  & tr:last-of-type {
    border-bottom: 2px solid var(--mark);
  }

  & * {
    transition: all 0.2s;
  }
`
export const StyledTableHead = styled.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);
  border: 1px solid var(--dark);
  border-width: 0 1px;
`
