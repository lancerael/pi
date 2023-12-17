export interface TransitionProps {
  /**
   * The starting values an array
   */
  values: number[]
  /**
   * The target values
   */
  targets: number[]
  /**
   * The method to call with each intermediate number
   */
  callback: (newValue: number[]) => void
  /**
   * The method to call when the transition is complete
   */
  endCallback?: () => void
  /**
   * Should the transition decelerate?
   */
  increments?: number
  /**
   * Whether to ease the transition rather than default linear
   */
  isGradual?: boolean
  /**
   * The sensitivity of the success (lower values for more delicate transitions < 1)
   */
  sensitivity?: number
  /**
   * The wait time between each increment
   */
  interval?: number
  /**
   * The id for the interval
   */
  intervalId?: string
}
