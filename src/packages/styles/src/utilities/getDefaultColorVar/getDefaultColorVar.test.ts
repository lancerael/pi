import getDefaultColorVar from './getDefaultColorVar'

describe('getDefaultColorVar', () => {
  it('should return the correct default color variable', () => {
    expect(getDefaultColorVar('bg')).toEqual('var(--bg, #ffffff)')
  })
})
