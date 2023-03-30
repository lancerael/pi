import React from 'react'
import { Theme } from '@pi-lib/styles'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { useSelector } from 'react-redux'

import Chart from './Chart'
import Editor from './Editor'
import Header from './Header'

export interface iTheming {
  themeName: ThemeType
  contrast: Contrast
}

const Sandbox = () => {
  const theming: iTheming = useSelector(({ theming }: any) => theming)
  return (
    <Theme {...theming}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ height: '100%', display: 'flex' }}>
          <div
            style={{ width: '40%', display: 'flex', flexDirection: 'column' }}
          >
            <Editor />
          </div>
          <div
            style={{
              flexGrow: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1%',
              gap: '1%',
            }}
          >
            <Chart sId="container-bar-test" sType="bar" />
            <Chart sId="container-line-test" sType="line" />
          </div>
        </div>

        <Header />
      </div>
    </Theme>
  )
}

export default Sandbox
