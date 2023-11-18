import { TransientProps } from '@pi-lib/utils'
import { LoaderProps } from './Loader.types'

/**
 * The prop interface for the styled circle
 */
export interface StyledCircleProps extends TransientProps<LoaderProps> {
  /**
   * Does the circle animation have a delay?
   */
  $hasDelay?: boolean
}
