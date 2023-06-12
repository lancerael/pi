import { DOMAttributes, ElementType, useRef, RefObject } from 'react'
import { useButton, useKeyboard } from 'react-aria'

export interface UseButtonProps<T> {
  buttonRef: React.RefObject<T>
  buttonProps: DOMAttributes<HTMLElement>
}

export const useButtonProps = <T>(
  props: { [key: string]: unknown },
  elementType: ElementType = 'button',
  onPointerUp?: (e: any) => unknown
): UseButtonProps<T> => {
  const buttonRef = useRef<T>(null)
  let { buttonProps } = useButton(
    {
      ...props,
      elementType,
    },
    buttonRef as RefObject<Element>
  )
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => [' ', 'Enter'].includes(e.key) && onPointerUp?.(e),
  })
  return {
    buttonRef,
    buttonProps: { ...buttonProps, ...keyboardProps, onPointerUp },
  }
}
