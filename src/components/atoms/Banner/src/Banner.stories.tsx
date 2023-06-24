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
    <div>Content 6</div>
    <div>Content 7</div>
    <div>Content 8</div>
    <div>Content 9</div>
  </Banner>
)

const meta: Meta<typeof Banner> = {
  title: 'Layout/Banner',
  component: Banner,
  argTypes: {
    wrapItems: {
      control: 'boolean',
    },
    invertGradient: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Banner> = {
  args: {
    wrapItems: false,
    invertGradient: false,
  },
  render,
}

/**
 * An alternative view of the banner with wrapped responsive children and inverted gradient
 */
export const Inverted: StoryObj<typeof Banner> = {
  args: {
    wrapItems: true,
    invertGradient: true,
  },
  render,
}

export default meta
