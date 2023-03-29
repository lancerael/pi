import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as themes from '../src/themes'
import { ThemeType } from '../src/themes'
//@ts-ignore
import Table from '../../../molecules/Table/src/Table'
import React from 'react'
import { Title } from './formatters.style'

const StyleDemo = ({ themeName }: { themeName: ThemeType }) => {
  const theme = themes[themeName]
  const keys = Object.keys(theme.light) as Array<keyof typeof theme.light>
  const name = themeName.split('')
  const color = (hex: string) => (
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
    <>
      <Title>
        Theme:{' '}
        <em>
          {name[0].toUpperCase()}
          {name.slice(1).join('')}
        </em>
      </Title>
      <Table
        headers={['Variable', 'Light', 'Dark']}
        rows={keys.map((key) => ({
          cols: [key, color(theme.light[key]), color(theme.dark[key])],
        }))}
      />
    </>
  )
}

export default {
  title: 'Theme/Themes',
  component: StyleDemo,
} as ComponentMeta<typeof StyleDemo>

const Template: ComponentStory<typeof StyleDemo> = (args) => (
  <StyleDemo {...args} />
)

export const Andro = Template.bind({})
Andro.args = {
  themeName: 'andro',
}
Andro.parameters = Andro.args

export const Avocado = Template.bind({})
Avocado.args = {
  themeName: 'avocado',
}
Avocado.parameters = Avocado.args

export const Electron = Template.bind({})
Electron.args = {
  themeName: 'electron',
}
Electron.parameters = Electron.args

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
