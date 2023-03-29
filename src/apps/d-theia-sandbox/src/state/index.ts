import { configureStore } from '@reduxjs/toolkit'
import Theia from 'd-theia'
import rootReducer from './reducers'

const { aData, jConfig } = Theia.getDataOps().getRandomData(8, 4)

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { aData, jConfig },
})

export default store
