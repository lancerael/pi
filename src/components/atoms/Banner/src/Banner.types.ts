import { PropsWithChildren } from 'react'

export interface BannerProps extends PropsWithChildren {
  /**
   * Does the banner contain a list of items that should wrap?
   */
  wrapItems?: boolean
  /**
   * Does the banner need an inversion of the gradient?
   */
  invertGradient?: boolean
}
