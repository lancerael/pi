import {
  colorFilter,
  random256,
  randomColor,
  randomPalette,
  darkerColor,
  addColorsToConfig,
  randomData,
  //@ts-ignore
} from '../../../js/index.js'
import { RGBColor } from 'd3-color'

const verifyColor = (newColor: RGBColor): void => {
  expect(newColor.r).toBeGreaterThanOrEqual(0)
  expect(newColor.r).toBeLessThanOrEqual(255)
  expect(newColor.g).toBeGreaterThanOrEqual(0)
  expect(newColor.g).toBeLessThanOrEqual(255)
  expect(newColor.b).toBeGreaterThanOrEqual(0)
  expect(newColor.b).toBeLessThanOrEqual(255)
  expect(newColor.opacity).toEqual(1)
}

describe('colorFilter', () => {
  it('should filter white against default values', () => {
    expect(colorFilter([255, 255, 255])).toBe(false)
  })
  it('should allow black against default values', () => {
    expect(colorFilter([0, 0, 0])).toBe(true)
  })
  it('should allow white against a dark background', () => {
    expect(colorFilter([255, 255, 255], 'dark')).toBe(true)
  })
  it('should filter black against a dark background', () => {
    expect(colorFilter([0, 0, 0], 'dark')).toBe(false)
  })
})

describe('random256', () => {
  it('should generate a number between 0 and 255', () => {
    const newNumber = random256()
    expect(newNumber).toBeGreaterThanOrEqual(0)
    expect(newNumber).toBeLessThanOrEqual(255)
  })
})

describe('randomColor', () => {
  it('should generate a color', () => {
    const newColor = randomColor()
    verifyColor(newColor as any)
  })
})

describe('randomPalette', () => {
  it('should generate a palette', () => {
    const newPalette = randomPalette()
    expect(newPalette.length).toBe(10)
    newPalette.forEach(verifyColor)
  })
})

describe('darkerColor', () => {
  it('should darken a color', () => {
    const newColor = randomColor('dark')
    const darkerNewColor = darkerColor(newColor)
    verifyColor(darkerNewColor)
    expect(darkerNewColor.r).toBeLessThan(newColor.r)
    expect(darkerNewColor.g).toBeLessThan(newColor.g)
    expect(darkerNewColor.b).toBeLessThan(newColor.b)
  })
})

describe('addColorsToConfig', () => {
  it('should add new colors to an empty config', () => {
    const { values } = randomData(1, 1).config
    expect(values[0].color).toBeUndefined()
    expect(values[0].rgbColor).toBeUndefined()
    const newValues = addColorsToConfig(values)
    expect(newValues[0].color).toMatch(/#[a-z0-9]{6}/)
    verifyColor(newValues[0].rgbColor as RGBColor)
  })
})
