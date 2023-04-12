import { PropsWithChildren } from 'react'

export interface BannerProps extends PropsWithChildren {
  /**
   * Does the banner contain a list of items?
   */
  isList?: boolean
  /**
   * Is the banner at the bottom of the page?
   */
  isBottom?: boolean
}
