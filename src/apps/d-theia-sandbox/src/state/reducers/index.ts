import { combineReducers } from 'redux'
import chartDataReducer from './chartDataReducer'
import chartConfigReducer from './chartConfigReducer'
import themingReducer from './themingReducer'

export default combineReducers({
  aData: chartDataReducer,
  jConfig: chartConfigReducer,
  theming: themingReducer,
})
