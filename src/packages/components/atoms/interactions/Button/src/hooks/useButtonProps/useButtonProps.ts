import { useRef, RefObject, ElementType } from 'react'
import { useButton, useKeyboard, AriaButtonProps } from 'react-aria'
import { UseButtonProps } from './useButtonProps.types'
import * as keys from 'ts-transformer-keys'

console.log(typeof keys)

const getProps = (target: Record<string, unknown>, propList: string[]) => {
  return propList.reduce((acc: Record<string, unknown>, curr: string) => {
    const newProps = acc
    if (target[curr]) newProps[curr] = target[curr]
    return newProps
  }, {} as Record<string, unknown>)
}

export type AriaKeys = (keyof AriaButtonProps)[]
const ariaKeys: AriaKeys = [
  'isDisabled',
  'onPress',
  'onPressStart',
  'onPressEnd',
  'onPressChange',
  'onPressUp',
  'autoFocus',
]

/**
 * Use to create a set of default aria props for a button
 * @param props
 * @param elementType
 * @returns the object containing formatted buttonProps
 */
export const useButtonProps = <E extends HTMLElement>(
  props: React.HTMLProps<E>,
  elementType: ElementType
): UseButtonProps<E> => {
  const buttonRef = useRef<E>(null)
  const ariaProps: AriaButtonProps = getProps(
    props as Record<string, unknown>,
    ariaKeys as unknown as string[]
  )
  let { buttonProps } = useButton(
    {
      ...ariaProps,
      elementType,
    },
    buttonRef as RefObject<E>
  )
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e: any) =>
      [' ', 'Enter'].includes(e.key) && ariaProps.onPress?.(e),
  })
  return {
    buttonProps: {
      ...buttonProps,
      ...keyboardProps,
      ref: buttonRef,
    },
  }
}

export default useButtonProps
