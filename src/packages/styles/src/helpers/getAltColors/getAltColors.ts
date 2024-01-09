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
    const dark = hexToRgba(val, 1, 0.9)
    const light = hexToRgba(val, 1, 2)
    return {
      ...acc,
      [key]: val,
      [`${key}A`]: hexToRgba(val, 0.5),
      [`${key}D`]: dark,
      [`${key}L`]: light,
      [`${key}HC`]: isDark ? dark : light,
      [`${key}LC`]: isDark ? light : dark,
    }
  }, {})
}

export default getAltColors
