export interface ControlsProps {
  setZoomLevel: (setter: (c: number) => number) => void
  setPanLevel: (setter: (c: number) => number) => void
  multiplier: number
}
