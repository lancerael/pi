import Select from '@pi-lib/select'
import { useDispatch } from 'react-redux'

import { updateContrast, updateTheme } from '../state/reducers/themingReducer'

export const Header = () => {
  const dispatch = useDispatch()
  return (
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
  )
}
export default Header
