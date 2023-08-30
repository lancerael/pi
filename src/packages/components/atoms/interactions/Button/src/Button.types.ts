import { SelectorProp, Status } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface ButtonProps
  extends Pick<
      React.HTMLProps<HTMLButtonElement>,
      | 'onPointerUp'
      | 'onMouseOver'
      | 'onMouseOut'
      | 'disabled'
      | 'children'
      | 'title'
    >,
    SelectorProp {
  /**
   * Use styles for special states
   */
  status?: Status
  /**
   * Show a compact version of the button
   */
  isCompact?: boolean
  /**
   * Show a special inverted version of the button
   */
  isInverted?: boolean
}
