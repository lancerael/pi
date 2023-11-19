'use client'
export const IS_CLIENT = typeof window !== 'undefined'
export const DARK_MODE =
  IS_CLIENT && matchMedia('(prefers-color-scheme: dark)').matches
export const REDUCED_MOTION =
  IS_CLIENT && matchMedia('(prefers-reduced-motion: reduce)').matches
export const USER_SCHEME = DARK_MODE ? 'dark' : 'light'
