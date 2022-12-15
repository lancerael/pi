import { CandlestickDayData } from '../../CandlestickChart.types';
export interface CandleTooltipProps {
    item?: CandlestickDayData;
    position?: {
        x: number;
        y: number;
    };
}
