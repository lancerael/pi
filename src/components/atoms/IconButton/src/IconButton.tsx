import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  href,
  src,
  title = '',
  isExternal = false,
  onClick,
}: any) => (
  <StyledIconButton
    {...{ href, onClick }}
    target={isExternal ? '_blank' : undefined}
  >
    <img
      {...{ src, title }}
      key={src}
      width="24px"
      height="24px"
      alt={title ?? `image button ${src}`}
    />
  </StyledIconButton>
)

export default IconButton
