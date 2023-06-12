import React, { FC } from 'react'
import { useButtonProps } from '@pi-lib/utils'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  dataSelector = 'pi-lib-button',
  isCompact,
  isSpecial,
  onPointerUp,
  ...props
}) => {
  const { buttonRef, buttonProps } = useButtonProps<HTMLButtonElement>(
    props,
    'button',
    onPointerUp
  )
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
      ref={buttonRef}
    >
      {children}
    </StyledButton>
  )
}
export default Button
