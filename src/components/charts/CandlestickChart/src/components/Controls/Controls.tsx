import React, { useCallback, useEffect } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps, IControls } from './Controls.types'

const zoomSpeed = 0.2
const panSpeed = 100

export const Controls = ({
  controls: { zoomLevel },
  setControls,
  visibleRange,
  length,
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }

  const panBack = useCallback(
    () =>
      setControls(({ panLevel, zoomLevel }: IControls) => {
        const newPanLevel = panLevel + panSpeed / zoomLevel
        return {
          panLevel: visibleRange.first <= 0 ? panLevel : newPanLevel,
          zoomLevel,
          transition: true,
        }
      }),
    [visibleRange.first]
  )

  const panForward = useCallback(
    () =>
      setControls(({ panLevel, zoomLevel }: IControls) => {
        const newPanLevel = panLevel - panSpeed / zoomLevel
        return {
          panLevel: newPanLevel > 1 ? newPanLevel : 1,
          zoomLevel,
          transition: true,
        }
      }),
    []
  )

  const zoomOut = useCallback(
    () =>
      setControls(({ panLevel, zoomLevel }: IControls) => ({
        zoomLevel: +(
          zoomLevel - zoomSpeed > 0 ? zoomLevel - zoomSpeed : zoomSpeed / 2
        ).toFixed(2),
        panLevel,
        transition: true,
      })),
    []
  )

  const zoomIn = useCallback(
    () =>
      setControls(({ panLevel, zoomLevel }: IControls) => ({
        zoomLevel: +(
          zoomLevel === zoomSpeed / 2 ? zoomSpeed : zoomLevel + zoomSpeed
        ).toFixed(2),
        panLevel,
        transition: true,
      })),
    []
  )

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
  }, [visibleRange.first])

  return (
    <StyledControls>
      <Button
        {...buttonStyle}
        isCompact
        onPointerUp={panBack}
        disabled={visibleRange.first <= 0}
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
        disabled={
          visibleRange.last >= length - 1 ||
          visibleRange.last - visibleRange.first > length
        }
      >
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
