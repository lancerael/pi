import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { themes, ThemeName } from './themes'
import { BoxNames, PiTheme, Scheme, ThemeProps } from './theme.types'
import { USER_SCHEME } from './constants'
import { getTransientProps } from './helpers'

/**
 * The parameters of the base theme
 */
export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '0.7rem',
    medium: '1rem',
    large: '1.5rem',
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
  special: ['special', 'specialD'],
}

/**
 * A map of the available box colours
 */
export const boxColors: Record<BoxNames, [string, string]> = {
  default: ['textSoft', 'subtle'],
  hi: ['bg', 'text'],
  alt: ['specialText', 'specialBg'],
  light: ['dark', 'light'],
}

/**
 * Generates the theme object based on theme name and overrides.
 * @param {ThemeName} themeName - The name of the theme.
 * @param {PiTheme} [themeOverrides] - Optional overrides for the theme.
 * @returns {PiTheme} The final theme object.
 */
export const getTheme = (
  themeName: ThemeName = 'andro',
  scheme: Scheme = 'light',
  themeOverrides?: PiTheme
): PiTheme => ({
  colors: {
    ...statusColors[scheme],
    ...themes[themeName][scheme],
  },
  ...baseTheme,
  ...themeOverrides,
})

/**
 * Theme provider component to wrap child components in a theme.
 *
 * @param {ThemeProps} props - The props for the Theme component.
 * @returns {JSX.Element} A ThemeProvider wrapped component.
 */
export const Theme = ({
  themeName = 'andro',
  fontSize = 'small',
  scheme = USER_SCHEME,
  includeGlobal = true,
  themeOverrides,
  theme = getTheme(themeName, scheme, themeOverrides),
  children,
}: ThemeProps) => {
  return (
    <ThemeProvider {...{ theme }}>
      {includeGlobal && (
        <GlobalStyle {...getTransientProps({ fontSize, scheme })} />
      )}
      {children}
    </ThemeProvider>
  )
}

/**
 * Higher-order component to add a theme to a wrapped component.
 * @param {React.JSXElementConstructor<any>} Component - The component to be wrapped.
 * @param {ThemeName} themeName - The name of the theme to be applied.
 * @returns {Function} A function that takes props and returns a themed component.
 */
export const withThemeProvider =
  (Component: React.JSXElementConstructor<unknown>, themeName: ThemeName) =>
  (props: Record<string, unknown>) =>
    (
      <Theme {...{ themeName }}>
        <Component {...props} />
      </Theme>
    )
