import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  ...iconButtonProps
}) => (
  <StyledIconButton
    {...{ ...iconButtonProps, isSmall }}
    target={isExternal ? '_blank' : undefined}
    role="button"
  >
    <img
      {...{ src, title }}
      key={src}
      width={isSmall ? '16px' : '24px'}
      height={isSmall ? '16px' : '24px'}
      alt={title}
    />
  </StyledIconButton>
)

export default IconButton
