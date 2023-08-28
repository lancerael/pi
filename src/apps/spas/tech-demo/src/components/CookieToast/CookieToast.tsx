import Button from '@pi-lib/button'
import { CookieToastProps } from './CookieToast.types'

export const CookieToast = ({ callback }: CookieToastProps) => (
  <div
    style={{
      margin: '0 20%',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignContent: 'center',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      Store your preferences on this device?
    </div>
    <div style={{ padding: '0 20%' }}>
      <Button onPointerUp={callback}>Yes please! 🍪</Button>
    </div>
  </div>
)

export default CookieToast
