import React from 'react'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import PageContent from '@pi-lib/page-content'
import { Sidebar } from './Sidebar'

export interface iTheming {
  themeName: ThemeType
  contrast: Contrast
}

export const Main = () => {
  return <PageContent sidebar={<Sidebar />}>CONTENT</PageContent>
}

export default Main
