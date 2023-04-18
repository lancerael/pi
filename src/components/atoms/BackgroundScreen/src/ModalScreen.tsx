import React, { FC } from 'react'
import { StyledModalScreen } from './ModalScreen.style'
import { ModalScreenProps } from './ModalScreen.types'

export const ModalScreen: FC<ModalScreenProps> = ({ children, isActive }) => (
  <StyledModalScreen {...{ isActive }}>{children}</StyledModalScreen>
)

export default ModalScreen
