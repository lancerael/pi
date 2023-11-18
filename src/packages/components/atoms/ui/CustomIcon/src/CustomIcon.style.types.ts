import { TransientProps } from '@pi-lib/utils'
import { CustomStyledType } from '@pi-lib/styles'
import { CustomIconProps } from './CustomIcon.types'

export type StyledCustomIconProps = TransientProps<Omit<CustomIconProps, 'src'>>

export type StyledIconType = CustomStyledType<
  HTMLElement,
  StyledCustomIconProps
>
