import React, { FC } from 'react'
import { StyledModalScreen } from './ModalScreen.style'
import { ModalScreenProps } from './ModalScreen.types'

/**
 * A React component used to block out the screen with modal content
 */
export const ModalScreen: FC<ModalScreenProps> = ({
  children,
  isActive = false,
}) => <StyledModalScreen {...{ isActive }}>{children}</StyledModalScreen>

export default ModalScreen
