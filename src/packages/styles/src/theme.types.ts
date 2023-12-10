import { ExecutionProps, IStyledComponent } from 'styled-components'
import { ThemeName } from './themes'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { boxColors, gradients } from './theme'
import { DefaultTheme, Substitute } from 'styled-components/dist/types'
import { FontSize, Scheme } from './components/GlobalStyle'

export type SchemeValues = Record<string, string>

export interface PiTheme {
  fonts: string[]
  fontSizes: Record<Size, string>
  colors: SchemeValues
}

export interface ThemedComponent {
  theme: PiTheme | DefaultTheme
}

export type ThemedComponentWithChildren = ThemedComponent & PropsWithChildren

export type Size = 'small' | 'medium' | 'large'

export type BoxNames = 'default' | 'hi' | 'alt' | 'light'

export interface ThemeProps extends Partial<ThemedComponentWithChildren> {
  themeName?: ThemeName
  themeOverrides?: PiTheme
  scheme?: Scheme
  fontSize?: FontSize
  includeGlobal?: boolean
}

type GlobalStyleComponent = React.NamedExoticComponent<ExecutionProps & object>

export type ContrastMap = {
  [key in Scheme]: GlobalStyleComponent
}

export type ThemeMap = { [key in ThemeName]: ContrastMap }

export type SizeMap = Record<FontSize, GlobalStyleComponent>

export interface GradientProps {
  to?: 'top' | 'bottom'
  name?: keyof typeof gradients
  isTransparent?: boolean
}

export interface BoxProps {
  isInverted?: boolean
  isTransparent?: boolean
  name?: keyof typeof boxColors
  shadowProps?: ShadowProps | null
}

export type CustomStyledType<
  T1 = HTMLElement,
  T2 extends Object = {}
> = IStyledComponent<
  'web',
  Substitute<React.DetailedHTMLProps<HTMLAttributes<T1>, T1>, T2>
>

export interface ShadowProps {
  offset?: string
  opacity?: string
}

/**
 * Represents a type where each key of an object is prefixed with `$`.
 * Useful for representing transient props in styled components.
 *
 * @template T Base type from which the transient props are derived.
 *             Defaults to BaseProps if not specified.
 */
export type TransientProps<T = BaseProps> = {
  [K in keyof T as `$${string & K}`]: T[K]
}

/**
 * Represents the base type for props. This is a generic record type
 * with string keys and values of any type.
 */
export type BaseProps = Record<string, unknown>
