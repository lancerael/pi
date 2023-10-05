import { useButtonProps } from '@pi-lib/utils'
import { StyledButton } from './Button.style'
import { ButtonProps } from './Button.types'

/**
 * A React button component with a status
 */
export const Button = ({
  children,
  status = 'default',
  isCompact = false,
  isInverted = false,
  dataSelector = 'pi-lib-button',
  ...props
}: ButtonProps) => {
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
