import React, { FC } from 'react'
import { useButtonProps } from '@pi-lib/utils'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  isCompact,
  isSpecial,
  dataSelector = 'pi-lib-button',
  ...props
}) => {
  const { buttonProps } = useButtonProps<HTMLButtonElement>(props, 'button')
  return (
    <StyledButton
      {...{
        status,
        isCompact,
        isSpecial,
        ...buttonProps,
        ...props,
      }}
      data-selector={dataSelector}
    >
      {children}
    </StyledButton>
  )
}
export default Button
