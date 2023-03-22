import React, { FC } from 'react'
import {
  StyledCircle,
  StyledCircleRow,
  StyledLoader,
  StyledLoaderInner,
} from './Loader.style'
import { LoaderProps } from './Loader.types'

export const Loader: FC<LoaderProps> = ({ isLarge = false }) => (
  <StyledLoader
    title="Loading..."
    data-selector="pi-lib-loader"
    {...{ isLarge }}
  >
    <StyledLoaderInner>
      <StyledCircleRow>
        <StyledCircle delay {...{ isLarge }} />
        <StyledCircle {...{ isLarge }} />
      </StyledCircleRow>
      <StyledCircleRow>
        <StyledCircle {...{ isLarge }} />
        <StyledCircle delay {...{ isLarge }} />
      </StyledCircleRow>
    </StyledLoaderInner>
  </StyledLoader>
)

export default Loader
