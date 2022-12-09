import React, { FC } from 'react'
import {
  StyledCircle,
  StyledCircleRow,
  StyledLoader,
  StyledLoaderInner,
} from './Loader.style'

export const Loader: FC = () => (
  <StyledLoader title="Loading..." data-selector="pi-lib-loader">
    <StyledLoaderInner>
      <StyledCircleRow>
        <StyledCircle delay />
        <StyledCircle />
      </StyledCircleRow>
      <StyledCircleRow>
        <StyledCircle />
        <StyledCircle delay />
      </StyledCircleRow>
    </StyledLoaderInner>
  </StyledLoader>
)

export default Loader
