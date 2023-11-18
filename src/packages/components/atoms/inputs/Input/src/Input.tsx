import { getTransientProps } from '@pi-lib/utils'
import { StyledInput } from './Input.style'
import { InputProps } from './Input.types'

/**
 * Input is a React component for rendering form inputs with optional labels.
 * It supports various types of inputs and allows for additional customization through props.
 *
 * @param {InputProps} props - The properties for the Input component.
 * @param {string} [props.longTitle] - A longer, more descriptive title for the input, used for accessibility.
 * @param {string} props.title - The title of the input, which will be used as the label text.
 * @param {string} [props.type='text'] - The type of the input (e.g., 'text', 'number'). Defaults to 'text'.
 * @param {string} [props.name] - The name of the input. If not provided, it defaults to a lowercase, space-removed version of the title.
 * @param {string} [props.dataTestid] - The test id attribute for e2e testing
 * @param {...object} inputProps - Additional props to be spread into the input element.
 * @returns {JSX.Element} A styled input element with an optional label.
 */
export const Input = ({
  longTitle,
  title,
  type = 'text',
  name = title?.toLowerCase().split(' ').join(),
  dataTestid = 'pi-lib-input',
  ...inputProps
}: InputProps) => {
  return (
    <StyledInput data-testid={dataTestid} {...getTransientProps({ type })}>
      {title && <label htmlFor={name}>{title}:</label>}
      <input
        title={longTitle ?? title}
        id={name}
        {...{ ...inputProps, name, type }}
      />
    </StyledInput>
  )
}

export default Input
