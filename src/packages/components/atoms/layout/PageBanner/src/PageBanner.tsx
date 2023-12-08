import { getTransientProps } from '@pi-lib/styles'
import { StyledBanner } from './PageBanner.style'
import { BannerProps } from './PageBanner.types'

/**
 * A banner React component that can comtain spaced or flowing items
 */
export const PageBanner = ({ children, ...styleProps }: BannerProps) => (
  <StyledBanner {...getTransientProps(styleProps)}>{children}</StyledBanner>
)

export default PageBanner
