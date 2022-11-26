import { CandlestickDayData } from '../CandlestickChart.types';
import { ScaleBand } from 'd3-scale';
export declare const useScaling: (svgRef: any | null, data: CandlestickDayData[]) => {
    xScale: ScaleBand<string>;
    yScale: (y: number) => number;
    width: number;
    height: number;
    scaledHeight: (low: number, high: number) => number;
    scaledY: (low: number, high: number) => number;
};
