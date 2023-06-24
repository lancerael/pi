import React, { FC } from 'react'
import { StyledSelect } from './Select.style'
import { SelectProps } from './Select.types'

/**
 * A React component for a themeable select input
 */
export const Select: FC<SelectProps> = ({
  label,
  options,
  name,
  ...selectProps
}: SelectProps) => {
  const title =
    label ??
    name ??
    `select from ${options.map(({ content }) => content).join(',')}`
  return (
    <StyledSelect>
      {!!label && <label htmlFor={name}>{label}: </label>}
      <select
        aria-label={!label ? title : undefined}
        {...{ name, ...selectProps }}
      >
        {options.map(({ content, value }) => {
          const key = content.toLowerCase()
          return (
            <option key={key} value={value ?? key}>
              {content}
            </option>
          )
        })}
      </select>
    </StyledSelect>
  )
}

export default Select
