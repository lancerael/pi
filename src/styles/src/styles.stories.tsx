import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from './'
import * as themes from './themes'
import { ThemeType } from './themes'
import Table from '../../components/molecules/Table/src/Table'

const StyleDemo = ({ themeName }: { themeName: ThemeType }) => {
  const theme = themes[themeName]
  const keys = Object.keys(theme.light)
  const color = (hex) => (
    <>
      <div
        style={{
          display: 'inline-block',
          border: '1px solid grey',
          width: '16px',
          height: '16px',
          marginRight: '8px',
          background: hex,
        }}
      ></div>
      {hex}
    </>
  )

  return (
    <Table
      headers={[themeName, 'Light', 'Dark']}
      tableRows={keys.map((key) => ({
        cols: [key, color(theme.light[key]), color(theme.dark[key])],
      }))}
    />
  )
}

export default {
  title: 'Styles/Themes',
  component: StyleDemo,
} as ComponentMeta<typeof StyleDemo>

const Template: ComponentStory<typeof StyleDemo> = (args) => (
  <StyleDemo {...args} />
)

export const Pebble = Template.bind({})
Pebble.args = {
  themeName: 'pebble',
}
Pebble.parameters = Pebble.args

export const Rose = Template.bind({})
Rose.args = {
  themeName: 'rose',
}
Rose.parameters = Rose.args

export const Electron = Template.bind({})
Electron.args = {
  themeName: 'electron',
}
Electron.parameters = Electron.args

export const Avocado = Template.bind({})
Avocado.args = {
  themeName: 'avocado',
}
Avocado.parameters = Avocado.args
