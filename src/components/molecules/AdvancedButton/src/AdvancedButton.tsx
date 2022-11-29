import React, { FC } from 'react'
import Button from '@pi-lib/button'
import Loader from '@pi-lib/loader'
import { StyledAdvancedButton } from './AdvancedButton.style'
import { AdvancedButtonProps } from './AdvancedButton.types'

export const AdvancedButton: FC<AdvancedButtonProps> = ({
  isLoading,
  buttonProps,
  children,
}) => (
  <StyledAdvancedButton>
    <Button status={isLoading ? 'pending' : 'default'} {...buttonProps}>
      {isLoading ? <Loader /> : children}
    </Button>
  </StyledAdvancedButton>
)

export default AdvancedButton
