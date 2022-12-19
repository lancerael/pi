import { AXIS_OFFSETS, CHART_PADDING } from '../../CandlestickChart.constants'
import { ClipPathsProps } from './ClipPaths.types'

export const ClipPaths = ({ width, height }: ClipPathsProps) => {
  const baseCoords = {
    x: CHART_PADDING,
    y: CHART_PADDING,
    width: width ? width - AXIS_OFFSETS[1] : 0,
    height: height ? height - AXIS_OFFSETS[0] : 0,
  }
  return (
    <defs>
      <clipPath id="chart-contents">
        <rect {...baseCoords} />
      </clipPath>
      <clipPath id="bottom-axis">
        <rect {...baseCoords} height={`${height}`} />
      </clipPath>
    </defs>
  )
}

export default ClipPaths
