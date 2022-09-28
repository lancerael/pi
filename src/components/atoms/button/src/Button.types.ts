import { Status } from '@pi/types'


export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'style'> {
  /**
   * The data-selector for the button
   */
  dataSelector?: string
  /**
   * It denotes the status of the button
   */
  status?: Status
}
