import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  themeName: ThemeType
  contrast: Contrast
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
    updateTheme(state: SettingsState, { payload }: { payload: ThemeType }) {
      state.themeName = payload
    },
    updateContrast(state: SettingsState, { payload }: { payload: Contrast }) {
      state.contrast = payload
    },
    updatePage(state: SettingsState, { payload }: Payload) {
      state.page = payload
    },
  },
})

export const { updateTheme, updateContrast, updatePage } = settingsSlice.actions

export default settingsSlice.reducer
