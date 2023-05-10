import { PropsWithChildren } from 'react'

export interface PageContentProps extends PropsWithChildren {
  /**
   * The content of the sidebar
   */
  sidebar?: JSX.Element
  /**
   * The max width of the sidebar
   */
  maxWidth?: string
  /**
   * Is the sidebar responsively collapsible
   */
  isCollapsible?: boolean
}
