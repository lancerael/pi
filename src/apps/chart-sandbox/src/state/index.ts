import { configureStore } from '@reduxjs/toolkit'
import { getRandomData } from 'd-theia'
import rootReducer from './reducers'

const { chartData, chartConfig } = getRandomData(8, 4)

const theming = { themeName: 'andro', contrast: '' }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { chartData, chartConfig, theming },
})

export default store
