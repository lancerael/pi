export const themeList = [
  'pebble',
  'rose',
  'electron',
  'avocado',
  'andro',
] as const

export type ThemeType = (typeof themeList)[number]
