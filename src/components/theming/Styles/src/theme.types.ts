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

export interface IThemeProps extends Partial<ThemedComponentWithChildren> {
  themeName: ThemeType
  themeOverrides?: ITheme
}
