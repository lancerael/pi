import { PropsWithChildren } from 'react'

/**
 * The main prop interface for the component
 */
export interface DismissableContentProps extends PropsWithChildren {
  /**
   * An optional title for the content
   */
  title?: string
  /**
   * The external override for activating or dismissing the content
   */
  isActive?: boolean
  /**
   * Can the user dismiss the content?
   */
  isDismissable?: boolean
  /**
   * Does the content expire with a timer?
   */
  timerInterval?: number
  /**
   * The callback for when the user dismisses the content
   */
  dismissCallback?: () => void
  /**
   * A ref object for the content
   */
  ref?: React.Ref<HTMLDivElement>
}
