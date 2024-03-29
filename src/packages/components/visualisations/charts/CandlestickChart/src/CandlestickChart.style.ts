import { DEFAULT_THEME, container } from '@pi-lib/styles'
import styled from 'styled-components'
import { ChartStyleProps } from './CandlestickChart.types'

/**
 * The main styles for the chart SVG element
 */
export const StyledCandlestickChart = styled.svg<ChartStyleProps>`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;
  position: relative;

  & rect.candles {
    cursor: pointer;
    transition: filter 0.2s;

    &.is-offscreen {
      display: none;
    }

    &:hover {
      filter: brightness(0.8);
    }

    &.is-increased {
      fill: green;

      &.is-zoomed {
        stroke: darkgreen;
      }
    }

    &.is-decreased {
      fill: red;

      &.is-zoomed {
        stroke: darkred;
      }
    }

    &.is-active {
      filter: brightness(1);
      stroke: ${({ theme }) => theme.colors.textSoft} !important;
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: ${({ theme }) => theme.colors.text};
    stroke-width: 1;
  }

  & line.clone {
    stroke: ${({ theme }) => theme.colors.border};
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

/**
 * The styles for the chart container div
 */
export const StyledContainer = styled.div`
  ${container()}
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: sans-serif;
`

/**
 * The styles for the loader container
 */
export const StyledLoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

StyledCandlestickChart.defaultProps = DEFAULT_THEME
