import rgbToHex from './rgbToHex'

describe('rgbToHex', () => {
  it('converts RGB to Hex correctly', () => {
    const hex = rgbToHex('rgb(255, 0, 0)')
    assert.equal(hex, '#ff0000')
  })

  it('handles white color', () => {
    const hex = rgbToHex('rgb(255, 255, 255)')
    assert.equal(hex, '#ffffff')
  })

  it('handles black color', () => {
    const hex = rgbToHex('rgb(0, 0, 0)')
    assert.equal(hex, '#000000')
  })
})
