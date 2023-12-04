import { useRef, ElementType, HTMLProps } from 'react'
import { useButton, AriaButtonProps } from 'react-aria'
import { UseButtonProps } from './useButtonProps.types'
import { ariaKeys, ariaMap } from './useButtonProps.constants'
import { HTMLElementType } from '../../Button.types'

const getProps = (target: Record<string, unknown>, propList: string[]) => {
  const getPropList = (isSelected: (curr: string) => boolean) => {
    return propList.reduce((acc: Record<string, unknown>, curr: string) => {
      const selectedProps = acc
      if (isSelected(curr)) selectedProps[curr] = target[curr]
      return selectedProps
    }, {} as Record<string, unknown>)
  }
  return {
    selected: getPropList((curr) => !!target[curr]),
    rest: getPropList((curr) => !propList.includes(curr)),
  }
}

/**
 * Use to create a set of default aria props for a button
 * @param props
 * @param elementType
 * @returns the object containing formatted buttonProps
 */
export const useButtonProps = <E extends HTMLElementType>(
  props: React.HTMLProps<E>,
  elementType: ElementType
): UseButtonProps<E> => {
  const buttonRef = useRef<E>(null)

  // Substitute generic handlers with aria ones
  let baseProps = Object.entries(props).reduce((acc, [key, val]) => {
    return {
      ...acc,
      [ariaMap[key as keyof HTMLProps<HTMLElementType>] ?? key]: val,
    }
  }, {})

  // Strip out the aria specific props
  const {
    selected: ariaProps,
    rest,
  }: { selected: AriaButtonProps; rest: typeof props } = getProps(
    baseProps,
    ariaKeys
  )

  /**
   * Get the React aria props
   */
  const { buttonProps } = useButton(
    {
      ...ariaProps,
      elementType,
    },
    buttonRef
  )

  return {
    buttonProps: {
      ...buttonProps,
      ...rest,
      title: props.title,
      ref: buttonRef,
    },
  }
}

export default useButtonProps
