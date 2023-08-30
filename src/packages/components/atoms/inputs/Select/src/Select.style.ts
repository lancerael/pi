import styled from 'styled-components'
import { formInput } from '@pi-lib/styles'

/**
 * The container element for the component wrapper
 */
export const StyledSelect = styled.div`
  display: inline-block;

  select {
    min-width: 80px;
    ${formInput()}
  }
`
