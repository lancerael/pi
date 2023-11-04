const timeouts: { [key: string]: NodeJS.Timeout } = {}

type Value = number | number[]

export interface TransitionProps {
  value: Value
  target: Value
  callback?: (newValue: Value) => void
  speed?: number
  interval?: number
  intervalId?: string
}

/**
 * Used to transition a value with a callback
 * @param {Object} props - The properties object
 * @param {number} props.value - The starting value (optionally an array)
 * @param {number} props.target - The target value (optionally an array)
 * @param {Function} props.callback - The method to call with each intermediate number
 * @param {number} [props.speed=10] - The speed to transition (number of increments)
 * @param {number} [props.interval=15] - The wait time between each increment
 * @param {string} [props.intervalId='default'] - The id for the interval
 * @returns {Function} A function that, when called, will clear the timeout
 */
export const doTransition = ({
  value,
  target,
  callback,
  speed = 10,
  interval = 15,
  intervalId = 'default',
}: TransitionProps): (() => void) => {
  const values = Array.isArray(value) ? value : [value]
  const targets = Array.isArray(target) ? target : [target]
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
    callback?.(newValues.length > 1 ? newValues : newValues[0])
    timeouts[intervalId] = setTimeout(() => {
      doTransition({
        value: newValues,
        target,
        callback,
        speed,
        interval,
        intervalId,
      })
    }, interval)
  } else {
    callback?.(target)
  }

  return clear
}
