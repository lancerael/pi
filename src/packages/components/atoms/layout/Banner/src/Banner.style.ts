import styled, { css } from 'styled-components'
import { BannerProps } from './Banner.types'
import { gradient, shadow } from '@pi-lib/styles'

/**
 * The main container element for the banner styles
 */
export const StyledBanner = styled.div(
  ({
    wrapItems,
    invertGradient,
  }: Pick<BannerProps, 'wrapItems' | 'invertGradient'>) => css`
    ${gradient({ to: invertGradient ? 'bottom' : 'top' })}
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
    ${shadow('0px 2px', '0.1')}
  `
)
