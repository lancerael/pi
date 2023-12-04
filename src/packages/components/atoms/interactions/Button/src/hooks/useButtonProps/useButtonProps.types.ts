import { HTMLProps } from 'react'
import { AriaButtonProps } from 'react-aria'
import { HTMLElementType } from '../../Button.types'

export interface UseButtonProps<E> {
  buttonProps: React.HTMLProps<E> & {
    ref: React.RefObject<E>
  }
}

export type AriaKeys = (keyof AriaButtonProps)[]

export type AriaMap = Partial<
  Record<keyof HTMLProps<HTMLElementType>, keyof AriaButtonProps<'button'>>
>
