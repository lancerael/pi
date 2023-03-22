import styled from 'styled-components'

const format = `
  background-color: var(--input);
  color: var(--specialText);
`

export const Title = styled.h3`
  ${format}
  background-color: inherit;
  font-size: 1.5em;
`

export const CodeFormat = styled.code`
  ${format}
  display: inline-block;
  margin: 0 6px;
  font-size: 1.3em;
`
export const PreFormat = styled.pre`
  ${format}
`
