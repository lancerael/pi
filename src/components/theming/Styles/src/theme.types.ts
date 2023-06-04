import { DefaultTheme, GlobalStyleComponent } from 'styled-components'
import { ThemeType } from './themes'
import { PropsWithChildren } from 'react'

export interface ITheme {
  fonts: string[]
  fontSizes: {
    small: string
    medium: string
    large: string
  }
  colors: {
    light: { [key: string]: string }
    dark: { [key: string]: string }
  }
  chartBackground: string
}

export interface ThemedComponent {
  theme: ITheme
}

export type ThemedComponentWithChildren = ThemedComponent & PropsWithChildren

export type Scheme = 'light' | 'dark' | ''

export interface IThemeProps extends Partial<ThemedComponentWithChildren> {
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
