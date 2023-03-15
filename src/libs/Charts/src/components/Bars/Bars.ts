import { easeLinear } from 'd3-ease'
import { ScaleBand, ScaleLinear } from 'd3-scale'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  ChartScales,
  D3Group,
  Dimensions,
  TableConfig,
  TableData,
  TableItem,
  VisualParams,
  VisualRenderParams,
} from '../../types'
import { Tooltip } from '../'
import { darkerColor } from '../../helpers'
import { RGBColor } from 'd3-color'

/**
 * Create BarCharts from the supplied data, based on the JSON config.
 *
 * @class BarChart
 * @constructor
 */
export class Bars {
  /**
   * The local collection of bars
   *
   * @property bars
   * @type {Array}
   */
  bars: any[] = []

  /**
   * The D3 selection for the SVG group
   *
   * @property chartGroup
   */
  chartGroup: D3Group

  /**
   * The config for the chart
   *
   * @property config
   */
  config: TableConfig

  /**
   * The data for the chart
   *
   * @property dataSet
   */
  dataSet: TableData

  /**
   * The scales for the chart
   *
   * @property scales
   */
  scales: ChartScales

  /**
   * The chart Tooltip
   *
   * @property tooltip
   */
  tooltip: Tooltip

  /**
   * The chart dimensions
   *
   * @property config
   */
  dimensions: Dimensions

  /**
   * The transition time
   *
   * @property transitionTime
   */
  transitionTime: number

  /**
   * Optional callback for clicking on the chart
   *
   * @property config
   */
  // clickCallback: (e: MouseEvent, d: TableItem) => void

  /**
   * Constructor used to set chart type
   *
   * @method constructor
   */
  constructor({
    d3Svg,
    config,
    dataSet,
    scales,
    tooltip,
    dimensions,
    transitionTime,
  }: // clickCallback,
  VisualParams) {
    if (config === undefined || dataSet === undefined || scales === undefined) {
      throw new Error('Table is incorrectly initialised.')
    }
    this.config = config
    this.dataSet = dataSet
    this.scales = scales
    this.tooltip = tooltip
    this.dimensions = dimensions
    this.transitionTime = transitionTime
    // this.clickCallback = clickCallback ?? ((e, d) => null)
    this.chartGroup = d3Svg
      .append('g')
      .attr('class', 'pic-bars-group')
      .attr('transform', `translate(${dimensions.padding.l}, 0)`)
    this.render({ transition: true })
  }

  /**
   * Render the bars
   *
   * @method render
   */
  render = ({
    reset = false,
    transition = false,
  }: VisualRenderParams = {}): void => {
    if (this.scales.x === undefined || this.scales.y === undefined) return
    const { data, minValue, maxValue } = this.dataSet
    const { values } = this.config
    const { innerHeight, padding } = this.dimensions
    const scaleX = this.scales.x.axisScale as ScaleBand<string>
    const scaleY = this.scales.y.axisScale as ScaleLinear<number, number>
    const barWidth = scaleX.bandwidth() / values.length
    // const barType = 'side'
    const transitionTime = transition ? this.transitionTime : 0

    // Reset bars data and clear graph
    if (reset) {
      this.bars.forEach((bar, i) => {
        bar = this.chartGroup.selectAll(`rect.pic-bars-${i}`).data([])
        bar.exit().remove()
        bar = undefined
      })
      this.bars = []
    }

    // Iterate through config value keys
    values.forEach(({ rgbColor, name }, i) => {
      // const barOffset = barType === 'side' ? barWidth * i : 0
      const barOffset = barWidth * i
      // Add bars for each value
      if (this.bars[i] === undefined) {
        // Bind bars data
        this.bars[i] = this.chartGroup
          .selectAll(`rect.pic-bars-${i}`)
          .data(data)
        // Add new rect elements and set base attributes
        this.bars[i]
          .enter()
          .append('rect')
          .on('mousemove', (e: MouseEvent, d: TableItem) => {
            this.tooltip.ping([d.label, name, String(d.values[i])], e)
          })
          .on('mouseover', ({ target }: MouseEvent) => {
            select(target as HTMLElement).attr(
              'fill',
              darkerColor(rgbColor as RGBColor).formatHex()
            )
          })
          // .on('mousedown', (e: MouseEvent, d: TableItem) => {
          //   this.clickCallback(e, d)
          // })
          .on('mouseout', ({ target }: MouseEvent) => {
            this.tooltip.hide()
            select(target as Element).attr(
              'fill',
              (rgbColor as RGBColor).formatHex()
            )
          })
          .attr('class', `pic-bars pic-bars-${i}`)
          .attr('fill', (rgbColor as RGBColor).formatHex())
          .attr('y', innerHeight + padding.t)
          .attr('height', 0)
      }

      // Update the bars to match the latest data
      let bars = this.chartGroup
        .selectAll(`rect.pic-bars-${i}`)
        .data(data)
        .attr('x', (d: TableItem) => Number(scaleX(d.label)) + barOffset)
        .attr('width', barWidth)

      if (typeof bars.transition === 'function') {
        bars = bars
          .transition()
          .ease(easeLinear)
          .duration(transitionTime) as any
      }

      bars
        .attr('y', (d: TableItem) => {
          let value = d.values[i]
          value = value < 0 ? Math.abs(value) : 0
          return scaleY(d.values[i] + value)
        })
        .attr('height', (d: TableItem) => {
          const modifier = minValue < 0 ? Math.abs(maxValue) : 0
          const scaleValue = Math.abs(d.values[i]) - modifier
          return innerHeight - scaleY(scaleValue) + padding.t
        })
    })
  }
}
