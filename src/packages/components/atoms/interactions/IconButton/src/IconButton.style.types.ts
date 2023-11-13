import { IconButtonProps } from './IconButton.types'
import { CustomStyledType } from '@pi-lib/styles'

/**
 * The props for the styled icon button
 */
export type StyledIconButtonProps = Pick<
  IconButtonProps,
  'size' | '$isSimpleButton' | '$rotate'
>

/**
 * The props for the styled icon
 */
export type StyledIconProps = Pick<
  IconButtonProps,
  'size' | '$isFilled' | '$isStroked'
>

export type StyledIconType = CustomStyledType<
  HTMLButtonElement,
  StyledIconProps
>
