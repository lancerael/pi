import { TransientProps } from '@pi-lib/styles'
import { ModalScreenProps } from './ModalScreen.types'

/**
 * The prop interface extended for the styled modal container
 */
export interface StyledModalScreenProps
  extends TransientProps<ModalScreenProps> {
  /**
   * Keep the modal in the dom or not
   */
  $isVisible?: boolean
}
