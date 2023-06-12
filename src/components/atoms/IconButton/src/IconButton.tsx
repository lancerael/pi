import React, { FC } from 'react'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'
import { useButtonProps } from '@pi-lib/utils'

export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  size = isSmall ? '1em' : '1.5em',
  onPointerUp,
  ...props
}) => {
  const { buttonRef, buttonProps } = useButtonProps<HTMLAnchorElement>(
    props,
    'a',
    onPointerUp
  )
  return (
    <StyledIconButton
      {...{ ...props, ...buttonProps, size, onPointerUp }}
      target={isExternal ? '_blank' : undefined}
      ref={buttonRef}
    >
      <img
        {...{ src, title }}
        key={src}
        width="100%"
        height="100%"
        alt={title}
      />
    </StyledIconButton>
  )
}

export default IconButton
