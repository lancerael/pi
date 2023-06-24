import { useEffect } from 'react'

export const useInterval = (callback: () => unknown, waitTime = 1000) => {
  useEffect(() => {
    const interval = setInterval(() => callback(), waitTime)
    return () => clearInterval(interval)
  }, [])
}
