import React from 'react'
import { Theme } from '@pi-lib/styles'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

export interface ITheming {
  themeName: ThemeType
  contrast: Contrast
}

const StyledColumn = styled.div<any>`
  max-width: ${({ maxWidth }: any) => maxWidth ?? '100%'};
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: auto;
    ${({ isCollapsible }: any) => !!isCollapsible && 'max-width: 100%;'}
  }
`

const StyledRow = styled.div<any>`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Sandbox = () => {
  const theming: ITheming = useSelector(
    ({ theming }: { theming: ITheming }) => theming
  )
  return (
    <Theme {...theming}>
      <StyledColumn>
        <Header />
        <StyledRow>PAGECONTENT</StyledRow>
        <Footer />
      </StyledColumn>
    </Theme>
  )
}

export default Sandbox
