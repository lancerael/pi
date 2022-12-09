import { Selection } from 'd3-selection';
export interface CandlestickDayData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    trades: number;
    width?: number;
}
export interface CandlestickChartProps {
    /**
     * The candlestick chart data
     */
    data?: CandlestickDayData[];
}
export declare type SVGSelection = Selection<SVGSVGElement | SVGGElement | null, unknown, null, undefined>;
export declare type BarSelection = Selection<SVGRectElement, CandlestickDayData, SVGSVGElement | SVGGElement | null, unknown>;
export declare type BarType = 'wicks' | 'candles';
export declare type ValueKeys = 'low' | 'high' | 'open' | 'close';
