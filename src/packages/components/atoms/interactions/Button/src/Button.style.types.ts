import { PiTheme } from '@pi-lib/styles/src/theme.types'
import { Status } from '@pi-lib/types'

/**
 * The props for the styled button
 */
export interface StyledButtonProps {
  /**
   * The currently selected theme
   */
  theme: PiTheme
  /**
   * The button's status which determines colour
   */
  status: Status
  /**
   * Is this button compacted?
   */
  isCompact?: boolean
  /**
   * Is this button style inverted?
   */
  isInverted?: boolean
}
