import { TransientProps } from '@pi-lib/utils'
import { BannerProps } from './Banner.types'

export type StyledBannerProps = TransientProps<Omit<BannerProps, 'children'>>
