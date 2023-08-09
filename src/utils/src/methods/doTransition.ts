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
 * @param value the starting value
 * @param target the target value
 * @param callback the method to call with each intermediate number
 * @param speed the speed to transition (number of incements)
 * @param interval the wait time between each increment
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
    if (Math.abs(distance) > Math.abs(speed)) {
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
