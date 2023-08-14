import { PropsWithChildren } from 'react'

export interface ModalScreenProps extends PropsWithChildren {
  /**
   * Show the modal, or not
   */
  isActive?: boolean
}

export interface StyledModalScreenProps extends ModalScreenProps {
  /**
   * Keep the modal in the dom or not
   */
  isVisible?: boolean
}
