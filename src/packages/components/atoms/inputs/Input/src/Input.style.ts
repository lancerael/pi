import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'
import { StyledTextInputProps } from './Input.style.types'

/**
 * The container element for the component wrapper
 */
export const StyledInput = styled.div<StyledTextInputProps>`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    gap: 0.25rem;
  }

  & label {
    display: inline-block;
    min-width: calc(15% + 2rem);
    text-transform: capitalize;
    font-weight: bold;
  }

  & input {
    flex-grow: 1;

    ${({ $type }) => formInput($type === 'color')}
  }
`
