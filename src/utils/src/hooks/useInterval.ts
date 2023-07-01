import { useEffect } from 'react'

/**
 * A React hook used to create an interval that cleans itself up
 * @param callback
 * @param waitTime
 */
export const useInterval = (
  callback: (args?: any) => unknown,
  waitTime = 1000
) => {
  useEffect(() => {
    const interval = setInterval(callback, waitTime)
    return () => clearInterval(interval)
  }, [])
}
