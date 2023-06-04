import { Scheme } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  themeName: ThemeType
  fontSize: 'small' | 'large'
  scheme: Scheme
  page: string
}

interface Payload {
  payload: string
}

const initialState: SettingsState = {
  themeName: 'andro',
  scheme: !!matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  fontSize: 'small',
  page: '/',
}

const settingsSlice = createSlice({
  name: 'theming',
  initialState,
  reducers: {
    updateTheme(state: SettingsState, { payload }: { payload: ThemeType }) {
      state.themeName = payload
    },
    updateScheme(state: SettingsState, { payload }: { payload: Scheme }) {
      state.scheme = payload
    },
    updateFontSize(
      state: SettingsState,
      { payload }: { payload: SettingsState['fontSize'] }
    ) {
      state.fontSize = payload
    },
    updatePage(state: SettingsState, { payload }: Payload) {
      state.page = payload
    },
  },
})

export const { updateTheme, updateScheme, updateFontSize, updatePage } =
  settingsSlice.actions

export default settingsSlice.reducer
