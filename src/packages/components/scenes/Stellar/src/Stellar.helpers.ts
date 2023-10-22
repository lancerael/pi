import { Coords, Star, StarPos } from './Stellar.types'

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
  return {
    radius: getDistance([left, top], [width / 2, height / 2]),
    id: randomString(8),
    coords: [left, top],
    // age: 1,
  }
}

export const makeStars = (starCount: number, dimensions: Coords): Star[] => {
  return Array.from({ length: starCount }, () => makeStar(dimensions))
}

export const getDistance = ([x1, y1]: Coords, [x2, y2]: Coords) => {
  const xDist = x1 - x2
  const yDist = y1 - y2
  return +Math.sqrt(xDist * xDist + yDist * yDist).toFixed(2)
}

export const moveStar = (
  [left, top]: Coords,
  [width, height]: Coords
): StarPos => {
  const modifier = 10
  return {
    radius: getDistance([left, top], [width / 2, height / 2]),
    coords: [
      left + (left < width / 2 ? -modifier : modifier),
      top + (top < height / 2 ? -modifier : modifier),
    ],
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
