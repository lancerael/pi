import { randomNumber, newArray } from '../utilities'
import { ValueConfig, TableConfig, TableItem, ChartTable } from '../../types'

/**
 * Returns a sample selection from any array
 *
 * @method sliceSampleData
 *
 * @param dataSet the complete data set
 * @param minLength max length of sample
 * @param maxLength max length of sample
 * @return sliced section of data
 */
const sliceSampleData = (
  dataSet: any[],
  minLength = 3,
  maxLength = 50
): any[] => {
  if (dataSet.length < minLength) {
    throw new Error('Data set is too short to sample.')
  } else if (dataSet.length === minLength) return dataSet
  const isShortData = maxLength > dataSet.length
  const wiggleRoom = dataSet.length - minLength
  const start = randomNumber(
    0,
    isShortData ? wiggleRoom : dataSet.length - maxLength
  )
  const endFrom = start + minLength
  const end = randomNumber(
    endFrom,
    endFrom + (isShortData ? wiggleRoom : maxLength - minLength)
  )
  return dataSet.slice(start, end)
}

/**
 * Returns random data and config for demo purposes.
 *
 * @method randomData
 *
 * @param length the length of the data set - by total number of items
 * @param size each piece of data - by data points per item
 * @param rangeLow the lower range for the random data values
 * @param rangeHigh the upper range for the random data values
 * @return JSON compatible data structure for entire table
 */
const randomData = (
  length: number = randomNumber(3, 10),
  size: number = randomNumber(1, 4),
  rangeLow: number = randomNumber(1, 50),
  rangeHigh: number = randomNumber(rangeLow, 200)
): ChartTable => ({
  label: 'Random Chart Data',
  config: {
    axisLabels: ['Y Axis', 'X Axis'],
    trim: true,
    values: newArray(
      size,
      (_val, i): ValueConfig => ({
        name: `Type ${Number(i) + 1}`,
      })
    ),
  },
  data: newArray(
    length,
    (_val, i): TableItem => ({
      label: `Item ${Number(i) + 1}`,
      values: newArray(size, (): number => randomNumber(rangeLow, rangeHigh)),
    })
  ),
})

/**
 * Returns empty table data and config for demo purposes.
 *
 * @method emptyTable
 *
 * @return Empty table config and data structure
 */
const emptyTable = (): ChartTable => {
  return {
    label: '',
    config: {
      axisLabels: ['', ''],
      values: [],
      trim: true,
    },
    data: [],
  }
}

/**
 * Maps custom data keys into standard structure.
 *
 * @method transformDataKeys
 *
 * @param config the JSON style config object
 * @param data the chart data to be transformed
 * @return Parsed table data structure
 */
const transformDataKeys = (
  config: TableConfig | undefined,
  data: any[]
): TableItem[] => {
  if (config === undefined) return data
  return data.map((item): TableItem => {
    item.values = config.values.map(({ key }, i): number => {
      if (typeof key !== 'string' && Array.isArray(item.values)) {
        return item.values[i]
      }
      const sanitisedValue = parseInt(item[key ?? ''])
      return isNaN(sanitisedValue) ? 0 : sanitisedValue
    })
    if (Array.isArray(config.axisKeys) && typeof item.label !== 'string') {
      item.label = item[config.axisKeys[0]]
      if (typeof item.label !== 'string') item.label = 'AXIS KEY MISMATCH'
    }
    return item
  })
}

export { sliceSampleData, randomData, emptyTable, transformDataKeys }
