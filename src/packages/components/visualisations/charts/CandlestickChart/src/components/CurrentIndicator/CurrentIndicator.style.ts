import { box } from '@pi-lib/styles'
import styled, { css } from 'styled-components'
import { StyledIndicatorProps } from './CurrentIndicator.types'
import { AXIS_OFFSETS, CHART_PADDING } from '../../CandlestickChart.constants'

export const StyledIndicator = styled.div<StyledIndicatorProps>(
  ({ isPositive }) => {
    const color = isPositive ? 'green' : 'red'
    return css`
      position: absolute;
      ${box()}
      padding: 2px 4px 1px 4px;
      font-size: 0.8rem;
      font-weight: bold;
      transition: all 0.2s;
      color: ${color};
      border-color: ${color};
      background-color: var(--bg);
      min-width: ${AXIS_OFFSETS[1] - CHART_PADDING * 2 - 16}px;
    `
  }
)
