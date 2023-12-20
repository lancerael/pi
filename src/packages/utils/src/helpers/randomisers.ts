/**
 * Generates a random number between the specified inclusive range of `min` and `max`.
 * @param {number} min - The lower inclusive limit of the random number range.
 * @param {number} max - The upper inclusive limit of the random number range.
 * @returns {number} A random number within the inclusive range.
 */
export const randomNumber = (min: number, max: number): number => {
  const range = max - min + 1
  return min + Math.floor(Math.random() * range)
}

/**
 * Creates a random string of a specified length.
 * @param {number} length - The length of the string to generate.
 * @returns {string} A string containing random characters.
 */
export const randomString = (length: number = 10): string => {
  return Array.from({ length }, () =>
    String.fromCharCode(Math.random() * 94 + 32)
  ).join('')
}
