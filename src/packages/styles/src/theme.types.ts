import { ExecutionProps, IStyledComponent } from 'styled-components'
import { ThemeType } from './themes'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { boxColors, gradients } from './theme'
import { DefaultTheme, Substitute } from 'styled-components/dist/types'

export type SchemeValues = Record<string, string>

export interface PiTheme extends DefaultTheme {
  fonts: string[]
  fontSizes: Record<Size, string>
  colors: {
    light: SchemeValues
    dark: SchemeValues
  }
}

export interface ThemedComponent {
  theme: PiTheme
}

export type ThemedComponentWithChildren = ThemedComponent & PropsWithChildren

export type Scheme = 'light' | 'dark'

export type Size = 'small' | 'medium' | 'large'

export type BoxNames = 'default' | 'alt' | 'light'

export interface ThemeProps extends Partial<ThemedComponentWithChildren> {
  themeName: ThemeType
  themeOverrides?: PiTheme
  scheme?: Scheme
  fontSize?: FontSize
}

type GlobalStyleComponent = React.NamedExoticComponent<ExecutionProps & object>

export type ContrastMap = {
  [key in Scheme]: GlobalStyleComponent
}

export type ThemeMap = { [key in ThemeType]: ContrastMap }

export type FontSize = 'small' | 'large'

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
