import { DismissableContentProps } from '@pi-lib/dismissable-content'

/**
 * The main prop interface for the component
 */
export interface ToastProps {
  /**
   * A collection of toasts
   */
  toasts: { [key: string]: DismissableContentProps }
}
