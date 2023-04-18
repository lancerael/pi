import { PropsWithChildren } from 'react'

export interface ModalScreenProps extends PropsWithChildren {
  /**
   * Show the modal, or not
   */
  isActive?: boolean
}
