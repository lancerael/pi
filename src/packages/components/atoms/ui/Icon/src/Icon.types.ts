import * as icons from './icons'

/**
 * The main prop interface for the component
 */
export interface IconProps {
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
  size?: string
}
