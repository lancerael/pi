import { ChangeEvent, useCallback, useEffect } from 'react'
import Button from '@pi-lib/button'
import doTransition, { flushTransition } from '@pi-lib/do-transition'
import Select from '@pi-lib/select'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'
import { ZOOM_RANGE } from '../../CandlestickChart.constants'
import { ChartControls } from '../../CandlestickChart.types'

const zoomSpeed = 0.3
const panSpeed = 250

export const Controls = ({
  controls: { setTouchState, touchState, touchStateSignal, setPeriod, period },
  dataRange: { start, end, length },
  resetSelection,
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }

  const canPanBack = start > 0
  const canPanForward = end < length && end - start < length
  const canZoomIn = touchState.zoom < ZOOM_RANGE[1]
  const canZoomOut = touchState.zoom > ZOOM_RANGE[0]

  const pan = useCallback(
    (isForwards?: Boolean) => {
      flushTransition('zoom')
      flushTransition('pan')
      resetSelection()
      doTransition({
        values: [touchState.pan.x],
        targets: [touchState.pan.x + panSpeed * (isForwards ? -1 : 1)],
        callback: ([x]) => {
          setTouchState({ pan: { y: touchStateSignal.value.pan.y, x } })
        },
        intervalId: 'pan',
      })
    },
    [touchState.pan.x]
  )

  const zoom = useCallback(
    (isOut?: Boolean) => {
      const newZoom = touchStateSignal.value.zoom + zoomSpeed * (isOut ? -1 : 1)
      flushTransition('zoom')
      flushTransition('pan')
      resetSelection()
      doTransition({
        values: [touchState.zoom],
        targets: [newZoom],
        callback: ([zoom]) => setTouchState({ zoom }),
        sensitivity: 0.001,
        intervalId: 'zoom',
      })
    },
    [touchState.pan.x, touchState.zoom]
  )

  const panBack = useCallback(() => {
    canPanBack && pan()
  }, [touchState.pan.x])

  const panForward = useCallback(() => {
    canPanForward && pan(true)
  }, [touchState.pan.x])

  const zoomIn = useCallback(
    () => canZoomIn && zoom(),
    [touchState.pan.x, touchState.zoom]
  )

  const zoomOut = useCallback(
    () => canZoomOut && zoom(true),
    [touchState.pan.x, touchState.zoom]
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
  }, [touchState.pan.x, touchState.zoom])

  return (
    <StyledControls>
      <Button
        style={buttonStyle}
        isCompact
        onClick={panBack}
        disabled={!canPanBack}
        isShadowed
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onClick={zoomOut}
        disabled={!canZoomOut}
        isShadowed
      >
        ➖
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onClick={zoomIn}
        disabled={!canZoomIn}
        isShadowed
      >
        ➕
      </Button>
      <Button
        style={buttonStyle}
        isCompact
        onClick={panForward}
        disabled={!canPanForward}
        isShadowed
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
