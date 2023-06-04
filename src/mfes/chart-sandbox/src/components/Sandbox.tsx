import React from 'react'
import { Scheme } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import PageContent from '@pi-lib/page-content'

import Chart from './Chart'
import Editor from './Editor'

export interface iTheming {
  themeName: ThemeType
  scheme: Scheme
}

const Sandbox = () => {
  return (
    <PageContent sidebar={<Editor />}>
      <Chart chartId="container-bar" chartType="bar" />
      <Chart chartId="container-line" chartType="line" />
    </PageContent>
  )
}

export default Sandbox
