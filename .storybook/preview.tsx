import { Decorator } from '@storybook/react'
import * as jest from 'jest-mock'
import ThemeProvider, { themeList } from '@pi-lib/styles'

//@ts-ignore
window.jest = jest

const withTheme: Decorator = (StoryFn, context) => {
  const themeName = context.parameters.themeName ?? context.globals.themeName
  const scheme = context.parameters.scheme ?? context.globals.scheme
  const fontSize = context.parameters.fontSize ?? context.globals.fontSize
  return (
    <ThemeProvider {...{ themeName, scheme, fontSize }}>
      <StoryFn />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: {
      order: [
        'Pi',
        'Theming',
        ['Getting Started'],
        'Atoms',
        ['Interactions', 'UI', 'Layout', 'Inputs'],
        'Molecules',
        ['Interactions', 'UI', 'Layout', 'Charts'],
      ],
    },
  },
}

export const globalTypes = {
  themeName: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'pebble',
    toolbar: {
      icon: 'circle',
      items: themeList.map((theme) => ({
        value: theme,
        icon: 'circlehollow',
        title: theme.charAt(0).toUpperCase() + theme.slice(1),
      })),
      title: 'Theme',
    },
  },
  scheme: {
    name: 'Scheme',
    description: 'Global scheme for theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circlehollow', title: 'Dark' },
        { value: '', icon: 'circlehollow', title: 'Device default' },
      ],
      title: 'Scheme',
    },
  },
  fontSize: {
    name: 'Font size',
    description: 'Global font size',
    defaultValue: 'small',
    toolbar: {
      icon: 'circle',
      items: [
        { value: 'small', icon: 'circlehollow', title: 'Small' },
        { value: 'large', icon: 'circlehollow', title: 'Large' },
      ],
      title: 'Font size',
    },
  },
}
