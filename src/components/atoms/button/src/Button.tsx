import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button = ({ children, status = 'default', dataSelector = 'pi-button', ...buttonProps }: ButtonProps) => (
  <StyledButton {...{status, ...buttonProps}} data-selector={dataSelector}>
    { children }
  </StyledButton>
)

export default Button
