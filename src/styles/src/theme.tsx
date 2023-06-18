import React from 'react'
import { ThemeProvider } from 'styled-components'
import { globalFontSizes, globalStyles } from './styles'
import * as themes from './themes'
import { ThemeType } from './themes'
import { ITheme, IThemeProps } from './theme.types'

export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  chartBackground: `linear-gradient(
    135deg,
    var(--bg) 0%,
    var(--subtle) 50%,
    var(--border) 51%,
    var(--bg) 100%
  )`,
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
}: IThemeProps) => {
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
  (props: unknown[]) =>
    (
      <Theme {...{ themeName }}>
        <Component {...props} />
      </Theme>
    )
