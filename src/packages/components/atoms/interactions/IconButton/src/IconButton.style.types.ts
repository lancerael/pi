import { TransientProps } from '@pi-lib/utils'
import { IconButtonProps } from './IconButton.types'
import { CustomStyledType } from '@pi-lib/styles'

/**
 * The props for the styled icon button
 */
export type StyledIconButtonProps = React.HTMLProps<HTMLAnchorElement> &
  TransientProps<
    Pick<IconButtonProps, 'fontSize' | 'isSimple' | 'isIconOnly' | 'rotate'>
  >

/**
 * The props for the styled icon
 */
export type StyledIconProps = TransientProps<
  Pick<IconButtonProps, 'fontSize' | 'isFilled' | 'isStroked'>
>

export type StyledIconType = CustomStyledType<
  HTMLButtonElement,
  StyledIconProps
>
