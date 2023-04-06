import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle,
} from 'styled-components'
import { getTheme } from './theme'
import { Contrast } from './theme.types'
import { ThemeType } from './themes'

export const themeList = Object.values(
  import.meta.glob('./themes/*.tsx', { eager: true, as: 'url' })
).map((item) => item.split('/').pop()?.split('.')[0]) as ThemeType[]

const getVars = (scheme: any) =>
  Object.entries(scheme).reduce(
    (acc, [key, val]) => `${acc} --${key}: ${val};`,
    ''
  )

export const getGlobalStyle = (
  { colors: { light, dark = light }, fonts, fontSizes }: any = getTheme(),
  contrast?: Contrast
) => createGlobalStyle`
  body {
    ${getVars(contrast === 'dark' ? dark : light)}
    font-family: ${fonts.join(', ')};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${getVars(contrast === 'light' ? light : dark)}
    }
  }
`

type ContrastMap = { [key in Contrast]: GlobalStyleComponent<{}, DefaultTheme> }
type ThemeMap = { [key in ThemeType]: ContrastMap }

export const globalStyles: ThemeMap = themeList.reduce(
  (accStyles, themeName: ThemeType) => {
    return {
      ...accStyles,
      [themeName]: {
        'light': getGlobalStyle(getTheme(themeName), 'light'),
        'dark': getGlobalStyle(getTheme(themeName), 'dark'),
        '': getGlobalStyle(getTheme(themeName)),
      },
    }
  },
  {} as ThemeMap
)
