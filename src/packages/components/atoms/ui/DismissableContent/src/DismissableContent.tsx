import { FC, forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import {
  StyledDismissableContent,
  StyledClose,
  StyledTimer,
} from './DismissableContent.style'
import { DismissableContentProps } from './DismissableContent.types'
import Icon from '@pi-lib/icon'

/**
 * Internal content for a modal or a toast, that can be dismissed internally
 */
export const DismissableContent: FC<DismissableContentProps> = forwardRef(
  (
    {
      children,
      isDismissed = false,
      isDismissable = true,
      timerInterval = 0,
      dismissCallback,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(!isDismissed)
    const [isPresent, setIsPresent] = useState(true)
    const [isTimerTriggered, setIsTimerTriggered] = useState(false)
    const transitionTimer = useRef<NodeJS.Timer>()

    /**
     * Handle internal dismissal
     *
     */
    const dismiss = useCallback(() => {
      if (isVisible) {
        setIsVisible(false)
        setTimeout(() => {
          setIsPresent(false)
          dismissCallback?.()
          clearTimeout(transitionTimer.current)
        }, 500)
      }
    }, [isVisible, transitionTimer])

    // Handle external dismissal
    useEffect(() => {
      if (isDismissed) {
        dismiss()
      } else {
        setIsPresent(true)
        setIsVisible(true)
      }
    }, [isDismissed])

    // Handle timer interval
    useEffect(() => {
      if (isVisible && !!timerInterval) {
        setIsTimerTriggered(true)
        transitionTimer.current = setTimeout(() => {
          dismiss()
        }, timerInterval)
      }
    }, [isVisible])

    return (
      <StyledDismissableContent
        ref={ref as React.RefObject<HTMLDivElement>}
        {...{ isVisible, isPresent }}
      >
        {isDismissable && (
          <StyledClose onClick={dismiss}>
            <Icon iconName="Close" color="var(--shadow)" />
          </StyledClose>
        )}
        {children}
        {!!timerInterval && (
          <StyledTimer {...{ isTimerTriggered, timerInterval }} />
        )}
      </StyledDismissableContent>
    )
  }
)

export default DismissableContent
