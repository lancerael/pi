import { combineReducers } from 'redux'
//@ts-ignore
import chartDataReducer from 'remoteApp/chartDataReducer'
//@ts-ignore
import chartConfigReducer from 'remoteApp/chartConfigReducer'
import themingReducer from './themingReducer'

export default combineReducers({
  chartData: chartDataReducer,
  chartConfig: chartConfigReducer,
  theming: themingReducer,
})
