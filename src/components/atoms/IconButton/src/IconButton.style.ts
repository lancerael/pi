import styled from 'styled-components'

export const StyledIconButton = styled.a`
  background: var(--light);
  border: 1px solid var(--dark);
  color: dark;
  border-radius: 15%;
  padding: 4px;

  &:hover {
    background: var(--specialText);
    border-color: var(--outline);
  }
`
