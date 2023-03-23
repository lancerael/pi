import { STATUS_COLOURS } from '@pi-lib/constants'
import { box } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledIndicator = styled.div`
  position: absolute;
  ${box()}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`
