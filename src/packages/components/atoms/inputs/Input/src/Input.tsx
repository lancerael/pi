import { getTransientProps } from '@pi-lib/styles'
import { StyledInput } from './Input.style'
import { InputProps } from './Input.types'

/**
 * Input is a React component for rendering form inputs with optional labels.
 * It supports various types of inputs and allows for additional customization through props.
 *
 * @param {InputProps} props - The properties for the Input component.
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
