import { ThemedComponent } from '@pi-lib/styles'
import { ButtonProps, HTMLElementType } from './Button.types'
import { TransientProps } from '@pi-lib/styles'
import styled from 'styled-components'

/**
 * The props for the styled button
 */
export type StyledButtonProps = React.HTMLProps<HTMLElementType> &
  ThemedComponent &
  TransientProps<
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
