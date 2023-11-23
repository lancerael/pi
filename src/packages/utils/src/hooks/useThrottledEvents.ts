import { throttle } from '../'
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
export const useThrottledEvents = (
  callback: CallbackFunction,
  events: string[] = ['resize'],
  doInit: boolean = true,
  target: Window | HTMLElement | null = typeof window !== 'undefined'
    ? window
    : null,
  timeout = 150,
  args?: EventListenerOptions
) => {
  useEffect(() => {
    if (!target) return
    doInit && callback()
    const throttledCallback: CallbackFunction = throttle(callback, timeout)
    events.forEach((event) =>
      target.addEventListener(event, throttledCallback, args)
    )
    return () =>
      events.forEach((event) =>
        target.removeEventListener(event, throttledCallback)
      )
  }, [target])
}
