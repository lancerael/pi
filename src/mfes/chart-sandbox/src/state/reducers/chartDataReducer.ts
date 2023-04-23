import { createSlice } from '@reduxjs/toolkit'

const initialState: any[] = [{ itemLabel: '', itemValues: [] }]

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    updateLabel(state: any, { payload }: any) {
      state[payload.i1].itemLabel = payload.value
    },
    updateValue(state: any, { payload }: any) {
      state[payload.i1].itemValues[payload.i2] = +payload.value
    },
    addRow(state: any) {
      state.push({
        itemLabel: `Row ${state.length + 1}`,
        itemValues: state[0] ? state[0].itemValues.map(() => 0) : [],
      })
    },
    deleteRow(state: any, { payload }: any) {
      state.splice(payload, 1)
    },
    addDataColumn(state: any) {
      state.forEach((data: any) => {
        data.itemValues.push(0)
      })
    },
    deleteDataColumn(state: any, { payload }: any) {
      state.forEach((data: any) => {
        data.itemValues.splice(payload, 1)
      })
    },
    replaceData(state: any, { payload }: any) {
      return structuredClone(payload)
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
