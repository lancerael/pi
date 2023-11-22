import { TestId } from '@pi-lib/types'
import { PanLevel } from '@pi-lib/use-touch'
import { Dispatch, ReactElement } from 'react'

export interface CarouselProps extends TestId {
  /**
   * A list of items to include in the carousel
   */
  itemList: ReactElement[]
  /**
   * Can the carousel be dragged?
   */
  isDraggable?: boolean
  /**
   * Does the carousel scroll automatically?
   */
  isScroller?: boolean
  /**
   * A speed multiplier. Multiples (or divisions) of base speed 1.
   */
  speed?: number
}

export type CustomPanHandler = Dispatch<React.SetStateAction<PanLevel>>
