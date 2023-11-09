/**
 * Clamps a value to ensure it falls within a specified range.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum value to which the original value should be clamped to.
 * @param {number} max - The maximum value to which the original value should be clamped to.
 * @returns {number} The clamped value, which will be within the inclusive range defined by the min and max parameters.
 */
export const clampValue = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}
