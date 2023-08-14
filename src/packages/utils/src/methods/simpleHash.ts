/**
 * A performant hash generation for simple deep JSON comparison
 * @param value
 * @returns
 */
export const simpleHash = (value: unknown) => {
  return JSON.stringify(value)
    .split('')
    .reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)
    .toString()
}
