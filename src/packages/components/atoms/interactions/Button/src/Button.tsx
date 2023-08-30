import { FC } from 'react'
import { useButtonProps } from '@pi-lib/utils'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.style'

/**
 * A React button component with status
 */
export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  isCompact = false,
  isInverted = false,
  dataSelector = 'pi-lib-button',
  ...props
}) => {
  const { buttonProps } = useButtonProps<HTMLButtonElement>(props, 'button')
  if (props.disabled) props.onPointerUp = undefined
  return (
    <StyledButton
      {...{
        status,
        isCompact,
        isInverted,
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
