import { PropsWithChildren } from 'react';
export interface TooltipProps extends PropsWithChildren {
    /**
     * The visibility of the tooltip
     */
    isVisible?: boolean;
}
