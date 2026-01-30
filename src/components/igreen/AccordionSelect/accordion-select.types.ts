import { ReactNode } from "react";

export interface AccordionSelectOption {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export interface AccordionSelectProps {
    /**
     * Array of options to display.
     */
    options: AccordionSelectOption[];

    /**
     * Currently selected option ID. Controlled component.
     */
    value?: string;

    /**
     * Callback when selection changes. Passing undefined means deselection (edit mode).
     */
    onValueChange: (value: string | undefined) => void;

    /**
     * Additional CSS classes.
     */
    className?: string;

    /**
     * Whether the component is disabled.
     */
    disabled?: boolean;
}
