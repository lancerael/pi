import { ButtonProps, HTMLElementType } from './Button.types'
import { TransientProps } from '@pi-lib/styles'
import styled, { DefaultTheme } from 'styled-components'

/**
 * The props for the styled button
 */
export type StyledButtonProps = React.HTMLProps<HTMLElementType> & {
  theme?: DefaultTheme
} & TransientProps<
    Pick<
      ButtonProps,
      | 'status'
      | 'isCompact'
      | 'isInverted'
      | 'isSimple'
      | 'isInline'
      | 'boxName'
      | 'isShadowed'
      | 'buttonSize'
    >
  >

export type StyledElementType = typeof styled.button & typeof styled.a
