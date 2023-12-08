import { createGlobalStyle } from 'styled-components'
import { Scheme } from './theme.types'
import { hexToRgba } from './helpers'

/**
 * Get the CSS variables from the values of the color scheme
 * Adds alternative versions to palette with suffix:
 * {color}A - alpha
 * {color}D - dark version
 * {color}L - light version
 * {color}HC - high contrast version
 * {color}LC - low contrast version
 */
const getThemeColorVars = (colors: Record<string, string>, scheme: Scheme) => {
  const isDark = scheme === 'dark'
  return Object.entries(colors).reduce(
    (acc, [key, val]) => `${acc}
      --${key}: ${val};
      --${key}A: ${hexToRgba(val, 0.5)};
      --${key}D: ${hexToRgba(val, 1, 0.5)};
      --${key}L: ${hexToRgba(val, 1, 2)};
      --${key}HC: ${hexToRgba(val, 1, isDark ? 0.5 : 2)};
      --${key}LC: ${hexToRgba(val, 1, isDark ? 2 : 0.5)};
    `,
    ''
  )
}

export const GlobalStyle = createGlobalStyle<any>`
  :root {
    font-size: ${({ $fontSize }) => ($fontSize === 'large' ? '24px' : '16px')};
    ${({ theme, $scheme }) => getThemeColorVars(theme.colors, $scheme)}
    font-family: ${({ theme }) => theme.fonts.join(', ')};
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
`
