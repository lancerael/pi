import { DefaultTheme } from 'styled-components'

export type FontSize = 'small' | 'large'

export type Scheme = 'light' | 'dark'

/**
 * Props for the GlobalStyle component.
 */
interface GlobalStyleProps {
  /**
   * The font size for the root element ('large' or 'small').
   */
  $fontSize?: FontSize

  /**
   * The theme object containing color and font information.
   */
  theme?: DefaultTheme
}

export default GlobalStyleProps
