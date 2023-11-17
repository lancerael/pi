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
  title: 'Atoms/Layout/Banner',
  component: Banner,
  argTypes: {
    shouldWrapItems: {
      control: 'boolean',
    },
    hasBackground: {
      control: 'boolean',
    },
    shouldInvertGradient: {
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
    shouldWrapItems: false,
    hasBackground: false,
    shouldInvertGradient: false,
  },
  render,
}

/**
 * An alternative view of the banner with wrapped responsive children and inverted gradient
 */
export const Inverted: StoryObj<typeof Banner> = {
  args: {
    shouldWrapItems: true,
    hasBackground: true,
    shouldInvertGradient: true,
  },
  render,
}

export default meta
