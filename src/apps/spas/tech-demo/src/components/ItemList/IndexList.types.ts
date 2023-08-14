import { PropsWithChildren } from 'react'

export interface ItemListProps extends PropsWithChildren {
  /**
   * Title for the tooltip
   */
  title?: string
  /**
   * Should the items wrap?
   */
  doWrap?: boolean
}
