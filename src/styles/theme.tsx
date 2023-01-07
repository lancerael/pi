import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from './themes'

type ThemeTypes = 'pebble'

export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

export const getTheme = (themeName: ThemeTypes = 'pebble') => ({
  colors: themes[themeName],
  ...baseTheme,
})

export const Theme = ({ children }: any, theme = getTheme()) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
