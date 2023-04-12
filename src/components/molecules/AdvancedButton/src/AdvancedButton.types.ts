import { ButtonProps } from '@pi-lib/button/src/Button.types'

export interface AdvancedButtonProps extends ButtonProps {
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean
}
