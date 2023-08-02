/**
 * A performant hash generation for deep object comparison
 * @param value
 * @returns
 */
export const simpleHash = (value: unknown) => {
  return JSON.stringify(value)
    .split('')
    .reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)
    .toString()
}
