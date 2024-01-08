import styled from 'styled-components'

export const LoginModalTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
  color: var(--textSoft);
`

export const LoginModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  @media (min-width: 800px) {
    margin: 1rem 5rem;
  }
`
