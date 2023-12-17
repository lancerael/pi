import { TransitionProps } from './doTransition.types'

const timeouts: Record<string, NodeJS.Timeout> = {}

/**
 * Used to transition a value with a callback
 * @returns {Function} A function that, when called, will clear the timeout
 */
export const doTransition = ({
  values,
  targets,
  callback,
  endCallback,
  increments = 10,
  isGradual = true,
  sensitivity = 1,
  interval = 15,
  intervalId = 'default',
}: TransitionProps): (() => void) => {
  if (values.length !== targets.length)
    throw new Error('Transition values length does not match targets length.')

  const clear = () => clearTimeout(timeouts[intervalId])
  clear()
  let isFinished = true // unless otherwise proven

  const newValues = values.map((oldValue, i) => {
    const distance = targets[i] - oldValue
    if (Math.abs(distance) < sensitivity) return targets[i]
    isFinished = false
    return oldValue + distance / increments
  })

  if (!isFinished) {
    callback(newValues)
    timeouts[intervalId] = setTimeout(() => {
      doTransition({
        values: newValues,
        targets,
        callback,
        endCallback,
        increments: increments - (isGradual ? 0 : 1),
        isGradual,
        sensitivity,
        interval,
        intervalId,
      })
    }, interval)
  } else {
    callback(targets)
    endCallback?.()
  }

  return clear
}

export const flushTransition = (intervalId: string = 'default') => {
  clearTimeout(timeouts[intervalId])
}

export default doTransition
