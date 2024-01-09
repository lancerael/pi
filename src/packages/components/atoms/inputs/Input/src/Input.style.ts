import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'
import { StyledTextInputProps } from './Input.style.types'

/**
 * The container element for the component wrapper
 */
export const StyledInput = styled.div<StyledTextInputProps>`
  display: flex;
  align-items: center;

  & label {
    display: inline-block;
    min-width: calc(15% + 2rem);
    text-transform: capitalize;
  }

  & input {
    width: 100%;
    flex-grow: 1;

    ${({ $type }) => formInput($type === 'color')}
  }
`
