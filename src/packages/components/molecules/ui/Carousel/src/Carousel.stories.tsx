import type { Meta, StoryObj } from '@storybook/react'
//@ts-ignore
import Card from '../../Card/src/Card'
import { Carousel } from './Carousel'
import { CarouselProps } from './Carousel.types'

const render = (props: CarouselProps) => (
  <Carousel {...props}>children</Carousel>
)

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Carousel> = {
  args: {
    itemList: [
      <Card>item 1</Card>,
      <Card>item 2</Card>,
      <Card>item 3</Card>,
      <Card>item 4</Card>,
      <Card>item 5</Card>,
      <Card>item 6</Card>,
      <Card>item 7</Card>,
      <Card>item 8</Card>,
      <Card>item 9</Card>,
      <Card>item 10</Card>,
    ],
  },
  render,
}

export default meta
