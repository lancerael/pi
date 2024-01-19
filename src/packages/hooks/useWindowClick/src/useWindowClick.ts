import useLimitedEvents, { CallbackFunction } from '@pi-lib/use-limited-events'
import { DependencyList } from 'react'

/**
 * Custom React hook that registers a callback function to be called when a click event occurs outside a specified container element,
 * or when the Escape key is pressed. This hook utilizes throttled events to optimize performance.
 *
 * @param {CallbackFunction} callback - The function to call on a click outside the container or on Escape key press.
 * @param {React.RefObject<HTMLElement>} [containerRef] - Optional ref object for the container element. If provided, the callback will only be invoked if the click is outside this element.
 */
export const useWindowClick = (
  callback: CallbackFunction,
  containerRef?: React.RefObject<HTMLElement>,
  deps: DependencyList = []
) => {
  /**
   * Attach the callback to the window click, but not when clicking target
   */
  useLimitedEvents(
    (e: MouseEvent) => {
      const isContainerVisible =
        containerRef?.current &&
        ['', '1'].includes(
          window.getComputedStyle(containerRef.current).opacity
        )
      if (
        !!e.target &&
        isContainerVisible &&
        !containerRef?.current?.contains(e.target as Node)
      ) {
        callback()
      }
    },
    {
      events: ['click'],
      args: { capture: true },
    },
    deps
  )

  /**
   * Attach an escape button handler to fire the callback
   */
  useLimitedEvents(
    ({ key }: KeyboardEvent) => {
      if (key === 'Escape') callback()
    },
    {
      events: ['keydown'],
    }
  ),
    deps
}
