import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 1036px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 636px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`
