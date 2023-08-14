import styled from 'styled-components'

/**
 * The wrapper for the action
 */
export const StyledAction = styled.div`
  width: 100%;
`

/**
 * The responsive condition to hide on narrrow devices
 */
export const StyledIconButton = styled.div`
  @media (max-width: 801px) {
    display: none;
  }
`

/**
 * The responsive condition to hide on wide devices
 */
export const StyledButton = styled.div`
  width: !100%;
  @media (min-width: 800px) {
    display: none;
  }
`
