import { configureStore } from '@reduxjs/toolkit'
import Theia from 'd-theia'
import rootReducer from './reducers'

const { aData, jConfig } = Theia.getDataOps().getRandomData(8, 4)

const theming = { themeName: 'andro', contrast: '' }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { aData, jConfig, theming },
})

export default store
