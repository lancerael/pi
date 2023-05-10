import { combineReducers } from 'redux'
//@ts-ignore
import chartDataReducer from 'remoteSandbox/chartDataReducer'
//@ts-ignore
import chartConfigReducer from 'remoteSandbox/chartConfigReducer'
import themingReducer from './themingReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
  theming: themingReducer,
})
