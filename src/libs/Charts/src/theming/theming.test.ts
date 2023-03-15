import {
  addStyleToDom,
  addTheme,
  getTheme,
  publishTheme,
  css,
  compress,
  //@ts-ignore
} from '../../vanilla/index.js'
import jsdom from 'jsdom'
import fs from 'fs'

const index = fs.readFileSync('index.html', 'utf-8')
const { JSDOM } = jsdom
const dom = new JSDOM(index)
global.document = dom.window.document

describe('addStyleToDom', () => {
  it('should add a style to the DOM', () => {
    addStyleToDom('new', 'body { color: red; }')
    const style = document.querySelectorAll('[data-selector=new]')[0]
    expect(style.innerHTML).toContain('red')
  })
})

describe('addTheme', () => {
  it('should add a new theme to the pool and then retrieve it', () => {
    addTheme('new', {
      text: 'green',
      background: 'blue',
    })
    expect(getTheme('new').text).toBe('green')
  })
})

describe('publishTheme', () => {
  it('should publish the chosen theme', () => {
    publishTheme('dark')
    const style = document.querySelectorAll(
      '[data-selector="pic-variables"]'
    )[0]
    expect(style.innerHTML).toContain('#000E1A')
  })
})

describe('css', () => {
  it('should parse the template', () => {
    const color = 'red'
    const style = css`
      h1 {
        color: ${color};
      }
    `
    expect(compress(style)).toBe('h1{color:red;}')
  })
})
