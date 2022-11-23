import React, { FC } from 'react'
import { StyledButton } from './Button.style'
import { ButtonProps } from './Button.types'

export const Button:FC<ButtonProps> = ({ children, status = 'default', dataSelector = 'pi-lib-button', ...buttonProps }) => (
  <StyledButton {...{status, ...buttonProps}} data-selector={dataSelector}>
    { children }
  </StyledButton>
)

export default Button
