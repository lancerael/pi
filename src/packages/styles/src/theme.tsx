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
 * Merges status colors with theme-specific colors.
 * @param {Scheme} scheme - The color scheme ('light' or 'dark').
 * @param {ThemeType} themeName - The name of the theme.
 * @returns {Object} Merged color object.
 */
export const mergeColours = (scheme: Scheme, themeName: ThemeType) => ({
  ...statusColors[scheme],
  ...themes[themeName][scheme],
})

/**
 * Generates the theme object based on theme name and overrides.
 * @param {ThemeType} themeName - The name of the theme.
 * @param {PiTheme} [themeOverrides] - Optional overrides for the theme.
 * @returns {PiTheme} The final theme object.
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
 * Theme provider component to wrap child components in a theme.
 * @component
 * @param {ThemeProps} props - The props for the Theme component.
 * @returns {JSX.Element} A ThemeProvider wrapped component.
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
 * Higher-order component to add a theme to a wrapped component.
 * @param {React.JSXElementConstructor<any>} Component - The component to be wrapped.
 * @param {ThemeType} themeName - The name of the theme to be applied.
 * @returns {Function} A function that takes props and returns a themed component.
 */
export const withTheme =
  (Component: React.JSXElementConstructor<any>, themeName: ThemeType) =>
  (props: { [key: string]: unknown }) =>
    (
      <Theme {...{ themeName }}>
        <Component {...props} />
      </Theme>
    )
