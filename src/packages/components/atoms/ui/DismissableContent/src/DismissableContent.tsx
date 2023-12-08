import { FC, forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import {
  StyledDismissableContent,
  StyledClose,
  StyledTimer,
} from './DismissableContent.style'
import { DismissableContentProps } from './DismissableContent.types'
import Icon from '@pi-lib/icon'
import { getTransientProps } from '@pi-lib/styles'

/**
 * `DismissableContent` is a component that represents internal content for a modal or a toast.
 * It can be dismissed internally or externally. The component is customizable with various
 * props, allowing for control over its visibility, dismissal behavior, and timer-based auto-dismissal.
 *
 * @component
 * @param {DismissableContentProps} props - The props for the DismissableContent component.
 * @returns {React.ReactNode} The rendered JSX for the DismissableContent component.
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
    const [isPresent, setIsPresent] = useState(false)
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
        data-testid="pi-dismissable-content"
        ref={ref as React.RefObject<HTMLDivElement>}
        {...getTransientProps({ isVisible, isPresent })}
      >
        {isDismissable && (
          <StyledClose onClick={dismiss}>
            <Icon iconName="Close" color="var(--shadow)" />
          </StyledClose>
        )}
        {children}
        {!!timerInterval && (
          <StyledTimer
            {...getTransientProps({ isTimerTriggered, timerInterval })}
          />
        )}
      </StyledDismissableContent>
    )
  }
)

export default DismissableContent
