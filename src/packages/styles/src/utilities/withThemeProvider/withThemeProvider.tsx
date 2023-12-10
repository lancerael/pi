import Theme from '../../components/Theme'
import getTheme from '../../helpers/getTheme'
import { ThemeName } from '../../themes'

/**
 * Higher-order component to add a theme to a wrapped component.
 * @param {React.JSXElementConstructor<any>} Component - The component to be wrapped.
 * @param {ThemeName} themeName - The name of the theme to be applied.
 * @returns {Function} A function that takes props and returns a themed component.
 */
export const withThemeProvider =
  (
    Component: React.JSXElementConstructor<unknown>,
    themeName: ThemeName,
    theme = getTheme(themeName)
  ) =>
  (props: Record<string, unknown>) => {
    return (
      <Theme {...{ themeName, theme }}>
        <Component {...props} />
      </Theme>
    )
  }

export default withThemeProvider
