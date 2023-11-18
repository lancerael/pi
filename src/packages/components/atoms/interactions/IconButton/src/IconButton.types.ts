import { CustomIconProps } from '@pi-lib/custom-icon/src/CustomIcon.types'
import { TestId } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface IconButtonProps
  extends React.HTMLProps<HTMLAnchorElement>,
    TestId {
  /**
   * The source path/URL for the image
   */
  src: CustomIconProps['src']
  /**
   * Should it open in an new window
   */
  isExternal?: boolean
  /**
   * String for the title attribute
   */
  title?: string
  /**
   * Props for the CustomIcon
   */
  iconProps?: Omit<CustomIconProps, 'src'>
}
