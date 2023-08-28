export interface StyledDismissableContentProps {
  /**
   * The toast is visible (opacity)
   */
  isVisible: boolean
  /**
   * The toast is present (display)
   */
  isPresent: boolean
}

export interface StyledTimerProps {
  /**
   * If the timer is triggered and the transition should take effect
   */
  isTimerTriggered: boolean
  /**
   * The interval for the transition
   */
  timerInterval: number
}
