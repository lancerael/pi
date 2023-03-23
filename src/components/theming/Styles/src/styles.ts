import { createGlobalStyle } from 'styled-components'
import { getTheme } from './theme'

const getVars = (scheme: any) =>
  Object.entries(scheme).reduce(
    (acc, [key, val]) => `${acc} --${key}: ${val};`,
    ''
  )

export const getGlobalStyle = (
  { colors: { light, dark = light }, fonts, fontSizes }: any = getTheme()
) => createGlobalStyle`
  body {
    ${getVars(light)}
    font-family: ${fonts.join(', ')};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${getVars(dark)}
    }
  }
`

export const GlobalStyle = getGlobalStyle()
