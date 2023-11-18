import styled, { css } from 'styled-components'
import { StyledColumnProps } from './Layout.style.types'

/**
 *
 */
export const StyledColumn = styled.div<StyledColumnProps>(
  ({ $maxWidth, $isCollapsible }) => {
    return css`
      max-width: ${$maxWidth ?? '100%'};
      min-height: 100%;
      display: flex;
      flex-direction: column;

      @media (max-width: 800px) {
        height: auto;
        ${!!$isCollapsible && 'max-width: 100%;'}
      }
    `
  }
)
