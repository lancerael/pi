import { TestId } from '@pi-lib/types'
import { ReactElement } from 'react'

export interface CarouselProps extends TestId {
  /**
   * itemList
   */
  itemList: ReactElement[]
}
