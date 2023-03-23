//@ts-ignore
import {
  Tooltip,
  dispatchEvent,
  //@ts-ignore
} from '../../../js/index.js'
import { JSDOM } from 'jsdom'
import { readFileSync } from 'fs'
import 'jasmine'

const index = readFileSync('index.html', 'utf-8')

const dom = new JSDOM(index)
global.document = dom.window.document

jasmine.clock().install()

const getFlatTooltip = (container: HTMLElement): any =>
  JSON.parse(JSON.stringify(new Tooltip(container)))

describe('Tooltip', () => {
  it('should accept DOM element to contain the tooltip', () => {
    const container = document.createElement('div')
    const tooltip = getFlatTooltip(container)
    expect(typeof tooltip.container).toBe('object')
  })

  it('should throw error for missing container', () => {
    expect(() => new Tooltip('nothing')).toThrow(
      new Error('The tooltip has no valid container element.')
    )
  })

  it('should ping the tooltip with plain content and overflow', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping('hello', {
      ...dispatchEvent(container, 'mousemove'),
      clientX: -15,
      clientY: -15,
    })
    expect(tooltipElement?.style.visibility).toBe('visible')
  })

  it('should ping the tooltip with an array and hide it after the timeout', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    jasmine.clock().tick(6000)
    expect(tooltipElement?.style.visibility).toBe('hidden')
  })

  it('should allow manually closing of tooltip', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    tooltip.hide()
    jasmine.clock().tick(600)
    expect(tooltipElement?.style.visibility).toBe('hidden')
  })

  it('cleans up timers after hiding', () => {
    const container = document.createElement('div')
    const tooltip = new Tooltip(container)
    const tooltipElement = container.querySelector('div')
    tooltip.ping(['1', '2', '3'], dispatchEvent(container, 'mousemove'))
    expect(tooltipElement?.style.visibility).toBe('visible')
    tooltip.hide()
    jasmine.clock().tick(400)
    tooltip.hide()
    jasmine.clock().tick(400)
    expect(tooltipElement?.style.visibility).toBe('visible')
  })
})
