import React from 'react'
import Row from './components/Row'
import { StyledTable, StyledTableHead } from './Table.style'
import { CellContent, TableProps } from './Table.types'

/**
 * A React component for a table with expandable rows
 */
export const Table = ({
  headers = [],
  rows = [],
  fixedWidths = {},
}: TableProps) => (
  <StyledTable>
    {!!headers?.length && (
      <StyledTableHead>
        <tr>
          {headers.map((content: CellContent, i) => (
            <th key={i} style={{ ...fixedWidths[i] }}>
              {content}
            </th>
          ))}
        </tr>
      </StyledTableHead>
    )}
    <tbody>
      {rows.map(({ cols, expandedContent }, i) => (
        <Row key={i} {...{ cols, i, expandedContent }} />
      ))}
    </tbody>
  </StyledTable>
)

export default Table
