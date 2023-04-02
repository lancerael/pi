import React, { FC, PropsWithChildren } from 'react'
import { StyledBanner } from './Banner.style'
import { BannerProps } from './Banner.types'

export const Banner: FC<BannerProps> = ({ children, isCentered, isBottom }) => (
  <StyledBanner {...{ isCentered, isBottom }}>{children}</StyledBanner>
)

export default Banner
