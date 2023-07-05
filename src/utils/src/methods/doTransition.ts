let transitionInterval: NodeJS.Timer

/**
 * Used to transition a value with a callback
 * @param value the starting value
 * @param target the target value
 * @param callback the method to call with each intermediate number
 * @param speed the speed to transition (number of incements)
 * @param interval the wait time between each increment
 */
export const doTransition = (
  value: number,
  target: number,
  callback: (newNumber: number) => void,
  speed: number = 10,
  interval: number = 10
): void => {
  clearInterval(transitionInterval)
  const increment = +((target - value) / speed).toFixed(2)
  let newValue = value
  transitionInterval = setInterval(() => {
    newValue += increment
    callback(+newValue.toFixed(2))
    if (+newValue.toFixed(2) === +target.toFixed(2))
      clearInterval(transitionInterval)
  }, interval)
}
