import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { css } from 'styled-components'
import { StyledTooltipProps } from './Tooltip.style.types'

export const StyledTooltip = styled.div(
  ({ isVisible = false }: StyledTooltipProps) => css`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;

    opacity: ${isVisible ? 0.8 : 0};
    padding: 4px;
    border: 1px solid ${STATUS_COLOURS['default']};
    color: ${STATUS_COLOURS['default']};
    background-color: white;
    border-radius: 6px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${STATUS_COLOURS['default']};
      border-right: 1px solid ${STATUS_COLOURS['default']};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(90% 0, 100% 0, 100% 100%, 0 100%, 0 90%);
    }
  `
)
