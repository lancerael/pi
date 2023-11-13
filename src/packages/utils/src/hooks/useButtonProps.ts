import { DOMAttributes, ElementType, useRef, RefObject } from 'react'
import { useButton, useKeyboard } from 'react-aria'

export interface UseButtonProps<T> {
  buttonProps: DOMAttributes<HTMLElement> & {
    ref: React.RefObject<T>
  }
}

/**
 * Use to create a set of default aria props for a button
 * @param props
 * @param elementType
 * @returns the object containing formatted buttonProps
 */
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
    onKeyUp: (e: any) => [' ', 'Enter'].includes(e.key) && onPointerUp?.(e),
  })
  return {
    buttonProps: {
      ...buttonProps,
      ...keyboardProps,
      onPointerUp,
      ref: buttonRef,
    },
  }
}
