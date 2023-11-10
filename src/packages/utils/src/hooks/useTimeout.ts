import { useEffect } from 'react'

/**
 * Custom React hook that invokes a callback function after a specified delay.
 * The timeout is cleared when the component that uses this hook unmounts, or the delay changes.
 *
 * @param {() => unknown} callback - The callback function to be executed after the delay.
 * @param {number} [waitTime=1000] - The delay time in milliseconds before the callback is executed. Defaults to 1000ms.
 */
export const useTimeout = (callback: () => unknown, waitTime = 1000) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(), waitTime)
    return () => clearTimeout(timeout)
  }, [])
}
