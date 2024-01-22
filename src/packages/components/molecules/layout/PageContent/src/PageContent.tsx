import { getTransientProps } from '@pi-lib/styles'
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
  children,
  sidebar,
  maxWidth = '38%',
  isCollapsible = true,
  isFullScroller = false,
  ...props
}: PageContentProps) => {
  return (
    <StyledPageContent
      {...{ ...props, ...getTransientProps({ isCollapsible }) }}
    >
      {!!sidebar && (
        <StyledSidebar {...getTransientProps({ maxWidth, isCollapsible })}>
          {sidebar}
        </StyledSidebar>
      )}
      <StyledMain {...getTransientProps({ isFullScroller })}>
        {children}
      </StyledMain>
    </StyledPageContent>
  )
}

export default PageContent
