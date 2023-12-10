import { CandlestickDayData } from '@pi-lib/candlestick-chart'
import { Scheme, ThemeName } from '@pi-lib/styles'

export type CandlestickDataState = CandlestickDayData[]

export type AppState = {
  candlestickData: CandlestickDataState
  settings: { themeName: ThemeName; scheme: Scheme }
}
