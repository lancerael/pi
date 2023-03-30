import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const themingSlice = createSlice({
  name: 'theming',
  initialState,
  reducers: {
    updateTheme(state: any, { payload }: any) {
      state.themeName = payload
    },
    updateContrast(state: any, { payload }: any) {
      state.contrast = payload
    },
  },
})

export const { updateTheme, updateContrast } = themingSlice.actions

export default themingSlice.reducer
