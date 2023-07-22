import styled, { css } from 'styled-components'
import { StyledDismissableContentProps } from './DismissableContent.style.types'
import { gradient } from '@pi-lib/styles'

export const StyledDismissableContent = styled.div(
  ({ isVisible, isPresent }: StyledDismissableContentProps) => {
    return css`
      border: 1px solid var(--textStrong);
      ${gradient({ isAlt: true })}
      color: var(--bg);
      border-radius: 8px;
      padding: 16px;
      opacity: ${isVisible ? '1' : '0'};
      margin-bottom: ${isVisible ? '0' : '-100px'};
      display: ${isPresent ? 'block' : 'none'};
      position: relative;
      min-width: 25%;
    `
  }
)

export const StyledClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  :hover {
    path {
      fill: var(--subtle);
    }
  }
`
