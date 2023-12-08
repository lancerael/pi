import { rgbToHex, hexToRgba } from './helpers'

describe('Color Conversion Functions', () => {
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

  describe('hexToRgba', () => {
    it('converts Hex to RGBA with default values', () => {
      const rgba = hexToRgba('#3498db')
      assert.equal(rgba, 'rgb(52, 152, 219, 1)')
    })

    it('applies opacity correctly', () => {
      const rgba = hexToRgba('#3498db', 0.5)
      assert.equal(rgba, 'rgb(52, 152, 219, 0.5)')
    })

    it('applies brightness correctly', () => {
      const rgba = hexToRgba('#3498db', 1, 1.5)
      assert.equal(rgba, 'rgb(78, 228, 255, 1)')
    })

    it('handles brightening beyond white', () => {
      const rgba = hexToRgba('#ffffff', 1, 2)
      assert.equal(rgba, 'rgb(255, 255, 255, 1)')
    })

    it('handles darkening beyond black', () => {
      const rgba = hexToRgba('#000000', 1, 0.5)
      assert.equal(rgba, 'rgb(0, 0, 0, 1)')
    })
  })
})
