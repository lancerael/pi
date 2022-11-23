import React, { FC } from 'react'
import { StyledLoaderCircle, StyledLoader } from './Loader.style'

export const Loader: FC = () => (
  <StyledLoader title='Loading...' data-selector='pi-lib-loader'>
    <StyledLoaderCircle/>
  </StyledLoader>
)

export default Loader
