import styled from 'styled-components'

/**
 * Container for the actions styles
 */
export const StyledActionWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-around;

  @media (max-width: 801px) {
    flex-direction: column;
  }

  & button {
    width: 100%;
  }
`
