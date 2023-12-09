import { combineReducers } from 'redux'
//@ts-ignore
import chartDataReducer from 'remoteSandbox/chartDataReducer'
//@ts-ignore
import chartConfigReducer from 'remoteSandbox/chartConfigReducer'
//@ts-ignore
import candlestickDataReducer from 'remoteCandlestick/candlestickDataReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
  candlestickData: candlestickDataReducer,
  settings: settingsReducer,
})
