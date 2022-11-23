import { FC } from 'react'
import { StyledAdvancedButton } from './AdvancedButton.style'
import Button from '@pi-lib/button'
import Loader from '@pi-lib/loader'
import { AdvancedButtonProps } from './AdvancedButton.types'

export const AdvancedButton: FC<AdvancedButtonProps> = ({ isLoading, children, buttonProps } ) => (
  <StyledAdvancedButton>
    <Button status={isLoading ? 'pending' : 'default'} {...buttonProps}>
      { isLoading ? <Loader/> : children }
    </Button>
  </StyledAdvancedButton>
)

export default AdvancedButton
