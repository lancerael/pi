const timeouts: { [key: string]: NodeJS.Timeout } = {}

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
   * The speed to transition (number of increments)
   */
  speed?: number
  /**
   * The wait time between each increment
   */
  interval?: number
  /**
   * The id for the interval
   */
  intervalId?: string
}

/**
 * Used to transition a value with a callback
 * @returns {Function} A function that, when called, will clear the timeout
 */
export const doTransition = ({
  values,
  targets,
  callback,
  speed = 10,
  interval = 15,
  intervalId = 'default',
}: TransitionProps): (() => void) => {
  if (values.length !== targets.length)
    throw new Error('Transition values do not match targets.')
  const clear = () => clearTimeout(timeouts[intervalId])
  clear()
  let isFinished = true

  const newValues = values.map((oldValue, i) => {
    const distance = targets[i] - oldValue
    if (Math.abs(distance) < 5) return targets[i]
    isFinished = false
    return oldValue + distance / Math.abs(speed)
  })

  if (!isFinished) {
    callback(newValues)
    timeouts[intervalId] = setTimeout(() => {
      doTransition({
        values: newValues,
        targets,
        callback,
        speed,
        interval,
        intervalId,
      })
    }, interval)
  } else {
    callback(targets)
  }

  return clear
}
