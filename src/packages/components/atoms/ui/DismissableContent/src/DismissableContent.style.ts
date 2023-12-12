import styled, { css } from 'styled-components'
import {
  StyledDismissableContentProps,
  StyledTimerProps,
} from './DismissableContent.style.types'
import { DEFAULT_THEME, gradient } from '@pi-lib/styles'

/**
 * The main container element for the styles
 */
export const StyledDismissableContent =
  styled.div<StyledDismissableContentProps>(({ $isVisible, $isPresent }) => {
    return css`
      border: 1px solid ${({ theme }) => theme.colors.textStrong};
      ${gradient({ name: 'alt', to: 'bottom' })}
      color: ${({ theme }) => theme.colors.bg};
      border-radius: 8px;
      padding: 16px;
      opacity: ${$isVisible ? '1' : '0'};
      margin-bottom: ${$isVisible ? '0' : '-100px'};
      display: ${$isPresent ? 'block' : 'none'};
      position: relative;
      width: clamp(50%, 65%, 75%);
      margin: auto;

      @media (max-width: 800px) {
        width: clamp(75%, 80%, 85%);
      }
    `
  })

/**
 * The button used to close the content
 */
export const StyledClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.subtle};
    }
  }
`

/**
 * The timer element for automatically closing content
 */
export const StyledTimer = styled.div<StyledTimerProps>(
  ({ $isTimerTriggered, $timerInterval }) => {
    return css`
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 8px;
      border-radius: 0 0 0 8px;
      border-bottom: 4px solid ${({ theme }) => theme.colors.outline};
      width: ${$isTimerTriggered ? '0%' : '100%'};
      transition: width ${$timerInterval / 1000}s linear;
    `
  }
)

/**
 * Addd default themes to components
 */
StyledDismissableContent.defaultProps = DEFAULT_THEME
StyledClose.defaultProps = DEFAULT_THEME
StyledTimer.defaultProps = DEFAULT_THEME
