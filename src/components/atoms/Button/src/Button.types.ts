import { SelectorProp, Status } from '@pi-lib/types'

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
   * Show a special version of the button
   */
  isSpecial?: boolean
}
