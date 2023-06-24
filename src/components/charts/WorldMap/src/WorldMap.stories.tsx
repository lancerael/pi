import type { Meta, StoryObj } from '@storybook/react'
import { WorldMap } from './WorldMap'
import { WorldMapProps } from './WorldMap.types'

const render = (props: WorldMapProps) => (
  <div style={{ width: '80%', height: '40vw' }}>
    <WorldMap {...props} />
  </div>
)

const meta: Meta<typeof WorldMap> = {
  title: 'Charts/WorldMap',
  component: WorldMap,
  argTypes: {
    country: {
      control: { type: 'radio' },
      options: ['USA', 'GBR', 'FRA'],
    },
  },
}

export const Default: StoryObj<typeof WorldMap> = {
  args: {
    country: 'GBR',
    label: 'Locale',
  },
  parameters: {
    country: 'GBR',
  },
  render,
}

export default meta
