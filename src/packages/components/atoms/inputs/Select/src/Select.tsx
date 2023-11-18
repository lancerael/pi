import { StyledSelect } from './Select.style'
import { SelectProps } from './Select.types'

/**
 * Select is a React component that renders a themeable select (dropdown) input element.
 * It allows for custom styling and supports dynamic options.
 *
 * @param {SelectProps} props - The properties for the Select component.
 * @param {string} [props.label] - The label for the select input. If not provided, a generated title based on options will be used.
 * @param {Array<{content: string, value?: string}>} props.options - The options for the select input. Each option is an object with 'content' and an optional 'value'.
 * @param {string} props.name - The name attribute for the select input.
 * @param {string} [props.dataTestid] - The test id attribute for e2e testing
 * @param {...object} selectProps - Additional props to be spread into the select element.
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
