import type { Meta, StoryObj } from '@storybook/react'
//@ts-ignore
import Card from '../../Card/src/Card'
import { Carousel } from './Carousel'
import { CarouselProps } from './Carousel.types'

const itemList = [
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
  <Card>item 11</Card>,
  <Card>item 12</Card>,
  <Card>item 13</Card>,
  <Card>item 14</Card>,
  <Card>item 15</Card>,
]

const render = (props: CarouselProps) => (
  <Carousel {...props}>children</Carousel>
)

const meta: Meta<typeof Carousel> = {
  title: 'Molecules/UI/Carousel',
  component: Carousel,
  argTypes: {
    isDraggable: {
      control: 'boolean',
    },
    isScroller: {
      control: 'boolean',
    },
    speed: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Carousel> = {
  args: {
    isDraggable: true,
    isScroller: true,
    speed: 1,
    itemList,
  },
  render,
}

/**
 * The fast scroller (not draggable)
 */
export const Fast: StoryObj<typeof Carousel> = {
  args: {
    isDraggable: false,
    isScroller: true,
    speed: 5,
    itemList,
  },
  render,
}

/**
 * The drag only scroller
 */
export const DragOnly: StoryObj<typeof Carousel> = {
  args: {
    isDraggable: true,
    isScroller: false,
    itemList,
  },
  render,
}

export default meta
