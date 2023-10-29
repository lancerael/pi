const timeouts: { [key: string]: NodeJS.Timeout } = {}

export interface TransitionProps {
  value: number
  target: number
  callback: (newNumber: number) => void
  speed?: number
  interval?: number
  intervalId?: string
}

/**
 * Used to transition a value with a callback
 * @param {Object} props - The properties object
 * @param {number} props.value - The starting value
 * @param {number} props.target - The target value
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
  const clear = () => clearTimeout(timeouts[intervalId])
  clear()
  let distance = +(target - value).toFixed(2)
  const newValue = +(value + +(distance / Math.abs(speed))).toFixed(2)
  timeouts[intervalId] = setTimeout(() => {
    console.log(distance)
    if (Math.abs(distance) > 5) {
      callback(newValue)
      doTransition({
        value: newValue,
        target: +target.toFixed(2),
        callback,
        speed,
        interval,
        intervalId,
      })
    } else {
      callback(+target.toFixed(2))
    }
  }, interval)
  return clear
}
