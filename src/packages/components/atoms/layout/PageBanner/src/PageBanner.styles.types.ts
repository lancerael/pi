import { TransientProps } from '@pi-lib/utils'
import { BannerProps } from './PageBanner.types'

export type StyledBannerProps = TransientProps<Omit<BannerProps, 'children'>>
