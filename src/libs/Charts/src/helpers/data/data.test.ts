import {
  sliceSampleData,
  randomData,
  emptyTable,
  transformDataKeys,
  randomNumber,
  newArray,
  //@ts-ignore
} from '../../../vanilla/index.js'
import { TableConfig } from '../../types'

describe('sliceSampleData', () => {
  it('should return a sample from a small array using default values', () => {
    const data = newArray(55, () => randomNumber())
    const sample = sliceSampleData(data)
    expect(Array.isArray(sample)).toBe(true)
    expect(sample.length).toBeGreaterThanOrEqual(3)
    expect(sample.length).toBeLessThanOrEqual(50)
  })

  it('should return a sample from a large array using specified values', () => {
    const data = newArray(1000, () => randomNumber())
    const sample = sliceSampleData(data, 50, 60)
    expect(sample.length).toBeGreaterThanOrEqual(50)
    expect(sample.length).toBeLessThanOrEqual(60)
  })

  it('should handle data that is too short to truncate', () => {
    const data = [1, 2]
    const slice = (): any[] => sliceSampleData(data)
    expect(slice.bind(this)).toThrow(
      new Error('Data set is too short to sample.')
    )
  })

  it('should handle data that is shorter than max but still able to truncate', () => {
    const data = [2, 5, 8, 3, 4, 6]
    for (let x = 0; x < 10; x++) {
      const sample = sliceSampleData(data)
      expect(sample.length).toBeGreaterThanOrEqual(3)
      expect(sample.length).toBeLessThanOrEqual(6)
    }
  })

  it('should handle data that is already the minimum length', () => {
    const data = [2, 5, 8]
    const sample = sliceSampleData(data)
    expect(sample.length).toBe(3)
  })
})

describe('randomData', () => {
  it('should return a random set of data with no params', () => {
    const tableData = randomData()
    expect(tableData.label).toBe('Random Chart Data')
    expect(tableData.config?.axisLabels?.length).toBe(2)
    expect(tableData.config?.axisLabels?.length).toEqual(2)
    expect(tableData.config.values[0].name).toBe('Type 1')
    expect(tableData.data[0].label).toBe('Item 1')
    expect(tableData.data[0].values[0]).toBeLessThanOrEqual(200)
  })

  it('should return a random set of data with known params', () => {
    const tableData = randomData(10, 10, 10, 20)
    expect(tableData.config.values.length).toBe(10)
    expect(tableData.data.length).toBe(10)
    expect(tableData.data[0].values.length).toBe(10)
    tableData.data[0].values.forEach((value: any) => {
      expect(value).toBeGreaterThanOrEqual(10)
      expect(value).toBeLessThanOrEqual(20)
    })
  })
})

describe('emptyTable', () => {
  it('should return an empty table', () => {
    expect(emptyTable()).toEqual({
      label: '',
      config: {
        axisLabels: ['', ''],
        values: [],
        trim: true,
      },
      data: [],
    })
  })
})

describe('transformDataKeys', () => {
  it('should transform known data keys', () => {
    const config: TableConfig = {
      axisKeys: ['k3'],
      axisLabels: ['y', 'x'],
      values: [
        {
          key: 'k1',
          name: 'K1',
          color: 'red',
        },
        {
          key: 'k2',
          name: 'K2',
          color: 'blue',
        },
      ],
    }
    const data = [
      { k1: 4, k2: 5, k3: 'six' },
      { k1: 7, k2: 8, k3: 'nine' },
    ]
    const transformedData = transformDataKeys(config, data)
    transformedData.forEach((newData: any, i: number) => {
      expect(newData.values[0]).toEqual(data[i].k1)
      expect(newData.values[1]).toEqual(data[i].k2)
      expect(newData.label).toEqual(data[i].k3)
    })
  })

  it('should handle incorrectly formed config', () => {
    const config: TableConfig = {
      axisLabels: ['y', 'x'],
      values: [
        {
          name: 'K1',
          color: 'red',
        },
        {
          key: 'k2',
          name: 'K2',
          color: 'blue',
        },
      ],
    }
    const data = [
      { k1: 4, k2: 5, k3: 'six' },
      { k1: 7, k2: 8, k3: 'nine' },
    ]
    const transformedData = transformDataKeys(config, data)
    expect(transformedData[0].values).toEqual([0, 5])
    expect(transformedData[0].label).toBeUndefined()
  })

  it('should handle incorrectly formed data', () => {
    const config: TableConfig = {
      axisKeys: ['k3'],
      axisLabels: ['y', 'x'],
      values: [
        {
          key: 'k1',
          name: 'K1',
          color: 'red',
        },
        {
          key: 'k2',
          name: 'K2',
          color: 'blue',
        },
      ],
    }
    const data = [{ k1: 4 }, { k1: 7, k2: 8, k3: 'nine' }]
    const transformedData = transformDataKeys(config, data)
    expect(transformedData[0].values).toEqual([4, 0])
    expect(transformedData[0].label).toEqual('AXIS KEY MISMATCH')
  })

  it('should handle missing config', () => {
    const data = [{ k1: 4 }, { k1: 7, k2: 8, k3: 'nine' }]
    const transformedData = transformDataKeys(undefined, data)
    expect(transformedData).toEqual(data)
  })

  it('should return unmapped data when keys are missing', () => {
    const config: TableConfig = {
      axisKeys: ['k3'],
      axisLabels: ['y', 'x'],
      values: [
        {
          name: 'K1',
          color: 'red',
        },
        {
          name: 'K2',
          color: 'blue',
        },
      ],
    }
    const data = [
      { k1: 4, values: [21, 45] },
      { k1: 7, k2: 8, k3: 'nine', values: [44, 77] },
    ]
    const transformedData = transformDataKeys(config, data)
    expect(transformedData).toEqual(data)
  })
})
