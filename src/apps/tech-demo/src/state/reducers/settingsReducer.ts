import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  themeName: string
  contrast: string
  page: string
}

interface Payload {
  payload: string
}

const initialState: SettingsState = {
  themeName: 'andro',
  contrast: '',
  page: '/',
}

const settingsSlice = createSlice({
  name: 'theming',
  initialState,
  reducers: {
    updateTheme(state: SettingsState, { payload }: Payload) {
      state.themeName = payload
    },
    updateContrast(state: SettingsState, { payload }: Payload) {
      state.contrast = payload
    },
    updatePage(state: SettingsState, { payload }: Payload) {
      state.page = payload
    },
  },
})

export const { updateTheme, updateContrast, updatePage } = settingsSlice.actions

export default settingsSlice.reducer
