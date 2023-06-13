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
  dataSelector = 'pi-lib-icon-button',
  ...props
}) => {
  const { buttonProps } = useButtonProps<HTMLAnchorElement>(props, 'a')
  return (
    <StyledIconButton
      {...{ ...props, ...buttonProps, size }}
      target={isExternal ? '_blank' : undefined}
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
