import React from 'react'
import Loader from '@pi-lib/loader'
import Row from './components/Row'
import { StyledTable } from './Table.style'
import { TableProps } from './Table.types'

export const Table = ({
  headers,
  tableRows,
  fixedWidths,
  isLight,
}: TableProps) => {
  return tableRows.length ? (
    <StyledTable>
      {!!headers?.length && (
        <thead>
          <tr>
            {headers.map((label: string) => (
              <th key={label} style={{ ...fixedWidths[label] }}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className={isLight ? 'light' : ''}>
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
