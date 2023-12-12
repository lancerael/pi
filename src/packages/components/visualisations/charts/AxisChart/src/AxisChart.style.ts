import { DEFAULT_THEME, box, container } from '@pi-lib/styles'
import styled from 'styled-components'

/**
 * Main div for the chart container styles
 */
export const StyledAxisChart = styled.div`
  ${container()}
  flex-grow: 1;
  position: relative;
  height: 100%;
  padding: 4px !important;

  & svg {
    & rect,
    & line,
    & text {
      transition: all 0.2s !important;
    }
  }

  .y-axis .tick line {
    opacity: 0.2;
  }

  .title {
    position: absolute;
    text-align: center;
    width: 96%;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.textSoft};
    font-size: 0.8em;
    font-weight: bold;
  }

  line,
  path:not(.line) {
    stroke: ${({ theme }) => theme.colors.special};
  }

  .tick text,
  .key text {
    font-size: 0.6rem;
  }

  .x-labels {
    font-size: 0.7rem;
  }

  text {
    fill: ${({ theme }) => theme.colors.textStrong} !important;
    font-weight: bold;
    font-size: 0.8em;
  }

  .tooltip {
    ${box()}
    position: absolute;
    opacity: 0.9;
    transition: all 0.2s !important;
  }

  .is-transparent {
    opacity: 0;
  }

  .is-hidden {
    visibility: hidden;
  }

  svg.chart {
    width: 100%;
    height: 100%;
  }

  .bars,
  .circles {
    cursor: pointer;
  }

  path.line {
    fill: none;
    stroke-width: 2px;
  }
`

StyledAxisChart.defaultProps = DEFAULT_THEME
