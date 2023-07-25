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
  const { panLevel, zoomLevel, period } = controls
  const lastPeriod = useRef<IControls['period']>()
  const lastIndex = useRef(data.length + 2)
  const end = useRef<number>(lastIndex.current)
  const prevPan = useRef(0)
  const latestOffset = useRef(0)
  const candleWidth = (CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING) * zoomLevel
  const perPage = Math.round(width / candleWidth) || 0
  const isPanningLeft = prevPan.current < panLevel
  const isPanningRight = prevPan.current > panLevel
  let offset = latestOffset.current

  // Get the data filtered by period (days/weeks/months)
  const thisData = useMemo(() => {
    if (!data.length) return []
    let filteredData = [...data]
    if (['weeks', 'months'].includes(period)) {
      filteredData = data.filter(({ date }) =>
        FILTER_PERIOD_MAP[period].includes(date.split('-').reverse()[0])
      )
      filteredData = filteredData.map((item, i) => {
        const rangeEndIndex =
          data.findIndex(({ date }) => date === filteredData[i + 1]?.date) - 1
        return {
          ...item,
          close: data[rangeEndIndex]?.close ?? data[data.length - 1]?.close,
        }
      })
    }
    if (lastPeriod.current !== period) {
      lastIndex.current = filteredData.length + 2
      end.current = lastIndex.current
    }
    lastPeriod.current = period
    return [EMPTY_ITEM, ...filteredData, EMPTY_ITEM]
  }, [data, period])

  // Update chartoffset
  if (end.current === 1) end.current = lastIndex.current
  if (
    (end.current < lastIndex.current || isPanningLeft) &&
    (end.current - perPage > 0 || isPanningRight)
  ) {
    offset = latestOffset.current + (panLevel - prevPan.current) / zoomLevel
    latestOffset.current = offset
  }
  prevPan.current = panLevel

  // Move range left or right
  const indexMultiplier = Math.round(1 / (zoomLevel <= 1 ? zoomLevel : 1))
  if (offset > candleWidth) {
    end.current - perPage > 0 && (end.current = end.current - indexMultiplier)
    latestOffset.current = 0
  }
  if (offset < -candleWidth) {
    end.current < lastIndex.current &&
      (end.current = end.current + indexMultiplier)
    latestOffset.current = 0
  }

  // set starting item
  let start = end.current - perPage
  start = start < 0 ? 0 : start

  // Slice the data that is visible
  const dataSlice = thisData.slice(start, end.current)

  // Set the min and max values for the Y axis
  const min = Math.min(
    ...dataSlice.map(({ low }) => low).filter((value) => value !== 0)
  )
  const max = Math.max(...dataSlice.map(({ high }) => high))

  // Reset last index if the data length changes
  useEffect(() => {
    end.current = lastIndex.current
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
