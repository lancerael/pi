import styled, { css } from 'styled-components'
import { StyledModalScreenProps } from './ModalScreen.types'

export const StyledModalScreen = styled.div(
  ({ isActive, isVisible }: StyledModalScreenProps) => css`
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
