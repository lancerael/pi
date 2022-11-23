import { FC } from 'react'
import { StyledLoader, StyledLoaderCircle } from './Loader.style'

export const Loader: FC = () => (
  <StyledLoader title='Loading...' data-selector='pi-lib-loader'>
    <StyledLoaderCircle/>
  </StyledLoader>
)

export default Loader
