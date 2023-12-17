import { useMemo } from 'react'
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
  const {
    touchState: { pan, zoom },
    period,
  } = controls
  const lastItem = JSON.stringify(data[data.length - 1])

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
        const rangeEndIndex =
          i === filteredData.length - 1
            ? data.length
            : getIndex(filteredData[i + 1]?.date)
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
    return [EMPTY_ITEM, ...filteredData, EMPTY_ITEM]
  }, [lastItem, period])

  const baseCandleWidth = CANDLE_WIDTH + CANDLE_WIDTH * CANDLE_PADDING
  const zoomExtent = (1 / (baseCandleWidth * thisData.length)) * width
  const candleWidth = baseCandleWidth * Math.max(zoom, zoomExtent)
  const perPage = Math.round(width / candleWidth) || 0
  const fullWidth = candleWidth * thisData.length
  const panExtent = Math.round(fullWidth - candleWidth * perPage)
  const panX = Math.max(Math.min(panExtent, pan.x), 0)
  const offset = Math.round(panX % candleWidth)
  const end = Math.round(thisData.length - (panX - offset) / candleWidth)
  const start = end - perPage

  // Slice the data that is visible
  const dataSlice = thisData.slice(start, end)

  // Set the min and max values for the Y axis
  const min = Math.min(
    ...dataSlice.map(({ low }) => low).filter((value) => value !== 0)
  )
  const max = Math.max(...dataSlice.map(({ high }) => high))

  return {
    start,
    end,
    min,
    max,
    offset,
    dataSlice,
    lastItem: thisData[thisData.length - 2],
    length: thisData.length,
    panExtent,
  }
}
