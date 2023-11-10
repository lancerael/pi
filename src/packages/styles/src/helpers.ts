/**
 * Converts an RGB color value to its hexadecimal representation.
 *
 * @param {string} rgb - The RGB string (e.g., "rgb(255, 255, 255)").
 * @returns {string} The hexadecimal color code (e.g., "#ffffff").
 */
export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.match(/[\d]+/g) as string[]
  const hex = +b | (+g << 8) | (+r << 16)
  return `#${(0x1000000 + hex).toString(16).slice(1)}`
}

/**
 * Converts a hexadecimal color value to its RGB representation.
 *
 * @param {string} hex - The hexadecimal color code (e.g., "#ffffff" or "#fff").
 * @param {number} opacity - The opacity for the new color.
 * @returns {string} The RGB string (e.g., "rgb(255, 255, 255)").
 */
export const hexToRgba = (hex: string, opacity: number = 1) => {
  let newHex = hex.replace(/^#/, '')
  if (newHex.length === 3) {
    newHex = newHex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
  }
  const [r, g, b] = [0, 1, 2].map((i) =>
    parseInt(newHex.substring(i * 2, i * 2 + 2), 16)
  )
  return `rgb(${r}, ${g}, ${b}, ${opacity})`
}
