import { throttle, debounce } from '@pi-lib/utils'
import { DependencyList, useEffect } from 'react'
import {
  CallbackFunction,
  UseThrottledEventsOpts,
} from './useLimitedEvents.types'
import useHashComparison from '@pi-lib/use-hash-comparison'

const limiters = { throttle, debounce }

/**
 * A React hook that binds a callback to a range of throttled events and cleans itself up
 *
 * @param callback {CallbackFunction} the function that is called on the event
 * @param options {UseThrottledEventsProps}
 */
export const useLimitedEvents = (
  callback: CallbackFunction,
  {
    events = ['resize'],
    doInit = false,
    target = typeof window !== 'undefined' ? window : null,
    timeout = 150,
    type = 'throttle',
    isActive = true,
    args,
  }: UseThrottledEventsOpts = {},
  deps: DependencyList = []
) => {
  const optsHash = useHashComparison(
    events,
    doInit,
    timeout,
    type,
    isActive,
    args
  )

  useEffect(() => {
    if (!target) return

    const throttledCallback = limiters[type](callback, timeout)

    if (isActive) {
      events.forEach((event) =>
        target.addEventListener(event, throttledCallback, args)
      )
    }

    return () =>
      events.forEach((event) =>
        target.removeEventListener(event, throttledCallback)
      )
  }, [callback.toString(), target, optsHash, ...deps])

  useEffect(() => {
    doInit && callback()
  }, [])
}

export default useLimitedEvents
