import { useEffect } from 'react'
import { GLOBAL_OBJ } from '@pi-lib/constants'
import { TimerOpts } from './useTimer.types'

/**
 * Custom React hook that creates a setTimout or setInterval, depeding on the type
 * The timer is cleared when the component that uses this hook unmounts, or the delay changes.
 *
 * @param {() => void} callback - The callback function to be executed after the delay.
 * @param {TimerOpts} type - The options to be passed to the hook
 */
export const useTimer = (
  callback: () => void,
  {
    type = 'Timeout',
    waitTime = 1000,
    deps = [callback, type, waitTime],
  }: TimerOpts = {}
) => {
  if (!['Timeout', 'Interval'].includes(type)) {
    throw new Error('Invalid timer type. Use Interval or Timeout.')
  }
  useEffect(() => {
    const timer = GLOBAL_OBJ[`set${type}`](() => callback(), waitTime)
    return () => GLOBAL_OBJ[`clear${type}`](timer)
  }, deps)
}
