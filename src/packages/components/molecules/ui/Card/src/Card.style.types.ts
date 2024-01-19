import { TransientProps } from '@pi-lib/styles'
import { CardProps } from './Card.types'

export type StyledCardProps = TransientProps<
  Pick<CardProps, 'isClear' | 'isSolid' | 'boxProps'>
>

export interface StyledTopSectionProps {
  $hasIcon: boolean
}
