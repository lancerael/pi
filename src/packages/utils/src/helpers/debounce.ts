/**
 * Creates a debounced function that delays invoking `callback` until after `delay` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} [delay=250] - The number of milliseconds to delay; defaults to 250ms.
 * @returns {Function} A new debounced function.
 */
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
