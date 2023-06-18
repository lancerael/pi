import { createGlobalStyle } from 'styled-components'
import { getTheme } from './theme'
import {
  Scheme,
  FontSize,
  SizeMap,
  ThemeMap,
  ITheme,
  SchemeValues,
} from './theme.types'
import { ThemeType, themeList } from './themes'

const getVars = (schemeValues: SchemeValues) =>
  Object.entries(schemeValues).reduce(
    (acc, [key, val]) => `${acc} --${key}: ${val};`,
    ''
  )

export const getGlobalStyle = (
  { colors: { light, dark = light }, fonts }: ITheme = getTheme(),
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

const getGlobalFontSize = (size: FontSize) => createGlobalStyle`
  :root {
    font-size: ${size === 'large' ? '24px' : '16px'};
  }
`

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

export const globalFontSizes: SizeMap = {
  small: getGlobalFontSize('small'),
  large: getGlobalFontSize('large'),
}
