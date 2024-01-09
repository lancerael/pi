/**
 * Converts a hexadecimal color value to its RGB representation,
 * with optional tweaks to brightness and opacity.
 *
 * @param {string} hex - The hexadecimal color code (e.g., "#ffffff" or "#fff").
 * @param {number} opacity - The opacity for the new color.
 * @param {number} brightness - The brightness multiplier for the new color.
 * @returns {string} The RGB string (e.g., "rgb(255, 255, 255)").
 */
export const hexToRgba = (
  hex: string,
  opacity: number = 1,
  brightness: number = 1
) => {
  let newHex = hex.replace(/^#/, '')
  if (newHex.length === 3) {
    newHex = newHex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
  }
  const [r, g, b] = [0, 1, 2].map((i) => {
    let newVal = parseInt(newHex.substring(i * 2, i * 2 + 2), 16)
    newVal *= brightness
    return newVal > 255 ? 255 : Math.round(newVal)
  })
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export default hexToRgba
