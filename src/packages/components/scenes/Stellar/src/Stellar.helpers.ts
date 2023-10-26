import { Coords, Star } from './Stellar.types'

export const randomNumber = (min: number, max: number): number => {
  const timestamp = `${Date.now()}`
  const lastCharacter = timestamp.split('').reverse()[0]
  const range = max - min + 1
  return min + Math.floor(Math.random() * range) + parseInt(lastCharacter, 10)
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
  [x, y]: Coords = [0, 0]
): Star => {
  const left = x ? x : randomNumber(0, width)
  const top = y ? y : randomNumber(0, height)
  const getRGB = () => 150 + randomNumber(0, 105)
  return {
    id: randomString(8),
    coords: [left, top],
    age: 1,
    color: `rgba(${getRGB()}, ${getRGB()}, ${getRGB()}, .5)`,
  }
}

export const makeStars = (starCount: number, dimensions: Coords): Star[] => {
  return Array.from({ length: starCount }, () => makeStar(dimensions))
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
