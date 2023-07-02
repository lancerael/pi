import styled, { css } from 'styled-components'

export const StyledControls = styled.div`
  margin: 8px;
  position: absolute;
  display: flex;
  gap: 8px;
  padding: 8px;
  z-index: 1000;
`

export const StyledEmoji = styled.div(
  ({ rotate }: { rotate: number }) => css`
    rotate: ${rotate}deg;
  `
)
