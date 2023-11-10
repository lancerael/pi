import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

/**
 * A banner React component that can comtain spaced or flowing items
 */
export const Banner = ({
  children,
  $useBackground = true,
  $wrapItems = false,
  $invertGradient = false,
}: BannerProps) => (
  <StyledBanner {...{ $wrapItems, $invertGradient, $useBackground }}>
    {children}
  </StyledBanner>
)

export default Banner
