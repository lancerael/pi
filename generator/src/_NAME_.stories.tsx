import type { Meta, StoryObj } from '@storybook/react'
import { _NAME_ } from './_NAME_'
import { _NAME_Props } from './_NAME_.types'

const render = (props: _NAME_Props) => <_NAME_ {...props}>children</_NAME_>

const meta: Meta<typeof _NAME_> = {
  title: '_NAME_',
  component: _NAME_,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof _NAME_> = {
  args: {},
  render,
}

export default meta
