import getThemeColorVars from './getThemeColorVars'

describe('getThemeColorVars', () => {
  it('should generate CSS variables for color values', () => {
    const colors = {
      primary: '#3498db',
      secondary: '#2ecc71',
    }

    const cssVariables = getThemeColorVars(colors)

    // Assertions based on the expected output
    expect(cssVariables).toContain('--primary: #3498db;')
    expect(cssVariables).toContain('--secondary: #2ecc71;')
  })

  it('should handle an empty colors object', () => {
    const colors = {}
    const cssVariables = getThemeColorVars(colors)

    // Assertions for empty colors object
    expect(cssVariables).toBe('')
  })
})
