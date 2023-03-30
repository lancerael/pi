import React from 'react'
import { Theme } from '@pi-lib/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import Select from '@pi-lib/select'

import { updateContrast, updateTheme } from '../state/reducers/themingReducer'

import Chart from './Chart'
import Editor from './Editor'

export interface iTheming {
  themeName: ThemeType
  contrast: Contrast
}

const Sandbox = () => {
  const theming: iTheming = useSelector(({ theming }: any) => theming)
  const dispatch = useDispatch()
  return (
    <Theme {...theming}>
      <div
        style={{
          background: 'var(--textSoft)',
          color: 'var(--border)',
          display: 'flex',
          padding: '0 16px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ display: 'inline-block' }}>dTheia React Sandbox</h1>
        <div style={{ padding: '16px', display: 'inline-block' }}>
          <Select
            label="Contrast"
            name="contrast"
            onChange={(e: any) => dispatch(updateContrast(e.target.value))}
            options={[
              { value: '', content: 'Default' },
              { content: 'Dark' },
              { content: 'Light' },
            ]}
          />{' '}
          <Select
            label="Theme"
            name="theme"
            onChange={(e: any) => dispatch(updateTheme(e.target.value))}
            options={[
              { content: 'Andro' },
              { content: 'Avocado' },
              { content: 'Electron' },
              { content: 'Pebble' },
              { content: 'Rose' },
            ]}
          />
        </div>
      </div>
      <div style={{ height: '100%', display: 'flex' }}>
        <div style={{ width: '40%', height: '50%' }}>
          <Editor />
        </div>
        <div
          style={{
            flexGrow: '1',
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: '4%',
          }}
        >
          <Chart sId="container-bar-test" sType="bar" />
          <Chart sId="container-line-test" sType="line" />
        </div>
      </div>
    </Theme>
  )
}

export default Sandbox
