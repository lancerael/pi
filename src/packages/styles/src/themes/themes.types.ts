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

export type ThemeName = (typeof themeList)[number]
