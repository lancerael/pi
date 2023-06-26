import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { createGlobalStyle } from 'styled-components'
import { PageLoaderProps } from './PageLoader.types'
//@ts-ignore
import { useWindowClick } from '../../../../../utils/src/hooks/useWindowClick'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px !important;
  }
`

const render = ({ isActive: isActiveDefault }: PageLoaderProps) => {
  const [isActive, setIsActive] = useState(isActiveDefault)
  useWindowClick(() => setIsActive(false))
  useEffect(() => setIsActive(isActiveDefault), [isActiveDefault])
  return (
    <>
      <GlobalStyle />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque exi
      urna, dignissim in ullamcorper a, blandit id magna. Vivamus orci lectus,
      tincidunt vel ornare sed, ultricies euismod neque. Nullam bibendum
      pellentesque accumsan. Praesent maximus odio ac mauris dictum
      sollicitudin. Nulla eget consequat magna. Proin dui augue, varius eget
      massa eget, aliquam tempus mauris. Nulla varius lacus in sapien ornare, ac
      eleifend velit feugiat. Aenean lectus elit, elementum id leo ac, auctor
      viverra sem. In sollicitudin condimentum quam. Suspendisse nisl nisl,
      pellentesque nec turpis nec, imperdiet condimentum lacus. In sit amet
      rutrum lacus, vitae lacinia lectus. Praesent at aliquet nulla. Suspendisse
      tincidunt felis est, eu sodales justo lobortis id. In mollis lacinia nibh
      nec fringilla. Fusce sit amet luctus justo. Proin imperdiet bibendum
      rutrum. Sed vel mauris nunc.
      <br />
      <br />
      Morbi pretium erat at enim laoreet fringilla. Aenean quis pretium elit.
      Aliquam ac diam at ipsum malesuada hendrerit ut a ex. Sed tristique, felis
      eget dapibus tempor, tellus purus facilisis enim, eget dictum purus tellus
      eget lacus. Phasellus et odio vel lorem rhoncus tempus vitae et dolor. Sed
      blandit scelerisque nulla, vitae elementum sem venenatis eu. Aliquam sed
      augue accumsan, blandit lectus vitae, pretium ligula. Nullam dictum justo
      lorem, at fringilla felis fringilla in. Ut semper ornare enim tempus
      mollis.
      <br />
      <br />
      Vivamus pretium commodo molestie. Vestibulum bibendum enim id nisi
      fringilla lobortis. Proin varius vel orci sit amet cursus. Proin pulvinar
      enim quam, et sagittis metus elementum eleifend. Proin consectetur quis
      tortor vel euismod. Nunc ornare ut sapien sit amet ullamcorper. Praesent
      vel nisi a purus convallis mattis eget eu odio. Mauris pharetra ipsum vel
      diam venenatis sollicitudin. Sed finibus mollis arcu, id vehicula nulla
      dignissim ac. Duis ultrices risus vel augue molestie, id efficitur orci
      tincidunt. Ut vitae nunc nisi. Quisque quis odio consequat, tristique
      augue vitae, cursus libero. Nunc blandit ipsum sit amet ligula posuere
      rhoncus. Nullam aliquam turpis lectus, nec viverra diam scelerisque vel.
      Nam nec metus vitae justo varius egestas ac a enim. Donec viverra, lacus
      eu porttitor semper, leo mi tincidunt libero, in convallis tellus risus
      eget lectus. Pellentesque purus dui, luctus scelerisque turpis at,
      ultrices efficitur leo. Nunc bibendum ligula id dignissim accumsan. Nulla
      porta sollicitudin rutrum. Pellentesque vitae sapien pulvinar orci
      tincidunt aliquam id luctus ante.
      <br />
      <br />
      Fusce pulvinar tincidunt lorem, et tincidunt urna lacinia sed. Proin quis
      nunc in nibh feugiat vulputate. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Aliquam iaculis
      varius dui, non ultrices mauris malesuada at. Sed ligula est, tincidunt
      fermentum urna et, iaculis semper elit. Sed elementum libero est, eget
      commodo erat ultrices in. Suspendisse mollis mollis elit quis iaculis.
      Morbi quam urna, volutpat eget dolor nec, tincidunt egestas elit.
      Vestibulum tempor vel libero posuere maximus. Proin quis congue enim, a
      tristique mauris. Nam malesuada magna non enim varius porta. Donec vitae
      purus in sapien elementum tristique. Aliquam tincidunt mollis nulla, sed
      mollis ante pellentesque in. Integer tellus lectus, rhoncus at tristique
      in, vestibulum nec dolor. Quisque et vehicula quam. Etiam aliquet, justo
      vitae pharetra eleifend, mauris metus vulputate justo, a luctus urna massa
      varius risus. Sed auctor felis ultrices cursus aliquet.
      <PageLoader {...{ isActive }} />
    </>
  )
}

const meta: Meta<typeof PageLoader> = {
  title: 'Molecules/UI/PageLoader',
  component: PageLoader,
  argTypes: {
    isActive: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the page loader
 */
export const Default: StoryObj<typeof PageLoader> = {
  args: {
    isActive: false,
  },
  render,
}

/**
 * The active state for the page loader
 */
export const Active: StoryObj<typeof PageLoader> = {
  args: {
    isActive: true,
  },
  render,
}

export default meta
