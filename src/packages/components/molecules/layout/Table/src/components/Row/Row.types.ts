import { CellContent } from '../../Table.types'

/**
 * The main prop interface for the table row
 */
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
