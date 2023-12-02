import { Size } from '@pi-lib/styles'
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
  /**
   * Show a shadowed version of the button
   */
  isShadowed?: boolean
  /**
   * Show a specific size of button from the theme
   */
  buttonSize?: Size
}
