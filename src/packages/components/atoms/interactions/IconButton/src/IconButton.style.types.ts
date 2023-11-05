import { IStyledComponent } from 'styled-components'
import { IconButtonProps } from './IconButton.types'
import { Substitute } from 'styled-components/dist/types'

/**
 * The props for the styled icon button
 */
export type StyledIconButtonProps = Pick<IconButtonProps, 'size'>

/**
 * The props for the styled icon
 */
export type StyledIconProps = Pick<
  IconButtonProps,
  'size' | '$isFilled' | '$isStroked'
>

export type StyledIconType = IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledIconProps>>