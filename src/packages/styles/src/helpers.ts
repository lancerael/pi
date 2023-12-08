import { BaseProps, TransientProps } from './theme.types'

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
    return newVal > 255 ? 255 : newVal
  })
  return `rgb(${r}, ${g}, ${b}, ${opacity})`
}

/**
 * Transforms the keys of an object by prefixing each key with `$`.
 * This is typically used for creating transient props in styled components.
 *
 * @template T The type of the input object, should extend BaseProps.
 * @param {T} props - The object whose keys are to be transformed.
 * @returns {TransientProps<T>} - An object with the same values as the input object,
 *                                but with each key prefixed with `$`.
 *
 * @example
 * const props = { color: 'red', size: 10 };
 * const transientProps = getTransientProps(props);
 * // transientProps will be { $color: 'red', $size: 10 }
 */
export const getTransientProps = <T extends BaseProps = BaseProps>(
  props: T
): TransientProps<T> => {
  return Object.entries(props).reduce(
    (acc, [key, val]) => ({ ...acc, [`$${key}`]: val }),
    {} as TransientProps<T>
  )
}
