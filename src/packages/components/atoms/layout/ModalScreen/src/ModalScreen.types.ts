import { PropsWithChildren } from 'react'

/**
 * The main prop interface for the component
 */
export interface ModalScreenProps extends PropsWithChildren {
  /**
   * Show the modal, or not
   */
  isActive?: boolean
  /**
   * Does the modal disable clicks
   */
  isUnclickable?: boolean
}
