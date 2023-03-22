import createConfig from '@pi-lib/config'

const customRollup = {
  external: [
    'd3-array',
    'd3-axis',
    'd3-color',
    'd3-ease',
    'd3-scale',
    'd3-selection',
    'd3-transition',
  ],
}

export default createConfig('charts', customRollup)
