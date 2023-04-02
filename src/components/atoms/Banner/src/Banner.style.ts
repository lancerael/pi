import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'

export const StyledBanner = styled.div(
  ({
    isCentered,
    isBottom,
  }: Pick<BannerProps, 'isCentered' | 'isBottom'>) => css`
    background: var(--dark);
    color: var(--light);
    display: flex;
    padding: 8px 16px;
    justify-content: space-${isCentered ? 'around' : 'between'};
    align-items: center;
    border-top: ${isBottom ? '01px' : '0'} solid var(--shadow);
    border-bottom: ${isBottom ? '0' : '1px'} solid var(--shadow);
  `
)
