import styled from 'styled-components'

export const StyledCarousel = styled.div`
  --mask: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask: var(--mask);
  mask: var(--mask);
  padding: 1rem;
  overflow: hidden;
`

export const StyledCarouselInner = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: max-content;
  flex-wrap: nowrap;
  display: flex;
  gap: 1rem;
  cursor: grab;
`

export const StyledCarouselItem = styled.li``
