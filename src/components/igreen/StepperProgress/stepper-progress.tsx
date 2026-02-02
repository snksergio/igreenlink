import { cn } from "@/lib/utils";
import { stepperProgressStyles as styles } from "./stepper-progress.styles";
import type { StepperProgressProps } from "./stepper-progress.types";

/**
 * StepperProgress
 * 
 * A progress indicator showing step-by-step progression through a multi-step process.
 * Each step bar displays as active (green) or inactive (gray).
 */
export function StepperProgress({
    totalSteps,
    currentStep,
    className,
}: StepperProgressProps) {
    // Ensure valid bounds
    const validTotalSteps = Math.max(1, totalSteps);
    const validCurrentStep = Math.min(Math.max(0, currentStep), validTotalSteps);

    return (
        <div
            className={cn(styles.container, className)}
            role="progressbar"
            aria-valuenow={validCurrentStep}
            aria-valuemin={0}
            aria-valuemax={validTotalSteps}
            aria-label={`Step ${validCurrentStep} of ${validTotalSteps}`}
        >
            {Array.from({ length: validTotalSteps }, (_, index) => {
                const isActive = index < validCurrentStep;
                return (
                    <div
                        key={index}
                        className={cn(
                            styles.step.base,
                            isActive ? styles.step.active : styles.step.inactive
                        )}
                        aria-hidden="true"
                    />
                );
            })}
        </div>
    );
}
