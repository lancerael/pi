import { useEffect, useMemo, useRef } from 'react'
import {
  CANDLE_PADDING,
  CANDLE_WIDTH,
  EMPTY_ITEM,
  FILTER_PERIOD_MAP,
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
  let lastIndex = data.length + 2
  const { panLevel, zoomLevel } = controls
  const end = useRef<number>(lastIndex)
  const prevPan = useRef(0)
  const latestOffset = useRef(0)
  const thisData = useMemo(() => {
    let filteredDates = structuredClone(data)
    if (['weeks', 'months'].includes(controls.period)) {
      filteredDates = data.filter(({ date }) =>
        FILTER_PERIOD_MAP[controls.period].includes(
          date.split('-').reverse()[0]
        )
      )
      filteredDates = filteredDates.map((item, i) => {
        const rangeEndIndex =
          data.findIndex(({ date }) => date === filteredDates[i + 1]?.date) - 1
        return {
          ...item,
          close: data[rangeEndIndex]?.close ?? data[data.length - 1]?.close,
        }
      })
    }
    lastIndex = filteredDates.length + 2
    end.current = lastIndex
    return [EMPTY_ITEM, ...filteredDates, EMPTY_ITEM]
  }, [data, controls.period])

  const candleWidth = (CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING) * zoomLevel
  const perPage = Math.round(width / candleWidth) || 0
  let offset = latestOffset.current
  const isPanningLeft = prevPan.current < panLevel
  const isPanningRight = prevPan.current > panLevel
  // Update chartoffset
  if (end.current === 1) end.current = lastIndex
  if (
    (end.current < lastIndex || isPanningLeft) &&
    (end.current - perPage > 0 || isPanningRight)
  ) {
    offset = latestOffset.current + (panLevel - prevPan.current) / zoomLevel
    latestOffset.current = offset
  }
  prevPan.current = panLevel
  const indexMultiplier = Math.round(1 / (zoomLevel <= 1 ? zoomLevel : 1))
  // Move range left
  if (offset > candleWidth) {
    end.current - perPage > 0 && (end.current = end.current - indexMultiplier)
    latestOffset.current = 0
  }
  // Move range right
  if (offset < -candleWidth) {
    end.current < lastIndex && (end.current = end.current + indexMultiplier)
    latestOffset.current = 0
  }
  let start = end.current - perPage
  start = start < 0 ? 0 : start

  const dataSlice = thisData.slice(start, end.current)
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
    length: data.length,
  }
}
