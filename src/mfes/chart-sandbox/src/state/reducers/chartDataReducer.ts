import { createSlice } from '@reduxjs/toolkit'

export interface ChartDataItem {
  itemLabel: string
  itemValues: number[]
}

export type ChartDataState = ChartDataItem[]

const initialState: ChartDataState = [{ itemLabel: '', itemValues: [] }]

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    updateLabel(
      state: ChartDataState,
      { payload }: { payload: { i1: number; value: string } }
    ) {
      state[payload.i1].itemLabel = payload.value
    },
    updateValue(
      state: ChartDataState,
      { payload }: { payload: { i1: number; i2: number; value: string } }
    ) {
      state[payload.i1].itemValues[payload.i2] = +payload.value
    },
    addRow(state: ChartDataState) {
      state.push({
        itemLabel: `Row ${state.length + 1}`,
        itemValues: state[0] ? state[0].itemValues.map(() => 0) : [],
      })
    },
    deleteRow(state: ChartDataState, { payload }: { payload: number }) {
      state.splice(payload, 1)
    },
    addDataColumn(state: ChartDataState) {
      state.forEach((data: any) => {
        data.itemValues.push(0)
      })
    },
    deleteDataColumn(state: ChartDataState, { payload }: { payload: number }) {
      state.forEach((data: ChartDataItem) => {
        data.itemValues.splice(payload, 1)
      })
    },
    replaceData(
      state: ChartDataState,
      { payload }: { payload: ChartDataState }
    ) {
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
