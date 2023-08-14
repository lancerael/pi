//@ts-ignore
import {
  Chart,
  randomData,
  //@ts-ignore
} from '../../../js/index.js'

import { ChartParams, TableData } from '../../types'
import { JSDOM } from 'jsdom'
import { readFileSync } from 'fs'
import 'jasmine'

const index = readFileSync('index.html', 'utf-8')

const dom = new JSDOM(index)
global.document = dom.window.document

const getFlatChart = (params: any): any =>
  JSON.parse(JSON.stringify(new Chart(params)))

describe('Chart', () => {
  it('should accept ID string to get DOM element and initialise an empty table', () => {
    const div = document.createElement('div')
    div.setAttribute('id', 'test')
    document.body.appendChild(div)
    const chart = getFlatChart({
      container: '#test',
      label: 'Test chart',
    })
    expect(typeof chart.container).toBe('object')
  })

  it('should accept DOM element and initialise an empty table', () => {
    const container = document.createElement('div')
    const chart = getFlatChart({ container, label: 'Test chart' })
    expect(typeof chart.container).toBe('object')
  })

  it('should throw error for missing container', () => {
    expect(
      () =>
        new Chart({
          container: 'nothing',
          label: 'test',
        } as any)
    ).toThrow(new Error('No valid DOM element or selector provided for chart.'))
  })

  it('should throw error for missing label', () => {
    const container = document.createElement('div')
    expect(() => new Chart({ container, label: '' } as any)).toThrow(
      new Error('Unable to render the chart.')
    )
  })

  it('should initialise with config and data', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      data,
      config,
      label,
    })
    expect(chart.configs.get('default')).toEqual(config)
    expect(chart.dataSets.get('default')?.data).toEqual(data)
  })

  it('should initialise then allow later addition config and data', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
    } as any)
    chart.setConfig(config, 'myConfig')
    chart.setData(data, 'myData', 'myConfig')
    expect(chart.configs.get('myConfig')).toEqual(config)
    expect(chart.dataSets.get('myData')?.data).toEqual(data)
  })

  it('should initialise then allow later addition of data', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
      config,
    } as any)
    chart.setData(data, 'myData', 'default', false)
    expect(chart.dataSets.get('myData')?.data).toEqual(data)
  })

  it('should initialise then allow later addition of config', () => {
    const { data, config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
      data,
    } as any)
    chart.setConfig(config, 'myConfig')
    expect(chart.configs.get('myConfig')).toEqual(config)
  })

  it('should handle min/max values', () => {
    const { data, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
    } as any)
    data[0].values[0] = -1
    chart.setData(data)
    const { minValue, maxValue } = chart.dataSets.get('default') as TableData
    expect(minValue).toBeLessThan(maxValue)
  })

  it('should allow removal of config and data', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(chart.configs.get('default')).toBeDefined()
    expect(chart.dataSets.get('default')).toBeDefined()
    chart.deleteMapItem('configs', 'default')
    chart.deleteMapItem('dataSets', 'default')
    expect(chart.configs.get('default')).toBeUndefined()
    expect(chart.dataSets.get('default')).toBeUndefined()
  })

  it('should throw an error when trying to remove invalid config/data', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(() => chart.deleteMapItem('configs', 'custom')).toThrow(
      new Error('Failed attempting to delete "custom" from "this.configs".')
    )
    expect(() => chart.deleteMapItem('dataSets', 'custom')).toThrow(
      new Error('Failed attempting to delete "custom" from "this.dataSets".')
    )
  })

  it('should throw an error for invalid config', () => {
    const { config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
    } as any)
    //@ts-ignore
    delete config.values
    expect(() => chart.setConfig(config, 'myConfig')).toThrow(
      new Error('No valid configuration provided for chart.')
    )
  })

  it('should throw an error for invalid data', () => {
    const { config, label } = randomData()
    const chart = new Chart({
      container: document.createElement('div'),
      label,
    } as any)
    chart.setConfig(config, 'myConfig')
    expect(() => chart.setData('data', 'myData', 'myConfig')).toThrow(
      new Error('No valid data provided for chart.')
    )
  })

  it('should add a scale', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    jasmine.clock().tick(600)
    chart.addScale({ x: 'band', y: 'linear' }, 'default')
    expect(chart.scales.get('default')).toBeDefined()
  })

  it('should throw an error for invalid scale', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(() =>
      chart.addScale({ x: 'band', y: 'linear' }, 'default', 'nothing')
    ).toThrow(new Error('No valid config provided for scale.'))
  })

  it('should add an axis', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    chart.addScale()
    jasmine.clock().tick(600)
    chart.addAxis('default', 'default', 'config')
    expect(chart.axes.get('default')).toBeDefined()
  })

  it('should throw an error for invalid axis', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(() => chart.addAxis('default', 'default', 'default')).toThrow(
      new Error('No valid config provided for axis.')
    )
  })

  it('should add a key', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    jasmine.clock().tick(600)
    chart.addKey()
    expect(chart.keys.get('default')).toBeDefined()
  })

  it('should handle adding a key with missing config values', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    const config = chart.configs.get('default')
    config.values = undefined
    chart.addKey('default', 'default')
    expect(chart.keys.get('default')).toBeDefined()
  })

  it('should throw an error for invalid key', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(() => chart.addKey('default', 'nothing')).toThrow(
      new Error('No valid config provided for key.')
    )
  })

  it('should add a visual', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    chart.addScale()
    chart.addAxis()
    chart.addVisual()
    jasmine.clock().tick(1001)
    expect(chart.visuals.get('default')).toBeDefined()
  })

  it('should throw an error if visual created incorrectly', () => {
    const chart = new Chart({
      container: document.createElement('div'),
      ...randomData(),
    })
    expect(chart.addVisual).toThrow(
      new Error('No valid config provided for visual.')
    )
  })
})
