import { BannerProps } from './Banner.types'

export type StyledBannerProps = Pick<
  BannerProps,
  '$wrapItems' | '$invertGradient' | '$useBackground'
>
