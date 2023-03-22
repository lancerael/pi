import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GeoMap } from './GeoMap'

export default {
  title: 'Charts/GeoMap',
  component: GeoMap,
} as ComponentMeta<typeof GeoMap>

const Template: ComponentStory<typeof GeoMap> = () => (
  <GeoMap country="USA" label="Location" />
)

export const Default = Template.bind({})
