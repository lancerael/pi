import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { InputProps } from './Input.types'

const render = (props: InputProps) => {
  const [value, setValue] = useState(props.value ?? '')
  return (
    <Input
      {...{ ...props, value }}
      onChange={({ target }) => setValue((target as HTMLInputElement).value)}
    />
  )
}

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    title: {
      control: 'text',
    },
    type: {
      options: ['text', 'number', 'color'],
      control: 'select',
    },
    onPointerUp: { action: 'clicked' },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the Text input
 */
export const Text: StoryObj<typeof Input> = {
  args: {
    type: 'text',
    title: 'text label',
    value: 'text',
    onPointerUp: () => console.log('clicked text input'),
  },
}

/**
 * The default state for the Number input
 */
export const Number: StoryObj<typeof Input> = {
  args: {
    type: 'number',
    title: 'number label',
    value: 12345,
    onPointerUp: () => console.log('clicked number input'),
  },
}

/**
 * The default state for the Color input
 */
export const Color: StoryObj<typeof Input> = {
  args: {
    type: 'color',
    title: 'color label',
    value: '#336600',
    onPointerUp: () => console.log('clicked color input'),
  },
}

export default meta
