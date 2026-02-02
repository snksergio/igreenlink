/**
 * StepperProgress Component Types
 * 
 * Props for the progress indicator showing step-by-step progression.
 */

export interface StepperProgressProps {
    /** Total number of steps in the progress indicator */
    totalSteps: number;
    /** Current step (1-indexed). Steps 1 through currentStep will be shown as active. */
    currentStep: number;
    /** Additional CSS class for the container */
    className?: string;
}
