import styled, { css } from 'styled-components'
import { StyledHeaderProps, StyledHeaderSectionProps } from './PageHeader.types'

export const StyledHeader = styled.div<StyledHeaderProps>(
  ({ $fullWidth, $headerState, $isComplete }) => css`
    --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    position: fixed;
    opacity: ${$headerState !== 'hidden' || $isComplete ? 1 : 0};
    width: ${$fullWidth ? `${$fullWidth}px` : '100%'};
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0;
    padding: 0.5rem 0 2rem;
    top: -1rem;
    box-sizing: border-box;
    background: rgba(0, 0, 0, ${$headerState === 'dark' ? 0.35 : 0});
    backdrop-filter: blur(8px);
    z-index: 1;
    mask-image: var(--mask);
    -webkit-mask-image: var(--mask);
  `
)

export const StyledHeaderSection = styled.a<StyledHeaderSectionProps>(
  ({ $isAndroid }) => css`
    display: flex;
    gap: 0.3rem;
    align-items: center;

    & [data-content='LT'] {
      font-size: 1.7rem;
      height: 1.7rem;
      line-height: 2.1rem;
      ${$isAndroid && 'margin-top: 0.4rem;'}

      @media (width > 400px) {
        line-height: auto;
        height: auto;
      }
    }
  `
)

export const StyledHeaderInner = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`
