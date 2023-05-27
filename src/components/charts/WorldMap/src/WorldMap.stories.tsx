import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { WorldMap } from './WorldMap'

export default {
  title: 'Charts/WorldMap',
  component: WorldMap,
} as ComponentMeta<typeof WorldMap>

const Template: ComponentStory<typeof WorldMap> = () => (
  <div style={{ width: '80%', height: '40vw' }}>
    <WorldMap country="USA" label="Locale" />
  </div>
)

export const Default = Template.bind({})
