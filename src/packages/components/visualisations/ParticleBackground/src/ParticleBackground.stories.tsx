import type { Meta, StoryObj } from '@storybook/react'

import { ParticleBackground } from './ParticleBackground'
import { ParticleBackgroundProps } from './ParticleBackground.types'

const render = (props: ParticleBackgroundProps) => (
  <div style={{ height: '150dvh' }}>
    <ParticleBackground {...props} />

    <div style={{ padding: '1rem' }}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
        sapien vitae tortor pulvinar commodo. Cras accumsan dapibus nunc, nec
        molestie arcu interdum nec. Sed vel eros sed nulla bibendum convallis.
        Phasellus nec augue ac risus consectetur finibus. Vivamus ac odio eu
        purus consequat tincidunt. Nulla facilisi. Ut quis justo vitae mi dictum
        pellentesque. Morbi non tincidunt libero. Nullam auctor tincidunt enim,
        sed consequat dui tempor id. Duis at lorem vitae neque tincidunt
        eleifend sit amet vel nunc. Suspendisse a purus nec nulla malesuada
        vehicula. Integer vitae eros nec ligula accumsan condimentum.
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
        sapien vitae tortor pulvinar commodo. Cras accumsan dapibus nunc, nec
        molestie arcu interdum nec. Sed vel eros sed nulla bibendum convallis.
        Phasellus nec augue ac risus consectetur finibus. Vivamus ac odio eu
        purus consequat tincidunt. Nulla facilisi. Ut quis justo vitae mi dictum
        pellentesque. Morbi non tincidunt libero. Nullam auctor tincidunt enim,
        sed consequat dui tempor id. Duis at lorem vitae neque tincidunt
        eleifend sit amet vel nunc. Suspendisse a purus nec nulla malesuada
        vehicula. Integer vitae eros nec ligula accumsan condimentum.
      </div>
      <br />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
        sapien vitae tortor pulvinar commodo. Cras accumsan dapibus nunc, nec
        molestie arcu interdum nec. Sed vel eros sed nulla bibendum convallis.
        Phasellus nec augue ac risus consectetur finibus. Vivamus ac odio eu
        purus consequat tincidunt. Nulla facilisi. Ut quis justo vitae mi dictum
        pellentesque. Morbi non tincidunt libero. Nullam auctor tincidunt enim,
        sed consequat dui tempor id. Duis at lorem vitae neque tincidunt
        eleifend sit amet vel nunc. Suspendisse a purus nec nulla malesuada
        vehicula. Integer vitae eros nec ligula accumsan condimentum.
      </div>
    </div>
  </div>
)

const meta: Meta<typeof ParticleBackground> = {
  title: 'ParticleBackground',
  component: ParticleBackground,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof ParticleBackground> = {
  args: {},
  render,
}

export default meta
