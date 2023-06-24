import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageContent } from './PageContent'
import { PageContentProps } from './PageContent.types'

const render = (props: PageContentProps) => (
  <PageContent
    {...props}
    sidebar={
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis
        sapien id quam convallis, a fringilla velit volutpat. Etiam et rhoncus
        libero, vitae ultricies purus. Maecenas in erat ultricies risus
        consequat iaculis. Donec nisi velit, tincidunt at commodo sit amet,
        porttitor sit amet nulla. Ut at augue sit amet mauris egestas consequat.
        Fusce id ultrices justo. Integer viverra urna nec dolor blandit, nec
        placerat neque facilisis. Nulla viverra purus a erat blandit, ac
        eleifend neque aliquam. Donec ac vehicula velit. In at accumsan ligula.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Suspendisse eget tortor nisl. Fusce et est
        quam. Fusce in ex at dui vulputate tempus. Praesent in lorem vitae neque
        imperdiet varius eu et diam. Cras placerat pellentesque malesuada.
      </div>
    }
  >
    In in pretium ipsum, non iaculis neque. In mattis porta ligula, sed pretium
    ligula. Phasellus eleifend viverra libero. Proin sagittis mauris sed tellus
    interdum, ut viverra risus tempus. Etiam eu velit id orci eleifend commodo.
    Fusce sodales justo lectus, porttitor ullamcorper ipsum tempor et. Nulla non
    rhoncus lacus. Sed nisi velit, lobortis eu pellentesque sit amet,
    condimentum convallis lacus. Integer tempus iaculis egestas. Nulla eu
    placerat lorem. Fusce vestibulum eu massa maximus maximus. Aliquam et
    pharetra felis. Fusce ut ultrices arcu.
  </PageContent>
)

const meta: Meta<typeof PageContent> = {
  title: 'Layout/PageContent',
  component: PageContent,
  argTypes: {
    maxWidth: {
      control: 'text',
    },
    isCollapsible: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the page content that collapses at narrow widths
 */
export const Default: StoryObj<typeof PageContent> = {
  args: {
    maxWidth: '38%',
    isCollapsible: true,
  },
  render,
}

/**
 * A version of the page content with a narrow sidebar that does not collapse
 */
export const NoCollapse: StoryObj<typeof PageContent> = {
  args: {
    maxWidth: '20%',
    isCollapsible: false,
  },
  render,
}

export default meta
