import { TestId } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface InputProps extends React.HTMLProps<HTMLInputElement>, TestId {
  /**
   * A longer title for the browser tooltip
   */
  longTitle?: string
  /**
   * A type for the input
   */
  type?: 'text' | 'number' | 'color'
}
