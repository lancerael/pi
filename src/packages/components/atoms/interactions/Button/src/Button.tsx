import { useButtonProps, getTransientProps } from '@pi-lib/utils'
import { StyledButton } from './Button.style'
import { ButtonProps } from './Button.types'

/**
 * A React button component with a status
 *
 * @param {ButtonProps} props - The props object for this component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} [props.status='default'] - The status of the button, influencing its styling.
 * @param {boolean} [props.isCompact=false] - Flag indicating if the button should have a compact style.
 * @param {boolean} [props.isInverted=false] - Flag indicating if the button should have an inverted color scheme.
 * @param {string} [props.dataTestid='pi-lib-button'] - The data-testid attribute value for testing purposes.
 *
 * @returns {React.ReactElement} A styled button element.
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
