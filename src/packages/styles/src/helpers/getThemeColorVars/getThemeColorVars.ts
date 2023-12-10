import { Scheme } from '../../theme.types'

/**
 * Get the CSS variables from the values of the color scheme
 */
const getThemeColorVars = (colors: Record<string, string>, scheme: Scheme) => {
  return Object.entries(colors).reduce(
    (acc, [key, val]) => `${acc}
      --${key}: ${val};
    `,
    ''
  )
}

export default getThemeColorVars
