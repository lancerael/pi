import ThemeProvider from '../../components/ThemeProvider'
import { ThemeName } from '../../themes'

/**
 * Higher-order component to add a theme to a wrapped component.
 * @param {React.JSXElementConstructor<any>} Component - The component to be wrapped.
 * @param {ThemeName} themeName - The name of the theme to be applied.
 * @returns {Function} A function that takes props and returns a themed component.
 */
export const withThemeProvider =
  (Component: React.JSXElementConstructor<unknown>, themeName: ThemeName) =>
  (props: Record<string, unknown>) => {
    return (
      <ThemeProvider {...{ themeName }}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

export default withThemeProvider
