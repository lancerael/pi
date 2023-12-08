import { TransientProps } from '@pi-lib/styles'
import { PageContentProps } from './PageContent.types'

/**
 * The prop interface for the sidebar div
 */
export type StyledSidebarProps = TransientProps<
  Pick<PageContentProps, 'isCollapsible' | 'maxWidth'>
>
