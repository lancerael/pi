import { combineReducers } from 'redux'
//@ts-ignore
import chartDataReducer from 'remoteSandbox/chartDataReducer'
//@ts-ignore
import chartConfigReducer from 'remoteSandbox/chartConfigReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
  settings: settingsReducer,
})
