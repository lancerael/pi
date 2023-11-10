import { useEffect } from 'react'

/**
 * Custom React hook that sets up an interval to execute the provided callback function at specified time intervals.
 * The interval is cleared when the component that uses this hook unmounts.
 *
 * @param {() => unknown} callback - The callback function to execute at each interval.
 * @param {number} [waitTime=1000] - The interval time in milliseconds between each execution of the callback. Defaults to 1000ms.
 */
export const useInterval = (callback: () => unknown, waitTime = 1000) => {
  useEffect(() => {
    const interval = setInterval(callback, waitTime)
    return () => clearInterval(interval)
  }, [])
}
