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
      stroke: black;
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: black;
    stroke-width: 1;
  }

  & line.clone {
    stroke: #dedede;
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

export const StyledContainer = styled.div`
  border: 1px solid lightgrey;
  background: linear-gradient(
    135deg,
    #fafbfc 0%,
    #ebf1f5 50%,
    #e2ecf2 51%,
    #f5f8fb 100%
  );
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
