import { combineReducers } from 'redux'
//@ts-ignore
import chartDataReducer from 'remoteSandbox/chartDataReducer'
//@ts-ignore
import chartConfigReducer from 'remoteSandbox/chartConfigReducer'
//@ts-ignore
import candlestickDataReducer from 'remoteCandlestick/candlestickDataReducer'
//@ts-ignore
import web3Reducer from 'remoteWeb3/web3Reducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
  candlestickData: candlestickDataReducer,
  web3: web3Reducer,
  settings: settingsReducer,
})
