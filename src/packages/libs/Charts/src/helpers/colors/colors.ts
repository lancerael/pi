import { rgb, RGBColor } from 'd3-color'
import { randomNumber, newArray } from '../utilities'
import { BackgroundContrast, RGBSimple, ValueConfig } from '../../types'

/**
 * Used to filter random colour rgb values and ensure high contrast against background.
 * Returns true if the color contrast is on the correct side of the boundary.
 *
 * @method colorFilter
 *
 * @param rgbValues [r, g, b] tuple array of RGB rgb values
 * @param backgroundType the type of backgroun;d light/dark to filter for contrast
 * @param brightnessBoundary the brightness value to filter against
 * @return specify whether the rgb values pass or fail
 */
const colorFilter = (
  [r, g, b]: RGBSimple,
  backgroundContrast: BackgroundContrast = 'light',
  brightnessBoundary = 170
): boolean => {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return {
    light: brightness < brightnessBoundary,
    dark: brightness > brightnessBoundary,
  }[backgroundContrast]
}

/**
 * Generate a random 0-255 number for an RGB value
 *
 * @method random256
 *
 * @return Random 256 number
 */
const random256 = (): number => randomNumber(0, 255)

/**
 * Returns a random color (D3 object)
 *
 * @method randomColor
 *
 * @param backgroundType the type of background light/dark to filter for contrast
 * @param brightnessBoundary the brightness value to filter against
 * @return randomly generated RGB object
 */
const randomColor = (
  backgroundContrast: BackgroundContrast = 'light',
  brightnessBoundary = 170
): RGBColor => {
  const generateRGB = (): RGBSimple => newArray(3, random256) as RGBSimple
  let rgbValues
  while (
    rgbValues === undefined ||
    !colorFilter(rgbValues, backgroundContrast, brightnessBoundary)
  ) {
    rgbValues = generateRGB()
  }
  return rgb(...rgbValues)
}

/**
 * Returns a random color palette
 *
 * @method randomPalette
 *
 * @param length the size of the palette
 * @return list of randomly generated RGB objects
 */
const randomPalette = (length = 10): RGBColor[] =>
  newArray(length, () => randomColor())

/**
 * Returns a darker version of a color
 *
 * @method darkerColor
 *
 * @param color RGB object
 * @return darker RGB object
 */
const darkerColor = (color: RGBColor): RGBColor => color.darker(0.5)

/**
 * Adds colour rgbvalues to the config array of key rgbvalues
 *
 * @method addColorsToConfig
 *
 * @param configValues the config values needing colours
 * @param bAddRgb add RGB object or not?
 * @return A modified version of rgbvalues containing colours
 */
const addColorsToConfig = (
  configValues: ValueConfig[],
  addRGB = true
): ValueConfig[] =>
  configValues.map(
    ({
      color = randomColor().formatHex(),
      ...configValues
    }: ValueConfig): ValueConfig => ({
      color,
      rgbColor: addRGB && rgb(color),
      ...configValues,
    })
  )

export {
  colorFilter,
  random256,
  randomColor,
  randomPalette,
  darkerColor,
  addColorsToConfig,
}
