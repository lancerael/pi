import styled, { css } from 'styled-components'

export const StyledControls = styled.div`
  margin: 8px;
  position: absolute;
  display: flex;
  gap: 8px;
  padding: 8px;
`

export const StyledEmoji = styled.div(
  ({ rotate }: { rotate: number }) => css`
    rotate: ${rotate}deg;
  `
)
