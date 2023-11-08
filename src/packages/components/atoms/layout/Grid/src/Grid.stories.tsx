import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid'
import { GridProps } from './Grid.types'

const render = (props: GridProps) => (
  <Grid {...props}>
    {Array.from({ length: 6 }, (_, i) => (
      <div key={i} style={{ border: '1px solid green', padding: '8px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
        tempor enim, ultrices tristique est. Praesent faucibus et leo ut
        malesuada. Sed vitae sodales erat. Phasellus id arcu sed ligula
        tristique commodo. Donec pellentesque pharetra elit a porta. Aenean
        porta augue ac sapien posuere, at lobortis est gravida. Curabitur
        scelerisque nunc quis ultricies consectetur. Sed eget auctor sapien, id
        tempus lectus. Etiam hendrerit tellus non accumsan faucibus. Curabitur
        faucibus ligula eu tempor viverra. Morbi rhoncus pulvinar turpis, vitae
        posuere risus interdum quis.
      </div>
    ))}
  </Grid>
)

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Grid> = {
  args: {},
  render,
}

export default meta
