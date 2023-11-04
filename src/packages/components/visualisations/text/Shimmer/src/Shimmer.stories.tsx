import type { Meta, StoryObj } from '@storybook/react'
import { Shimmer } from './Shimmer'
import { ShimmerProps } from './Shimmer.types'

const render = (props: ShimmerProps) => (
  <div
    style={{
      backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      padding: '25px',
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
    ],
  },
  render,
}

export default meta
