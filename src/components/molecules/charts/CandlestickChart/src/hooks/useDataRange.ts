import { useEffect, useRef } from 'react'
import { CANDLE_PADDING, CANDLE_WIDTH } from '../CandlestickChart.constants'
import {
  CandlestickDayData,
  DataRange,
  IControls,
} from '../CandlestickChart.types'

const emptyItem = {
  date: '--',
  open: 0,
  high: 0,
  low: 0,
  close: 0,
}

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
  const end = useRef(lastIndex - 1)
  const prevPan = useRef(0)
  const latestOffset = useRef(0)
  const candleWidth = (CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING) * zoomLevel
  const perPage = Math.round(width / candleWidth) || 0
  let offset = latestOffset.current
  const isPanningLeft = prevPan.current < panLevel
  const isPanningRight = prevPan.current > panLevel
  // Update chartoffset
  if (
    (end.current < lastIndex || isPanningLeft) &&
    (end.current - perPage > 0 || isPanningRight)
  ) {
    offset = latestOffset.current + panLevel - prevPan.current
    latestOffset.current = offset
  }
  prevPan.current = panLevel
  // Move range left
  if (offset > candleWidth) {
    end.current - perPage > 0 && end.current--
    latestOffset.current = 0
  }
  // Move range right
  if (offset < -candleWidth) {
    end.current < lastIndex && end.current++
    latestOffset.current = 0
  }
  const start = end.current - perPage
  const dataSlice = data.slice(start, end.current)
  dataSlice.length && dataSlice.push(data[end.current] ?? emptyItem)
  const min = Math.min(
    ...dataSlice.map(({ low }) => low).filter((value) => value !== 0)
  )
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
