"use client";

import { Button } from "@/components/shadcn/button";
import { screenStepStyles as styles } from "./screen-step.styles";
import type { ScreenStepActionsConfig } from "./screen-step.types";

/**
 * Internal component to render action buttons from config
 */
export function ScreenStepActionsRenderer({
    layout = "dual",
    onBack,
    backLabel = "Voltar",
    backDisabled = false,
    onNext,
    nextLabel = "Prosseguir",
    nextDisabled = false,
}: ScreenStepActionsConfig) {
    // Single back button layout
    if (layout === "single-back") {
        return (
            <div className={styles.actions.singleBack}>
                <Button
                    variant="default"
                    color="secondary"
                    size="lg"
                    onClick={onBack}
                    disabled={backDisabled}
                    className={styles.actions.singleBackButton}
                >
                    {backLabel}
                </Button>
            </div>
        );
    }

    // Dual layout (default)
    return (
        <div className={styles.actions.dual}>
            <Button
                variant="default"
                color="secondary"
                size="lg"
                onClick={onBack}
                disabled={backDisabled}
                className={styles.actions.backButton}
            >
                {backLabel}
            </Button>
            <Button
                variant="default"
                color="primary"
                size="lg"
                onClick={onNext}
                disabled={nextDisabled}
                className={styles.actions.nextButton}
            >
                {nextLabel}
            </Button>
        </div>
    );
}
