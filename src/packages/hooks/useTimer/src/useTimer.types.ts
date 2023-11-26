export type TimerType = 'Timeout' | 'Interval'

export interface TimerOpts {
  /**
   * Is this a Timeout or an Interval?
   */
  type?: TimerType
  /**
   * How long to wait between callbacks
   */
  waitTime?: number
  /**
   * Any dependencies that will trigger a reset of the timer
   */
  deps?: unknown[]
}
