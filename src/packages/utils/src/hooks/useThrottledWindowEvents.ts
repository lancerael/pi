import throttle from 'lodash.throttle'
import { useEffect } from 'react'

export type CallbackFunction = (...args: any[]) => unknown

/**
 * A React hook that binds a callback to a range of window events
 *
 * @param callback the function that is called on the event
 * @param events an array of events to bind - by default only binds resize
 * @param doInit fire the callback on initialisation
 * @param timeout an optional throttle value that defaults to 150ms
 */
export const useThrottledWindowEvents = (
  callback: CallbackFunction,
  events: string[] = ['resize'],
  doInit: boolean = true,
  timeout = 150
) => {
  useEffect(() => {
    doInit && callback()
    const throttledCallback: CallbackFunction = throttle(callback, timeout)
    events.forEach((event) => addEventListener(event, throttledCallback))
    return () =>
      events.forEach((event) => removeEventListener(event, throttledCallback))
  }, [])
}
