import React from 'react'
import { StyledLoader, StyledLoaderCircle } from './Loader.style'

export const Loader = () => (
  <StyledLoader title='Loading...' data-selector='pi-lib-loader'>
    <StyledLoaderCircle/>
    <StyledLoaderCircle secondary/>
  </StyledLoader>
)

export default Loader
