import {
  Axis,
  Tooltip,
  Scale,
  randomData,
  dispatchEvent,
  //@ts-ignore
} from '../../../js/index.js'
import { select } from 'd3-selection'
import { JSDOM } from 'jsdom'
import { readFileSync } from 'fs'
import 'jasmine'

const index = readFileSync('index.html', 'utf-8')
const dom = new JSDOM(index)
global.document = dom.window.document

const dimensions = {
  left: 0,
  width: 0,
  top: 0,
  height: 0,
  innerWidth: 0,
  innerHeight: 0,
  resizeOffset: 0,
  padding: { l: 45, r: 5, t: 25, b: 85 },
}

const d3Svg = select(document.body).append('svg')
const tooltip = new Tooltip(document.body)
const scales = {
  x: new Scale({
    scaleType: 'band',
    dataSet: { data: randomData().data, minValue: 0, maxValue: 100 },
    dimensions,
  }),
  y: new Scale({
    scaleType: 'linear',
    dataSet: { data: randomData().data, minValue: 0, maxValue: 100 },
    dimensions,
  }),
}
const axisLabels = ['a', 'b'] as [string, string]
let axis

describe('Axis', () => {
  beforeEach(() => {
    jasmine.clock().uninstall()
    jasmine.clock().install()
    jasmine.clock().tick(101)
  })

  it('should create the dual Axis', () => {
    const d3Svg = select(document.body).append('svg')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales,
      axisLabels,
    })
    expect(
      d3Svg.node()?.querySelectorAll('.pic-axis-x text').length
    ).toBeGreaterThan(0)
    expect(
      d3Svg.node()?.querySelectorAll('.pic-axis-y line').length
    ).toBeGreaterThan(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-x').length).toBe(1)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-y').length).toBe(1)
  })

  it('should create single x Axis', () => {
    const d3Svg = select(document.body).append('svg')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales: { x: scales.x },
      axisLabels: ['a', ''],
    })
    expect(
      d3Svg.node()?.querySelectorAll('.pic-axis-x text').length
    ).toBeGreaterThan(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-y line').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-x').length).toBe(1)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-y').length).toBe(0)
  })

  it('should create single y Axis', () => {
    const d3Svg = select(document.body).append('svg')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales: { y: scales.y },
      axisLabels: ['', 'b'],
    })
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-x text').length).toBe(0)
    expect(
      d3Svg.node()?.querySelectorAll('.pic-axis-y line').length
    ).toBeGreaterThan(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-x').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-y').length).toBe(1)
  })

  it('should create axes without labels', () => {
    const d3Svg = select(document.body).append('svg')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales,
    } as any)
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-x').length).toBe(1)
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-y').length).toBe(1)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-x').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-y').length).toBe(0)
  })

  it('should allow dimensions to be passed via render', () => {
    const d3Svg = select(document.body).append('svg')
    axis = new Axis({
      d3Svg,
      tooltip,
      scales,
      axisLabels,
    } as any)
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-x text').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-axis-y line').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-x').length).toBe(0)
    expect(d3Svg.node()?.querySelectorAll('.pic-label-y').length).toBe(0)
  })

  it('should throw an error when the SVG is missing', () => {
    expect(() => new Axis({} as any)).toThrow(
      new Error('No SVG provided to Axis constructor.')
    )
  })

  it('should handle tooltip events on mouse labels', () => {
    const d3Svg = select(document.body).append('svg')
    spyOn(tooltip, 'ping')
    spyOn(tooltip, 'hide')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales,
      axisLabels,
      truncate: 2,
    })
    dispatchEvent(
      d3Svg.node()?.querySelector('.pic-axis-label') as HTMLElement,
      'mousemove'
    )
    expect(tooltip.ping).toHaveBeenCalled()
    dispatchEvent(
      d3Svg.node()?.querySelector('.pic-axis-label') as HTMLElement,
      'mouseout'
    )
    expect(tooltip.hide).toHaveBeenCalled()
  })

  it('should handle not show tooltip on untruncated labels', () => {
    const tooltip = new Tooltip(document.body)
    spyOn(tooltip, 'ping')
    axis = new Axis({
      dimensions,
      d3Svg,
      tooltip,
      scales,
      axisLabels,
      truncate: 200,
    })
    dispatchEvent(
      d3Svg.node()?.querySelector('.pic-axis-label') as HTMLElement,
      'mousemove'
    )
    expect(tooltip.ping).not.toHaveBeenCalled()
  })
})
