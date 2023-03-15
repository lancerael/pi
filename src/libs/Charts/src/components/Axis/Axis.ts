import { axisBottom, axisLeft } from 'd3-axis'
import {
  Dimensions,
  D3Svg,
  ChartScales,
  AxisParams,
  D3Group,
} from '../../types'
import { truncateString, truthy } from '../../helpers'
import { Tooltip } from '../Tooltip'
import { style } from './Axis.style'

/**
 * The Axis object is used to instantiate x and y axes, and the chart labels
 *
 * @class Axis
 * @constructor
 */
export class Axis {
  /**
   * SVG d3 object for d3 operations on the chart
   *
   * @property svgSelection
   */
  private readonly d3Svg: D3Svg

  /**
   * Amount to truncate axis labels to
   *
   * @property truncate
   */
  private readonly truncate: number

  /**
   * Collection of axis labels
   *
   * @property axisLabels
   */
  private readonly axisLabels?: [string, string]

  /**
   * Scales for the axes
   *
   * @property scales
   */
  private readonly scales: ChartScales

  /**
   * Chart's tooltip object
   *
   * @property tooltip
   * @type {Object}
   */
  private readonly tooltip: Tooltip

  /**
   * The current calculated diensions of the chart
   *
   * @property dimensions
   */
  private dimensions: Dimensions

  /**
   * The D3 selection for the X axis group
   *
   * @property axisGroupX
   */
  private readonly axisGroupX: D3Group

  /**
   * The D3 selection for the Y axis group
   *
   * @property axisGroupX
   */
  private readonly axisGroupY: D3Group

  /**
   * Constructor function which sets up the local object.
   *
   * @method constructor
   * @param d3Svg containing d3 SVG
   * @param tooltip tooltip div
   * @param dimensions chart dimensions
   * @param truncate text truncate length
   * @param axisLabels chart axis labels
   * @param scales chart axis scales
   * @throws {Error} invalid parameters
   */
  constructor({
    d3Svg,
    tooltip,
    dimensions,
    truncate = 2,
    axisLabels,
    scales,
  }: AxisParams) {
    if (!truthy(d3Svg)) throw new Error('No SVG provided to Axis constructor.')
    this.dimensions = dimensions
    this.d3Svg = d3Svg
    this.tooltip = tooltip
    this.truncate = truncate
    this.axisLabels = axisLabels ?? ['', '']
    this.scales = scales
    this.axisGroupX = d3Svg.append('g').attr('class', 'pic-axis pic-axis-x')
    this.axisGroupY = d3Svg.append('g').attr('class', 'pic-axis pic-axis-y')
    this.render()
    style()
  }

  /**
   * Master render to call all rendering methods
   *
   * @method render
   */
  public render(dimensions?: Dimensions): void {
    if (dimensions !== undefined) this.dimensions = dimensions
    if (this.dimensions === undefined) return
    this.renderAxisX()
    this.renderAxisY()
    this.renderLabels()
  }

  /**
   * Render the x axis
   *
   * @method renderAxisX
   */
  public renderAxisX(): void {
    const { height, padding } = this.dimensions
    if (this.scales.x === undefined) return
    this.axisGroupX
      .call(axisBottom(this.scales.x.axisScale))
      .attr('transform', `translate(${padding.l},${height - padding.b})`)
      .selectAll('text')
      .attr('x', -5)
      .attr('y', 6)
      .attr('transform', 'rotate(310)')
      .attr('class', 'pic-axis-label pic-axis-label-x')
      .text((d) => truncateString(d as string, this.truncate))
      .style('text-anchor', 'end')
      .on('mousemove', (e, d) => {
        if ((d as string).length > this.truncate) {
          this.tooltip.ping(`<strong>${d as string}</strong>`, e)
        }
      })
      .on('mouseout', this.tooltip.hide)
  }

  /**
   * Render the y axis
   *
   * @method renderAxisY
   */
  public renderAxisY(): void {
    const { innerWidth, padding } = this.dimensions
    if (this.scales.y === undefined) return
    this.axisGroupY
      .call(axisLeft(this.scales.y.axisScale))
      .attr('transform', `translate(${padding.l},0)`)
      .selectAll('.pic-axis-y .tick line')
      .attr('class', 'pic-line')
      .attr('x2', () => innerWidth)
  }

  /**
   * Render the labels
   *
   * @method renderLabels
   */
  public renderLabels(): void {
    const { height, width, padding } = this.dimensions
    this.d3Svg.selectAll('text.pic-label').remove()
    if (truthy(this.axisLabels?.[0])) {
      this.d3Svg
        .append('text')
        .attr('class', 'pic-label pic-label-x')
        .attr('x', height / -2 + padding.b / 2)
        .attr('y', 20)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text(this.axisLabels?.[0] ?? '')
    }
    if (truthy(this.axisLabels?.[1])) {
      this.d3Svg
        .append('text')
        .attr('class', 'pic-label pic-label-y')
        .attr('x', (width + padding.l + padding.r) / 2)
        .attr('y', height - padding.b / 3)
        .attr('text-anchor', 'middle')
        .text(this.axisLabels?.[1] ?? '')
    }
  }
}
