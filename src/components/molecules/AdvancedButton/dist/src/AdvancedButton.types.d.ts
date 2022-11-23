import { ButtonProps } from "@pi-lib/button/dist/src/Button.types";
import { PropsWithChildren } from "react";
export interface AdvancedButtonProps extends PropsWithChildren {
    /**
     * Whether the button is in a loading state
     */
    isLoading?: boolean;
    /**
     * Any props to be passed to the internal button
     */
    buttonProps?: ButtonProps;
}
