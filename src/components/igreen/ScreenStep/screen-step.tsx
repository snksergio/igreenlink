"use client";

import { cn } from "@/lib/utils";
import { screenStepStyles as styles } from "./screen-step.styles";
import { ScreenStepActionsRenderer } from "./screen-step-actions";
import type { ScreenStepProps } from "./screen-step.types";
import { isActionsConfig } from "./screen-step.types";

/**
 * ScreenStep
 * 
 * Internal layout component for individual step content in a multi-step form.
 * Provides step label, title, subtitle, content area, and actions footer.
 * 
 * @example
 * ```tsx
 * // Using built-in buttons (recommended)
 * <ScreenStep
 *   stepLabel="PASSO 1 DE 5"
 *   title={<>Comece enviando <span className="text-fg-primary">sua conta de luz</span></>}
 *   subtitle="Com ela, analisamos seu perfil de consumo"
 *   actions={{ onBack: handleBack, onNext: handleNext, nextDisabled: !isValid }}
 * >
 *   <FormContent />
 * </ScreenStep>
 * 
 * // Using custom buttons
 * <ScreenStep
 *   actions={<MyCustomButtons />}
 * >
 *   <FormContent />
 * </ScreenStep>
 * ```
 */
export function ScreenStep({
    stepLabel,
    title,
    subtitle,
    children,
    actions,
    className,
}: ScreenStepProps) {
    // Render actions based on type
    const renderActions = () => {
        if (!actions) return null;

        if (isActionsConfig(actions)) {
            return <ScreenStepActionsRenderer {...actions} />;
        }

        // It's a ReactNode
        return actions;
    };

    return (
        <div className={cn(styles.container, className)}>
            {/* Header */}
            <header className={styles.header.wrapper}>
                {stepLabel && (
                    <span className={styles.header.stepLabel}>{stepLabel}</span>
                )}
                <div className={styles.header.titleWrapper}>
                    <h1 className={styles.header.title}>{title}</h1>
                    {subtitle && (
                        <p className={styles.header.subtitle}>{subtitle}</p>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className={styles.content}>
                {children}
            </div>

            {/* Actions */}
            {actions && (
                <footer className={styles.actions.wrapper}>
                    {renderActions()}
                </footer>
            )}
        </div>
    );
}
