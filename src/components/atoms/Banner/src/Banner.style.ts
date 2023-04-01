import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'

export const StyledBanner = styled.div(
  ({ isCentered }: Pick<BannerProps, 'isCentered'>) => css`
    background: var(--dark);
    color: var(--light);
    display: flex;
    padding: 8px 16px;
    justify-content: space-${isCentered ? 'around' : 'between'};
    align-items: center;
  `
)
