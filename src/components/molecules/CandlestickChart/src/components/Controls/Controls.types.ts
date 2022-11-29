export interface ControlsProps {
  zoomLevel: number
  setZoomLevel: (setter: (c: number) => number) => void
  setPanLevel: (setter: (c: number) => number) => void
  multiplier: number
  visibleRange: any
  length: number
}
