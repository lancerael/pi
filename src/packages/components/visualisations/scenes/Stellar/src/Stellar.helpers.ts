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
  const getRGB = () => 100 + randomNumber(0, 155)
  const getColor = () =>
    !randomNumber(0, 5)
      ? `${getRGB()}, ${getRGB()}, ${getRGB()}`
      : '200, 200, 200'
  return {
    id: randomString(8),
    coords: [left, top],
    age: 0,
    color: `rgba(${getColor()}, 1)`,
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
  return {
    coords: [
      left + (xDist * (age / 3)) / radius,
      top + (yDist * (age / 3)) / radius,
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
  const MAX_AGE = 45
  const PADDING = 50
  return (
    age < MAX_AGE &&
    left > 0 - PADDING &&
    left < width + PADDING &&
    top > 0 - PADDING &&
    top < height + PADDING
  )
}

export const getStarStyle = ({ id, coords: [left, top], age, color }: Star) => {
  return {
    id,
    style: {
      top: `${top}px`,
      left: `${left}px`,
      background: color,
      boxShadow: `0px 0px 10px 1px ${color}`,
      width: `${age / 5}px`,
      height: `${age / 5}px`,
      opacity: age >= 1 ? 1 - age / 40 : 0,
    },
  }
}
