import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { InputProps } from './Input.types'

const StoryTemplate = (props: InputProps) => {
  const [value, setValue] = useState(props.value ?? '')
  return (
    <Input
      {...{ ...props, value }}
      onChange={({ target }) => setValue((target as HTMLInputElement).value)}
    />
  )
}

const meta: Meta<typeof StoryTemplate> = {
  title: 'Inputs/Input',
  component: StoryTemplate,
  argTypes: {
    title: {
      control: 'text',
    },
    type: {
      options: ['text', 'number', 'color'],
      control: 'select',
    },
  },
  tags: ['autodocs'],
}

export const Text: StoryObj<typeof StoryTemplate> = {
  args: {
    type: 'text',
    title: 'text label',
    value: 'text',
    onPointerUp: () => console.log('clicked text input'),
  },
}

export const Number: StoryObj<typeof StoryTemplate> = {
  args: {
    type: 'number',
    title: 'number label',
    value: 12345,
    onPointerUp: () => console.log('clicked number input'),
  },
}

export const Color: StoryObj<typeof StoryTemplate> = {
  args: {
    type: 'color',
    title: 'color label',
    value: '#336600',
    onPointerUp: () => console.log('clicked color input'),
  },
}

export default meta
