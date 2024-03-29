import { randomNumber, randomString } from '@pi-lib/utils'
import { FILTER_PADDING, MAX_AGE } from './Stellar.constants'
import { Coords, SpawnAge, Star } from './Stellar.types'

/**
 * Displaces a coordinate by a small random amount to simulate scattering.
 * @param {Coords} coords - The original coordinates to be scattered.
 * @returns {Coords} The scattered coordinates.
 */
export const scatter = ([x, y]: Coords): Coords => {
  return [x + randomNumber(0, 10) - 5, y + randomNumber(0, 10) - 5]
}

/**
 * Generates a star object with random properties within a given space.
 * @param {Coords} dimensions - The width and height defining the space for the star.
 * @param {Coords} [target=[0, 0]] - Optional target coordinates where the star will be placed.
 * @returns {Star} A new star object.
 */
export const makeStar = (
  spawnAge: SpawnAge,
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
    age: spawnAge > -1 ? spawnAge : randomNumber(1, MAX_AGE),
    color: `rgba(${getColor()}, ${randomNumber(5, 10) / 10})`,
  }
}

/**
 * Creates an array of star objects.
 * @param {number} length - The number of stars to generate.
 * @param {Coords} dimensions - The dimensions in which stars will be placed.
 * @param {Coords} [target] - Optional target coordinates for placing stars.
 * @returns {Star[]} An array of star objects.
 */
export const makeStars = (
  spawnAge: SpawnAge,
  length: number,
  dimensions: Coords,
  target?: Coords
): Star[] => {
  return Array.from({ length }, () => makeStar(spawnAge, dimensions, target))
}

/**
 * Updates the position of a star based on its age and distance from a point.
 * @param {Star} star - The star to be moved.
 * @param {Coords} direction - The x and y direction in which to move the star.
 * @returns {Star} The moved star with updated coordinates and age.
 */
export const moveStar = (
  { coords: [left, top], age, ...star }: Star,
  [x, y]: Coords,
  travelSpeed: number,
  offset: number = 0
): Star => {
  const xDist = left - x
  const yDist = top - y
  const radius = Math.sqrt(xDist * xDist + yDist * yDist)
  const multiplier = (age + age * age) / 36
  return {
    coords: [
      left + (xDist * multiplier * travelSpeed) / radius,
      top + (yDist * multiplier * travelSpeed) / radius - offset * age,
    ],
    age: age + travelSpeed,
    ...star,
  }
}

/**
 * Determines whether a star should be filtered out based on its age and position.
 * @param {number} age - The age of the star.
 * @param {Coords} position - The current position of the star.
 * @param {Coords} dimensions - The width and height of the space.
 * @returns {boolean} `true` if the star meets the criteria; otherwise, `false`.
 */
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

/**
 * Computes the CSS style properties for a star.
 * @param {Star} star - The star from which to derive the style.
 * @returns {Object} An object containing the `id` and `style` properties for the star.
 */
export const getStarStyle = (
  { id, coords: [left, top], age, color }: Star,
  dimmer = 0
) => {
  const scale = (age + age * (age / 15)) / 50
  const opacity = age >= 1 ? 1 - age / 40 - dimmer : 0
  return {
    id,
    style: {
      transform: `translate(${left}px, ${top}px) scale(${scale})`,
      background: color,
      boxShadow: `0px 0px 10px 1px ${color}`,
      opacity,
    },
  }
}
