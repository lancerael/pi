import { StyledInput } from './Input.style'
import { InputProps } from './Input.types'

/**
 * A React component to handle various types of form input
 */
export const Input = ({
  longTitle,
  title,
  type = 'text',
  name = title?.toLowerCase().split(' ').join(),
  ...inputProps
}: InputProps) => {
  return (
    <StyledInput {...{ type }}>
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
