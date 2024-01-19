import styled, { css } from 'styled-components'
import {
  StyledDismissableContentProps,
  StyledTimerProps,
} from './DismissableContent.style.types'
import { DEFAULT_THEME, gradient, shadow } from '@pi-lib/styles'

/**
 * The main container element for the styles
 */
export const StyledDismissableContent =
  styled.div<StyledDismissableContentProps>(({ $isVisible, $isPresent }) => {
    return css`
      border: 1px solid ${({ theme }) => theme.colors.border};
      ${gradient({ name: 'subtle', to: 'bottom' })}
      ${shadow()}
      color: ${({ theme }) => theme.colors.textStrong};
      border-radius: 8px;
      padding: 1rem;
      opacity: ${$isVisible ? '1' : '0'};
      margin-bottom: ${$isVisible ? '0' : '-100px'};
      display: ${$isPresent ? 'block' : 'none'};
      position: relative;
      width: clamp(50%, 55%, 60%);
      margin: auto;

      @media (max-width: 800px) {
        width: clamp(75%, 80%, 85%);
      }
    `
  })

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -0.5rem;
`

export const StyledTitle = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  flex-grow: 1;
  color: var(--textSoft);
`

/**
 * The button used to close the content
 */
export const StyledClose = styled.div`
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.colors.textStrong};
  }

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.text};
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
