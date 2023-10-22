import type { Meta, StoryObj } from '@storybook/react'
import { Stellar } from './Stellar'
import { StellarProps } from './Stellar.types'

const render = (props: StellarProps) => <Stellar {...props}>children</Stellar>

const meta: Meta<typeof Stellar> = {
  title: 'Stellar',
  component: Stellar,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Stellar> = {
  args: {
    starCount: 10,
  },
  render,
}

export default meta
