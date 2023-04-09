import { PropsWithChildren } from 'react'

export interface LinkProps extends PropsWithChildren {
  /**
   * The description of the prop
   */
  href: string
  isExternal?: boolean
}
