import { FILTER_PADDING, MAX_AGE } from './Stellar.constants'
import { Coords, Star } from './Stellar.types'

export const randomNumber = (min: number, max: number): number => {
  const range = max - min + 1
  return min + Math.floor(Math.random() * range)
}

export const randomString = (length: number): string => {
  return Array.from({ length }, () =>
    String.fromCharCode(Math.random() * 94 + 32)
  ).join('')
}

export const scatter = ([x, y]: Coords): Coords => {
  return [x + randomNumber(0, 10) - 5, y + randomNumber(0, 10) - 5]
}

export const makeStar = (
  [width, height]: Coords,
  target: Coords = [0, 0]
): Star => {
  const [x, y] = scatter(target)
  const left = target[0] ? x : randomNumber(0, width)
  const top = target[1] ? y : randomNumber(0, height)
  const getRGB = () => 150 + randomNumber(0, 105)
  const getColor = () =>
    !randomNumber(0, 5)
      ? `${getRGB()}, ${getRGB()}, ${getRGB()}`
      : '255, 255, 255'
  return {
    id: randomString(8),
    coords: [left, top],
    age: 0,
    color: `rgba(${getColor()}, ${randomNumber(5, 10) / 10})`,
  }
}

export const makeStars = (
  length: number,
  dimensions: Coords,
  target?: Coords
): Star[] => {
  return Array.from({ length }, () => makeStar(dimensions, target))
}

export const moveStar = (
  { coords: [left, top], age, ...star }: Star,
  [x, y]: Coords
): Star => {
  const xDist = left - x
  const yDist = top - y
  const radius = Math.sqrt(xDist * xDist + yDist * yDist)
  const multiplier = (age + age * age) / 5
  return {
    coords: [
      left + (xDist * multiplier) / radius,
      top + (yDist * multiplier) / radius,
    ],
    age: age + 1,
    ...star,
  }
}

export const filterStars = (
  age: number,
  [left, top]: Coords,
  [width, height]: Coords
) => {
  return (
    age < MAX_AGE &&
    left > 0 - FILTER_PADDING &&
    left < width + FILTER_PADDING &&
    top > 0 - FILTER_PADDING &&
    top < height + FILTER_PADDING
  )
}

export const getStarStyle = ({ id, coords: [left, top], age, color }: Star) => {
  const multiplier = (age + age * (age / 10)) / 5
  return {
    id,
    style: {
      top: `${top}px`,
      left: `${left}px`,
      background: color,
      boxShadow: `0px 0px 10px 1px ${color}`,
      width: `${multiplier}px`,
      height: `${multiplier}px`,
      opacity: age >= 1 ? 1 - age / 19 : 0,
    },
  }
}
