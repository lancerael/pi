import styled from 'styled-components'
import { CHART_PADDING } from './CandlestickChart.constants'

export const StyledCandlestickChart = styled.svg`
  width: 100%;
  height: 100%;

  & rect.is-offscreen {
    display: none;
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
`

export const StyledLoaderContainer = styled.div`
  position: absolute;
  margin-top: -12px;
  margin-left: -12px;
  width: calc(100% - ${CHART_PADDING * 2}px);
  height: calc(100% - ${CHART_PADDING * 2}px);
  display: flex;
  justify-content: center;
  align-items: center;
`
