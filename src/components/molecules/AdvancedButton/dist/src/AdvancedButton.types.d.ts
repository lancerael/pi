import { PropsWithChildren } from "react";
export interface AdvancedButtonProps extends PropsWithChildren {
    /**
     * Whether the button is in a loading state
     */
    isLoading?: boolean;
}
