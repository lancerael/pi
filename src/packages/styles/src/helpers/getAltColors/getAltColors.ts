import { Scheme } from '../../components'
import hexToRgba from '../hexToRgba'

/**
 * Generates alternative versions of colors based on the provided color scheme.
 * Adds alternative versions to palette with suffix:
 * {color}A - alpha
 * {color}D - dark version
 * {color}L - light version
 * {color}HC - high contrast version
 * {color}LC - low contrast version
 *
 * @param {Record<string, string>} colors - The base colors to generate alternatives for.
 * @param {Scheme} scheme - The color scheme (e.g., 'dark' or 'light').
 * @returns {Record<string, string>} - An object containing alternative color versions.
 */
export const getAltColors = (
  colors: Record<string, string>,
  scheme: Scheme
) => {
  const isDark = scheme === 'dark'
  return Object.entries(colors).reduce((acc, [key, val]) => {
    return {
      ...acc,
      [key]: val,
      [`${key}A`]: hexToRgba(val, 0.5),
      [`${key}D`]: hexToRgba(val, 1, 0.5),
      [`${key}L`]: hexToRgba(val, 1, 2),
      [`${key}HC`]: hexToRgba(val, 1, isDark ? 0.5 : 2),
      [`${key}LC`]: hexToRgba(val, 1, isDark ? 2 : 0.5),
    }
  }, {})
}

export default getAltColors
