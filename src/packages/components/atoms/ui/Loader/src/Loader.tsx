import {
  StyledCircle,
  StyledCircleRow,
  StyledLoader,
  StyledLoaderInner,
} from './Loader.style'
import { LoaderProps } from './Loader.types'
import { getTransientProps } from '@pi-lib/utils'

/**
 * Basic loading spinner React component
 */
export const Loader = ({ isLarge = false }: LoaderProps) => {
  const size = getTransientProps({ isLarge })
  return (
    <StyledLoader title="Loading..." data-testid="pi-lib-loader" {...size}>
      <StyledLoaderInner>
        <StyledCircleRow>
          <StyledCircle $hasDelay {...size} />
          <StyledCircle {...size} />
        </StyledCircleRow>
        <StyledCircleRow>
          <StyledCircle {...size} />
          <StyledCircle $hasDelay {...size} />
        </StyledCircleRow>
      </StyledLoaderInner>
    </StyledLoader>
  )
}

export default Loader
