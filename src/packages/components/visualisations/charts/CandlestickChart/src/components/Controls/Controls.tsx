import { ChangeEvent, useCallback, useEffect } from 'react'
import Button from '@pi-lib/button'
import doTransition from '@pi-lib/do-transition'
import Select from '@pi-lib/select'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'
import { ZOOM_RANGE } from '../../CandlestickChart.constants'
import { ChartControls } from '../../CandlestickChart.types'

const zoomSpeed = 0.2
const panSpeed = 250

export const Controls = ({
  controls: {
    setPanLevel,
    setZoomLevel,
    setPeriod,
    panLevel,
    zoomLevel,
    period,
  },
  dataRange: { start, end, length },
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }

  const canPanBack = start > 0
  const canPanForward = end < length && end - start < length
  const canZoomIn = zoomLevel < ZOOM_RANGE[1]
  const canZoomOut = zoomLevel > ZOOM_RANGE[0]

  const panBack = useCallback(() => {
    canPanBack &&
      doTransition({
        values: [panLevel.x],
        targets: [panLevel.x + panSpeed],
        callback: ([x]) => setPanLevel({ ...panLevel, x }),
        intervalId: 'panBack',
      })
  }, [panLevel.x])

  const panForward = useCallback(() => {
    canPanForward &&
      doTransition({
        values: [panLevel.x],
        targets: [panLevel.x - panSpeed],
        callback: ([x]) => setPanLevel({ ...panLevel, x }),
        intervalId: 'panForward',
      })
  }, [panLevel.x])

  const zoomIn = useCallback(
    () =>
      canZoomIn &&
      doTransition({
        values: [zoomLevel],
        targets: [zoomLevel + zoomSpeed],
        callback: ([z]) => setZoomLevel(z),
      }),
    [zoomLevel]
  )

  const zoomOut = useCallback(
    () =>
      canZoomOut &&
      doTransition({
        values: [zoomLevel],
        targets: [zoomLevel - zoomSpeed],
        callback: ([z]) => setZoomLevel(z),
      }),
    [zoomLevel]
  )

  useEffect(() => {
    const keyHandler = ({ key }: { key: string }) => {
      const handlerMap: { [key: string]: () => void } = {
        'ArrowLeft': panBack,
        'ArrowRight': panForward,
        '=': zoomIn,
        '-': zoomOut,
        '+': zoomIn,
        '_': zoomOut,
      }
      handlerMap[key]?.()
    }

    addEventListener('keydown', keyHandler)
    return () => removeEventListener('keydown', keyHandler)
  }, [panLevel, zoomLevel])

  return (
    <StyledControls>
      <Button
        style={buttonStyle}
        isCompact
        onPointerUp={panBack}
        disabled={!canPanBack}
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onPointerUp={zoomOut}
        disabled={!canZoomOut}
      >
        ➖
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onPointerUp={zoomIn}
        disabled={!canZoomIn}
      >
        ➕
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onPointerUp={panForward}
        disabled={!canPanForward}
      >
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
      <Select
        onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
          setPeriod(value as ChartControls['period'])
        }
        value={period}
        options={[
          { content: 'Days', value: 'days' },
          { content: 'Weeks', value: 'weeks' },
          { content: 'Months', value: 'months' },
        ]}
      />
    </StyledControls>
  )
}

export default Controls
