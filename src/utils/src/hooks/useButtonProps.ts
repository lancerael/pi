import { DOMAttributes, ElementType, useRef, RefObject } from 'react'
import { useButton, useKeyboard } from 'react-aria'

export interface UseButtonProps<T> {
  buttonProps: DOMAttributes<HTMLElement> & {
    buttonRef: React.RefObject<T>
  }
}

export const useButtonProps = <T>(
  props: {
    onPointerUp?: (e: any) => unknown
    [key: string]: unknown
  },
  elementType: ElementType = 'button'
): UseButtonProps<T> => {
  const buttonRef = useRef<T>(null)
  const { onPointerUp } = props
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
    buttonProps: { ...buttonProps, ...keyboardProps, onPointerUp, buttonRef },
  }
}
