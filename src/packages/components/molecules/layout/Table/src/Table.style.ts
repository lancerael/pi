import styled from 'styled-components'

/**
 * The main styles for the table element
 */
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th,
  & td {
    padding: 6px;
    text-align: center;
    &:not(:last-of-type) {
      border-right: 1px solid var(--mark);
    }
  }

  & tr:last-of-type {
    border-bottom: 1px solid var(--mark);
  }

  & * {
    transition: all 0.2s;
  }
`

/**
 * The styles for the thead component
 */
export const StyledTableHead = styled.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);
  border: 1px solid var(--dark);
  border-width: 0 1px;
`
