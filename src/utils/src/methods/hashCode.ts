/**
 * A performant hash generation to check if a string has changed
 * @param stringToHash
 * @returns
 */
export const hashCode = (value: unknown) => {
  return JSON.stringify(value)
    .split('')
    .reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)
    .toString()
}
