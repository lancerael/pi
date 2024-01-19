import { DismissableContentProps } from '@pi-lib/dismissable-content'

export interface ModalProps extends DismissableContentProps {
  /**
   * Can the modal be dismissed by clicking anywhere outside the modal?
   */
  isWindowDismissable?: boolean
}
