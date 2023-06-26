import { FC, forwardRef, useEffect, useState } from 'react'
import {
  StyledDismissableContent,
  StyledClose,
} from './DismissableContent.style'
import { DismissableContentProps } from './DismissableContent.types'
import { Close } from './Close'

/**
 * Internal content for a modal or a toast, that can be dismissed internally
 */
export const DismissableContent: FC<DismissableContentProps> = forwardRef(
  (
    { children, isDismissed = false, isDismissable = true, dismissCallback },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isPresent, setIsPresent] = useState(true)

    // Handle internal dismissal
    const onDismiss = () => {
      if (isVisible) {
        setIsVisible(false)
        setTimeout(() => {
          setIsPresent(false)
          dismissCallback?.()
        }, 500)
      }
    }

    // Handle external dismissal
    useEffect(() => {
      if (isDismissed) {
        onDismiss()
      } else {
        setIsPresent(true)
        setIsVisible(true)
      }
    }, [isDismissed])

    return (
      <StyledDismissableContent
        ref={ref as React.RefObject<HTMLDivElement>}
        {...{ isVisible, isPresent }}
      >
        {isDismissable && (
          <StyledClose onClick={onDismiss}>
            <Close />
          </StyledClose>
        )}
        {children}
      </StyledDismissableContent>
    )
  }
)

export default DismissableContent
