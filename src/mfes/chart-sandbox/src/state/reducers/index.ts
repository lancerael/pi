import { combineReducers } from 'redux'
import chartDataReducer from './chartDataReducer'
import chartConfigReducer from './chartConfigReducer'
export * from './chartDataReducer'
export * from './chartConfigReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
})
