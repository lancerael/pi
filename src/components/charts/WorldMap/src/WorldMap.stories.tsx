import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WorldMap } from './WorldMap'
import { WorldMapProps } from './WorldMap.types'

const StoryTemplate = (props: WorldMapProps) => (
  <div style={{ width: '80%', height: '40vw' }}>
    <WorldMap {...props} />
  </div>
)

const meta: Meta<typeof StoryTemplate> = {
  title: 'Charts/WorldMap',
  component: StoryTemplate,
  argTypes: {
    country: {
      control: { type: 'radio' },
      options: ['USA', 'GBR', 'FRA'],
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof StoryTemplate> = {
  args: {
    country: 'GBR',
    label: 'Locale',
  },
  parameters: {
    country: 'GBR',
  },
}

export default meta
