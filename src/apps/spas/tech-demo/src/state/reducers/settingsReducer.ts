import { Scheme, ThemeType } from '@pi-lib/styles'
import { USER_SCHEME } from '@pi-lib/styles/src/constants'
import { createSlice } from '@reduxjs/toolkit'

export type FontSize = 'small' | 'large'

export interface SettingsState {
  themeName: ThemeType
  fontSize: FontSize
  scheme: Scheme
  page: string
  consent: boolean
}

interface Payload<T> {
  payload: T
}

const pageParts = window.location.href.split('/')

const storedSettings = localStorage.getItem('piLibDemoSettings')

const initialState: SettingsState = {
  themeName: 'andro',
  scheme: USER_SCHEME,
  fontSize: 'small',
  consent: false,
  ...JSON.parse(storedSettings ?? '{}'),
  page: `/${pageParts[pageParts.length - 1]}`,
}

const storeSettings = (state: SettingsState) =>
  state.consent &&
  localStorage.setItem('piLibDemoSettings', JSON.stringify(state))

const settingsSlice = createSlice({
  name: 'theming',
  initialState,
  reducers: {
    updateTheme(state: SettingsState, { payload }: Payload<ThemeType>) {
      state.themeName = payload
      storeSettings(state)
    },
    updateScheme(state: SettingsState, { payload }: Payload<Scheme>) {
      state.scheme = payload
      storeSettings(state)
    },
    updateFontSize(state: SettingsState, { payload }: Payload<FontSize>) {
      state.fontSize = payload
      storeSettings(state)
    },
    updatePage(state: SettingsState, { payload }: Payload<string>) {
      state.page = payload
      storeSettings(state)
    },
    updateConsent(state: SettingsState, { payload }: Payload<boolean>) {
      state.consent = payload
      storeSettings(state)
    },
  },
})

export const {
  updateTheme,
  updateScheme,
  updateFontSize,
  updatePage,
  updateConsent,
} = settingsSlice.actions

export default settingsSlice.reducer
