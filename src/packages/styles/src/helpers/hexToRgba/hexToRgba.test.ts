import hexToRgba from './hexToRgba'

describe('hexToRgba', () => {
  it('converts Hex to RGBA with default values', () => {
    const rgba = hexToRgba('#3498db')
    assert.equal(rgba, 'rgba(52, 152, 219, 1)')
  })

  it('applies opacity correctly', () => {
    const rgba = hexToRgba('#3498db', 0.5)
    assert.equal(rgba, 'rgba(52, 152, 219, 0.5)')
  })

  it('applies brightness correctly', () => {
    const rgba = hexToRgba('#3498db', 1, 1.5)
    assert.equal(rgba, 'rgba(78, 228, 255, 1)')
  })

  it('handles brightening beyond white', () => {
    const rgba = hexToRgba('#ffffff', 1, 2)
    assert.equal(rgba, 'rgba(255, 255, 255, 1)')
  })

  it('handles darkening beyond black', () => {
    const rgba = hexToRgba('#000000', 1, 0.5)
    assert.equal(rgba, 'rgba(0, 0, 0, 1)')
  })
})
