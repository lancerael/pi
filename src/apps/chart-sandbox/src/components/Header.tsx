import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import { useDispatch } from 'react-redux'

import { updateContrast, updateTheme } from '../state/reducers/themingReducer'
import { Logo } from '../images/logo'

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <Banner>
      <h1 style={{ display: 'inline-block' }}>
        <Logo size={42} fill="var(--outline)" /> Chart Sandbox
      </h1>
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
    </Banner>
  )
}
export default Header
