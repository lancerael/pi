import React, { FC } from 'react'
import { StyledSelect } from './Select.style'
import { SelectProps } from './Select.types'

export const Select: FC<SelectProps> = ({
  label,
  name,
  onChange,
  options,
}: SelectProps) => (
  <StyledSelect>
    {!!label && <label htmlFor={name}>{label}: </label>}
    <select {...{ name, onChange }}>
      {options.map(({ content, value }) => (
        <option value={value ?? content.toLowerCase()}>{content}</option>
      ))}
    </select>
  </StyledSelect>
)

export default Select
