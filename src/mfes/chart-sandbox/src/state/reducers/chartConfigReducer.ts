import { createSlice } from '@reduxjs/toolkit'

export interface ChartConfigItem {
  name: string
  color: string
}

export interface ChartConfigState {
  title: string
  axisLabels: [string, string]
  itemValues: ChartConfigItem[]
  doTrim: boolean
}

const initialState: ChartConfigState = {
  title: '',
  axisLabels: ['', ''],
  itemValues: [],
  doTrim: true,
}

const chartConfigSlice = createSlice({
  name: 'chartConfig',
  initialState,
  reducers: {
    updateType(
      state: ChartConfigState,
      { payload }: { payload: { i: number; value: string } }
    ) {
      state.itemValues[payload.i].name = payload.value
    },
    updateColor(
      state: ChartConfigState,
      { payload }: { payload: { i: number; value: string } }
    ) {
      state.itemValues[payload.i].color = payload.value
    },
    changeTitle(state: ChartConfigState, { payload }: { payload: string }) {
      state.title = payload
    },
    changeAxisX(state: ChartConfigState, { payload }: { payload: string }) {
      state.axisLabels[1] = payload
    },
    changeAxisY(state: ChartConfigState, { payload }: { payload: string }) {
      state.axisLabels[0] = payload
    },
    addConfigColumn(state: ChartConfigState) {
      state.itemValues.push({
        name: `Col ${state.itemValues.length + 1}`,
        color: '#000000',
      })
    },
    deleteConfigColumn(
      state: ChartConfigState,
      { payload }: { payload: number }
    ) {
      state.itemValues.splice(payload, 1)
    },
    switchTrim(state: ChartConfigState, { payload }: { payload: boolean }) {
      state.doTrim = payload
    },
    replaceConfig(
      state: ChartConfigState,
      { payload }: { payload: ChartConfigState }
    ) {
      return structuredClone(payload)
    },
  },
})

export const {
  updateType,
  updateColor,
  changeTitle,
  changeAxisX,
  changeAxisY,
  addConfigColumn,
  deleteConfigColumn,
  switchTrim,
  replaceConfig,
} = chartConfigSlice.actions

export default chartConfigSlice.reducer
