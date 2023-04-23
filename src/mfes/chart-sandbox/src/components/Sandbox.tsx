import React from 'react'
import { Theme } from '@pi-lib/styles'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { useSelector } from 'react-redux'

import Chart from './Chart'
import Editor from './Editor'
import styled, { css } from 'styled-components'

export interface iTheming {
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

const StyledChartContainer = styled.div<any>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;

  @media (max-width: 800px) {
    height: calc(225px + 80vw);
  }
`

const Sandbox = () => {
  return (
    <StyledRow>
      <StyledColumn maxWidth="38%" isCollapsible={true}>
        <Editor />
      </StyledColumn>
      <StyledChartContainer>
        <Chart sId="container-bar-test" sType="bar" />
        <Chart sId="container-line-test" sType="line" />
      </StyledChartContainer>
    </StyledRow>
  )
}

export default Sandbox
