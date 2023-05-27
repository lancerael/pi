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
      <Chart sId="container-bar-test" sType="bar" />
      <Chart sId="container-line-test" sType="line" />
    </PageContent>
  )
}

export default Sandbox
