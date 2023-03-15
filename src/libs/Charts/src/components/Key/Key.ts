import { truthy } from '../../helpers'
import { ValueConfig, KeyParams, D3Svg, Dimensions } from '../../types/'

export const totalMargin = (values: ValueConfig[], i = 0): number =>
  values
    .slice(0, i)
    .reduce((total, { labelWidth: width = 0 }) => total + width, 0)

/**
 * The Key shows how the colors represent the data
 *
 * @class Key
 * @constructor
 */
export class Key {
  /**
   * d3 object for axis container
   *
   * @property d3Svg
   */
  d3Svg: D3Svg

  /**
   * The key's config values
   *
   * @property values
   */
  values: ValueConfig[]

  /**
   * The x offset for the key
   *
   * @property offsetX
   */
  dimensions: Dimensions

  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param {Object} d3Svg A d3 wrapped container element
   * @param {Array} values the config for the data to be displayed
   * @param {Integer} dimensions the chart dimensions
   */
  constructor({ d3Svg, values, dimensions }: KeyParams) {
    if (![d3Svg, values, dimensions].every(truthy)) {
      throw new Error('Incorrect parameters provided to Key constructor.')
    }
    this.d3Svg = d3Svg
    this.values = [...values]
    this.dimensions = dimensions
    this.render()
  }

  /**
   * Render the key showing the labels for the color values
   *
   * @method render
   * @chainable
   */
  render(): void {
    const { innerWidth, height, padding } = this.dimensions
    let iGroupOffset = 0
    const offsetX = innerWidth / 2 + padding.l
    const offsetY = height - 20

    /* Key group */
    this.d3Svg.selectAll('g.pic-key-group').remove()
    const d3KeyGroup = this.d3Svg.append('g').attr('class', 'pic-key-group')

    /* Labels */
    const d3Labels = d3KeyGroup
      .selectAll('text.pic-key-label')
      .data(this.values)
    d3Labels
      .enter()
      .append('text')
      .text(({ name }) => name)
      .each((_d, i, nodes) => {
        const labelWidth = nodes[i].getBoundingClientRect().width + 22
        this.values[i].labelWidth = labelWidth
        iGroupOffset += labelWidth - 2
      })
      .attr('class', 'pic-key-label')
      .attr('x', (_d, i) => totalMargin(this.values, i))
      .attr('y', 10)
      .attr('width', 12)
      .attr('height', 12)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('fill', '#222222')

    /* Keys */
    const d3Keys = d3KeyGroup.selectAll('rect.pic-key').data(this.values)
    d3Keys
      .enter()
      .append('rect')
      .attr('class', 'pic-key')
      .attr('fill', ({ color }) => color as string)
      .attr('x', (_d, i) => totalMargin(this.values, i) - 16)
      .attr('y', 0)
      .attr('width', 12)
      .attr('height', 12)

    /* Group position */
    iGroupOffset = offsetX - iGroupOffset / 2
    d3KeyGroup.attr('transform', `translate(${iGroupOffset},${offsetY})`)
  }
}
