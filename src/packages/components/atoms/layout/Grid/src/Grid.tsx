import { StyledGrid } from './Grid.style'
import { GridProps } from './Grid.types'

/**
 *
 * @returns
 */
export const Grid = ({ children }: GridProps) => (
  <StyledGrid>{children} </StyledGrid>
)

export default Grid
