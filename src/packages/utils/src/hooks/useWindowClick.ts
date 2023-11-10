import { CallbackFunction, useThrottledEvents } from './useThrottledEvents'

/**
 * Custom React hook that registers a callback function to be called when a click event occurs outside a specified container element,
 * or when the Escape key is pressed. This hook utilizes throttled events to optimize performance.
 *
 * @param {CallbackFunction} callback - The function to call on a click outside the container or on Escape key press.
 * @param {React.RefObject<HTMLElement>} [containerRef] - Optional ref object for the container element. If provided, the callback will only be invoked if the click is outside this element.
 */
export const useWindowClick = (
  callback: CallbackFunction,
  containerRef?: React.RefObject<HTMLElement>
) => {
  const onWindowClick = (e: MouseEvent) => {
    if (!!e.target && !containerRef?.current?.contains(e.target as Node)) {
      callback()
    }
  }
  const onEscapePress = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') callback()
  }
  useThrottledEvents(onWindowClick as CallbackFunction, ['click'], false)
  useThrottledEvents(onEscapePress as CallbackFunction, ['keydown'], false)
}
