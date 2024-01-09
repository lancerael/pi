// src/getTheme.test.ts
import { getTheme } from './getTheme'
import { simpleHash } from '@pi-lib/utils'

describe('getTheme', () => {
  it('should generate the theme object with default values', () => {
    const theme = getTheme()
    expect(simpleHash(theme)).toEqual('-95932051783')
  })
})
