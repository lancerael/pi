import React, { FC } from 'react'
import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

export const Banner: FC<BannerProps> = ({ children, isList, isBottom }) => (
  <StyledBanner {...{ isList, isBottom }}>{children}</StyledBanner>
)

export default Banner
