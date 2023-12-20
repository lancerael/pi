import ShimmerHeader from '../ShimmerHeader'
import { StyledPageSection } from './PageSection.style'

export const PageSection = ({ title, children, className, style }: any) => {
  return (
    <StyledPageSection {...{ className, style }}>
      {title && <ShimmerHeader {...{ title }} />}
      {children}
    </StyledPageSection>
  )
}

export default PageSection
