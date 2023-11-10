import type { Meta, StoryObj } from '@storybook/react'
import { PageGrid } from './PageGrid'
import { PageGridProps } from './PageGrid.types'

const render = (props: PageGridProps) => (
  <PageGrid {...props}>
    <div>This is a header</div>
    <div>This is a bit of content</div>
    <div className="pi-page-grid-full" style={{ backgroundColor: 'lightblue' }}>
      <div>This is a full width bit of content</div>
    </div>
    <div>This is another bit of content</div>
    <div>This is a footer</div>
  </PageGrid>
)

const meta: Meta<typeof PageGrid> = {
  title: 'Atoms/Layout/PageGrid',
  component: PageGrid,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof PageGrid> = {
  args: {},
  render,
}

export default meta
