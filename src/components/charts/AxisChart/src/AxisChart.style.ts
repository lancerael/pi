import { box } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledAxisChart = styled.div`
  flex-grow: 1;
  position: relative;
  background: var(--subtle);
  border: 1px solid var(--border);
  height: 100%;

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

  .labels:first-of-type {
    padding-left: 8px;
  }

  .title {
    position: absolute;
    text-align: center;
    width: 96%;
    margin-top: 8px;
    color: var(--textSoft);
    font-size: 0.8em;
    font-weight: bold;
  }

  line,
  path:not(.line) {
    stroke: var(--special);
  }

  .tick text,
  .key text {
    font-size: 0.8em;
  }

  .x-labels {
    font-size: 0.7rem;
  }

  text {
    fill: var(--textStrong) !important;
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
