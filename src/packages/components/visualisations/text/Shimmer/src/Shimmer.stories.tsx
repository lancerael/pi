import type { Meta, StoryObj } from '@storybook/react'
import { Shimmer } from './Shimmer'
import { ShimmerProps } from './Shimmer.types'

const render = (props: ShimmerProps) => (
  <div
    style={{
      backgroundImage:
        'linear-gradient(to right, var(--bg), #var(--special), var(--bg))',
      padding: '25px',
      minHeight: '2rem',
    }}
  >
    <Shimmer {...props}>children</Shimmer>
  </div>
)

const meta: Meta<typeof Shimmer> = {
  title: 'Visualisations/Text/Shimmer',
  component: Shimmer,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Shimmer> = {
  args: {
    lines: [
      'Hello',
      'Welcome to Pi.',
      'This is line three',
      'This is another line',
      'It just keeps on going',
      'Until it gets to the end',
      'Then it goes back to the beginning',
      'Like this...',
      ' ',
    ],
    delay: 1000,
    pause: 2500,
    holdFirst: 5000,
    fadeTime: 500,
  },
  render,
}

export default meta
