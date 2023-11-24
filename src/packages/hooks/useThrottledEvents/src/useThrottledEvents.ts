import { CallbackFunction, throttle } from '@pi-lib/utils'
import { useEffect } from 'react'
import { UseThrottledEventsOpts } from './useThrottledEvents.types'

/**
 * A React hook that binds a callback to a range of throttled events and cleans itself up
 *
 * @param callback {CallbackFunction} the function that is called on the event
 * @param options {UseThrottledEventsProps}
 */
export const useThrottledEvents = (
  callback: CallbackFunction,
  {
    events = ['resize'],
    doInit = true,
    target = typeof window !== 'undefined' ? window : null,
    timeout = 150,
    args,
    deps = [],
  }: UseThrottledEventsOpts = {}
) => {
  useEffect(() => {
    if (!target) return

    const throttledCallback = throttle(callback, timeout)

    events.forEach((event) =>
      target.addEventListener(event, throttledCallback, args)
    )

    return () =>
      events.forEach((event) =>
        target.removeEventListener(event, throttledCallback)
      )
  }, [target, ...deps])

  useEffect(() => {
    doInit && callback()
  }, [])
}
