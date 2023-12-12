import { createGlobalStyle } from 'styled-components'
import getThemeColorVars from '../../helpers/getThemeColorVars'
import GlobalStyleProps from './GlobalStyle.types'

/**
 * Global styles for the entire application.
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The rendered GlobalStyle component.
 */
export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    font-size: ${({ $fontSize }) => ($fontSize === 'large' ? '24px' : '16px')};
    ${({ theme }) => getThemeColorVars(theme.colors)}
    font-family: ${({ theme }) => theme.fonts.join(', ')};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
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

export default GlobalStyle
