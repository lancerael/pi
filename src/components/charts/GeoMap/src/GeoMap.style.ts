import styled from 'styled-components'

export const StyledGeoMapContainer = styled.div`
  background: var(--bg);
  border: 1px solid var(--border);
  margin-right: 8px;
  position: relative;

  & .label {
    position: absolute;
    font-weight: bold;
    bottom: 4px;
    text-align: center;
    font-size: 0.8em;
    width: 100%;
  }
`
