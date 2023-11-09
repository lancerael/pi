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
  let timeout: NodeJS.Timeout
  let lastExecTime = 0
  let isInitComplete = false
  return (...args: any[]) => {
    const execute = () => {
      lastExecTime = currentTime
      callback(...args)
    }
    const currentTime = Date.now()
    if (!isInitComplete) {
      execute()
      isInitComplete = true
    }
    if (currentTime - lastExecTime < delay) {
      clearTimeout(timeout)
      timeout = setTimeout(execute, delay)
    } else execute()
  }
}
