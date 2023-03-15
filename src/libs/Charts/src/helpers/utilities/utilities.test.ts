import {
  truncateString,
  randomNumber,
  newArray,
  truthy,
  throttle,
  createNode,
  compress,
  sanitise,
  //@ts-ignore
} from '../../../vanilla/index.js'
import jsdom from 'jsdom'
import fs from 'fs'

const index = fs.readFileSync('index.html', 'utf-8')
const { JSDOM } = jsdom
const dom = new JSDOM(index)
global.document = dom.window.document

describe('truncateString', () => {
  it('should truncate a string', () => {
    expect(truncateString('qwertyuiop', 6)).toBe('qwerty[...]')
  })

  it('should not try to truncate a string if it is shorter than the maxLength', () => {
    expect(truncateString('qwertyuiop', 10)).toBe('qwertyuiop')
  })
})

describe('randomNumber', () => {
  it('should generate a random integer from default values', () => {
    const random = randomNumber()
    expect(typeof random).toBe('number')
    expect(random).toBeGreaterThanOrEqual(0)
    expect(random).toBeLessThanOrEqual(10000)
  })

  it('should generate a random integer from provided values', () => {
    const random = randomNumber(3, 6)
    expect(typeof random).toBe('number')
    expect(random).toBeGreaterThanOrEqual(3)
    expect(random).toBeLessThanOrEqual(6)
  })

  it('should omit specified number from the randomly generated integer ', () => {
    // Randomly generated 10x a number between 2-3 while omitting 3
    newArray(10, () => randomNumber(2, 3, 3)).forEach((random: any) => {
      expect(random).toBe(2)
    })
  })
})

describe('newArray', () => {
  it('should generate an array', () => {
    const generatedArray = newArray(3, () => 5)
    expect(Array.isArray(generatedArray)).toBe(true)
    expect(generatedArray.length).toBe(3)
    expect(generatedArray[0]).toBe(5)
    expect(generatedArray[1]).toBe(5)
    expect(generatedArray[2]).toBe(5)
  })
})

describe('truthy', () => {
  it('should handle strings', () => {
    expect(truthy('something' as any)).toBe(true)
    expect(truthy('' as any)).toBe(false)
  })
  it('should handle numbers', () => {
    expect(truthy(1 as any)).toBe(true)
    expect(truthy(0 as any)).toBe(false)
  })
  it('should handle boolean', () => {
    expect(truthy(true as any)).toBe(true)
    expect(truthy(false as any)).toBe(false)
  })
  it('should handle arrays', () => {
    expect(truthy([] as any)).toBe(true)
    expect(truthy([false] as any)).toBe(true)
  })
  it('should handle null', () => {
    expect(truthy(null as any)).toBe(false)
  })
  it('should handle undefined', () => {
    expect(truthy(undefined)).toBe(false)
    expect(truthy()).toBe(false)
  })
})

describe('throttle', () => {
  it('should throttle the function', () => {
    const dummy = {
      myFunction: () => true,
    }
    const throttledFunction = throttle(dummy.myFunction)
    spyOn(dummy, 'myFunction')
    const first = throttledFunction()
    const second = throttledFunction()
    const third = throttledFunction()
    expect(first).toBe(true)
    expect(second).not.toBe(true)
    expect(third).not.toBe(true)
  })
})

describe('createNode', () => {
  it('should create a new dom node', () => {
    expect(createNode('div').nodeName).toBe('DIV')
  })
  it('should create a new dom node with a class', () => {
    expect(createNode('div', 'my-node').getAttribute('class')).toBe('my-node')
  })
  it('should create append new dom node to parent', () => {
    const parent = document.createElement('div')
    createNode('div', 'child', parent)
    expect(parent.querySelectorAll('.child').length).toBe(1)
  })
})

describe('string operations', () => {
  it('should compress a string', () => {
    expect(
      compress(`a string with
    newlines`)
    ).toBe('astringwithnewlines')
  })
  it('should sanitise a string', () => {
    expect(sanitise('A d!i$r%t&y string')).toBe('A dirty string')
  })
})
