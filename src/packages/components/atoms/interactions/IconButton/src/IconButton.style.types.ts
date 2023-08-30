import { IconButtonProps } from './IconButton.types'

/**
 * The props for the styled icon button
 */
export type StyledIconButtonProps = Pick<IconButtonProps, 'size'>

/**
 * The props for the styled icon
 */
export type StyledIconProps = Pick<
  IconButtonProps,
  'src' | '$isFilled' | '$isStroked'
>
