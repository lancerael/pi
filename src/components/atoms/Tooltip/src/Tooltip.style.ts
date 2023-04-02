import { box } from '@pi-lib/styles'
import styled, { css } from 'styled-components'
import { StyledTooltipProps } from './Tooltip.style.types'

export const StyledTooltip = styled.div(
  ({ isVisible = false }: StyledTooltipProps) => css`
    position: absolute;
    transition: all 0.2s;
    opacity: ${isVisible ? 0.9 : 0};
    ${box()}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 2px solid var(--textSoft);
      border-right: 2px solid var(--textSoft);
      background: var(--border);
      rotate: -135deg;
      left: calc(50% - 5px);
      top: -7px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `
)
