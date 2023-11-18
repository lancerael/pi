import { box } from '@pi-lib/styles'
import styled, { css } from 'styled-components'
import { StyledTooltipProps } from './Tooltip.style.types'

/**
 * The main container for the tooltip styles
 */
export const StyledTooltip = styled.div<StyledTooltipProps>(
  ({ $isVisible = false, $isRendered = false }) => css`
    position: absolute;
    transition: all 0.2s;
    opacity: ${$isVisible ? 0.9 : 0};
    visibility: ${$isRendered ? 'visible' : 'hidden'};
    z-index: 999;
    ${box()}
    padding: ${$isRendered ? '4px' : '0px'};

    ::after {
      content: '';
      ${box()}
      width: 10px;
      opacity: ${$isVisible ? 0.9 : 0};
      height: 10px;
      position: absolute;
      border-width: 2px;
      border-radius: 0;
      padding: 0;
      rotate: -135deg;
      left: calc(50% - 5px);
      top: -7px;
      visibility: ${$isRendered ? 'visible' : 'hidden'};
      clip-path: polygon(92% 0, 100% 0, 100% 100%, 0 100%, 0 92%);
    }
  `
)
