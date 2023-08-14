import { PropsWithChildren } from 'react'

export interface DismissableContentProps extends PropsWithChildren {
  /**
   * The external override for dimsissing the content
   */
  isDismissed?: boolean
  /**
   * Can the user dismiss the content?
   */
  isDismissable?: boolean
  /**
   * The callback for when the user dismisses the content
   */
  dismissCallback?: () => void
  /**
   * A ref object for the content
   */
  ref?: React.Ref<HTMLDivElement>
}
