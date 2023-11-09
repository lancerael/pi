export const themeList = [
  'andro',
  'avocado',
  'candy',
  'earth',
  'electron',
  'pebble',
  'retro',
  'rose',
  'stellar',
] as const

export type ThemeType = (typeof themeList)[number]
