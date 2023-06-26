import { chartContainer } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledCandlestickChart = styled.svg`
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;

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
      stroke: var(--textSoft);
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: var(--text);
    stroke-width: 1;
  }

  & line.clone {
    stroke: var(--shadow);
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

export const StyledContainer = styled.div`
  ${chartContainer()}
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`

export const StyledLoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`