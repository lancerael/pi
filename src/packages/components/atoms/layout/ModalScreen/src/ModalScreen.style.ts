import styled, { css } from 'styled-components'
import { StyledModalScreenProps } from './ModalScreen.style.types'

/**
 * The main container element for the modal screen styles
 */
export const StyledModalScreen = styled.div<StyledModalScreenProps>(
  ({ isActive, isVisible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(${isActive ? '5' : '0'}px);
    height: 100vh;
    width: 100vw;
    background: var(--mark);
    display: ${isVisible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `
)
