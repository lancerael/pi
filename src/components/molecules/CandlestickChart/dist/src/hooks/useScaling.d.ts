import { CandlestickDayData } from '../CandlestickChart.types';
import { ScaleBand } from 'd3-scale';
export declare const useScaling: (svgRef: any | null, data: CandlestickDayData[], zoomLevel: number, panLevel: number) => {
    utils: {
        scaledHeight: (low: number, high: number) => number;
        scaledY: (low: number, high: number) => number;
    };
    visibleRange: {
        first: number;
        last: number;
    };
    dimensions: {
        width: number;
        height: number;
        offsetWidth: number;
    };
    scales: {
        xScale: ScaleBand<string>;
        yScale: (y: number) => number;
    };
};
