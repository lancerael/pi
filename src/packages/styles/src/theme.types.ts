import { DefaultTheme, GlobalStyleComponent } from 'styled-components'
import { ThemeType } from './themes'
import { PropsWithChildren } from 'react'
import { boxColors, gradients } from './theme'

export type SchemeValues = { [key: string]: string }

export interface PiTheme {
  fonts: string[]
  fontSizes: {
    small: string
    medium: string
    large: string
  }
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

export interface ThemeProps extends Partial<ThemedComponentWithChildren> {
  themeName: ThemeType
  themeOverrides?: PiTheme
  scheme?: Scheme
  fontSize?: FontSize
}

export type ContrastMap = {
  [key in Scheme]: GlobalStyleComponent<{}, DefaultTheme>
}

export type ThemeMap = { [key in ThemeType]: ContrastMap }

export type FontSize = 'small' | 'large'

export type SizeMap = Record<FontSize, GlobalStyleComponent<{}, DefaultTheme>>

export interface GradientProps {
  to?: 'top' | 'bottom'
  name?: keyof typeof gradients
}

export interface BoxProps {
  isInverted?: boolean
  name?: keyof typeof boxColors
}
