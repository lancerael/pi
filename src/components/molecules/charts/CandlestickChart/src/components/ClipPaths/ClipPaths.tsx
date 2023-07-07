import { AXIS_OFFSETS, CHART_PADDING } from '../../CandlestickChart.constants'
import { ClipPathsProps } from './ClipPaths.types'

export const ClipPaths = ({ width, height }: ClipPathsProps) => {
  const x = CHART_PADDING
  const y = CHART_PADDING
  const baseCoords = {
    x,
    y,
    width: width ? width - AXIS_OFFSETS[1] : 0,
    height: height ? height - AXIS_OFFSETS[0] : 0,
  }
  return (
    <>
      <line
        x1={x}
        y1={y}
        x2={x + baseCoords.width}
        y2={y}
        stroke="var(--border)"
        strokeWidth={1}
      />
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + baseCoords.height - CHART_PADDING}
        stroke="var(--border)"
        strokeWidth={1}
      />
      <defs>
        <clipPath id="chart-contents">
          <rect {...baseCoords} />
        </clipPath>
        <clipPath id="bottom-axis">
          <rect
            {...baseCoords}
            width={baseCoords.width + 15}
            height={`${height}`}
          />
        </clipPath>
      </defs>
    </>
  )
}

export default ClipPaths
