import { StyledIcon, StyledIconButton } from './IconButton.style'
import { useButtonProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'

/**
 * A React component for a special button with an icon
 */
export const IconButton = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  $isFilled = false,
  $isStroked = false,
  size = isSmall ? '1rem' : '1.2rem',
  dataSelector = 'pi-lib-icon-button',
  $isSimpleButton = false,
  $rotate,
  ...props
}: IconButtonProps) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(props, 'a')
  return (
    <StyledIconButton
      {...{ ...props, ...buttonProps, size, title, $isSimpleButton, $rotate }}
      target={isExternal ? '_blank' : undefined}
    >
      <StyledIcon {...{ src, size, $isFilled, $isStroked }} />
    </StyledIconButton>
  )
}

export default IconButton
