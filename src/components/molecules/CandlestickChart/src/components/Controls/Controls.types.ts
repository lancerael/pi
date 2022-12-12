export interface ControlsProps {
  zoomLevel: number
  setZoomLevel: (setter: (c: number) => number) => void
  setPanLevel: (setter: (c: number) => number) => void
  visibleRange: any
  length: number
}
