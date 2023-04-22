import { combineReducers } from 'redux'
// import chartDataReducer from './chartDataReducer'
// import chartConfigReducer from './chartConfigReducer'
import themingReducer from './themingReducer'

export default combineReducers({
  // chartData: chartDataReducer,
  // chartConfig: chartConfigReducer,
  theming: themingReducer,
})
