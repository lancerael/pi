import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import {
  StyledDismissableContent,
  StyledClose,
  StyledTimer,
  StyledTitle,
  StyledHeader,
} from './DismissableContent.style'
import { DismissableContentProps } from './DismissableContent.types'
import Icon from '@pi-lib/icon'
import { getDefaultColorVar, getTransientProps } from '@pi-lib/styles'

/**
 * `DismissableContent` is a component that represents internal content for a modal or a toast.
 * It can be dismissed internally or externally. The component is customizable with various
 * props, allowing for control over its visibility, dismissal behavior, and timer-based auto-dismissal.
 *
 * @component
 * @param {DismissableContentProps} props - The props for the DismissableContent component.
 * @returns {React.ReactNode} The rendered JSX for the DismissableContent component.
 */
export const DismissableContent = forwardRef(
  (
    {
      children,
      title,
      isActive = true,
      isDismissable = true,
      timerInterval = 0,
      dismissCallback,
    }: DismissableContentProps,
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(isActive)
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
      if (!isActive) {
        dismiss()
      } else {
        setIsPresent(true)
        setIsVisible(true)
      }
    }, [isActive])

    // Handle timer interval
    useEffect(() => {
      if (isVisible && !!timerInterval) {
        requestAnimationFrame(() => {
          setIsTimerTriggered(true)
        })
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
        {(title || isDismissable) && (
          <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            {isDismissable && (
              <StyledClose onClick={dismiss} title="Close modal">
                <Icon iconName="Close" color={getDefaultColorVar('shadow')} />
              </StyledClose>
            )}
          </StyledHeader>
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
