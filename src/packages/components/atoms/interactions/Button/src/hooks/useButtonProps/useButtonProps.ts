import { useRef, ElementType, HTMLProps } from 'react'
import { useButton } from 'react-aria'
import { SplitObject, splitObject } from '@pi-lib/utils'
import { UseButtonProps } from './useButtonProps.types'
import { ariaKeys, ariaMap } from './useButtonProps.constants'
import { HTMLElementType } from '../../Button.types'

/**
 * Use to create a set of default aria props for a button
 *
 * @template E - The HTML element type.
 * @param {React.HTMLProps<E>} props - The props passed to the button component.
 * @param {ElementType} elementType - The type of HTML element for the button.
 * @returns {UseButtonProps<E>} The object containing formatted buttonProps.
 */
export const useButtonProps = <E extends HTMLElementType>(
  props: React.HTMLProps<E>,
  elementType: ElementType
): UseButtonProps<E> => {
  const buttonRef = useRef<E>(null)

  // Strip aria substitutions from props
  const { rest: restProps } = splitObject(
    props as SplitObject,
    Object.keys(ariaMap)
  )

  // Substitute generic handlers with aria ones
  const baseProps = Object.entries(props).reduce((acc, [key, val]) => {
    return {
      ...acc,
      [ariaMap[key as keyof HTMLProps<HTMLElementType>] ?? key]: val,
    }
  }, {})

  // Strip out the aria specific props
  const { selected: ariaProps } = splitObject(baseProps, ariaKeys)

  // Get the React aria props
  const { buttonProps } = useButton(
    {
      ...ariaProps,
      elementType,
    },
    buttonRef
  )

  return {
    buttonProps: {
      ...restProps,
      ...buttonProps,
      ref: buttonRef,
    },
  }
}

export default useButtonProps
