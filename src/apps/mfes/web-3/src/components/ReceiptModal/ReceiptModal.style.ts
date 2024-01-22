import styled from 'styled-components'

export const StyledReceipt = styled.div`
  margin-top: 0.5rem;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--bgHC);

  table {
    table-layout: fixed;
    width: 100%;
    border-spacing: 1rem;
  }
`

export const StyledTitle = styled.td`
  /* display: block; */
  font-weight: bold;
  width: 22%;
  min-width: 100px;
`

export const StyledValue = styled.td`
  overflow-wrap: break-word;
  white-space: normal;
  min-width: 0;
  max-width: 100%;
  width: 78%;
  color: var(--specialLC);
`
