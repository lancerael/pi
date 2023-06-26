import { VisibleRange } from '../../CandlestickChart.types'

export interface IControls {
  zoomLevel: number
  panLevel: number
  transition?: boolean
}

export interface ControlsProps {
  controls: IControls
  setControls: React.Dispatch<React.SetStateAction<IControls>>
  visibleRange: VisibleRange
  length: number
}
