import { useButtonProps, getTransientProps } from '@pi-lib/utils'
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
  dataTestid = 'pi-lib-button',
  ...props
}: ButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLButtonElement>(props, 'button')
  return (
    <StyledButton
      {...{
        ...buttonProps,
        ...props,
        ...getTransientProps({ status, isCompact, isInverted }),
      }}
      data-testid={dataTestid}
    >
      {children}
    </StyledButton>
  )
}
export default Button
