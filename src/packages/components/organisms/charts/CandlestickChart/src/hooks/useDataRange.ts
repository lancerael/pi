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
  ChartControls,
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
  controls: ChartControls
): DataRange => {
  const { panLevel, zoomLevel, period } = controls
  const lastPeriod = useRef<ChartControls['period']>()
  const lastIndex = useRef(data.length + 2)
  const end = useRef<number>(lastIndex.current)
  const prevPan = useRef(0)
  const latestOffset = useRef(0)
  const candleWidth = (CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING) * zoomLevel
  const perPage = Math.round(width / candleWidth) || 0
  const isPanningLeft = prevPan.current < panLevel.x
  const isPanningRight = prevPan.current > panLevel.x
  let offset = latestOffset.current

  // Get the data filtered by period (days/weeks/months)
  const thisData = useMemo(() => {
    if (!data.length) return []
    let filteredData = [...data]
    if (['weeks', 'months'].includes(period)) {
      // Filter data to condense ranges by period indexes
      filteredData = data.filter(({ date }) =>
        FILTER_PERIOD_MAP[period].includes(date.split('-').reverse()[0])
      )
      // Get the correct high/low/close values for the range
      filteredData = filteredData.map((item, i) => {
        const getIndex = (dateMatch: string) =>
          data.findIndex(({ date }) => date === dateMatch)
        const rangeStartIndex = getIndex(item?.date)
        const rangeEndIndex = getIndex(filteredData[i + 1]?.date)
        const currentRange = data.slice(rangeStartIndex, rangeEndIndex)
        const getValueRange = (key: 'high' | 'low') =>
          currentRange.map((item) => item[key])
        return {
          ...item,
          close:
            currentRange[currentRange.length - 1]?.close ??
            data[data.length - 1]?.close,
          high: Math.max(...getValueRange('high')),
          low: Math.min(...getValueRange('low')),
        }
      })
    }
    // Reset period ref
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
    offset = latestOffset.current + (panLevel.x - prevPan.current) / zoomLevel
    latestOffset.current = offset
  }
  prevPan.current = panLevel.x

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
    lastItem: thisData[thisData.length - 2],
    length: thisData.length,
  }
}
