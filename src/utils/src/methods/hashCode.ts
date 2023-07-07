/**
 * A performant hash generation
 * @param value
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
