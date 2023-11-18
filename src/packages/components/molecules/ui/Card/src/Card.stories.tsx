import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { CardProps } from './Card.types'

const render = (props: CardProps) => <Card {...props} />

const meta: Meta<typeof Card> = {
  title: 'Molecules/UI/Card',
  component: Card,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Test title',
    subTitle: 'Test Subtitle',
    children: <>Contents</>,
    iconProps: {
      src: `/info.svg`,
    },
  },
  render,
}

export default meta
