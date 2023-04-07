import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'

export const StyledSelect = styled.div`
  font-size: 1.2em;
  display: inline-block;

  select {
    min-width: 80px;
    ${formInput()}
  }
`
