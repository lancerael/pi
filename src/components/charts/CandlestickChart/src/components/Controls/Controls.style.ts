import styled, { css } from 'styled-components'

export const StyledControls = styled.div`
  margin: 10px;
  position: absolute;
`

export const StyledEmoji = styled.div(
  ({ rotate }: { rotate: number }) => css`
    rotate: ${rotate}deg;
  `
)
