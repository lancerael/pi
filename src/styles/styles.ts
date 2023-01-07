import { createGlobalStyle } from 'styled-components'
import { getTheme } from './theme'

const getVars = (scheme: any) =>
  Object.entries(scheme).reduce(
    (acc, [key, val]) => `${acc} --${key}: ${val};`,
    ''
  )

export const getGlobalStyle = (
  {
    colors: {
      light,
      dark = light,
      lightContrast = light,
      darkContrast = light,
    },
    fonts,
    fontSizes,
  }: any = getTheme()
) => createGlobalStyle`
  :root {
    ${getVars(light)}
    font-family: ${fonts.join(', ')};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${getVars(dark)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${getVars(lightContrast)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${getVars(darkContrast)}
    }
  }
`

export const GlobalStyle = getGlobalStyle()
