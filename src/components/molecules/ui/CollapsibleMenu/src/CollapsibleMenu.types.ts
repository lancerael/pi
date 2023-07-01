import { IconProps } from '@pi-lib/icon/src/Icon.types'
import type { MenuTriggerProps } from 'react-stately'

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
  iconName?: IconProps['iconName']
  /**
   * Default props for the menu state
   */
  menutriggerProps?: MenuTriggerProps
}
