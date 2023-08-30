import { FC } from 'react'
import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

/**
 * A banner React component that can be used for a header or footer
 */
export const Banner: FC<BannerProps> = ({
  children,
  wrapItems = false,
  invertGradient = false,
}) => <StyledBanner {...{ wrapItems, invertGradient }}>{children}</StyledBanner>

export default Banner
