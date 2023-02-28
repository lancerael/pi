import React from 'react'
import { ThemeProvider } from 'styled-components'
import { getGlobalStyle } from './styles'
import * as themes from './themes'
import { ThemeType } from './themes'

export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

export const getTheme = (themeName: ThemeType = 'pebble') => ({
  colors: themes[themeName],
  ...baseTheme,
})

export const Theme = ({
  children,
  themeName = 'pebble',
  theme = getTheme(themeName),
}: any) => {
  const GlobalStyle = getGlobalStyle(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeProvider>
  )
}
