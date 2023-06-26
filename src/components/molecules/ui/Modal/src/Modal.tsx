import { FC, useEffect, useRef, useState } from 'react'
import ModalScreen from '@pi-lib/modal-screen'
import DismissableContent, {
  DismissableContentProps,
} from '@pi-lib/dismissable-content'
import { useWindowClick } from '@pi-lib/utils'

/**
 * Modal for custom content that allows dismissal internally or externally
 */
export const Modal: FC<DismissableContentProps> = ({
  children,
  isDismissed = false,
  isDismissable = true,
  dismissCallback,
}) => {
  // Used to manage closing internally
  const [isActive, setIsActive] = useState(!isDismissed)
  const dismiss = (isBeingDismissed: boolean) => {
    setIsActive(!isBeingDismissed)
    isBeingDismissed && dismissCallback?.()
  }

  // Used to restrict page closing to modal screen
  const contentRef = useRef<HTMLDivElement>(null)
  useWindowClick(() => isDismissable && dismiss(true), contentRef)

  // Ued to handle external changes to closing
  useEffect(() => {
    dismiss(isDismissed)
  }, [isDismissed])

  return (
    <ModalScreen {...{ isActive }}>
      <DismissableContent
        ref={contentRef}
        {...{
          dismissCallback: () => dismiss(true),
          isDismissed: !isActive,
          isDismissable,
        }}
      >
        {children}
      </DismissableContent>
    </ModalScreen>
  )
}

export default Modal
