import { box } from '@pi-lib/styles'
import styled, { css } from 'styled-components'

export const StyledControls = styled.div`
  margin: 8px;
  position: absolute;
  display: flex;
  gap: 8px;
  padding: 8px;
  z-index: 1000;

  select {
    margin: 4px;
    padding: 5px !important;
    height: auto;
    ${box()}
  }
`

export const StyledEmoji = styled.div<{ rotate: number }>(
  ({ rotate }) => css`
    rotate: ${rotate}deg;
  `
)
