import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps } from './IconButton.style.types'

/**
 * The main styles for the icon button
 */
export const StyledIconButton = styled.a<StyledIconButtonProps>(
  ({ disabled }) => css`
    ${disabled && 'pointer-events: none;'}
    cursor: pointer;
    display: inline-block;
    ${box()}
    background: var(--specialText);
    padding: 4px;

    &:hover {
      background: var(--outline);
      border-color: var(--special);
    }
  `
)
