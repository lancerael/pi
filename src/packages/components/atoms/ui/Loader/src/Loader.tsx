import {
  StyledCircle,
  StyledCircleRow,
  StyledLoader,
  StyledLoaderInner,
} from './Loader.style'
import { LoaderProps } from './Loader.types'

/**
 * Basic loading spinner React component
 */
export const Loader = ({ isLarge = false }: LoaderProps) => (
  <StyledLoader title="Loading..." data-testid="pi-lib-loader" {...{ isLarge }}>
    <StyledLoaderInner>
      <StyledCircleRow>
        <StyledCircle hasDelay {...{ isLarge }} />
        <StyledCircle {...{ isLarge }} />
      </StyledCircleRow>
      <StyledCircleRow>
        <StyledCircle {...{ isLarge }} />
        <StyledCircle hasDelay {...{ isLarge }} />
      </StyledCircleRow>
    </StyledLoaderInner>
  </StyledLoader>
)

export default Loader
