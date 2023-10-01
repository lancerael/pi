import {
  StyledMain,
  StyledPageContent,
  StyledSidebar,
} from './PageContent.style'
import { PageContentProps } from './PageContent.types'

/**
 * A React component for a page layout with a sidebar
 */
export const PageContent = ({
  sidebar,
  children,
  maxWidth = '38%',
  isCollapsible = true,
}: PageContentProps) => {
  return (
    <StyledPageContent {...{ isCollapsible }}>
      {!!sidebar && (
        <StyledSidebar {...{ maxWidth, isCollapsible }}>
          {sidebar}
        </StyledSidebar>
      )}
      <StyledMain>{children}</StyledMain>
    </StyledPageContent>
  )
}

export default PageContent
