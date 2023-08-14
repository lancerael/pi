import { useEffect } from 'react'

/**
 * A React hook used to create an timeout that cleans itself up
 * @param callback
 * @param waitTime
 */
export const useTimeout = (callback: () => unknown, waitTime = 1000) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(), waitTime)
    return () => clearTimeout(timeout)
  }, [])
}
