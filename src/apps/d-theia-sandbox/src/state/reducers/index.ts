import { combineReducers } from 'redux'
import chartDataReducer from './chartDataReducer'
import chartConfigReducer from './chartConfigReducer'

export default combineReducers({
  aData: chartDataReducer,
  jConfig: chartConfigReducer,
})
