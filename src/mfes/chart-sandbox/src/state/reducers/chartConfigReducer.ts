import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  axisLabels: ['', ''],
  itemValues: [],
  doTrim: true,
}

const chartConfigSlice = createSlice({
  name: 'chartConfig',
  initialState,
  reducers: {
    updateType(state: any, { payload }: any) {
      state.itemValues[payload.i].name = payload.value
    },
    updateColor(state: any, { payload }: any) {
      state.itemValues[payload.i].color = payload.value
    },
    changeTitle(state: any, { payload }: any) {
      state.title = payload
    },
    changeAxisX(state: any, { payload }: any) {
      state.axisLabels[1] = payload
    },
    changeAxisY(state: any, { payload }: any) {
      state.axisLabels[0] = payload
    },
    addConfigColumn(state: any) {
      state.itemValues.push({
        name: `Col ${state.itemValues.length + 1}`,
        color: '#000000',
      })
    },
    deleteConfigColumn(state: any, { payload }: any) {
      state.itemValues.splice(payload, 1)
    },
    switchTrim(state: any, { payload }: any) {
      state.doTrim = payload
    },
    replaceConfig(state: any, { payload }: any) {
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
