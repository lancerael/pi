import { getTransientProps } from '@pi-lib/utils'
import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

/**
 * A banner React component that can comtain spaced or flowing items
 */
export const Banner = ({ children, ...styleProps }: BannerProps) => (
  <StyledBanner {...getTransientProps(styleProps)}>{children}</StyledBanner>
)

export default Banner
