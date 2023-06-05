import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  size = isSmall ? '1em' : '1.5em',
  ...iconButtonProps
}) => (
  <StyledIconButton
    {...{ ...iconButtonProps, size }}
    target={isExternal ? '_blank' : undefined}
    role="button"
    tabIndex={0}
  >
    <img {...{ src, title }} key={src} width="100%" height="100%" alt={title} />
  </StyledIconButton>
)

export default IconButton
