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
  isActive = true,
  isDismissable = true,
  isWindowDismissable = true,
  dismissCallback,
}: ModalProps) => {
  // Used to manage closing internally
  const [isModalActive, setIsModalActive] = useState(isActive)

  const dismiss = (isBeingDismissed: boolean) => {
    if (!isDismissable) return
    setIsModalActive(!isBeingDismissed)
    isBeingDismissed && dismissCallback?.()
  }

  // Used to restrict page closing to modal screen
  const contentRef = useRef<HTMLDivElement>(null)
  useWindowClick(() => isWindowDismissable && dismiss(true), contentRef)

  // Ued to handle external changes to closing
  useEffect(() => {
    dismiss(!isActive)
  }, [isActive])

  return (
    <ModalScreen {...{ isActive: isModalActive }}>
      <DismissableContent
        ref={contentRef}
        {...{
          dismissCallback: () => dismiss(true),
          isActive: isModalActive,
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
