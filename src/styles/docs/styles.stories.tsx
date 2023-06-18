import type { Meta, StoryObj } from '@storybook/react'
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

const meta: Meta<typeof StyleDemo> = {
  title: 'Theme/Themes',
  component: StyleDemo,
}

export default meta

/* generated content below */
    
export const Andro: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'andro',
  },
}

export const Avocado: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'avocado',
  },
}

export const Candy: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'candy',
  },
}

export const Earth: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'earth',
  },
}

export const Electron: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'electron',
  },
}

export const Pebble: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'pebble',
  },
}

export const Retro: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'retro',
  },
}

export const Rose: StoryObj<typeof StyleDemo> = {
  args: {
    themeName: 'rose',
  },
}
