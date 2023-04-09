import React, { FC } from 'react'
import { StyledTextInput } from './Input.style'
import { TextInputProps } from './Input.types'

export const Input = ({
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
      <input
        title={longTitle ?? title}
        id={name}
        {...{ onChange, value, name, type }}
      />
    </StyledTextInput>
  )
}

export default Input
