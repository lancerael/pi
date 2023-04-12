import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  dataSelector = 'pi-lib-button',
  isCompact,
  isSpecial,
  ...buttonProps
}) => (
  <StyledButton
    {...{ status, isCompact, isSpecial, ...buttonProps }}
    data-selector={dataSelector}
  >
    {children}
  </StyledButton>
)

export default Button
