import { PanRange } from '@pi-lib/use-touch'
import { DataRange, ChartControls } from '../../CandlestickChart.types'

export interface ControlsProps {
  controls: ChartControls
  dataRange: DataRange
  resetSelection: (e?: UIEvent | undefined) => void
  panRange: React.RefObject<PanRange>
}
