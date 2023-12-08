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
 * Adds alternative versions to palette with suffix:
 * {color}A - alpha
 * {color}D - dark version
 * {color}L - light version
 * {color}HC - high contrast version
 * {color}LC - low contrast version
 */
const getColorVars = (schemeValues: SchemeValues, scheme: Scheme) => {
  const isDark = scheme === 'dark'
  return Object.entries(schemeValues).reduce(
    (acc, [key, val]) => `${acc}
      --${key}: ${val};
      --${key}A: ${hexToRgba(val, 0.5)};
      --${key}D: ${hexToRgba(val, 1, 0.5)};
      --${key}L: ${hexToRgba(val, 1, 2)};
      --${key}HC: ${hexToRgba(val, 1, isDark ? 0.5 : 2)};
      --${key}LC: ${hexToRgba(val, 1, isDark ? 2 : 1.5)};
    `,
    ''
  )
}

/**
 * A helper used to get the global style containing the theme
 */
export const getGlobalStyle = (
  { colors, fonts }: PiTheme = getTheme(),
  scheme: Scheme
) => {
  // console.log(colors, scheme)
  return createGlobalStyle`
  body {
    ${getColorVars(colors[scheme], scheme)}
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
  & input,
  & ul,
  & li {
    transition: all 0.5s;
  }

  /* @media (prefers-color-scheme: dark) {
    body {
      ${getColorVars(colors[scheme], scheme)}
    }
  } */
`
}

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
