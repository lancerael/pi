// Debounce a function call
export const debounce = (
  callback: (...args: unknown[]) => unknown,
  delay = 250
) => {
  let timeout: NodeJS.Timeout
  return (...args: unknown[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
