export type CellContent = JSX.Element | string

export interface RowProps {
  /**
   * An array of cell contents
   */
  cols: CellContent[]
  /**
   * The index for the row
   */
  i: number
  /**
   * Any content that ca be expanded
   */
  expandedContent?: JSX.Element
}

export interface TableProps {
  /**
   * An array of headers for the table
   */
  headers?: string[]
  /**
   * An array of rows containing columns and content
   */
  rows: Omit<RowProps, 'i'>[]
  /**
   * A map of custom column widths
   */
  fixedWidths?: { [key: number]: { width: string } }
}
