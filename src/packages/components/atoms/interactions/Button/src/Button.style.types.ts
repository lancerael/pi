import { ButtonProps } from './Button.types'
import { TransientProps } from '@pi-lib/utils'

/**
 * The props for the styled button
 */
export type StyledButtonProps = React.HTMLProps<HTMLButtonElement> &
  TransientProps<Pick<ButtonProps, 'status' | 'isCompact' | 'isInverted'>>
