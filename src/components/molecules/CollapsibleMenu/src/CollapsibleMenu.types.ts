import type { MenuTriggerProps } from 'react-stately'

export interface CollapsibleMenuProps {
  /**
   * The items contained in the menu
   */
  items: any[]
  /**
   * Define a special icon to use
   */
  icon?: 'hamburger' | 'cog' | 'chevron'
  /**
   * Default props for the menu state
   */
  menutriggerProps?: MenuTriggerProps
}
