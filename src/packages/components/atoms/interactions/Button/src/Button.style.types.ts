import { ThemedComponent } from '@pi-lib/styles'
import { ButtonProps } from './Button.types'
import { TransientProps } from '@pi-lib/utils'

/**
 * The props for the styled button
 */
export type StyledButtonProps = React.HTMLProps<HTMLButtonElement> &
  ThemedComponent &
  TransientProps<
    Pick<
      ButtonProps,
      'status' | 'isCompact' | 'isInverted' | 'isShadowed' | 'buttonSize'
    >
  >
