import styled, { css } from 'styled-components'
import { StyledHeaderProps } from './PageHeader.types'

export const StyledHeader = styled.div<StyledHeaderProps>(
  ({ $fullWidth, $scrollTop, $isComplete }) => css`
    --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    position: fixed;
    opacity: ${$scrollTop > 24 || $isComplete ? 1 : 0};
    width: ${$fullWidth ? `${$fullWidth}px` : '100%'};
    font-size: 1.8rem;
    font-weight: bold;
    margin: 1rem 0;
    padding-bottom: 1rem;
    top: -1rem;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(8px);
    z-index: 1;
    mask-image: var(--mask);
    -webkit-mask-image: var(--mask);
  `
)

export const StyledHeaderSection = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  & [data-content='LT'] {
    font-size: 1.8rem;
  }
`
