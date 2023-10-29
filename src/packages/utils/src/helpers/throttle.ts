// Throttle a function call
export const throttle = (
  callback: (...args: any[]) => unknown,
  delay = 250
) => {
  let timeout: NodeJS.Timeout
  let lastExecTime = 0

  return (...args: any[]) => {
    const currentTime = Date.now()

    if (currentTime - lastExecTime < delay) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        lastExecTime = currentTime
        callback(...args)
      }, delay)
    } else {
      lastExecTime = currentTime
      callback(...args)
    }
  }
}
