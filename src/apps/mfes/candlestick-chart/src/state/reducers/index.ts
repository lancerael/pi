import { combineReducers } from 'redux'
import candlestickDataReducer from './candlestickDataReducer'
export * from './candlestickDataReducer'

export default combineReducers({
  candlestickData: candlestickDataReducer,
})
