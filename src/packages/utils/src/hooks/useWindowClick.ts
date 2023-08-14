import {
  CallbackFunction,
  useThrottledWindowEvents,
} from './useThrottledWindowEvents'

/**
 * Bind a callback to the window that can be triggeed with an escape key
 * @param callback
 * @param containerRef
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
  useThrottledWindowEvents(onWindowClick as CallbackFunction, ['click'], false)
  useThrottledWindowEvents(
    onEscapePress as CallbackFunction,
    ['keydown'],
    false
  )
}
