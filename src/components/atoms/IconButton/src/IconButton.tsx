import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  href,
  src,
  title = `image button ${src}`,
  isExternal = false,
  onClick,
}: any) => (
  <StyledIconButton
    {...{ href, onClick }}
    target={isExternal ? '_blank' : undefined}
    role="button"
  >
    <img {...{ src, title }} key={src} width="24px" height="24px" alt={title} />
  </StyledIconButton>
)

export default IconButton
