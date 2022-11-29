import { CandlestickDayData } from '../CandlestickChart.types';
export declare const generateCandlestickData: (daysAgo: number) => {
    company: string;
    dates: CandlestickDayData[];
};
