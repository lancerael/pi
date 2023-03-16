import React, { DecoratorFn } from '@storybook/react'
import * as jest from 'jest-mock'
import { Theme } from '@pi-lib/styles'

//@ts-ignore
window.jest = jest

const withTheme: DecoratorFn = (StoryFn, context) => {
  const themeName = context.parameters.themeName ?? context.globals.themeName
  return (
    <Theme {...{ themeName }}>
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
        'Docs',
        'Styles',
        'Charts',
        ['Pi-Charts', 'BarChart', 'CandlestickChart'],
        'UI',
        'Interactions',
        'Layout',
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
        { value: 'avocado', icon: 'circlehollow', title: 'Avocado' },
        { value: 'electron', icon: 'circlehollow', title: 'Electron' },
        { value: 'pebble', icon: 'circlehollow', title: 'Pebble' },
        { value: 'rose', icon: 'circlehollow', title: 'Rose' },
      ],
      showName: true,
    },
  },
}
