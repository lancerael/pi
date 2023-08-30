import { FC } from 'react'
import { StyledIcon, StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'
import { useButtonProps } from '@pi-lib/utils'

/**
 * A React component for a special button with an icon
 */
export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  $isFilled = false,
  $isStroked = false,
  size = isSmall ? '1em' : '1.2em',
  dataSelector = 'pi-lib-icon-button',
  ...props
}) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(props, 'a')
  return (
    <StyledIconButton
      {...{ ...props, ...buttonProps, size, title }}
      target={isExternal ? '_blank' : undefined}
    >
      <StyledIcon {...{ src, size, $isFilled, $isStroked }} />
    </StyledIconButton>
  )
}

export default IconButton
