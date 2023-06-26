import { chartContainer } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledWorldMapContainer = styled.div`
  ${chartContainer()}
  margin-right: 8px;
  position: relative;
  height: 100%;

  & div {
    position: absolute;
    font-weight: bold;
    bottom: 4px;
    text-align: center;
    font-size: 0.8rem;
    width: 100%;
  }
`
