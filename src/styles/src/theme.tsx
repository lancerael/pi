import React from 'react'
import { ThemeProvider } from 'styled-components'
import { globalFontSizes, globalStyles } from './styles'
import { themes, ThemeType } from './themes'
import { ITheme, ThemeProps } from './theme.types'

export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

export const statusColors = {
  light: {
    pending: '#232c75',
    error: '#b10808',
    success: '#237528',
  },
  dark: {
    pending: '#5db0f4',
    error: '#f97c7f',
    success: '#60aa3d',
  },
}

export const mergeColours = (
  scheme: 'dark' | 'light',
  themeName: ThemeType
) => ({
  ...statusColors[scheme],
  ...themes[themeName][scheme],
})

export const getTheme = (
  themeName: ThemeType = 'andro',
  themeOverrides?: ITheme
): ITheme => ({
  colors: {
    light: mergeColours('light', themeName),
    dark: mergeColours('dark', themeName),
  },
  ...baseTheme,
  ...themeOverrides,
})

export const Theme = ({
  children,
  themeName = 'andro',
  themeOverrides,
  theme = getTheme(themeName, themeOverrides),
  scheme = 'light',
  fontSize = 'small',
}: ThemeProps) => {
  const defaultTheme = !!matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const GlobalStyle = globalStyles[themeName]?.[scheme || defaultTheme] ?? <></>
  const SizeStyle = globalFontSizes[fontSize]
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <SizeStyle />
      {children}
    </ThemeProvider>
  )
}

export const withTheme =
  (Component: React.JSXElementConstructor<any>, themeName: ThemeType) =>
  (props: { [key: string]: unknown }) =>
    (
      <Theme {...{ themeName }}>
        <Component {...props} />
      </Theme>
    )