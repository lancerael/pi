import styled from 'styled-components'

export const StyledActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`
