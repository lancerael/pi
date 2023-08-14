import { Selection } from 'd3-selection'

type Timeout = ReturnType<typeof setTimeout>

type D3Div = Selection<HTMLDivElement, unknown, any, undefined>
type D3Svg = Selection<SVGSVGElement, unknown, null, undefined>
type D3Shapes = Selection<SVGRectElement, unknown, null, undefined>
type D3Group = Selection<SVGGElement, unknown, null, undefined>

export type { Timeout, D3Div, D3Svg, D3Shapes, D3Group }
