//@ts-ignore
import {
  Bars,
  Tooltip,
  Scale,
  randomData,
  addColorsToConfig,
  dispatchEvent,
  //@ts-ignore
} from '../../../vanilla/index.js'
import { select } from 'd3-selection'
import jsdom from 'jsdom'
import fs from 'fs'

const { JSDOM } = jsdom
const index = fs.readFileSync('index.html', 'utf-8')
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
// const helpers = { darkerColor }
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
const { data, config } = randomData(3, 3, -50, 10)
config.values = addColorsToConfig(config.values)
const dataSet = {
  data,
  minValue: -1,
  maxValue: 100,
}
// let callback = false
const transitionTime = 100
/* istanbul ignore next */
// const testCallback = {
//   clickCallback: () => (callback = true),
// }
const bars = new Bars({
  dimensions,
  d3Svg,
  tooltip,
  scales,
  config,
  dataSet,
  transitionTime,
  // clickCallback: testCallback.clickCallback,
})
/* istanbul ignore next */
const chartBars = d3Svg.node()?.querySelectorAll('.pic-bars') ?? []
const chartBar = chartBars[0] as HTMLElement

describe('Bars', () => {
  it('should create the Bars', () => {
    expect(d3Svg.node()?.querySelectorAll('.pic-bars-group').length).toBe(1)
  })

  it('should render and update the bars with transition', () => {
    bars.render({ transition: true })
    expect(chartBars.length).toBeGreaterThan(0)
  })

  it('should re-render and update the bars without transition', () => {
    bars.render()
    expect(chartBars.length).toBeGreaterThan(0)
  })

  it('should ping the tooltip when the mouse moves over the bar', () => {
    spyOn(tooltip, 'ping')
    dispatchEvent(chartBar, 'mousemove')
    expect(tooltip.ping).toHaveBeenCalled()
  })

  it('should change the color and back when mouse enters/exits the bar', () => {
    const color = chartBar.getAttribute('fill')
    dispatchEvent(chartBar, 'mouseover')
    expect(color).not.toEqual(chartBar.getAttribute('fill'))
    dispatchEvent(chartBar, 'mouseout')
    expect(color).toEqual(chartBar.getAttribute('fill'))
  })

  // it('should use the custom onclick event', () => {
  //   dispatchEvent(chartBar, 'mousedown')
  //   expect(callback).toBeTruthy()
  // })

  // it('should use the default onclick event', () => {
  //   const d3Svg = select(document.body).append('svg')
  //   const bars = new Bars({
  //     dimensions,
  //     d3Svg,
  //     tooltip,
  //     scales,
  //     config,
  //     dataSet,
  //     transitionTime,
  //   })
  //   spyOn(bars, 'clickCallback')
  //   dispatchEvent(
  //     d3Svg.node()?.querySelector('.pic-bars') as HTMLElement,
  //     'mousedown'
  //   )
  //   expect(bars.clickCallback).toHaveBeenCalled()
  // })

  it('should not render the Bars if scales are undefined', () => {
    const d3Svg = select(document.body).append('svg')
    const bars = new Bars({
      dimensions,
      d3Svg,
      tooltip,
      scales: {},
      config,
      dataSet,
      transitionTime,
    })
    expect(bars).toBeDefined()
    expect(d3Svg.node()?.querySelectorAll('.pic-bars').length).toBe(0)
  })
})
