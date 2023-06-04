import styled from 'styled-components'

export const StyledTooltipContainer = styled.div`
  & div {
    width: 100%;
    font-size: 0.8rem;
    &:first-of-type {
      text-align: center;
      font-size: 1rem;
    }
  }

  & em {
    float: right;
  }
`
