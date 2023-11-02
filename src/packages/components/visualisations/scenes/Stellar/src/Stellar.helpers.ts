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
  return {
    id: randomString(8),
    coords: [left, top],
    age: 0,
    color: `rgba(${getRGB()}, ${getRGB()}, ${getRGB()}, 1)`,
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
    coords: [left + (xDist * age) / radius, top + (yDist * age) / radius],
    age: age + 1,
    ...star,
  }
}
