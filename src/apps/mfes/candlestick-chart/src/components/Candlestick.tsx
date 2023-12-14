import PageContent from '@pi-lib/page-content'
import { Sidebar } from './Sidebar'
import CandlestickChart, {
  generateCandlestickData,
  movePrevValue,
} from '@pi-lib/candlestick-chart'
import { useDispatch, useSelector } from 'react-redux'
import { setData, updateToday } from '../state'
import { useEffect } from 'react'
import { AppState } from '../state/reducers/candlestickDataReducer.types'
import Theme from '@pi-lib/styles'

export const Candlestick = () => {
  const { candlestickData, settings } = useSelector((state: AppState) => state)

  const dispatch = useDispatch()

  // Simulate an API request
  useEffect(() => {
    let updateInterval: NodeJS.Timeout
    const delayTimeout = setTimeout(() => {
      dispatch(setData(generateCandlestickData(800).dates))
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
  }, [])

  return (
    <Theme
      themeName={settings?.themeName}
      scheme={settings?.scheme}
      includeGlobal={!settings?.themeName}
    >
      <PageContent sidebar={<Sidebar {...{ candlestickData }} />}>
        <CandlestickChart data={candlestickData} />
      </PageContent>
    </Theme>
  )
}

export default Candlestick
