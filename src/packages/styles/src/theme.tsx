import React from 'react'
import { ThemeProvider } from 'styled-components'
import { globalFontSizes, globalStyles } from './styles'
import { themes, ThemeType } from './themes'
import { PiTheme, Scheme, ThemeProps } from './theme.types'

/**
 * The parameters of the base theme
 */
export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

/**
 * The status colours for the schemes
 */
export const statusColors = {
  light: {
    pending: '#232c75',
    error: '#b10808',
    success: '#237528',
  },
  dark: {
    pending: '#3a99e8',
    error: '#f95659',
    success: '#60aa3d',
  },
}

/**
 * A map of the available background gradients
 */
export const gradients = {
  default: ['dark', 'specialShadow'],
  alt: ['text', 'textSoft'],
}

/**
 * A map of the available box colours
 */
export const boxColors = {
  default: ['textSoft', 'subtle'],
  alt: ['text', 'border'],
}

/**
 * A helper to merge the colours for the chosen theme
 */
export const mergeColours = (scheme: Scheme, themeName: ThemeType) => ({
  ...statusColors[scheme],
  ...themes[themeName][scheme],
})

/**
 * A helper to get the currently selected theme
 */
export const getTheme = (
  themeName: ThemeType = 'andro',
  themeOverrides?: PiTheme
): PiTheme => ({
  colors: {
    light: mergeColours('light', themeName),
    dark: mergeColours('dark', themeName),
  },
  ...baseTheme,
  ...themeOverrides,
})

/**
 * A react provider component that wraps the child components in a theme
 */
export const Theme = ({
  children,
  themeName = 'andro',
  themeOverrides,
  theme = getTheme(themeName, themeOverrides),
  scheme = 'light',
  fontSize = 'small',
}: ThemeProps) => {
  const isWindow = typeof window !== 'undefined'
  const isDark =
    isWindow && !!matchMedia('(prefers-color-scheme: dark)').matches
  const defaultTheme = isDark ? 'dark' : 'light'
  const style = globalStyles[themeName]
  const GlobalStyle = style ? style[scheme || defaultTheme] : () => <></>
  const SizeStyle = globalFontSizes[fontSize]
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <SizeStyle />
      {children}
    </ThemeProvider>
  )
}

/**
 * A react HOC to add a theme to a component
 */
export const withTheme =
  (Component: React.JSXElementConstructor<any>, themeName: ThemeType) =>
  (props: { [key: string]: unknown }) =>
    (
      <Theme {...{ themeName }}>
        <Component {...props} />
      </Theme>
    )
