import { createGlobalStyle } from 'styled-components'
import { getTheme } from './theme'
import {
  Scheme,
  FontSize,
  SizeMap,
  ThemeMap,
  PiTheme,
  SchemeValues,
} from './theme.types'
import { ThemeType, themeList } from './themes'
import { hexToRgba } from './helpers'

/**
 * A helper to ger the CSS variables from the values from the color scheme
 */
const getVars = (schemeValues: SchemeValues) =>
  Object.entries(schemeValues).reduce(
    (acc, [key, val]) => `${acc}
      --${key}: ${val};
      --${key}A: ${hexToRgba(val, 0.3)};
    `,
    ''
  )

/**
 * A helper used to get the global style containing the theme
 */
export const getGlobalStyle = (
  { colors: { light, dark = light }, fonts }: PiTheme = getTheme(),
  scheme?: Scheme
) => createGlobalStyle`
  body {
    ${getVars(scheme === 'dark' ? dark : light)}
    font-family: ${fonts.join(', ')};
    background-color: var(--bg);
    color: var(--text);
  }

  & div,
  & button,
  & a,
  & td,
  & tr,
  & table,
  & select,
  & input {
    transition: all 0.5s;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${getVars(scheme === 'light' ? light : dark)}
    }
  }
`

/**
 * A helper to get the global font size
 */
const getGlobalFontSize = (size: FontSize) => createGlobalStyle`
  :root {
    font-size: ${size === 'large' ? '24px' : '16px'};
  }
`

/**
 * A map of the global styles for the themes
 */
export const globalStyles: ThemeMap = themeList.reduce(
  (accStyles, themeName: ThemeType) => {
    return {
      ...accStyles,
      [themeName]: {
        light: getGlobalStyle(getTheme(themeName), 'light'),
        dark: getGlobalStyle(getTheme(themeName), 'dark'),
      },
    }
  },
  {} as ThemeMap
)

/**
 * A map of the global font sizes for both sizes
 */
export const globalFontSizes: SizeMap = {
  small: getGlobalFontSize('small'),
  large: getGlobalFontSize('large'),
}
