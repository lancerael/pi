import type { MenuTriggerProps } from 'react-stately'
import * as icons from './assets'

export interface CollapsibleMenuProps {
  /**
   * The items contained in the menu
   */
  items: any[]
  /**
   * The title for the icon tooltip
   */
  title?: string
  /**
   * Define a special icon to use
   */
  icon?: keyof typeof icons
  /**
   * Default props for the menu state
   */
  menutriggerProps?: MenuTriggerProps
}
