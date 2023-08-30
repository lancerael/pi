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
   * The size of the icon
   */
  size?: string
}
