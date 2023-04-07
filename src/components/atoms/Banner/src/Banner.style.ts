import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'

export const StyledBanner = styled.div(
  ({ isList, isBottom }: Pick<BannerProps, 'isList' | 'isBottom'>) => css`
    background: var(--dark);
    color: var(--light);
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    border-top: ${isBottom ? '1px' : '0'} solid var(--shadow);
    border-bottom: ${isBottom ? '0' : '1px'} solid var(--shadow);
    ${!!isList && 'flex-wrap: wrap;'}
  `
)
