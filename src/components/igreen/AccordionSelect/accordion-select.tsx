"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { AccordionSelectProps } from "./accordion-select.types";
import { accordionSelectStyles } from "./accordion-select.styles";
import { AccordionSelectList, AccordionSelectedItem } from "./accordion-select.parts";

export function AccordionSelect({
    options,
    value,
    onValueChange,
    className,
    disabled = false,
}: AccordionSelectProps) {
    const selectedOption = React.useMemo(
        () => options.find((opt) => opt.id === value),
        [options, value]
    );

    const isExpanded = !value;

    const handleSelect = React.useCallback((id: string) => {
        if (!disabled) {
            onValueChange(id);
        }
    }, [disabled, onValueChange]);

    const handleClear = React.useCallback(() => {
        if (!disabled) {
            onValueChange(undefined);
        }
    }, [disabled, onValueChange]);

    return (
        <div className={cn(accordionSelectStyles.root.base, className, disabled && accordionSelectStyles.root.disabled)}>
            {/* Expanded List View */}
            <div
                className={cn(
                    accordionSelectStyles.animation.wrapper,
                    isExpanded ? accordionSelectStyles.animation.expanded : accordionSelectStyles.animation.collapsed
                )}
                aria-hidden={!isExpanded}
            >
                <AccordionSelectList options={options} onSelect={handleSelect} />
            </div>

            {/* Selected Item View */}
            <div
                className={cn(
                    accordionSelectStyles.animation.wrapper,
                    !isExpanded ? accordionSelectStyles.animation.expanded : accordionSelectStyles.animation.collapsed
                )}
                aria-hidden={isExpanded}
            >
                {selectedOption && (
                    <AccordionSelectedItem option={selectedOption} onClear={handleClear} />
                )}
            </div>
        </div>
    );
}
