import React from 'react'
import Row from './components/Row'
import { StyledTable, StyledTableHead } from './Table.style'
import { TableProps } from './Table.types'

export const Table = ({ headers, tableRows, fixedWidths = {} }: TableProps) => {
  return tableRows.length ? (
    <StyledTable>
      {!!headers?.length && (
        <StyledTableHead>
          <tr>
            {headers.map((label: string) => (
              <th key={label} style={{ ...fixedWidths[label] }}>
                {label}
              </th>
            ))}
          </tr>
        </StyledTableHead>
      )}
      <tbody>
        {tableRows.map(({ cols, expandedContent }, i) => (
          <Row key={i} {...{ cols, i, expandedContent }} />
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <Loader />
  )
}

export default Table
