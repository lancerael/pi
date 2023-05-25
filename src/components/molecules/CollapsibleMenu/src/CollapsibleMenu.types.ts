import type { MenuTriggerProps } from 'react-stately'

export interface CollapsibleMenuProps {
  /**
   * The items contained in the menu
   */
  items: any[]
  /**
   * Use special style fof settings menu
   */
  isSettings?: boolean
  /**
   * Default props for the menu state
   */
  menutriggerProps?: MenuTriggerProps
}
