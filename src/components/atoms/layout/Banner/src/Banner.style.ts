import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'

export const StyledBanner = styled.div(
  ({
    wrapItems,
    invertGradient,
  }: Pick<BannerProps, 'wrapItems' | 'invertGradient'>) => css`
    background: linear-gradient(
      to ${invertGradient ? 'bottom' : 'top'},
      var(--dark),
      var(--specialShadow)
    );
    color: var(--light);
    display: flex;
    gap: 4px;
    padding: 8px 16px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-${invertGradient ? 'top' : 'bottom'}: 1px solid var(--specialShadow);
    ${!!wrapItems && 'flex-wrap: wrap;'};
    overflow-x: clip;
  `
)
