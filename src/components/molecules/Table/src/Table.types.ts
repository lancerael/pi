export type CellContent = JSX.Element | string

export interface RowProps {
  cols: CellContent[]
  i: number
  expandedContent?: JSX.Element
}

export interface TableProps {
  headers?: string[]
  rows: Omit<RowProps, 'i'>[]
  fixedWidths?: { [key: number]: { width: string } }
}
