import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './Banner'
import { BannerProps } from './Banner.types'

const render = (props: BannerProps) => (
  <Banner {...props}>
    <div>Content 1</div>
    <div>Content 2</div>
    <div>Content 3</div>
    <div>Content 4</div>
    <div>Content 5</div>
  </Banner>
)

const meta: Meta<typeof Banner> = {
  title: 'Layout/Banner',
  component: Banner,
  argTypes: {
    isList: {
      control: 'boolean',
    },
    isBottom: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Banner> = {
  args: {
    isList: true,
    isBottom: true,
  },
  render,
}

export default meta
