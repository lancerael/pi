import { getTransientProps } from './getTransientProps'

describe('getTransientProps', () => {
  it('should transform keys with $ prefix', () => {
    const props = { color: 'red', size: 10 }
    const transientProps = getTransientProps(props)

    // Assertions based on the expected transformed keys
    expect(transientProps).toEqual({ $color: 'red', $size: 10 })
  })

  it('should handle an empty props object', () => {
    const props = {}
    const transientProps = getTransientProps(props)

    // Assertions for an empty props object
    expect(transientProps).toEqual({})
  })
})
