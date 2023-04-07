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
      ${box()}
      width: 10px;
      height: 10px;
      position: absolute;
      border-width: 2px;
      border-radius: 0;
      padding: 0;
      rotate: -135deg;
      left: calc(50% - 5px);
      top: -7px;
      clip-path: polygon(92% 0, 100% 0, 100% 100%, 0 100%, 0 92%);
    }
  `
)
