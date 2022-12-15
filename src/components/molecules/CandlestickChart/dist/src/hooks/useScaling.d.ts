import { CandlestickDayData } from '../CandlestickChart.types';
import { ScaleBand } from 'd3-scale';
export declare const useScaling: (data: CandlestickDayData[], sizes: any, visibleRange: any) => {
    utils: {
        scaledHeight: (low: number, high: number) => number;
        scaledY: (low: number, high: number) => number;
    };
    scales: {
        xScale: ScaleBand<string>;
        yScale: (y: number) => number;
    };
};
