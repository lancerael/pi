import React, { FC, useRef } from 'react'
import { useButton, useKeyboard } from 'react-aria'
import { StyledIconButton } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'

export const IconButton: FC<IconButtonProps> = ({
  src,
  title = `image button ${src}`,
  isExternal = false,
  isSmall = false,
  size = isSmall ? '1em' : '1.5em',
  ...props
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  let { buttonProps } = useButton(
    {
      ...props,
      elementType: 'a',
    },
    buttonRef
  )
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => e.key === 'Enter' && buttonRef.current?.click(),
  })
  return (
    <StyledIconButton
      {...{ ...props, ...buttonProps, ...keyboardProps, size }}
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
