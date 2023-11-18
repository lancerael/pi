import { TestId, Status } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface ButtonProps
  extends React.HTMLProps<HTMLButtonElement>,
    TestId {
  /**
   * Use styles for special states
   */
  status?: Status
  /**
   * Show a compact version of the button
   */
  isCompact?: boolean
  /**
   * Show a special inverted version of the button
   */
  isInverted?: boolean
}
