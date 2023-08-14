import { DefaultTheme, GlobalStyleComponent } from 'styled-components'
import { ThemeType } from './themes'
import { PropsWithChildren } from 'react'

export type SchemeValues = { [key: string]: string }

export interface ITheme {
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
  theme: ITheme
}

export type ThemedComponentWithChildren = ThemedComponent & PropsWithChildren

export type Scheme = 'light' | 'dark'

export interface ThemeProps extends Partial<ThemedComponentWithChildren> {
  themeName: ThemeType
  themeOverrides?: ITheme
  scheme?: Scheme
  fontSize?: FontSize
}

export type ContrastMap = {
  [key in Scheme]: GlobalStyleComponent<{}, DefaultTheme>
}
export type ThemeMap = { [key in ThemeType]: ContrastMap }
export type FontSize = 'small' | 'large'
export type SizeMap = Record<FontSize, GlobalStyleComponent<{}, DefaultTheme>>
