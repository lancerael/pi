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

export default rgbToHex
