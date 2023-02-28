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
  :root {
    ${getVars(light)}
    font-family: ${fonts.join(', ')};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${getVars(dark)}
    }
  }
`

export const GlobalStyle = getGlobalStyle()
