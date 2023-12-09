import { CandlestickDayData } from '@pi-lib/candlestick-chart/src/CandlestickChart.types'
import { createSlice } from '@reduxjs/toolkit'

export type CandlestickDataState = CandlestickDayData[]

const initialState: CandlestickDataState = []

const candlestickDataSlice = createSlice({
  name: 'candlestickData',
  initialState,
  reducers: {
    setData(state: CandlestickDataState, { payload }: { payload: CandlestickDataState }) {
      return structuredClone(payload)
    },
    updateToday(state: CandlestickDataState, { payload }: { payload: CandlestickDayData }) {
      state[state.length - 1] = payload
    },
  },
})

export const { setData, updateToday } = candlestickDataSlice.actions

export default candlestickDataSlice.reducer
