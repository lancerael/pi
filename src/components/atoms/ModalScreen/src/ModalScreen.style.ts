import styled, { css } from 'styled-components'
import { ModalScreenProps } from './ModalScreen.types'

export const StyledModalScreen = styled.div(
  ({ isActive }: Pick<ModalScreenProps, 'isActive'>) => css`
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100vw;
    background: var(--mark);
    display: ${isActive ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `
)
