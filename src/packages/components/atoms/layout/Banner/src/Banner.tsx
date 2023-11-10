import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

/**
 * A banner React component that can be used for a header or footer
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
