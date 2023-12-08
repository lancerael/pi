import { TransientProps } from '@pi-lib/styles'
import { BannerProps } from './PageBanner.types'

export type StyledBannerProps = TransientProps<Omit<BannerProps, 'children'>>
