import { TransientProps } from '@pi-lib/utils'
import { CardProps } from './Card.types'

export type StyledCardProps = TransientProps<Pick<CardProps, 'isClear'>>
