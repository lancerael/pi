import { StyledInput } from './Input.style'
import { InputProps } from './Input.types'

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
