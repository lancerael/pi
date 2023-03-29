import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const chartConfigSlice = createSlice({
  name: 'chartConfig',
  initialState,
  reducers: {
    updateType(state: any, { payload }: any) {
      state.aValues[payload.i1].sName = payload.val
    },
    updateColor(state: any, { payload }: any) {
      state.aValues[payload.i1].sColor = payload.val
    },
    changeTitle(state: any, { payload }: any) {
      state.sTitle = payload
    },
    changeAxisX(state: any, { payload }: any) {
      state.aAxisLabels[1] = payload
    },
    changeAxisY(state: any, { payload }: any) {
      state.aAxisLabels[0] = payload
    },
    addConfigColumn(state: any) {
      state.aValues.push({ sName: '', sColor: '#000000' })
    },
    deleteConfigColumn(state: any, { payload }: any) {
      state.aValues.splice(payload, 1)
    },
    switchTrim(state: any, { payload }: any) {
      state.bTrim = payload
    },
    replaceConfig(state: any, { payload }: any) {
      state = payload
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
