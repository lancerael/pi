import { Scheme } from '../../components'
import { baseTheme, statusColors } from '../../theme'
import { PiTheme } from '../../theme.types'
import { themes } from '../../themes'
import { ThemeName } from '../../themes/themes.types'
import getAltColors from '../getAltColors'

/**
 * Generates the theme object based on theme name and overrides.
 * @param {ThemeName} themeName - The name of the theme.
 * @param {Scheme} scheme - Is it light or dark
 * @param {PiTheme} [themeOverrides] - Optional overrides for the theme.
 * @returns {PiTheme} The final theme object.
 */
export const getTheme = (
  themeName: ThemeName = 'andro',
  scheme: Scheme = 'light',
  themeOverrides?: PiTheme
): PiTheme => ({
  colors: {
    ...statusColors[scheme],
    ...getAltColors(themes[themeName][scheme], scheme),
  },
  ...baseTheme,
  ...themeOverrides,
})

export default getTheme
