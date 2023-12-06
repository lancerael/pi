import ShimmerHeader from '../ShimmerHeader'
import { StyledPageSection } from './PageSection.style'

export const PageSection = ({ title, children }: any) => {
  return (
    <StyledPageSection>
      {title && <ShimmerHeader {...{ title }} />}
      {children}
    </StyledPageSection>
  )
}

export default PageSection
