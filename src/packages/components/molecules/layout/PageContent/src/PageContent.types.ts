import { PropsWithChildren } from 'react'

/**
 * The main prop interface for the component
 */
export interface PageContentProps
  extends PropsWithChildren,
    React.HTMLProps<HTMLInputElement> {
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
  /**
   * Is the full page scrollable, or just the content
   */
  isFullScroller?: boolean
}
