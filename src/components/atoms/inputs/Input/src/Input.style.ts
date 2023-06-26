import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'
import { StyledTextInputProps } from './Input.style.types'

export const StyledInput = styled.div`
  display: flex;
  align-items: center;

  & label {
    display: inline-block;
    min-width: calc(15% + 2em);
  }

  & input {
    width: 100%;
    flex-grow: 1;

    ${({ type }: StyledTextInputProps) => formInput(type === 'color')}
  }
`
