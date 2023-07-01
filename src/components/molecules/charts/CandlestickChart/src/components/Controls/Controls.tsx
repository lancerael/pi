import { useEffect } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

const zoomSpeed = 0.2
const panSpeed = 100

// const animate = (action: string, controls: IControls) => {

// }

export const Controls = ({
  controls: { setPanLevel, setZoomLevel, zoomLevel },
  dataRange: { start, end },
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }

  const panBack = () => setPanLevel((panLevel) => panLevel - panSpeed)

  const panForward = () => setPanLevel((panLevel) => panLevel + panSpeed)

  const zoomOut = () => setZoomLevel((zoomLevel) => zoomLevel - zoomSpeed)

  const zoomIn = () => setZoomLevel((zoomLevel) => zoomLevel + zoomSpeed)

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
  }, [])

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
