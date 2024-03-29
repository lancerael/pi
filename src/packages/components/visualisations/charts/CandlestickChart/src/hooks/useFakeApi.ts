import { useEffect, useMemo, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { generateCandlestickData, movePrevValue } from '../utils'

export const useFakeApi = (length: number = 500, delay = 3, interval = 5) => {
  const [chartData, setChartData] = useState<CandlestickDayData[]>()

  const generatedData = useMemo(() => generateCandlestickData(length).dates, [])

  // Simulate an API request
  useEffect(() => {
    if (chartData) return
    setTimeout(() => {
      setChartData(generatedData)
      setInterval(() => {
        setChartData((currentData) => {
          const newData = [...(currentData as CandlestickDayData[])]
          const lastItem = newData[newData.length - 1]
          lastItem.close = movePrevValue(lastItem.close, 10)
          lastItem.low = Math.min(lastItem.close, lastItem.low)
          lastItem.high = Math.max(lastItem.close, lastItem.high)
          return newData
        })
      }, interval * 1000)
    }, delay * 1000)
  }, [])

  return chartData
}
