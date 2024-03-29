import { useTheme } from 'styled-components'
import { AppState } from '../state/reducers/candlestickDataReducer.types'

export const Sidebar = ({
  candlestickData,
}: Pick<AppState, 'candlestickData'>) => {
  const { colors } = useTheme()
  const subStyles = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.textStrong,
  } as {}
  const rowStyles = { color: colors.textSoft }
  const { open, close, low, high } =
    candlestickData?.[candlestickData?.length - 1] ?? {}
  return (
    <div style={{ minWidth: '300px' }}>
      <h2 style={{ textTransform: 'uppercase' }}>
        Ace Forest Inc.{' '}
        <span
          style={{
            float: 'right',
            fontWeight: 'bold',
            color: close > open ? 'green' : 'red',
          }}
        >
          {close}
        </span>
      </h2>
      <p style={rowStyles}>
        Sector <span style={{ float: 'right' }}>Technology</span>
      </p>
      <p style={rowStyles}>
        Industry <span style={{ float: 'right' }}>Environmental</span>
      </p>
      <p style={subStyles}>Today's Trading</p>
      <p style={rowStyles}>
        Previous close{' '}
        <span style={{ float: 'right' }}>
          {candlestickData?.[candlestickData?.length - 2]?.close}
        </span>
      </p>
      <p style={rowStyles}>
        Today's open <span style={{ float: 'right' }}>{open}</span>
      </p>
      <p style={rowStyles}>
        Day's range{' '}
        <span style={{ float: 'right' }}>
          {low} - {high}
        </span>
      </p>
      <p style={rowStyles}>
        Volume <span style={{ float: 'right' }}>13,249</span>
      </p>
      <p style={rowStyles}>
        Average volume (3m) <span style={{ float: 'right' }}>109,524</span>
      </p>
      <p style={rowStyles}>
        Market cap <span style={{ float: 'right' }}>$393.2M</span>
      </p>
    </div>
  )
}
