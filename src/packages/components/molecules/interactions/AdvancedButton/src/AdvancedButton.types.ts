import { ButtonProps } from '@pi-lib/button/src/Button.types'

/**
 * The main prop interface for the component
 */
export interface AdvancedButtonProps extends Omit<ButtonProps, 'status'> {
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean
}
