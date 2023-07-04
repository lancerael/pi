import { useEffect } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'
import { doTransition } from '@pi-lib/utils'

const zoomSpeed = 0.2
const panSpeed = 100

export const Controls = ({
  controls: { setPanLevel, setZoomLevel, panLevel, zoomLevel },
  dataRange: { start, end, length },
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }

  const panBack = () => doTransition(panLevel, panLevel + panSpeed, setPanLevel)

  const panForward = () =>
    doTransition(panLevel, panLevel - panSpeed, setPanLevel)

  const zoomOut = () =>
    doTransition(zoomLevel, zoomLevel - zoomSpeed, setZoomLevel)

  const zoomIn = () =>
    doTransition(zoomLevel, zoomLevel + zoomSpeed, setZoomLevel)

  useEffect(() => {
    const keyHandler = ({ key }: { key: string }) => {
      const handlerMap: { [key: string]: () => void } = {
        ArrowLeft: panBack,
        ArrowRight: panForward,
      }
      handlerMap[key]?.()
    }

    addEventListener('keydown', keyHandler)
    return () => removeEventListener('keydown', keyHandler)
  }, [panLevel])

  return (
    <StyledControls>
      <Button
        {...buttonStyle}
        isCompact
        onPointerUp={panBack}
        disabled={start <= 0}
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        {...buttonStyle}
        isCompact
        onPointerUp={zoomOut}
        disabled={zoomLevel < zoomSpeed}
      >
        ➖
      </Button>
      <Button
        {...buttonStyle}
        isCompact
        onPointerUp={zoomIn}
        disabled={zoomLevel >= zoomSpeed * 10}
      >
        ➕
      </Button>
      <Button
        {...buttonStyle}
        isCompact
        onPointerUp={panForward}
        disabled={end >= length - 1 || end - start > length}
      >
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
