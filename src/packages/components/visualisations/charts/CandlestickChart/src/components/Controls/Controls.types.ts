import { DataRange, ChartControls } from '../../CandlestickChart.types'

export interface ControlsProps {
  controls: ChartControls
  dataRange: DataRange
  resetSelection: (e?: UIEvent | undefined) => void
}
