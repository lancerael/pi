import throttle from 'lodash.throttle'
import { useEffect } from 'react'

export type CallbackFunction = (...args: unknown[]) => unknown

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

    // Used to bind and remove the events
    const updateEvents = (
      action: (event: string, callback: CallbackFunction) => void
    ) => events.forEach((event) => action(event, throttledCallback))

    updateEvents(addEventListener)
    return () => updateEvents(removeEventListener)
  }, [])
}
