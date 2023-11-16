import { StyledIcon, StyledIconButton } from './IconButton.style'
import { useButtonProps, getTransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'

/**
 * A React component for a special button with an icon
 */
export const IconButton = ({
  isExternal = false,
  isSmall = false,
  isFilled = false,
  isStroked = false,
  isSimple = false,
  isIconOnly = false,
  src,
  title = `icon ${isIconOnly ? '' : 'button'} ${src}`,
  fontSize = isSmall ? '1rem' : '1.2rem',
  dataTestid = 'pi-lib-icon-button',
  rotate,
  ...props
}: IconButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(props, 'a')
  return (
    <StyledIconButton
      {...{
        ...props,
        ...buttonProps,
        title,
        ...getTransientProps({ fontSize, isSimple, isIconOnly, rotate }),
      }}
      target={isExternal ? '_blank' : undefined}
      data-testid={dataTestid}
    >
      <StyledIcon
        {...{ src, ...getTransientProps({ fontSize, isFilled, isStroked }) }}
      />
    </StyledIconButton>
  )
}

export default IconButton
