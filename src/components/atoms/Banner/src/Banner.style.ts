import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'

export const StyledBanner = styled.div(
  ({ isList, isBottom }: Pick<BannerProps, 'isList' | 'isBottom'>) => css`
    background: linear-gradient(
      to ${isBottom ? 'bottom' : 'top'},
      var(--dark),
      var(--specialBg)
    );
    color: var(--light);
    display: flex;
    gap: 4px;
    padding: 8px 16px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-${isBottom ? 'top' : 'bottom'}: 1px solid var(--shadow);
    ${!!isList && 'flex-wrap: wrap;'};
  `
)
