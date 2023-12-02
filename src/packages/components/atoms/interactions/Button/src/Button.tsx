import { getTransientProps } from '@pi-lib/utils'
import { StyledButton } from './Button.style'
import { ButtonProps } from './Button.types'
import { useButtonProps } from './hooks/useButtonProps'

/**
 * A React button component with a status
 *
 * @param {ButtonProps} props - The props object for this component.
 * @returns {React.ReactElement} A styled button element.
 */
export const Button = ({
  children,
  status = 'default',
  isCompact = false,
  isInverted = false,
  isShadowed = false,
  buttonSize = 'medium',
  dataTestid = 'pi-lib-button',
  ...props
}: ButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLButtonElement>(props, 'button')
  return (
    <StyledButton
      {...{
        ...buttonProps,
        ...props,
        ...getTransientProps({
          status,
          isCompact,
          isInverted,
          buttonSize,
          isShadowed,
        }),
      }}
      data-testid={dataTestid}
    >
      {children}
    </StyledButton>
  )
}
export default Button
