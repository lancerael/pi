import { StyledPageGrid } from './PageGrid.style'
import { PageGridProps } from './PageGrid.types'
import { getTransientProps } from '@pi-lib/utils'

/**
 * PageGrid component for laying out content in a grid format. It is used to create page
 * margins with optional full width styles. All direct children will conform to page layout.
 * Add a class of `pi-page-grid-full` on a direct descendent to use full width styles.
 *
 * @param {PageGridProps} props - The properties passed to the PageGrid component.
 * @param {React.ReactNode} props.children - The content to be displayed in a grid layout.
 * @returns {React.ReactNode} A styled grid container element.
 */
export const PageGrid = ({ width = 1280, children }: PageGridProps) => (
  <StyledPageGrid {...getTransientProps({ width })}>{children}</StyledPageGrid>
)

export default PageGrid
