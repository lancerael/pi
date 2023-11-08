import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

/**
 * A banner React component that can be used for a header or footer
 */
export const Banner = ({
  children,
  $wrapItems = false,
  $invertGradient = false,
}: BannerProps) => (
  <StyledBanner {...{ $wrapItems, $invertGradient }}>{children}</StyledBanner>
)

export default Banner
