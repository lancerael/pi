import styled, { css } from 'styled-components'

export const StyledToastContainer = styled.div(() => {
  return css`
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
})
