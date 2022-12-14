import { CandlestickDayData } from '../CandlestickChart.types';
export declare const formatDate: (date?: string) => string;
export declare const movePrevValue: (val: number, strength?: number) => number;
export declare const generateCandlestickData: (daysAgo: number) => {
    company: string;
    dates: CandlestickDayData[];
};
