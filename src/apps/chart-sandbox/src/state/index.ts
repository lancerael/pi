import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const { chartData, chartConfig } = {
  chartConfig: {
    title: '',
    axisLabels: ['', ''],
    itemValues: [],
    doTrim: true,
  },
  chartData: [{ itemLabel: '', itemValues: [] }],
}

const theming = { themeName: 'andro', contrast: '' }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { chartData, chartConfig, theming },
})

export default store
