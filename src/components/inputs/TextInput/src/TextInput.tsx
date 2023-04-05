import React, { FC } from 'react'
import { StyledTextInput } from './TextInput.style'
import { TextInputProps } from './TextInput.types'

export const TextInput = ({
  title,
  longTitle,
  value,
  onChange,
  type = 'text',
}: TextInputProps) => {
  const name = title?.toLowerCase().split(' ').join()
  return (
    <StyledTextInput {...{ type }}>
      {title && <label htmlFor={name}>{title}:</label>}
      <input title={longTitle ?? title} {...{ onChange, value, name, type }} />
    </StyledTextInput>
  )
}

export default TextInput
