import Button from '@pi-lib/button'
import Loader from '@pi-lib/loader'
import { StyledAdvancedButton } from './AdvancedButton.style'
import { AdvancedButtonProps } from './AdvancedButton.types'

/**
 * A React component for an advanced button with a built in loader
 */
export const AdvancedButton = ({
  isLoading,
  children,
  ...buttonProps
}: AdvancedButtonProps) => (
  <StyledAdvancedButton>
    <Button status={isLoading ? 'pending' : 'default'} {...buttonProps}>
      {isLoading ? <Loader /> : children}
    </Button>
  </StyledAdvancedButton>
)

export default AdvancedButton
