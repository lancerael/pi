import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'

export const StyledTextInput = styled.div`
  font-size: 1.4em;
  display: flex;

  & label {
    display: inline-block;
    min-width: 20%;
  }

  & input {
    flex-grow: 1;

    ${formInput()}
  }
`
