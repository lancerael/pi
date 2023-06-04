import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  size = isSmall ? '16px' : '24px',
  ...iconButtonProps
}) => (
  <StyledIconButton
    {...{ ...iconButtonProps, isSmall }}
    target={isExternal ? '_blank' : undefined}
    role="button"
    tabIndex={0}
  >
    <img {...{ src, title }} key={src} width={size} height={size} alt={title} />
  </StyledIconButton>
)

export default IconButton
