'use client'

/**
 * Is the code running in a client environment
 */
export const IS_CLIENT = typeof window !== 'undefined' && window.matchMedia

/**
 * Does the user prefer dark mode?
 */
export const DARK_MODE =
  IS_CLIENT && matchMedia('(prefers-color-scheme: dark)').matches

/**
 * Does the user prefer reduced motion?
 */
export const REDUCED_MOTION =
  IS_CLIENT && matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * What is the scheme based on user preferences?
 */
export const USER_SCHEME = DARK_MODE ? 'dark' : 'light'

/**
 * What is the size of the base REM in pixels?
 */
export const REM_IN_PIXELS = IS_CLIENT
  ? parseFloat(getComputedStyle(document.documentElement).fontSize)
  : 10
