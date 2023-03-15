import { max, min } from 'd3-array'
import { select } from 'd3-selection'
import ResizeObserver from 'resize-observer-polyfill'
import { Tooltip, Axis, Scale, Bars, Key } from '../'
import {
  addColorsToConfig,
  throttle,
  transformDataKeys,
  truthy,
} from '../../helpers'
import { publishTheme } from '../../theming'
import {
  TableConfig,
  TableData,
  ChartParams,
  Dimensions,
  Padding,
  D3Div,
  D3Svg,
  ChartScales,
  mapTypes,
  Visual,
  TableItem,
  ScaleType,
} from '../../types'
import { style } from './Chart.style'

/**
 * Used to initialise the canvas that will contain all the chart's SVG content
 *
 * @class Chart
 * @constructor
 */
export class Chart {
  /**
   * Default time for d3 transitions on the chart
   *
   * @property transitionTime
   */
  // private readonly transitionTime = 500

  /**
   * DOM reference to container element that wraps SVG
   *
   * @property container
   */
  private readonly container: HTMLDivElement

  /**
   * SVG d3 object for d3 operations on the chart
   *
   * @property svgSelection
   */
  private readonly d3Svg: D3Svg

  /**
   * d3 reference to chart title element
   *
   * @property title
   */
  private readonly title: D3Div

  /**
   * The padding for the chart within the container
   *
   * @property padding
   */
  private readonly padding: Padding = { l: 45, r: 5, t: 25, b: 85 }

  /**
   * The current calculated diensions of the chart
   *
   * @property dimensions
   */
  private dimensions: Dimensions = {
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    resizeOffset: 0,
    padding: this.padding,
  }

  /**
   * The width before any browser resize
   *
   * @property initialWidth
   */
  protected initialWidth = 0

  /**
   * The chart's configs
   *
   * @property configs
   */
  readonly configs: Map<string, TableConfig> = new Map()

  /**
   * The chart's data sets
   *
   * @property dataSets
   */
  readonly dataSets: Map<string, TableData> = new Map()

  /**
   * The chart's d3 scales
   *
   * @property scales
   */
  readonly scales: Map<string, ChartScales> = new Map()

  /**
   * The chart's d3 axes
   *
   * @property axes
   */
  readonly axes: Map<string, Axis> = new Map()

  /**
   * The chart's keys
   *
   * @property keys
   */
  readonly keys: Map<string, Key> = new Map()

  /**
   * The chart's visuals
   *
   * @property visuals
   */
  readonly visuals: Map<string, Visual> = new Map()

  /**
   * The chart's label for display
   *
   * @property label
   */
  private readonly label: string

  /**
   * The chart's resize offset for use later
   *
   * @property resizeOffset
   */
  // private readonly resizeOffset = 0

  /**
   * The chart's tooltip object.
   *
   * @property tooltip
   */
  private readonly tooltip: Tooltip

  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param label label for chart
   * @param config configuration object
   * @param data the data to be displayed
   * @param containerElement optionally DOM node in place of ID
   * @param containerSelector selector to select DOM object
   * @param theme the selected theme for the chart
   */
  constructor({
    label,
    container,
    config,
    data,
    theme = 'light',
  }: ChartParams) {
    this.label = label
    this.container = this.setContainer(
      typeof container === 'string'
        ? document.querySelector(container)
        : container
    )
    this.title = select(this.container).append('div').attr('class', 'pic-title')
    this.d3Svg = select(this.container)
      .append('svg')
      .attr('class', 'pic-svg')
      .attr('width', '100%')
      .attr('height', '100%')
    this.resizeWatcher.observe(this.container)
    this.tooltip = new Tooltip(this.container)
    this.draw()
    this.initialWidth = this.dimensions.width
    if (config !== undefined) this.setConfig(config)
    if (data !== undefined) this.setData(data)
    publishTheme(theme)
    style()
    /* DEV START */
    // select(this.container)
    //   .on('mousemove', (e, d) =>
    //     this.tooltip.ping(['something', 'name', '123'], e)
    //   )
    //   .on('mouseout', (e, d) => this.tooltip.hide())
    /* DEV END */
  }

  /**
   * Sets up the container object and SVG.
   *
   * @method setContainer
   * @param container Required DOM element
   * @throws {Error} invalid DOM element
   */
  private readonly setContainer = (
    container: HTMLDivElement | null
  ): HTMLDivElement => {
    if (container !== null && truthy(container?.nodeName)) {
      return container
    } else {
      throw new Error('No valid DOM element or selector provided for chart.')
    }
  }

  /**
   * Adds a set of config options for the chart.
   *
   * @method setConfig
   * @chainable
   *
   * @param config JSON configuration object
   * @param configName key for the hash table
   * @throws {Error} missing configuration
   */
  public setConfig = (config: TableConfig, configName = 'default'): Chart => {
    if (!Array.isArray(config?.values)) {
      throw new Error('No valid configuration provided for chart.')
    }
    config.values = addColorsToConfig(config.values)
    this.configs.set(configName, config)
    this.draw()
    return this
  }

  /**
   * Add a data set for the chart.
   *
   * @method setData
   * @chainable
   *
   * @param dataName name for the data set
   * @param data data to set
   * @param configName name for the config
   * @throws {Error} missing data
   */
  public setData = (
    data: TableItem[],
    dataName = 'default',
    configName = 'default',
    trim = true
  ): Chart => {
    const config = this.configs.get(configName)
    if (!Array.isArray(data)) {
      throw new Error('No valid data provided for chart.')
    }
    const newData = Array.isArray(config?.values)
      ? transformDataKeys(config, data)
      : data
    let minValue = trim ? Number(min(newData, (d) => min(d.values))) : 0
    let maxValue = Number(max(newData, (d) => max(d.values)))
    const section = Math.ceil(maxValue / 15)
    if (trim) {
      const lowerSection = minValue > section ? minValue - section : 0
      minValue = minValue > 0 ? lowerSection : minValue
      minValue = minValue < 0 ? minValue - section : minValue
      maxValue += section
    }
    this.dataSets.set(dataName, { data: newData, minValue, maxValue })
    this.draw()
    return this
  }

  /**
   * Add a scale set for the chart.
   *
   * @method addScale
   * @chainable
   *
   * @param scaleName the name for the scale
   * @param scaleTypes the types for the scale
   * @param dataName the name of the dataset
   * @throws {Error} missing data
   */
  public addScale = (
    scaleTypes: { x: string; y: string } = { x: 'band', y: 'linear' },
    scaleName = 'default',
    dataName = 'default'
  ): Chart => {
    const dataSet = this.dataSets.get(dataName)
    if (dataSet === undefined) {
      throw new Error('No valid config provided for scale.')
    }
    this.scales.set(
      scaleName,
      Object.entries(scaleTypes).reduce(
        (chartScales, [direction, scaleType]: [string, string]) => ({
          ...chartScales,
          [direction]: new Scale({
            scaleType: scaleType as ScaleType,
            dataSet: this.dataSets.get(dataName),
            dimensions: this.dimensions,
          }),
        }),
        {}
      ) as ChartScales
    )
    this.draw()
    return this
  }

  /**
   * Adds a set of config options for the chart.
   *
   * @method addAxis
   * @chainable
   *
   * @param axisName key for the hash table
   * @param scaleName the name for the associated d3 scale
   * @param configName the name for the associated JSON configuration object
   * @throws {Error} missing configuration
   */
  public addAxis = (
    axisName = 'default',
    scaleName = 'default',
    configName = 'default'
  ): Chart => {
    const scales = this.scales.get(scaleName)
    if (scales === undefined) {
      throw new Error('No valid config provided for axis.')
    }
    this.axes.set(
      axisName,
      new Axis({
        d3Svg: this.d3Svg,
        tooltip: this.tooltip,
        dimensions: this.dimensions,
        truncate: 10,
        axisLabels: this.configs.get(configName)?.axisLabels ?? ['', ''],
        scales,
      })
    )
    this.draw()
    return this
  }

  /**
   * Adds a set of keys to the chart.
   *
   * @method addKey
   * @chainable
   *
   * @param keyName name for the hash table
   * @param configName the name for the associated JSON configuration object
   * @throws {Error} missing configuration
   */
  public addKey = (keyName = 'default', configName = 'default'): Chart => {
    const config = this.configs.get(configName)
    if (config === undefined) {
      throw new Error('No valid config provided for key.')
    }
    this.keys.set(
      keyName,
      new Key({
        d3Svg: this.d3Svg,
        values: config?.values ?? [],
        dimensions: this.dimensions,
      })
    )
    this.draw()
    return this
  }

  /**
   * Adds a set of keys to the chart.
   *
   * @method addVisual
   * @chainable
   *
   * @param keyName name for the hash table
   * @param configName the name for the associated JSON configuration object
   * @throws {Error} missing configuration
   */
  public addVisual = (
    keyName = 'default',
    configName = 'default',
    dataName = 'default',
    scalesName = 'default',
    type = 'bar',
    transitionTime = 1000
  ): Chart => {
    const config = this.configs.get(configName)
    const dataSet = this.dataSets.get(dataName)
    const scales = this.scales.get(scalesName)
    const hasError = [config, dataSet, scales].includes(undefined)
    if (hasError) throw new Error('No valid config provided for visual.')
    const params = {
      d3Svg: this.d3Svg,
      config,
      dataSet,
      scales,
      transitionTime,
      tooltip: this.tooltip,
      dimensions: this.dimensions,
    }
    switch (type) {
      default: {
        setTimeout(() => this.visuals.set(keyName, new Bars(params)))
      }
    }
    setTimeout(this.draw, transitionTime)
    return this
  }

  /**
   * Removes an item from one of the maps.
   *
   * @method deleteMapItem
   * @chainable
   *
   * @param mapName the name of the map to target
   * @param mapItemName key for the map item to be deleted
   * @throws {Error} item does not exist in map
   */
  public deleteMapItem = (mapName: mapTypes, mapItemName: string): Chart => {
    const mapItem = this[mapName]?.get(mapItemName)
    if (mapItem === undefined) {
      throw new Error(
        `Failed attempting to delete "${mapItemName}" from "this.${mapName}".`
      )
    }
    // if (mapItem.remove) ()
    this[mapName].delete(mapItemName)
    this.draw()
    return this
  }

  /**
   * Adds default features to the chart
   */
  public addDefaults = (): Chart => {
    return this.addScale().addAxis().addKey().addVisual()
  }

  /**
   * Sets the local chart dimensions based on the size of the container.
   *
   * @method setDimensions
   */
  private readonly updateDimensions = (): void => {
    const { left, width, top, height } = this.container.getBoundingClientRect()
    const { l, r, t, b } = this.padding
    this.dimensions.left = left
    this.dimensions.width = width
    this.dimensions.top = top
    this.dimensions.height = height
    this.dimensions.innerWidth = width - l - r
    this.dimensions.innerHeight = height - t - b
    this.dimensions.resizeOffset = width - this.initialWidth
    this.dimensions.padding = this.padding
  }

  /**
   * Render the chart
   *
   * @method renderChart
   */
  private readonly renderChart = (): void => {
    if (this.title !== undefined && truthy(this.label)) {
      this.title.text(this.label)
      // to be continued...
    } else {
      throw new Error('Unable to render the chart.')
    }
  }

  /**
   * Draw the chart
   *
   * @method draw
   */
  private readonly draw = (): void => {
    this.updateDimensions()
    this.renderChart()
    this.scales.forEach((chartScales: ChartScales) =>
      Object.values(chartScales).forEach((scale) => scale.render())
    )
    this.axes.forEach((axis: Axis) => axis.render())
    this.keys.forEach((key: Key) => key.render())
    this.visuals.forEach((visual: Visual) => visual.render({ reset: true }))
  }

  /**
   * Redraw the chart
   *
   * @method redraw
   */
  private readonly redraw = throttle(this.draw)

  /**
   * Watcher for the resize event
   *
   */
  private readonly resizeWatcher = new ResizeObserver(this.redraw)
}
