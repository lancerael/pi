import { PropsWithChildren } from 'react'

export interface TooltipProps extends PropsWithChildren {
  /**
   * The visibility of the tooltip
   */
  isActive?: boolean
  /**
   * The x position of the tooltip
   */
  x?: number
  /**
   * The y position of the tooltip
   */
  y?: number
}
