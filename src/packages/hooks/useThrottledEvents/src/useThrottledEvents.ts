import { throttle } from '@pi-lib/utils'
import { DependencyList, useEffect } from 'react'
import {
  CallbackFunction,
  UseThrottledEventsOpts,
} from './useThrottledEvents.types'
import useHashComparison from '@pi-lib/use-hash-comparison'

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
  }: UseThrottledEventsOpts = {},
  deps: DependencyList = []
) => {
  const optsHash = useHashComparison(events, doInit, timeout, args)

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
  }, [callback, target, optsHash, ...deps])

  useEffect(() => {
    doInit && callback()
  }, [])
}
