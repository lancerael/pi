import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  dataSelector = 'pi-lib-button',
  isCompact,
  isSpecial,
  ...props
}) => {
  return (
    <StyledButton
      {...{ status, isCompact, isSpecial, ...props }}
      data-selector={dataSelector}
    >
      {children}
    </StyledButton>
  )
}
export default Button
