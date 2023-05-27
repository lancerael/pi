import React, { FC } from 'react'
import {
  StyledMain,
  StyledPageContent,
  StyledSidebar,
} from './PageContent.style'
import { PageContentProps } from './PageContent.types'

export const PageContent: FC<PageContentProps> = ({
  sidebar,
  children,
  maxWidth = '38%',
  isCollapsible = true,
}) => {
  return (
    <StyledPageContent>
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
