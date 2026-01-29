"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronRight, Pencil } from "lucide-react";
import { AccordionSelectProps } from "./accordion-select.types";
import { accordionSelectStyles } from "./accordion-select.styles";

export function AccordionSelect({
    options,
    value,
    onValueChange,
    className,
}: AccordionSelectProps) {
    const selectedOption = options.find((opt) => opt.id === value);
    const isExpanded = !value;

    return (
        <div className={cn(accordionSelectStyles.root, className)}>
            {/* Expanded List View */}
            <div
                className={cn(
                    accordionSelectStyles.animation.wrapper,
                    isExpanded ? accordionSelectStyles.animation.expanded : accordionSelectStyles.animation.collapsed
                )}
            >
                <div className={accordionSelectStyles.animation.inner}>
                    <div className={accordionSelectStyles.animation.list}>
                        {options.map((option) => (
                            <div
                                key={option.id}
                                className={accordionSelectStyles.item.base}
                                onClick={() => onValueChange(option.id)}
                            >
                                <div className={accordionSelectStyles.content.wrapper}>
                                    <div className={accordionSelectStyles.iconWrapper.base}>
                                        {option.icon}
                                    </div>
                                    <div className={accordionSelectStyles.text.wrapper}>
                                        <span className={accordionSelectStyles.text.title}>{option.title}</span>
                                        <span className={accordionSelectStyles.text.description}>{option.description}</span>
                                    </div>
                                </div>
                                <div className={accordionSelectStyles.action.wrapper}>
                                    <ChevronRight className={accordionSelectStyles.action.icon} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Item View */}
            <div
                className={cn(
                    accordionSelectStyles.animation.wrapper,
                    !isExpanded ? accordionSelectStyles.animation.expanded : accordionSelectStyles.animation.collapsed
                )}
            >
                <div className={accordionSelectStyles.animation.inner}>
                    {selectedOption && (
                        <div className={cn(accordionSelectStyles.item.base, accordionSelectStyles.item.selectedView)}>
                            <div className={accordionSelectStyles.content.wrapper}>
                                <div className={accordionSelectStyles.iconWrapper.base}>
                                    {selectedOption.icon}
                                </div>
                                <div className={accordionSelectStyles.text.wrapper}>
                                    <span className={accordionSelectStyles.text.title}>{selectedOption.title}</span>
                                    <span className={accordionSelectStyles.text.description}>{selectedOption.description}</span>
                                </div>
                            </div>
                            <div
                                className={accordionSelectStyles.action.editWrapper}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onValueChange(undefined);
                                }}
                                role="button"
                                aria-label="Edit selection"
                            >
                                <Pencil className={accordionSelectStyles.action.icon} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
