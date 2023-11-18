import { TransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'

/**
 * The props for the styled icon button
 */
export type StyledIconButtonProps = React.HTMLProps<HTMLAnchorElement> &
  TransientProps<Pick<IconButtonProps, 'isSimple'>>
