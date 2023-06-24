import { useEffect } from 'react'

export const useTimeout = (callback: () => unknown, waitTime = 1000) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(), waitTime)
    return () => clearInterval(timeout)
  }, [])
}
