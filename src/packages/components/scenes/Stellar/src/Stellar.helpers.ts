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

export const makeStar = ([width, height]: Coords): Star => {
  const left = randomNumber(0, width)
  const top = randomNumber(0, height)
  const getRGB = () => 100 + randomNumber(0, 155)
  return {
    id: randomString(8),
    coords: [left, top],
    age: 0,
    color: `rgba(${getRGB()}, ${getRGB()}, ${getRGB()}, .5)`,
  }
}

export const makeStars = (starCount: number, dimensions: Coords): Star[] => {
  return Array.from({ length: starCount }, () => makeStar(dimensions))
}

export const moveStar = (
  { coords: [left, top], age, ...star }: Star,
  [width, height]: Coords
): Star => {
  const xDist = left - width / 2
  const yDist = top - height / 2
  const radius = Math.sqrt(xDist * xDist + yDist * yDist)
  return {
    coords: [left + (xDist * age) / radius, top + (yDist * age) / radius],
    age: age + 1,
    ...star,
  }
}

export const colorStar = (
  [left, top]: Coords,
  [width, height]: Coords
): string => {
  if (top < height / 2) {
    if (left < width / 2) {
      return 'green'
    } else {
      return 'red'
    }
  } else {
    if (left < width / 2) {
      return 'pink'
    } else {
      return 'yellow'
    }
  }
}
