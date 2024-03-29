import { ColorTuples } from './theme.types'

/**
 * The parameters of the base theme
 */
export const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '0.7rem',
    medium: '1rem',
    large: '1.5rem',
  },
}

/**
 * The status colours for the schemes
 */
export const statusColors = {
  light: {
    pending: '#232c75',
    error: '#b10808',
    success: '#237528',
  },
  dark: {
    pending: '#3a99e8',
    error: '#f95659',
    success: '#60aa3d',
  },
}

/**
 * A map of the available background gradients
 */
export const gradients: ColorTuples = {
  default: ['dark', 'specialShadow'],
  alt: ['text', 'textSoft'],
  special: ['special', 'specialD'],
  subtle: ['subtle', 'bg'],
}

/**
 * A map of the available box colours
 */
export const boxColors: ColorTuples = {
  default: ['textSoft', 'subtle'],
  hi: ['bg', 'text'],
  lo: ['subtle', 'textSoft'],
  alt: ['specialText', 'specialBg'],
  light: ['dark', 'light'],
}
