import { TestId } from '@pi-lib/types'
import { TouchState } from '@pi-lib/use-touch'
import { Dispatch } from 'react'

export interface CarouselProps extends TestId {
  /**
   * A list of items to include in the carousel
   */
  itemList: JSX.Element[]
  /**
   * Can the carousel be dragged?
   */
  isDraggable?: boolean
  /**
   * Does the carousel scroll automatically?
   */
  isScroller?: boolean | null
  /**
   * A speed multiplier. Multiples (or divisions) of base speed 1.
   */
  speed?: number
}

export type CustomPanHandler = Dispatch<React.SetStateAction<TouchState>>
