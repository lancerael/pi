import { ButtonProps } from '@pi-lib/button/src/Button.types'
import { CustomIconProps } from '@pi-lib/custom-icon/src/CustomIcon.types'

/**
 * The main prop interface for the component
 */
export interface IconButtonProps {
  /**
   * Standard props for the Button component
   */
  buttonProps: ButtonProps
  /**
   * Standard props for the CustomIcon component
   */
  iconProps: CustomIconProps
}
