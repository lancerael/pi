import { useEffect, useRef } from 'react'
import {
  AXIS_OFFSETS,
  CANDLE_PADDING,
  CANDLE_WIDTH,
} from '../CandlestickChart.constants'
import {
  CandlestickDayData,
  DataRange,
  IControls,
} from '../CandlestickChart.types'

/**
 * A React hook used to isolate the numbers related to the active range
 * @param width the chart width
 * @param data the chart data
 * @param controls the controls for zooming and panning
 * @returns start/end, min/max, offset and sliced visible data
 */
export const useDataRange = (
  width: number,
  data: CandlestickDayData[],
  controls: IControls
): DataRange => {
  const { panLevel, zoomLevel } = controls
  const lastIndex = data.length
  const end = useRef(lastIndex)
  const prevPan = useRef(0)
  const latestOffset = useRef(0)
  const candleWidth = (CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING) * zoomLevel
  const perPage = Math.round((width - AXIS_OFFSETS[1]) / candleWidth) || 0
  let offset = latestOffset.current
  if (
    (end.current < lastIndex || prevPan.current < panLevel) &&
    (end.current - perPage > 0 || prevPan.current > panLevel)
  ) {
    offset = latestOffset.current + panLevel - prevPan.current
    latestOffset.current = offset
  }
  prevPan.current = panLevel
  if (offset > candleWidth) {
    end.current - perPage > 0 && end.current--
    latestOffset.current = 0
  }
  if (offset < -candleWidth) {
    end.current < lastIndex && end.current++
    latestOffset.current = 0
  }
  const start = end.current - perPage
  const dataSlice = data.slice(start, end.current)
  const min = Math.min(...dataSlice.map(({ low }) => low))
  const max = Math.max(...dataSlice.map(({ high }) => high))

  useEffect(() => {
    end.current = lastIndex
  }, [data.length])

  return {
    start,
    end: end.current,
    min,
    max,
    offset: latestOffset.current,
    dataSlice,
  }
}
