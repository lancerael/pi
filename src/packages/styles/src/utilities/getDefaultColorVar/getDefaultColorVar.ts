import { DEFAULT_THEME } from '../../constants'

export const getDefaultColorVar = (color: string) =>
  `var(--${color}, ${DEFAULT_THEME.theme.colors[color]})`

export default getDefaultColorVar
