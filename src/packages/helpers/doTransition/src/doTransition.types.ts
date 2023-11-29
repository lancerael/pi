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
   * The wait time between each increment
   */
  isGradual?: boolean
  /**
   * The wait time between each increment
   */
  interval?: number
  /**
   * The id for the interval
   */
  intervalId?: string
}
