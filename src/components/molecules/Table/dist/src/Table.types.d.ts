import { RowProps } from './components/Row/Row.types';
export interface TableProps {
    headers?: string[];
    tableRows: Omit<RowProps, 'i'>[];
    fixedWidths?: any;
}
