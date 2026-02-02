/**
 * StepperProgress Styles
 * 
 * All values use design tokens from the iGreen Design System.
 * Zero arbitrary values.
 */

export const stepperProgressStyles = {
    container: "flex gap-1.5 overflow-hidden rounded-full w-full",
    step: {
        base: "flex-1 h-1.5 min-h-px min-w-px",
        active: "bg-bg-primary",
        inactive: "bg-bg-muted",
    },
};
