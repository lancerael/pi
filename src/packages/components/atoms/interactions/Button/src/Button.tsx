import { getTransientProps } from '@pi-lib/styles'
import { getStyledButton } from './Button.style'
import { ButtonProps, HTMLElementType } from './Button.types'
import { useButtonProps } from './hooks/useButtonProps'
import { memo } from 'react'

/**
 * A React button component with a status
 *
 * @param {ButtonProps} props - The props object for this component.
 * @returns {React.ReactElement} A styled button element.
 */
export const Button = memo(
  ({
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
    const elementType = isLink ? 'a' : 'button'
    const StyledButton = getStyledButton(elementType)
    const { buttonProps } = useButtonProps<HTMLElementType>(
      { ...props, ...linkProps },
      elementType
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
)

export default Button
