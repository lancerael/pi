import { getTransientProps } from '@pi-lib/utils'
import { getStyledButton } from './Button.style'
import { ButtonProps, HTMLElementType } from './Button.types'
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
  isExternal = false,
  isInline = false,
  isSimple = false,
  boxName = 'default',
  buttonSize = 'medium',
  dataTestid = 'pi-lib-button',
  ...props
}: ButtonProps) => {
  const isLink = !!props.href
  const linkProps = isLink && {
    href: props.href,
    rel: isExternal ? 'external' : props.rel,
    target: isExternal ? '_blank' : undefined,
  }
  const StyledButton = getStyledButton(isLink ? 'a' : 'button')
  const { buttonProps } = useButtonProps<HTMLElementType>(
    { ...props, ...linkProps },
    'button'
  )
  return (
    <StyledButton
      {...{
        ...buttonProps,
        ...linkProps,
        ...getTransientProps({
          status,
          isCompact,
          isInverted,
          isShadowed,
          isSimple,
          isInline,
          boxName,
          buttonSize,
        }),
      }}
      data-testid={dataTestid}
    >
      {children}
    </StyledButton>
  )
}
export default Button
