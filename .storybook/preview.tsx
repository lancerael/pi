import React, { DecoratorFn } from '@storybook/react'
import * as jest from 'jest-mock'
import { Theme } from '@pi-lib/styles'

//@ts-ignore
window.jest = jest

const withTheme: DecoratorFn = (StoryFn, context) => {
  const themeName = context.parameters.themeName ?? context.globals.themeName
  const contrast = context.parameters.contrast ?? context.globals.contrast
  return (
    <Theme {...{ themeName, contrast }}>
      <StoryFn />
    </Theme>
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
  },
  options: {
    storySort: {
      order: [
        'Theme',
        ['Themes', 'Docs', 'Custom'],
        'Interactions',
        'UI',
        'Layout',
        'Charts',
        ['WorldMap', 'BarChart', 'CandlestickChart'],
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
      items: [
        { value: 'andro', icon: 'circlehollow', title: 'Andro' },
        { value: 'avocado', icon: 'circlehollow', title: 'Avocado' },
        { value: 'electron', icon: 'circlehollow', title: 'Electron' },
        { value: 'pebble', icon: 'circlehollow', title: 'Pebble' },
        { value: 'rose', icon: 'circlehollow', title: 'Rose' },
      ],
      showName: true,
    },
  },
  contrast: {
    name: 'Contrast',
    description: 'Global contrast for theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circle',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circlehollow', title: 'Dark' },
        { value: '', icon: 'circlehollow', title: 'Device default' },
      ],
      showName: true,
    },
  },
}
