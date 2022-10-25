import React from 'react'
import { StyledAdvancedButton } from './AdvancedButton.style'
import Button from '@pi-lib/button'
import Loader from '@pi-lib/loader'

export const AdvancedButton = () => <StyledAdvancedButton>
  <Button>
    <Loader/> Loading
  </Button>
</StyledAdvancedButton>

export default AdvancedButton
