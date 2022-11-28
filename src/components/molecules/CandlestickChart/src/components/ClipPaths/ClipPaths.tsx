import { AXIS_OFFSETS, CHART_PADDING } from '../../CandlestickChart.constants'
import { ClipPathsProps } from './ClipPaths.types'

export const ClipPaths = ({ width, height }: ClipPathsProps) => (
  <defs>
    <clipPath id="chart-contents">
      <rect
        x="0"
        y="0"
        width={`${width ? width - AXIS_OFFSETS[1] + CHART_PADDING : 0}`}
        height={`${height ? height - AXIS_OFFSETS[0] : 0}`}
      />
    </clipPath>
    <clipPath id="bottom-axis">
      <rect
        x="0"
        y="0"
        width={`${width ? width - AXIS_OFFSETS[1] : 0}`}
        height={`${height}`}
      />
    </clipPath>
  </defs>
)

export default ClipPaths
