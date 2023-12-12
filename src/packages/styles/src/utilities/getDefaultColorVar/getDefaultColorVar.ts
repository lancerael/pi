import { DEFAULT_THEME } from '../../constants'

/**
 * Get the default color variable based on the provided color.
 *
 * @param {string} color - The color for which to retrieve the default variable.
 * @returns {string} The color variable with a default backup.
 */
export const getDefaultColorVar = (color: string) =>
  `var(--${color}, ${DEFAULT_THEME.theme.colors[color]})`

export default getDefaultColorVar
