import styled, { css } from 'styled-components'
import { gradient, shadow } from '@pi-lib/styles'
import { StyledBannerProps } from './Banner.styles.types'

/**
 * The main container element for the banner styles
 */
export const StyledBanner = styled.div<StyledBannerProps>(
  ({ $wrapItems, $invertGradient, $useBackground }) => css`
    ${$useBackground
      ? gradient({ to: $invertGradient ? 'bottom' : 'top' })
      : ''}
    color: var(--light);
    display: flex;
    gap: 4px;
    padding: 8px 16px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    ${$useBackground
      ? `
      border-${
        $invertGradient ? 'top' : 'bottom'
      }: 1px solid var(--specialShadow);
    `
      : ''}
    ${!!$wrapItems && 'flex-wrap: wrap;'};
    overflow-x: clip;
    ${shadow('0px 2px', '0.1')}
  `
)
