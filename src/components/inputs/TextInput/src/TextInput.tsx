import React, { FC } from 'react'
import { StyledTextInput } from './TextInput.style'
import { TextInputProps } from './TextInput.types'

export const TextInput = ({
  title,
  longTitle,
  value,
  onChange,
}: TextInputProps) => {
  const name = title.toLowerCase().split(' ').join()
  return (
    <StyledTextInput>
      {title && <label htmlFor={name}>{title}:</label>}
      <input
        name={name}
        type="text"
        title={longTitle ?? title}
        {...{ onChange, value }}
      />
    </StyledTextInput>
  )
}

export default TextInput
