import { ThemeProvider } from 'styled-components'
import { USER_SCHEME } from '../../constants'
import getTheme from '../../helpers/getTheme'
import { ThemeProps } from '../../theme.types'
import GlobalStyle from '../GlobalStyle'
import getTransientProps from '../../helpers/getTransientProps'

/**
 * Theme provider component to wrap child components in a theme.
 *
 * @param {ThemeProps} props - The props for the Theme component.
 * @returns {JSX.Element} A ThemeProvider wrapped component.
 */
export const Theme = ({
  themeName = 'andro',
  fontSize = 'small',
  scheme = USER_SCHEME,
  includeGlobal = true,
  themeOverrides,
  theme = getTheme(themeName, scheme, themeOverrides),
  children,
}: ThemeProps) => {
  return (
    <ThemeProvider {...{ theme }}>
      {includeGlobal && (
        <GlobalStyle {...getTransientProps({ fontSize, scheme })} />
      )}
      {children}
    </ThemeProvider>
  )
}

export default Theme
