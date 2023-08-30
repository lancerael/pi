import styled from 'styled-components'

/**
 * Main container element for the styles of the toast
 */
export const StyledToastContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  margin: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 9999;
`
