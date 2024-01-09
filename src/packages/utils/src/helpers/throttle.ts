/**
 * Creates a throttled function that only invokes `callback` at most once every `delay` milliseconds.
 * Calls to the throttled function that occur more frequently than `delay` are ignored.
 *
 * @param {Function} callback - The function to throttle.
 * @param {number} [delay=250] - The number of milliseconds to wait before allowing the next execution of `callback`.
 * @returns {Function} A new, throttled, function.
 */
export const throttle = (
  callback: (...args: any[]) => unknown,
  delay = 250
) => {
  let lastExecTime = 0

  return (...args: any[]) => {
    const currentTime = Date.now()
    const execute = () => {
      lastExecTime = Date.now()
      callback(...args)
    }

    if (!lastExecTime || currentTime - lastExecTime >= delay) {
      execute()
    }
  }
}
