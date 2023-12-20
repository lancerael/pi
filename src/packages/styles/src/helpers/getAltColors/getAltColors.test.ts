import { assert } from 'vitest'
import getAltColors from './'

describe('getAltColors', () => {
  it('should return alternative color versions for a dark scheme', () => {
    const baseColors = { primary: '#3498db', secondary: '#2ecc71' }
    const altColors: any = getAltColors(baseColors, 'dark')

    assert.equal(
      Object.keys(altColors).length,
      Object.keys(baseColors).length * 6
    )

    // Check specific alternative versions
    assert.equal(altColors.primary, '#3498db')
    assert.equal(altColors.primaryA, 'rgba(52, 152, 219, 0.5)')
    assert.equal(altColors.primaryD, 'rgba(26, 76, 109.5, 1)')
    assert.equal(altColors.primaryL, 'rgba(104, 255, 255, 1)')
    assert.equal(altColors.primaryHC, 'rgba(26, 76, 109.5, 1)')
    assert.equal(altColors.primaryLC, 'rgba(104, 255, 255, 1)')
  })

  it('should return alternative color versions for a light scheme', () => {
    const baseColors = { primary: '#3498db', secondary: '#2ecc71' }
    const altColors: any = getAltColors(baseColors, 'light')

    assert.equal(
      Object.keys(altColors).length,
      Object.keys(baseColors).length * 6
    )

    // Check specific alternative versions
    assert.equal(altColors.primary, '#3498db')
    assert.equal(altColors.primaryA, 'rgba(52, 152, 219, 0.5)')
    assert.equal(altColors.primaryD, 'rgba(26, 76, 109.5, 1)')
    assert.equal(altColors.primaryL, 'rgba(104, 255, 255, 1)')
    assert.equal(altColors.primaryHC, 'rgba(104, 255, 255, 1)')
    assert.equal(altColors.primaryLC, 'rgba(26, 76, 109.5, 1)')
  })
})
