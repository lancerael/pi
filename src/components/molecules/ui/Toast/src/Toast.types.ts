import { DismissableContentProps } from '@pi-lib/dismissable-content'

export interface ToastProps {
  /**
   * A collection of toasts
   */
  toasts: { [key: string]: DismissableContentProps }
}
