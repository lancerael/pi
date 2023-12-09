import PageContent from '@pi-lib/page-content'
import { Sidebar } from './Sidebar'
import CandlestickChart, { generateCandlestickData, movePrevValue } from '@pi-lib/candlestick-chart'
import { Theme, ThemeName } from '@pi-lib/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CandlestickDataState, setData, updateToday } from '../state'
import { useEffect } from 'react'

export interface CandlestickProps {
  candlestickData: CandlestickDataState
}

export type AppState = CandlestickProps & { settings: { themeName: ThemeName } }

export const Candlestick = () => {
  const { candlestickData, settings } = useSelector((state: AppState) => state)

  const dispatch = useDispatch()

  // Simulate an API request
  useEffect(() => {
    let updateInterval: NodeJS.Timeout
    const delayTimeout = setTimeout(() => {
      if (!candlestickData.length) {
        dispatch(setData(generateCandlestickData(800).dates))
      }
      updateInterval = setInterval(() => {
        const lastItem = structuredClone(candlestickData).pop()!
        lastItem.close = movePrevValue(lastItem.close, 10)
        lastItem.low = Math.min(lastItem.close, lastItem.low)
        lastItem.high = Math.max(lastItem.close, lastItem.high)
        dispatch(updateToday(lastItem))
      }, 5000)
    }, 1000)
    return () => {
      clearInterval(updateInterval)
      clearTimeout(delayTimeout)
    }
  }, [candlestickData])

  return (
    <Theme themeName={settings.themeName} includeGlobal={false}>
      <PageContent sidebar={<Sidebar {...{ candlestickData }} />}>
        <CandlestickChart data={candlestickData} />
      </PageContent>
    </Theme>
  )
}

export default Candlestick
