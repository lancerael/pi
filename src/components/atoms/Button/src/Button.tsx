import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  dataSelector = 'pi-lib-button',
  minWidth = '220px',
  ...buttonProps
}) => (
  <StyledButton
    {...{ status, ...buttonProps, minWidth }}
    data-selector={dataSelector}
  >
    {children}
  </StyledButton>
)

export default Button
