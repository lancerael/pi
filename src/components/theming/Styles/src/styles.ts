import { createGlobalStyle } from 'styled-components'
import { getTheme } from './theme'
import { Contrast } from './theme.types'

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

export const GlobalStyle = getGlobalStyle()
