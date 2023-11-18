import { LinkProps as RouterLinkProps } from 'react-router-dom'
import { TestId } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface LinkProps extends React.HTMLProps<HTMLAnchorElement>, TestId {
  /**
   * Is it an external link?
   */
  isExternal?: boolean
  /**
   * Is it main navigation link?
   */
  isMain?: boolean
  /**
   * Is it inactive?
   */
  isInactive?: boolean
  /**
   * Is it a react router link?
   */
  to?: RouterLinkProps['to']
}
