// Throttle a function call
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
