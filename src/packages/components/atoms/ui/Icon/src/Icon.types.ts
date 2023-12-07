import * as icons from './icons'
import { TestId } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface IconProps extends React.HTMLProps<HTMLElement>, TestId {
  /**
   * The name of the icon
   */
  iconName: keyof typeof icons
  /**
   * The color of the icon
   */
  color?: string
  /**
   * If the icon brightness should be boosted
   */
  isBrighter?: boolean
  /**
   * The size of the icon
   */
  iconSize?: string
}
