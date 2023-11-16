import { PropsWithChildren } from 'react'

/**
 * The main prop interface for the component
 */
export interface BannerProps extends PropsWithChildren {
  /**
   * Does the banner contain a list of items that should wrap?
   */
  shouldWrapItems?: boolean
  /**
   * Does the banner need a background gradient?
   */
  hasBackground?: boolean
  /**
   * Does the banner need an inversion of the gradient?
   */
  shouldInvertGradient?: boolean
}
