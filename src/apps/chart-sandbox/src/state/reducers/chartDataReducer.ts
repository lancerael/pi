import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    updateLabel(state: any, { payload }: any) {
      state[payload.i1].sLabel = payload.value
    },
    updateValue(state: any, { payload }: any) {
      state[payload.i1].aValues[payload.i2] = payload.value
    },
    addRow(state: any) {
      state.push({
        sLabel: '',
        aValues: state[0] ? state[0].aValues.map(() => 0) : [],
      })
    },
    deleteRow(state: any, { payload }: any) {
      state.splice(payload, 1)
    },
    addDataColumn(state: any) {
      state.forEach((jData: any) => {
        jData.aValues.push(0)
      })
    },
    deleteDataColumn(state: any, { payload }: any) {
      state.forEach((jData: any) => {
        jData.aValues.splice(payload, 1)
      })
    },
    replaceData(state: any, { payload }: any) {
      state = payload
    },
  },
})

export const {
  updateLabel,
  updateValue,
  addRow,
  deleteRow,
  addDataColumn,
  deleteDataColumn,
  replaceData,
} = chartDataSlice.actions

export default chartDataSlice.reducer
