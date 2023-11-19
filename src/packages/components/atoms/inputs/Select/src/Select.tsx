import { StyledSelect } from './Select.style'
import { SelectProps } from './Select.types'

/**
 * Select is a React component that renders a themeable select (dropdown) input element.
 * It allows for custom styling and supports dynamic options.
 *
 * @param {SelectProps} props - The properties for the Select component.
 * @returns {JSX.Element} A styled select element with options and an optional label.
 */
export const Select = ({
  label,
  options,
  name,
  dataTestid = 'pi-lib-select',
  ...selectProps
}: SelectProps) => {
  const title =
    label ??
    name ??
    `select from ${options.map(({ content }) => content).join(',')}`
  return (
    <StyledSelect data-testid={dataTestid}>
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
