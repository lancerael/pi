import { BoxNames, Size } from '@pi-lib/styles'
import { AriaButtonProps } from 'react-aria'
import { TestId, Status } from '@pi-lib/types'
import { HTMLProps, RefObject } from 'react'

export type HTMLElementType = HTMLButtonElement | HTMLAnchorElement

type BaseButtonProps = HTMLProps<HTMLElementType> & AriaButtonProps & TestId

/**
 * The main prop interface for the component
 */
export interface ButtonProps extends BaseButtonProps {
  /**
   * Use styles for special states
   */
  status?: Status
  /**
   * Show a compact version of the button
   */
  isCompact?: boolean
  /**
   * Show an inverted version of the button
   */
  isInverted?: boolean
  /**
   * Show a shadowed version of the button
   */
  isShadowed?: boolean
  /**
   * Show a simple unstyled version of the button
   */
  isSimple?: boolean
  /**
   * If there is a link, open it externally
   */
  isExternal?: boolean
  /**
   * If the button should be treated as an inline element
   */
  isInline?: boolean
  /**
   * If there is special style needed for the box
   */
  boxName?: BoxNames
  /**
   * Show a specific size of button from the theme
   */
  buttonSize?: Size
  /**
   * Pass in a react ref (type needed for memo)
   */
  ref?: RefObject<HTMLElementType> | null
}
