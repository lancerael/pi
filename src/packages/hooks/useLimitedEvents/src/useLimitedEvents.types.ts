/**
 * The callback function to be executed when the event is triggered.
 * This function is required and should contain the logic to be executed on the event.
 */
export type CallbackFunction = (...args: any[]) => unknown

/**
 * Type definition for properties used by useLimitedEvents React hook.
 */
export interface UseThrottledEventsOpts {
  /**
   * An array of string names for the events to which the callback will be bound.
   * Defaults to ['resize'] if not specified. Common examples include 'click', 'scroll', etc.
   */
  events?: string[]

  /**
   * Flag to determine if the callback should be fired during the initialisation of the hook.
   * If true, the callback is executed once upon mounting. Defaults to true.
   */
  doInit?: boolean

  /**
   * The target object on which to listen for the specified events.
   * Typically this would be the 'window' object, but can be any DOM element.
   */
  target?: EventTarget | null

  /**
   * The limiter timeout in milliseconds.
   * This is the minimum delay between successive invocations of the callback function.
   * Defaults to 150ms.
   */
  timeout?: number

  /**
   * The type of limiter - either throttle or debounce
   */
  type?: 'throttle' | 'debounce'

  /**
   * Set it to false to remove the listener
   */
  isActive?: boolean

  /**
   * Optional additional arguments to pass to the event listener.
   * This could be options such as passive or capture for event listeners.
   */
  args?: AddEventListenerOptions
}
