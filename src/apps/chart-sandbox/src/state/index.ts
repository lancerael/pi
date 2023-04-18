import { configureStore } from '@reduxjs/toolkit'
import { getEmptyData } from 'd-theia'
import rootReducer from './reducers'

const { chartData, chartConfig } = await getEmptyData()

const theming = { themeName: 'andro', contrast: '' }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { chartData, chartConfig, theming },
})

export default store
