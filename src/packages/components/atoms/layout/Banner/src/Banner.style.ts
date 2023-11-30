import styled, { css } from 'styled-components'
import { gradient, shadow } from '@pi-lib/styles'
import { StyledBannerProps } from './Banner.styles.types'

/**
 * The main container element for the banner styles
 */
export const StyledBanner = styled.div<StyledBannerProps>(
  ({ $shouldWrapItems, $shouldInvertGradient, $hasBackground }) => css`
    color: var(--${$hasBackground ? 'light' : 'textSoft'});
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    position: relative;
    justify-content: space-between;
    align-items: center;
    overflow-x: clip;
    ${!!$shouldWrapItems && 'flex-wrap: wrap;'};
    ${$hasBackground &&
    css`
      border-${
        $shouldInvertGradient ? 'top' : 'bottom'
      }: 1px solid var(--specialShadow);
      ${gradient({ to: $shouldInvertGradient ? 'bottom' : 'top' })}
      ${shadow({ offset: '0px 2px', opacity: '0.1' })}
    `}
  `
)
