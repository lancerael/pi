import { Status } from '@pi-lib/types'

export interface ButtonProps
  extends Pick<
    React.HTMLProps<HTMLButtonElement>,
    'onClick' | 'onMouseOver' | 'onMouseOut' | 'disabled' | 'children'
  > {
  /**
   * The data-selector for the button
   */
  dataSelector?: string
  /**
   * It denotes the status of the button
   */
  status?: Status
  /**
   * Set the min width for the button
   */
  minWidth?: string
}
