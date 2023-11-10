import {
  randomNumber,
  randomString,
  scatter,
  makeStar,
  makeStars,
  moveStar,
  filterStars,
  getStarStyle,
} from './Stellar.helpers'
import { Coords, Star, StarStyle } from './Stellar.types'

describe('Stellar Helpers', () => {
  describe('randomNumber', () => {
    test('should return a number within the given range', () => {
      const min = 1
      const max = 10
      const randomNum = randomNumber(min, max)
      expect(randomNum).toBeGreaterThanOrEqual(min)
      expect(randomNum).toBeLessThanOrEqual(max)
    })
  })

  describe('randomString', () => {
    test('should return a string of the specified length', () => {
      const length = 10
      const randomStr = randomString(length)
      expect(randomStr).toHaveLength(length)
    })

    test('should consist of printable ASCII characters', () => {
      const length = 100
      const randomStr = randomString(length)
      const isPrintableASCII = randomStr.split('').every((char) => {
        const code = char.charCodeAt(0)
        return code > 31 && code < 127
      })
      expect(isPrintableASCII).toBe(true)
    })
  })

  describe('scatter', () => {
    test('should scatter the coordinates within a range of 10 units', () => {
      const coords: Coords = [100, 100]
      const scattered = scatter(coords)
      expect(scattered[0]).toBeGreaterThanOrEqual(coords[0] - 5)
      expect(scattered[0]).toBeLessThanOrEqual(coords[0] + 5)
      expect(scattered[1]).toBeGreaterThanOrEqual(coords[1] - 5)
      expect(scattered[1]).toBeLessThanOrEqual(coords[1] + 5)
    })
  })

  describe('makeStar', () => {
    const dimensions: Coords = [500, 500]
    let star: Star

    beforeAll(() => {
      star = makeStar(0, dimensions)
    })

    test('should return a star object with expected properties', () => {
      expect(star).toHaveProperty('id')
      expect(star).toHaveProperty('coords')
      expect(star).toHaveProperty('age')
      expect(star).toHaveProperty('color')
    })

    test('should create a star with valid coordinates within the dimensions', () => {
      expect(star.coords[0]).toBeGreaterThanOrEqual(0)
      expect(star.coords[0]).toBeLessThanOrEqual(dimensions[0])
      expect(star.coords[1]).toBeGreaterThanOrEqual(0)
      expect(star.coords[1]).toBeLessThanOrEqual(dimensions[1])
    })

    test('should create a star with an initial age of 0', () => {
      expect(star.age).toEqual(0)
    })
  })

  describe('makeStars', () => {
    const dimensions: Coords = [800, 600]
    const numStars = 10
    let stars: Star[]

    beforeAll(() => {
      stars = makeStars(0, numStars, dimensions)
    })

    test('should create an array of stars with the specified length', () => {
      expect(stars).toHaveLength(numStars)
    })

    test('every star in the array has the correct properties', () => {
      stars.forEach((star) => {
        expect(star).toHaveProperty('id')
        expect(star).toHaveProperty('coords')
        expect(star).toHaveProperty('age')
        expect(star).toHaveProperty('color')
      })
    })
  })

  describe('moveStar', () => {
    const star: Star = {
      id: 'star123',
      coords: [400, 300],
      age: 1,
      color: 'rgba(255,255,255,0.8)',
    }
    const direction: Coords = [100, 100]
    let movedStar: Star

    beforeAll(() => {
      movedStar = moveStar(star, direction)
    })

    test('should move the star in the direction specified', () => {
      expect(movedStar.coords[0]).not.toEqual(star.coords[0])
      expect(movedStar.coords[1]).not.toEqual(star.coords[1])
    })

    test('should increment the age of the star', () => {
      expect(movedStar.age).toBe(star.age + 1)
    })
  })

  describe('filterStars', () => {
    const age = 5
    const position: Coords = [50, 50]
    const dimensions: Coords = [800, 600]

    test('should return true for a star within bounds and under max age', () => {
      expect(filterStars(age, position, dimensions)).toBe(true)
    })

    test('should return false for a star that exceeds the age limit', () => {
      const maxAge = 200
      expect(filterStars(maxAge, position, dimensions)).toBe(false)
    })

    test('should return false for a star outside the boundary', () => {
      const outOfBoundsPosition: Coords = [1000, 500]
      expect(filterStars(age, outOfBoundsPosition, dimensions)).toBe(false)
    })
  })

  describe('getStarStyle', () => {
    const star: Star = {
      id: 'star123',
      coords: [400, 300],
      age: 1,
      color: 'rgba(255,255,255,0.8)',
    }
    let starStyle: StarStyle

    beforeAll(() => {
      starStyle = getStarStyle(star)
    })

    test('should return an object containing the id and style properties', () => {
      expect(starStyle).toHaveProperty('id')
      expect(starStyle).toHaveProperty('style')
    })

    test('style should contain a transform property with translate and scale values', () => {
      expect(starStyle.style).toHaveProperty('transform')
      expect(starStyle.style.transform).toMatch(/translate/)
      expect(starStyle.style.transform).toMatch(/scale/)
    })

    test('style should contain opacity based on age', () => {
      expect(starStyle.style).toHaveProperty('opacity')
      expect(starStyle.style.opacity).toBe(0.96)
    })
  })
})
