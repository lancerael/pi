import { RowProps } from './components/Row/Row.types'

/**
 * The main prop interface for the table component
 */
export interface TableProps {
  /**
   * An array of headers for the table
   */
  headers?: CellContent[]
  /**
   * An array of rows containing columns and content
   */
  rows: Omit<RowProps, 'i'>[]
  /**
   * A map of custom column widths
   */
  fixedWidths?: { [key: number]: { width: string } }
}

/**
 * The content for the table cells
 */
export type CellContent = JSX.Element | string
