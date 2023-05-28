import React from 'react'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import PageContent from '@pi-lib/page-content'

import Chart from './Chart'
import Editor from './Editor'

export interface iTheming {
  themeName: ThemeType
  contrast: Contrast
}

const Sandbox = () => {
  return (
    <PageContent sidebar={<Editor />}>
      <Chart chartId="container-bar-test" chartType="bar" />
      <Chart chartId="container-line-test" chartType="line" />
    </PageContent>
  )
}

export default Sandbox
