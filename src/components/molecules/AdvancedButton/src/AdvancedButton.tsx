import React, { FC } from 'react'
import Button from '@pi-lib/button'
import Loader from '@pi-lib/loader'
import { AdvancedButtonProps } from './AdvancedButton.types'
import { StyledAdvancedButton } from './AdvancedButton.style'

export const AdvancedButton: FC<AdvancedButtonProps> = ({ isLoading, children, buttonProps } ) => (
  <StyledAdvancedButton>
    <Button status={isLoading ? 'pending' : 'default'} {...buttonProps}>
      { isLoading ? <Loader/> : children }
    </Button>
  </StyledAdvancedButton>
)

export default AdvancedButton
