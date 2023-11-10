import { StyledGrid } from './Grid.style'
import { GridProps } from './Grid.types'

/**
 * Grid component for laying out content in a grid format.
 * It wraps content in columns of 1, 2 or 4 depending on content width.
 *
 * @param {PageGridProps} props - The properties passed to the Grid component.
 * @param {React.ReactNode} props.children - The content to be displayed in a grid layout.
 * @returns {React.ReactNode} A styled grid container element.
 */
export const Grid = ({ children }: GridProps) => (
  <StyledGrid>{children} </StyledGrid>
)

export default Grid
