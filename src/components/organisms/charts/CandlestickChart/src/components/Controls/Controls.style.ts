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
    padding: 4px !important;
    height: auto;
    ${box()}
  }
`

export const StyledEmoji = styled.div(
  ({ rotate }: { rotate: number }) => css`
    rotate: ${rotate}deg;
  `
)
