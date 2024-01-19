import { useEffect, useRef, useState } from 'react'
import ModalScreen from '@pi-lib/modal-screen'
import DismissableContent from '@pi-lib/dismissable-content'
import { useWindowClick } from '@pi-lib/use-window-click'
import { ModalProps } from './Modal.types'

/**
 * Modal for custom content that allows dismissal internally or externally
 */
export const Modal = ({
  children,
  title,
  isDismissed = false,
  isDismissable = true,
  isWindowDismissable = true,
  dismissCallback,
}: ModalProps) => {
  // Used to manage closing internally
  const [isActive, setIsActive] = useState(!isDismissed)

  console.log(isWindowDismissable)

  const dismiss = (isBeingDismissed: boolean) => {
    if (!isDismissable) return
    setIsActive(!isBeingDismissed)
    isBeingDismissed && dismissCallback?.()
  }

  // Used to restrict page closing to modal screen
  const contentRef = useRef<HTMLDivElement>(null)
  useWindowClick(() => isWindowDismissable && dismiss(true), contentRef)

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
          title,
        }}
      >
        {children}
      </DismissableContent>
    </ModalScreen>
  )
}

export default Modal
