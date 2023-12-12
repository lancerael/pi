/**
 * Get the CSS variables from the values of the color scheme
 *
 * @param {Record<string, string>} colors - The color values to generate CSS variables for.
 * @returns {string} - A string containing CSS variable declarations.
 */
const getThemeColorVars = (colors: Record<string, string>) => {
  return Object.entries(colors).reduce(
    (acc, [key, val]) => `${acc}
      --${key}: ${val};
    `,
    ''
  )
}

export default getThemeColorVars
